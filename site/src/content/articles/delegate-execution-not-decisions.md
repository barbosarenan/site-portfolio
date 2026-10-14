---
titulo: "How to delegate execution to AI without delegating the decision"
resumo: "AI can research, organize and propose versions. What needs to be clear before the request is who decides what is worth doing and by which criterion the result will be judged."
descricao: "AI can research, organize and propose versions. Before asking, define who decides what is worth doing and which criterion will judge the result."
data: 2026-10-13
ordem: 1
tags: ["ai", "marketing", "process"]
capa: "/articles/delegate-execution-not-decisions.jpg"
pt: "delegar-execucao-sem-delegar-decisao"
---

I use AI to execute parts of my marketing work: exploring possibilities, organizing information, comparing versions of a text and building a first solution to a problem. These uses interest me a lot and take up a growing share of my routine. What I try to avoid is something else, harder to notice day to day: unintentionally handing over the decision about what is worth doing.

This distinction seems obvious when written down, but it gets lost easily in practice. When the tool returns a well-formatted answer in a few seconds, the tendency is to evaluate the quality of the answer and forget to evaluate the question.

## A deliverable can be correct and solve the wrong problem

In marketing, this risk shows up in several ways. A text can be well written and answer a question nobody asked. A page can work technically and still leave the offer confusing for first-time visitors. A list of content ideas can look promising and have nothing to do with the project's priority that quarter.

In none of these cases did the model make a mistake in the strict sense. It did what it was asked. The problem came earlier, in defining what a good deliverable was.

There is a well-known study on this point. In 2023, researchers from Harvard, MIT and other institutions followed 758 Boston Consulting Group consultants as they worked on realistic tasks ([Dell'Acqua et al., 2023](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4573321)). On tasks within the model's capabilities, those who used AI completed more tasks, worked faster and produced higher-quality results than the control group. On a task chosen to fall outside those capabilities, however, consultants using AI were 19 percentage points less likely to reach the correct solution. The authors called this uneven boundary the “jagged technological frontier.”

What I take from this result is not distrust of the tool. It is the need to recognize when a task falls outside what the tool handles well, and that depends on understanding the problem better than the answer itself does.

## What to define before making the request

I have been paying more attention to three elements that come before the prompt.

The first is **context**: who the deliverable is for, in what situation it will be used and which decision it needs to support. Anthropic's documentation suggests thinking of the model as a very capable professional who is new to the job and does not yet know the team's norms and workflows, and it recommends also explaining the reason behind each instruction ([Anthropic, Prompting best practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices)). The comparison helps because it shifts attention from the perfect wording to the missing information.

The second is **constraints**: what cannot change, what must be kept, which terms the brand avoids, which format the channel accepts. Constraints narrow the range of possible answers and make it easier to notice when something has drifted from what was agreed.

The third is the **review criterion**. Before asking, I try to answer how I will know whether the deliverable works. The same documentation, when discussing evaluation, recommends success criteria that are specific, measurable when possible and relevant to the application's goal ([Anthropic, Define success criteria](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests)). For everyday marketing use, this can be something simple, like “every numerical claim needs a source” or “the first paragraph needs to say what the product does.”

| before the request | helpful question |
|---|---|
| context | Who will use this, and to make which decision? |
| constraints | What cannot change, and what is out of scope? |
| review criterion | How will I recognize an adequate deliverable? |

## An example of a request with and without these elements

A request like “create five post ideas about SEO” usually returns plausible, generic ideas. A request that states the audience, the profile's goal, the topics already published and the selection criterion (“prioritize ideas I can demonstrate with an example of my own”) returns fewer options that are usable by chance and more options that can be evaluated. The difference is not in the tool. It is in what I managed to explain.

This exercise has a useful side effect. When I cannot write the review criterion, it is usually a sign that I do not yet understand the problem well enough to delegate any part of it. In that case, AI can help at a different stage, such as organizing what I know and what I still need to find out, before producing any final version.

## Where the decision stays

My interest in AI is about being able to execute ideas better, with more speed and more possibilities to compare. At the same time, I want to keep understanding why I chose a solution and what I need to check before using it. Execution can be shared with the tool. Responsibility for the choice still belongs to whoever signs the work.

To apply this idea to reviewing texts, I wrote about a specific request format in [Stop asking AI to improve your writing](/en/articles/audit-before-publishing/).

## References

- Dell'Acqua, F. et al. *Navigating the Jagged Technological Frontier: Field Experimental Evidence of the Effects of AI on Knowledge Worker Productivity and Quality*. Harvard Business School Working Paper, 2023. [SSRN](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4573321)
- Anthropic. *Prompting best practices*. Claude Platform Docs, accessed September 29, 2026. [Link](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices)
- Anthropic. *Define success criteria and build evaluations*. Claude Platform Docs, accessed September 29, 2026. [Link](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests)
