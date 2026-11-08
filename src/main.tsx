import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/theme.css';

hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
