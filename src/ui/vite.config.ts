import {defineConfig} from 'vite';

export default defineConfig(({mode}) => ({
    define: {
        __ELECTRON__: mode === 'electron'
    },
    build: {
        rollupOptions: {
            input: './src/ui/index.ts',
            output: {
                format: 'iife',
                dir: mode === 'electron' ? './src/ui/dist/electron' : './src/ui/dist/browser',
                entryFileNames: 'index.js',
            }
        }
    },
    server: {
        open: mode === 'electron' ? undefined : '/src/ui/browser/index.html',
        hmr: true,
        port: 5173
    },
}));