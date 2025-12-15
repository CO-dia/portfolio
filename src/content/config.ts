// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    excerpt: z.string(),
    tags: z.array(z.string()).optional(),
  }),
})

const ctfCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    difficulty: z.enum(['Easy', 'Medium', 'Hard']),
    date: z.date().optional(),
    timeSpent: z.string().optional(),
    link: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
})

// 4. Export a single `collections` object to register your collection(s)
export const collections = { blog, ctf: ctfCollection }
