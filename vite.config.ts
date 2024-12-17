import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/PORT-website/', // Ensure this matches your repository name
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
