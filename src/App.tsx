import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { useSeo } from './components/Seo';
import { en as contentEn } from './content/en';
import { vi as contentVi } from './content/vi';
import { en as i18nEn } from './i18n/en';
import { vi as i18nVi } from './i18n/vi';

export default function App() {
  const { pathname } = useLocation();
  useSeo(pathname);

  return (
    <Routes>
      <Route
        path="/en"
        element={
          <Home
            lang="en"
            content={contentEn}
            languageLabel={i18nEn.languageLabel}
            languageHref={i18nEn.languageHref}
          />
        }
      />
      <Route
        path="/vi"
        element={
          <Home
            lang="vi"
            content={contentVi}
            languageLabel={i18nVi.languageLabel}
            languageHref={i18nVi.languageHref}
          />
        }
      />
      {/* Product site defaults to /en (team rule). */}
      <Route path="/" element={<Navigate to="/en" replace />} />
      <Route path="*" element={<Navigate to="/en" replace />} />
    </Routes>
  );
}
