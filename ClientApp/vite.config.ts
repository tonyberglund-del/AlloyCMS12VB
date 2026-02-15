import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    define: {
        'process.env.NODE_ENV': JSON.stringify('production'),
    },
    server: {
        port: 5174,
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
        outDir: '../wwwroot/dist',
        emptyOutDir: true,
        lib: {
            entry: path.resolve(__dirname, 'src/index.tsx'),
            name: 'SearchResultsLib',
            fileName: () => 'search-results.umd.js',
            formats: ['umd'],
            rollupOptions: {
                external: ['react', 'react-dom'], // OBS: Ta bort '@apollo/client' här!
                output: {
                    globals: {
                        react: 'React',
                        'react-dom': 'ReactDOM',
                    },
                },
            }
        },
    },
});
