import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  site: 'https://www.turanciftcilaw.com',
  integrations: [tailwind(), sitemap()],
  vite: {
    server: {
      watch: {
        ignored: ['**/data/*.db']
      }
    }
  }
});
