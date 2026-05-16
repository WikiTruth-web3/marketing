import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content-blog/markdown" }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    category: z.string(),
    date: z.string(),
    readTime: z.string(),
    author: z.string(),
    coverImage: z.string().optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
};
