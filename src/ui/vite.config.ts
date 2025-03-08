import {defineConfig} from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            input: './src/ui/ui-index.ts',
            output: {
                format: 'iife',
                dir: './src/ui/dist',
                entryFileNames: 'index.js',

            }
        }
    }
});