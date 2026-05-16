# V1 Material Platforms Implementation Plan

Status: Completed.

Completed on: 2026-05-16

Verification:

- `npm test`: passed
- `npm run build`: passed
- `npm audit --omit=dev`: passed
- Local preview HTTP check: passed
- Deployed HTTP check: passed
- Pages built locally: 37
- GitHub Pages run `25959921062`: passed

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add the 05 material-platform reader-facing pages that explain why Si, SOI, GaAs, InP, SiN, and TFLN occupy different roles in AI data-center optical interconnects.

**Architecture:** Keep Astro + MDX and the existing `ConceptLayout`. Add flexible concept pages under `src/pages/learn/` and wire the first 05 page into `src/data/chapters.ts` plus the learning index. Keep platform explanation separate from raw wafer supply chain, active-region detail, device structures, and company mapping.

**Tech Stack:** Astro, MDX, TypeScript, Node test runner, GitHub Pages, existing 3D placeholder support.

---

## Source Material

Use:

- `docs/site-structure.md`
- `docs/page-template.md`
- `content/05-material-platforms/README.md`
- `docs/research/v1-material-platforms/05-material-platforms-professional-sources.md`
- Prior 03-04 pages on bandgap, waveguides, gain, and laser physics.

Rules:

- Do not copy research notes verbatim.
- Do not reorganize the website around the research directory.
- Keep `QW/MQW/QD` active-region detail for chapter 07.
- Keep `VCSEL/DFB/EML/PD` device structure detail for chapter 08.
- Keep `MZM/MRM/SiPh PIC` circuit detail for chapter 09.
- Keep `LPO/CPO` system-boundary detail for chapter 12.
- Keep company and supply-chain mapping for chapter 13.

## Task 1: Add Failing Page Coverage Tests

**Files:**

- Modify: `tests/scaffold.test.mjs`

**Steps:**

1. Add a test named `material platform pages exist`.
2. Check these files:

```text
src/pages/learn/silicon-electronics-and-photonic-integration.mdx
src/pages/learn/gaas-850-nm-and-vcsel.mdx
src/pages/learn/inp-1310-1550-nm-and-high-speed-communication.mdx
src/pages/learn/soi-and-photonics-soi.mdx
src/pages/learn/silicon-nitride-low-loss-passive-platform.mdx
src/pages/learn/lnoi-and-tfln.mdx
src/pages/learn/why-no-single-material-wins-everything.mdx
```

3. Run:

```bash
npm test
```

Expected:

- FAIL because the new pages do not exist yet.

## Task 2: Implement 05 Reader-Facing Pages

**Files:**

- Create: `src/pages/learn/silicon-electronics-and-photonic-integration.mdx`
- Create: `src/pages/learn/gaas-850-nm-and-vcsel.mdx`
- Create: `src/pages/learn/inp-1310-1550-nm-and-high-speed-communication.mdx`
- Create: `src/pages/learn/soi-and-photonics-soi.mdx`
- Create: `src/pages/learn/silicon-nitride-low-loss-passive-platform.mdx`
- Create: `src/pages/learn/lnoi-and-tfln.mdx`
- Create: `src/pages/learn/why-no-single-material-wins-everything.mdx`

**Steps:**

1. Use `ConceptLayout` frontmatter.
2. Use Chinese explanations with English technical terms where useful.
3. Explain each platform by role, physical reason, engineering use, boundary, and misconception.
4. Include Further Reading links from the professional source pack.
5. Use one 3D placeholder where geometry helps most:
   - `soi-and-photonics-soi.mdx`: SOI stack and waveguide cross-section.
6. Run:

```bash
npm test
```

Expected:

- All page-existence tests pass.

## Task 3: Update Navigation

**Files:**

- Modify: `src/pages/learn/index.astro`
- Modify: `src/data/chapters.ts`

**Steps:**

1. Add grouped links for `05. Material Platforms`.
2. Point chapter 05 to `/learn/silicon-electronics-and-photonic-integration/`.
3. Keep later chapters unchanged.
4. Run:

```bash
npm test
npm run build
```

Expected:

- Tests pass.
- Build succeeds.

## Task 4: Update Progress

**Files:**

- Modify: `docs/development-progress.md`
- Modify: `docs/plans/2026-05-16-v1-material-platforms.md`

**Steps:**

1. Mark this plan completed after verification.
2. Update current state to include 05 material platforms.
3. Add the 05 page list.
4. Update expected local page count after build.
5. Suggest next target: `06 Raw Materials To Wafers`.

## Task 5: Verify, Commit, Push, And Deployment Check

**Files:**

- No additional source edits expected.

**Steps:**

1. Run:

```bash
npm test
npm run build
npm audit --omit=dev
```

2. Commit:

```bash
git add docs/development-progress.md docs/plans/2026-05-16-v1-material-platforms.md src/data/chapters.ts src/pages/learn tests/scaffold.test.mjs
git commit -m "feat: add material platform foundations"
```

3. Push:

```bash
git push
```

4. Watch GitHub Pages:

```bash
gh run list --repo xianfeng-zhu/LumenFab.io --branch main --workflow "Deploy to GitHub Pages" --limit 3
gh run watch <run-id> --repo xianfeng-zhu/LumenFab.io --exit-status
```

Expected:

- Tests pass.
- Build succeeds.
- Audit reports 0 vulnerabilities.
- GitHub Pages deployment succeeds.
- Working tree is clean.

## Completion Criteria

- [x] 05 plan exists.
- [x] Material-platform page-existence test follows TDD red/green.
- [x] Seven 05 reader-facing pages exist.
- [x] Learning path navigation links to 05 pages.
- [x] Chapter 05 path points to the first 05 page.
- [x] Progress file is updated.
- [x] Tests, build, audit, and GitHub Pages deployment succeed.
