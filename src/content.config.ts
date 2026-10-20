import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Files live in <collection>/<lang>/<slug>.md. The English file is the source of truth:
// translations only need title, summary and body (plus tldr / affects); everything else
// (sources, dates, category, image) is read from the English file.
const source = z.object({ name: z.string(), url: z.string().url() });

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string().max(90),
    summary: z.string().max(220),
    path: z.enum(['first-trip', 'visa', 'living', 'work', 'retire', 'culture']).optional(),
    order: z.number().optional(),
    tldr: z.object({ who: z.string(), cost: z.string(), where: z.string(), time: z.string().optional() }).optional(),
    sources: z.array(source).optional(),
    lastChecked: z.coerce.date().optional(),
    offline: z.boolean().optional(),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string().max(260),
      category: z.enum(['immigration', 'advisory', 'economy', 'events', 'transport', 'safety']).optional(),
      severity: z.enum(['info', 'important', 'urgent']).optional(),
      publishedAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      affects: z.array(z.string()).optional(),
      image: image().optional(),
      imageAlt: z.string().optional(),
      sources: z.array(source).optional(),
    }),
});

export const collections = { guides, news };
