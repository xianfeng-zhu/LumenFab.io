# Research Pack Workflow

This directory stores source packs for LumenFab.io content work.

Each chapter must have a source pack before reader-facing pages are written.

## Required Flow

For each chapter:

1. Search professional sources.
2. Save source notes.
3. Save useful images, diagrams, screenshots, or figure references when allowed.
4. Record source URLs, dates, license/usage notes, and why each item matters.
5. Map source material to the current chapter scope.
6. Mark material that belongs to later chapters.
7. Write the implementation plan.
8. Write reader-facing pages from the synthesized understanding, not by copying source structure.

## Directory Convention

Use this shape:

```text
docs/research/v1-<chapter-slug>/
  <chapter-number>-<topic>-professional-sources.md
  images/
    <source-id>-<short-topic>.<ext>
  downloads/
    <source-id>-<short-topic>.<ext>
```

Examples:

```text
docs/research/v1-raw-materials-to-wafers/
  06-raw-materials-to-wafers-professional-sources.md
  images/
    soitec-soi-wafer-stack.png
    sumitomo-inp-wafer-photo.jpg
  downloads/
    vendor-wafer-spec-sheet.pdf
```

## Source Priority

Prefer:

- standards bodies
- official product and platform documentation
- university course material
- peer-reviewed papers
- foundry and wafer supplier documentation
- reputable technical encyclopedias
- official conference/tutorial material

Use lower-priority sources only to identify terms or leads, not as primary support.

## Image And Figure Rules

Images are useful for learning, but this repository is public. Save only assets that are safe to keep in the repo.

Allowed:

- images with explicit reuse permission or compatible license
- official product photos or diagrams where redistribution is allowed
- original diagrams created for this project
- screenshots only when usage is clearly allowed or when kept out of the public repo

Not allowed:

- copyrighted figures copied from papers, articles, books, or vendor pages without permission
- paywalled figures
- images with unclear license copied into the public repo

If an image is useful but cannot be saved, record it as a figure reference and mark it `redraw needed`.

## Image Manifest Fields

Every saved or referenced visual should have an entry:

```text
Local path:
Source URL:
Source title:
Creator / organization:
Captured date:
License / usage:
Why it matters:
Potential page:
Alt text:
Status: saved | reference only | redraw needed
```

## Writing Rules

- Do not copy source text into pages.
- Do not copy research-note structure into the website.
- Do not let company mapping enter early physics/material chapters.
- Keep layer boundaries explicit.
- Use saved images as study aids first; decide later whether a public page should use the original image, a redrawn diagram, a 3D model, or no visual.
