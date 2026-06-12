# TSMC Advanced Packaging Platforms

> Comprehensive research notes on TSMC's advanced packaging technologies: CoWoS, InFO, SoIC, CoPoS, and 3D Fabric.
> Compiled: 2026-06-12

---

## Table of Contents

1. [Overview: TSMC 3D Fabric](#1-overview-tsmc-3d-fabric)
2. [CoWoS (Chip-on-Wafer-on-Substrate)](#2-cowos-chip-on-wafer-on-substrate)
3. [InFO (Integrated Fan-Out)](#3-info-integrated-fan-out)
4. [SoIC (System on Integrated Chips)](#4-soic-system-on-integrated-chips)
5. [CoPoS (Chip-on-Panel-on-Substrate)](#5-copos-chip-on-panel-on-substrate)
6. [System-on-Wafer (SoW)](#6-system-on-wafer-sow)
7. [Customers and Market Adoption](#7-customers-and-market-adoption)
8. [Capacity and Manufacturing Expansion](#8-capacity-and-manufacturing-expansion)
9. [Competitive Landscape](#9-competitive-landscape)
10. [Roadmap and Future Directions](#10-roadmap-and-future-directions)
11. [Sources](#11-sources)

---

## 1. Overview: TSMC 3D Fabric

**3D Fabric** is TSMC's umbrella brand for its entire advanced packaging portfolio, encompassing three major technology pillars:

| Pillar | Technologies | Primary Application |
|--------|-------------|-------------------|
| **CoWoS** | CoWoS-S, CoWoS-R, CoWoS-L | 2.5D heterogeneous integration for HPC/AI |
| **InFO** | InFO-PoP, InFO-oS, InFO-Bridge, SoW | Fan-out wafer-level packaging for mobile/AI |
| **SoIC** | SoIC-X, SoIC-P, SoIC-mH | True 3D chip stacking via hybrid bonding |

TSMC positions itself as a "trusted technology and capacity partner" under its **Foundry 2.0** strategy -- delivering complete multi-chip systems using advanced packaging, not just bare dies. In 2024, TSMC-produced chips accounted for $250B of the $656B semiconductor market. The company forecasts reaching $500B of a projected $1T market by 2030 (from 38% to 50% of global semiconductor revenue). Dr. Kevin Zhang noted that AI and HPC will "account for over 45% of semiconductor revenues in 2030." (Source: TSMC 2025 North America Technology Symposium, Santa Clara, April 23, 2025)

**Key strategic roles of advanced packaging at TSMC:**
- Extends Moore's Law benefits by integrating chiplets from different process nodes
- Enables physically larger processors beyond the single-reticle limit (~858 mm^2)
- Reduces system-level power consumption through shorter interconnects
- Provides a competitive moat through vertically integrated process+packaging offerings
- Foundry 2.0 shifts from delivering non-packaged chips to OSATs toward building "complex multi-chip systems using advanced packaging"

---

## 2. CoWoS (Chip-on-Wafer-on-Substrate)

CoWoS is TSMC's 2.5D heterogeneous integration platform, combining logic dies (GPU/ASIC) and HBM memory on an interposer layer above a package substrate. It was first introduced in 2012 and has become the dominant packaging technology for AI accelerators, with an estimated >90% share of the AI chip 2.5D packaging market.

### 2.1 CoWoS-S (Silicon Interposer)

**Description:** Uses a full monolithic silicon interposer with through-silicon vias (TSVs) and multiple layers of sub-micron copper interconnect.

**Key Specifications:**
- Interposer material: Full monolithic single-crystal silicon
- Interconnect density: ~10^6 connections/mm^2
- Interposer layers: 10+ metal layers, sub-micron line/space
- Max interposer area: ~3.3x reticle limit (~2,700 mm^2, reticle limit applies)
- HBM support: Up to 8 HBM stacks (HBM3/HBM3e)
- Signal delay: 1-2 ps/mm (lowest in CoWoS family)
- eDTC (embedded deep trench capacitor): Integrated for power delivery
- Mature yield: >98%

**Advantages:**
- Highest interconnect density and signal integrity
- Best thermal CTE matching to logic dies (both silicon)
- Mature, production-proven since 2012

**Disadvantages:**
- Area limited by scanner reticle field (~858 mm^2 per exposure, 3.3x stitched max)
- "Round-to-square" geometry loss when cutting circular wafers for interposer
- High cost -- expensive silicon interposer for the full package area
- Yield challenges at larger sizes

**Key Products:**
- NVIDIA H100/H200 (Hopper) -- the dominant AI accelerator of 2023-2024
- AMD MI300 series (used along with SoIC)
- Google TPU (v4 and v5 generations)

**Status:** CoWoS-S is in volume production but TSMC is actively migrating customers to CoWoS-L. Its share of CoWoS capacity is declining.

### 2.2 CoWoS-R (RDL Interposer)

**Description:** Uses an all-organic polymer interposer with copper redistribution layers (RDL) -- no silicon interposer, no TSVs. The lowest-cost CoWoS variant.

**Key Specifications (as of ECTC 2025):**
- Interposer material: Organic polymer + Cu RDL (no Si, no TSV)
- RDL layers: Up to 9 layers
- Minimum L/S: 1.4 um / 1.4 um (ECTC 2025 announcement)
- Via CD: Down to 3 um
- Max package size: 5.5x reticle (66x68 mm, production as of 2025)
- CoW assembly yield: >99.5% reported
- Package-level yield: >99% reported
- HBM support: 2-4 HBM stacks typical
- Signal delay: 10-20 ps/mm (higher than CoWoS-S/L)
- Thermal conductivity: 0.2-0.5 W/m-K (low, requires thermal management)

**Thermal Management Innovations (ECTC 2025 papers):**
- Indium metal TIM (thermal interface material) with >80 W/m-K conductivity
- Supports up to 1866W TDP packages
- IMC-Si (Integrated Micro-Channel Silicon) direct liquid cooling can handle up to 3.4 kW TDP at 10 LPM flow rate
- Large-package warpage control solutions for 5.5x reticle size

**Advantages:**
- Lowest cost (~70% less than CoWoS-S)
- Organic flexibility mitigates CTE mismatch stress
- Large area capability (no reticle limit)
- No TSV processing required

**Disadvantages:**
- Lower interconnect density (~10^4-10^5 points/mm^2)
- Higher signal latency
- Poor thermal conductivity requires advanced cooling
- Lower routing density for high-bandwidth interfaces

**Key Products:**
- Broadcom custom AI ASICs
- Edge AI processors (cost-sensitive)
- Networking chips

**Status:** In production. CoWoS-R occupies a specialized niche (~6.9% of TSMC CoWoS capacity by 2025 Q4) for cost-sensitive or larger-area designs.

### 2.3 CoWoS-L (Local Silicon Interconnect)

**Description:** The hybrid approach -- small Local Silicon Interconnect (LSI) bridge dies are embedded in an organic RDL substrate, forming a reconstituted interposer. LSI provides high-density interconnect for critical signal paths (SoC-to-SoC, SoC-to-HBM), while the RDL handles global routing at lower cost.

**Historical Origin:** Foundational paper at ECTC 2023 by Yu-Chen Hu, Chih-Ta Shen, et al. (TSMC): "CoWoS Architecture Evolution for Next Generation HPC on 2.5D System in Package."

**Key Specifications:**
- Interposer architecture: Reconstituted interposer (RI) = LSI bridge dies + organic RDL
- LSI-1: Dual-damascene Cu, 0.8/0.8 um L/S, 2 um thickness
- LSI-2: Semi-additive process (SAP) Cu RDL with PI dielectric, 2/2 um L/S, 2.3 um thickness
- TIV (Through Insulator Via): Lower insertion loss than traditional TSV
- eDTC new generation: 1100 nF/mm^2 capacitance density (3x first generation)
- Max demonstrated interposer: ~2,500 mm^2 (3x reticle, 2023)
- Status 2024-2025: First 3.5x reticle size in production from 2024; 5.5x under development for 2025
- Target 2030: 8-10x reticle size interposer

**2025 Production Status:**
- 3.5x reticle CoWoS-L: In volume production (since 2024)
- 5.5x reticle CoWoS-L: Development started, entering production 2025-2026
- 2030 target: 8-10x reticle size interposer

**Advantages:**
- Performance near CoWoS-S (LSI provides silicon-class interconnect density)
- Cost near CoWoS-R (~50-60% lower than CoWoS-S)
- Breaks the silicon interposer area limitation
- Design flexibility with multiple LSI chips and architectures
- Supports SoC-to-SoC, SoC-to-HBM, and other connection configurations

**Disadvantages:**
- More complex manufacturing process (embedding LSI dies)
- Still requires precision alignment of bridge dies (nanometer-level)
- Newer technology with shorter track record

**Key Products:**
- NVIDIA B200/GB200 (Blackwell) -- the flagship AI accelerator of 2025
- NVIDIA R100 (Rubin) -- next-gen (2026+, CoWoS-L + SoIC)
- AMD MI350/MI450 series

**Strategic Importance:** At the Semicon Taiwan 2024 conference, TSMC's Director of High-Performance Packaging, Hou Shang-yung, explicitly stated that CoWoS-L is the primary future direction, replacing CoWoS-S for high-end AI applications. CoWoS-L is projected to represent ~54.6% of total CoWoS capacity by 2025 Q4.

### 2.4 CoWoS Comparison Matrix

| Attribute | CoWoS-S | CoWoS-R | CoWoS-L |
|-----------|---------|---------|---------|
| **Interposer** | Full Si (monolithic) | Organic RDL only | LSI bridges + RDL |
| **Interconnect density** | ~10^6/mm^2 | ~10^4-10^5/mm^2 | Key paths: 10^6 / RDL: 10^4-10^5 |
| **Max interposer (current)** | 3.3x reticle (~2,700 mm^2) | 5.5x reticle (HVM) | 3.5x (2024 HVM), 5.5x (2025) |
| **Signal delay** | 1-2 ps/mm | 10-20 ps/mm | ~1-2 ps/mm (LSI paths) |
| **Cost level** | Highest | Lowest (~70% less than CoWoS-S) | Medium (~50-60% less than CoWoS-S) |
| **HBM support** | Up to 8 HBM | 2-4 HBM | Up to 12 HBM3E/HBM4 |
| **Power capability** | Moderate | 1866W+ (with advanced cooling) | kW-class |
| **Relative capacity (2025 Q4)** | ~38.5% | ~6.9% | ~54.6% |
| **Primary customers** | AMD, Google | Broadcom, networking | NVIDIA, AMD |
| **Key products** | H100/H200, MI300 | Custom ASICs | B200/GB200, R100, MI350 |

---

## 3. InFO (Integrated Fan-Out)

InFO is TSMC's wafer-level Integrated Fan-Out packaging platform, introduced around 2016-2017. It uses high-density RDL and Through InFO Via (TIV) for interconnects without a traditional package substrate. InFO is part of the 3D Fabric portfolio alongside CoWoS and SoIC.

### 3.1 InFO-PoP (Package-on-Package)

**Description:** The industry's first 3D wafer-level fan-out package, enabling vertical stacking of logic (e.g., mobile AP) and memory (DRAM) without an organic interposer substrate.

**Key Features:**
- No organic substrate and no C4 bumps (unlike conventional FC-PoP)
- Thinner form factor (critical for mobile)
- Better electrical performance (shorter interconnect paths)
- Improved thermal performance
- Uses high-density RDL and TIV for die-to-die connections

**Historical Significance:**
- First adopted by Apple starting with iPhone 7 (A10 Fusion processor)
- Every subsequent Apple A-series chip has used InFO-PoP through the A17 and M-series
- Proved the viability of wafer-level fan-out for high-volume consumer applications

### 3.2 InFO-oS (on Substrate)

**Description:** Multiple chips integrated via InFO process on an organic substrate. Designed for multi-chip modules without the extreme density requirements of CoWoS.

**Key Specifications:**
- High-density RDL: 2/2 um line/space minimum
- Minimum I/O pitch: 40 um
- Minimum C4 bump pitch: 130 um
- Package size: >2x reticle, substrate >65x65 mm
- Application: 5G networking, HPC multi-chiplet integration

### 3.3 InFO-Bridge and SoW

**InFO-Bridge:**
- Bridge technology used in AMD Instinct accelerators
- Enables chiplet-to-chiplet interconnects in a fan-out package

**InFO-2.5D:**
- Mid-range alternative to CoWoS (expected H2 2025)
- Targets applications where CoWoS density is overkill but InFO-oS is insufficient

**SoW (System-on-Wafer):**
- An InFO extension for wafer-scale integration
- **SoW-P:** Chip-first approach (chips placed on wafer, then RDL built around them)
- **SoW-X:** Chip-last approach (interposer built first at wafer level)
- Broad roadmap aligned with leading-edge logic nodes

**InFO_3D (Future Direction):**
- Announced at TSMC 2025 Technology Symposium
- Enables logic-on-logic vertical stacking with power/signal routing through the bottom substrate
- Unlocks higher 3D integration density for future HPC/AI workloads

---

## 4. SoIC (System on Integrated Chips)

SoIC is TSMC's true 3D chip stacking technology, using direct copper-to-copper hybrid bonding (bumpless). Described by TSMC as "the industry's first high-density 3D chip stacking technology with heterogeneous integration." SoIC enables direct bonding of chips of varying sizes, functions, and process nodes. It is the fastest-growing platform in TSMC's packaging portfolio.

### 4.1 SoIC-X (Hybrid Bonding)

**Description:** Bumpless hybrid bonding (Cu-Cu direct bond). Dies are stacked face-to-face or face-to-back with no solder microbumps, enabling the highest density vertical interconnects.

**Pitch Roadmap (IEDM 2024 TSMC Tutorial):**

| Generation | Bond Pitch | TSV Pitch Min. | ESD Requirement | Status |
|-----------|-----------|----------------|-----------------|--------|
| Gen 1 | 9 um | 9 um | 10V | In production (AMD 3D V-Cache, MI300) |
| Gen 2 | 6 um | 6 um | 5V | Qualified, entered production 2024 |
| Gen 3 | 4.5 um | 4.5 um | 3V | Under development |
| Future | 3 um | -- | -- | 2027 target |

**Key Technical Characteristics:**
- Interconnect density at 10 um pitch: ~10,000 I/O per mm^2
- Trace length: ~0.01 mm (vs. 0.5-10 mm for CoWoS/InFO)
- No underfill required (dielectric-to-dielectric bond is the underfill)
- Copper pads on both surfaces undergo thermal compression, co-expanding and fusing
- Extremely low insertion loss and high energy efficiency

### 4.2 SoIC-P (Microbump)

**Description:** Uses conventional microbumps (solder) for vertical stacking, offering a lower-cost alternative to hybrid bonding.

- Pitch: 25 um to 16 um
- Target: Cost-sensitive 3D stacking where maximum interconnect density is not required

### 4.3 SoIC-mH

**Description:** Molding Horizontal variant -- a 2.5D approach where dies are placed side-by-side and encapsulated in molding compound rather than stacked vertically. Combines InFO-like RDL interconnects with SoIC brand positioning.

**Key Customer:** Apple M5 Pro, M5 Max, and M5 Ultra (expected 2025-2026). Apple has reportedly shifted away from a single unified memory architecture toward split CPU/GPU designs using SoIC-mH packaging.

### 4.4 Hybrid Bonding Technology Details

**Process Flow (Simplified):**
1. Die surfaces are planarized (CMP) to nanometer-level flatness
2. Cu pads are recessed slightly below the dielectric surface
3. Surfaces are cleaned and activated (plasma treatment)
4. Dielectric surfaces are bonded at room temperature
5. Annealing causes copper expansion, creating a fused Cu-Cu connection
6. The result: a monolithic-like interface with no solder, no underfill

**Advantages vs. Microbump (SoIC-P):**
- 10-100x higher interconnect density
- 3-5x lower power per bit
- Better thermal dissipation through direct Cu-Cu path
- Superior reliability (no solder fatigue)
- Thinner overall stack (no bump height)

**Competitive Benchmarking:**
- TSMC SoIC: 9 -> 6 -> 4.5 -> 3 um pitch roadmap
- Besi (equipment supplier) roadmap targeting sub-2 um pitches for next-gen
- Samsung X-Cube: 4 um pitch hybrid bonding entering production verification (2025)
- Intel Foveros Direct: competitive hybrid bonding approach

### 4.5 COUPE (Compact Universal Photonic Engine)

**Description:** TSMC's silicon photonics integration platform based on SoIC stacking technology, enabling co-packaged optics (CPO).

**Generations:**
- **COUPE 1.0:** Electrical chip stacked on photonic IC (EIC-on-PIC) using SoIC hybrid bonding
- **COUPE 2.0:** Further integration of optical engines with switching ASICs

**Applications:**
- Ultra-high-end network switches
- NVIDIA Rubin architecture interconnects (replacing copper transceivers, 5x power reduction)
- Target: 1.6T optical transmission by late 2025, volume shipments in 2026 aligned with NVIDIA roadmap

---

## 5. CoPoS (Chip-on-Panel-on-Substrate)

CoPoS is TSMC's next-generation advanced packaging platform, evolving from CoWoS by replacing circular 300mm wafers with rectangular glass panels. This is arguably the most impactful packaging transition since CoWoS itself.

### 5.1 Technology Overview

**Core Concept:** CoPoS extends CoWoS from wafer-level to panel-level processing. The fundamental enabler is switching from a circular silicon interposer to a rectangular glass panel with Through Glass Vias (TGVs).

**Key Drivers:**
- Area efficiency: Rectangular panels improve utilization from ~57% (circular wafer) to 87%+ (panel)
- Size scaling: Panels can reach 515x510 mm (vs. 300 mm wafer diameter), providing 300%+ more usable area
- Cost reduction: 15-25% lower cost at 310mm panel, 40%+ at full scale (515x510 mm)
- Breaking reticle limits: Enables packages >9.5x to 14x reticle size (2028-2029 target)

**Correcting Common Misconceptions (per Ming-Chi Kuo and industry analysis):**
- CoPoS does NOT use a glass interposer; the interconnect function is shared between chip-side RDL and the glass core substrate's TGV + ABF build-up layers
- Glass does NOT replace ABF; they coexist in a three-layer sandwich structure
- Chips are NOT placed directly on glass; chips attach to the ABF surface on top of the glass core

### 5.2 Glass Substrate Architecture

**Three-Layer Sandwich Structure:**
1. **Glass Core** -- central structural layer (provides rigidity, CTE matching)
2. **ABF (Ajinomoto Build-up Film)** layers on both sides of glass -- the build-up layers for fine-pitch routing
3. **TGV** -- Through Glass Vias providing vertical interconnects through the core

**Detailed stackup (bottom to top):**
1. PCB / system board
2. C4 bumps / BGA
3. Glass core substrate with TGV + ABF buildup layers (ABF-GCP)
4. microbumps
5. Chips (ASIC/GPU + HBM stacks) attached to ABF surface, interconnected via RDL

**Glass Substrate Dimensions:**

| Format | Dimensions | Purpose | Status |
|--------|-----------|---------|--------|
| Pilot/test | 250 x 250 mm | Process development, equipment qual | Active (2025-2026) |
| Trial production | 310 x 310 mm | Pilot line & early production | Planned for 2026 pilot line |
| Mass production | 515 x 510 mm | Full-scale HVM | Target 2028-2029 |
| Super-panel | 750 x 620 mm | Future beyond CoPoS | 2027-2028 exploration |

**Note:** Industry has shifted from originally targeting 510x510 mm to 310x310 mm for pragmatic reasons (warpage control, equipment compatibility, yield). The larger format is planned for later upgrades.

**Glass Advantages:**
- CTE matching to silicon (~3 ppm/K vs Si ~2.6 ppm/K)
- Lower dielectric loss (better high-frequency performance)
- Higher flatness (<0.1 um roughness)
- Supports 112G/224G SerDes and CPO integration
- Better dimensional stability than organic substrates at large sizes

### 5.3 TGV (Through Glass Via)

**Core Technical Challenge of CoPoS:**

**TGV Process Flow:**
1. Via formation: Ultrafast laser-induced deep etching (LIDE preferred for high aspect ratio)
2. Seed layer sputtering: Depositing conductive seed layer
3. Copper electroplating: Filling vias without voids
4. CMP planarization: Preparing surface for RDL

**Target Specifications:**
- Via diameter: <10 um
- Aspect ratio: >10:1 (up to 50:1 theoretical vs TSV's ~10:1)
- Via density: Higher than TSV (enabled by higher aspect ratio)
- Void-free filling required for reliability

**Manufacturing Equipment Required:**
- TGV formation: Ultrafast laser drilling systems (DISCO, etc.)
- Panel-level plating equipment
- CMP systems for glass panels
- Direct-write lithography (Canon, etc.)
- AOI inspection for glass defects

### 5.4 Roadmap and Timeline

| Timeframe | Milestone |
|-----------|-----------|
| 2024 | Feasibility studies completed |
| 2025 | Equipment qualification, process development for 310x310 mm |
| 2026 Q1 | Pilot line equipment delivery begins (Caiyu facility, Taiwan) |
| 2026 H1 | Pilot line fully established by mid-2026 |
| 2026 June | Chairman C.C. Wei confirms: "CoPoS pilot line has been built; 2-3 years to meaningful scale" |
| 2026-2027 | Pilot production and customer sampling |
| 2027 | Small-batch sampling, customer validation |
| 2028 H2 | Mass production begins (AP7 in Chiayi, Taiwan) |
| 2028-2029 | Ramp from 310x310 mm to 515x510 mm panels |
| ~2030 | First full-scale HVM products in market |
| ~2032 | Expected CoPoS leadership sustainment horizon |

**Note:** Some industry sources suggest mass production could slip to 2029-2030. Current consensus from TSMC (June 2026 shareholder meeting) points to 2028 H2 as the mass production target with meaningful scale 2-3 years after pilot line completion.

**Arizona (USA) Plans:**
- Two advanced packaging fabs planned, connected to the third Arizona wafer fab
- Construction targeting 2028
- SoIC to be developed in US before CoPoS
- CoPoS in Arizona targeting demand after 2030

**First Expected Adopter:** NVIDIA's "Feynman" AI chip, targeting packages above 9.5x reticle size.

---

## 6. System-on-Wafer (SoW)

Announced at TSMC 2025 Technology Symposium. SoW is a new category within the 3D Fabric portfolio targeting wafer-scale integration for AI.

### 6.1 SoW-P

- Architecture: Chip-first approach -- individual dies placed on wafer, then RDL built around them
- Target: Mobile/edge AI, <100W per module
- Expected production: ~2027

### 6.2 SoW-X

- Architecture: Chip-last approach -- interposer constructed first at wafer level, then chips placed on top
- Key claims:
  - Enables designs up to 40x larger than standard reticle
  - 40x computing performance improvement over current CoWoS solutions
  - Supports up to 60 HBM stacks
  - ~1700W per wafer TDP
  - 260 TB/s die-to-die bandwidth
- Expected production: **2027**
- Equivalent to packaging an entire server rack into a single wafer-level package

---

## 7. Customers and Market Adoption

### Customer Summary Table

| Customer | CoWoS | InFO | SoIC | CoPoS (Future) |
|----------|-------|------|------|----------------|
| **NVIDIA** | H100 (CoWoS-S), B200/GB200 (CoWoS-L), R100 (CoWoS-L+SoIC) | -- | Planned (Rubin) | First expected adopter (Feynman, 2028+) |
| **AMD** | MI300 (CoWoS-S+SoIC), MI350 (CoWoS-L) | Instinct bridge | MI300 (3D V-Cache), first SoIC adopter | Expected |
| **Apple** | -- | InFO-PoP (A-series), InFO (M-series) | M5 (SoIC-mH, 2025-2026) | Exploring |
| **Broadcom** | Custom ASICs (CoWoS-R) | -- | Custom AI ASICs (6um pitch, 2026) | Expected |
| **Google** | TPU v4/v5 (CoWoS-S) | -- | TPUv9 (N2 process, SoIC) | Expected |
| **AWS** | Trainium 3 (CoWoS-R) | -- | Trainium 4 (SoIC) | Expected |

### Customer Detail

**NVIDIA:**
- The single largest consumer of CoWoS capacity
- Estimated to consume ~59% of TSMC's total 2026 CoWoS output (declining to ~53% in 2027)
- H100 generation used CoWoS-S; Blackwell (B200/GB200) migrated to CoWoS-L
- Rubin (R100, entering production 2026) will use CoWoS-L + SoIC hybrid bonding
- Rubin specs: 3nm N3P, ~336B transistors, 4x reticle size, 12-16 HBM4 stacks, 22 TB/s bandwidth, ~100 petaflops FP4, Vera CPU (88 custom ARM cores)
- Co-packaged optics replacing copper transceivers for 5x power reduction in inter-GPU communication
- Pre-ordering over half of TSMC's 2026 capacity, creating strategic bottleneck for competitors

**AMD:**
- First commercial SoIC adopter (MI300 with 3D V-Cache)
- MI300 uses CoWoS-S with SoIC for CPU+GPU+memory integration
- MI350 series transitioning to CoWoS-L
- Estimated ~9% of TSMC 2026 CoWoS allocation (growing to ~11% in 2027)

**Apple:**
- Longest-running InFO-PoP customer (since iPhone 7/A10, 2016)
- M5 Pro/Max/Ultra expected to adopt SoIC-mH packaging in 2025-2026
- WMCM (Wafer-Level Multi-Chip Module) at AP7 P1 may serve foldable iPhone (H2 2026)

**Broadcom:**
- Custom AI ASIC customer for Google/Meta
- Uses CoWoS-R for cost-effective solutions
- Co-developing SoIC face-to-face hybrid bonding at 6 um bond pad pitch
- Estimated ~20% of TSMC CoWoS allocation by 2027

**Other:**
- Google (TPU), Meta, AWS, xAI, MediaTek all placing urgent/premium orders
- MediaTek entering ASIC in 2026 with significant bookings
- Intel as potential foundry CoWoS customer

---

## 8. Capacity and Manufacturing Expansion

TSMC is aggressively scaling advanced packaging capacity to meet AI demand.

### CoWoS Capacity Ramp

| Period | Monthly Capacity (WPM) | Growth |
|--------|----------------------|--------|
| 2023 | ~15,000 | Baseline |
| 2024 | ~35,000-40,000 | ~2.5x YoY |
| 2025 | ~70,000-95,000 | ~5-6x from 2023 |
| 2026 target | ~115,000-150,000 | ~1.5-2x from 2025 |
| 2027 target | ~175,000 | Continued growth |
| 2028 target | ~220,000 | Continued growth |

**2025 capacity by variant (Q4 projection via industry sources):**
- CoWoS-L: ~54.6%
- CoWoS-S: ~38.5%
- CoWoS-R: ~6.9%

### Fab Expansion Details

| Fab | Location | Technology | Status |
|-----|----------|-----------|--------|
| **AP3** | Longtan, Taiwan | CoWoS | Existing, operational |
| **AP5** | Taichung, Taiwan | CoWoS | Capacity ramp expected 4Q25-1Q26 |
| **AP6** | Zhunan, Taiwan | SoIC, Advanced Packaging | Existing, capacity expansions 2Q25 and 4Q25 |
| **AP7** | Chiayi, Taiwan | CoWoS (P2/P3), SoIC, WMCM, CoPoS (P4/P5) | Major build-out; P1 (WMCM/Apple); P2/P3 converted from SoIC to CoWoS; equipment installation accelerated to August 2025 |
| **AP8** | Tainan, Taiwan | CoWoS | P1 operational; P2 facility being added; equipment Q1-Q2 2025; mass production H2 2025 |
| **Arizona Fab 3** | Phoenix, USA | Advanced wafer fab (N2/A16) | Construction; advanced packaging fabs on-site planned |
| **Arizona Packaging** | Phoenix, USA | SoIC, CoPoS | Two fabs planned, construction targeting 2028; SoIC before CoPoS |
| **Yunlin** | Taiwan | Potential new site | Under evaluation |

### SoIC Capacity Ramp

| Year | Monthly Output | Growth Rate |
|------|---------------|-------------|
| 2024 mid | ~2,000 wafers | Initial ramp |
| 2024 year-end | ~4,000-5,000 wafers | Doubled within year |
| 2025 | ~10,000 wafers | +100% YoY |
| 2026 | ~20,000-26,000 wafers | +100-160% YoY |
| 2027 | ~40,000 wafers | +54% YoY |
| 2028 | ~65,000 wafers | +62% YoY |

Customer designs: ~30 SoIC designs expected by 2026-2027.

### Investment Scale

- TSMC 2026 CapEx: $52-56 billion (includes packaging expansion)
- Significant portion dedicated to advanced packaging fabs, tools, and infrastructure
- Equipment suppliers: KLA, TEL, Screen, Applied Materials, DISCO, ~13 Taiwan vendors
- OSAT partnerships (ASE, SPIL) building "TSMC-like" CoWoS capacity
- ASE/SPIL and Amkor growing to ~20% of CoWoS capacity by 2028
- OSAT focus: CoWoS-S/R (medium complexity); CoWoS-L stays with TSMC

---

## 9. Competitive Landscape

### Three-Way Competition

| Dimension | TSMC (3D Fabric) | Intel (ASAT) | Samsung (HIT/AVP) |
|-----------|-----------------|--------------|-------------------|
| **2.5D platform** | CoWoS-S/R/L | EMIB (Embedded Multi-die Interconnect Bridge) | I-Cube S/E, H-Cube |
| **3D platform** | SoIC (hybrid bond + microbump) | Foveros, Foveros Direct | X-Cube (microbump + hybrid bond) |
| **Next-gen** | CoPoS (panel, glass), SoW | EMIB-T (with TSV), glass core substrates | HPB (glass), FOPLP |
| **AI chip market share (2.5D)** | >90% | Single-digit % | Single-digit % |
| **Cost per high-end package** | ~$900-1000 (Rubin-level) | ~$100s | Mid-range |
| **Max reticle size** | 3.5-5.5x | 12+ EMIB-T concept | ~3x (I-Cube S) |
| **Integrated logic fab** | Yes (tight coupling) | Yes (tight coupling) | Yes (+ in-house HBM) |
| **Memory integration** | External HBM (SK Hynix/Samsung/Micron) | External HBM | In-house HBM (strategic advantage) |

### Intel EMIB / Foveros

**EMIB (Embedded Multi-die Interconnect Bridge):**
- Uses small silicon bridge dies embedded in organic package substrate
- Bridges only placed where high-density interconnect is needed (not full interposer)
- Lower cost than full silicon interposer
- **EMIB-T (new):** Adding TSVs to the embedded bridge, improving signal integrity for HBM4 and UCIe
- **Production milestone:** Clearwater Forest (288-core Xeon) uses 12 EMIB bridges to connect 17 tiles -- most tiles in a commercial processor
- **Large package capability:** Demo of 16 compute tiles + 24 HBM5 dies, total silicon area >10,000 mm^2 (12x reticle)
- **Manufacturing:** EMIB line deployed at Amkor Korea factory; $7B packaging facility in Malaysia now operational
- **External customers:** Amazon Trainium, MediaTek, Google TPU evaluating; Apple and Qualcomm "assessing"
- **Strategic shift:** Initially customers came because CoWoS capacity was unavailable; now some designs actively choose EMIB

**Foveros:** Intel's 3D stacking technology
- **Foveros Direct:** Hybrid bonding approach competing with SoIC
- Current production: Meteor Lake (CPU tiles on base die)

**Glass Core Substrate:**
- Intel has paused internal glass substrate development (per CEO Lip-Bu Tan)
- Will source ready-made solutions from specialized vendors
- Cited reasons: financial risk reduction, operating cost optimization, faster time-to-market

### Samsung I-Cube / X-Cube

**Platforms:**
- **I-Cube S:** Silicon interposer (competes with CoWoS-S), 3x reticle area, 8 HBM3
- **I-Cube E:** Embedded silicon bridge + FO-PLP (fan-out panel-level), 3 logic dies + 12 HBM3, in production verification
- **H-Cube:** Sub-motherboard approach for warpage management with 6+ HBM stacks
- **X-Cube:** 3D stacking with 4 um hybrid bonding entering production verification (2025)

**Key Customer Win:** Tesla AI6 chip -- ~$16.5B turnkey order (foundry + packaging + test). Samsung's unique advantage: offers HBM memory + foundry + packaging as integrated solution.

**Glass Substrates:** Samsung Electro-Mechanics supplying glass substrate samples to Apple, targeting 2027 production.

### Market Structure

- **Overall advanced packaging market (2024):** ~$46 billion (Yole Group)
  - Intel: ~$6.5B, Amkor: ~$5.3B, ASE/SPIL: ~$5.3B, TSMC: ~$5.0B, Samsung: ~$3.1B
- **Forecast 2030:** ~$79.4 billion (CAGR 9.5%)
- **AI 2.5D packaging:** TSMC >90% share
- **Foundry/IDM segment:** Expected to claim 42% of market by 2029
- **Memory players (Samsung, SK Hynix, Micron):** Capturing ~54% of high-end packaging market
- **Trend:** Moving from "TSMC-exclusive" toward "TSMC-dominant + OSAT partners + Intel/Samsung alternatives"

---

## 10. Roadmap and Future Directions

### TSMC Advanced Packaging Roadmap (2025-2032+)

| Year | CoWoS | InFO/SoW | SoIC | CoPoS | Enabling Technologies |
|------|-------|----------|------|-------|----------------------|
| **2025** | CoWoS-L 3.5x HVM, 5.5x dev; capacity 70-95k WPM | SoW-P qualification; InFO-2.5D | SoIC Gen2 (6um) HVM, Gen3 (4.5um) dev; capacity ~10k WPM | Pilot line build (310mm panel) | Indium TIM, IMC-Si liquid cooling |
| **2026** | CoWoS-L 5.5x HVM; capacity 115-150k WPM | SoW-P test chips | SoIC Gen3 (4.5um); capacity 20-26k WPM | Pilot line complete; small-batch sampling | CPO 1.6T volume shipments |
| **2027** | 9.5x reticle development; capacity ~175k WPM | **SoW-X HVM** (40x reticle, 40x perf) | SoIC 3um development; ~30 designs; capacity ~40k WPM | Customer validation; small-batch qual | Co-packaged optics, integrated photonics |
| **2028-2029** | CoWoS-L 8-10x reticle; capacity ~220k WPM | SoW-X ramp | SoIC 3um HVM; capacity ~65k WPM | **CoPoS HVM** (310->515mm); 9.5-14x reticle | SiC interposer (NVIDIA), super-panels |
| **2030+** | Coexistence with CoPoS | Larger SoW formats | Sub-3um pitch | Full-scale HVM; 750x620mm super-panels | 2D gate transistors + CFET + 3D packaging |

### Technology Convergence Trends

1. **All three platforms converging on hybrid architectures:**
   - CoWoS-L already uses embedded bridges (LSI) -- conceptually similar to EMIB
   - EMIB-T adds TSVs to bridges -- conceptually similar to CoWoS-L's LSI+TSV
   - I-Cube E combines embedded bridges with panel-level processing
   - The winning approach appears to be: **local high-density bridges + global RDL/fan-out**

2. **Packaging becoming inseparable from process technology:**
   - TSMC's N2 (2nm, GAA nanosheets) and A16 (1.6nm, backside power delivery) are co-optimized with packaging
   - AMD's "SoIC + CoWoS" combination is becoming a template for high-end AI processors
   - 3D stacking with 3 um pitches enables integration of N2/A16 compute dies with older-node cache/memory

3. **Key industry inflection points ahead:**
   - Transition from CoWoS to CoPoS (2028-2029) -- the largest packaging shift since CoWoS
   - Hybrid bonding pitch reaching 3 um (enabling A16 N2P-class 3D stacking)
   - Co-packaged optics replacing copper interconnects at rack scale (5x power reduction)
   - Wafer-scale integration (SoW) for massive AI training (40x current performance)

### Open Challenges

- **CoPoS manufacturing readiness:** TGV uniformity, warpage control at panel scale, equipment maturity
- **Hybrid bonding yield:** Particle contamination control at sub-um pitch is extremely demanding
- **Thermal management:** kW-scale packages require integrated liquid cooling (IMC-Si, direct-to-die)
- **Supply chain constraints:** TSV capacity, TGV equipment, ABF substrates all remain tight
- **Cost optimization:** CoWoS-L at $900-1000 per high-end package is significant; chip+package+memory costs all escalating
- **Intel and Samsung catching up:** EMIB attracting more designs; Samsung wins (Tesla AI6) showing viable alternatives

---

## 11. Sources

### TSMC Official Sources

1. **TSMC 2024 Annual Report** -- investor.tsmc.com. Covers CoWoS-L 3.5x production, 5.5x development, CPO integration.
2. **TSMC 2025 North America Technology Symposium** (April 23, 2025, Santa Clara, CA) -- Keynote by Dr. Yuh-Jier Mii (EVP & Co-COO), Dr. Kevin Zhang. 3DFabric portfolio, SoW, N2/A16 process, CoWoS roadmap.
3. **TSMC IEDM 2024 Tutorial** -- SoIC hybrid bonding pitch roadmap (9->6->4.5->3 um).
4. **TSMC Semicon Taiwan 2024 Presentation** -- Hou Shang-yung (Director, High-Performance Packaging): CoWoS-L as future mainstream.
5. **TSMC 2020 Annual Report** -- investor.tsmc.com. InFO PoP historical context.

### Conference Papers (ECTC/IEEE)

6. **Yu-Chen Hu, Chih-Ta Shen, et al. (TSMC).** "CoWoS Architecture Evolution for Next Generation HPC on 2.5D System in Package." IEEE 73rd ECTC, Orlando, FL, 2023. DOI: 10.1109/ECTC51909.2023.00174. -- Foundational CoWoS-L paper with LSI bridge architecture.
7. **ECTC 2025 Papers (TSMC)** -- Four papers on CoWoS-R:
   - "Fine Pitch High Density CoWoS-R Package with 1.4/1.4um RDL Lines and 3um via CD"
   - "Package Warpage Reduction for Large CoWoS-R Packages"
   - "Integrated Package-to-System Thermal Solution for High-Performance 2.5D CoWoS-R"
   - "Direct-to-Silicon Liquid Cooling Integrated on CoWoS Platform"

### Analyst Reports

8. **TrendForce** -- "Analysis of TSMC's North America Technology Symposium: Unveiling of Roadmap for Advanced Packaging Solutions and Related Strategy" (RP250507TG, May 2025).
9. **TrendForce** -- TSMC SoIC customer and capacity reports (April 2024: "4 major clients for SoIC, including Apple, NVIDIA and Broadcom"; March 2025: "NVIDIA's Rubin adopts SoIC after AMD and Apple").
10. **Yole Group** -- "Status of the Advanced Packaging Industry 2025" (September 2025). Market: $46B in 2024, $79.4B by 2030.
11. **IDC** -- "Worldwide Semiconductor Advanced Packaging Market Forecast and Analysis, 2025-2029" (February 2025).
12. **Counterpoint Research** -- Foundry 2.0 Revenue Tracker (September 2025): TSMC share rising to 39%.
13. **Ming-Chi Kuo (TF International Securities)** -- CoPoS analysis (June 2026): 2028 H2 mass production, three-layer architecture, glass+ABF coexistence, NVIDIA first adopter.

### Industry News and Analysis

14. **Wedbush / TokenRing** -- Series on CoWoS crunch and NVIDIA packaging (Jan-Feb 2026):
    - "The CoWoS Crunch: Why TSMC's Specialized Packaging Remains the AI Industry's Ultimate Bottleneck"
    - "Breaking the Silicon Ceiling: TSMC Races to Scale CoWoS and Deploy Panel-Level Packaging for NVIDIA's Rubin Era"
    - "The Great Unclogging: TSMC Commits $56 Billion Capex to Double CoWoS Capacity"
    - "The Packaging Revolution: How 3D Stacking and Hybrid Bonding are Saving Moore's Law in the AI Era"
15. **3DInCites / IMAPS** -- "IFTLE 638: TSMC Advanced Packaging Coming to AZ; Intel Stops Internal Glass Core Substrate Funding" (August 2025). Details on CoPoS Arizona plans, Intel glass substrate pivot.
16. **3DInCites / IMAPS** -- "IFTLE 628: TSMC System-on-Wafer in the Works" (May 2025). SoW 2027 target.
17. **Digitimes** -- "TSMC Advanced Packaging Expansion Direction Major Revisions: AP8, AP7, US Fabs All Changed" (2025). AP7 P2/P3 conversion from SoIC to CoWoS.
18. **Design & Reuse** -- "TSMC Reportedly Speeds Up AP7 and AP8 Build-Outs, Targets Doubling SoIC Capacity" (2025).
19. **EE Times Taiwan** -- "AI-Driven Trillion-Dollar Opportunity: TSMC Fires Three Arrows in Technology, Packaging, and Capacity" (May 2025).
20. **TechPowerUp** -- "TSMC Outlines Roadmap for Wafer-Scale Packaging and Bigger AI Packages" (2026).
21. **SemiWiki** -- Coverage of TSMC 2025 Technology Symposium.
22. **CLS / HTX / EastMoney** -- C.C. Wei June 2026 shareholder meeting statements on CoPoS pilot line and timeline.

### Equipment and Supply Chain

23. **Besi 2025 CMD Presentation** -- Hybrid bonding equipment roadmap and market data.
24. **MoneyDJ / Digitimes** -- TSMC supply chain analysis: CoWoS equipment suppliers, OSAT partnerships (ASE/SPIL).
25. **Counterpoint Research / Electronics For You** -- OSAT sector growth data (Q2 2025: 11% YoY growth, led by ASE and KYEC).

### Downloadable Materials Attempted

| File | Source | Status |
|------|--------|--------|
| TSMC 2024 Annual Report (English) | investor.tsmc.com | Redirected to HTML page; check investor relations portal |
| ECTC 2023 CoWoS-L paper | IEEE Xplore | Paywalled (TSMC authors) |

---

> **Note to content creators:** This file serves as the primary reference for creating reader-facing educational content about TSMC's advanced packaging platforms. Key emphasis areas: (1) trade-offs between CoWoS-S/R/L for different applications, (2) technological significance of hybrid bonding in SoIC, (3) why CoPoS represents a fundamental shift from circular to panel-based manufacturing, (4) how TSMC's packaging strategy creates competitive advantage beyond process node leadership. The platform comparison matrix (Section 2.4) and capacity tables (Section 8) are particularly useful for infographics and data visualization.
