# V1 Core Learning Path Content Implementation Plan

Status: Completed

Completed on: 2026-05-15

Verification:

- `npm test`: passed
- `npm run build`: passed
- Pages built locally: 17

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Turn the current scaffold pages into the first real 00-02 learning path pages for LumenFab.io.

**Architecture:** Keep Astro + MDX. Use flexible concept pages, not one rigid template. Source-backed research notes stay under `docs/research/v1-core-learning-path/`, while reader-facing pages stay under `src/pages/learn/`.

**Tech Stack:** Astro, MDX, TypeScript, Node test runner, GitHub Pages.

---

## Source Material

Use these newly created research notes:

- `docs/research/v1-core-learning-path/00-01-ai-clusters-and-optical-interconnects.md`
- `docs/research/v1-core-learning-path/02-optical-link-tx-rx-transceiver.md`

Do not copy the research notes into public pages. Convert them into original learning content.

## Content Rules

- Start with the problem, not the acronym.
- Keep company and investment mapping out of 00-02.
- Distinguish stable engineering facts from dynamic roadmap claims.
- Do not write “optical always beats copper.”
- Do not write “copper is obsolete.”
- Explain 400G / 800G / 1.6T / 3.2T as aggregate rates assembled from lanes.
- Always clarify whether `lane` means electrical lane or optical lane.
- Avoid bare `channel`; use `fiber channel`, `data lane`, or another precise phrase.

## Target Pages

### 00. Start Here

Files:

- Modify: `src/pages/index.astro`
- Modify: `src/pages/learn/index.astro`
- Modify: `src/pages/learn/one-page-optics-stack.mdx`
- Create: `src/pages/learn/what-this-site-explains.mdx`
- Create: `src/pages/learn/how-to-read-this-site.mdx`

Reader outcome:

- Understand the website scope.
- See the full stack once before details.
- Know that company names come after technical layers.

### 01. Why Optical Interconnects

Files:

- Create: `src/pages/learn/why-ai-clusters-stress-interconnects.mdx`
- Modify: `src/pages/learn/copper-vs-optical-links.mdx`
- Create: `src/pages/learn/bandwidth-density-and-power-per-bit.mdx`
- Create: `src/pages/learn/why-800g-1-6t-and-3-2t-matter.mdx`

Reader outcome:

- Understand why AI clusters behave like compute fabrics.
- Understand scale-up vs scale-out at an introductory level.
- Understand why copper gets harder with lane rate and distance.
- Understand what optics improves and what it costs.

### 02. Optical Link Overview

Files:

- Create: `src/pages/learn/electrical-signal-to-optical-signal.mdx`
- Modify: `src/pages/learn/tx-rx-path.mdx`
- Create: `src/pages/learn/lane-channel-and-wavelength.mdx`
- Create: `src/pages/learn/inside-a-transceiver.mdx`
- Create: `src/pages/learn/dr-fr-lr-and-psm-wdm.mdx`

Reader outcome:

- Understand a link as an electrical-optical-electrical transducer chain.
- Understand Tx and Rx bottlenecks separately.
- Understand electrical lane vs optical lane vs wavelength.
- Understand a transceiver as a compact system, not a simple adapter.

## Task 1: Commit Research Notes

**Files:**

- Add: `docs/research/v1-core-learning-path/00-01-ai-clusters-and-optical-interconnects.md`
- Add: `docs/research/v1-core-learning-path/02-optical-link-tx-rx-transceiver.md`

**Step 1: Review files exist**

Run:

```bash
test -f docs/research/v1-core-learning-path/00-01-ai-clusters-and-optical-interconnects.md
test -f docs/research/v1-core-learning-path/02-optical-link-tx-rx-transceiver.md
```

Expected: both commands exit 0.

**Step 2: Commit**

```bash
git add docs/research/v1-core-learning-path
git commit -m "docs: add core learning path research notes"
```

## Task 2: Add Page Coverage Tests

**Files:**

- Modify: `tests/scaffold.test.mjs`

**Step 1: Add failing test**

Add a test that checks these files exist:

```js
test("core learning path content pages exist", async () => {
  for (const page of [
    "src/pages/learn/what-this-site-explains.mdx",
    "src/pages/learn/how-to-read-this-site.mdx",
    "src/pages/learn/why-ai-clusters-stress-interconnects.mdx",
    "src/pages/learn/bandwidth-density-and-power-per-bit.mdx",
    "src/pages/learn/why-800g-1-6t-and-3-2t-matter.mdx",
    "src/pages/learn/electrical-signal-to-optical-signal.mdx",
    "src/pages/learn/lane-channel-and-wavelength.mdx",
    "src/pages/learn/inside-a-transceiver.mdx",
    "src/pages/learn/dr-fr-lr-and-psm-wdm.mdx"
  ]) {
    await fileExists(page);
  }
});
```

**Step 2: Verify failure**

Run:

```bash
npm test
```

Expected: fails because new page files do not exist yet.

## Task 3: Create 00 Start Here Pages

**Files:**

- Modify: `src/pages/index.astro`
- Modify: `src/pages/learn/index.astro`
- Modify: `src/pages/learn/one-page-optics-stack.mdx`
- Create: `src/pages/learn/what-this-site-explains.mdx`
- Create: `src/pages/learn/how-to-read-this-site.mdx`

**Step 1: Write pages**

Use this structure:

- `what-this-site-explains`: scope, non-goals, learning path promise.
- `one-page-optics-stack`: one compact stack map from AI demand to industry map.
- `how-to-read-this-site`: suggested path, glossary as side path, 3D model note.

**Step 2: Update learning index**

Add links under a `00 Start Here` section in `src/pages/learn/index.astro`.

**Step 3: Verify**

Run:

```bash
npm test
npm run build
```

Expected: tests still fail until all target pages exist; build should pass if created pages are valid.

## Task 4: Create 01 Why Optical Interconnects Pages

**Files:**

- Create: `src/pages/learn/why-ai-clusters-stress-interconnects.mdx`
- Modify: `src/pages/learn/copper-vs-optical-links.mdx`
- Create: `src/pages/learn/bandwidth-density-and-power-per-bit.mdx`
- Create: `src/pages/learn/why-800g-1-6t-and-3-2t-matter.mdx`

**Step 1: Write pages from research**

Use:

- `docs/research/v1-core-learning-path/00-01-ai-clusters-and-optical-interconnects.md`

Key messages:

- AI workloads make the network part of the compute fabric.
- Copper remains strong at short reach.
- Copper gets expensive at high lane rate and longer reach because compensation power and signal integrity complexity rise.
- Optical links improve reach and density but add optical conversion and packaging cost.
- 400G / 800G / 1.6T / 3.2T are aggregate rates.

**Step 2: Avoid dynamic claims**

Do not include:

- vendor market share
- shipment forecasts
- stock implications
- exact future CPO adoption timelines

**Step 3: Verify**

Run:

```bash
npm test
npm run build
```

Expected: tests still fail until Task 5 pages exist; build should pass.

## Task 5: Create 02 Optical Link Overview Pages

**Files:**

- Create: `src/pages/learn/electrical-signal-to-optical-signal.mdx`
- Modify: `src/pages/learn/tx-rx-path.mdx`
- Create: `src/pages/learn/lane-channel-and-wavelength.mdx`
- Create: `src/pages/learn/inside-a-transceiver.mdx`
- Create: `src/pages/learn/dr-fr-lr-and-psm-wdm.mdx`

**Step 1: Write pages from research**

Use:

- `docs/research/v1-core-learning-path/02-optical-link-tx-rx-transceiver.md`

Key messages:

- An optical link is a transducer chain.
- Tx shapes and launches a usable optical waveform.
- Rx detects and reconstructs a weak, distorted waveform.
- Electrical lane, optical lane, wavelength, and fiber channel are different concepts.
- PSM and WDM are tradeoffs, not a universal hierarchy.

**Step 2: Add 3D / diagram placeholders where helpful**

Good candidates:

- Tx/Rx block diagram placeholder.
- DR4 parallel fiber topology placeholder.
- FR4 WDM topology placeholder.
- module exploded view placeholder.

Use existing `ModelViewer` only where a future 3D asset is plausible.

**Step 3: Verify**

Run:

```bash
npm test
npm run build
```

Expected: all tests pass and build succeeds.

## Task 6: Navigation Cleanup

**Files:**

- Modify: `src/pages/learn/index.astro`
- Modify: `src/data/chapters.ts`

**Step 1: Add grouped links**

Learning index should show:

- 00 Start Here
- 01 Why Optical Interconnects
- 02 Optical Link Overview
- Later chapters as coming next

**Step 2: Keep chapter order**

Do not move laser physics, material platforms, packaging/test, or industry map.

**Step 3: Verify**

Run:

```bash
npm test
npm run build
```

Expected: pass.

## Task 7: Update Progress Log

**Files:**

- Modify: `docs/development-progress.md`

**Step 1: Add active plan**

Record:

- Active plan: `docs/plans/2026-05-14-v1-core-learning-path-content.md`
- Research notes added.
- Next execution target: Task 1.

**Step 2: Commit**

```bash
git add docs/plans/2026-05-14-v1-core-learning-path-content.md docs/development-progress.md
git commit -m "docs: plan core learning path content"
```

## Final Verification

Run:

```bash
npm test
npm run build
npm audit --omit=dev
git status --short --branch
```

Expected:

- Tests pass.
- Build succeeds.
- Audit reports 0 vulnerabilities.
- Working tree is clean after commits.

## Completion Criteria

- [x] Research notes are committed.
- [x] 00-02 reader-facing pages exist.
- [x] Navigation points to those pages.
- [x] 3D placeholders are present only where they serve explanation.
- [ ] GitHub Pages deployment succeeds after push.
