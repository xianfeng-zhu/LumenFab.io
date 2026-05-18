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

test("homepage is a CPO knowledge entry rather than a learning-path pitch", async () => {
  const home = await read("src/pages/index.astro");
  const layout = await read("src/layouts/BaseLayout.astro");
  const packaging = await read("src/pages/components/packaging.mdx");
  assert.match(home, /CPO 光引擎拆解/);
  assert.match(home, /Light source/);
  assert.match(home, /PIC \/ optical circuit/);
  assert.match(home, /Optical I\/O/);
  assert.match(home, /Manufacturing and test/);
  assert.match(home, /Reliability and operations/);
  assert.match(home, /\/components\/laser-source\//);
  assert.match(home, /\/components\/pic\//);
  assert.match(home, /\/components\/optical-io\//);
  assert.match(home, /\/components\/packaging\//);
  assert.match(home, /\/components\/manufacturing-test\//);
  assert.match(home, /\/components\/reliability-operations\//);
  assert.match(home, /<a class="module-card"/);
  assert.doesNotMatch(home, /查看组件详情|查看验证链路|查看可靠性问题/);
  assert.doesNotMatch(home, /ASIC host boundary|\/components\/asic-host\//);
  assert.doesNotMatch(home, /\/components\/test\//);
  assert.match(packaging, /ASIC Host Boundary/);
  assert.match(packaging, /Switch ASIC \/ host package/);
  assert.doesNotMatch(layout, /知识库/);
  assert.doesNotMatch(home, /学习路径/);
  assert.doesNotMatch(home, /AI 集群/);
  assert.doesNotMatch(layout, /学习路径/);
  assert.doesNotMatch(layout, /3D 图解|model-demo/);
  assert.doesNotMatch(home, /结构图与 3D 模型|3D model slot demo|\/learn\/model-demo\//);
  assert.doesNotMatch(home, /Deep sample|先深化一个样板页/);
});

test("component hub pages exist", async () => {
  for (const page of [
    "src/pages/components/laser-source.mdx",
    "src/pages/components/pic.mdx",
    "src/pages/components/eic.mdx",
    "src/pages/components/optical-io.mdx",
    "src/pages/components/packaging.mdx",
    "src/pages/components/manufacturing-test.mdx",
    "src/pages/components/reliability-operations.mdx"
  ]) {
    await fileExists(page);
  }
});

test("component hub pages link to detail pages through relative paths", async () => {
  for (const page of [
    "src/pages/components/laser-source.mdx",
    "src/pages/components/pic.mdx",
    "src/pages/components/eic.mdx",
    "src/pages/components/optical-io.mdx",
    "src/pages/components/packaging.mdx",
    "src/pages/components/manufacturing-test.mdx",
    "src/pages/components/reliability-operations.mdx"
  ]) {
    const source = await read(page);
    assert.doesNotMatch(source, /\]\(\/learn\//);
    assert.match(source, /\]\(\.\.\/\.\.\/learn\//);
  }
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

test("raw materials to wafers pages exist", async () => {
  for (const page of [
    "src/pages/learn/in-p-ga-as-si-ge-and-linbo3.mdx",
    "src/pages/learn/raw-material-ingot-wafer-substrate-and-epi-ready-wafer.mdx",
    "src/pages/learn/high-purity-raw-materials.mdx",
    "src/pages/learn/polycrystal-synthesis.mdx",
    "src/pages/learn/single-crystal-growth.mdx",
    "src/pages/learn/wafer-slicing-lapping-polishing-and-cmp.mdx",
    "src/pages/learn/epi-ready-substrates.mdx",
    "src/pages/learn/inp-substrate.mdx",
    "src/pages/learn/gaas-substrate.mdx",
    "src/pages/learn/soi-wafer.mdx",
    "src/pages/learn/lnoi-wafer.mdx"
  ]) {
    await fileExists(page);
  }
});
