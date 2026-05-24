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

## Page Structure And Explanation Method

- Define each page's boundary before expanding it: identify the main object, the supporting background, and the topics that belong on adjacent pages. Keep system architecture, packaging, manufacturing test, and reliability operations on their own pages unless they are needed as brief context.
- Organize technical pages as learning paths rather than glossary collections. Prefer sequences such as physical principle -> material or structure -> process step -> device behavior -> measured metric -> downstream design implication.
- Make each section answer one clear question. Avoid paragraphs that merely list terms without explaining how they connect.
- Prefer causal chains over isolated facts. A strong explanation often follows the pattern: structure or process choice -> physical effect -> device or system metric -> engineering consequence.
- Start with the reader's intuition, then introduce the professional term, then explain why the term matters. Do not open dense sections with unexplained jargon.
- Use formulas sparingly, and only when they clarify the controlling variables. Explain every symbol near the formula and connect it to a practical consequence.
- Tables should compress, compare, or summarize information. Avoid tables that repeat the preceding prose in another format. Good table uses include structure comparisons, metric summaries, and mappings from issue -> physical meaning -> device impact.
- End process-heavy sections with a short summary of possible process barriers, technical barriers, or sources of competitive advantage. Keep this as technical capability analysis, not investment commentary. Focus on control difficulty, yield sensitivity, reliability risk, know-how accumulation, and feedback loops from test data.
- When a page connects to another page, state only the interface-level handoff: which parameters, constraints, or failure modes pass to the next topic. Leave the detailed treatment to the target page.

## Research And Source Handling

- Before expanding or summarizing technical content, search for professional sources or use the existing saved research material.
- Prefer primary or professional references: standards bodies, university lecture notes, research papers, reputable technical encyclopedias, supplier application notes, and manufacturer technology pages.
- Save useful source material before using it for page content. Store notes, extracted text, PDFs, and reference images under `docs/research/<topic>/`.
- When adding new technical claims, create or update a source notes file in the relevant research directory. Include source names, URLs, key takeaways, and how the material should be used in the page.
- Do not copy research notes or source text directly into user-facing pages. Reorganize and rewrite the information into the site's learning-path structure.
- Download and save useful images when they help explain device structure, process flow, packaging, or 3D-model reference needs. Treat saved images as internal references, not final website artwork unless explicitly approved.
- Do not modify external research directories outside this repository unless the user explicitly asks.

## 3D Model Guidance

- Use 3D models to explain structure, spatial relationships, and process geometry that are hard to understand from prose alone. Do not use a 3D model as decoration.
- Before building or substantially changing a technical model, inspect the relevant page content and professional reference material. The model should match the page's conceptual hierarchy and should not introduce structures that the text does not explain.
- Keep the model physically and pedagogically coherent. For semiconductor devices, preserve layer order, material roles, current paths, optical paths, feedback structures, and distinctions between physical layers and field distributions.
- Label model parts with reader-facing names. If a rendered object represents a field, mode, tolerance zone, or process effect rather than a material layer, name it accordingly.
- Make every interactive part easy to select. Use transparent hit targets, index buttons, or simplified geometry when the visible structure is too small to click reliably.
- When a part is selected, keep the rest of the model visible in a muted or transparent state so the user can understand its location in the whole structure.
- Avoid automatic rotation unless it directly serves the explanation. Manual rotation should feel centered and predictable; prefer established controls such as `OrbitControls` over hand-written Euler rotation when free 3D inspection is needed.
- Separate click selection from drag rotation. Use a movement threshold so dragging the model does not accidentally trigger part selection.
- Choose colors that remain legible in both light and dark themes. Avoid relying on very pale colors for important structures on light backgrounds; avoid colors that disappear when inactive parts become translucent.
- For visual or interaction changes, verify with browser-based checks. At minimum confirm the model is nonblank, correctly framed on desktop and mobile, interactive, and free of console errors.

## Verification

- After content or code changes, run the relevant checks before committing.
- For normal page/content edits, run `npm test` and `npm run build`.
- If the local dev server is running, verify the changed page in the browser when the change affects presentation or reading flow.
- Commit and push after each completed change unless the user explicitly says not to push.
