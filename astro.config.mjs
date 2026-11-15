// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://link.applipage.com',
  base: '/mygcompany',
  vite: {
    plugins: [tailwindcss()],
  },
});
