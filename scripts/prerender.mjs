// SSG pre-render for 7en.net.
// Runs after `vite build` (see package.json "build").
// For every route it renders the React app to a real HTML string with
// react-dom/server renderToString, then writes a complete HTML file into
// dist/ (so crawlers and link previews see the title + body text, not an
// empty div + script). Also generates sitemap.xml and robots.txt.
// The client bundle then hydrates the pre-rendered HTML in the browser.
//
// Analytics slot: the Cloudflare Web Analytics beacon is NOT active here.
// The pre-rendered HTML carries only a clearly-marked placeholder comment.
// Add the real beacon (with the real token from the 7EN Cloudflare
// account) at deploy time. Never deploy with a placeholder token.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { build } from 'vite';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'dist');
const ssrDir = path.join(root, '.ssr');
const SITE = 'https://7en.net';

const ROUTES = ['/en', '/vi'];

const escapeHtml = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// 1. Build the server bundle (entry-server.tsx) with Vite's SSR build.
await build({
  configFile: path.join(root, 'vite.config.ts'),
  build: {
    ssr: 'src/entry-server.tsx',
    outDir: '.ssr',
    emptyOutDir: true,
    minify: false,
  },
  logLevel: 'warn',
});

const { render } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);

// 2. Read the client manifest to find the hashed JS/CSS assets.
// Vite records the HTML entry under the "index.html" key.
const manifest = JSON.parse(fs.readFileSync(path.join(outDir, '.vite', 'manifest.json'), 'utf8'));
const clientEntry = manifest['index.html'];
if (!clientEntry || !clientEntry.file) {
  throw new Error('Client manifest is missing index.html entry; cannot pre-render.');
}
const clientJs = `/${clientEntry.file}`;
const clientCss = (clientEntry.css || []).map((f) => `/${f}`);

function documentFor(route, rendered) {
  const { html, seo, jsonLd } = rendered;
  const cssLinks = clientCss.map((href) => `    <link rel="stylesheet" href="${href}" />`).join('\n');
  return `<!doctype html>
<html lang="${seo.lang}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(seo.title)}</title>
    <meta name="description" content="${escapeHtml(seo.description)}" />
    <link rel="canonical" href="${seo.canonical}" />
    <link rel="alternate" hreflang="en" href="${SITE}/en/" />
    <link rel="alternate" hreflang="vi" href="${SITE}/vi/" />
    <link rel="alternate" hreflang="x-default" href="${SITE}/en/" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${escapeHtml(seo.title)}" />
    <meta property="og:description" content="${escapeHtml(seo.description)}" />
    <meta property="og:url" content="${seo.canonical}" />
    <meta property="og:locale" content="${seo.ogLocale}" />
    <meta property="og:locale:alternate" content="${seo.ogLocaleAlternate}" />
    <meta property="og:site_name" content="7EN Labs" />
    <link rel="icon" type="image/png" href="/favicon.png" />
${cssLinks}
    <script type="application/ld+json" data-jsonld="software">${jsonLd}</script>
    <!--
      PLACEHOLDER - Cloudflare Web Analytics beacon goes here at deploy time.
      Add the real beacon with the real site token from the 7EN Cloudflare
      account. Do NOT deploy with a placeholder or invented token.
        <script defer src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "REAL_TOKEN_HERE"}'></script>
      No Google Analytics on this site (no GA ID for 7en.net).
    -->
  </head>
  <body>
    <div id="root">${html}</div>
    <script type="module" src="${clientJs}"></script>
  </body>
</html>
`;
}

// 3. Render each route and write dist/<route>/index.html.
for (const route of ROUTES) {
  const rendered = render(route);
  const dir = path.join(outDir, route);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), documentFor(route, rendered));
  console.log(`pre-rendered ${route}/ -> ${path.relative(root, path.join(dir, 'index.html'))}`);
}

// 4. Root page: static redirect to /en/ (product site defaults to /en).
// Cloudflare Pages also applies public/_redirects; this file is the fallback
// for previews that do not apply _redirects.
fs.writeFileSync(
  path.join(outDir, 'index.html'),
  `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="refresh" content="0; url=/en/" />
    <link rel="canonical" href="${SITE}/en/" />
    <title>7EN Labs — ZenCode CLI</title>
  </head>
  <body>
    <p><a href="/en/">Continue to the English version</a> · <a href="/vi/">Tiếng Việt</a></p>
  </body>
</html>
`,
);

// 5. sitemap.xml (with hreflang alternates) + robots.txt.
const urls = ROUTES.map(
  (r) => `  <url>
    <loc>${SITE}${r}/</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${SITE}/en/" />
    <xhtml:link rel="alternate" hreflang="vi" href="${SITE}/vi/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}/en/" />
  </url>`,
).join('\n');
fs.writeFileSync(
  path.join(outDir, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`,
);
fs.writeFileSync(
  path.join(outDir, 'robots.txt'),
  `User-agent: *
Allow: /
Sitemap: ${SITE}/sitemap.xml
`,
);

// 6. Clean up the temporary server bundle.
fs.rmSync(ssrDir, { recursive: true, force: true });
console.log('pre-render done: sitemap.xml + robots.txt written.');
