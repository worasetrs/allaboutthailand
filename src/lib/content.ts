import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n';

const split = (id: string) => {
  const i = id.indexOf('/');
  return { lang: id.slice(0, i), slug: id.slice(i + 1) };
};

/** A guide in the requested language, with shared fields taken from the English original. */
export type Guide = {
  slug: string;
  entry: CollectionEntry<'guides'>; // the entry whose body is rendered
  translated: boolean;
  title: string;
  summary: string;
  path: NonNullable<CollectionEntry<'guides'>['data']['path']>;
  order: number;
  tldr?: CollectionEntry<'guides'>['data']['tldr'];
  sources: { name: string; url: string }[];
  lastChecked: Date;
  offline: boolean;
};

export async function getGuides(lang: Lang): Promise<Guide[]> {
  const all = await getCollection('guides');
  const byKey = new Map(all.map((e) => [e.id, e]));
  return all
    .filter((e) => split(e.id).lang === 'en')
    .map((base) => {
      const { slug } = split(base.id);
      const local = byKey.get(`${lang}/${slug}`);
      const entry = local ?? base;
      const b = base.data;
      return {
        slug,
        entry,
        translated: Boolean(local),
        title: entry.data.title,
        summary: entry.data.summary,
        path: b.path!,
        order: b.order ?? 50,
        tldr: entry.data.tldr ?? b.tldr,
        sources: b.sources ?? [],
        lastChecked: b.lastChecked!,
        offline: b.offline ?? false,
      };
    })
    .sort((a, b) => a.order - b.order);
}

export type NewsItem = {
  slug: string;
  entry: CollectionEntry<'news'>;
  translated: boolean;
  title: string;
  summary: string;
  category: NonNullable<CollectionEntry<'news'>['data']['category']>;
  severity: 'info' | 'important' | 'urgent';
  publishedAt: Date;
  updatedAt?: Date;
  affects: string[];
  image?: CollectionEntry<'news'>['data']['image'];
  imageAlt?: string;
  sources: { name: string; url: string }[];
};

export async function getNews(lang: Lang): Promise<NewsItem[]> {
  const all = await getCollection('news');
  const byKey = new Map(all.map((e) => [e.id, e]));
  return all
    .filter((e) => split(e.id).lang === 'en')
    .map((base) => {
      const { slug } = split(base.id);
      const local = byKey.get(`${lang}/${slug}`);
      const entry = local ?? base;
      const b = base.data;
      return {
        slug,
        entry,
        translated: Boolean(local),
        title: entry.data.title,
        summary: entry.data.summary,
        category: b.category!,
        severity: b.severity ?? 'info',
        publishedAt: b.publishedAt!,
        updatedAt: b.updatedAt,
        affects: entry.data.affects ?? b.affects ?? [],
        image: b.image,
        imageAlt: entry.data.imageAlt ?? b.imageAlt,
        sources: b.sources ?? [],
      };
    })
    .sort((a, b) => +b.publishedAt - +a.publishedAt);
}
