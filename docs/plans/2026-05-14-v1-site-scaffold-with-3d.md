# LumenFab.io V1 Site Scaffold With 3D Design

## Goal

Create the first website scaffold for LumenFab.io: a Chinese learning-path site for AI data-center optical interconnects.

The scaffold should support static content, flexible page structures, future 3D model embeds, and GitHub Pages deployment. It should not attempt to write the final technical content yet.

## Positioning

LumenFab.io is a structured learning path. It is not a news site, investment site, company database, or flat glossary.

The first version should help readers move from system demand to physical principles, then to devices, packaging, modules, architectures, and finally company mapping.

## Content Structure

The current chapter sequence remains the backbone:

```text
00 Start Here
01 Why Optical Interconnects
02 Optical Link Overview
03 Semiconductor And Optics Basics
04 Laser Physics
05 Material Platforms
06 Raw Materials To Wafers
07 Epitaxy And Active Regions
08 Device Layer
09 Modulation And PIC
10 Packaging And Test
11 Optical Modules
12 System Architectures
13 Industry Map
```

The first website scaffold should expose these chapters as a learning path. It should keep the existing `content/` directory as source planning material and use website-native content under `src/content/`.

## Flexible Page Model

Do not hard-code every knowledge page into one rigid template.

Use a shared concept page layout with optional sections:

- one-sentence answer
- why this exists
- prerequisites
- physical principle
- engineering implementation
- key metrics
- common misconceptions
- how it connects
- short version
- optional 3D model slot
- optional diagram slot
- optional glossary links

Different knowledge points can use different subsets. A page about a physical principle, a device structure, a packaging flow, and a company map should not be forced into the exact same visible structure.

## 3D Model Capability

3D is a first-class future teaching capability.

Initial scaffold requirements:

- Provide a reusable `ModelViewer` component.
- Accept pre-generated `.glb` or `.gltf` assets.
- Support title, caption, poster image, and fallback state.
- If the model file is missing, the page should show a placeholder instead of breaking.
- Keep room for future advanced Three.js scenes.

Expected future model examples:

- DFB laser microscopic structure: active region, waveguide, grating, confinement layers, output facet.
- CPO / advanced packaging structure: ASIC, EIC, PIC, interposer, substrate, fiber array, external laser source.
- Optical link path: Tx, fiber, Rx, and signal conversion.

Recommended initial asset layout:

```text
public/models/
public/model-posters/
src/data/models.ts
```

## Deployment

Use GitHub Pages for v1 deployment.

Implementation shape:

```text
GitHub repo
→ GitHub Actions
→ Astro build
→ GitHub Pages
```

Do not configure a custom domain in v1. The domain can be added later.

Model asset note:

- Small and medium `.glb` files can live in the repository.
- Git LFS should not be used for GitHub Pages assets.
- If models become large or numerous, move model assets to a separate CDN or object storage later.

## Recommended Stack

- Astro
- MDX
- TypeScript
- Static GitHub Pages deployment
- `@google/model-viewer` for basic 3D model display
- Three.js later for advanced guided scenes

## V1 Pages

Create scaffold pages only:

- Home page
- Learning path page
- Five sample concept pages:
  - one-page optics stack
  - copper vs optical links
  - Tx path and Rx path
  - spontaneous vs stimulated emission
  - why photonic packaging is hard
- Model demo placeholder page

## Acceptance Checks

- `npm test` verifies required scaffold files and content markers.
- `npm run build` succeeds.
- Home page renders.
- Learning path page lists chapters 00-13.
- A sample MDX page can include the 3D model component.
- GitHub Pages workflow exists.
