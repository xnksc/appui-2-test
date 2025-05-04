import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

const atAlias = new URL('./src/', import.meta.url).pathname;
const outputDir = path.resolve(__dirname, './dist');

export default defineConfig({
  root: 'src',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Здесь мы определяем алиас '@' как корень 'src'
    },
  },
  optimizeDeps: {
    exclude: ['csstype'],
  },
  preview: {
    allowedHosts: ['my-awesome-project.imbalanced.tech'],
  },
  build: {
    outDir: outputDir,
  },
});
