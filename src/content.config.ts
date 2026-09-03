import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      date: z.coerce.date(),
      tags: z.array(z.string()).default([]),
      cover: image().optional(),
      gallery: z.array(image()).optional(),
      video: z.string().url().optional(),
      // Path under /public/models, e.g. "/models/gripper.glb"
      model: z.string().optional(),
      modelPoster: z.string().optional(),
      links: z
        .object({
          github: z.string().url().optional(),
          demo: z.string().url().optional(),
          paper: z.string().url().optional(),
        })
        .optional(),
      featured: z.boolean().default(false),
    }),
});

const papers = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/papers' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    venue: z.string(),
    date: z.coerce.date(),
    abstract: z.string(),
    // Path under /public/papers, e.g. "/papers/my-paper.pdf"
    pdf: z.string().optional(),
    doi: z.string().url().optional(),
    arxiv: z.string().url().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

export const collections = { projects, papers };
