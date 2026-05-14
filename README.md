# LumenFab.io

LumenFab.io is a Chinese learning site for AI data-center optics.

The site is organized as a first-principles learning path:

```text
Need for optical interconnects
→ optical link overview
→ semiconductor and optics basics
→ laser physics
→ material platforms
→ raw materials and wafers
→ epitaxy and active regions
→ devices
→ modulation and photonic integrated circuits
→ packaging and test
→ optical modules
→ system architectures
→ industry map
```

The structure is not copied from the research-note folder. Those notes are only source material. The website should stand on its own.

## Current Export

- [docs/site-structure.md](docs/site-structure.md): full website architecture.
- [docs/page-template.md](docs/page-template.md): reusable page template.
- [content/](content/): chapter skeletons.

## Website Scaffold

The first Astro scaffold is in `src/`.

```bash
npm install
npm run dev
npm run build
npm test
```

Local dev server:

```text
http://127.0.0.1:4321/
```

GitHub Pages deployment is configured in `.github/workflows/deploy.yml`.
No custom domain is configured yet.
If the repository stays private, GitHub Pages availability depends on the GitHub plan.

## 3D Model Assets

Future generated models should use static asset paths:

```text
public/models/
public/model-posters/
```

Use `.glb` for compact single-file delivery when possible. Do not rely on Git LFS for GitHub Pages assets.

## Design Rules

- Optimize for learning dependency, not supply-chain order.
- Explain the problem before naming the component.
- Separate physics, engineering, product, and company layers.
- Treat packaging and test as a first-class chapter.
- Put company and investment mapping at the end, after the reader understands the stack.
