import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { SITE } from '../data/site';

export async function GET(context: APIContext) {
  const news = (await getCollection('news')).sort((a, b) => +b.data.publishedAt - +a.data.publishedAt);
  return rss({
    title: `${SITE.name} news`,
    description: 'Thailand news that affects foreigners.',
    site: context.site!,
    items: news.map((n) => ({
      title: n.data.title,
      description: n.data.summary,
      pubDate: n.data.publishedAt,
      link: `/news/${n.id}/`,
      categories: [n.data.category],
    })),
  });
}
