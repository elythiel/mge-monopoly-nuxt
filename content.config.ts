import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    board: defineCollection({
      type: 'page',
      source: 'card/**.md',
      schema: z.object({
        color: z.string().optional(),
        duration: z.string().optional(),
        header: z.string().optional(),
        title: z.string(),
        location: z.string().optional(),
        footer: z.string().optional(),
        period: z.string().optional(),
        card: z.boolean().optional(),
        image: z
          .object({
            name: z.string(),
            alt: z.string(),
            size: z.enum(['sm', 'md', 'lg', 'xl']).optional(),
          })
          .optional(),
      }),
    }),
    pages: defineCollection({
      type: 'page',
      source: '*.md',
      schema: z.object({
        title: z.string(),
      }),
    }),
  },
})
