import { diagnostico, arquitetura, versoes } from "../../dados/compasso";

export function GET() {
  const documento = `# Compasso: SEO e arquitetura de conteúdo

Projeto demonstrativo do portfólio de Renan Barbosa.
Empresa, produto e contexto fictícios. Estudo desenvolvido com apoio de IA na estruturação, na redação e no código.

## Briefing

A Compasso é um software fictício de agendamento online para profissionais autônomos que atendem com hora marcada.
O objetivo deste estudo é tornar a oferta compreensível, organizar o conteúdo da página e oferecer um próximo passo coerente.

Público previsto: professores particulares, fotógrafos e prestadores de serviços.
Oferta prevista: cadastro de serviços, organização de horários e acompanhamento de pedidos em uma agenda.
Escopo implementado: página estática de apresentação, navegação interna, agenda ilustrativa e perguntas frequentes.
Fora do escopo: autenticação, reservas reais, pagamentos, envio de mensagens e banco de dados.

## Origem e limites

A versão inicial foi criada para este exercício, com problemas controlados de mensagem e estrutura. Não é um site de cliente.
Não foram utilizados dados de Search Console, volumes de busca, métricas de concorrentes ou pesquisa com usuários.
Serviços e horários da agenda são [ILUSTRATIVO].
As prioridades e os esforços são avaliações qualitativas para o cenário fictício.

## Hipótese de busca

Tema: agendamento online para profissionais autônomos.
Intenção hipotética: avaliar uma solução para organizar horários e atendimentos.
Motivo da escolha: aderência ao produto e ao público do briefing, sem alegação de demanda comprovada.
Validação futura: pesquisar consultas, linguagem dos usuários e resultados de busca antes de expandir a arquitetura.

## Diagnóstico priorizado

${diagnostico.map((item) => `### ${item.id}. ${item.problema}

Prioridade: ${item.prioridade}. Esforço: ${item.esforco}.
Evidência: ${item.evidencia}
Decisão: ${item.decisao}
Verificação: ${item.validacao}
Dependência: ${item.dependencia}`).join("\n\n")}

## Arquitetura proposta

As rotas abaixo são conceituais e pertencem ao produto fictício. Apenas a página inicial está implementada, na área de demonstrações do portfólio.

${arquitetura.map((pagina) => `- ${pagina.rota}: ${pagina.objetivo}. ${pagina.conteudo} Estado: ${pagina.estado}.`).join("\n")}

Decisão: aprofundar recursos e dúvidas na página inicial antes de criar páginas separadas com pouco conteúdo.
Fluxo da página: oferta → funcionamento → agenda ilustrativa → recursos → perguntas frequentes.

## Metadados e mensagem

Título inicial: ${versoes.antes.titulo}
H1 inicial: ${versoes.antes.h1}
Descrição inicial: ausente.

Título proposto: ${versoes.depois.titulo}
H1 proposto: ${versoes.depois.h1}
Descrição proposta: ${versoes.depois.descricao}
Ação principal: ${versoes.depois.acao}.

O título e a descrição são uma proposta editorial implementada no HTML. Buscadores podem exibir outros trechos.
As duas demonstrações usam noindex e ficam fora do sitemap, pois não representam um produto comercial.

## Critérios de aceite

- Produto e público explícitos na abertura da versão proposta.
- Um H1 por página e seções organizadas em H2 e H3.
- Ação principal direcionada à agenda ilustrativa.
- Links internos e perguntas frequentes utilizáveis por teclado.
- Layout utilizável no celular, sem conteúdo cortado.
- Identificação da empresa fictícia e dos dados ilustrativos.
- Nenhuma coleta de dados ou reserva real.

## O que este estudo não comprova

Não há ganho medido de tráfego, conversão, posicionamento ou produtividade.
Uma avaliação de negócio exigiria um produto real, instrumentação, uma base de comparação e acompanhamento.

## Materiais navegáveis

- Case: https://barbosarenan.com.br/projetos/compasso/
- Versão inicial: https://barbosarenan.com.br/demonstracoes/compasso/antes/
- Versão proposta: https://barbosarenan.com.br/demonstracoes/compasso/depois/
`;
  return new Response(documento, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
