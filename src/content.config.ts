import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { skillKeys } from "@data/skills";

// Each folder in src/content/projects/<id>/index.mdx is one project.
// The folder name becomes the id used in URLs (/projects/<id>) and PINNED_PROJECTS.
const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      startDate: z.coerce.date(),
      endDate: z.coerce.date().optional(),
      skills: z.array(z.enum(skillKeys)).default([]),
      demoURL: z.url().optional(),
      repoURL: z.url().optional(),
      /** Relative to the MDX file, e.g. ./preview.png */
      image: image().optional(),
      relatedPosts: z.array(z.string()).optional(),
      draft: z.boolean().default(false),
    }),
});

// Blog posts. Achievement write-ups are posts too; src/data/achievements.ts links to them.
const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      tags: z.array(z.string()).default([]),
      image: image().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects, posts };
