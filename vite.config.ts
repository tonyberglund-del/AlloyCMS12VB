import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    define: {
        'process.env': JSON.stringify(process.env),
        'process.platform': JSON.stringify(process.platform),
    },
    plugins: [react()],
    root: '.',
    build: {
    manifest: true,
    outDir: 'dist',
    emptyOutDir: true,
    lib: {
      entry: path.resolve(__dirname, 'ClientApp/src/main.tsx'),
      name: 'SearchResultsLib',
      fileName: (format) => `search-results.${format === 'es' ? 'js' : 'umd.js'}`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
