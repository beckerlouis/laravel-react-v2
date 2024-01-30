import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

export default defineConfig({
  plugins: [
    laravel({
      input: [ 'resources/react/web/web.tsx', 'resources/react/app/app.tsx', 'resources/react/admin/admin.tsx' ],
      ssr: [ 'resources/react/web/ssr.tsx', 'resources/react/app/ssr.tsx', 'resources/react/admin/ssr.tsx' ],
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
      '@app': path.resolve(__dirname, './resources/react/app'),
      '@admin': path.resolve(__dirname, './resources/react/admin'),
    },
  },
  build: { commonjsOptions: { transformMixedEsModules: true }},
});
