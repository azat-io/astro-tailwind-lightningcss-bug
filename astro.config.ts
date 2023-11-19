import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  vite: {
    css: {
      transformer: 'lightningcss',
    },
  },
  integrations: [tailwind()],
  srcDir: '.',
});
