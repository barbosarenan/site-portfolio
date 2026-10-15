import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import fs from "node:fs";
import path from "node:path";

// Datas dos artigos para o <lastmod> do sitemap: usa "atualizado" quando existe, senão "data".
// O build roda na pasta "site" (Root Directory da Vercel), então o caminho parte dela.
const datasArtigos = {};
for (const [pasta, prefixo] of [["artigos", "/artigos/"], ["articles", "/en/articles/"]]) {
  const pastaArtigos = path.join(process.cwd(), "src", "content", pasta);
  for (const arquivo of fs.existsSync(pastaArtigos) ? fs.readdirSync(pastaArtigos) : []) {
    if (!arquivo.endsWith(".md")) continue;
    const texto = fs.readFileSync(path.join(pastaArtigos, arquivo), "utf8");
    const frontmatter = texto.split("---")[1] ?? "";
    const data = (frontmatter.match(/^atualizado:\s*(\S+)/m) ?? frontmatter.match(/^data:\s*(\S+)/m) ?? [])[1];
    if (data) datasArtigos[prefixo + arquivo.replace(/\.md$/, "") + "/"] = new Date(data).toISOString();
  }
}

export default defineConfig({
  site: "https://barbosarenan.com.br",
  trailingSlash: "always",
  integrations: [sitemap({
    // Fora do sitemap: demonstrações (noindex), a página de serviços (noindex) e arquivos que não são HTML.
    filter: (page) => {
      const caminho = new URL(page).pathname;
      return !caminho.startsWith("/demonstracoes/") && caminho !== "/servicos/" && !/\.(txt|xml|md)$/.test(caminho);
    },
    serialize: (item) => {
      const caminho = new URL(item.url).pathname;
      if (datasArtigos[caminho]) item.lastmod = datasArtigos[caminho];
      return item;
    },
  })],
});
