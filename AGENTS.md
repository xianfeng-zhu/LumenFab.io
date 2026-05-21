# LumenFab.io Agent Instructions

## Working Style

- Default to action over discussion when the user's intent is clear.
- State assumptions briefly when they materially affect the outcome.
- Surface blockers, risks, and uncertainty plainly.
- Preserve repository-local conventions and obey more specific `AGENTS.md` files inside subdirectories.
- If repository-local instructions conflict, the more specific in-scope instructions win.

## Writing Style

- Write pages as reader-facing educational content, not author notes, implementation plans, or editorial scaffolding.
- Avoid process phrases such as “这里先回答”, “本页只说明”, “后续再展开”, or similar wording that sounds like the page is documenting its own construction.
- Avoid corrective paired negative phrasing. Prefer direct positive statements.
- Use standard, bookish Chinese for explanations. Keep sentences precise and natural; avoid overly casual wording.
- When introducing technical terms, explain them in the flow of the argument. Prefer short inline explanations or `TermNote` annotations over separate glossary-like blocks.
- Use `TermNote` for compact term explanations when a concept is likely unfamiliar to readers. Keep the term label in normal text color and let the component provide the underline annotation.
- Distinguish concept levels carefully. For example, QW / MQW is an active-region concept; InP / GaAs / Si / SOI / TFLN are material or platform concepts; DFB / EML / PD are device concepts; MZM / MRM are modulator structures; LPO / CPO are system architecture or module-boundary concepts.

## Research And Source Handling

- Before expanding or summarizing technical content, search for professional sources or use the existing saved research material.
- Prefer primary or professional references: standards bodies, university lecture notes, research papers, reputable technical encyclopedias, supplier application notes, and manufacturer technology pages.
- Save useful source material before using it for page content. Store notes, extracted text, PDFs, and reference images under `docs/research/<topic>/`.
- When adding new technical claims, create or update a source notes file in the relevant research directory. Include source names, URLs, key takeaways, and how the material should be used in the page.
- Do not copy research notes or source text directly into user-facing pages. Reorganize and rewrite the information into the site's learning-path structure.
- Download and save useful images when they help explain device structure, process flow, packaging, or 3D-model reference needs. Treat saved images as internal references, not final website artwork unless explicitly approved.
- Do not modify external research directories outside this repository unless the user explicitly asks.

## Verification

- After content or code changes, run the relevant checks before committing.
- For normal page/content edits, run `npm test` and `npm run build`.
- If the local dev server is running, verify the changed page in the browser when the change affects presentation or reading flow.
- Commit and push after each completed change unless the user explicitly says not to push.
