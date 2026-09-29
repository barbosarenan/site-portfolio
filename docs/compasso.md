# Case Compasso

Primeiro projeto demonstrativo do portfólio. Empresa, produto e briefing fictícios; entregas implementadas e navegáveis. Não atribuir resultados de negócio nem apresentar como trabalho para cliente.

## Conteúdo e manutenção

- `site/src/dados/compasso.ts`: mensagens das versões, diagnóstico, arquitetura e perguntas.
- `site/src/components/CaseDestaque.astro`: card visual na página inicial.
- `site/src/pages/projetos/compasso/index.astro`: relato do case.
- `site/src/pages/demonstracoes/compasso/[versao].astro`: versões antes/depois do cenário controlado.
- `site/src/pages/materiais/compasso-estudo.md.ts`: download gerado a partir dos mesmos dados do case.

As demonstrações são estáticas, sem coleta de dados. Usam `noindex, follow` e não entram no sitemap. O relato do case permanece indexável. As páginas de expansão da arquitetura são propostas, não links para entregas existentes.

## Verificação local em 26/09/2026

- Instalação com `npm ci` a partir do lockfile existente, sem alterar dependências.
- Compilação Astro concluída: 11 páginas e endpoints estáticos gerados.
- HTML gerado: 114 links locais conferidos, sem destino ou âncora ausente; um H1 por página e IDs únicos.
- Metadados: descrição ausente na versão inicial e presente na proposta, conforme o diagnóstico; ambas com noindex.
- Sitemap: case incluído, demonstrações excluídas.
- Download Markdown gerado com briefing, diagnóstico, arquitetura, metadados e limites do estudo.
- Navegador: página inicial, case e demonstração conferidos; âncora da agenda e expansão de resposta com Enter funcionais.
- Responsividade: case e página inicial sem transbordamento horizontal em 320 e 390 pixels; demonstração conferida em 390 pixels e desktop.
- Nenhum erro de console observado na demonstração durante a verificação local.

Esta verificação não substitui pesquisa com usuários, auditoria completa de acessibilidade ou mensuração de resultados de SEO. A validação do domínio publicado deve ocorrer após a implantação.

## Continuidade

Revisar este primeiro case com Renan antes de produzir os estudos de conteúdo com IA e vídeo previstos no plano. Preservar edições manuais de texto e o posicionamento do site atual.
