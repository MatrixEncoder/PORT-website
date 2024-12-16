import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/PORT-website/', // Matches the repo name exactly
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
