// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  redirects: {
    '/': '/standings/elite',
    '/standings': '/standings/elite'
  },
  site: 'https://antsmo.github.io',
  base: '/iracing-standings',
});