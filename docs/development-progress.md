# LumenFab.io Development Progress

Last updated: 2026-05-14

## Current State

Status: V1 site scaffold complete and deployed. Core learning path research is complete. Next active plan is ready.

Repository:

- GitHub: https://github.com/xianfeng-zhu/LumenFab.io
- Branch: `main`
- Remote: `origin`
- Visibility: public

Deployment:

- GitHub Pages: https://xianfeng-zhu.github.io/LumenFab.io/
- Deployment mode: GitHub Actions workflow
- Workflow: `.github/workflows/deploy.yml`

Latest known successful deployment:

- Run status: success
- Trigger: push to `main`
- Commit: `1fe9a33 docs: mark v1 scaffold plan complete`

Active plan:

- `docs/plans/2026-05-14-v1-core-learning-path-content.md`

## Completed

- Created project information architecture.
- Created chapter skeletons under `content/`.
- Created page template in `docs/page-template.md`.
- Created site structure in `docs/site-structure.md`.
- Created V1 scaffold plan:
  - `docs/plans/2026-05-14-v1-site-scaffold-with-3d.md`
- Marked V1 scaffold plan as completed.
- Built Astro + MDX site scaffold.
- Added flexible concept page layout.
- Added learning path navigation.
- Added sample pages:
  - one-page optics stack
  - copper vs optical links
  - Tx path and Rx path
  - spontaneous vs stimulated emission
  - why photonic packaging is hard
  - 3D model slot demo
- Added 3D model placeholder support:
  - `src/components/ModelViewer.astro`
  - `src/components/ModelPlaceholder.astro`
  - `public/models/`
  - `public/model-posters/`
- Added GitHub Pages deployment workflow.
- Enabled GitHub Pages after repository was made public.
- Verified deployed site returns HTTP 200.
- Launched two research subagents for the next content phase.
- Added core learning path research notes:
  - `docs/research/v1-core-learning-path/00-01-ai-clusters-and-optical-interconnects.md`
  - `docs/research/v1-core-learning-path/02-optical-link-tx-rx-transceiver.md`
- Created next implementation plan:
  - `docs/plans/2026-05-14-v1-core-learning-path-content.md`

## Verification Commands

Use these before claiming scaffold health:

```bash
npm test
npm run build
npm audit --omit=dev
gh run list --repo xianfeng-zhu/LumenFab.io --limit 5
```

Expected current baseline:

- `npm test`: 5 tests pass.
- `npm run build`: 8 pages build.
- `npm audit --omit=dev`: 0 vulnerabilities.
- latest `Deploy to GitHub Pages` run: success.

## Important Decisions

- Use `Astro + MDX` for the website.
- Keep content pages flexible; do not force every knowledge point into one rigid template.
- Use GitHub Pages for deployment.
- Do not configure a custom domain yet.
- Treat 3D as a first-class future teaching capability.
- Use pre-generated `.glb` / `.gltf` assets later.
- Use `@google/model-viewer` for simple model display.
- Use Three.js later for complex guided scenes, exploded views, hotspots, and animations.
- Do not copy the research-note structure into the website.
- Use research notes as source material only.
- Keep company and investment mapping at the end of the learning path.

## Open Notes

- Build currently emits a Vite chunk-size warning because the 3D viewer dependency is large.
- This warning does not block build or deployment.
- Later optimization: lazy-load 3D viewer only on pages that need models.

## Suggested Next Step

Execute the active plan:

```text
docs/plans/2026-05-14-v1-core-learning-path-content.md
```

Suggested scope:

- `00 Start Here`
  - What this site explains
  - The one-page stack map
  - How to read the site
- `01 Why Optical Interconnects`
  - Why AI clusters stress interconnects
  - Copper vs optical links
  - Bandwidth density and power per bit
- `02 Optical Link Overview`
  - Electrical signal to optical signal
  - Tx path
  - Rx path
  - What lane means

Reason:

- These chapters define the reader's entry path.
- They establish vocabulary for later laser, material, packaging, module, and system chapters.
- They follow `docs/site-structure.md`: explain demand and link behavior before diving into components.

Next execution target:

- Start with Task 2 in the active plan: add page coverage tests for the 00-02 content pages.

## Resume Checklist

When resuming:

1. Read this file.
2. Read `docs/site-structure.md`.
3. Read `docs/page-template.md`.
4. Check status:

```bash
git status --short --branch
gh run list --repo xianfeng-zhu/LumenFab.io --limit 5
```

5. If continuing content work, create or update the active plan under `docs/plans/`.
6. Keep commits small and push after each completed unit.
