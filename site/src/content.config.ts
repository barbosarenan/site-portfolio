import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const campos = {
    titulo: z.string(),
    resumo: z.string(),          // resumo visível no topo do artigo
    descricao: z.string().optional(), // meta description (até ~155 caracteres); sem ela, usa o resumo
    data: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    rascunho: z.boolean().default(false),
    capa: z.string().optional(),       // imagem de capa 1200x630 em /public
    atualizado: z.coerce.date().optional(), // data de revisão substancial
    ordem: z.number().optional(),      // posição fixa na listagem; segue a ordem dos posts do LinkedIn
};

// Artigos em português (padrão, /artigos/).
const artigos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/artigos" }),
  schema: z.object(campos),
});

// Traduções em inglês (/en/articles/). "pt" aponta para o slug do artigo original.
const articles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/articles" }),
  schema: z.object({ ...campos, pt: z.string() }),
});

export const collections = { artigos, articles };
