import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import commonjs from '@rollup/plugin-commonjs';

export default defineConfig({
  plugins: [
    commonjs({
      transformMixedEsModules: true,

      include: '**/*',
    }),
  ],

  build: {
    lib: {
      name: 'lamejs',
      formats: ['es', 'iife'],
      entry: fileURLToPath(new URL('./src/js/index.js', import.meta.url)),
    },
    rollupOptions: {
      output: {
        exports: 'named',
      },
    },
    outDir: 'dist',
    emptyOutDir: true,
  },
});
