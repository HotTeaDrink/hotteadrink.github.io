import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/hotteadrink.github.io/',
  plugins: [react()
],
  optimizeDeps: {
    include: ['lucide-react','react', 'react-dom'],
  },
  server: {
    cors: true,
  }
});
