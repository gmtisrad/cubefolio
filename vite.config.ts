import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/client'),
    },
    dedupe: ['@styled-icons/fa-brands', '@styled-icons/boxicons-regular']
  },
  optimizeDeps: {
    include: ['@styled-icons/fa-brands', '@styled-icons/boxicons-regular']
  },
  server: {
    port: 3000,
    proxy: {
      '/api': 'http://localhost:3001'
    }
  },
  build: {
    outDir: 'build'
  }
});
