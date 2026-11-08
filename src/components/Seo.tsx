import { useEffect } from 'react';
import { getSeo, jsonLd } from '../seo';

// Updates document head on the client when the route (locale) changes.
// The pre-rendered HTML already carries the same tags for the first paint.
export function useSeo(path: string) {
  useEffect(() => {
    const seo = getSeo(path);
    document.documentElement.lang = seo.lang;
    document.title = seo.title;

    const setMeta = (attr: string, value: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${value}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, value);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };
    setMeta('name', 'description', seo.description);
    setMeta('property', 'og:title', seo.title);
    setMeta('property', 'og:description', seo.description);
    setMeta('property', 'og:url', seo.canonical);
    setMeta('property', 'og:locale', seo.ogLocale);
    setMeta('property', 'og:locale:alternate', seo.ogLocaleAlternate);

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', seo.canonical);

    let ld = document.querySelector('script[data-jsonld="software"]');
    if (!ld) {
      ld = document.createElement('script');
      ld.setAttribute('type', 'application/ld+json');
      ld.setAttribute('data-jsonld', 'software');
      document.head.appendChild(ld);
    }
    ld.textContent = jsonLd(seo.canonical);
  }, [path]);
}
