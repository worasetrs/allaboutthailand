import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rehypeLangLinks from './src/lib/rehype-lang-links.mjs';

// Netlify sets URL to the site's primary address at build time.
const site = process.env.URL || 'https://allaboutthailand.netlify.app';

export default defineConfig({
  site,
  trailingSlash: 'always',
  markdown: { rehypePlugins: [rehypeLangLinks] },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/thanks/') && new URL(page).pathname !== '/',
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en', nl: 'nl', de: 'de', sv: 'sv', fi: 'fi', no: 'nb', fr: 'fr', da: 'da', th: 'th', zh: 'zh-Hans', ru: 'ru',
        },
      },
    }),
  ],
});
