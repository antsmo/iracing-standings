// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  redirects: {
    '/iracing-standings': '/iracing-standings/standings/elite',
    '/iracing-standings/standings': '/iracing-standings/standings/elite'
  },
  site: 'https://antsmo.github.io',
  base: '/iracing-standings',
});