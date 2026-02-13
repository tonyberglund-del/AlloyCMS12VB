import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    define: {
        'process.env.NODE_ENV': JSON.stringify('production'),
    },
    server: {
        port: 5173,
        proxy: {
            '/api/graphql': {
                target: 'https://latest.cg.optimizely.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api\/graphql/, '/api/graphql'),
                secure: false,
            }
        }
    },
    root: '.',
    build: {
        manifest: true,
        outDir: 'dist',
        emptyOutDir: true,
        lib: {
            entry: path.resolve(__dirname, 'src/index.tsx'),
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
