import { z, defineCollection } from "astro:content";

// Every collection must reflect Decap's config.yml collection schema
// In order to be able to optimize images with Astro built-in compoments, like <Image />, we first must use this image helper
// Doc: https://docs.astro.build/en/guides/images/#images-in-content-collections

const blogsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      author: z.string(),
      date: z.date(),
      tags: z.array(z.string()),
      image: image(),
      imageAlt: z.string(),
      isFrontPage: z.boolean(),
      linkTitle: z.string(),
      blogLabel: z.string(),
    }),
});

const servicesCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    description: z.string(),

    faqItems: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
      })
    ),
    aboutSection: z.object({
      heading: z.string(),
      content: z.string(),
      headerImg: z.string(),
    }),
    masonryLayout: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        img: z.string().optional(),
        alt: z.string().optional(),
      })
    ),
    aboutList: z.string().optional(),
    cta: z.object({
      title: z.string(),
      description: z.string(),
      buttonText: z.string(),
      buttonLink: z.string(),
    }),
  }),
});

export const collections = {
  blog: blogsCollection,
  services: servicesCollection,
};
