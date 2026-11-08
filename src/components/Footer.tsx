import type { PilotContent } from '../content/types';

export function Footer({ content }: { content: PilotContent['footer'] }) {
  return (
    <footer>
      <div className="wrap">
        <p className="tagline">{content.tagline}</p>
        <p>{content.builtBy}</p>
        <nav>
          <a href="https://github.com/7enlabs/zencode">{content.github}</a>
          <a href="https://github.com/7enlabs/zencode/blob/main/LICENSE">{content.license}</a>
          <a href="mailto:contact@7en.net">{content.contact}</a>
        </nav>
      </div>
    </footer>
  );
}
