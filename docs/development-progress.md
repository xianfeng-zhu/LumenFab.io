# LumenFab.io Development Progress

Last updated: 2026-05-16

## Current State

Status: V1 site scaffold, core learning path 00-02, physics/laser foundations 03-04, and material platforms 05 are deployed.

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
- Commit: `73214a9 feat: add material platform foundations`
- Run: `25959921062`

Completed plan:

- `docs/plans/2026-05-14-v1-core-learning-path-content.md`
- `docs/plans/2026-05-16-v1-physics-and-laser-foundations.md`
- `docs/plans/2026-05-16-v1-material-platforms.md`

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
- Added physics and laser foundations research note:
  - `docs/research/v1-physics-and-laser-foundations/03-04-semiconductor-optics-and-laser-physics.md`
- Created physics and laser foundations implementation plan:
  - `docs/plans/2026-05-16-v1-physics-and-laser-foundations.md`
- Implemented 03-04 reader-facing pages locally:
  - `src/pages/learn/valence-band-conduction-band-and-bandgap.mdx`
  - `src/pages/learn/direct-vs-indirect-bandgap.mdx`
  - `src/pages/learn/pn-junction-and-carrier-injection.mdx`
  - `src/pages/learn/photon-wavelength-frequency-and-energy.mdx`
  - `src/pages/learn/refractive-index-and-total-internal-reflection.mdx`
  - `src/pages/learn/waveguides-and-optical-modes.mdx`
  - `src/pages/learn/interference-resonance-and-loss.mdx`
  - `src/pages/learn/spontaneous-vs-stimulated-emission.mdx`
  - `src/pages/learn/optical-gain-and-threshold-current.mdx`
  - `src/pages/learn/fabry-perot-cavity.mdx`
  - `src/pages/learn/distributed-feedback-and-wavelength-selection.mdx`
  - `src/pages/learn/vertical-and-lateral-optical-confinement.mdx`
  - `src/pages/learn/laser-linewidth-and-mode-stability.mdx`
  - `src/pages/learn/why-semiconductor-lasers-are-temperature-sensitive.mdx`
- Updated learning path navigation for 03-04.
- Added material-platform professional source notes:
  - `docs/research/v1-material-platforms/05-material-platforms-professional-sources.md`
- Created material-platform implementation plan:
  - `docs/plans/2026-05-16-v1-material-platforms.md`
- Implemented 05 material-platform reader-facing pages:
  - `src/pages/learn/silicon-electronics-and-photonic-integration.mdx`
  - `src/pages/learn/gaas-850-nm-and-vcsel.mdx`
  - `src/pages/learn/inp-1310-1550-nm-and-high-speed-communication.mdx`
  - `src/pages/learn/soi-and-photonics-soi.mdx`
  - `src/pages/learn/silicon-nitride-low-loss-passive-platform.mdx`
  - `src/pages/learn/lnoi-and-tfln.mdx`
  - `src/pages/learn/why-no-single-material-wins-everything.mdx`
- Updated learning path navigation for 05.

## Verification Commands

Use these before claiming scaffold health:

```bash
npm test
npm run build
npm audit --omit=dev
gh run list --repo xianfeng-zhu/LumenFab.io --limit 5
```

Expected current baseline after 05 content:

- `npm test`: 8 tests pass.
- `npm run build`: 37 pages build.
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
- Each chapter must start with a professional source pack before reader-facing pages are written.
- Source packs should include useful visual references and saved image assets when license/usage permits.
- Public repo must not store copyrighted third-party figures without permission; mark those as `redraw needed` instead.
- Keep company and investment mapping at the end of the learning path.

## Open Notes

- Build currently emits a Vite chunk-size warning because the 3D viewer dependency is large.
- This warning does not block build or deployment.
- Later optimization: lazy-load 3D viewer only on pages that need models.

## Suggested Next Step

After publishing 05, create the next plan:

```text
docs/plans/2026-05-16-v1-raw-materials-to-wafers.md
```

Suggested scope:

- `06 Raw Materials To Wafers`
  - In, P, Ga, As, Si, Ge, LiNbO3: what each is used for
  - High-purity raw materials
  - Polycrystal synthesis
  - Single-crystal growth
  - Wafer slicing, grinding, polishing, and CMP
  - Epi-ready substrates
  - InP substrate
  - GaAs substrate
  - SOI wafer
  - LNOI wafer

Reason:

- 05 explains why material platforms split roles.
- 06 can now explain how those platform names become physical substrate and wafer starting points.
- Keep raw materials and wafer manufacturing before epitaxy, active-region detail, device structures, and packaging.

Next execution target:

- Deploy 05, then create and execute the 06 raw-materials-to-wafers plan.

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
6. Before writing a new chapter, create a source pack under `docs/research/v1-<chapter-slug>/` using `docs/research/source-pack-template.md`.
7. Include an image/figure manifest and save allowed visual assets under the chapter research folder.
8. Keep commits small and push after each completed unit.
