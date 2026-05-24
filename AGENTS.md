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
  - *例如*：禁止使用“光不会在整片硅里自由扩散，而是以光学模式形式传播”或“高速器件不能只看 DC 连接”。一律改为正面的物理性质或工程事实陈述，如：“光束在波导内依靠高折射率差被强烈约束，并以特定的光学模式向前传播”或“高速有源器件的封装设计需重点考虑射频阻抗匹配与寄生参数等射频完整性约束”。
- Use standard, bookish Chinese for explanations. Keep sentences precise and natural; avoid overly casual wording.
  - 严禁“翻译腔”与“欧化中文”，避免定语过长、成分残缺或逻辑散乱。
  - 杜绝口语化中英混杂。凡是国内学术界及产业界有成熟译名的名词（如 *waveguide* -> 波导，*cladding* -> 包层，*heater* -> 微加热器，*die* -> 芯片裸片，*photocurrent* -> 光电流），正文必须使用标准中文译名。
  - **首秀双语规则**：技术术语在页面中首次出现时，必须使用“标准中文译名（英文原词/英文缩写）”的格式（如“阵列波导光栅（AWG）”、“质量图（Wafer Map）”）；后续直接使用中文译名或标准英文缩写，严禁再次中英混用。
- When introducing technical terms, explain them in the flow of the argument. Prefer short inline explanations or `TermNote` annotations over separate glossary-like blocks.
- Use `TermNote` for compact term explanations when a concept is likely unfamiliar to readers. Keep the term label in normal text color and let the component provide the underline annotation.
- Distinguish concept levels carefully. For example, QW / MQW is an active-region concept; InP / GaAs / Si / SOI / TFLN are material or platform concepts; DFB / EML / PD are device concepts; MZM / MRM are modulator structures; LPO / CPO are system architecture or module-boundary concepts.
- 禁止生硬字面直译或随意自造词汇，必须遵循国内光电与半导体集成电路（IC）产业的通用学术语境，严格执行以下映射表：
  
  | 英文术语 | 严禁使用的直译/造词 | 必须使用的产业标准译名 |
  | :--- | :--- | :--- |
  | **passive devices** | 被动器件、消极器件 | **无源器件**（或无源光器件） |
  | **active devices** | 主动器件、积极器件 | **有源器件**（或有源光器件） |
  | **lane leakage / crosstalk** | 通道泄漏、路泄漏 | **信道间串扰**（或信道串光） |
  | **test access** | 测试访问、测试接入 | **测试通路**（或测试引出、测试导通性） |
  | **grating / edge coupler** | 光栅/边缘耦合器 | **光栅耦合器** / **边缘（端面）耦合器** |
  | **laser tile** | 瓦片激光器、激光瓦片 | **同封装集成激光器微模块（Laser Tile）** |
  | **die** | die、小片 | **芯片裸片**（或裸芯片） |
  | **spot-size converter (SSC)** | 斑点尺寸转换器 | **模场限制转换器**（或**斑点尺寸变换器**） |
  | **loopback / cutback** | 回环 / 剪切 | **回环测试结构** / **剪切测试结构** |

- 严格落实“接口级交接”原则，根除引导跳转的自指废话。
  - 任何页面在连接外部页面时，严禁使用大纲跳转式引导词（如“关于 X 见 Y”、“详细物理留给 Z 页面”）。
  - 必须将跳转转化为接口级的物理参数交接或物理约束。例如，在 PIC 页面中不应提示读者去激光器页面，而应陈述“光子集成芯片（PIC）的设计必须在物理边界上与外部激光源实现模式匹配与 RIN 噪声约束”。

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
