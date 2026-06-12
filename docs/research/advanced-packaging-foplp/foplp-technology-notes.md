# Fan-Out Panel Level Packaging (FOPLP): Comprehensive Technology Notes

> **Research compiled:** 2026-06-13
> **Scope:** FOPLP technology covering Samsung, ASE/SPIL, Amkor, JCET, process technology, equipment ecosystem, applications, and comparison with TSMC CoPoS.
> **Note:** This directory covers FOPLP broadly. For TSMC-specific CoPoS deep dive, see `../advanced-packaging-tsmc-copos/`.

---

## Table of Contents

1. [FOPLP Fundamentals](#1-foplp-fundamentals)
2. [FOPLP Process Flow](#2-foplp-process-flow)
3. [Panel Size Standards and Economics](#3-panel-size-standards-and-economics)
4. [Samsung's FOPLP/ePLP](#4-samsungs-foplpeplp)
5. [ASE/SPIL FOPLP](#5-asespil-foplp)
6. [Amkor Panel-Level Packaging](#6-amkor-panel-level-packaging)
7. [JCET Fan-Out / Panel-Level Packaging](#7-jcet-fan-out--panel-level-packaging)
8. [Innolux and Panel-Maker FOPLP](#8-innolux-and-panel-maker-foplp)
9. [Equipment Ecosystem](#9-equipment-ecosystem)
10. [FOPLP vs. TSMC CoPoS](#10-foplp-vs-tsmc-copos)
11. [Applications](#11-applications)
12. [Challenges](#12-challenges)
13. [Market Forecast](#13-market-forecast)
14. [References and Sources](#14-references-and-sources)

---

## 1. FOPLP Fundamentals

### 1.1 What is FOPLP?

Fan-Out Panel Level Packaging (FOPLP) is an advanced semiconductor packaging technology that uses large rectangular panels (instead of circular wafers) as the substrate for fan-out redistribution. Components are embedded in an epoxy molding compound (EMC), and redistribution layers (RDL) extend I/O connections beyond the die footprint.

**Key distinction:**
- **Fan-in (FI):** RDL traces and bump pads remain within the die footprint
- **Fan-out (FO):** RDL traces extend beyond the die footprint, enabling more I/O and larger ball pitch
- **Panel Level (PLP):** The carrier is a rectangular panel (metal, glass, or polymer) rather than a circular wafer

### 1.2 FOPLP vs. FOWLP: Side-by-Side

| Feature | FOWLP (Wafer Level) | FOPLP (Panel Level) |
|---|---|---|
| **Carrier shape** | Circular wafer (200mm, 300mm) | Rectangular/square panel (300-700mm) |
| **Area utilization** | ~85% (wafer edge waste) | ~95%+ (rectangular fits dies well) |
| **Infrastructure** | Wafer fab equipment | PCB/panel manufacturing equipment |
| **Lithography** | Wafer stepper (fine pitch, 2um+) | Laser direct imaging or panel stepper (coarser) |
| **Dielectric** | Liquid spin-coated (PI, PBO, BCB) | Dry film dielectrics or liquid slot-coating |
| **Die size limit** | ~12x12mm (warpage constraint) | Larger dies possible |
| **Cost advantage** | Baseline | 20-40% lower for large packages |
| **Maturity** | Mature, high-volume | Emerging, R&D to early production |
| **Best for** | Small-to-medium packages, high I/O | Large packages, cost-driven high volume |

### 1.3 Key Advantages of FOPLP

1. **Cost reduction:** 20-30% lower cost vs. FOWLP (Yole Group), driven by:
   - Higher throughput per panel (one 600x600mm panel = ~5x area of 300mm wafer)
   - Better material utilization (square on square)
   - Leverages lower-cost PCB manufacturing equipment
2. **Large die support:** Can accommodate dies >12x12mm that cause warpage issues in wafer-level
3. **Large package sizes:** No round-wafer edge waste for rectangular packages
4. **Higher productivity:** More units per process run

### 1.4 Key Disadvantages of FOPLP

1. **Warpage control:** Major challenge on large rectangular panels due to CTE mismatch and stress gradients
2. **Die shift:** More pronounced at panel edges vs. center during molding
3. **RDL resolution limits:** PCB-based lithography (LDI) cannot match wafer stepper for fine pitch
4. **Material challenges:** Need low-temperature cure dielectrics compatible with mold compound
5. **No standardization:** Multiple competing panel sizes (300mm, 415x510mm, 510x515mm, 600x600mm, 650x650mm)
6. **CapEx risk:** Initial line investment >$100-200M, requires high utilization for ROI

---

## 2. FOPLP Process Flow

FOPLP uses three main process architecture approaches:

### 2.1 Chip-First Face-Down (Most Conventional)

```
Step 1: Pick & place KGD (known good die) face-down on temporary carrier (panel)
Step 2: Compression over-molding with epoxy mold compound (EMC)
Step 3: Remove temporary carrier (laser debond or mechanical release)
Step 4: Grind mold compound to expose die backside or thin the package
Step 5: Build RDL layers (dielectric + Cu metallization) on exposed die surface
Step 6: Apply solder balls (BGA)
Step 7: Singulation into individual packages
```

| Pros | Cons |
|------|------|
| Simple, well-understood process | Die shift critical (occurs before RDL) |
| Good for low-cost PMIC, RF | Requires adaptive/stepper lithography for fine pitch |
| Mature in panel format | Post-mold RDL must endure warpage |

### 2.2 Chip-First Face-Up (Used in ePLP, InFO-like)

```
Step 1: Plate Cu studs/UBM on die pads (device wafer processing)
Step 2: Pick & place dies face-up on thermal release tape on carrier panel
Step 3: Compression molding
Step 4: Back-grind mold to expose Cu studs
Step 5: Build RDL layers from exposed contact pads
Step 6: BGA bumping and singulation
```

| Pros | Cons |
|------|------|
| Known-good contacts after grinding | Requires Cu pillar on die before placement |
| No temporary bonding/debonding required | More process steps on die side |
| SIMPLER carrier management | |

### 2.3 RDL-First (Chip-Last) (Used by Tianma, Samsung R&D)

```
Step 1: Build RDL layers first on carrier with sacrificial release layer
Step 2: Die-attach chips face-down onto completed RDL
Step 3: Over-mold with EMC
Step 4: Carrier release via laser debonding
Step 5: BGA bumping and singulation
```

| Pros | Cons |
|------|------|
| Finest RDL resolution (on flat carrier) | Needs known-good RDL substrate (KGS challenge) |
| RDL not subjected to mold warpage | Electrical test of RDL before die attach is difficult |
| Preferred by display manufacturers (RDL = TFT-like) | Die shift still an issue during molding |

**Samsung's finding (ECTC 2018):** RDL-first enables 2/2 um L/S on glass panels because fine features "can be easily obtained on relatively flat carriers compared with molded wafers or panels." However, probing for KGS testing remains challenging with ~200,000 bumps at 20-25um diameter.

### 2.4 Key Process Material Differences vs. FOWLP

| Process Step | FOWLP | FOPLP |
|---|---|---|
| Dielectric deposition | Spin-coating (liquid) | Slot-die coating or dry film lamination |
| Lithography | Wafer stepper | Laser Direct Imaging (LDI) or panel stepper |
| Cu plating | Wafer-level ECD | Panel-level ECD (horizontal or vertical) |
| Mold | Wafer compression mold | Panel compression mold |
| Debond | Laser or mechanical (wafer) | Laser (panel-scale) |
| Sputtering (seed) | Wafer PVD | Panel PVD (inline) |

---

## 3. Panel Size Standards and Economics

### 3.1 Current Panel Sizes

The FOPLP industry has NOT converged on a single standard. Multiple sizes compete:

| Panel Size | Area vs 300mm Wafer | Key Adopters | Status |
|---|---|---|---|
| **300x300 mm** | ~1.3x | TSMC (initial), ASE | Pilot/production |
| **415x510 mm** | ~2.5x | Samsung (R&D), shift from 600x600 | R&D |
| **500x400 mm** | ~2.8x | Samsung SEMCO (ePLP mass production) | Mass production |
| **510x515 mm** | ~3.0x | Powertech (PTI), SPIL | Mass production |
| **600x600 mm** | ~5.0x | ASE (planned), Samsung (original), Intel | Pilot/R&D |
| **620x750 mm** | ~6.0x | Innolux (repurposed Gen 3.5 LCD) | Early production |
| **650x650 mm** | ~6.5x | Amkor (HPLT research) | R&D |
| **700x700 mm** | ~7.5x | Manz AG (demonstration) | Demo |

### 3.2 Cost Analysis (IMAPS 2024)

| Metric | 300mm Wafer | 510x515mm Panel | 600x600mm Panel |
|---|---|---|---|
| Relative packages/panel | 1.0x | 3.0x | 5.0x |
| Cost savings vs wafer | baseline | ~42% | ~50% |
| Yield crossover point | 99% | ~95% | ~94% |
| RDL cost premium vs baseline | baseline | +79% | +119% |

**Key insight:** Cost reduction does NOT scale linearly with area. RDL steps benefit most, while ball attach and die placement see less benefit. With expensive dies ($10K+ wafers), even a 1-2% yield drop can erase cost benefits.

### 3.3 The "Small Panel" vs. "Large Panel" Debate

**Small panel approach (300-310mm):**
- Lower warpage risk
- Better equipment availability
- Can use modified wafer fab tools
- Lower CapEx per line
- Slower path to cost reduction

**Large panel approach (510-600mm+):**
- Maximum area utilization
- Best cost reduction potential
- More challenging warpage/die shift
- Requires custom equipment
- Higher CapEx per line

TSMC chose 310x310mm as a "training ground" before scaling up; Samsung considered 600x600 but shifted to 415x510mm.

---

## 4. Samsung's FOPLP/ePLP

### 4.1 Technology: ePLP (Embedded Panel Level Packaging)

Samsung Electro-Mechanics (SEMCO) developed ePLP, the industry's first commercial FOPLP platform. The technology embeds dies into an organic laminate matrix using a PCB core with laser-cut cavities.

**Key specifications:**
- Panel size: 500x400mm (production), 415x510mm (R&D)
- RDL layers: 4 layers in Exynos 9110
- RDL L/S: 10/10 um in production; 7/8 um for Galaxy Watch; 2/2 um demonstrated in R&D
- Carrier: organic (0.6mm, CTE 8ppm/C) or glass (1.1mm, CTE 8ppm/C)
- Via size: 6um (2-layer interconnect)
- Sputtering tool: Evatec CLUSTERLINE 600 (panel-level, up to 650mm)

### 4.2 Commercial Products

| Product | Year | Node | Package | Device |
|---|---|---|---|---|
| Exynos 9110 | 2018 | 10nm | ePLP SiP-PoP (APE+PMIC+DRAM) | Galaxy Watch |
| Exynos W920 | 2021 | 5nm | FOPLP SiP-PoP | Galaxy Watch4/5 |
| Exynos W930 | 2023 | 5nm | FOPLP SiP-PoP | Galaxy Watch6 |
| Exynos W1000 | 2024 | 3nm GAA | FOPLP SiP-PoP (PMIC in-package) | Galaxy Watch7/Ultra |
| Google Tensor G4 | 2024 | 4nm | FOPLP (partial) | Pixel 9 series |

### 4.3 Samsung FOPLP Roadmap (2025-2027)

| Phase | Timeline | Detail |
|---|---|---|
| Plastic-based FOPLP (PMIC, mobile AP) | Already in production | Current commercial baseline |
| Glass substrate prototype | Target: 2025 | Samsung Electro-Mechanics pilot line |
| Panel size shift | March 2026 | Changed from 600x600mm to 415x510mm for better warpage control |
| Glass substrate commercial mass production | Target: 2026-2027 | Competing with Intel's glass substrate timeline |
| Direct investment consideration | Ongoing | Samsung Electronics may invest directly (separate from 23.7% Semco stake) |

### 4.4 Competitive Position vs. TSMC

| Strength | Detail |
|---|---|
| **First mover** in panel-level packaging (2018 commercial product) | SEMCO shipped Exynos 9110 in 2018 before TSMC's InFO |
| **3nm GAA + FOPLP** integration | Exynos W1000 demonstrates leading-node + panel packaging |
| **Glass substrate R&D leadership** | Strong data at ECTC 2018 on 2/2 um L/S on glass |
| **Vertical integration** | Can leverage Samsung's display and component expertise |

| Weakness | Detail |
|---|---|
| **Customer concentration** | Primarily Samsung own products (Exynos) |
| **Capacity scale** | Far smaller than TSMC CoWoS/InFO |
| **Wearable focus** | ePLP optimized for small packages, not huge AI chips |
| **Glass substrate yield** | Prototype stage; mass production still unproven |

### 4.5 Samsung's Glass Substrate Strategy

- SEMCO (Samsung Electro-Mechanics) leads glass substrate development
- Has built a pilot production line for glass core substrates
- Samsung Electronics considers direct investment (separate from SEMCO stake)
- Glass substrates address plastic substrate warpage issues
- TGV (Through Glass Via) technology still faces yield challenges

---

## 5. ASE/SPIL FOPLP

### 5.1 ASE Overview

ASE Technology Holding is the world's largest OSAT provider (35%+ market share). After merging with SPIL (Siliconware Precision Industries) in 2016, ASE/SPIL operates as a holding company with both entities maintaining legal independence.

### 5.2 FOPLP Timeline and Investments

| Date | Milestone |
|---|---|
| Oct 2024 | SPIL subsidiary announced ~NT$8B ($250M) equipment purchase for advanced packaging |
| Jan 2025 | SPIL inaugurated new advanced packaging facility at Tanzi Science Park |
| Q2 2025 | Panel-level packaging equipment expected in place |
| 2025-2026 | Three additional facilities to expand production capacity |
| 2025 (target) | 300x300mm production line; 600x600mm trial production |

### 5.3 VIPack Platform (ASE Core Fan-Out Offerings)

ASE's VIPack platform provides vertically integrated advanced packaging:

| Technology | Full Name | Description |
|---|---|---|
| **FOPoP** | Fan-Out Package-on-Package | High-density RDL packages for vertical memory-logic stacking |
| **FOCoS** | Fan-Out Chip-on-Substrate | Cost-effective fan-out RDL chiplet integration (2/2um to 10/10um L/S) |
| **FOCoS-Bridge** | FOCoS with Embedded Bridge | Silicon bridges for high-density routing between logic and memory |
| **FOSiP** | Fan-Out System-in-Package | System-level integration including RF/analog/passives |
| **2.5D/3D IC** | 2.5D/3D IC Integration | TSV-based high-performance heterogeneous integration |

### 5.4 FOCoS-Bridge Breakthrough (2023)

ASE qualified a large 70x78mm package incorporating:
- 2 ASICs
- 8 HBM devices
- Connected through 8 silicon bridges
- Size: nearly 2x silicon reticle limit

### 5.5 Competitive Position

- **Advantage:** Largest OSAT with broad customer base; can serve as "second source" to TSMC for AI chips
- **Approach:** Dual-track -- 300x300mm for near-term production, 600x600mm for long-term cost reduction
- **Investment:** Heavy CapEx commitment (~$250M+) indicates serious FOPLP push
- **Chiplet focus:** FOCoS-Bridge directly targets AI/HPC chiplet integration competitive with CoWoS-L

### 5.6 ASE's Panel Size Strategy

ASE is pursuing two panel sizes in parallel:
- **310x310mm panels** -- for near-term production, leveraging PCB-type equipment
- **600x600mm panels** -- for long-term, larger-scale cost reduction
- The company notes 310mm lines offer 1.78x efficiency over wafers for large interposers (>3x reticle)

---

## 6. Amkor Panel-Level Packaging

### 6.1 Hybrid Panel Level Technology (HPLT)

Amkor is developing **Hybrid PLT**, a hybrid approach combining panel-level RDL processing with sub-panel die assembly.

**Panel specifications (per Eoin O'Toole, Amkor Portugal R&D Director):**

| Parameter | Specification |
|---|---|
| Panel size | 650x650mm glass |
| Equivalent capacity | 4x 300mm wafers, 9x 200mm wafers, or 16x 150mm wafers |
| Package families supported | WLCSP, WLFO (die-first), RDL-first (die-last), SiP |
| RDL layers | 6-layer test vehicle demonstrated |
| Process | Temporary bond of sub-panels/wafers to glass, build RDL, flip-chip attach |
| Molding | Mold underfill (MUF) or capillary underfill (CUF) + overmold |
| Debond | Laser debond (current limitation: panel must be diced first) |

### 6.2 HPLT Process Flow

1. Substrates (wafers or sub-panels) temporarily bonded to large glass panel using adhesive
2. RDL layers built directly on glass: starts with UBM from top RDL layer down to bottom
3. Interlayer dielectrics applied between each RDL layer
4. Final UBM layer enables flip-chip die attachment (for RDL-first applications, process is inverted)
5. Flip-chip assembly, then MUF or CUF + molding
6. Glass panel debonded

### 6.3 HPLT Cost Strategy

HPLT targets cost reduction on the most expensive element -- RDLs themselves:
- Steps benefiting from massively parallel processing: coating, developing, exposure, curing, PVD, ECD, stripping, etching
- All performed at panel level for economy

### 6.4 Amkor's Market Position

| Aspect | Detail |
|---|---|
| **Panel size** | 650x650mm (largest among OSATs in research) |
| **CapEx note** | "Initial investment may exceed $100-200M" (per Doug Scott, Amkor SVP) |
| **Target markets** | Moving from cost-sensitive (consumer/IoT/automotive PMIC) to AI/HPC/5G |
| **Reliability** | 6-layer RDL die-last test vehicle: "no fails observed after stress tests" |
| **Competitors** | ASE, Samsung SEMCO, TSMC, Powertech (PTI), NEPES |
| **Key challenge** | Panel-level CapEx and filling panel line capacity |
| **Known constraint** | Flip-chip and mold equipment requires subdividing glass panel first (prevents glass reuse) |

### 6.5 Timeline

- **2024:** HPLT research published; advanced node FOPLP still in early stages
- **2025-2026:** IDC predicts Amkor will participate in advanced packaging supply chain, absorbing CoWoS overflow
- **2026-2027:** TrendForce predicts FOPLP adoption at advanced nodes accelerates as FOWLP becomes uneconomical for large AI chips
- **STMicro (France):** 700x700mm PLP pilot line expected 2026

---

## 7. JCET Fan-Out / Panel-Level Packaging

### 7.1 Overview

JCET Group (Jiangsu Changjiang Electronics Technology) is China's largest OSAT and a global top-5 player. JCET is actively developing fan-out packaging through its subsidiaries, particularly SJ Semiconductor (Jiangyin) Corporation.

### 7.2 Key Technology Platforms

| Platform | Description |
|---|---|
| **eWLCSP** | Encapsulated Wafer Level Chip Scale Package -- uses reconstitution and wafer-level molding, independent of incoming wafer diameter |
| **eWLB** | Embedded Wafer Level BGA -- mass production verified up to 12x12mm packages |
| **XDFOI** | High-density multi-dimensional fan-out chiplet solution covering 2D, 2.5D, and 3D integration -- in stable mass production |
| **FlexLine** | Manufacturing approach enabling cost-effective panel-scale processing independent of incoming wafer size |

### 7.3 Relevant Patents

1. **Fan-out System-Level Packaging (US 2024/0088000 A1)** -- SJ Semiconductor (2023): integrates multiple functional chips, bridge for high-density I/O, cooling cover; supports processors + memory + optoelectronics + MEMS in single package

2. **Fan-out with Double-Layer Wiring (US 2024/0047326 A1)** -- SJ Semiconductor: reduces minimum line width, increases line density; separate preparation of substrate unit and secondary fan-out unit reduces cycle time

3. **Warpage Control + Heat Dissipation (US 12,148,681)** -- JCET (2024): incorporates dummy wafers on RDL to suppress warpage and form continuous heat dissipation channel

4. **3D Connected Fan-Out (CN106876363A)** -- JCET: metal pillars for vertical interconnection + wire bonding for chip-to-circuit connections + plastic encapsulation

### 7.4 Automotive and HPC

- Automotive-grade fan-out: 1/2/3L RDL with L/S 8um in mass production
- HPC: one-stop solutions covering compute, memory, power, connectivity
- JCET's FOPLP approach is primarily wafer-derived (panel-level via FlexLine concept rather than dedicated large-panel lines)

### 7.5 JCET Competitive Position

| Strength | Detail |
|---|---|
| **China's #1 OSAT** | Largest advanced packaging capacity in China |
| **Strong patent portfolio** | Active FOWLP/FOPLP IP development |
| **Automotive qualified** | 8um L/S fan-out in mass production |
| **XDFOI platform** | Multi-dimensional chiplet integration competitive with ASE VIPack |

| Weakness | Detail |
|---|---|
| **Less public FOPLP detail** vs. Samsung/ASE/Amkor | JCET's panel-level approach is more incremental (FlexLine) |
| **US/export control risk** | Geopolitical constraints on serving US AI chip customers |
| **Panel size unclear** | Mostly wafer-based; true large-panel FOPLP less visible |

---

## 8. Innolux and Panel-Maker FOPLP

### 8.1 Innolux's FOPLP Entry

Innolux (formerly Chi Mei Optoelectronics / Chimei Innolux), a major Taiwan LCD panel maker, repurposed an older Gen 3.5 LCD fab (620x750mm glass substrates) for FOPLP development. This represents a "display maker pivoting to chips" trend.

**Timeline:**
- **2023-2024:** Development phase (Chip-First process)
- **End 2024 (planned):** Chip-First mass production; delayed to 1H 2025
- **1H 2025:** Mass production confirmed (per TrendForce, March 2025)
- **2026:** RDL-First process expected 1-2 years away
- **2026 (planned):** TGV process mass production
- **2028-2030:** More advanced PLP goals

**Products:** Chip-First FOPLP for RF, PMIC, audio IC, automotive radar at 10/10 to 25/25um L/S

### 8.2 The Panel-Maker FOPLP Trend

Other display manufacturers entering advanced packaging:

| Company | Panel Size | Status |
|---|---|---|
| **Innolux (Taiwan)** | 620x750mm (Gen 3.5 LCD) | Chip-First FOPLP in production |
| **BOE (China)** | TBD | Entered FOPLP 2024; mass production target 2028-2030 |
| **AUO (Taiwan)** | Scaled down | Initially explored, less active now |
| **Tianma (China)** | G2.5 glass | RDL-first FOPLP, partnered with Tongfu Microelectronics (Shanghai Futianfeng Microelectronics, founded June 2022) |

### 8.3 Advantages of Panel-Maker FOPLP

- **Asset reuse:** Repurpose idle LCD fab lines (Gen 3.5-4.5, fully depreciated)
- **Large substrate experience:** Decades of handling large glass panels
- **Process familiarity:** RDL-first approach resembles TFT array processing (photolithography + etching)
- **Low-cost structure:** Display fab cost structures are different from semiconductor fabs

### 8.4 Challenges of Panel-Maker FOPLP

- **Process shift needed:** Copper electroplating (vs. sputtering for TFT); dry/wet etch chemistry differences
- **Cleanliness:** Semiconductor-grade cleanliness is far more stringent than display
- **Fine-line RDL:** Display resolution typically >5um; semiconductor needs 2-10um
- **Customer qualification:** New entrants need lengthy qualification cycles

---

## 9. Equipment Ecosystem

### 9.1 FOPLP Equipment Landscape

| Process Step | Key Equipment Suppliers | Notes |
|---|---|---|
| **Temporary bond/debond** | Contrel (Taiwan), Kyoto Optoelectronics (Taiwan), E&R (Taiwan) | Laser debond; multiple panel sizes |
| **Mold / EMC trimming** | Contrel (Taiwan) | Laser-based edge flash removal; enables glass carrier reuse |
| **RDL Patterning (LDI)** | Manz AG (Germany/Taiwan), Orbotech (Israel), SCREEN (Japan) | Laser direct imaging for maskless exposure |
| **RDL Cu Plating (ECD)** | Manz AG (Germany/Taiwan), ACM Research (US/China) | Vertical/horizontal; jig-less designs |
| **PVD/Sputter (seed layer)** | Evatec (Switzerland), Kyoto Optoelectronics (Taiwan), Applied Materials (US) | Panel-level inline sputtering |
| **Plasma cleaning/descum** | E&R (Taiwan), F.S.E. Technology (Taiwan), Huisheng (Taiwan) | Pre-bonding/pre-molding treatment |
| **Die placement** | ASMPT (Singapore), Besi (Netherlands) | High-accuracy bonders for panel format |
| **Wet process (clean/etch/strip)** | Manz AG, ACM Research, Grand Plastic (Taiwan), Scientek (Taiwan) | Cleaning, developing, etching, stripping |
| **Inspection/AOI** | Contrel (Taiwan), Daliang (Taiwan) | RDL 3D AOI and laser repair |
| **Wafer/panel bevel etching** | ACM Research (Ultra C bev-p) | Edge bevel control for PLP |
| **Flux cleaning** | ACM Research (Ultra C vac-p) | Vacuum flux cleaning for sub-20um bumps |
| **Glass drilling (TGV)** | Contrel (Taiwan), LPKF (Germany) | Picosecond laser + wet etch |

### 9.2 Detailed Supplier Profiles

#### Manz AG (Germany/Taiwan)
- **Headquarters:** Reutlingen, Germany; operations hub in Taiwan (Manz Asia)
- **Specialty:** RDL wet chemistry equipment (ECD, cleaning, etching, stripping)
- **Panel sizes delivered:** 300mm, 510x515mm, 600x600mm, 700x700mm
- **Key technology:** Jig-less vertical electroplating; plating uniformity >90% (up to 92%+)
- **L/S capability:** 15/15um in mass production; 5/5um verified for small-batch
- **Warpage handling:** 5-10mm on 700mm panels
- **Customers:** Innolux, Powertech (PTI), other global semiconductor manufacturers
- **CoPoS push:** Actively promoting CoPoS (panel-level replacement for CoWoS)

#### Contrel Technology (Taiwan)
- **Specialty:** Laser solutions for FOPLP (debonding, cutting, drilling, repair, trimming)
- **Key tools:**
  - Laser debonder (UV, supports 600mm panels, real-time force monitoring)
  - Glass cutting (picosecond + CO2 dual laser)
  - TGV drilling (ultra-short pulse laser + wet etch)
  - EMC laser trimming (dual-side synchronous)
  - RDL 3D AOI + laser repair
- **Partnerships:** F.S.E. Technology (plasma descum, Cu seed sputtering)
- **Alliance:** G2C+ Alliance (with Jufeng, Jihua Precision, others)

#### Kyoto Optoelectronics (Taiwan)
- **Specialty:** Panel-level laser debonder (300x300 to 600x600mm)
- **Also:** Temporary bonder/debonder (8"/12" wafers), PVD sputter, laser annealing (SiC/GaN)

#### E&R Engineering Corp (Taiwan)
- **Specialty:** Comprehensive FOPLP equipment (300x300 to 700x700mm)
- **Tools shipped:** 500+ tools to major OSATs
- **Capabilities:** Laser marking, cutting, plasma cleaning, de-smear, laser debonding, ABF drilling
- **Warpage handling:** Up to 16mm

#### ACM Research (US/China)
- **Specialty:** Wet process equipment for PLP transition
- **PLP tools introduced:**
  - Ultra C bev-p: Panel bevel etching (Cu removal with DSP, 40 panels/hour)
  - Ultra C vac-p: Vacuum flux cleaning for large panel substrates
  - Ultra ECP ap-p: ECD for 515x510mm panels (expandable to 600x600mm), horizontal plating

### 9.3 Equipment Ecosystem Trends

1. **Taiwan dominance:** The FOPLP equipment ecosystem is heavily concentrated in Taiwan, forming a "localized supply chain" -- this mirrors Taiwan's dominant display and semiconductor packaging industries
2. **G2C+ Alliance:** Taiwanese consortium integrating multiple tool makers for turnkey FOPLP lines
3. **ITRI collaboration:** Contrel + Taiwan ITRI cooperating on TGV technology
4. **From PCB to PLP:** Many tools originate from PCB/display equipment, adapted for semiconductor-grade processes
5. **Lack of standardization:** Equipment makers must support multiple panel sizes, increasing development cost

---

## 10. FOPLP vs. TSMC CoPoS

### 10.1 Architectural Comparison

| Dimension | FOPLP (General) | TSMC CoPoS |
|---|---|---|
| **Full name** | Fan-Out Panel Level Packaging | Chip-on-Panel-on-Substrate |
| **Interposer** | None (RDL direct on mold compound) | Glass core + ABF buildup (GCP structure) |
| **I/O density** | Lower (LDI lithography limits) | Higher (fine-line RDL + bridges) |
| **Signal integrity** | Moderate | Superior (interposer-based routing) |
| **Target market** | Mid-range (PMIC, RF, IoT, mobile, auto) | High-end (AI GPU + HBM, HPC) |
| **Primary cost driver** | Panel utilization | RDL + glass core processing |
| **Panel size (initial)** | 300-600mm+ | 310x310mm (scaling to 510x515mm) |
| **Mass production** | 2018 (Samsung), 2025 (Innolux) | Target H2 2028 |
| **Applicable dies** | Single die or simple SiP | Multi-chiplet + multiple HBM stacks |

### 10.2 FOPLP vs CoPoS: Conceptual Relationship

```
CoWoS ─────────────────────► CoPoS
(wafer-based, silicon       (panel-based, glass core
 interposer)                 + ABF, same interposer concept)
     │                              │
     │  "Panelization of CoWoS"     │
     │                              │
     └──────── Both serve AI/HPC ───┘

FOWLP ───────────────────────► FOPLP
(wafer-based fan-out,        (panel-based fan-out,
 no interposer)                no interposer)
     │                              │
     │  "Panelization of FOWLP"     │
     │                              │
     └──── Both serve cost-sensitive ─┘
```

**Core distinction:** FOPLP is fundamentally a **cost-reduction play** for fan-out packaging. CoPoS is a **performance-capability extension** for high-end AI/HPC packaging. They will coexist for different tier applications.

### 10.3 Head-to-Head: Who Wins Where?

| Application | Recommended | Rationale |
|---|---|---|
| Smartphone PMIC | FOPLP | Cost-driven, moderate I/O needs |
| Wearable AP + PMIC | FOPLP | Samsung ePLP proven; good form factor |
| Automotive radar | FOPLP | Mature chip-first FOPLP is qualified |
| GPU + HBM3/HBM4 | CoPoS | Needs fine-pitch interconnects, signal integrity |
| AI accelerator (large) | CoPoS | >70x70mm, multiple chiplets, HBM stacks |
| Mid-range ASIC | FOPLP | SiP-level integration is cost-effective |
| RF front-end | FOPLP | Good RF performance at panel-level RDL |

### 10.4 Major Players Summary

| Company | Technology | Panel Size | Target | Status |
|---|---|---|---|---|
| **TSMC** | CoPoS (FOPLP evolution) | 310x310mm->515x510mm | AI/HPC | Pilot 2026, mass prod 2028 |
| **TSMC** | InFO (wafer FO) | 300mm wafer | Mobile/HPC | Mass production |
| **Samsung/SEMCO** | ePLP (FOPLP) | 500x400mm, 415x510mm | Wearable, mobile, PMIC | Mass production |
| **ASE/SPIL** | VIPack FOCoS/FOPoP | 310x310mm, 600x600mm | AI, HPC, 5G, IoT | Pilot/production |
| **Amkor** | HPLT | 650x650mm | RDL-first, SiP | R&D |
| **Powertech (PTI)** | PiFO | 510x515mm | PMIC (MediaTek) | Mass production |
| **Innolux** | Chip-first FOPLP | 620x750mm | RF, PMIC, audio, auto | Early production |
| **JCET** | XDFOI, FlexLine | Wafer/panel | HPC, auto, mobile | Mass production |

---

## 11. Applications

### 11.1 Current and Near-Term Applications

| Application Segment | Specific Use Cases | Why FOPLP | Key Players |
|---|---|---|---|
| **Wearables** | Smartwatch AP + PMIC SiP (Samsung Galaxy Watch) | Small form factor, thin z-height, cost-sensitive, moderate I/O | Samsung |
| **Smartphone PMIC** | Power management ICs for mid-range phones | Cost reduction vs. QFN; 20-30% lower cost | Powertech (MediaTek), Innolux |
| **Smartphone RF** | RF front-end modules, 5G transceivers | Fan-out wiring for antenna-in-package integration | ASE, SPIL |
| **Audio ICs** | Audio codecs, amplifiers | Low pin count, cost-driven | Innolux, ASE |
| **Automotive radar** | mmWave radar for ADAS | 77% of xEV chip value uses FOPLP/FOWLP type packaging | NXP, Innolux |
| **Automotive PMIC** | EV power management (smart vehicle = 1000-2000 chips) | High current, heat dissipation, cost | STMicro, NXP |
| **IoT/MCU** | Smart home, industrial sensors | Low-cost, moderate performance | ASE, JCET |

### 11.2 Emerging Applications

| Application Segment | Timeline | Why FOPLP | Key Players |
|---|---|---|---|
| **Edge AI** | 2025-2027 | Lower cost than CoWoS for mid-range inference chips | ASE, Powertech |
| **Mid-range ASIC** | 2025-2027 | SiP integration at lower cost than wafer-based | ASE, Amkor |
| **AI accelerator (small)** | 2026-2028 | When die size <~12x12mm, FOPLP is cost-effective | AMD (rumored), Broadcom (rumored) |
| **Power semiconductors** | 2025-2027 | IGBT, MOSFET for EV -- FOPLP's heat dissipation advantage | STMicro, NXP, Infineon |
| **Optical transceivers** | 2026-2028 | SiP integration of electronics + photonics | Research stage |

### 11.3 TechInsights Application Analysis

Per TechInsights (formerly Chipworks), fan-out packaging adoption timeline:

- **2009-2015:** Infineon (FOWLP), Intel (EMIB)
- **2016-2019:** TSMC InFO (Apple A10), Samsung ePLP (Exynos 9110)
- **2020-2024:** Mass market FOWLP + early FOPLP (PMIC, RF, audio)
- **2025-2027:** FOPLP scale-up (AI, HPC, mid-range)
- **2028+:** FOPLP maturity + CoPoS (high-end AI)

---

## 12. Challenges

### 12.1 Technical Challenges

| Challenge | Description | Severity |
|---|---|---|
| **Warpage** | CTE mismatch between EMC, carrier, and dies causes panel bowing; worsens with size | Critical |
| **Die shift** | Mold flow and curing deformation move placed dies; requires compensation or adaptive lithography | Critical |
| **RDL resolution** | LDI panels cannot match wafer stepper for <5um L/S at large scale | Major |
| **Thickness uniformity** | TTV (total thickness variation) hard to control across large panels during grinding | Major |
| **Material compatibility** | Dielectric materials must cure <250C, be compatible with EMC, and support fine-line RDL | Major |
| **Cleanliness** | Sub-20um bump pitches require stringent particle/flux residue control | Moderate |
| **Edge bevel** | Raised edges cause lithography/deposition/bonding issues | Moderate |
| **Carrier handling** | Large, thin glass carriers are fragile; vacuum chucks and automation need custom solutions | Moderate |

### 12.2 Equipment/Manufacturing Challenges

| Challenge | Description |
|---|---|
| **Lack of standards** | Multiple panel sizes (300mm, 415x510mm, 510x515mm, 600x600mm, 650x650mm, etc.) prevent equipment standardization |
| **CapEx risk** | >$100-200M initial investment per line; requires high utilization for ROI |
| **Low-volume economics** | FOPLP benefits from high volume; small batches may be more expensive than FOWLP |
| **Cleanroom grade** | Panel fabs need semiconductor-grade cleanliness (not display/PCB level) |
| **Yield sensitivity** | With expensive dies, even 1-2% yield loss can eliminate cost advantage |

### 12.3 Technical Challenges of TGV (Through Glass Via)

For glass substrate FOPLP, TGV presents specific challenges:

| Challenge | Detail |
|---|---|
| **Etching profile control** | Glass's amorphous structure makes etching difficult; non-ideal profiles (concave) complicate coating |
| **Laser drilling quality** | Thermal stress, roughness, microcracks; LIDE technique helps but needs precision control |
| **Seed layer deposition** | Concave shapes cause discontinuous ALD/PVD deposition |
| **Cu filling voids** | High risk of void formation; compromises electrical and mechanical integrity |
| **CTE mismatch** | Cu (~17 ppm/C) vs glass (~3-8 ppm/C) creates thermal stress and delamination risk |
| **CD variation** | TGVs typically larger diameter than TSVs; complicates high-density RDL design |

---

## 13. Market Forecast

### 13.1 FOPLP/PLP Market Size

| Source | Metric | 2024 | 2030 | CAGR |
|---|---|---|---|---|
| Yole Group | Total PLP market | ~$160M | ~$650-667M | ~27% |
| QYResearch | Large-size FOPLP | ~$72M | ~$516M (by 2031) | ~32.5% |
| Yole Group | Advanced packaging (total) | ~$46B | ~$80B | ~9-10% |

### 13.2 Market Context

- PLP (including FOPLP) is still a **tiny fraction** (<0.5%) of total advanced packaging market
- Growth rate (27% CAGR) is much faster than advanced packaging average (9-10%)
- FOPLP's absolute market size remains in the **hundreds of millions** through 2030
- Major inflection expected ~2027-2028 as AI chip packaging demand strains wafer-level capacity
- The real value is in **enabling cost-effective production of large packages**, not in market size per se

### 13.3 Key Drivers

1. **AI chip demand:** CoWoS capacity constraints drive interest in panel-level alternatives
2. **Mobile cost pressure:** PMIC consolidation and cost reduction needs
3. **Automotive electrification:** EV requires large numbers of power management packages
4. **Panel fab repurposing:** Idle LCD lines can be converted to FOPLP at low cost
5. **Beyond 2027:** FOWLP becomes uneconomical for large AI chips (>12x12mm dies)

### 13.4 Key Inhibitors

1. **Standardization delays:** No consensus on panel size slows equipment development
2. **Glass substrate yield:** TGV and glass handling still maturing
3. **Warpage at scale:** Larger panels (600mm+) remain difficult to control
4. **Existing CoWoS investment:** TSMC/OSATs have billions invested in wafer-level infrastructure

---

## 14. References and Sources

### 14.1 Key Articles and Reports

1. **SemiEngineering (Nov 2024).** "FOPLP Gains Traction in Advanced Semiconductor Packaging."
   - URL: https://semiengineering.com/foplp-gains-traction-in-advanced-semiconductor-packaging/

2. **SemiEngineering (ASE perspective).** "The Opportunities And Challenges of FOPLP Technology."
   - URL: https://semiengineering.com/the-opportunities-and-challenges-of-foplp-technology/

3. **3DInCites (May 2025).** "IFTLE 627: Amkor Studying Hybrid Panel Level Technology."
   - URL: https://www.3dincites.com/2025/05/iftle-627-amkor-studying-hybrid-panel-level-technology/

4. **Semiconductor Digest (July 2018).** "IFTLE 389 Samsung 2um L/S Panel Level Packaging Technology Revealed at ECTC."
   - URL: https://sst.semiconductor-digest.com/insights-from-leading-edge/2018/07/iftle-389-samsung-2m-l-s-panel-level-packaging-technology-revealed-at-ectc/

5. **Chip Scale Review (May/June 2025).** FOPLP issue (PDF in downloads).
   - URL: https://chipscalereview.com/wp-content/uploads/2025/06/Chip-Scale-Review_May-June_2025-digital.pdf

6. **TrendForce (June 2026).** "AI chip drives packaging changes: from FOPLP 2026 forum."
   - URL: https://www.trendforce.cn/industry-news/semiconductors/20260601-5119.html

7. **TrendForce (Dec 2024).** "Innolux Delays FOPLP Mass Production to First Half of 2025."
   - URL: https://www.trendforce.com/news/2024/12/05/news-innolux-delays-foplp-mass-production-to-first-half-of-2025/

8. **ACM Research.** "AI Spurring Growth of Panel-Level Packaging."
   - URL: https://www.acmr.com/ai-spurring-growth-of-panel-level-packaging/

9. **TechPowerUp (2026).** "TSMC Prepares CoPoS: Next-Gen 310x310mm Packages."
   - URL: https://www.techpowerup.com/337960/tsmc-prepares-copos-next-gen-310-x-310-mm-packages

10. **EET China.** "From CoWoS to CoPoS: TSMC's Panel-Level Package Strategy."
    - URL: https://www.eet-china.com/mp/a487507.html

11. **IT Home.** "Samsung FOPLP Panel Size Shift to 415x510mm."
    - URL: https://www.ithome.com/0/925/733.htm

12. **IT Home.** "TSMC FOPLP Initially Chooses Smaller Substrate, Miniline by 2026."
    - URL: https://it.ithome.com/archiver/819/078.htm

13. **Manz AG.** "Manz RDL Key Equipment for PLP." (Digitimes Taiwan)
    - URL: https://gb-www.digitimes.com.tw/tech/dt/n/shwnws.asp?cnlid=16&cat=20&id=0000701110

14. **ICSmart.** "TSMC CoPoS Enters Trial Verification, Mass Production at Chiayi in Late 2028."
    - URL: https://www.icsmart.cn/105992/

### 14.2 Company Sources

15. **ASE Global.** "VIPack Platform" and "Advanced Packaging for AI."
    - URL: https://ase.aseglobal.com/VIPack/
    - URL: https://ase.aseglobal.com/blog/technology/advanced-packaging-for-ai-chiplet-and-cpo/

16. **JCET Group.** "Packaging Solutions" and "Automotive."
    - URL: https://www.jcetglobal.com/en/site/packaging-solutions
    - URL: https://www.jcetglobal.com/en/site/automotive

17. **Manz AG.** "Markets - FOPLP."
    - URL: https://www.manz.com.tw/en/market/

### 14.3 Industry Reports (referenced but not freely available)

18. **Yole Group (2025).** "Panel-Level Packaging 2025." (PLP CAGR >27%)

19. **Yole Group (2025).** "Status of the Advanced IC Substrates Industry 2025."

20. **IDC (2025).** "Worldwide Semiconductor Advanced Packaging Market Forecast, 2025-2029."

### 14.4 Chinese-Language Sources

21. **SISC Magazine.** "FOPLP Technology Background and Process Analysis."
    - URL: https://siscmag.com/news/show-8807.html

22. **IEEE Spectrum China.** "FOPLP Popularity; Challenges Still to Overcome."
    - URL: https://www.eet-china.com/mp/a365282.html

---

> **End of notes.**
