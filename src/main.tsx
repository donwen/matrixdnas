import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import IntegrationsPage from './pages/IntegrationsPage.tsx';
import DNAPage from './pages/DNAPage.tsx';
import { ThemeProvider } from './components/ThemeProvider.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <DNAPage />
    </ThemeProvider>
  </StrictMode>
);