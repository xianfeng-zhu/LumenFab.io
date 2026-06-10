# Page Template

## Core Structure

Each page should follow a problem-driven flow:

1. **Start with why** — what problem does this concept solve, and why does the reader need to understand it at this point?
2. **Explain the mechanism** — physical principle, material constraint, process step, or design tradeoff. Interleave physics and engineering naturally; don't force them into separate sections.
3. **Connect cause to effect** — for each variable or process step, show how it flows to a device metric, system constraint, or reliability outcome.
4. **Surface barriers** — end with what makes this layer hard to do well at scale: process control difficulty, yield sensitivity, reliability risk, know-how accumulation, or feedback loops from test data.

## Optional Sections

Use these only when they serve the page:

- **Comparison table** — compress alternatives, tradeoffs, or competing approaches.
- **Common misconceptions** — correct a widespread confusion that would otherwise block understanding.
- **Key metrics** — when a page introduces measurable quantities the reader will encounter later.

## Page Navigation

End every page with a navigation footer pointing to the previous and next page in sequence, plus a link back to the parent hub:

```html
<p class="page-nav">
  <a href="../previous/">← Previous</a>
  <a href="../">↑ Hub</a>
  <a href="../next/">Next →</a>
</p>
```

## Writing Rules

- Start with the problem, not the acronym.
- Define acronyms on first use.
- Keep physics and company mapping separate.
- Avoid saying "advanced" unless the reason is explicit.
- Avoid treating demo, qualification, ramp, and volume production as the same stage.
- When a concept belongs to a different layer, say so directly.
- Avoid paired negation-plus-correction sentences. Prefer a direct positive definition.
