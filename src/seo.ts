// Per-route SEO metadata. Shared by the pre-render (head injection) and
// the client (document head updates on route change). One source of truth.
export interface SeoData {
  lang: 'en' | 'vi';
  title: string;
  description: string;
  canonical: string;
  ogLocale: string;
  ogLocaleAlternate: string;
}

const SITE = 'https://7en.net';

export function getSeo(path: string): SeoData {
  if (path === '/vi' || path === '/vi/') {
    return {
      lang: 'vi',
      title: 'Thử nghiệm ZenCode CLI — Mang model của bạn. Trả ít hơn. Tin vào thứ đang chạy.',
      description:
        'ZenCode CLI là coding agent miễn phí, giấy phép MIT. Chúng tôi mời 3–5 đội phát triển dùng thử trên công việc thật trong hai tuần và đo xem nó thực sự tiết kiệm được gì.',
      canonical: `${SITE}/vi/`,
      ogLocale: 'vi_VN',
      ogLocaleAlternate: 'en_US',
    };
  }
  return {
    lang: 'en',
    title: 'ZenCode CLI Pilot — Bring any model. Pay less. Trust what runs.',
    description:
      'ZenCode CLI is a free, MIT-licensed coding agent. We’re inviting 3–5 development teams to use it on real work for two weeks and measure what it actually saves.',
    canonical: `${SITE}/en/`,
    ogLocale: 'en_US',
    ogLocaleAlternate: 'vi_VN',
  };
}

export const SITE_URL = SITE;

// JSON-LD SoftwareApplication for the product home page (both locales).
export function jsonLd(canonical: string): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'ZenCode CLI',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Linux, macOS, Windows',
    softwareVersion: '0.1.0',
    url: canonical,
    author: { '@type': 'Organization', name: '7EN Labs', url: `${SITE}/` },
    license: 'https://github.com/7enlabs/zencode/blob/main/LICENSE',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  });
}
