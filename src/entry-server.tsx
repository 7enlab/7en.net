import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { getSeo, jsonLd } from './seo';

// Server entry used only by scripts/prerender.mjs (never shipped to browsers).
// Returns the rendered body plus the route's SEO metadata.
export function render(url: string) {
  const html = renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
  );
  const seo = getSeo(url);
  return { html, seo, jsonLd: jsonLd(seo.canonical) };
}
