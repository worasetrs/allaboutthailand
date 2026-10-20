import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const source = z.object({ name: z.string(), url: z.string().url() });

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string().max(80),
    summary: z.string().max(170),
    path: z.enum(['first-trip', 'visa', 'living', 'work', 'retire', 'culture']),
    order: z.number().default(50),
    tldr: z
      .object({
        who: z.string(),
        cost: z.string(),
        where: z.string(),
        time: z.string().optional(),
      })
      .optional(),
    sources: z.array(source).min(1),
    lastChecked: z.coerce.date(),
    offline: z.boolean().default(false),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    summary: z.string().max(200),
    category: z.enum(['immigration', 'advisory', 'economy', 'events', 'transport', 'safety']),
    severity: z.enum(['info', 'important', 'urgent']).default('info'),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    affects: z.array(z.string()).default([]),
    sources: z.array(source).min(1),
  }),
});

export const collections = { guides, news };
