---
titulo: "Como delegar execução à IA sem delegar a decisão"
resumo: "A IA pode pesquisar, organizar e propor versões. O que precisa ficar claro antes do pedido é quem decide o que vale fazer e com qual critério a entrega será avaliada."
data: 2026-09-29
tags: ["ia", "marketing", "processo"]
capa: "/artigos/delegar-execucao-sem-delegar-decisao.jpg"
---

Uso IA para executar partes do meu trabalho em marketing: pesquisar possibilidades, organizar informações, comparar versões de um texto e construir uma primeira solução para um problema. Esses usos me interessam bastante e têm espaço crescente na minha rotina. O que procuro evitar é outra coisa, mais difícil de perceber no dia a dia, que é transferir sem querer a decisão sobre o que vale fazer.

Essa distinção parece óbvia quando escrita, mas se perde com facilidade na prática. Quando a ferramenta devolve uma resposta bem formatada em poucos segundos, a tendência é avaliar a qualidade da resposta e esquecer de avaliar a pergunta.

## Uma entrega pode estar correta e resolver o problema errado

Em marketing, esse risco aparece de várias formas. Um texto pode estar bem escrito e responder a uma pergunta que ninguém fez. Uma página pode funcionar tecnicamente e, ainda assim, deixar a oferta confusa para quem chega pela primeira vez. Uma lista de ideias de pauta pode parecer promissora e não ter relação com a prioridade do projeto naquele trimestre.

Em nenhum desses casos o modelo errou no sentido estrito. Ele cumpriu o pedido. O problema estava antes, na definição do que era uma boa entrega.

Existe um estudo conhecido sobre esse ponto. Em 2023, pesquisadores de Harvard, do MIT e de outras instituições acompanharam 758 consultores do Boston Consulting Group em tarefas realistas de trabalho ([Dell'Acqua et al., 2023](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4573321)). Nas tarefas que estavam dentro da capacidade do modelo, quem usou IA concluiu mais tarefas, trabalhou mais rápido e entregou resultados de qualidade superior ao grupo de controle. Em uma tarefa escolhida para ficar fora dessa capacidade, porém, os consultores com IA tiveram 19 pontos percentuais a menos de chance de chegar à solução correta. Os autores chamaram esse limite irregular de "fronteira tecnológica recortada".

O que tiro desse resultado não é desconfiança da ferramenta. É a necessidade de saber reconhecer quando a tarefa está fora do que ela resolve bem, e isso depende de entender o problema melhor do que a própria resposta.

## O que definir antes de fazer o pedido

Tenho dado mais atenção a três elementos que vêm antes do prompt.

O primeiro é o **contexto**: para quem é a entrega, em que situação ela será usada e qual decisão ela precisa apoiar. A documentação da Anthropic sugere pensar no modelo como um profissional muito capaz, mas recém-chegado, que ainda não conhece as normas e os fluxos da equipe, e recomenda explicar também o motivo de cada instrução ([Anthropic, Prompting best practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices)). A comparação ajuda porque desloca a atenção da formulação perfeita para a informação que falta.

O segundo são as **restrições**: o que não pode mudar, o que precisa ser mantido, quais termos a marca evita, qual formato o canal aceita. Restrições reduzem o espaço de respostas possíveis e tornam mais fácil perceber quando algo saiu do combinado.

O terceiro é o **critério de revisão**. Antes de pedir, tento responder como vou saber se a entrega serve. A mesma documentação, ao tratar de avaliação, recomenda critérios de sucesso específicos, mensuráveis quando possível e relevantes para o objetivo da aplicação ([Anthropic, Define success criteria](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests)). Para uso cotidiano em marketing, isso pode ser algo simples como "cada afirmação numérica precisa ter fonte" ou "o primeiro parágrafo precisa dizer o que o produto faz".

| antes do pedido | pergunta que ajuda |
|---|---|
| contexto | Quem vai usar isso e para tomar qual decisão? |
| restrições | O que não pode mudar e o que está fora do escopo? |
| critério de revisão | Como vou reconhecer uma entrega adequada? |

## Um exemplo de pedido com e sem esses elementos

Um pedido como "crie cinco ideias de post sobre SEO" costuma devolver ideias plausíveis e genéricas. Um pedido que informa o público, o objetivo do perfil, os temas já publicados e o critério de escolha ("priorize ideias que eu consiga demonstrar com um exemplo próprio") devolve menos opções aproveitáveis por acaso e mais opções avaliáveis. A diferença não está na ferramenta, está no que eu soube explicar.

Esse exercício tem um efeito colateral útil. Quando não consigo escrever o critério de revisão, geralmente é sinal de que ainda não entendi o problema o suficiente para delegar qualquer parte dele. Nesse caso, a IA pode ajudar em outra etapa, como organizar o que sei e o que falta descobrir, antes de produzir qualquer versão final.

## Onde fica a decisão

Meu interesse em IA passa por conseguir executar melhor as ideias, com mais velocidade e mais possibilidades para comparar. Quero, ao mesmo tempo, continuar entendendo por que escolhi uma solução e o que preciso conferir antes de usá-la. A execução pode ser compartilhada com a ferramenta. A responsabilidade sobre a escolha continua sendo de quem assina o trabalho.

Para aplicar essa ideia à revisão de textos, escrevi sobre um formato específico de pedido em [Pare de pedir para a IA melhorar seu texto](/artigos/auditoria-antes-de-publicar/).

## Referências

- Dell'Acqua, F. et al. *Navigating the Jagged Technological Frontier: Field Experimental Evidence of the Effects of AI on Knowledge Worker Productivity and Quality*. Harvard Business School Working Paper, 2023. [SSRN](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4573321)
- Anthropic. *Prompting best practices*. Claude Platform Docs, consultado em 29/09/2026. [Link](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices)
- Anthropic. *Define success criteria and build evaluations*. Claude Platform Docs, consultado em 29/09/2026. [Link](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests)
