# V1 Physics And Laser Foundations Implementation Plan

Status: Completed.

Completed on: 2026-05-16

Verification:

- `npm test`: passed
- `npm run build`: passed
- `npm audit --omit=dev`: passed
- Local browser check: passed
- Pages built locally: 30
- GitHub Pages run `25945740367`: passed

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add the 03 semiconductor/optics basics and 04 laser physics reader-facing pages that prepare readers for material platforms, epitaxy, device structures, and photonic integration.

**Architecture:** Keep Astro + MDX and the existing `ConceptLayout`. Use flexible concept pages rather than a rigid template. Use 3D placeholders only for concepts that benefit from geometry: band diagram, waveguide mode, Fabry-Perot cavity, DFB grating, and confinement.

**Tech Stack:** Astro, MDX, TypeScript, Node test runner, GitHub Pages, `@google/model-viewer` placeholders.

---

## Source Material

Use:

- `docs/site-structure.md`
- `docs/page-template.md`
- `docs/research/v1-physics-and-laser-foundations/03-04-semiconductor-optics-and-laser-physics.md`
- `/Users/zhuxianfeng/dev/tools/zhuazi-memory/default/docs/research/ai-datacenter-optics/references/semiconductor-basics-bandgap-k-pn-led.md`
- `/Users/zhuxianfeng/dev/tools/zhuazi-memory/default/docs/research/ai-datacenter-optics/lasers/fundamentals/inp-laser-how-it-emits-and-directs-light.md`
- `/Users/zhuxianfeng/dev/tools/zhuazi-memory/default/docs/research/ai-datacenter-optics/maps/laser-classification-map-qw-qd-platform-structure-architecture.md`

Rules:

- Do not copy the research notes verbatim.
- Keep company mapping out of 03-04.
- Keep `QW/MQW/QD`, `InP/GaAs/Si`, `DFB/VCSEL/PD`, `MZM/MRM`, `SiPh`, `LPO/CPO` in their proper layers.
- Put laser physics before material-platform explanation.

## Task 1: Commit Research And Plan

**Files:**

- Create: `docs/research/v1-physics-and-laser-foundations/03-04-semiconductor-optics-and-laser-physics.md`
- Create: `docs/plans/2026-05-16-v1-physics-and-laser-foundations.md`

**Steps:**

1. Create the research note and implementation plan.
2. Run `npm test`.
3. Commit:

```bash
git add docs/research/v1-physics-and-laser-foundations/03-04-semiconductor-optics-and-laser-physics.md docs/plans/2026-05-16-v1-physics-and-laser-foundations.md
git commit -m "docs: add physics and laser foundations plan"
```

Expected:

- Tests still pass.

## Task 2: Add Failing Page Coverage Tests

**Files:**

- Modify: `tests/scaffold.test.mjs`

**Steps:**

1. Add a test named `physics and laser foundation pages exist`.
2. Check these files:

```text
src/pages/learn/valence-band-conduction-band-and-bandgap.mdx
src/pages/learn/direct-vs-indirect-bandgap.mdx
src/pages/learn/pn-junction-and-carrier-injection.mdx
src/pages/learn/photon-wavelength-frequency-and-energy.mdx
src/pages/learn/refractive-index-and-total-internal-reflection.mdx
src/pages/learn/waveguides-and-optical-modes.mdx
src/pages/learn/interference-resonance-and-loss.mdx
src/pages/learn/optical-gain-and-threshold-current.mdx
src/pages/learn/fabry-perot-cavity.mdx
src/pages/learn/distributed-feedback-and-wavelength-selection.mdx
src/pages/learn/vertical-and-lateral-optical-confinement.mdx
src/pages/learn/laser-linewidth-and-mode-stability.mdx
src/pages/learn/why-semiconductor-lasers-are-temperature-sensitive.mdx
```

3. Run:

```bash
npm test
```

Expected:

- FAIL because pages do not exist yet.

## Task 3: Implement 03 Semiconductor And Optics Basics

**Files:**

- Create: `src/pages/learn/valence-band-conduction-band-and-bandgap.mdx`
- Create: `src/pages/learn/direct-vs-indirect-bandgap.mdx`
- Create: `src/pages/learn/pn-junction-and-carrier-injection.mdx`
- Create: `src/pages/learn/photon-wavelength-frequency-and-energy.mdx`
- Create: `src/pages/learn/refractive-index-and-total-internal-reflection.mdx`
- Create: `src/pages/learn/waveguides-and-optical-modes.mdx`
- Create: `src/pages/learn/interference-resonance-and-loss.mdx`

**Steps:**

1. Use `ConceptLayout` frontmatter.
2. Use Chinese explanations with English technical terms where useful.
3. Include 3D placeholders on:
   - bandgap page: band diagram.
   - waveguides page: waveguide mode.
4. Add Further Reading links to source-backed references.
5. Run:

```bash
npm test
```

Expected:

- The new page-coverage test still fails until Task 4 is complete.

## Task 4: Implement 04 Laser Physics

**Files:**

- Modify: `src/pages/learn/spontaneous-vs-stimulated-emission.mdx`
- Create: `src/pages/learn/optical-gain-and-threshold-current.mdx`
- Create: `src/pages/learn/fabry-perot-cavity.mdx`
- Create: `src/pages/learn/distributed-feedback-and-wavelength-selection.mdx`
- Create: `src/pages/learn/vertical-and-lateral-optical-confinement.mdx`
- Create: `src/pages/learn/laser-linewidth-and-mode-stability.mdx`
- Create: `src/pages/learn/why-semiconductor-lasers-are-temperature-sensitive.mdx`

**Steps:**

1. Expand spontaneous/stimulated emission into a full reader-facing page.
2. Include 3D placeholders on:
   - Fabry-Perot cavity.
   - DFB grating.
   - vertical/lateral confinement.
3. Keep FP, DFB, and confinement as physics/structure pages, not material-platform pages.
4. Run:

```bash
npm test
```

Expected:

- All tests pass.

## Task 5: Update Navigation

**Files:**

- Modify: `src/pages/learn/index.astro`
- Modify: `src/data/chapters.ts`
- Modify: `src/pages/index.astro` only if a new homepage entry improves reader flow.

**Steps:**

1. Add grouped links for `03. Semiconductor And Optics Basics`.
2. Add grouped links for `04. Laser Physics`.
3. Point chapter 03 to `/learn/valence-band-conduction-band-and-bandgap/`.
4. Keep chapter 04 pointing to `/learn/spontaneous-vs-stimulated-emission/`.
5. Run:

```bash
npm test
npm run build
```

Expected:

- Tests pass.
- Build succeeds.

## Task 6: Update Progress

**Files:**

- Modify: `docs/development-progress.md`
- Modify: `docs/plans/2026-05-16-v1-physics-and-laser-foundations.md`

**Steps:**

1. Mark the plan as completed after verification.
2. Update expected baseline page count.
3. Suggest next step: `05 Material Platforms`.
4. Run:

```bash
npm test
npm run build
npm audit --omit=dev
```

Expected:

- Tests pass.
- Build succeeds.
- Audit reports 0 vulnerabilities.

## Task 7: Browser And Deployment Verification

**Files:**

- No source edits expected.

**Steps:**

1. Start local dev server.
2. Browser-check:
   - `/learn/`
   - `/learn/valence-band-conduction-band-and-bandgap/`
   - `/learn/distributed-feedback-and-wavelength-selection/`
3. Commit implementation:

```bash
git add docs/development-progress.md docs/plans/2026-05-16-v1-physics-and-laser-foundations.md src/data/chapters.ts src/pages tests/scaffold.test.mjs
git commit -m "feat: add physics and laser foundations"
git push
```

4. Watch GitHub Pages:

```bash
gh run list --repo xianfeng-zhu/LumenFab.io --branch main --workflow "Deploy to GitHub Pages" --limit 3
gh run watch <run-id> --repo xianfeng-zhu/LumenFab.io --exit-status
```

5. Verify deployed pages with `curl`.

Expected:

- GitHub Pages deployment succeeds.
- Working tree is clean.

## Completion Criteria

- [x] Research note is committed.
- [x] 03 reader-facing pages exist.
- [x] 04 reader-facing pages exist.
- [x] Navigation points to 03-04 pages.
- [x] 3D placeholders are present only where they clarify geometry.
- [x] Tests, build, audit, local browser check, and GitHub Pages deployment succeed.
