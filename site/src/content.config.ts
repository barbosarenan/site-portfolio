import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const artigos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/artigos" }),
  schema: z.object({
    titulo: z.string(),
    resumo: z.string(),          // vira a meta description
    data: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    rascunho: z.boolean().default(false),
    capa: z.string().optional(),       // imagem de capa 1200x630 em /public
    atualizado: z.coerce.date().optional(), // data de revisão substancial
  }),
});

export const collections = { artigos };
