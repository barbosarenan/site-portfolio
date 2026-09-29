import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://barbosarenan.com.br",
  trailingSlash: "always",
  integrations: [sitemap({
    // Fora do sitemap: demonstrações (noindex) e arquivos que não são páginas HTML.
    filter: (page) => {
      const caminho = new URL(page).pathname;
      return !caminho.startsWith("/demonstracoes/") && !/\.(txt|xml|md)$/.test(caminho);
    },
  })],
});
