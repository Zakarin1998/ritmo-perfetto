import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Percorsi relativi: il sito funziona anche pubblicato in una sottocartella
  // (per esempio su GitHub Pages sotto /ritmo-perfetto/).
  base: './',
  plugins: [react()],
});
