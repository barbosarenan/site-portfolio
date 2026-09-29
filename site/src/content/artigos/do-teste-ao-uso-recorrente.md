---
titulo: "Do teste ao uso recorrente: o que muda quando a IA entra na rotina"
resumo: "Um bom resultado em uma conversa mostra uma possibilidade. Para incorporar a IA a um processo de marketing, é preciso definir entrada, conferência da saída e caminho para corrigir falhas."
data: 2026-09-29
tags: ["ia", "processo", "revisão"]
capa: "/artigos/do-teste-ao-uso-recorrente.jpg"
---

Existe uma diferença grande entre testar IA e colocar IA para trabalhar. Um bom resultado em uma conversa pode ser suficiente para descobrir uma possibilidade. Para transformar aquilo em parte de uma rotina, porém, outras perguntas passam a importar, e quase nenhuma delas é respondida pelo teste inicial.

## As perguntas que o teste não responde

Quando penso em levar um uso de IA para o trabalho recorrente, começo por quatro perguntas.

**Que informação entra?** Um teste costuma funcionar com um exemplo escolhido, bem formatado e completo. No uso real, a entrada chega incompleta, em formatos variados e com contexto faltando.

**Quem confere a saída?** Se ninguém tem a responsabilidade definida de revisar o que a ferramenta devolve, a revisão tende a desaparecer justamente quando o volume aumenta.

**O que acontece quando falta contexto?** O modelo raramente responde "não sei". Com informação insuficiente, ele costuma produzir algo plausível, e isso é mais difícil de detectar do que um erro evidente.

**Como percebo que a resposta está errada?** Sem um critério definido antes, a avaliação vira impressão.

## Delimitar a tarefa torna a saída conferível

A revisão de conteúdo é um bom exemplo. "Melhore este texto" deixa quase tudo em aberto: o que deve mudar, o que deve ser preservado, qual é o problema a resolver. O resultado é uma nova versão, e para avaliá-la preciso descobrir o que mudou e se a mudança fazia sentido.

Um pedido como "identifique afirmações sem fonte, cite o trecho exato e explique a dúvida" delimita melhor a tarefa. A saída passa a ser uma lista de pontos verificáveis, cada um ligado a um trecho do texto. Descrevi esse formato com mais detalhes em [Pare de pedir para a IA melhorar seu texto](/artigos/auditoria-antes-de-publicar/).

A documentação da Anthropic sobre avaliação de aplicações com modelos de linguagem segue a mesma lógica em escala maior. Ela recomenda definir critérios de sucesso específicos e relevantes antes de ajustar o prompt, montar casos de teste que reflitam a distribuição real das tarefas, incluindo situações de borda, e escolher a forma de correção adequada a cada critério. A correção humana aparece como a mais flexível e de maior qualidade, embora mais lenta ([Anthropic, Define success criteria and build evaluations](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests)). Mesmo sem montar uma avaliação formal, a pergunta de fundo serve para qualquer uso recorrente: com quais exemplos eu sei que isto funciona, e com quais não sei?

## A crítica também precisa ser verificada

Delimitar a tarefa não elimina o erro. O modelo pode apontar um problema que não existe ou deixar passar algo importante. Um número sem fonte não é necessariamente falso, e uma contradição aparente pode se resolver com o contexto que a ferramenta não tem.

Por isso, a etapa de verificação continua existindo, apenas muda de natureza. Em vez de comparar duas versões inteiras de um texto, a pessoa revisora examina críticas pontuais e decide o que aceitar. Isso tende a ser mais rápido e deixa a decisão mais visível.

## Uma estrutura mínima para o uso recorrente

Quando vou incorporar um uso de IA a um processo, tento deixar três elementos escritos.

| elemento | exemplo na revisão de conteúdo |
|---|---|
| entrada adequada | texto final com público, objetivo e fontes indicados |
| entrega conferível | lista de problemas com trecho citado e justificativa |
| caminho para falhas | quem revisa, o que fazer quando a crítica está errada, quando voltar ao processo manual |

Esse registro não precisa ser elaborado. Um parágrafo em um documento compartilhado ou um modelo de pedido salvo já permite que outra pessoa use o mesmo processo e que eu perceba quando ele deixou de funcionar.

## Não é preciso automatizar tudo de uma vez

Também não vejo necessidade de automatizar uma sequência inteira de uma vez. Um processo com uma etapa manual de revisão pode ser mais adequado do que um fluxo completo funcionando sem critério de aceite. A etapa manual pode até ser temporária: depois de algumas rodadas, fica mais claro quais verificações são estáveis o suficiente para automatizar e quais continuam exigindo julgamento.

A passagem do teste para o uso recorrente é onde eu colocaria mais esforço. O teste mostra que algo é possível. A rotina precisa mostrar que continua funcionando quando a entrada muda, quando a pessoa responsável muda e quando a ferramenta erra.

## Referências

- Anthropic. *Define success criteria and build evaluations*. Claude Platform Docs, consultado em 29/09/2026. [Link](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests)
- Anthropic. *Prompt engineering overview*. Claude Platform Docs, consultado em 29/09/2026. [Link](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview)
