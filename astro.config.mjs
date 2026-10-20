import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Netlify sets URL to the site's primary address at build time.
const site = process.env.URL || 'https://allaboutthailand.netlify.app';

export default defineConfig({
  site,
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !page.includes('/thanks/') })],
});
