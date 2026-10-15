// Índice do site em Markdown para assistentes de IA (formato llmstxt.org).
// Gerado no build a partir das mesmas fontes das páginas, então não fica desatualizado.
// O Google informa que não usa esse arquivo; outros sistemas e ferramentas podem usar.
import { getCollection } from "astro:content";
import { perfil, casos } from "../dados/perfil";

export async function GET({ site }) {
  const base = (site ?? new URL(perfil.site)).href.replace(/\/$/, "");
  const artigos = (await getCollection("artigos", ({ data }) => !data.rascunho))
    .sort((a, b) => b.data.data - a.data.data);
  const articles = (await getCollection("articles", ({ data }) => !data.rascunho))
    .sort((a, b) => (a.data.ordem ?? 999) - (b.data.ordem ?? 999));
  const outros = casos.filter((c) => c.categoria !== "Experiência profissional" && c.categoria !== "Case profissional");

  const texto = `# ${perfil.nome}

> Portfólio de ${perfil.nome}, analista de marketing em ${perfil.local}, com foco em SEO, estratégia de conteúdo e IA aplicada ao marketing. O site reúne dois cases profissionais (sem identificar a empresa), um case demonstrativo, projetos pessoais, experimentos com código no GitHub, artigos com métodos e fontes e uma página de serviços freelance (sites, SEO, GEO e AEO e edição de vídeo).

Sobre a natureza do conteúdo: cada projeto indica o que é. Os cases "Site institucional B2B" e "Artigos no Google e na IA" descrevem trabalhos reais, sem nome da empresa nem métricas. O case Compasso é um projeto demonstrativo, com empresa, produto e briefing fictícios. Projetos pessoais e experimentos não são entregas para clientes. A experiência profissional é descrita sem dados internos de empregadores. Ao citar este site, preserve essas distinções.

## Páginas principais

- [Início](${base}/): apresentação, competências e artigos recentes.
- [Sobre](${base}/sobre/): quem é Renan Barbosa, trajetória, formação e interesses.
- [Projetos](${base}/projetos/): case em destaque e outras frentes, cada uma com sua categoria.
- [Case site institucional B2B](${base}/projetos/site-institucional/): redesign real de um site WordPress de uma empresa B2B de tecnologia, com escopo e decisões, sem dados da empresa.
- [Case artigos no Google e na IA](${base}/projetos/artigos-seo-geo/): acompanhamento mensal e otimização de cerca de 20 artigos B2B em SEO, GEO e AEO, sem dados da empresa nem métricas.
- [Serviços freelance](${base}/servicos/): criação de sites, SEO, GEO e AEO e edição de vídeo (verticais, YouTube, institucional), com orçamento por e-mail.
- [Case Compasso](${base}/projetos/compasso/): projeto demonstrativo de SEO e arquitetura de conteúdo para uma empresa fictícia de agendamento.
- [AI Lab](${base}/lab/): experimentos com IA generativa, automação e protótipos, com links para os repositórios no GitHub.
- [Artigos](${base}/artigos/): métodos e notas sobre SEO, conteúdo e IA aplicada.

## Artigos

${artigos.map((a) => `- [${a.data.titulo}](${base}/artigos/${a.id}/): ${a.data.resumo}`).join("\n")}

## Projetos

- [Site institucional B2B](${base}/projetos/site-institucional/) (Case profissional): estrutura de conteúdo, tema próprio, SEO técnico e performance.
- [Artigos no Google e na IA](${base}/projetos/artigos-seo-geo/) (Case profissional): acompanhamento mensal, ajustes on-page, links internos, estrutura para IA e atualização de conteúdo.
- [Compasso](${base}/projetos/compasso/) (Projeto demonstrativo): diagnóstico, arquitetura de conteúdo e página navegável para uma empresa fictícia.
${outros.map((c) => `- ${c.titulo} (${c.categoria}): ${c.texto}`).join("\n")}

## Materiais

- [Estudo Compasso em Markdown](${base}/materiais/compasso-estudo.md): documento completo do case demonstrativo.
- [Textos completos dos artigos](${base}/llms-full.txt): todos os artigos em um único arquivo de texto.

## English version

The site is also available in English. Articles are translations of the Portuguese originals.

- [Home (English)](${base}/en/)
- [About](${base}/en/about/)
- [Projects](${base}/en/projects/)
- [B2B institutional website case](${base}/en/projects/institutional-website/)
- [Articles in search and AI case](${base}/en/projects/seo-geo-articles/)
- [Freelance services](${base}/en/services/)
- [AI Lab](${base}/en/lab/)
- [Articles](${base}/en/articles/)
${articles.map((a) => `- [${a.data.titulo}](${base}/en/articles/${a.id}/): ${a.data.resumo}`).join("\n")}

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
