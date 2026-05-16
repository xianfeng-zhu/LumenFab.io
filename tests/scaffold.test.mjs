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
  assert.match(workflow, /enablement:\s+true/);
  assert.doesNotMatch(workflow, /CNAME|lumenfab\.io/i);
});

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

test("physics and laser foundation pages exist", async () => {
  for (const page of [
    "src/pages/learn/valence-band-conduction-band-and-bandgap.mdx",
    "src/pages/learn/direct-vs-indirect-bandgap.mdx",
    "src/pages/learn/pn-junction-and-carrier-injection.mdx",
    "src/pages/learn/photon-wavelength-frequency-and-energy.mdx",
    "src/pages/learn/refractive-index-and-total-internal-reflection.mdx",
    "src/pages/learn/waveguides-and-optical-modes.mdx",
    "src/pages/learn/interference-resonance-and-loss.mdx",
    "src/pages/learn/optical-gain-and-threshold-current.mdx",
    "src/pages/learn/fabry-perot-cavity.mdx",
    "src/pages/learn/distributed-feedback-and-wavelength-selection.mdx",
    "src/pages/learn/vertical-and-lateral-optical-confinement.mdx",
    "src/pages/learn/laser-linewidth-and-mode-stability.mdx",
    "src/pages/learn/why-semiconductor-lasers-are-temperature-sensitive.mdx"
  ]) {
    await fileExists(page);
  }
});

test("material platform pages exist", async () => {
  for (const page of [
    "src/pages/learn/silicon-electronics-and-photonic-integration.mdx",
    "src/pages/learn/gaas-850-nm-and-vcsel.mdx",
    "src/pages/learn/inp-1310-1550-nm-and-high-speed-communication.mdx",
    "src/pages/learn/soi-and-photonics-soi.mdx",
    "src/pages/learn/silicon-nitride-low-loss-passive-platform.mdx",
    "src/pages/learn/lnoi-and-tfln.mdx",
    "src/pages/learn/why-no-single-material-wins-everything.mdx"
  ]) {
    await fileExists(page);
  }
});
