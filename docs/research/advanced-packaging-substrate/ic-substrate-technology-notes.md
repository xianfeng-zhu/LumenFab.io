# IC Substrate / Package Substrate Technology -- Comprehensive Research Notes

> Compiled: 2026-06-13
> For: LumenFab.io advanced packaging knowledge base
> Status: Draft research notes -- verify key numbers before publication

---

## Table of Contents

1. [What Is an IC Substrate?](#1-what-is-an-ic-substrate)
2. [Core vs. Coreless Substrates](#2-core-vs-coreless-substrates)
3. [Dielectric Materials: BT Resin vs. ABF Film](#3-dielectric-materials-bt-resin-vs-abf-film)
4. [ABF (Ajinomoto Build-up Film) -- In Depth](#4-abf-ajinomoto-build-up-film----in-depth)
5. [Manufacturing Processes: SAP and mSAP](#5-manufacturing-processes-sap-and-msap)
6. [Manufacturer Profiles](#6-manufacturer-profiles)
7. [Technology Roadmap](#7-technology-roadmap)
8. [Market Structure and Supply Chain](#8-market-structure-and-supply-chain)
9. [Glass Core Substrates -- Emerging Technology](#9-glass-core-substrates----emerging-technology)
10. [Key Sources and References](#10-key-sources-and-references)

---

## 1. What Is an IC Substrate?

An **IC substrate** (also called a package substrate or IC carrier) is the precision interconnect board that sits between a bare semiconductor die and a printed circuit board (PCB). It provides:

- **Mechanical support** -- a rigid platform for the die and package
- **Electrical routing** -- fans out fine-pitch die bumps (40--150 um) to wider BGA balls (0.3--1.0 mm)
- **Thermal dissipation** -- conducts heat from the die
- **CTE matching** -- bridges silicon (~2.6 ppm/C) and PCB (16--18 ppm/C)

IC substrates account for roughly **30% of total advanced packaging cost** and are far more demanding than standard PCBs. Typical PCB line/space is >= 50 um; IC substrates operate at **20/20 um (mainstream) down to 5/5 um (advanced)**.

---

## 2. Core vs. Coreless Substrates

### 2.1 Core-Based (Conventional) Substrates

**Architecture:** A rigid core (typically BT resin + glass fiber cloth + copper foil on both sides) serves as the mechanical foundation. Build-up layers are added on top and bottom.

| Aspect | Details |
|--------|---------|
| Core thickness | 0.06--0.8 mm (thinner than 0.05 mm is difficult to handle) |
| Core drilling | Mechanical drilling for PTH (plated through-holes) |
| Core circuit | Often subtractive process (limits density) |
| Build-up layers | ABF film or BT prepreg on both sides |
| Total thickness | 130--670 um (e.g., 2+2+2 structure) |

**Common build-up structures:** 1+2+1, 2+2+2, 4+4+4, 6+4+6, 8+8+8

**Advantages:**
- Mature, well-understood process
- Better mechanical stability during manufacturing
- Lower cost for low-layer-count designs

**Disadvantages:**
- Different dielectrics in core vs. build-up => electrical discontinuities
- Mechanical drilling limits via density
- Thicker overall substrate
- Core vias must be filled and polished (extra steps)

### 2.2 Coreless Substrates

**Architecture:** No permanent rigid core. All layers are sequentially built on a temporary carrier (ceramic or metal) that is removed at the end. The result is a uniform, all-build-up structure.

| Aspect | Details |
|--------|---------|
| All layers | Same dielectric material (typically ABF) |
| All vias | Laser-drilled (no mechanical drilling) |
| Traces | SAP for all layers |
| Total thickness | 115--410 um |
| Carrier | Ceramic or metal (removed after build-up) |

**Advantages:**
- **Thinner** (115--410 um vs. 130--670 um for core equivalents)
- **Better electrical performance** -- single dielectric material, shorter signal path
- **Higher density** -- all layers can use SAP fine-line process
- No PTH core-via density limit

**Disadvantages:**
- Longer process time (sequential single-side build-up)
- Critical warpage control (panel has no inherent rigidity)
- Tighter dimensional control required (< 35 um layer-to-layer alignment)
- Higher process complexity

**Warpage data (from Unimicron / IMPACT 2010):**
- Coreless 6+1 ABF structure: warpage ~100 um (meets spec)
- Conventional 2+2+2 with 0.4 mm core: similar warpage

---

## 3. Dielectric Materials: BT Resin vs. ABF Film

### 3.1 BT Resin (Bismaleimide-Triazine)

| Aspect | Details |
|--------|---------|
| Developer | Mitsubishi Gas Chemical (MGC), commercialized 1977 |
| Composition | BMI + Triazine (cyanate ester) + modifiers (epoxy, PPE) + glass fiber reinforcement |
| Tg | 180--330 C |
| CTE (X-Y) | 10--15 ppm/C (can reach 8.8--9.0 ppm/C with modification) |
| Dk | ~3.5--4.5 |
| Df | 0.005--0.015 |
| Moisture absorption | <0.1% |
| Line/space capability | >= 12--15 um |
| Layer count | Typically 2--4 (can be more but difficult) |
| Laser drilling | More difficult due to glass fibers |
| Cost | ~JPY 3,000--5,000 / m2 |
| Applications | Memory (NAND, DRAM), RF chips, MEMS, LED, wire-bond BGA |

**Manufacturing process:**
1. Dissolve BT resin in varnish (A-stage)
2. Impregnate glass fiber fabric with varnish
3. Dry and cut into prepreg (B-stage)
4. Laminate prepreg between copper foils under heat/pressure => copper-clad laminate (CCL)

**Key thermal processing detail:** BT substrates are machined at low initial Tg (~187 C, ~90% polymerization), then heat-treated at 190--200 C for 1--3 hours to raise Tg to 215+ C (>95% polymerization). This prevents warpage during subsequent lamination.

### 3.2 ABF (Ajinomoto Build-up Film)

| Aspect | Details |
|--------|---------|
| Developer | Ajinomoto (Japan), introduced 1999 |
| Composition | Epoxy resin + curing agent + silica filler (SiO2, 0.1--0.5 um spheres) + additives |
| Reinforcement | No glass cloth (enables finer features) |
| Dk | ~3.2--3.4 (at 10 GHz) |
| Df | ~0.010--0.015 (at 10 GHz) |
| Line/space capability | >= 5--6 um (using SAP) |
| Layer count | 6--22 (up to 50 demonstrated) |
| Laser drilling | Easier -- 15--25 um microvias |
| Cost | ~JPY 38,000--52,000 / m2 (10--16 layer) |
| Film thickness | 30--70 um after lamination |
| Applications | High-end CPUs, GPUs, AI accelerators, servers, network processors (FC-BGA) |

### 3.3 Summary Comparison

| Parameter | BT Resin | ABF Film |
|-----------|----------|----------|
| Glass cloth | Yes | No |
| Min L/S | 12--15 um | 5--6 um |
| Max layer count | ~8 (practical) | 22+ (up to 50) |
| Dk | 3.5--4.5 | 3.2--3.4 |
| Df | 0.005--0.015 | 0.010--0.015 |
| Laser via size | 50+ um | 15--25 um |
| Cost / m2 | ~JPY 3k-5k | ~JPY 38k-52k |
| Primary applications | Memory, RF, MEMS | CPU, GPU, AI, network |

---

## 4. ABF (Ajinomoto Build-up Film) -- In Depth

### 4.1 What Is ABF?

ABF is a **thermosetting resin film** used as the interlayer dielectric in high-density IC substrates. It is the critical insulating material that enables fine-line, high-layer-count FC-BGA substrates for AI and high-performance computing chips.

### 4.2 Chemistry and Structure

**Film construction (3-layer type):**
| Layer | Function |
|-------|----------|
| Support film (PET/Mylar) | Mechanical support during handling |
| ABF resin layer | Insulating dielectric, 30--70 um thick |
| Protective film | Protects resin before use |

**Resin composition:**
- Epoxy resin (base)
- Curing agent (determines product series)
- Silica filler (SiO2, spherical, 0.1--0.5 um)
- Catalysts, adhesion promoters

### 4.3 Product Series Evolution

| Series | Curing Agent | Key Features | Timeline |
|--------|-------------|--------------|----------|
| GX series | Phenolic resin | Standard type | Original (1999) |
| -- GX-13 | Phenolic | First widely adopted | ~2005 |
| -- GX-92 | Phenolic | Lower roughness, lower CTE | ~2011 |
| -- GX-T31 | Phenolic | Lowest CTE, ~50% less water absorption vs GX-13 | Later |
| GY series | Phenolic ester | Low dielectric | (limited data) |
| GZ series | Cyanate ester | High Tg, very low Df | Current |
| -- GZ-22 | Cyanate ester | High-end | Current |
| -- GZ-41 | Cyanate ester | Low Df, high Tg, high modulus | Current |
| GL series | -- | ~72 wt% silica, ultra-low CTE | Recent |
| GT series | -- | Next-gen | Development |

**Performance trends across generations:**
- CTE: decreasing (more filler)
- Df: decreasing (lower loss)
- Modulus: increasing
- Elongation: decreasing (stiffer films)
- Dk: slightly increasing (from higher filler loading)

**Specific property data points:**
- GZ fully cured cyanate ester: Df ~0.006, Dk ~2.6 at 1 GHz
- GX series: ~38 wt% silica
- GL series: ~72 wt% silica
- Filler particle size: reduced from 0.5 um to 0.1 um over product generations
- Surface roughness: reduced from 400 nm to <= 100 nm

### 4.4 Supply Chain: The Ajinomoto Monopoly

**Market share:**
- Ajinomoto Fine-Techno: **>95%** of global ABF supply
- Sekisui Chemical: ~5% (developing competing build-up film)
- Chinese/Taiwanese alternatives: TBF, EBF, GBF -- in early validation stages

**Why monopoly exists:**
1. **110+ years of amino acid chemistry** -- ABF's core chemistry evolved from Ajinomoto's amino acid R&D
2. **200+ core patents** -- covering material composition, production equipment, application methods
3. **1--3 year qualification cycles** -- customers cannot easily switch suppliers
4. **95--98% yield** -- newcomers struggle at 75--85%
5. **Vertically integrated** -- key raw materials produced in-house

**Market projections:**
| Metric | Value |
|--------|-------|
| Global ABF film market (2024) | ~USD 514 million |
| Forecast (2032) | ~USD 1,069 million (CAGR 10.93%) |
| Production location | Japan: 98.66% |
| 2026 supply-demand gap | ~10% |
| 2028 supply-demand gap | 42--46% |

**Geographic concentration risk:** Virtually all ABF production is in Japan. This is the canonical single-supplier dependency in advanced packaging.

**Competing films under development:**
- Sekisui Chemical (Japan) -- NX04H, NQ07XP, next-gen (Df 0.0023)
- NBF (formerly Nuofei, acquired by Lotus Kechuang, China) -- targeting mid-range
- Domestic Chinese films -- in early validation, significant gap at >16-layer, HBM, and high-end AI chips

---

## 5. Manufacturing Processes: SAP and mSAP

### 5.1 Semi-Additive Process (SAP)

**What:** Builds circuitry from a thin electroless copper seed layer, enabling the finest line/space features.

**When used:** For line/space <= 15 um (advanced IC substrates, FC-BGA, 2.5D interposers)

**Process flow (step by step):**

| Step | Description | Details |
|------|-------------|---------|
| 1 | Inner layer prep | Core board with copper circuits (subtractive process) |
| 2 | ABF lamination | Vacuum laminate ABF film at ~110 C, then cure at 180 C for 30 min |
| 3 | Laser drilling | CO2 laser creates microvias (25--50 um), desmear with swell + permanganate |
| 4 | Electroless Cu seed | Deposit ~0.5--2 um copper (Pd catalyst + chemical reduction) |
| 5 | Resist pattern | Apply dry film or liquid photoresist, expose and develop |
| 6 | Electrolytic Cu plate | Plate copper into resist openings to form traces and fill vias |
| 7 | Resist strip | Remove photoresist |
| 8 | Flash etch | Remove thin seed layer between traces using selective chemistry |

**Critical details:**

- **Desmear differs from standard PCB:** In SAP, the entire ABF surface (not just via walls) is treated to create micro-roughness for seed layer adhesion.
- **Electroless copper:** ~1--2 um thick (2x standard PCB), slower plating rate (<50%), CP-grade chemicals (3x cost). Only FC carrier boards can bear this expense.
- **For 18x24 inch board:** >800,000 blind holes may be present.
- **Electroplating:** High-speed acid copper with Ti insoluble anodes. Anode-cathode gap reduced from 20 cm to 5--10 cm (vertical) or 2 cm (horizontal). Bath temperature raised from 20 C to 40 C.
- **Bath maintenance:** 1/10 of bath dumped weekly due to TOC buildup from insoluble anodes.

**Flash etching chemistry (the key step):**

The thin seed layer (~1--2 um) in non-circuit areas must be removed while preserving thick electroplated traces (~10--20 um). The etching solution typically contains:

- H2O2 (oxidizer) + H2SO4 (acid medium)
- Tetrazole compound (selective inhibitor for electrolytic Cu)
- Chloride ions (potential modifier)
- Target selectivity: etch rate ratio of electroless Cu to electrolytic Cu >= 2.1

**Line/space capability:** <10/10 um (mass production), down to 5/5 um and below (advanced/lab)

### 5.2 Modified Semi-Additive Process (mSAP)

**What:** Uses ultra-thin copper foil (2--5 um) on a carrier laminate instead of electroless copper as the starting layer. Hybrid process: additive plating + subtractive flash etch.

**When used:** For line/space 20--30 um (smartphone SLP, AI server boards, optical modules)

| Aspect | SAP | mSAP |
|--------|-----|------|
| Starting layer | Electroless Cu (~0.5--1 um) | Ultra-thin Cu foil (2--5 um on carrier) |
| Seed deposition | Electroless bath | Pre-laminated Cu foil |
| Material cost | High (ABF required) | Lower (standard CCL + ultra-thin foil) |
| Equipment cost | Very high (sputtering, electroless lines) | Moderate (fits existing lines) |
| Process complexity | High (~30% more steps) | Moderate |
| Line/space (production) | <15/15 um | 20--30 um |
| Line/space (advanced) | 5/5 um (lab) | 15--20 um |
| Cross-section shape | Near-perfect rectangular | Good, less ideal than SAP |
| Cost vs traditional | 50--100%+ higher | 20--30% higher |
| Primary use | FC-BGA, high-end IC substrates | SLP, server boards, modules |

### 5.3 SAP vs. mSAP: Which to Choose?

| Application | Preferred Process |
|-------------|------------------|
| FC-BGA for CPU/GPU/AI | SAP (<15 um), mSAP (15--30 um) |
| Smartphone SLP | mSAP |
| AI server / high-speed PCB | mSAP |
| CoWoS / 2.5D/3D packaging | SAP / aSAP |
| 800G / 1.6T optical modules | mSAP + RCC |
| Medical (high-density) | SAP |

**aSAP (advanced SAP):** Next evolution using vapor-deposited seed layers, targets 5--8 um lines for chiplets and 2.5D/3D.

---

## 6. Manufacturer Profiles

### 6.1 Market Overview

The IC substrate market is a **five-to-seven company oligopoly**. The top 7 ABF substrate players hold ~92% revenue share. Production is concentrated in East Asia: Taiwan (28%), South Korea (27%), China (22%), Japan (17%), Others (6%).

### 6.2 Manufacturer Comparison

#### Tier 1: Technology Leaders

| Company | HQ | 2024 Rev (USD) | Share | Key Strengths |
|---------|----|----------------|-------|---------------|
| **Ibiden** | Japan | ~$1.85B | ~27.6% | Unrivaled 18-layer yield; long-term Intel partner; dominant in HPC/datacenter ABF |
| **Unimicron** | Taiwan | ~$1.70B | ~25.4% | Largest substrate supplier globally; diversified across AI, mobile, networking; broad customer base (Apple, Qualcomm, Tesla) |
| **Shinko** | Japan | ~$1.55B | ~23.1% | Deep mobile OEM relations; FC-BGA and MEMS; acquired by JIC consortium (2024) |
| **Samsung Electro-Mechanics** | S. Korea | ~$1.40B | ~20.9% | Vertical integration with Samsung Group; FC-BGA, glass core, 2.5D interposer |

#### Tier 2: Major Players

| Company | HQ | 2024 Rev (USD) | Key Focus |
|---------|----|----------------|-----------|
| **Kinsus** | Taiwan | ~$0.95B | BT substrate leader; aggressively expanding ABF; quick engineering cycles |
| **LG Innotek** | S. Korea | ~$0.88B | RF and antenna-in-package substrates; limited ABF presence |
| **Kyocera** | Japan | ~$0.80B | Ceramic and organic substrates; thermal conductivity leadership; power/industrial |
| **Nan Ya PCB** | Taiwan | ~$0.75B | High-layer ABF for GPUs/AI; chemical supply integration (Formosa Plastics affiliate) |
| **Toppan** | Japan | ~$0.70B | Coreless and glass substrates; materials science heritage |
| **ASE Material** | Taiwan | ~$0.65B | SiP substrates, CoWoS, fan-out; OSAT ecosystem synergies |

#### Tier 3: Key Challenger

| Company | HQ | Notes |
|---------|----|-------|
| **AT&S** | Austria | European leader; sub-5 um development via IPCEI; glass core pioneer; Kulim (Malaysia) expansion for AI customers; ~5 um L/S in production |

### 6.3 Technology Capabilities by Manufacturer

| Manufacturer | Current L/S (production) | L/S (development) | Max layer count | ABF layers | Key technology |
|-------------|--------------------------|-------------------|-----------------|------------|----------------|
| Ibiden | 8/8 um | 5/5 um | 18+ (production) | High | SAP, high-layer ABF |
| Unimicron | 8/8 um | 5/5 um | 20+ | High | SAP, coreless, core-based |
| Shinko | 12/12 um | 8/8 um | 12+ | Medium | Build-up, semi-additive |
| AT&S | 5/5 um | 2/2 um (with glass core) | 12+ | Medium | mSAP, glass core, sub-5 um |
| SEMCO | 8/8 um | 5/5 um | 16+ | High | FCBGA, glass core |
| Kinsus | 10/10 um | 6/6 um | 12+ | Medium | BT substrate leader |
| Nan Ya PCB | 8/8 um | 5/5 um | 16+ | High | ABF for AI/GPU |

*Note: These numbers are based on public disclosures and industry reports. Exact capabilities are often proprietary and customer-specific.*

---

## 7. Technology Roadmap

### 7.1 Line/Space Scaling

| Node | Timeline | Substrate Type | Key Innovations Needed |
|------|----------|---------------|----------------------|
| 9/12 um | 2018--2020 (production) | Organic | -- |
| 8/8 um | 2021--2024 (production) | Organic | -- |
| 5/5 um | 2024--2026 (production) | Organic | PID, liquid photoresist, improved AOI |
| 3/2 um | ~2025 (development) | Organic | Hard mask/PID, liquid PR, flash etch control |
| 2/2 um | 2025--2027 (pilot/early production) | Organic / Glass | Damascene-like processes, advanced lithography |
| 1.5/1.5 um | ~2026--2028 | Glass core | New lithography, high-AR resists |
| 1/1 um | >2028 | Glass core | Advanced defect inspection, new etch |

### 7.2 Substrate Size and Layer Count Scaling

| Year | Panel Size | Layer Count | Notes |
|------|-----------|-------------|-------|
| 2020 | ~75 x 60 mm | ~20 | Standard |
| 2024 | ~100 x 100 mm | ~22--24 | Current |
| 2026 | ~150 x 150 mm | 28+ | 40% increase from 2020 |
| 2030 | 200+ mm | 30--40 | Large-body AI packages |

### 7.3 Via Technology Evolution

| Technology | Current | Near-term (2026) | Long-term (2028+) |
|------------|---------|------------------|-------------------|
| Laser-drilled via (CO2) | 50--75 um | 40--50 um | 30 um |
| Laser-drilled via (UV) | 25--40 um | 20--25 um | 15 um |
| Photovia (PID) | 15--25 um | 10--15 um | 5--10 um |
| Dry etch (hard mask) | R&D | 10--15 um | 5--10 um |
| TGV (glass) | 30--50 um | 20--30 um | 10--20 um |

### 7.4 Key Challenges at Each Node

**At 10/10 um (current production):**
- Side etch control in flash etching
- Resist adhesion on smooth ABF
- AOI resolution

**At 5/5 um (2025):**
- ABF surface roughness must be <= 100 nm for fine-line adhesion
- Dry film resist reaches aspect ratio limit (~4:1); liquid resist needed
- Defect control: a 2 um protrusion at 5 um L/S causes bridging
- Electroless copper grain boundary roughness becomes significant

**At 2/2 um (2026--2027):**
- Organic substrate distortion during dielectric curing
- Need for photo-imageable dielectric (PID) or hard mask + dry etch
- Flash etching selectivity insufficient; damascene-like processes may be needed
- Required via placement accuracy tighter than current laser drilling
- Within-panel uniformity critical

### 7.5 IRDS Packaging Lithography Roadmap (2024)

| Parameter | 2024 | 2027 | 2030 | 2035 |
|-----------|------|------|------|------|
| RDL pitch (back-end) | 3.00 um | 2.44 um | 1.87 um | 1.38--0.90 um |
| Solder bump pitch | 10 um | 8.1 um | 6.2 um | 4.6--3.0 um |
| Hybrid bonding pad pitch | 9.0 um | 6.0 um | 2.5 um | 1.9--1.2 um |

---

## 8. Market Structure and Supply Chain

### 8.1 Market Size

| Segment | 2024 | 2031 Forecast | CAGR |
|---------|------|---------------|------|
| Total IC substrate market | ~$12.9--13.5B | ~$21.2B | 8.0% |
| ABF substrates | ~$5.4B | ~$10.5B | 10.7% |
| BT substrates | ~$7.4B | ~$10.4B | 5.6% |

### 8.2 ABF Substrate Supply Chain

```
Ajinomoto Fine-Techno (ABF film, >95% share)
       |
       v
Substrate manufacturers: Ibiden, Unimicron, Shinko, Kinsus,
Nan Ya PCB, AT&S, SEMCO, Kyocera, Toppan
       |
       v
Assembly/OSAT: TSMC (CoWoS, InFO), Intel (EMIB, Foveros),
Samsung (I-Cube, X-Cube), ASE, Amkor, JCET
       |
       v
End customers: NVIDIA, AMD, Intel, Apple, Broadcom, Marvell
```

### 8.3 Key Material Suppliers

- **ABF film:** Ajinomoto (>95%), Sekisui (<5%), Chinese/Taiwanese alternatives (early)
- **BT resin:** Mitsubishi Gas Chemical (dominant), Nan Ya Plastics, Chang Chun Group, Sumitomo Bakelite, Resonac, Panasonic
- **Electroless copper chemicals:** MacDermid Alpha (Systek SAP), Atotech, JCU
- **Photoresist:** Tokyo Ohka Kogyo (TOK), JSR, Shin-Etsu, DuPont
- **Laser drilling:** Mitsubishi Electric, ESI (Coherent), Via Mechanics

### 8.4 Investment Trends

- >$15B invested since 2021 in IC substrate capacity
- New substrate lines: 18--24 months from announcement to first production + additional quarters for qualification
- Lead times at 2022--2024 peak: extended past 40 weeks
- Major expansions: AT&S Kulim (Malaysia), Unimicron Thailand, Ibiden Japan, Nan Ya PCB Taiwan

---

## 9. Glass Core Substrates -- Emerging Technology

### 9.1 What and Why

Glass core substrates replace the organic laminate core with a glass panel. They are widely seen as the next inflection point in IC substrate technology.

**Advantages over organic:**
- Superior dimensional stability (low TTV, low warp)
- CTE closely matches silicon (can be < 5 ppm/C)
- Lower dielectric loss
- Enables finer features (sub-2 um L/S)
- Supports longer signal paths with lower loss
- Can reach package sizes of 110 x 110 mm and above

### 9.2 Key Players and Roadmap

| Company | Pilot/Prototype | Mass Production Target | Notes |
|---------|----------------|----------------------|-------|
| Intel | Pilot line ~2025 | 2026--2030 | First to announce (Sep 2023); reaffirmed mid-2025 |
| Samsung Electro-Mechanics | Prototype 2025 | 2026--2027 | Cross-division alliance (Mar 2024); hired ex-Intel lead (Aug 2025) |
| Absolics (SK Group) | Already running | End of 2025 | $300M facility in Georgia, USA; collaborating with AMD |
| AMD | Sample evaluation | 2025--2026 | Multi-sourcing approach |
| AT&S | Research | TBD | IPCEI-funded R&D in Leoben, Austria |

### 9.3 Technology Status

- **TGV (Through-Glass Via):** Intel demonstrated 1:20 aspect ratio (ECTC 2025)
- **Samsung:** 800 um thick glass cores, 8 layers, 80 x 80 mm (prototype); 105 x 105 mm at 840 um thickness being validated for 2025
- **Market:** Initial mass production expected ~2026 (~2,000 m2 shipments), growing to ~8,000 m2 by 2027
- **First applications:** AI server CPUs/GPUs, switch ICs, RF modules, co-packaged optics

### 9.4 Challenges

- Glass brittleness -- not suitable for consumer mobile or automotive (physical impact)
- High capital investment for new production lines
- TGV formation and defect detection still being optimized
- Intel's strategic uncertainty under new leadership (may outsource vs. produce in-house)

---

## 10. Key Sources and References

### Industry Roadmaps
- IEEE IRDS 2024 -- Executive Packaging Tutorial Part 1 (PDF downloaded)
- IEEE HIR 2024 -- Chapter 22: Interconnects for 2D and 3D Architectures
- Onto Innovation / Semiconductor Engineering -- "Innovations Driving the Advanced Packaging Roadmap" (Jan 2025)

### Market Reports
- Yole Group -- "Advanced IC Substrate Reach the Stars" (2024)
- Future Markets Inc. -- "The Global Advanced IC Substrate Market 2025-2035"
- QYResearch -- "Global ABF Substrate Market" (2025)
- ReportPrime -- "Top IC Substrate Market Companies" (2025)

### Technical Papers and Articles
- Polymer Innovation Blog -- "Polymers in Electronic Packaging: Build-Up Films for Flip Chip Semiconductor Substrates, Part Two"
- Unimicron (IMPACT 2010) -- "A Coreless Technology Overview for Packaging Substrates"
- MacDermid Alpha -- "Systek SAP" (sales sheet)
- Surface and Coatings Technology (2024) -- "Enhanced adhesion strength between electroplated Cu and ABF substrate with isothermal annealing treatment"
- US Patent 2024/0243048 A1 -- "Electronic Package, Package Substrate and Manufacturing Method Thereof" (PDF downloaded)
- US Patent 6,282,781 B1 -- BT substrate thermal treatment process

### Manufacturer Technical Pages
- AT&S: IC substrates, glass core, sub-5 um development (IPCEI)
- Shinko: Plastic BGA, coreless substrates, IVH build-up
- Nan Ya PCB: Investor presentations (ABF for 3nm/4nm/5nm products)
- Sekisui: Build-up film products (NX04H, NQ07XP)

### Material Supplier Pages
- Ajinomoto Fine-Techno: ABF product series (GX, GY, GZ, GL, GT)
- Mitsubishi Gas Chemical: BT resin
- MacDermid Alpha: Systek SAP electroless copper

### Downloaded Files
See `downloads/` directory for available PDF resources.

---

*This document is a living research note. Key numbers and technology nodes should be cross-validated against primary sources before publication.*
