import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Client build. The SSG pre-render (scripts/prerender.mjs) runs after this
// and reuses this config to build a server bundle for renderToString.
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    manifest: true,
  },
});
