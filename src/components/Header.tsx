import { Link } from 'react-router-dom';

export interface HeaderProps {
  lang: 'en' | 'vi';
  languageLabel: string;
  languageHref: string;
}

export function Header({ languageLabel, languageHref }: HeaderProps) {
  return (
    <header>
      <div className="header-inner">
        <a className="brand" href="https://7en.net/">
          <svg width="28" height="28" viewBox="0 0 64 64" aria-hidden="true">
            <path
              d="M14 16 H50 L20 48 H42 L54 34"
              fill="none"
              stroke="#2563EB"
              strokeWidth="9"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>
            Zen<em>Code</em>
          </span>
        </a>
        <nav className="header-nav">
          <Link className="header-link" to={languageHref}>
            {languageLabel}
          </Link>
          <a className="header-link" href="https://github.com/7enlabs/zencode">
            GitHub ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
