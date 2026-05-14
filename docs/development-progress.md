# LumenFab.io Development Progress

Last updated: 2026-05-15

## Current State

Status: V1 site scaffold and core learning path 00-02 content are deployed.

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
- Commit: `c697572 feat: add core learning path content`
- Run: `25889940132`

Completed active plan:

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
- Implemented 00-02 reader-facing pages:
  - `src/pages/learn/what-this-site-explains.mdx`
  - `src/pages/learn/one-page-optics-stack.mdx`
  - `src/pages/learn/how-to-read-this-site.mdx`
  - `src/pages/learn/why-ai-clusters-stress-interconnects.mdx`
  - `src/pages/learn/copper-vs-optical-links.mdx`
  - `src/pages/learn/bandwidth-density-and-power-per-bit.mdx`
  - `src/pages/learn/why-800g-1-6t-and-3-2t-matter.mdx`
  - `src/pages/learn/electrical-signal-to-optical-signal.mdx`
  - `src/pages/learn/tx-rx-path.mdx`
  - `src/pages/learn/lane-channel-and-wavelength.mdx`
  - `src/pages/learn/inside-a-transceiver.mdx`
  - `src/pages/learn/dr-fr-lr-and-psm-wdm.mdx`
- Updated learning path navigation for 00-02.

## Verification Commands

Use these before claiming scaffold health:

```bash
npm test
npm run build
npm audit --omit=dev
gh run list --repo xianfeng-zhu/LumenFab.io --limit 5
```

Expected current baseline after 00-02 content:

- `npm test`: 6 tests pass.
- `npm run build`: 17 pages build.
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

Create the next plan:

```text
docs/plans/2026-05-15-v1-physics-and-laser-foundations.md
```

Suggested scope:

- `03 Semiconductor And Optics Basics`
  - Bandgap
  - Direct vs indirect bandgap
  - PN junction and carrier injection
  - Refractive index, total internal reflection, waveguides and modes
- `04 Laser Physics`
  - Spontaneous vs stimulated emission
  - Gain and threshold current
  - Fabry-Perot cavity
  - Distributed feedback and wavelength selection

Reason:

- 00-02 now define the problem and link-level mental model.
- 03-04 should provide the minimum physics needed before material platforms.
- Laser physics must remain before material platforms so readers understand what the material must provide.

Next execution target:

- Create and execute the 03-04 plan.

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
