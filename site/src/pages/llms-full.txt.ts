// Todos os artigos em Markdown, num único arquivo, para leitura por assistentes de IA.
import { getCollection } from "astro:content";
import { perfil } from "../dados/perfil";

const fmt = (d) => d.toISOString().slice(0, 10);

export async function GET({ site }) {
  const base = (site ?? new URL(perfil.site)).href.replace(/\/$/, "");
  const artigos = (await getCollection("artigos", ({ data }) => !data.rascunho))
    .sort((a, b) => b.data.data - a.data.data);

  const blocos = artigos.map((a) => `# ${a.data.titulo}

URL: ${base}/artigos/${a.id}/
Autor: ${perfil.nome}
Publicado em: ${fmt(a.data.data)}${a.data.atualizado ? `\nAtualizado em: ${fmt(a.data.atualizado)}` : ""}
Temas: ${a.data.tags.join(", ")}

> ${a.data.resumo}

${(a.body ?? "").trim()}`);

  const texto = `# ${perfil.nome} · artigos completos

> Textos integrais dos artigos publicados em ${base}/artigos/. Índice do site: ${base}/llms.txt

${blocos.join("\n\n---\n\n")}
`;

  return new Response(texto, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
