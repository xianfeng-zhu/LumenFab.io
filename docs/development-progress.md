# LumenFab.io Development Progress

Last updated: 2026-05-18

## Current State

Status: V1 site scaffold, core learning path 00-02, physics/laser foundations 03-04, material platforms 05, raw materials to wafers 06, and the CPO component-entry homepage are deployed. Light source / laser supply professional source pack is created locally for the next content pass.

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
- Commit: `ea3e2bc feat: add raw materials to wafers foundations`
- Run: `25963549438`

Completed plan:

- `docs/plans/2026-05-14-v1-core-learning-path-content.md`
- `docs/plans/2026-05-16-v1-physics-and-laser-foundations.md`
- `docs/plans/2026-05-16-v1-material-platforms.md`
- `docs/plans/2026-05-16-v1-raw-materials-to-wafers.md`

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
- Added raw-materials-to-wafers professional source pack and visual assets:
  - `docs/research/v1-raw-materials-to-wafers/06-raw-materials-to-wafers-professional-sources.md`
  - `docs/research/v1-raw-materials-to-wafers/images/`
- Created raw-materials-to-wafers implementation plan:
  - `docs/plans/2026-05-16-v1-raw-materials-to-wafers.md`
- Implemented 06 raw-materials-to-wafers reader-facing pages:
  - `src/pages/learn/in-p-ga-as-si-ge-and-linbo3.mdx`
  - `src/pages/learn/raw-material-ingot-wafer-substrate-and-epi-ready-wafer.mdx`
  - `src/pages/learn/high-purity-raw-materials.mdx`
  - `src/pages/learn/polycrystal-synthesis.mdx`
  - `src/pages/learn/single-crystal-growth.mdx`
  - `src/pages/learn/wafer-slicing-lapping-polishing-and-cmp.mdx`
  - `src/pages/learn/epi-ready-substrates.mdx`
  - `src/pages/learn/inp-substrate.mdx`
  - `src/pages/learn/gaas-substrate.mdx`
  - `src/pages/learn/soi-wafer.mdx`
  - `src/pages/learn/lnoi-wafer.mdx`
- Added public original SVG figures for 06:
  - `public/figures/06-raw-to-wafer-flow.svg`
  - `public/figures/06-engineered-substrate-stacks.svg`
- Updated learning path navigation for 06.
- Reworked homepage around CPO component entrances:
  - `Light source / laser supply`
  - `PIC / optical circuit`
  - `EIC / driver and receiver`
  - `Optical I/O / fiber coupling`
  - `Package integration`
  - `Manufacturing and test`
  - `Reliability and operations`
- Added component hub pages:
  - `src/pages/components/laser-source.mdx`
  - `src/pages/components/pic.mdx`
  - `src/pages/components/eic.mdx`
  - `src/pages/components/optical-io.mdx`
  - `src/pages/components/packaging.mdx`
  - `src/pages/components/manufacturing-test.mdx`
  - `src/pages/components/reliability-operations.mdx`
- Created Light source / laser supply professional source pack:
  - `docs/research/v1-light-source-laser-supply/light-source-laser-supply-professional-sources.md`
  - `docs/research/v1-light-source-laser-supply/downloads/oif-elsfp-01-0.pdf`
  - `docs/research/v1-light-source-laser-supply/downloads/oif-mgt-co-packaging-elsfp-01-0.pdf`
  - `docs/research/v1-light-source-laser-supply/downloads/oif-co-packaging-framework-fd-01-0.pdf`
  - `docs/research/v1-light-source-laser-supply/downloads/frontiers-cpo-status-challenges-solutions-2023.pdf`
  - `docs/research/v1-light-source-laser-supply/downloads/furukawa-external-laser-source-cpo-2024.pdf`
- Extracted text versions of the downloaded PDFs for local search.
- Saved local-only reference images for Light source / laser supply under:
  - `docs/research/v1-light-source-laser-supply/reference-images/`
  - This directory is ignored by git and intended for redraw / 3D-model reference only.

## Verification Commands

Use these before claiming scaffold health:

```bash
npm test
npm run build
npm audit --omit=dev
gh run list --repo xianfeng-zhu/LumenFab.io --limit 5
```

Expected current baseline after CPO component entry structure:

- `npm test`: 12 tests pass.
- `npm run build`: 55 pages build.
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

After publishing 06, create the next plan:

```text
docs/plans/2026-05-16-v1-epitaxy-active-regions.md
```

Suggested scope:

- `07 Epitaxy And Active Regions`
  - What epitaxy means
  - MOCVD and MBE
  - Lattice matching and strain
  - Defects, dislocations, and non-radiative recombination
  - Quantum wells and multiple quantum wells
  - Quantum dots
  - InGaAsP and AlGaInAs on InP
  - InAs/GaAs QD systems
  - Ge-on-Si for photodetectors
  - Dark current

Reason:

- 06 explains how materials become substrates and epi-ready wafers.
- 07 can now explain how functional layers and active regions are grown on those prepared wafers.
- Keep epitaxy and active-region concepts before device structures and PIC-level routing.

Next execution target:

- Deploy 06, then create a source pack and implementation plan for 07 epitaxy and active regions.

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
