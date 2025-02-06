import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    dedupe: ['@styled-icons/fa-brands', '@styled-icons/boxicons-regular']
  },
  optimizeDeps: {
    include: ['@styled-icons/fa-brands', '@styled-icons/boxicons-regular']
  },
  server: {
    port: 3000
  },
  build: {
    outDir: 'build'
  }
});
