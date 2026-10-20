import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE } from '../../data/site';
import { t, href, langInfo, langPaths, type Lang } from '../../i18n';
import { getNews } from '../../lib/content';

export const getStaticPaths = langPaths;

export async function GET(context: APIContext) {
  const lang = context.params.lang as Lang;
  const d = t(lang);
  const news = await getNews(lang);
  return rss({
    title: `${SITE.name} · ${d.nav.news}`,
    description: d.news.metaDescription,
    site: context.site!,
    customData: `<language>${langInfo(lang).hreflang}</language>`,
    items: news.map((n) => ({
      title: n.title,
      description: n.summary,
      pubDate: n.publishedAt,
      link: href(lang, `/news/${n.slug}/`),
      categories: [d.categories[n.category]],
    })),
  });
}
