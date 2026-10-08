import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://d4damage.top',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
