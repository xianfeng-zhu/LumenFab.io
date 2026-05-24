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

test("term notes clamp visible tooltips inside the viewport", async () => {
  const component = await read("src/components/TermNote.astro");
  assert.match(component, /\.term-note__tip/);
  assert.match(component, /\.term-note\s*{\s*position:\s+relative/s);
  assert.match(component, /\.term-note__tip\s*{[^}]*position:\s+absolute/s);
  assert.match(component, /display:\s+none/);
  assert.match(component, /left:\s+50%/);
  assert.match(component, /--term-note-shift/);
  assert.match(component, /getBoundingClientRect/);
  assert.match(component, /data-term-note-placement/);
  assert.match(component, /\.term-note:hover \.term-note__tip/);
  assert.match(component, /display:\s+block/);
  assert.match(component, /@media \(max-width: 720px\)/);
  assert.match(component, /--term-note-fixed-left/);
  assert.match(component, /--term-note-fixed-top/);
  assert.match(component, /mobileQuery\.matches/);
  assert.match(component, /position:\s+fixed/);
  assert.match(component, /width:\s+min\(20rem,\s+calc\(100vw - 2rem\)\)/);
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
  assert.match(home, /激光源/);
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

test("light source component page is organized as a focused laser-source page", async () => {
  const page = await read("src/pages/components/laser-source.mdx");
  assert.match(page, /title: 激光源/);
  assert.match(page, /chapter: 光引擎组件/);
  assert.match(page, /DFB 光栅，以及 CW、DFB、EML、MWL 等器件能力/);
  await fileExists("src/components/DfbLaserModel.astro");
  assert.match(page, /DfbLaserModel/);
  assert.match(page, /## 激光源的器件边界/);
  assert.match(page, /## 为什么 CPO 会提高光源要求/);
  assert.match(page, /## 工作原理：电流如何变成稳定光/);
  assert.match(page, /## 制造路径：从 InP 衬底到激光器芯片/);
  assert.match(page, /## 1\. InP 单晶生长与衬底制备/);
  assert.match(page, /## 2\. 外延生长/);
  assert.match(page, /## 3\. 波导、DFB 光栅与工艺容差/);
  assert.match(page, /## 4\. 电流注入、绝缘与电流约束/);
  assert.match(page, /## 5\. 解理、腔长与端面工程/);
  assert.match(page, /## 6\. 芯片测试、分档与可靠性筛选/);
  assert.match(page, /## 7\. 器件评价指标：怎样判断一颗激光器是否合格/);
  assert.match(page, /## 8\. 从芯片到封装：哪些指标会传给封装设计/);
  assert.match(page, /## 9\. 总结：一颗 InP 激光源从哪里来/);
  assert.match(page, /AI 数据中心光互连需要稳定、足够输出功率、可长期工作的连续光/);
  assert.match(page, /激光源的原理链由三层机制组成/);
  assert.match(page, /DFB 光栅选择稳定单一波长/);
  assert.match(page, /CPO 的设计目标是把光引擎放到/);
  assert.match(page, /激光器如何从材料、外延和芯片工艺中形成/);
  assert.match(page, /激光器最基本的物理原理是电子能量转换/);
  assert.match(page, /器件制造可以沿六个阶段理解/);
  assert.match(page, /光引擎输入和 PIC 接入留在封装与系统集成层面/);
  assert.match(page, /MOCVD \/ MBE epitaxy/);
  assert.match(page, /p-contact \/ metal/);
  assert.match(page, /ridge waveguide/);
  assert.match(page, /高压石英反应器/);
  assert.match(page, /epi-ready 表面状态/);
  assert.match(page, /面向 1310 nm \/ 1550 nm 通信波段的半导体激光器/);
  assert.match(page, /Bragg wavelength/);
  assert.match(page, /aging \/ burn-in/);
  assert.match(page, /AR \/ HR coating/);
  assert.match(page, /L-I-V test/);
  assert.match(page, /TermNote/);
  assert.match(page, /known-good-die/);
  assert.match(page, /External Laser Small Form Factor Pluggable/);
  assert.match(page, /distributed feedback/);
  assert.match(page, /\.\.\/packaging\//);
  assert.doesNotMatch(page, /Switch ASIC \(Die\)/);
  assert.doesNotMatch(page, /## CPO 里的光源放置方式/);
  assert.doesNotMatch(page, /ELSFP 外置光源模块/);
  assert.match(page, /QW \/ MQW 有源区/);
  assert.match(page, /这对应两个不同层级/);
  assert.match(page, /发光能力/);
  assert.match(page, /波长、噪声与模式/);
  assert.match(page, /电学与热学/);
  assert.match(page, /光束与耦合/);
  assert.match(page, /从芯片到封装/);
  assert.match(page, /进一步阅读/);
  assert.match(page, /\.\.\/\.\.\/learn\/inp-dfb-laser-principle\//);
  assert.match(page, /OIF: External Laser Small Form Factor Pluggable/);

  const model = await read("src/components/DfbLaserModel.astro");
  const pkg = await read("package.json");
  assert.match(pkg, /"three": "\^0\.182\.0"/);
  assert.match(model, /import \* as THREE from "three"/);
  assert.match(model, /OrbitControls/);
  assert.match(model, /WebGLRenderer/);
  assert.match(model, /MQW active/);
  assert.match(model, /DFB grating/);
  assert.match(model, /partInfo/);
  assert.match(model, /color:\s+"#0d9488"/);
  assert.match(model, /--part-title-color/);
  assert.match(model, /infoTitle\.style\.setProperty\("--part-title-color"/);
  assert.match(model, /not to scale|示意化放大/);
  assert.match(model, /backside n-contact/);
  assert.match(model, /p\+ contact cap/);
  assert.match(model, /data-dfb-part-index/);
  assert.match(model, /--part-color/);
  assert.match(model, /quantumWellCount/);
  assert.match(model, /cutaway/i);
  assert.match(model, /AR coating/);
  assert.match(model, /HR coating/);
  assert.match(model, /腔内光场分布/);
  assert.match(model, /激光在芯片内部的空间强度分布/);
  assert.match(model, /color:\s+"#0891b2"/);
  assert.match(model, /transparent\(0x0891b2,\s*0\.46\)/);
  assert.match(model, /mode\.scale\.set\(2\.65,\s*0\.07,\s*0\.28\)/);
  assert.doesNotMatch(model, /tagPart\(cutawayPlane,\s*"mode"/);
  assert.match(model, /priority:\s*4/);
  assert.match(model, /clearSelectedPart/);
  assert.match(model, /dimNonSelectedParts/);
  assert.match(model, /selectedPart === partKey/);
  assert.match(model, /button\.style\.setProperty\("--part-color"/);
  assert.match(model, /object\.userData\.partKey === partKey/);
  assert.match(model, /object\.material\.opacity = targetOpacity/);
  assert.match(model, /const indexItems = \[\s*\["nContact"[\s\S]*\["substrate"[\s\S]*\["nCladding"[\s\S]*\["sch"[\s\S]*\["mqw"[\s\S]*\["pCladding"[\s\S]*\["ridge"[\s\S]*\["contactCap"[\s\S]*\["dielectric"[\s\S]*\["currentWindow"[\s\S]*\["pMetal"/);
  assert.match(model, /referenceOpacity/);
  assert.match(model, /dragSelectionThreshold/);
  assert.match(model, /pointerDownState/);
  assert.match(model, /Math\.hypot/);
  assert.match(model, /Raycaster/);
  assert.match(model, /setSelectedPart/);
  assert.match(model, /controls\.minDistance = 0\.35/);
  assert.match(model, /controls\.maxDistance = 80/);
  assert.match(model, /controls\.enableRotate = true/);
  assert.match(model, /controls\.rotateSpeed = 0\.75/);
  assert.match(model, /controls\.target\.set\(0,\s*0,\s*0\)/);
  assert.doesNotMatch(model, /freeRotationSpeed/);
  assert.doesNotMatch(model, /startRotationX/);
  assert.doesNotMatch(model, /startRotationY/);
  assert.doesNotMatch(model, /model\.rotation\.x = pointerDownState/);
  assert.doesNotMatch(model, /model\.rotation\.y = pointerDownState/);
  assert.match(model, /child\.position\.sub\(center\)/);
  assert.doesNotMatch(model, /chip\.position\.sub\(center\)/);
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
