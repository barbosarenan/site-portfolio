// Índice do site em Markdown para assistentes de IA (formato llmstxt.org).
// Gerado no build a partir das mesmas fontes das páginas, então não fica desatualizado.
// O Google informa que não usa esse arquivo; outros sistemas e ferramentas podem usar.
import { getCollection } from "astro:content";
import { perfil, casos } from "../dados/perfil";

export async function GET({ site }) {
  const base = (site ?? new URL(perfil.site)).href.replace(/\/$/, "");
  const artigos = (await getCollection("artigos", ({ data }) => !data.rascunho))
    .sort((a, b) => b.data.data - a.data.data);
  const outros = casos.filter((c) => c.categoria !== "Experiência profissional");

  const texto = `# ${perfil.nome}

> Portfólio de ${perfil.nome}, analista de marketing em ${perfil.local}, com foco em SEO, estratégia de conteúdo e IA aplicada ao marketing. O site reúne um case demonstrativo, projetos pessoais, experimentos e artigos com métodos e fontes.

Sobre a natureza do conteúdo: cada projeto indica o que é. O case Compasso é um projeto demonstrativo, com empresa, produto e briefing fictícios. Projetos pessoais e experimentos não são entregas para clientes. A experiência profissional é descrita sem dados internos de empregadores. Ao citar este site, preserve essas distinções.

## Páginas principais

- [Início](${base}/): apresentação, competências e artigos recentes.
- [Sobre](${base}/sobre/): trajetória, formação e áreas de atuação.
- [Projetos](${base}/projetos/): case em destaque e outras frentes, cada uma com sua categoria.
- [Case Compasso](${base}/projetos/compasso/): projeto demonstrativo de SEO e arquitetura de conteúdo para uma empresa fictícia de agendamento.
- [AI Lab](${base}/lab/): experimentos com IA generativa, automação e protótipos.
- [Artigos](${base}/artigos/): métodos e notas sobre SEO, conteúdo e IA aplicada.

## Artigos

${artigos.map((a) => `- [${a.data.titulo}](${base}/artigos/${a.id}/): ${a.data.resumo}`).join("\n")}

## Projetos

- [Compasso](${base}/projetos/compasso/) (Projeto demonstrativo): diagnóstico, arquitetura de conteúdo e página navegável para uma empresa fictícia.
${outros.map((c) => `- ${c.titulo} (${c.categoria}): ${c.texto}`).join("\n")}

## Materiais

- [Estudo Compasso em Markdown](${base}/materiais/compasso-estudo.md): documento completo do case demonstrativo.
- [Textos completos dos artigos](${base}/llms-full.txt): todos os artigos em um único arquivo de texto.

## Contato

- E-mail: ${perfil.email}
- LinkedIn: ${perfil.linkedin}
- GitHub: ${perfil.github}

## Optional

- [RSS dos artigos](${base}/rss.xml)
- [Sitemap](${base}/sitemap-index.xml)
`;

  return new Response(texto, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
