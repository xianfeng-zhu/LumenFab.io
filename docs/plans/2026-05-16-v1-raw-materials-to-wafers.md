# V1 Raw Materials To Wafers Implementation Plan

Status: Implemented locally. Deployment pending.

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add the 06 raw-materials-to-wafers reader-facing pages that explain how Si, InP, GaAs, SOI, and LNOI become usable substrates before epitaxy and device fabrication.

**Architecture:** Keep Astro + MDX and the existing `ConceptLayout`. Use source-pack synthesis plus visual references from `docs/research/v1-raw-materials-to-wafers/`. Add concept pages under `src/pages/learn/`, update chapter navigation, and keep raw material/wafer content separate from epitaxy, active regions, devices, PICs, and company maps.

**Tech Stack:** Astro, MDX, TypeScript, Node test runner, GitHub Pages, existing image/source-pack workflow.

---

## Source Material

Use:

- `docs/site-structure.md`
- `docs/page-template.md`
- `content/06-raw-materials-to-wafers/README.md`
- `docs/research/README.md`
- `docs/research/source-pack-template.md`
- `docs/research/v1-raw-materials-to-wafers/06-raw-materials-to-wafers-professional-sources.md`
- `docs/research/v1-raw-materials-to-wafers/images/`
- local prior research:
  - `/Users/zhuxianfeng/dev/tools/zhuazi-memory/default/docs/research/ai-datacenter-optics/supply-chain/inp-substrate-upstream-chokepoints.md`
  - `/Users/zhuxianfeng/dev/tools/zhuazi-memory/default/docs/research/ai-datacenter-optics/supply-chain/laser-supply-chain-substrate-epi-chip-module.md`

Rules:

- Do not copy source text into reader-facing pages.
- Do not use copyrighted third-party figures in reader-facing pages without permission.
- Use saved images as research references first; use original SVGs when a page benefits from a simple figure.
- Keep `substrate`, `epi-ready substrate`, and `epiwafer` distinct.
- Keep QW/MQW/QD and MOCVD/MBE details for chapter 07.
- Keep VCSEL/DFB/EML/PD device structures for chapter 08.
- Keep company mapping and supply-chain investment framing for chapter 13.

## Task 1: Commit Source Pack And Plan

**Files:**

- Create: `docs/research/v1-raw-materials-to-wafers/06-raw-materials-to-wafers-professional-sources.md`
- Create: `docs/research/v1-raw-materials-to-wafers/images/wikimedia-czochralski-process.svg`
- Create: `docs/research/v1-raw-materials-to-wafers/images/nasa-silicon-wafer-mirror-finish.jpg`
- Create: `docs/research/v1-raw-materials-to-wafers/images/nist-lithium-niobate-crystal.jpg`
- Create: `docs/research/v1-raw-materials-to-wafers/images/original-raw-to-wafer-flow.svg`
- Create: `docs/research/v1-raw-materials-to-wafers/images/original-engineered-substrate-stacks.svg`
- Create: `docs/plans/2026-05-16-v1-raw-materials-to-wafers.md`

**Steps:**

1. Verify source-pack files exist.
2. Run:

```bash
git diff --check
npm test
```

Expected:

- Whitespace check passes.
- Tests pass.

3. Commit:

```bash
git add docs/research/v1-raw-materials-to-wafers docs/plans/2026-05-16-v1-raw-materials-to-wafers.md
git commit -m "docs: add raw materials to wafers source pack [skip ci]"
```

## Task 2: Add Failing Page Coverage Test

**Files:**

- Modify: `tests/scaffold.test.mjs`

**Steps:**

1. Add a test named `raw materials to wafers pages exist`.
2. Check these files:

```text
src/pages/learn/in-p-ga-as-si-ge-and-linbo3.mdx
src/pages/learn/raw-material-ingot-wafer-substrate-and-epi-ready-wafer.mdx
src/pages/learn/high-purity-raw-materials.mdx
src/pages/learn/polycrystal-synthesis.mdx
src/pages/learn/single-crystal-growth.mdx
src/pages/learn/wafer-slicing-lapping-polishing-and-cmp.mdx
src/pages/learn/epi-ready-substrates.mdx
src/pages/learn/inp-substrate.mdx
src/pages/learn/gaas-substrate.mdx
src/pages/learn/soi-wafer.mdx
src/pages/learn/lnoi-wafer.mdx
```

3. Run:

```bash
npm test
```

Expected:

- FAIL because pages do not exist yet.

## Task 3: Implement 06 Reader-Facing Pages

**Files:**

- Create: `src/pages/learn/in-p-ga-as-si-ge-and-linbo3.mdx`
- Create: `src/pages/learn/raw-material-ingot-wafer-substrate-and-epi-ready-wafer.mdx`
- Create: `src/pages/learn/high-purity-raw-materials.mdx`
- Create: `src/pages/learn/polycrystal-synthesis.mdx`
- Create: `src/pages/learn/single-crystal-growth.mdx`
- Create: `src/pages/learn/wafer-slicing-lapping-polishing-and-cmp.mdx`
- Create: `src/pages/learn/epi-ready-substrates.mdx`
- Create: `src/pages/learn/inp-substrate.mdx`
- Create: `src/pages/learn/gaas-substrate.mdx`
- Create: `src/pages/learn/soi-wafer.mdx`
- Create: `src/pages/learn/lnoi-wafer.mdx`

**Steps:**

1. Use `ConceptLayout` frontmatter.
2. Use Chinese explanations with English technical terms where useful.
3. Explain each page by role, physical/material reason, manufacturing step, boundary, and misconception.
4. Add Further Reading links from the source pack.
5. Use original research SVGs on:
   - `raw-material-ingot-wafer-substrate-and-epi-ready-wafer.mdx`
   - `soi-wafer.mdx`
   - `lnoi-wafer.mdx`
6. Run:

```bash
npm test
```

Expected:

- All page-existence tests pass.

## Task 4: Update Navigation

**Files:**

- Modify: `src/pages/learn/index.astro`
- Modify: `src/data/chapters.ts`

**Steps:**

1. Add grouped links for `06. Raw Materials To Wafers`.
2. Point chapter 06 to `/learn/in-p-ga-as-si-ge-and-linbo3/`.
3. Keep later chapter paths unchanged.
4. Run:

```bash
npm test
npm run build
```

Expected:

- Tests pass.
- Build succeeds.

## Task 5: Update Progress

**Files:**

- Modify: `docs/development-progress.md`
- Modify: `docs/plans/2026-05-16-v1-raw-materials-to-wafers.md`

**Steps:**

1. Mark this plan completed after deployment verification.
2. Update current state to include 06 raw materials to wafers.
3. Add the 06 page list.
4. Update expected local page count.
5. Suggest next target: `07 Epitaxy And Active Regions`.

## Task 6: Verify, Commit, Push, And Deployment Check

**Files:**

- No additional source edits expected.

**Steps:**

1. Run:

```bash
git diff --check
npm test
npm run build
npm audit --omit=dev
```

2. Run local preview and check:

```bash
npm run preview -- --host 127.0.0.1 --port 4322
curl -I http://127.0.0.1:4322/learn/
curl -I http://127.0.0.1:4322/learn/in-p-ga-as-si-ge-and-linbo3/
curl -I http://127.0.0.1:4322/learn/soi-wafer/
curl -I http://127.0.0.1:4322/learn/lnoi-wafer/
```

3. Commit:

```bash
git add docs/development-progress.md docs/plans/2026-05-16-v1-raw-materials-to-wafers.md src/data/chapters.ts src/pages/learn tests/scaffold.test.mjs
git commit -m "feat: add raw materials to wafers foundations"
```

4. Push and watch GitHub Pages:

```bash
git push
gh run list --repo xianfeng-zhu/LumenFab.io --branch main --workflow "Deploy to GitHub Pages" --limit 3
gh run watch <run-id> --repo xianfeng-zhu/LumenFab.io --exit-status
```

Expected:

- Tests pass.
- Build succeeds.
- Audit reports 0 vulnerabilities.
- Local preview pages return HTTP 200.
- GitHub Pages deployment succeeds.
- Working tree is clean.

## Completion Criteria

- [ ] Source pack exists and includes visual manifest.
- [ ] Saved visual assets exist under `docs/research/v1-raw-materials-to-wafers/images/`.
- [ ] 06 implementation plan exists.
- [ ] Raw-materials-to-wafers page-existence test follows TDD red/green.
- [ ] Eleven 06 reader-facing pages exist.
- [ ] Learning path navigation links to 06 pages.
- [ ] Chapter 06 path points to the first 06 page.
- [ ] Progress file is updated.
- [ ] Tests, build, audit, local preview, and GitHub Pages deployment succeed.
