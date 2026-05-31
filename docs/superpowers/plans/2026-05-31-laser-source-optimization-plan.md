# Laser Source Page Optimization — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restructure `laser-source.mdx` following the [design spec](../specs/2026-05-31-laser-source-page-optimization-design.md) — add §0 overview + §1 structure map, trim §2 working principle, unify §3-8 manufacturing subsections to a 4-part pattern, move CPO content to §10, and apply 8 wording principles across the file.

**Architecture:** Single-file content edit on `src/pages/components/laser-source.mdx`. The file follows Astro MDX format with a frontmatter block, TermNote components, a DfbLaserModel component, and markdown content organized in `##` sections. No code logic changes; purely structural reorganization and language polish of the markdown body.

**Tech Stack:** Astro MDX, TermNote.astro component, DfbLaserModel.astro component.

---

## File Map

| File | Action | Responsibility |
|------|--------|----------------|
| `src/pages/components/laser-source.mdx` | **Rewrite** | All content changes happen here. Current ~574 lines → target structure ~11 top-level sections |
| `docs/research/v1-inp-dfb-laser-principle/inp-dfb-laser-principle-professional-sources.md` | Read (reference) | Verify technical claims during rewriting |
| `docs/research/v1-laser-source-*/` | Read (reference) | Verify substrate, epitaxy, grating, electrode, facet claims |
| `docs/research/v1-physics-and-laser-foundations/03-04-semiconductor-optics-and-laser-physics.md` | Read (reference) | Verify physics claims |

No new files. No other files modified.

---

## Research Pre-load (before any editing)

Before starting edits, read these research files to build domain context:

- [ ] Read `docs/research/v1-inp-dfb-laser-principle/inp-dfb-laser-principle-professional-sources.md`
- [ ] Read `docs/research/v1-laser-source-inp-substrate/inp-substrate-lattice-source-notes.md`
- [ ] Read `docs/research/v1-laser-source-epitaxy/epitaxy-active-region-professional-sources.md`
- [ ] Read `docs/research/v1-laser-source-grating-waveguide/grating-waveguide-professional-sources.md`
- [ ] Read `docs/research/v1-laser-source-electrode-current-confinement/electrode-current-confinement-professional-sources.md`
- [ ] Read `docs/research/v1-laser-source-cleaving-facet-test/cleaving-facet-test-professional-sources.md`
- [ ] Read `docs/research/v1-physics-and-laser-foundations/03-04-semiconductor-optics-and-laser-physics.md`

---

### Task 1: Preserve and extract reusable content blocks

Before restructuring, identify all content blocks that must be preserved verbatim or near-verbatim, and all cross-reference links.

**File:** `src/pages/components/laser-source.mdx`

- [ ] **Step 1: Catalog all TermNote usages**

Read the file and list every `<TermNote label="..." note="...">` occurrence with its section location. These are immutable per spec.

- [ ] **Step 2: Catalog all cross-reference links**

List every `[text](../path/)` link and its current section location. These must remain valid after restructuring.

- [ ] **Step 3: Catalog all tables**

List every markdown table with its section location and number of rows. These will be re-anchored to their new § positions.

- [ ] **Step 4: Catalog all formulas and code blocks**

List every ` ```text ` code block and inline formula (`E(eV) = 1.24 / λ(μm)`, Bragg wavelength formula, etc.).

- [ ] **Step 5: Commit**

```bash
git add -A && git commit -m "catalog: document all TermNotes, links, tables, formulas in laser-source"
```

---

### Task 2: Write new §0 — 什么是 InP / III-V 半导体激光源

Replace the current opening (lines 11-20, everything between frontmatter import block and `## 为什么 CPO 会提高光源要求`) with a new §0 section.

**Spec reference:** §0 design — definition + system position + constraint table + reading index

**File:** `src/pages/components/laser-source.mdx`

- [ ] **Step 1: Write the §0 opening paragraph (definition)**

Write 3-4 sentences defining what an InP/III-V edge-emitting DFB laser is, its role in the optical engine, and mention CPO/pluggable/silicon photonics as downstream use cases (one sentence only for CPO).

Context to include:
- InP/III-V material platform for 1310 nm / 1550 nm
- DFB = distributed feedback for wavelength selection
- CW-DFB = continuous-wave DFB laser as light source
- Role: provides stable CW light to PIC

- [ ] **Step 2: Write the system position chain**

```
激光源 → 连续波光 → 耦合器 → PIC → 调制 → 光纤
```

- [ ] **Step 3: Write the constraint transfer table**

Create a markdown table mapping laser parameters → downstream constraints. Use the table from the spec §0.3. Each row's "下游受影响的决策" column should be concise (1 line per cell).

- [ ] **Step 4: Write the reading index table**

Create a table mapping section numbers → content summary → reader type:

| 章节 | 内容 | 适合谁 |
|------|------|--------|
| §1 | 结构分类地图 | 先看这个建立全局认知 |
| §2 | 工作原理 | 理解物理机制 |
| §3–8 | 制造路径 | 深入各阶段工艺 |
| §9 | 评价指标 | 工程师选型参考 |
| §10 | 从芯片到系统（含 CPO 约束） | 理解系统级要求和应用场景 |

- [ ] **Step 5: Move DfbLaserModel earlier**

Place `<DfbLaserModel />` immediately after the §0 content and before §1. Reference: PIC page places `<PicChipModel />` right after imports, before any `##` section.

- [ ] **Step 6: Verify §0 reads well**

Read the new §0 from start to finish. Check:
- Definition is clear in ≤4 sentences
- Constraint table is scannable
- Reading index matches actual section numbers
- DfbLaserModel renders in the new position

- [ ] **Step 7: Commit**

```bash
git add src/pages/components/laser-source.mdx
git commit -m "feat: add §0 overview, constraint table, reading index; move 3D model earlier"
```

---

### Task 3: Write new §1 — 激光器里有什么：结构分类地图

Insert a new §1 section between §0 (with DfbLaserModel) and §2 (working principle).

**Spec reference:** §1 design

**File:** `src/pages/components/laser-source.mdx`

- [ ] **Step 1: Write the structure classification table**

Create a 6-row table:

| 结构类别 | 包含什么 | 在激光器里的作用 | 对应章节 |
|---------|---------|----------------|---------|

Rows: 衬底 (→§3), 外延层 (→§4), 波导 (→§5), 光栅 (→§5), 电极与绝缘 (→§6), 端面 (→§7).

- [ ] **Step 2: Verify table accuracy**

Check each row against the existing detailed sections to ensure correct mapping of structure → function → chapter reference.

- [ ] **Step 3: Commit**

```bash
git add src/pages/components/laser-source.mdx
git commit -m "feat: add §1 structure classification map"
```

---

### Task 4: Trim §2 — 工作原理（精简）

Compress the current "工作原理" section. The existing content has a 3-paragraph overview followed by a 7-item `<ol className="stage-list">`. Compress to 3 overview paragraphs + 5 items.

**Spec reference:** §2 design

**File:** `src/pages/components/laser-source.mdx`

- [ ] **Step 1: Keep and lightly polish the 3 overview paragraphs**

The three paragraphs starting "第一，电流注入与载流子复合…" / "第二，从自发辐射到受激辐射…" / "第三，光场约束与筛选…" — keep structure, apply wording principles (去重, 断句, 凝练, 直陈).

- [ ] **Step 2: Compress 7 items to 5**

Merge pattern from spec:
- ① + ③ → "电能转化为有序光：电流注入 + 载流子复合" (combine energy conversion with carrier injection)
- ② → "InP/III-V 提供通信波段发光能力" (trim to 2-3 sentences)
- ④ → "从发光到激光：增益超过损耗" (trim to 2-3 sentences)
- ⑤ + ⑥ → "波导、腔体和光栅共同选择可放大模式" (combine waveguide confinement with DFB selection)
- ⑦ → "真实芯片还需经受热、噪声、反射和一致性挑战" (trim to 2-3 sentences)

Each item: `<strong>` title (1 line) + `<span>` description (2-4 sentences max).

- [ ] **Step 3: Remove duplicated explanations**

Delete any repeated explanations of "gain", "mode", "feedback" — each concept should be fully explained once across these 5 items, not repeated.

- [ ] **Step 4: Verify working principle flow**

Read the 5 items in sequence. Verify the causal chain: current injection → material gain → threshold condition → mode selection → real-world challenges. No gaps, no duplicates.

- [ ] **Step 5: Commit**

```bash
git add src/pages/components/laser-source.mdx
git commit -m "refactor: trim §2 working principle from 7 items to 5, remove duplicates"
```

---

### Task 5: Restructure §3 — 衬底（unified 4-part pattern）

Restructure the existing "1. InP 单晶生长与衬底制备" section into the unified pattern.

**Spec reference:** §3–8 unified pattern, §3 specifics

**File:** `src/pages/components/laser-source.mdx`

- [ ] **Step 1: Renumber and add §3.1 "做什么"**

Extract from existing "为什么需要 InP 衬底" and "晶格匹配为什么重要" — move the core physical argument here (why InP substrate exists, what role it plays). Keep crystal physics explanation about lattice matching. Remove duplicated explanations; keep the clearest single explanation of lattice matching.

- [ ] **Step 2: Write §3.2 "怎么做"**

Move existing "InP 衬底怎样制造" 4-step flow here (high-pressure synthesis → VGF → wafer processing → cleaning/inspection). Keep the equipment table and the process flow.

- [ ] **Step 3: Write §3.3 "对器件的影响"**

Anchor the existing "工艺关注点 → 对激光源的影响" table here. Add a brief introductory sentence.

- [ ] **Step 4: Write §3.4 "量产壁垒"**

Move and compress existing "InP 衬底制造的量产壁垒" content to 2-3 paragraphs.

- [ ] **Step 5: Verify §3 structure**

Read through the 4 subsections. Verify:
- §3.1 explains WHY InP substrate is needed (physics)
- §3.2 explains HOW it's made (process)
- §3.3 shows process-to-performance mapping (table)
- §3.4 explains barriers (industry reality)

- [ ] **Step 6: Commit**

```bash
git add src/pages/components/laser-source.mdx
git commit -m "refactor: restructure §3 substrate to unified 4-part pattern"
```

---

### Task 6: Restructure §4 — 外延（unified 4-part pattern）

Restructure "2. 外延生长" into the unified pattern.

**Spec reference:** §4 design

**File:** `src/pages/components/laser-source.mdx`

- [ ] **Step 1: Write §4.1 "做什么"**

Move "外延的物理含义" here. Explain what epitaxy does in the laser structure stack.

- [ ] **Step 2: Write §4.2 "怎么做"**

Move MOCVD/MBE content here. Convert the MOCVD vs MBE comparison from prose to a short comparison table (as specified). Keep the "工艺控制点" table here.

- [ ] **Step 3: Write §4.3 "对器件的影响"**

Anchor the existing "外延层的功能分工" table and "外延层怎样决定激光源性能" table here.

- [ ] **Step 4: Write §4.4 "量产壁垒"**

Move and compress "哪些外延细节会成为工艺壁垒" to 2-3 paragraphs.

- [ ] **Step 5: Commit**

```bash
git add src/pages/components/laser-source.mdx
git commit -m "refactor: restructure §4 epitaxy to unified 4-part pattern"
```

---

### Task 7: Restructure §5 — 波导与光栅（unified 4-part pattern）

Restructure "3. 波导、DFB 光栅与工艺容差" into the unified pattern.

**Spec reference:** §5 design

**File:** `src/pages/components/laser-source.mdx`

- [ ] **Step 1: Write §5.1 "做什么"**

Explain what waveguide and grating do together: lateral optical confinement + longitudinal mode selection.

- [ ] **Step 2: Write §5.2 "怎么做"**

Move ridge vs BH fabrication content here. Keep the existing comparison table. Move DFB grating fabrication content. Keep Bragg wavelength formula.

- [ ] **Step 3: Write §5.3 "对器件的影响"**

Anchor and expand the existing "工艺变量 → 物理影响 → 器件表现" table here.

- [ ] **Step 4: Write §5.4 "量产壁垒"**

Move and compress "波导与 DFB 工艺的量产壁垒" to 2-3 paragraphs.

- [ ] **Step 5: Commit**

```bash
git add src/pages/components/laser-source.mdx
git commit -m "refactor: restructure §5 waveguide and grating to unified 4-part pattern"
```

---

### Task 8: Restructure §6 — 电流注入（unified 4-part pattern）

Restructure "4. 电流注入、绝缘与电流约束" into the unified pattern.

**Spec reference:** §6 design

**File:** `src/pages/components/laser-source.mdx`

- [ ] **Step 1: Write §6.1 "做什么"**

Explain current injection path: from electrode to quantum well active region.

- [ ] **Step 2: Write §6.2 "怎么做"**

Move ohmic contact, dielectric/passivation, current window content here. Convert the existing ridge/BH/stripe current constraint prose descriptions into a comparison table.

- [ ] **Step 3: Write §6.3 "对器件的影响"**

Anchor the existing "工艺变量 → 物理影响 → 器件表现" table here.

- [ ] **Step 4: Write §6.4 "量产壁垒"**

Move and compress "电流注入与约束的量产壁垒" to 2-3 paragraphs.

- [ ] **Step 5: Commit**

```bash
git add src/pages/components/laser-source.mdx
git commit -m "refactor: restructure §6 current injection to unified 4-part pattern"
```

---

### Task 9: Restructure §7 — 端面工程（unified 4-part pattern）

Restructure "5. 解理、腔长与端面工程" into the unified pattern.

**Spec reference:** §7 design

**File:** `src/pages/components/laser-source.mdx`

- [ ] **Step 1: Write §7.1 "做什么"**

Explain cleaving and facet engineering: what it does to the laser cavity boundary.

- [ ] **Step 2: Write §7.2 "怎么做"**

Move cleaving, facet cleaning, AR/HR coating content here. Expand the existing "端面相关项 → 主要影响" list into a more complete comparison table.

- [ ] **Step 3: Write §7.3 "对器件的影响"**

Explain how facet quality affects output power, SMSR, reliability, COD risk. Keep COD TermNote.

- [ ] **Step 4: Write §7.4 "量产壁垒"**

Move and compress "解理与端面工程的量产壁垒" to 2-3 paragraphs.

- [ ] **Step 5: Commit**

```bash
git add src/pages/components/laser-source.mdx
git commit -m "refactor: restructure §7 facet engineering to unified 4-part pattern"
```

---

### Task 10: Restructure §8 — 测试与筛选（unified 4-part pattern）

Restructure "6. 芯片测试、分档与可靠性筛选" into the unified pattern.

**Spec reference:** §8 design

**File:** `src/pages/components/laser-source.mdx`

- [ ] **Step 1: Write §8.1 "做什么"**

Explain why every chip needs testing — wafer-level variation.

- [ ] **Step 2: Write §8.2 "怎么做"**

Keep existing layered structure (visual/electrical check → L-I-V → spectrum → aging → binning). This section already has good organization; preserve it within §8.2.

- [ ] **Step 3: Write §8.3 "对器件的影响"**

This section's "impact" is the binning and process feedback. Move "分档、良率统计与工艺反馈" content here.

- [ ] **Step 4: Write §8.4 "量产壁垒"**

Move and compress "芯片测试与筛选的量产壁垒" to 2-3 paragraphs. Add the "测试壁垒" summary table as specified.

- [ ] **Step 5: Commit**

```bash
git add src/pages/components/laser-source.mdx
git commit -m "refactor: restructure §8 testing and binning to unified 4-part pattern"
```

---

### Task 11: Update §9 — 评价指标（micro-polish）

Light touch-up of the existing "7. 器件评价指标" section. Renumber to §9.

**File:** `src/pages/components/laser-source.mdx`

- [ ] **Step 1: Keep the existing metrics table**

The 5-row table (发光能力 / 波长噪声模式 / 电学热学 / 光束耦合 / 可靠性) is well-structured. Keep it.

- [ ] **Step 2: Add cross-constraint paragraph after the table**

Write 2-3 sentences explaining how these metrics constrain each other (power ↑ → junction temperature ↑ → wavelength shift → affects SMSR/RIN). Use content from existing second-to-last paragraph, expanded for clarity.

- [ ] **Step 3: Commit**

```bash
git add src/pages/components/laser-source.mdx
git commit -m "refactor: polish §9 evaluation metrics, add cross-constraint note"
```

---

### Task 12: Restructure §10 — 从芯片到系统（merge CPO + packaging content）

This is the biggest structural move. Take the existing "为什么 CPO 会提高光源要求" section (currently at the top of the page) and move it here as §10.2. Keep the existing "8. 从芯片到封装" content as §10.1.

**File:** `src/pages/components/laser-source.mdx`

- [ ] **Step 1: Write §10.1 "封装接口"**

Move and polish the existing "从芯片到封装" content (the parameter transfer table: 光学参数 / 电学参数 / 热学参数 / 可靠性参数 → 封装侧需要处理的问题). Rename section heading to "封装接口".

- [ ] **Step 2: Write §10.2 "CPO 与系统约束"**

Move the CPO content here. The original "为什么 CPO 会提高光源要求" has:
- Opening paragraph about CPO design goals
- 4 bullet points about CPO constraints
- Closing paragraph about stricter requirements

Compress to 4-5 bullet points + 1 closing paragraph. Tone shift: now that the reader understands the laser itself, this section reads as "here's what this device faces in a real system."

- [ ] **Step 3: Write §10.3 "收束"**

Write the closing paragraph as specified:
"经过测试和筛选后的合格裸芯片，将一组可量化的边界条件交给封装和系统设计。激光源的故事到这里并没有结束——它进入光引擎后还要面对耦合效率、热漂移、反射容忍度和长期老化等系统级命题。但制造侧的责任到此为止，剩下的属于封装与系统集成。"

- [ ] **Step 4: Commit**

```bash
git add src/pages/components/laser-source.mdx
git commit -m "refactor: restructure §10 with CPO content moved from opening, add system closure"
```

---

### Task 13: Update §11 — 总结（micro-polish）

Light touch-up of the existing "9. 总结" section. Renumber to §11.

**File:** `src/pages/components/laser-source.mdx`

- [ ] **Step 1: Polish the two summary paragraphs**

Keep the core meaning: "一颗 InP 激光源从高纯 InP 原料和 InP 衬底开始…" and "激光器看起来只是一颗能够发光的芯片…". Apply wording principles.

- [ ] **Step 2: Verify further reading links**

Check all links in the "进一步阅读" list are valid. These are internal links to other pages in the project.

- [ ] **Step 3: Commit**

```bash
git add src/pages/components/laser-source.mdx
git commit -m "refactor: polish §11 summary, verify reading links"
```

---

### Task 14: Full-file wording polish pass

Apply all 8 wording principles across the entire file.

**Spec reference:** Wording 原则 (8 items)

**File:** `src/pages/components/laser-source.mdx`

- [ ] **Step 1: 去重 — Remove duplicated concept explanations**

Use the spec's dedup checklist:
- 直接/间接带隙: remove from §3, keep in §2
- 晶格匹配: consolidate to single explanation in §3.1
- 欧姆接触: remove duplicate from §6, keep first occurrence
- DFB Bragg wavelength: remove from §2, keep in §5
- 量子阱 thickness/quantity: remove duplicate from §2, keep in §4

- [ ] **Step 2: 断句 — Split long sentences**

Scan the file for Chinese sentences over ~40 characters. Split each into 2 sentences. Convert colon-followed long lists to bullet lists or tables.

- [ ] **Step 3: 统一 — Unify terminology**

Check that the same concept uses the same term throughout:
- "有源区" vs "active region" → consistently use "有源区"
- "波导" vs "waveguide" → consistently use "波导"
- "量子阱" vs "QW" → use "量子阱" on first mention with "QW" in TermNote or parentheses, then "量子阱" thereafter
- Similar checks for all technical terms

- [ ] **Step 4: 凝练 — Remove filler words**

Search and remove/condense:
- "可以理解为" → delete or rephrase
- "换句话来说" / "换句话说" → delete
- "实际上" at sentence start → delete (unless truly contrasting with a misconception)
- "需要指出的是" / "需要注意的是" → delete, just state the point

- [ ] **Step 5: 正式 — Fix translation-ese**

Identify and fix:
- Westernized long attributive clauses (过度西化的长定语) → break into shorter, more natural Chinese structures
- Awkward connector words from English (e.g., "基于此" → "因此" or restructure)
- Unnatural passive constructions ("被…所…") → use natural Chinese patterns

- [ ] **Step 6: 直陈 — Remove "不是…而是…" patterns**

Search the file for "不是" and "而是". For each occurrence, restructure to direct statement. Example:
- "这不是X，而是Y" → "这是Y（与X不同）" or simply "这是Y"
- If the contrast is important for understanding, keep a single clear instance; otherwise remove

- [ ] **Step 7: 注释 — Verify TermNote coverage**

Scan the file for technical terms and physical principles appearing for the first time. For each, check if a TermNote exists. Add one if missing. Terms to check:
- 直接带隙 / 间接带隙 (first in §2)
- 晶格常数 / 晶格匹配 (first in §3.1)
- 量子阱 / MQW (first in §2 or §3)
- SCH (first in §4)
- Bragg wavelength (first in §5)
- 欧姆接触 (first in §6)
- COD (first in §7)

- [ ] **Step 8: Commit**

```bash
git add src/pages/components/laser-source.mdx
git commit -m "polish: apply 8 wording principles across laser-source page"
```

---

### Task 15: Final verification

Full-file integrity check before declaring done.

**File:** `src/pages/components/laser-source.mdx`

- [ ] **Step 1: Structure check**

Verify section numbering and hierarchy:
```
§0. 什么是 InP / III-V 半导体激光源
§1. 激光器里有什么：结构分类地图
§2. 工作原理：电流如何变成稳定光
制造路径总览 (保留)
§3. 衬底 (§3.1-3.4)
§4. 外延 (§4.1-4.4)
§5. 波导与光栅 (§5.1-5.4)
§6. 电流注入 (§6.1-6.4)
§7. 端面工程 (§7.1-7.4)
§8. 测试与筛选 (§8.1-8.4)
§9. 评价指标
§10. 从芯片到系统 (§10.1-10.3)
§11. 总结
资料来源
```

- [ ] **Step 2: Link validation**

Check every cross-reference link `[text](../path/)` points to an existing file or page route. Use `ls` to verify each target exists.

- [ ] **Step 3: TermNote integrity**

Verify all TermNote components have both `label` and `note` props, and the note text is preserved from the original (no content drift).

- [ ] **Step 4: DfbLaserModel position**

Verify `<DfbLaserModel />` appears between §0 and §1 (not in its old position mid-page).

- [ ] **Step 5: Frontmatter check**

Verify frontmatter is intact:
```
---
layout: ../../layouts/ConceptLayout.astro
title: 激光源
chapter: 光引擎组件
description: ...
---
```

- [ ] **Step 6: Build check**

Run the Astro dev server to verify the page renders without errors:
```bash
npx astro dev --host 0.0.0.0
```
Check that the page loads and the 3D model renders correctly.

- [ ] **Step 7: Commit**

```bash
git add src/pages/components/laser-source.mdx
git commit -m "verify: final structure check, link validation, build test"
```

---

## Self-Review

1. **Spec coverage:** Each spec section has a corresponding task — §0 → Task 2, §1 → Task 3, §2 → Task 4, §3-8 → Tasks 5-10, §9 → Task 11, §10 → Task 12, §11 → Task 13, Wording principles → Task 14, verification → Task 15.

2. **Placeholder scan:** No TBD, TODO, or placeholder content. Every task describes specific content changes with source origin (existing section moved, new content written, or compressed from existing).

3. **Type consistency:** N/A — this is a content edit, not code. Section numbering is consistent (0-11, with subsections X.1-X.4 for manufacturing chapters). TermNote component props (label, note) are consistent with existing usage.
