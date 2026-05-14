import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

async function fileExists(path) {
  await access(new URL(path, root));
}

async function read(path) {
  return readFile(new URL(path, root), "utf8");
}

test("Astro scaffold exposes required routes and layouts", async () => {
  await fileExists("astro.config.mjs");
  await fileExists("src/layouts/BaseLayout.astro");
  await fileExists("src/layouts/ConceptLayout.astro");
  await fileExists("src/pages/index.astro");
  await fileExists("src/pages/learn/index.astro");
});

test("3D model capability is present without requiring a real model asset", async () => {
  await fileExists("src/components/ModelViewer.astro");
  await fileExists("src/components/ModelPlaceholder.astro");
  const component = await read("src/components/ModelViewer.astro");
  assert.match(component, /@google\/model-viewer/);
  assert.match(component, /fallback/i);
});

test("concept layout reads MDX frontmatter for title metadata", async () => {
  const layout = await read("src/layouts/ConceptLayout.astro");
  assert.match(layout, /frontmatter/);
  assert.match(layout, /frontmatter\.title/);
  assert.match(layout, /frontmatter\.description/);
});

test("learning path keeps all 14 chapters in order", async () => {
  const data = await read("src/data/chapters.ts");
  for (const chapter of [
    "00. Start Here",
    "01. Why Optical Interconnects",
    "02. Optical Link Overview",
    "03. Semiconductor And Optics Basics",
    "04. Laser Physics",
    "05. Material Platforms",
    "06. Raw Materials To Wafers",
    "07. Epitaxy And Active Regions",
    "08. Device Layer",
    "09. Modulation And PIC",
    "10. Packaging And Test",
    "11. Optical Modules",
    "12. System Architectures",
    "13. Industry Map"
  ]) {
    assert.match(data, new RegExp(chapter.replaceAll(".", "\\.")));
  }
});

test("GitHub Pages deployment workflow is configured without a custom domain", async () => {
  const workflow = await read(".github/workflows/deploy.yml");
  assert.match(workflow, /Deploy to GitHub Pages/);
  assert.match(workflow, /withastro\/action/);
  assert.doesNotMatch(workflow, /CNAME|lumenfab\.io/i);
});
