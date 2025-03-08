import {defineConfig} from 'vite';

export default defineConfig(({mode}) => ({
    define: {
        __ELECTRON__: mode === 'electron'
    },
    build: {
        rollupOptions: {
            input: './src/ui/ui-index.ts',
            output: {
                format: 'iife',
                dir: mode === 'electron' ? './src/ui/dist/electron': './src/ui/dist/browser',
                entryFileNames: 'index.js',
            }
        }
    }
}));