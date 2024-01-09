import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

export default defineConfig({
  plugins: [
    laravel({
      input: 'resources/react/web/app.tsx',
      ssr: 'resources/react/web/ssr.tsx',
      refresh: true,
    }),
    react(),
    tsconfigPaths(),
  ],
  resolve: { alias: { '@kit': path.resolve(__dirname, './resources/react/kit') }},
});
