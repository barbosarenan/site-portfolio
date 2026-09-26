# Direção editorial

Implementada em 26 de setembro de 2026.

- Tipografia serifada nos títulos, paleta de papel e verde, com variante escura conforme a preferência do sistema.
- Página inicial: apresentação, case, competências com exemplos, perfil, artigos e contato.
- Projetos e laboratório reunidos pela navegação de `/projetos/`. URLs anteriores preservadas.
- Textos de perfil, artigos e serviços preservados. Experiência profissional transferida da página inicial para Sobre.
- Setas removidas de blocos sem destino. GitHub mantido em `https://github.com/barbosarenan`.
- Datas editoriais formatadas em UTC para preservar o dia declarado no Markdown.
- Nenhuma dependência ou JavaScript de interface adicionado.

## Validação

Build Astro: 12 páginas. Verificação estática: 122 links internos, um H1 por página, IDs únicos, sitemap com Projetos e sem demonstrações. Demonstrações continuam com noindex.

Navegação no navegador: página inicial, projetos, case, perfil, artigos, artigo, serviços e laboratório. Sem rolagem horizontal nas larguras verificadas de 320, 390 e 1440 pixels. Revisão visual executada no tema escuro do sistema; tema claro definido por CSS, sem inspeção visual nesta sessão.
