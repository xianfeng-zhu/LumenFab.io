# 06 Raw Materials To Wafers Professional Source Pack

Date: 2026-05-16

Purpose: source pack for `06. Raw Materials To Wafers`. This chapter explains how material-platform names become real substrates and wafers before epitaxy and device processing.

Chapter: `06 Raw Materials To Wafers`

## Scope

Cover:

- raw elements and compounds used in Si, InP, GaAs, SOI, and LNOI routes
- high-purity raw materials
- polycrystal synthesis
- single-crystal growth
- slicing, lapping, etching, polishing, cleaning, inspection, and CMP
- epi-ready substrate
- InP substrate
- GaAs substrate
- SOI wafer
- LNOI wafer

Keep out:

- QW, MQW, QD, and active-region design, which belongs in chapter 07
- MOCVD / MBE process detail beyond why substrate quality matters, which belongs in chapter 07
- VCSEL, DFB, EML, PD device structures, which belong in chapter 08
- PIC process modules, which belong in chapter 09
- supplier rankings, capacity estimates, and investment framing, which belong in chapter 13

## Search Log

| Query | Source Type | Useful Results | Notes |
|---|---|---|---|
| semiconductor wafer manufacturing process ingot slicing lapping polishing CMP epi-ready wafer source | official / industry | SUMCO, Shin-Etsu, Samsung, wafer-process explainers | Use official wafer-maker pages first. |
| InP substrate manufacturing single crystal growth wafer polishing epi-ready substrate Sumitomo AXT JX | supplier / official | Freiberger, Sumitomo SEIEM, Coherent | Best for III-V substrate layer and 6-inch InP context. |
| GaAs substrate manufacturing VGF LEC crystal growth epi ready wafer compound semiconductor | supplier / official | Freiberger technology page | Strong source for GaAs/InP polycrystal and VGF/LEC distinction. |
| SOI wafer Smart Cut process photonics SOI Soitec wafer manufacturing | supplier / official | Soitec Smart Cut, Soitec Photonics-SOI | Use for engineered substrate stack and layer transfer. |
| NanoLN LNOI wafer ion slicing wafer bonding lithium niobate on insulator manufacturing | supplier / academic | NanoLN, MDPI, PMC, Nature Communications references | Use for LNOI stack, ion slicing, and wafer bonding. |
| Wikimedia Commons Czochralski silicon wafer lithium niobate image | open visual assets | Czochralski process SVG, NASA silicon wafer, NIST lithium niobate crystal | Saved only open/public-domain assets. |

## Source Summary

| Source ID | Source | Type | Key Use | Reliability | Status |
|---|---|---|---|---|---|
| SUMCO-PROCESS | SUMCO, "Production Processes" | official supplier | silicon wafer flow: purification, ingot, slicing, lapping, etching, polishing, inspection | high | used |
| SUMCO-FORMING | SUMCO, "Wafer forming process" | official supplier | slicing around 1 mm, lapping, etching, mechano-chemical polishing, cleaning/inspection | high | used |
| SHINETSU-SI | Shin-Etsu, "Silicon Wafers" | official supplier | silica to silicon metal to 11N poly-Si, single-crystal ingot, slicing/polishing | high | used |
| FREIBERGER-TECH | Freiberger, "Technology" | official supplier | GaAs/InP high-purity raw material synthesis, VGF/LEC, InP VGF | high | used |
| SUMITOMO-SEIEM | Sumitomo Electric / SEIEM | official supplier | GaAs/InP substrate product diameters and applications | high | used |
| SOITEC-SMARTCUT | Soitec, "Smart Cut technology" | official supplier | ion implantation, bonding, layer transfer, donor reuse, SOI flexibility | high | used |
| SOITEC-PHOTONICS-SOI | Soitec, "Photonics-SOI substrates" | official supplier | photonics-grade SOI use in optical communication/data center interconnect | high | used |
| NANOLN-LNOI | NanoLN, "Products" | official supplier | LNOI product stack, 300-900 nm LN film, SiO2, support substrates, 3/4/6/8 inch | medium-high | used |
| LNOI-MDPI | MDPI Crystals, "Wafer-Scale Fabrication of Silicon Film on LNOI" | peer-reviewed open article | ion-cut process, wafer-scale LNOI hybrid structure, thickness uniformity and bonding interface | medium-high | used |
| LNOI-PMC | PMC article on low-loss LNOI waveguides | peer-reviewed open article | commercially available X-cut LNOI fabricated by ion slicing, CMP surface quality | medium-high | used |
| COHERENT-6INP | Coherent 2024 press release | official supplier / press | 6-inch InP wafer fabrication, AI transceiver relevance, larger wafer productivity context | medium | used with caution |
| OSHA-EPI | OSHA semiconductor epitaxy page | government educational | GaAs substrate as base for III-V epitaxy | medium | support only |
| LOCAL-INP | local research note `inp-substrate-upstream-chokepoints.md` | local prior research | InP chain: high-purity In/P, polycrystal, pBN, VGF/LEC, slicing/CMP, epi-ready | internal | used as context |
| LOCAL-SUPPLY | local research note `laser-supply-chain-substrate-epi-chip-module.md` | local prior research | layer boundary: substrate vs epi vs device vs module | internal | used as context |

## Source Notes

### SUMCO-PROCESS: Production Processes

URL: https://www.sumcosi.com/english/products/process/index.html

Type: official supplier documentation

Publisher / organization: SUMCO Corporation

Date accessed: 2026-05-16

What it supports:

- Silicon wafer production can be explained as three major stages: monocrystalline pulling, wafer forming, and specialized processing.
- The high-level flow starts from silica, reduction, silicon metal, rectification, polysilicon, monocrystalline ingot, wafer forming, and specialized wafer products.
- Specialized outputs include polished wafers, annealed wafers, epitaxial wafers, junction-isolated wafers, and SOI wafers.

Boundaries:

- This is silicon-focused. Do not transfer all process assumptions directly to InP/GaAs/LNOI.

Use in chapter:

- Main source for the generic silicon wafer flow page.

### SUMCO-FORMING: Wafer forming process

URL: https://www.sumcosi.com/english/products/process/step_02.html

Type: official supplier documentation

Publisher / organization: SUMCO Corporation

Date accessed: 2026-05-16

What it supports:

- Wafer forming turns monocrystalline ingots into polished wafers.
- Steps: slicing, lapping, etching, polishing, cleaning and inspection.
- Slicing produces wafers around 1 mm thick before later thinning and polishing.
- Lapping improves thickness and parallelism.
- Chemical etching removes mechanical damage.
- Mechano-chemical polishing creates the flat mirror finish.

Boundaries:

- Good for silicon wafer forming. Compound semiconductor substrates may use different equipment, chemistry, fragility assumptions, and diameter limits.

Use in chapter:

- Main page on slicing, lapping, polishing, CMP, cleaning, and inspection.

### SHINETSU-SI: Silicon Wafers

URL: https://www.shinetsu.co.jp/en/products/semiconductor-silicon-business/silicon-wafers/

Type: official supplier documentation

Publisher / organization: Shin-Etsu Chemical

Date accessed: 2026-05-16

What it supports:

- Semiconductor-grade silicon starts from high-purity silica rock, silicon metal, and polycrystalline silicon.
- Shin-Etsu states polycrystalline silicon purity at 99.999999999%.
- Large single-crystal round ingots are produced, then sliced, shaped, and polished.
- The final wafer must have low contamination, low defects, and low particles.

Boundaries:

- This source is useful for purity language, not for InP/GaAs process details.

Use in chapter:

- Raw material and high-purity silicon page.

### FREIBERGER-TECH: GaAs/InP Technology

URL: https://freiberger.com/en/technology/

Type: official supplier documentation

Publisher / organization: Freiberger Compound Materials

Date accessed: 2026-05-16

What it supports:

- High-purity gallium and arsenic are chemically combined into polycrystalline GaAs.
- High-purity indium and phosphorus are chemically combined into polycrystalline InP.
- Group V vapor pressure makes synthesis a pressure and temperature-control problem.
- Freiberger uses VGF and LEC for GaAs and VGF for InP.
- VGF material is positioned for high-current-density devices such as HBTs, LEDs, and lasers.
- InP VGF is used to target structural perfection and low dislocation density.

Boundaries:

- Do not turn this into a company profile. Use it to explain process and material differences.

Use in chapter:

- Main source for polycrystal synthesis, GaAs substrate, InP substrate, and VGF/LEC explanation.

### SUMITOMO-SEIEM: GaAs/InP wafers

URL: https://sumitomoelectric.com/company/office_group_companies/sei-electronics-materials-ltd/SEIEM

Type: official supplier documentation

Publisher / organization: Sumitomo Electric / SEI Electronics Materials

Date accessed: 2026-05-16

What it supports:

- Product line includes GaAs substrates, InP substrates, and MOCVD epi wafers.
- Listed substrate diameters: GaAs 4, 6, 8 inch; InP 3, 4, 6 inch.
- Applications include VCSELs, LDs, PDs for fiber communication, and data centers.

Boundaries:

- Supplier page. Use product facts conservatively; avoid company ranking.

Use in chapter:

- Evidence that III-V substrates are real commercial wafer products with smaller diameters and application-specific demand.

### SOITEC-SMARTCUT: Smart Cut technology

URL: https://www.soitec.com/home/technology/innovation/smart-cut

Type: official supplier documentation

Publisher / organization: Soitec

Date accessed: 2026-05-16

What it supports:

- Smart Cut is an engineered-substrate layer-transfer technology.
- Ion implantation creates high-quality, uniform transferred layers.
- Implantation energy controls transferred-layer thickness.
- Wafer bonding supports different materials and temperature regimes.
- Donor substrates can be reused.
- Industrial advantages include standard semiconductor tools, different wafer diameters, and flexible silicon top-layer/BOX thicknesses.

Boundaries:

- Smart Cut is a process route, not the only way to make engineered substrates.

Use in chapter:

- Main source for SOI and LNOI-style layer transfer mental model.

### NANOLN-LNOI: NanoLN products

URL: https://www.nanoln.com/PRODUCTS.html

Type: official supplier documentation

Publisher / organization: Jinan Jingzheng Electronics / NanoLN

Date accessed: 2026-05-16

What it supports:

- Products include 300-900 nm lithium niobate thin films, lithium tantalate thin films, and thicker thin films.
- Services include wafer thinning, PECVD, CMP, and dicing.
- LNOI structure is described as lithium niobate thin film, SiO2, and support substrate such as Si, LN, quartz, fused silica.
- Listed wafer sizes include 3, 4, 6, and 8 inch for LN thin film products.
- Product use includes high-speed electro-optic modulators and data-center applications.

Boundaries:

- Supplier marketing language should not be used to overstate maturity.

Use in chapter:

- Main source for LNOI stack and commercial wafer-product vocabulary.

### COHERENT-6INP: 6-inch InP scalable wafer fabs

URL: https://www.coherent.com/news/press-releases/worlds-first-6-inch-inp-scalable-wafer-fabs-paving-the-way-for-the-next-generation-of-lasers-for-ai-transceivers-and-6g-wireless-networks

Type: official supplier press release

Publisher / organization: Coherent

Date accessed: 2026-05-16

What it supports:

- InP wafer size matters for die count, automation, capacity, and cost.
- Coherent links 6-inch InP processing to AI transceivers, EMLs, DFB-MZ, photodetectors, and high-power CW lasers.
- Moving from 3-inch to 6-inch is an industrial scaling topic, not a physics definition.

Boundaries:

- Press release. Treat claims about "world first", cost reduction, and timeline as company statements, not neutral industry consensus.

Use in chapter:

- Use only to explain why compound semiconductor wafer diameter matters.

## Visual Asset Manifest

### IMG-CZ-PROCESS: Czochralski process diagram

Local path: `docs/research/v1-raw-materials-to-wafers/images/wikimedia-czochralski-process.svg`

Source URL: https://commons.wikimedia.org/wiki/File:Czochralski_Process.svg

Source title: `File:Czochralski Process.svg`

Creator / organization: Twisp / Wikimedia Commons

Captured date: 2026-05-16

License / usage: public domain by copyright holder, per Wikimedia structured data. Keep attribution in manifest.

Why it matters: visual reference for seed crystal, melt, crucible, and pulled single crystal.

Potential page: `Single-crystal growth`

Alt text: Diagram of the Czochralski process showing a seed crystal pulling a single crystal from a melt in a crucible.

Status: saved

Notes:

- Good for teaching the difference between polycrystal feedstock and single-crystal ingot.

### IMG-SI-WAFER-NASA: Silicon wafer with mirror finish

Local path: `docs/research/v1-raw-materials-to-wafers/images/nasa-silicon-wafer-mirror-finish.jpg`

Source URL: https://commons.wikimedia.org/wiki/File:Silicon_wafer_with_mirror_finish.jpg

Source title: `File:Silicon wafer with mirror finish.jpg`

Creator / organization: NASA Glenn Research Center

Captured date: 2026-05-16

License / usage: public domain as NASA work, per Wikimedia page.

Why it matters: simple photo reference for polished wafer surface and mirror finish.

Potential page: `Wafer slicing and polishing`

Alt text: A polished silicon wafer with a mirror-like reflective surface.

Status: saved

Notes:

- Low resolution, but safe for source-pack reference.

### IMG-LN-NIST: Lithium niobate crystal

Local path: `docs/research/v1-raw-materials-to-wafers/images/nist-lithium-niobate-crystal.jpg`

Source URL: https://commons.wikimedia.org/wiki/File:Lithium_Niobate_Crystal_(7788237698).jpg

Source title: `File:Lithium Niobate Crystal (7788237698).jpg`

Creator / organization: National Institute of Standards and Technology

Captured date: 2026-05-16

License / usage: public domain as US federal government work, per Wikimedia/NIST page.

Why it matters: visual reference for lithium niobate as a physical crystal material before LNOI stack explanation.

Potential page: `In, P, Ga, As, Si, Ge, and LiNbO3`

Alt text: A transparent lithium niobate crystal mounted in an optical setup.

Status: saved

Notes:

- This is not an LNOI wafer photo. Use only to show bulk LN material.

### IMG-ORIGINAL-FLOW: Raw material to epi-ready wafer flow

Local path: `docs/research/v1-raw-materials-to-wafers/images/original-raw-to-wafer-flow.svg`

Source URL: original project asset

Source title: `Raw material to epi-ready wafer flow`

Creator / organization: LumenFab.io

Captured date: 2026-05-16

License / usage: original internal project diagram.

Why it matters: gives chapter-level visual spine without copying vendor diagrams.

Potential page: `High-purity raw materials`, `Wafer slicing and polishing`

Alt text: Simplified flow from raw elements through purification, polycrystal, single crystal, wafer forming, and epi-ready wafer.

Status: saved

Notes:

- Preferred over copying SUMCO/Freiberger process graphics.

### IMG-ORIGINAL-STACKS: Bare and engineered substrate stacks

Local path: `docs/research/v1-raw-materials-to-wafers/images/original-engineered-substrate-stacks.svg`

Source URL: original project asset

Source title: `Bare substrate and engineered substrate stacks`

Creator / organization: LumenFab.io

Captured date: 2026-05-16

License / usage: original internal project diagram.

Why it matters: separates bare III-V substrate, SOI stack, and LNOI stack.

Potential page: `SOI wafer`, `LNOI wafer`

Alt text: Cross-section comparison of bare InP or GaAs substrate, SOI stack, and LNOI stack.

Status: saved

Notes:

- Useful as a future site figure or as guide for a 3D wafer-stack model.

### IMG-REF-SUMCO-PROCESS: SUMCO production flow

Local path: none

Source URL: https://www.sumcosi.com/english/products/process/index.html

Source title: SUMCO production processes image

Creator / organization: SUMCO Corporation

Captured date: 2026-05-16

License / usage: copyright unclear; do not save image into public repo.

Why it matters: compact visual of silicon wafer production flow.

Potential page: `High-purity raw materials`

Alt text: Silicon wafer production flow from silica to polysilicon, ingot, wafer forming, and specialized wafers.

Status: redraw needed

Notes:

- Use only as reference for original diagram.

### IMG-REF-FREIBERGER-VGF: Freiberger VGF process image

Local path: none

Source URL: https://freiberger.com/en/technology/

Source title: Freiberger VGF crystal growth process image

Creator / organization: Freiberger Compound Materials

Captured date: 2026-05-16

License / usage: copyright unclear; do not save image into public repo.

Why it matters: useful reference for VGF growth geometry in III-V substrates.

Potential page: `Single-crystal growth`, `InP substrate`, `GaAs substrate`

Alt text: Vertical gradient freeze growth process with seed, melt, and controlled temperature gradient.

Status: redraw needed

Notes:

- Make original simplified VGF diagram if needed.

### IMG-REF-NANOLN-STACK: NanoLN LNOI stack image

Local path: none

Source URL: https://www.nanoln.com/PRODUCTS.html

Source title: NanoLN LNOI product stack images

Creator / organization: NanoLN

Captured date: 2026-05-16

License / usage: copyright unclear; do not save image into public repo.

Why it matters: product-page reference for LN thin film / SiO2 / support substrate stack.

Potential page: `LNOI wafer`

Alt text: LNOI stack with lithium niobate thin film, silicon dioxide, and a support substrate.

Status: redraw needed

Notes:

- Use original stack diagram instead of copying.

## Chapter Synthesis

Main teaching claims:

- A wafer is not just "raw material cut into a disk"; it is a controlled starting platform with crystal orientation, purity, flatness, surface condition, particles, defects, and thickness requirements.
- Silicon wafer flow is the cleanest entry point: silica/polysilicon -> single-crystal ingot -> slicing/lapping/etching/polishing -> polished/epitaxial/SOI variants.
- III-V substrates such as InP and GaAs add compound-material constraints: high-purity Group III/V elements, polycrystal synthesis, vapor pressure control, VGF/LEC growth, fragility, and smaller wafer diameters.
- InP/GaAs substrate is the base for later epitaxy. It is not the laser, active region, or final device.
- Epi-ready means the substrate surface is clean, flat, polished, oriented, inspected, and suitable for high-quality epitaxial growth.
- SOI and LNOI are engineered substrate stacks, not simple single-material wafers.
- Wafer size matters because it changes die count, automation compatibility, toolset, cost, and qualification, but larger is not automatically easy or mature.

Good reader-facing framing:

- Start with definitions: raw material, polycrystal, single crystal, ingot/boule, wafer, substrate, epi-ready wafer, epi wafer.
- Explain the chain as "turning material into a reliable starting surface for later physics".
- Use silicon as the simple reference flow, then show why compound semiconductors and engineered wafers differ.
- Keep the question "what does this wafer enable downstream?" in every page.

Common misconceptions to prevent:

- "InP substrate is a laser."
- "Epi-ready wafer already contains QW/MQW active regions."
- "SOI is just a normal silicon wafer."
- "LNOI is just a lithium niobate wafer."
- "Bigger wafer diameter automatically means the process is mature."
- "CMP/polishing is cosmetic." It affects epitaxy, defect nucleation, coupling to downstream process, and yield.
- "Raw material scarcity alone explains wafer bottlenecks." Purity, synthesis, growth, polishing, inspection, qualification, and customer trust also matter.

Layer boundaries:

- Chapter 06 stops at substrate and epi-ready wafer.
- Chapter 07 starts when functional epitaxial layers are grown.
- Chapter 08 starts when devices are fabricated from epi wafers.
- Chapter 09 starts when PIC functions are laid out and processed.
- Chapter 13 maps companies and supply chains after the technical stack is understood.

## Suggested Pages

1. `In, P, Ga, As, Si, Ge, and LiNbO3: what each is used for`
2. `Raw material, ingot, wafer, substrate, and epi-ready wafer`
3. `High-purity raw materials`
4. `Polycrystal synthesis`
5. `Single-crystal growth`
6. `Wafer slicing, lapping, polishing, and CMP`
7. `Epi-ready substrates`
8. `InP substrate`
9. `GaAs substrate`
10. `SOI wafer`
11. `LNOI wafer`

## Open Questions

- Should chapter 06 include one combined page for `raw material / ingot / wafer / substrate`, or keep definitions separate from high-purity raw materials?
- Should `Ge` be handled lightly here and expanded later under `Ge-on-Si photodetectors` in chapter 07/09?
- Should pBN crucibles and B2O3 liquid encapsulation be introduced in the InP substrate page or deferred to a later manufacturing appendix?
- Should the saved open-license images be used in reader-facing pages now, or should they remain research references until custom diagrams/3D models are ready?

## Source List

- SUMCO, "Production Processes", https://www.sumcosi.com/english/products/process/index.html
- SUMCO, "Wafer forming process", https://www.sumcosi.com/english/products/process/step_02.html
- Shin-Etsu Chemical, "Silicon Wafers", https://www.shinetsu.co.jp/en/products/semiconductor-silicon-business/silicon-wafers/
- Freiberger Compound Materials, "Technology", https://freiberger.com/en/technology/
- Sumitomo Electric / SEIEM, "SEI Electronics Materials", https://sumitomoelectric.com/company/office_group_companies/sei-electronics-materials-ltd/SEIEM
- Soitec, "Smart Cut technology", https://www.soitec.com/home/technology/innovation/smart-cut
- Soitec, "Photonics-SOI substrates", https://www.soitec.com/home/products/product-platforms/photonics-soi
- NanoLN, "Products", https://www.nanoln.com/PRODUCTS.html
- Wang et al., "Wafer-Scale Fabrication of Silicon Film on Lithium Niobate on Insulator", Crystals, https://www.mdpi.com/2073-4352/12/10/1477
- Rao et al., "Long Low-Loss Lithium Niobate on Insulator Waveguides with Sub-Nanometer Surface Roughness", https://pmc.ncbi.nlm.nih.gov/articles/PMC6265866/
- Coherent, "6-inch InP Scalable Wafer Fabs for AI Transceivers & 6G Networks", https://www.coherent.com/news/press-releases/worlds-first-6-inch-inp-scalable-wafer-fabs-paving-the-way-for-the-next-generation-of-lasers-for-ai-transceivers-and-6g-wireless-networks
- OSHA, "Semiconductors - Epitaxy", https://www.osha.gov/semiconductors/epitaxy2
- Wikimedia Commons, "Czochralski Process.svg", https://commons.wikimedia.org/wiki/File:Czochralski_Process.svg
- Wikimedia Commons, "Silicon wafer with mirror finish.jpg", https://commons.wikimedia.org/wiki/File:Silicon_wafer_with_mirror_finish.jpg
- Wikimedia Commons, "Lithium Niobate Crystal (7788237698).jpg", https://commons.wikimedia.org/wiki/File:Lithium_Niobate_Crystal_(7788237698).jpg
