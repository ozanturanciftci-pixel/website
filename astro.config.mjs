import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

export default defineConfig({
  output: 'server',
  adapter: node({ mode: 'standalone' }),
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
