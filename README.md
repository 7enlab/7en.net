# 7en.net

7EN Labs main site — ZenCode CLI pilot landing page. React + Vite + TypeScript,
with mandatory SSG pre-render (per the approved plan
`~/workspace/phuong-an-react-ha-tang-mien-phi-7en-labs-2026-11-07.md`, sections
2, 2.3, 3, 5). First implementation of the team's shared React template.

## Routes

- `/en/` — English home (default; `/` redirects here)
- `/vi/` — Vietnamese home (full translation of the pilot content)

Both routes are pre-rendered to real HTML at build time. No other pages yet.

## Run

```sh
npm install
npm run dev      # local dev server
npm run build    # vite build + SSG pre-render -> dist/
npm run preview  # serve dist/ locally
```

## Verify the SSG (do this before any deploy)

```sh
npm run build
grep -o '<title>[^<]*</title>' dist/en/index.html dist/vi/index.html
grep -c 'An open-source coding agent' dist/en/index.html
grep -c 'Coding agent mã nguồn mở' dist/vi/index.html
grep -c 'SoftwareApplication' dist/en/index.html
cat dist/sitemap.xml dist/robots.txt
```

Each route's HTML must contain the real title and body text — not an empty
`<div id="root"></div>` plus a script tag. If a route's HTML is empty, the
build is broken: do not deploy.

## Structure

```
package.json, vite.config.ts, tsconfig.json, index.html (Vite entry)
public/            favicon.png, _redirects (/ -> /en/), _headers
src/
  main.tsx         client entry (hydrateRoot + BrowserRouter)
  entry-server.tsx server entry for pre-render only (renderToString)
  App.tsx          routes /en, /vi, / -> /en
  seo.ts           per-route SEO metadata (single source of truth) + JSON-LD
  components/      Header, Footer, PilotForm (mailto, no backend), Seo
  pages/           Home (hero, pilot, benefits, install, cost, who, apply, FAQ)
  content/         en.ts, vi.ts (full pilot content), types.ts
  i18n/            en.ts, vi.ts (header chrome strings)
  styles/          theme.css (brand blue #2563EB)
scripts/
  prerender.mjs    renders every route to dist/<route>/index.html,
                   writes dist/index.html (redirect), sitemap.xml, robots.txt
```

## Notes

- Dependencies are exactly: react, react-dom, react-router-dom, vite,
  typescript, @vitejs/plugin-react. No other libraries.
- Analytics: the Cloudflare Web Analytics beacon is a clearly-marked
  placeholder comment in the pre-rendered HTML only. Add the real beacon
  (real token from the 7EN Cloudflare account) at deploy time. Never deploy
  with a placeholder token. No Google Analytics (7en.net has no GA ID).
- Pilot signup form has no backend: it opens the visitor's email client with
  a pre-filled mailto to contact@7en.net (same as the old static page).
- Deploy: Cloudflare Pages from GitHub 7enlab/7en.net (not done from here).
