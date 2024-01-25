import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

export default defineConfig({
  plugins: [
    laravel({
      input: [ 'resources/react/web/web.tsx' ],
      ssr: [ 'resources/react/web/ssr.tsx' ],
      refresh: true,
    }),
    react(),
    tsconfigPaths(),
  ],
  define: {
    'process.env': {},
    'global.env': {},
  },
  resolve: {
    alias: {
      '@gen': path.resolve(__dirname, './resources/react/gen'),
      '@types': path.resolve(__dirname, './resources/react/types'),
      '@kit': path.resolve(__dirname, './resources/react/kit'),
      '@vendor': path.resolve(__dirname, './vendor'),
      '@web': path.resolve(__dirname, './resources/react/web'),
    },
  },
  build: { commonjsOptions: { transformMixedEsModules: true }},
});
