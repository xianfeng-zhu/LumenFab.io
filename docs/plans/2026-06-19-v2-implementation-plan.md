# V2 Site Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build the v2 version of LumenFab.io — 120+ educational pages organized under `/v2/` following the 14-chapter `content/` outline, without modifying any v1 files.

**Architecture:** New `/v2/` route prefix using Astro file-based routing. A shared `V2Layout.astro` provides breadcrumbs, chapter tree sidebar, and prev/next navigation. Chapter and page metadata lives in `v2Chapters.ts`. Pages reuse v1's `ConceptLayout`-style frontmatter pattern.

**Tech Stack:** Astro (static mode), MDX for pages, existing `BaseLayout` as root layout, existing `TermNote` and `ChapterNav` patterns.

---

## Phase 1: Infrastructure

### Task 1.1: v2Chapters.ts data file

**Files:**
- Create: `src/data/v2Chapters.ts`

**Step 1: Write the data file**

Define the 14 chapters and all planned pages. Each chapter has an `id`, `title` (chapter number + English name), `shortTitle` (Chinese), `purpose`, `slug` (URL-friendly kebab-case), and `pages` array. Each page has `title`, `slug`, and `status` (`"migrate" | "rewrite" | "new"`).

Key: the slug must match the filename. Chapter slugs:
- `00-start-here`, `01-why-optical-interconnects`, `02-optical-link-overview`, `03-semiconductor-optics-basics`, `04-laser-physics`, `05-material-platforms`, `06-raw-materials-to-wafers`, `07-epitaxy-active-regions`, `08-device-layer`, `09-modulation-and-pic`, `10-packaging-and-test`, `11-optical-modules`, `12-system-architectures`, `13-industry-map`

Chapter full titles should use the exact English names from content/ READMEs.

**Step 2: Verify the file compiles**

The types should match what V2Layout and the v2 index will consume.

### Task 1.2: V2Layout.astro

**Files:**
- Create: `src/layouts/V2Layout.astro`
- Reference: `src/layouts/ConceptLayout.astro` (existing pattern)

**Step 1: Write V2Layout with breadcrumb + sidebar + prev/next**

This layout must:
- Import `v2Chapters` and `TermNote` (reuse existing component)
- Find the current page's chapter and position in the chapter tree
- Render breadcrumbs: `00 Start Here > 05 Material Platforms > SiN Page`
- Render chapter sidebar: list of pages in current chapter, highlight current
- Render prev/next: `< Previous page` and `Next page >` links, spanning chapter boundaries
- Use `BaseLayout` as the outer wrapper
- Accept frontmatter props: `title`, `chapter` (chapter id), `pageTitle` (from the page's MDX frontmatter)

**Step 2: Build to verify no syntax errors**

### Task 1.3: v2 Chapter Grid Homepage

**Files:**
- Create: `src/pages/v2/index.astro`

**Step 1: Write the 14-chapter card grid**

A card grid page following the styling of the existing `ChapterNav.astro`:
- Import `v2Chapters`
- Each card: chapter number + title, purpose text, link to chapter first page
- Responsive grid layout

**Step 2: Build to verify**

### Task 1.4: v1 Homepage Banner

**Files:**
- Modify: `src/pages/index.astro` — ONLY add a banner div above the first `<section>`, do not touch anything else

**Step 1: Add v2 link banner**

A thin banner across the top of v1 homepage:
```html
<div class="v2-banner">
  系统化学习路径已上线 —— <a href="/v2/">按章节浏览</a>
</div>
```
Minimal styling, visually distinct from the main content.

**Step 2: Build to verify**

---

## Phase 2: Migrate Existing Content (~55 pages)

### Task 2.1: Chapter 00 — Start Here (3 pages, migrate + new)

**Source v1 files:** `one-page-optics-stack.mdx`, `how-to-read-this-site.mdx`, `glossary.mdx`
**Missing:** "What this site explains" page

**Step 1: Copy existing pages to v2**
- Copy `one-page-optics-stack.mdx` → `src/pages/v2/00-start-here/one-page-optics-stack.mdx`
- Copy `how-to-read-this-site.mdx` → `src/pages/v2/00-start-here/how-to-read-this-site.mdx`
- Copy `glossary.mdx` → `src/pages/v2/00-start-here/glossary.mdx`
- Update frontmatter `chapter` field to match v2 convention
- Replace `import { sitePath }` paths — cross-references should point to v2 paths

**Step 2: Write the missing "What this site explains" page**
- New: `src/pages/v2/00-start-here/what-this-site-explains.mdx`
- Content: what the site covers, what an AI data-center optical link is, why it's not just about lasers, how chapters relate

**Step 3: Build to verify**

### Task 2.2: Chapter 01 — Why Optical Interconnects (5 pages, migrate all)

**Source v1 files:** `why-ai-clusters-stress-interconnects.mdx`, `copper-vs-optical-links.mdx`, `bandwidth-density-and-power-per-bit.mdx`, `why-800g-1-6t-and-3-2t-matter.mdx`

**Step 1: Copy and adapt**
- Copy all 5 pages + 1 combined page to `src/pages/v2/01-why-optical-interconnects/`
- Note: `bandwidth-density-and-power-per-bit.mdx` covers 2 planned pages (Bandwidth density + Power per bit) — split into two separate files
- Update frontmatter `chapter` field
- Update internal cross-references to v2 paths

**Step 2: Build to verify**

### Task 2.3: Chapter 02 — Optical Link Overview (3 existing, 2 missing)

**Source v1 files:** `lane-channel-and-wavelength.mdx`, `inside-a-transceiver.mdx`, `dr-fr-lr-and-psm-wdm.mdx`
**Missing:** "Electrical signal to optical signal", "Tx path / Rx path" (split from inside-a-transceiver)

**Step 1: Copy existing and write missing**
- Copy existing 3 pages, adapt frontmatter and cross-refs
- Extract Tx/Rx path content from `inside-a-transceiver.mdx` into separate pages
- Write new "Electrical signal to optical signal" introductory page

**Step 2: Build to verify**

### Task 2.4: Chapter 03 — Semiconductor Optics Basics (7 pages, migrate all)

**Source v1 files:** All 7 pages exist and are complete. Copy all to `src/pages/v2/03-semiconductor-optics-basics/`, update frontmatter and internal cross-refs.

**Step 1: Copy 7 pages**
- `valence-band-conduction-band-and-bandgap.mdx`
- `direct-vs-indirect-bandgap.mdx`
- `pn-junction-and-carrier-injection.mdx`
- `photon-wavelength-frequency-and-energy.mdx`
- `refractive-index-and-total-internal-reflection.mdx`
- `waveguides-and-optical-modes.mdx`
- `interference-resonance-and-loss.mdx`

**Step 2: Build to verify**

### Task 2.5: Chapter 05 — Material Platforms (migrate 6, write 1)

**Source v1 files:** 5 existing material pages + `why-no-single-material-wins-everything.mdx`
**Missing:** "Silicon" platform page, "SOI and Photonics-SOI" platform page

**Step 1: Copy existing pages**
- `gaas-850-nm-and-vcsel.mdx`, `inp-1310-1550-nm-and-high-speed-communication.mdx`
- `silicon-nitride-low-loss-passive-platform.mdx`, `thin-film-lithium-niobate.mdx`
- `why-no-single-material-wins-everything.mdx`
- Also bring in `tfln-and-ocs.mdx` if it fits a cross-chapter slot

**Step 2: Write missing Silicon and SOI pages**
- "Silicon: electronics and photonic integration" — explains indirect bandgap boundary, Si as routing/integration platform
- "SOI and Photonics-SOI" — engineered substrate stack, BOX, high index contrast

**Step 3: Build to verify**

### Task 2.6: Chapter 06 — Raw Materials To Wafers (migrate 9, write 2 missing)

**Source v1 files:** `in-p-ga-as-si-ge-and-linbo3.mdx`, `high-purity-raw-materials.mdx`, `polycrystal-synthesis.mdx`, `single-crystal-growth.mdx`, `raw-material-ingot-wafer-substrate-and-epi-ready-wafer.mdx`, `gaas-substrate.mdx`, `soi-wafer.mdx`, `lnoi-wafer.mdx`

**Missing:** "Wafer slicing and polishing", "CMP and epi-ready substrate", "InP substrate" (technical, v1 has supply chain only)

**Step 1: Copy existing 9 pages, adapt**
**Step 2: Write 3 missing pages** (research needed for wafer slicing/polishing and CMP details)
**Step 3: Build to verify**

### Task 2.7: Chapter 09 — Modulation And PIC (migrate 9, write 2)

**Source v1 files:** `optical-devices.mdx` (covers multiple planned pages), `components/pic.mdx` (covers MZM/MRM/EAM/Ge PD)
**Missing:** "Direct modulation", "Ge photodetectors" (as standalone learn page)

**Step 1: Split optical-devices.mdx into separate pages per planned page**
- MZI, microring, AWG, Echelle grating, grating coupler → each gets own page
- MUX/DEMUX/AWG/filters → separate from AWG page
- Waveguides and splitters → separate

**Step 2: Extract from pic.mdx and rewrite**
- MZM, MRM, EAM — extract physical mechanism, rewrite as learn style (causal chain, numbers)
- SiPh PIC overview page
- Ge photodetector page

**Step 3: Write 2 missing pages**
**Step 4: Build to verify**

---

## Phase 3: Extract from components/ and Rewrite (~35 pages)

### Task 3.1: Research Prep for Chapters 10-12

Before writing, check `docs/research/` for packaging, optical modules, and system architecture content. Dispatch parallel subagents to search and download missing sources.

### Task 3.2: Chapter 10 — Packaging And Test (16 pages)

**Source:** Facts and numbers from `components/packaging.mdx`, `components/manufacturing-test.mdx`, `components/optical-io.mdx`, `components/reliability-operations.mdx`
**Method:** Extract facts → reorganize causal chains → rewrite in learn style

Key difference from v1: v1 components/ says "flip-chip uses microbumps with X μm pitch." v2 must say "why flip-chip? because it shortens the electrical path from mm to μm, reducing parasitics by Y×. The penalty is Z."

16 page files under `src/pages/v2/10-packaging-and-test/`. Can dispatch parallel subagents for groups of 4-5 pages each.

### Task 3.3: Chapter 11 — Optical Modules (9 pages)

**Source:** Facts from `inside-a-transceiver.mdx` (Ch.02), `dr-fr-lr-and-psm-wdm.mdx` (Ch.02), `why-800g-1-6t-and-3-2t-matter.mdx` (Ch.01)
**Note:** These v1 pages are already in v2 under Ch.01-02 from Phase 2. Do NOT copy again — extract the module-specific facts and write new Ch.11 pages that focus on "how components become transceiver products."

9 page files. Can be done with parallel subagents.

### Task 3.4: Chapter 12 — System Architectures (10 pages)

**Source:** Facts from `components/packaging.mdx`, `tfln-and-ocs.mdx`
**Missing completely in v1:** Switch ASIC/GPU/XPU/NIC context, Ethernet/InfiniBand/NVLink boundaries — these need full research + new writing.

10 page files. The two completely-missing pages need research first.

---

## Phase 4: Missing Chapters (~23 pages)

### Task 4.1: Chapter 04 — Laser Physics (5 existing, 3 missing)

**Existing v1 pages to migrate:** `spontaneous-vs-stimulated-emission.mdx`, `fabry-perot-cavity.mdx`, `laser-linewidth-and-mode-stability.mdx`, `vertical-and-lateral-optical-confinement.mdx`, `why-semiconductor-lasers-are-temperature-sensitive.mdx`

**Missing to write:** "Optical gain and threshold current", "Distributed feedback (DFB)", "Mode selection"

**Step 1:** Copy 5 existing pages from v1
**Step 2:** Research and write 3 missing pages

### Task 4.2: Chapter 07 — Epitaxy And Active Regions (10 pages, all new)

**Zero v1 pages exist.** All 10 pages need research → write. Parallel subagents for research across epitaxy topics (MOCVD/MBE, lattice matching, QW/MQW, QD, defects, InGaAsP, Ge-on-Si, dark current). Then write each page.

### Task 4.3: Chapter 08 — Device Layer (10 pages, mostly new)

**Existing v1 content:** DFB content in `components/laser-source/`, Driver/TIA in `components/eic.mdx`, VCSEL mention in `gaas-850-nm-and-vcsel.mdx`

**Step 1:** Extract existing content from components/  
**Step 2:** Write all 10 planned pages: VCSEL, FP laser, DFB laser, DBR laser, EML and EAM, External CW laser, Photodiode and APD, Driver, TIA, Device comparison

---

## Phase 5: Finalize

### Task 5.1: Chapter 13 — Industry Map (migrate 4, write 5)

**Source v1:** `industry-landscape.mdx`, `inp-substrate-supply-chain.mdx`, `lithium-niobate-industry-landscape.mdx`, `silicon-nitride-industry-landscape.mdx`

**Missing:** Epitaxy and III-V manufacturing landscape, SiPh foundry landscape (complementing SiN page), Switch ASIC and DSP providers, Hyperscalers and AI demand, Common company-mapping mistakes

### Task 5.2: Global Cross-Reference Audit

Check all internal links across v2 pages:
- Cross-references between chapters point to correct v2 paths
- No dead links
- References to v1 components/ pages are intentional "further reading" links

### Task 5.3: Final Build and Verification

```bash
npm run build
```
Fix any build errors. Verify all 120+ pages render at correct `/v2/` URLs.

---

## Guidelines for Writing Each Page

Apply when writing any new page or rewriting existing content:

1. **Open with the problem**, not the definition
2. **Build a causal chain**: physical root → material parameter → device behavior → system consequence
3. **Anchor with numbers**: every claim should have a concrete value
4. **Explain the mechanism before naming it**: say "scattering loss scales with the square of index contrast" before mentioning "Payne-Lacey model"
5. **Use side-by-side comparisons with numbers**: "Si: 1.12 eV vs SiN: 5 eV"
6. **No analogies, no marketing language**
7. **Standard Chinese photonics terminology**: 倏逝波 not 消逝波, 光电探测器 not 光检测器, 波分复用 not 波长分割复用
8. **Research first**: check docs/research/ for existing notes, search + download if missing
