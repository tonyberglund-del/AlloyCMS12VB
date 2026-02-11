import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
    define: {
        'process.env': JSON.stringify(process.env),
        'process.platform': JSON.stringify(process.platform),
    },
    plugins: [react()],
    server: {
        proxy: {
            '/graphql': {
                target: 'http://localhost:5000',
                changeOrigin: true,
                secure: false,
            },
        },
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.tsx'),
            name: 'SearchResultsLib',
            fileName: (format) => `search-results.${format === 'es' ? 'js' : 'umd.js'}`,
            formats: ['umd', 'es'],
        },
        outDir: path.resolve(__dirname, '../wwwroot/dist'),
        emptyOutDir: true,
        manifest: true,
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
