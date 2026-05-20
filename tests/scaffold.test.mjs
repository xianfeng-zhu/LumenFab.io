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
  assert.match(layout, /margin:\s+0 auto/);
});

test("term notes do not create horizontal page overflow when hidden", async () => {
  const component = await read("src/components/TermNote.astro");
  assert.match(component, /\.term-note__tip/);
  assert.match(component, /display:\s+none/);
  assert.match(component, /\.term-note:hover \.term-note__tip/);
  assert.match(component, /display:\s+block/);
  assert.match(component, /@media \(max-width: 720px\)/);
  assert.match(component, /position:\s+fixed/);
});

test("base layout provides a floating section menu for long pages", async () => {
  const layout = await read("src/layouts/BaseLayout.astro");
  assert.match(layout, /data-floating-toc/);
  assert.match(layout, /aria-label="章节目录"/);
  assert.match(layout, /document\.querySelectorAll\("\.concept-page h2, \.concept-page h3"\)/);
  assert.match(layout, /scroll-behavior:\s+smooth/);
  assert.match(layout, /@media \(hover: hover\) and \(pointer: fine\)/);
  assert.match(layout, /\.floating-toc:hover \.floating-toc__panel/);
  assert.match(layout, /\.floating-toc\[data-open="true"\] \.floating-toc__panel/);
  assert.match(layout, /\.floating-toc::before/);
  assert.match(layout, /toc\.hidden = false/);
  assert.match(layout, /toc\.setAttribute\("data-open", "true"\)/);
  assert.match(layout, /event\.stopPropagation\(\)/);
  assert.match(layout, /document\.addEventListener\("click"/);
  assert.match(layout, /event\.key === "Escape"/);
});

test("code blocks use readable light-theme styling", async () => {
  const config = await read("astro.config.mjs");
  const layout = await read("src/layouts/BaseLayout.astro");
  assert.match(config, /theme:\s+"github-light"/);
  assert.match(layout, /pre\.astro-code/);
  assert.match(layout, /background:\s+var\(--surface-2\)\s+!important/);
  assert.match(layout, /pre\.astro-code span/);
  assert.match(layout, /color:\s+inherit\s+!important/);
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
  assert.match(home, /CPO 光源系统/);
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
  await fileExists("src/components/TermNote.astro");
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

test("light source component page is organized as a full source-chain page", async () => {
  const page = await read("src/pages/components/laser-source.mdx");
  assert.match(page, /title: CPO 光源系统/);
  assert.match(page, /chapter: CPO 光引擎组件/);
  assert.match(page, /内置\/外置光源如何划分系统/);
  assert.match(page, /## 本页定位/);
  assert.match(page, /## 为什么 CPO 需要稳定光源/);
  assert.match(page, /## 总览：从 InP 衬底到激光器芯片/);
  assert.match(page, /## 材料层：为什么是 InP \/ III-V/);
  assert.match(page, /## 晶圆与外延：结构如何长出来/);
  assert.match(page, /## 有源区：电流如何变成光增益/);
  assert.match(page, /## 激光器内部微观结构/);
  assert.match(page, /## DFB 如何选择波长/);
  assert.match(page, /## 从 laser chip 到可用光源/);
  assert.match(page, /## CPO 里的光源放置方式/);
  assert.match(page, /## 评价指标/);
  assert.match(page, /## 总结：一颗光源从哪里来/);
  assert.match(page, /从 InP \/ III-V 材料为什么能够发光开始/);
  assert.match(page, /光源放在封装内或封装外/);
  assert.match(page, /先理解激光器本身如何从材料、外延和芯片工艺中形成/);
  assert.match(page, /制造阶段总览/);
  assert.match(page, /TOSA、ELSFP、光引擎输入和 PIC 接入属于封装与系统集成层面的内容/);
  assert.match(page, /MOCVD \/ MBE epitaxy/);
  assert.match(page, /p-contact \/ metal/);
  assert.match(page, /ridge waveguide/);
  assert.match(page, /高纯铟和磷等原料/);
  assert.match(page, /通信波段 III-V 外延的晶圆底座/);
  assert.match(page, /InP 相关 III-V 材料体系适合高效辐射复合/);
  assert.match(page, /Bragg wavelength/);
  assert.match(page, /chip test \/ burn-in/);
  assert.match(page, /TermNote/);
  assert.match(page, /Optical Internetworking Forum/);
  assert.match(page, /Transmitter Optical Sub-Assembly/);
  assert.match(page, /External Laser Small Form-Factor Pluggable/);
  assert.match(page, /Distributed Feedback/);
  assert.match(page, /默认讨论网络交换 CPO/);
  assert.match(page, /与 GPU \/ TPU die 分属不同语境/);
  assert.match(page, /external laser source/);
  assert.match(page, /QW \/ MQW 有源区/);
  assert.match(page, /材料名称和有源区名称属于其他层级/);
  assert.match(page, /光学输出/);
  assert.match(page, /噪声与单模性/);
  assert.match(page, /电热效率/);
  assert.match(page, /系统集成/);
  assert.match(page, /相关参考页会继续保留/);
  assert.match(page, /\.\.\/\.\.\/learn\/inp-dfb-laser-principle\//);
  assert.match(page, /OIF: External Laser Small Form Factor Pluggable/);
});

test("InP DFB laser principle deep page ties physics to CPO light source needs", async () => {
  await fileExists("src/pages/learn/inp-dfb-laser-principle.mdx");
  const page = await read("src/pages/learn/inp-dfb-laser-principle.mdx");
  assert.match(page, /title: InP \/ DFB laser principle/);
  assert.match(page, /## 1\. 激光器在做什么/);
  assert.match(page, /## 2\. 为什么是 InP/);
  assert.match(page, /## 3\. 从电流到光子/);
  assert.match(page, /## 4\. 受激辐射/);
  assert.match(page, /## 5\. 波导与谐振腔/);
  assert.match(page, /## 6\. DFB 光栅/);
  assert.match(page, /## 7\. 指标和应用/);
  assert.match(page, /## 8\. 完整链条/);
  assert.match(page, /## 9\. 后续 3D 模型应该展示什么/);
  assert.match(page, /lambda_B/);
  assert.match(page, /p-i-n carrier injection/);
  assert.match(page, /SCH/);
  assert.match(page, /grating coupling coefficient/);
  assert.match(page, /SMSR/);
  assert.match(page, /\.\.\/inp-substrate\//);
  assert.match(page, /\.\.\/spontaneous-vs-stimulated-emission\//);
  assert.match(page, /MIT OCW 6\.772/);
  assert.match(page, /Lumentum: High Power CW Laser/);
  assert.match(page, /Cornell ECE 533/);
  assert.match(page, /RP Photonics: Distributed Feedback Lasers/);
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
