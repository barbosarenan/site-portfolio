---
titulo: "From test to recurring use: what changes when AI becomes part of the routine"
resumo: "A good result in one conversation shows a possibility. To bring AI into a marketing process, you need to define the input, how the output is checked and how failures get corrected."
descricao: "A good result in one chat shows a possibility. To bring AI into a marketing process, define the input, how output is checked and how failures get fixed."
data: 2026-10-08
ordem: 3
tags: ["ai", "process", "review"]
capa: "/articles/from-test-to-recurring-use.jpg"
pt: "do-teste-ao-uso-recorrente"
---

There is a big difference between testing AI and putting AI to work. A good result in one conversation may be enough to discover a possibility. To turn it into part of a routine, though, other questions start to matter, and almost none of them are answered by the initial test.

## The questions the test does not answer

When I think about taking an AI use case into recurring work, I start with four questions.

**What information goes in?** A test usually works with a hand-picked example that is well formatted and complete. In real use, the input arrives incomplete, in varied formats and with missing context.

**Who checks the output?** If no one has a defined responsibility to review what the tool returns, review tends to disappear precisely when volume increases.

**What happens when context is missing?** The model rarely answers “I don't know.” With insufficient information, it usually produces something plausible, and that is harder to detect than an obvious error.

**How do I tell that the answer is wrong?** Without a criterion defined in advance, evaluation becomes a matter of impression.

## Narrowing the task makes the output checkable

Content review is a good example. “Improve this text” leaves almost everything open: what should change, what should be preserved, what problem needs solving. The result is a new version, and to evaluate it I have to figure out what changed and whether the change made sense.

A request like “identify unsourced claims, quote the exact passage and explain the concern” defines the task more clearly. The output becomes a list of verifiable points, each tied to a passage in the text. I described this format in more detail in [Stop asking AI to improve your writing](/en/articles/audit-before-publishing/).

Anthropic's documentation on evaluating language model applications follows the same logic at a larger scale. It recommends defining specific, relevant success criteria before tuning the prompt, building test cases that reflect the real distribution of tasks, including edge cases, and choosing the grading method suited to each criterion. Human grading is described as the most flexible and highest quality, though slower ([Anthropic, Define success criteria and build evaluations](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests)). Even without building a formal evaluation, the underlying question applies to any recurring use: with which examples do I know this works, and with which do I not know?

## The critique also needs to be verified

Narrowing the task does not eliminate errors. The model can point out a problem that does not exist or miss something important. A number without a source is not necessarily false, and an apparent contradiction may be resolved by context the tool does not have.

That is why the verification step still exists; it just changes in nature. Instead of comparing two full versions of a text, the reviewer examines specific critiques and decides what to accept. This tends to be faster and makes the decision more visible.

## A minimum structure for recurring use

When I bring an AI use case into a process, I try to put three elements in writing.

| element | example in content review |
|---|---|
| adequate input | final text with audience, goal and sources stated |
| checkable deliverable | list of issues with the quoted passage and a rationale |
| path for failures | who reviews, what to do when the critique is wrong, when to go back to the manual process |

This record does not need to be elaborate. A paragraph in a shared document or a saved request template is enough for someone else to use the same process and for me to notice when it has stopped working.

## You do not need to automate everything at once

I also see no need to automate an entire sequence at once. A process with a manual review step can be more appropriate than a complete workflow running without acceptance criteria. The manual step can even be temporary: after a few rounds, it becomes clearer which checks are stable enough to automate and which still require judgment.

The move from test to recurring use is where I would put the most effort. The test shows that something is possible. The routine needs to show that it keeps working when the input changes, when the person in charge changes and when the tool gets it wrong.

## References

- Anthropic. *Define success criteria and build evaluations*. Claude Platform Docs, accessed September 29, 2026. [Link](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests)
- Anthropic. *Prompt engineering overview*. Claude Platform Docs, accessed September 29, 2026. [Link](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview)
