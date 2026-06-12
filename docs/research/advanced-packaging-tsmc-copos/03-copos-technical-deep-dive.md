# CoPoS (Chip-on-Panel-on-Substrate): Technical Deep Dive

> **Research compiled:** 2026-06-12
> **Scope:** TSMC next-generation advanced packaging technology, covering architecture, materials, process technology, supply chain, and competitive landscape.

---

## Table of Contents

1. [CoPoS Architecture Overview](#1-copos-architecture-overview)
2. [Glass Core Substrate Technology](#2-glass-core-substrate-technology)
3. [TGV (Through Glass Via) Technology](#3-tgv-through-glass-via-technology)
4. [ABF-GCP (Ajinomoto Build-up Film - Glass Core Package)](#4-abf-gcp-ajinomoto-build-up-film---glass-core-package)
5. [RDL (Redistribution Layer) Architecture](#5-rdl-redistribution-layer-architecture)
6. [Glass Carrier Technology](#6-glass-carrier-technology)
7. [Reticle Size Scaling and Packaging Economics](#7-reticle-size-scaling-and-packaging-economics)
8. [Panel-Level Packaging](#8-panel-level-packaging)
9. [Nvidia Feynman Architecture and CoPoS](#9-nvidia-feynman-architecture-and-copos)
10. [Industry Competitive Landscape](#10-industry-competitive-landscape)
11. [References and Sources](#11-references-and-sources)

---

## 1. CoPoS Architecture Overview

### 1.1 Definition

CoPoS (Chip-on-Panel-on-Substrate) is TSMC's next-generation advanced packaging technology that evolves from the incumbent CoWoS (Chip-on-Wafer-on-Substrate) platform. The fundamental innovation is the transition from circular 300 mm silicon wafers to rectangular glass panels as the substrate core, enabling significantly larger package sizes with improved area utilization and manufacturing economics.

### 1.2 Architecture Stack

The CoPoS package stack consists of three primary structural layers:

```
  +-------------------------------------------+
  |   Chiplets (GPU / HBM / I/O Dies)          |
  |   [attached via micro-bumps]               |
  +-------------------------------------------+
  |   ABF Build-up Layer (ABF-GCP)  [top]      |
  |   - Fine-line Cu routing (2-5 um L/S)      |
  |   - Dielectric layers                       |
  +-------------------------------------------+
  |   Glass Core Layer                          |
  |   - Through-Glass Vias (TGVs)               |
  |   - Cu-filled vertical interconnects        |
  +-------------------------------------------+
  |   ABF Build-up Layer (ABF-GCP)  [bottom]    |
  |   - RDL and ball-attach pads                |
  +-------------------------------------------+
  |   IC Substrate (PCB/laminate)               |
  +-------------------------------------------+
  |   BGA Solder Balls                          |
  +-------------------------------------------+
```

**Key architectural points (per Ming-Chi Kuo analyst report, June 2026):**

1. **Glass is NOT an interposer.** The interconnect function is partitioned between chip-side RDL, glass-core TGV/Cu interconnects, and ABF buildup layers. The glass core serves as a mechanically rigid, CTE-matched platform rather than a signal-routing interposer.

2. **Glass does NOT replace ABF.** Glass and ABF coexist in a sandwich structure. ABF layers encapsulate the glass core on both top and bottom surfaces (ABF-GCP architecture).

3. **Chips are NOT placed directly on glass.** Die are attached to the ABF buildup layer surface atop the glass core.

### 1.3 CoPoS vs. CoWoS: Side-by-Side Comparison

| Parameter | CoWoS (Current) | CoPoS (Next-Gen) |
|---|---|---|
| **Full name** | Chip-on-Wafer-on-Substrate | Chip-on-Panel-on-Substrate |
| **Core material** | Silicon interposer (CoWoS-S) or LSI bridge + organic RDL (CoWoS-L) | Glass core + ABF buildup (ABF-GCP) |
| **Shape** | Circular 300 mm wafer | Rectangular panel |
| **Initial panel size** | N/A (wafer-based) | 310 x 310 mm (pilot), 510 x 515 mm (HVM) |
| **Future panel size** | N/A | 750 x 620 mm |
| **Area utilization** | ~65% (wafer edge scrap) | >95% (rectangular) |
| **Via technology** | TSV (Through-Silicon Via) | TGV (Through-Glass Via) |
| **Max via aspect ratio** | ~10:1 (TSV) | ~50:1 (TGV) |
| **RDL L/S** | 1.5-2 um (CoWoS-L) | 2-5 um (ABF buildup) |
| **CTE (core)** | ~2.6 ppm/degC (Si) | ~3-9 ppm/degC (tunable glass) |
| **Dielectric loss** | Moderate (Si is semiconducting) | Very low (glass is insulating) |
| **Target package size** | up to 5.5x reticle (~4700 mm^2) | 9.5x reticle (~7900 mm^2) and beyond |
| **Mass production** | Currently active | Target: H2 2028 |
| **Relative cost** | Highest (complex Si interposer) | Medium (15-25% reduction vs. CoWoS-L) |

### 1.4 Mass Production Timeline

| Milestone | Timeline | Details |
|---|---|---|
| Pilot line equipment delivery | Q1 2026 | Initial tooling at TSMC subsidiaries |
| Pilot line build | Q2 2026 | TSMC's Chiayi AP7 (Taiwan) facility |
| Process refinement and partner validation | 2027 | Yield improvement, supply chain qualification |
| Mass production (HVM) | H2 2028 | Initial 310 x 310 mm panels |
| Panel size upgrade | ~2029+ | Transition to 510 x 515 mm |
| Next-gen panel | ~2030+ | 750 x 620 mm scale-up |

A single CoPoS production line requires approximately NT$10-15 billion in equipment investment. With 5-8 planned lines at the Chiayi site, total capital expenditure is estimated at NT$80-120 billion.

---

## 2. Glass Core Substrate Technology

### 2.1 Material Selection Rationale

Glass core substrates represent the most significant material change in advanced packaging since the introduction of silicon interposers. The selection of glass over incumbent organic (ABF/FR-4) and silicon materials is driven by fundamental physical constraints:

**CTE Matching (Critical for Large Packages)**

| Material | CTE (ppm/degC) | Young's Modulus (GPa) | Thermal Conductivity (W/m*K) |
|---|---|---|---|
| Silicon | 2.6-3.0 | 130-185 | 148 |
| Glass (borosilicate) | 3.2-5.0 | 50-90 | 1-2 |
| Glass (alumino-borosilicate) | 3.2-7.2 | 60-80 | 1.0-1.5 |
| Organic (ABF) | 14-70 | 0.1-2.0 | 0.3-1.0 |
| Copper | 16.5 | 110-128 | 401 |

**Key observation:** Glass CTE (~3-5 ppm/degC) closely matches silicon (~2.6-3.0 ppm/degC), whereas organic substrates exhibit 14-70 ppm/degC — a 5-25x mismatch. As AI chip packages exceed 100 x 100 mm and dissipate >1000 W, the CTE mismatch with organic cores causes severe warpage ("warpage wall"), thermomechanical stress, and solder joint reliability failures. Glass eliminates this fundamental scaling constraint.

### 2.2 Glass Substrate Advantages

**A. Dimensional Stability:**
- Glass provides atomic-level surface flatness (Ra < 0.5 nm), enabling fine-line lithography at sub-2 um line/space.
- Superior stiffness-to-weight ratio vs. organic cores reduces panel warpage during thermal cycling.
- Fusion-drawn glass achieves ultra-low total thickness variation (TTV), critical for uniform TGV formation.

**B. Electrical Performance:**
- Glass is an electrical insulator (vs. semiconducting silicon), eliminating substrate-induced signal loss and crosstalk.
- Dielectric constant (Dk): ~4-6 (glass) vs. ~3-4 (ABF) vs. ~12 (silicon).
- Loss tangent (Df): ~0.003-0.005 (glass) vs. ~0.01-0.02 (ABF) vs. ~0.1 (silicon at RF).
- Signal loss reduction of 40-67% at high frequencies compared to organic ABF.
- Enables >100 GHz/mmWave/6G applications.

**C. Thermal Management:**
- CTE tunability enables optimized design for specific chip and substrate combinations.
- Though thermal conductivity is low (1-2 W/m*K), the thin glass core (< 100 um in final form) minimizes thermal resistance.
- Optical transparency enables co-packaged optics (CPO) integration — waveguides can be embedded directly in glass via ion exchange (IOX) with losses as low as 0.05-0.1 dB/cm.

**D. Panel-Scale Manufacturing:**
- Glass panels leverage existing LCD/display manufacturing infrastructure for large-area processing (up to Gen 6: 1500 x 1850 mm).
- Corning and SCHOTT supply custom glass compositions engineered for semiconductor packaging.
- Rectangular formats eliminate the ~35% area waste inherent in circular wafer processing.

### 2.3 Current Limitations

| Challenge | Impact | Mitigation |
|---|---|---|
| **Brittleness** | Crack propagation, edge chipping during handling | Laser beveling, edge reinforcement, optimized handling |
| **Via formation difficulty** | Glass is hard, brittle; conventional drilling is impractical | Laser-induced selective etching (LISE), ECDM |
| **Adhesion** | Poor metal-to-glass adhesion; Cu delamination | Adhesion layers (Ti, Ni-P, Ru), silanization |
| **Cost** | Currently 2-3x more expensive than ABF substrates | Volume scale-up; panel-level economics |
| **Yield** | Current yields ~75-85% vs. 95%+ for organic | Process maturation expected through 2027-2028 |
| **Supply chain** | Limited qualified glass and processing equipment suppliers | Rapid ecosystem buildup (Corning, SCHOTT, AGC, Absolics) |

### 2.4 Glass Sizes in CoPoS

Per Ming-Chi Kuo's analysis, two distinct glass components are used:

| Component | Material | Dimensions | Role |
|---|---|---|---|
| **Temporary glass carrier** | Borosilicate / alumino-borosilicate | 310 x 310 mm | Rigid support during RDL/ABF buildup; removed after processing |
| **Glass panel (test)** | Packaging-grade glass | 250 x 250 mm | Process development and qualification |
| **Glass panel (HVM)** | Packaging-grade glass | 510 x 515 mm | High-volume manufacturing; diced into individual glass core substrates |
| **Glass core substrate** | Packaging-grade glass | Package-dependent (e.g., ~100 x 150 mm for large AI packages) | Final product: embedded in ABF-GCP sandwich |

---

## 3. TGV (Through Glass Via) Technology

### 3.1 Overview

Through Glass Vias (TGVs) are the vertical interconnect structures that provide electrical connectivity through the glass core layer. They are functionally analogous to TSVs (Through Silicon Vias) in CoWoS-S but present fundamentally different processing challenges due to glass's amorphous structure, brittleness, and chemical inertness.

The TGV substrate market was valued at approximately $60 million in 2022, projected to reach $480.5 million by 2029 (34.2% CAGR).

### 3.2 TGV Formation Methods

#### 3.2.1 Laser-Induced Selective Etching (LISE)

The dominant approach for high-quality TGV formation. The process:

1. **Laser irradiation:** Ultrashort-pulse laser (femtosecond to picosecond, typically 1030 nm, < 10 ps pulse width) is focused on the glass surface.
2. **Nanocraters formation:** The laser creates nano-diffraction grating structures (nanocraters) along the beam path through nonlinear absorption.
3. **Selective wet etching:** The laser-modified regions etch at 10-100x the rate of unmodified glass in dilute HF (3-10%) or KOH at 85 degC.

**Process parameters and results:**
- Single-pulse ps laser at 1030 nm + 10% KOH at 85 degC for 5 hours: TGV formed on fused silica. Pulse intervals of 1-2 us cause thermal accumulation preventing selective etching; 3-5000 us intervals produce regular nano-diffraction gratings; beyond 5000 us, structures are unconnected.
- Dual-pulse approach (213 ps + 10 ns intervals): Increases electron kinetic energy, producing deepest TGVs at 22.39 um with 156 nm gratings.
- HF concentration tuning (10% to 3%): Increases TGV sidewall angle from 80.65 deg to 84.18 deg, effectively improving the via profile for subsequent metallization.
- Achievable TGV: 10-50 um diameter, aspect ratio up to 50:1.

#### 3.2.2 Electrochemical Discharge Machining (ECDM)

High-voltage discharge between aligned electrodes locally reduces glass viscosity, extracting material via joule heating:

- Multi-tip electrodes (2x5 and 2x2 arrays): Top/bottom diameters 580/286 um. Achieved spiral and toroidal 3D inductors with 338 and 168 mOhm resistance.
- Electrolyte optimization: Polyacrylamide (NTF) additive in KOH reduces overcut standard deviation from 9.79 um to 3.34 um, reduces heat-affected zone by 64.81%.
- CNT-augmented electrodes: 80% increase in material removal rate, 67% reduction in surface roughness.
- Laser-assisted ECDM: Nd:YV04 laser (1064 nm, 12 ps) followed by ECDM in NaOH. Transforms via profile from V-shape to U-shape.
- Cryogenic electrode cooling (liquid N2 at -185 degC): 58% reduction in tungsten electrode wear, 35% for copper.

#### 3.2.3 Comparison of TGV vs. TSV

| Parameter | TSV | TGV |
|---|---|---|
| **Material** | Crystalline Si | Amorphous glass |
| **Formation** | DRIE (Bosch process) | LISE, ECDM, or mechanical |
| **Max aspect ratio (production)** | ~10:1 | ~50:1 (demonstrated) |
| **Sidewall profile** | Vertical, scalloped | Tapered (5-15 deg) |
| **Min diameter (production)** | ~5-10 um | ~10-50 um |
| **Insulation** | SiO2 (CVD) | Inherently insulating |
| **Substrate loss** | Moderate (Si is lossy at RF) | Very low (glass is dielectric) |
| **Cost (relative)** | High (DRIE tools are expensive) | Lower (wet etch after laser exposure) |

### 3.3 Functional Layer Deposition for TGV Metallization

Three thin film layers are required inside each TGV:

1. **Insulation layer:** Electrical isolation from the glass substrate (typically SiO2 via PECVD, though glass's intrinsic resistivity > 10^14 ohm*cm may suffice for some applications).
2. **Adhesion layer:** Critical for Cu-to-glass bonding. Methods include:
   - **Sputtered Ti/Cr/TiW:** Industry standard but poor step coverage in high-AR vias.
   - **Electroless Ni-P:** Uniform coating of ~200 nm in vias with 10:1 AR; adhesion improves significantly with annealing >350 degC (but oxidation >400 degC increases resistance).
   - **Solution-based metal oxide promoter:** Spin-coated adhesion layer + electroless Cu. Achieved void-free DC plating in HAR-TGVs (345 um length, 25 um diameter).
   - **Direct wet Cu plating** (no adhesion layer): Ultrasonic cleaning + alkali degreasing + UV irradiation; 3 um Cu seed + 15 um Cu coating; 0.35 kN/m adhesion.
   - **ALD Ru thin film:** Enables seed layer formation for AR 10-20 TGVs.
3. **Seed layer:** Conductive base for electroplating (Cu, Ni-P, or Ru).

**Key challenge:** PVD sputtering suffers from poor step coverage in high-AR TGVs. Wet electroless deposition is increasingly preferred for its conformal coating capability.

### 3.4 Copper Electroplating and Void-Free Filling

#### 3.4.1 Additive Chemistry

Cu electroplating for TGV filling uses three additive classes (analogous to TSV damascene):

- **Suppressor (inhibitor):** PEG (polyethylene glycol), PVP (polyvinylpyrrolidone), NBT/NTBC — suppresses deposition at via opening, preventing pinch-off.
- **Accelerator:** SPS (bis(3-sulfopropyl) disulfide) — enhances deposition at via bottom.
- **Leveler:** Janus Green B, PVP (also acts as leveler depending on molecular weight).

**Achievement:** Inhibitor:accelerator:leveler ratio of 50:1:1.25 achieves void-free filling in 2.25 hours at 1 ASD in 150 um deep tapered vias (50 um top / 20 um bottom). Ratio 60:1:1 achieves void-free in 1.5 hours at 1.5 ASD.

**PVP molecular weight effect:** Smaller PVP (10,000 g/mol) forms denser inhibition layer enabling defect-free filling. Larger PVP (360,000 g/mol) creates less dense layers with defects that accommodate accelerators, producing inferior results.

#### 3.4.2 Periodic Pulse Reverse (PPR) Plating

PPR waveforms alternate between forward pulse, reverse pulse, and off-pulse:

- **Forward pulse:** Cathodic deposition of Cu
- **Reverse pulse:** Anodic dissolution of excess Cu (thinner at via opening, thicker at bottom)
- **Off-pulse:** Cu ion diffusion to equilibrate concentration gradients

**Results:** Tapered vias achieve 100% Cu filling at 5.85 mA/cm^2 using PPR. Staged PPR with three current density levels (low for conformal, medium for superconformal, high for complete fill) minimizes defects and reduces processing time.

**Additive-free PPR:** Zhu et al. achieved void-free TSV filling with 0.4 A/dm^2 pulse and -0.8 A/dm^2 reverse in 50 um TSVs using PPR without any organic additives.

#### 3.4.3 Inhibitor Optimization

Proper inhibitor concentration is critical:
- **Too little inhibitor:** Cu deposits too rapidly at the via opening, pinching off and forming a void.
- **Too much inhibitor:** Over-passivation occurs, slowing deposition to impractical rates and compromising quality.
- **Machine learning approach:** Yu et al. (2025) developed FEM simulation coupled with ML to predict void defects under various plating conditions. Optimal concentration identified for specific TGV geometries.

#### 3.4.4 SiO2 Blocking Layer (SBL) for Cu Overburden Reduction

A recent innovation involves depositing a 200-500 nm SiO2 layer via PECVD on the top/bottom surfaces before Cu filling:

- Suppresses Cu overburden on flat surfaces
- Reduces CMP (chemical-mechanical polishing) requirements
- Enables void-free filling with reduced post-plating processing cost

#### 3.4.5 Double-Sided Plating

For substrates with different patterns on each side, double-sided plating using Ti diffusion barrier + Cu seed enables faster filling than sequential single-side approaches.

### 3.5 Thermomechanical Reliability of Cu-filled TGVs

CTE mismatch between Cu (17 ppm/degC) and glass (3-9 ppm/degC) induces stress during thermal cycling:

- **Heating:** Cu expands more than glass, creating radial tensile stress.
- **Cooling:** Cu contracts more, creating circumferential tensile stress at the Cu-glass interface.

Two failure modes:
- **Radial cracks:** During heating — less damaging, tend to self-limit.
- **Circumferential cracks:** During cooling — more damaging, cause interface delamination and electrical failure.

**Mitigation approaches:**
- Polymer-filled TGVs to absorb stress
- Optimized via geometry (tapered profiles reduce stress concentration)
- Annealing schedules to stabilize Cu microstructure

---

## 4. ABF-GCP (Ajinomoto Build-up Film - Glass Core Package)

### 4.1 ABF Material Overview

Ajinomoto Build-up Film (ABF) is an epoxy-based dielectric film developed by Ajinomoto Fine-Techno (Japan). Originally designed for flip-chip ball grid array (FC-BGA) substrates, ABF is the industry-standard buildup dielectric for high-performance CPU/GPU packages.

**Key material properties:**
- Dielectric constant (Dk): 3.4-3.8 (vs. ~4-5 for conventional FR-4/BT)
- Loss tangent (Df): 0.01-0.02 (moderate for mid-range frequencies)
- CTE: 14-30 ppm/degC (below Tg), 70-100 ppm/degC (above Tg)
- Young's modulus: 3-8 GPa
- Glass transition temp (Tg): 160-200 degC
- Minimum L/S (production): ~8-10 um
- Process: Vacuum lamination + photolithography + Cu semi-additive plating

### 4.2 ABF-GCP (Glass Core Package) Architecture

In CoPoS, ABF and glass form a hybrid composite package. The glass core provides mechanical stability and CTE matching, while ABF layers provide fine-line routing capability on both surfaces.

```
  Top ABF buildup layer (ABF-GCP)
    - 2-4 dielectric layers (each ~15-25 um)
    - Cu microvias (laser-drilled, ~30-60 um diameter)
    - Fine-line Cu traces (8-12 um L/S)
    - Chip mounting surface

  Glass Core Layer
    - 400-800 um thickness (initial panel)
    - Thinned to <100-200 um in final product
    - TGVs provide Z-axis connectivity

  Bottom ABF buildup layer (ABF-GCP)
    - 2-4 dielectric layers (mirroring top)
    - BGA pad array for substrate attachment
```

### 4.3 Why Glass + ABF (and Not Glass Alone)

| Requirement | How ABF Contributes | How Glass Contributes |
|---|---|---|
| **Fine-line routing** | Mature 8-12 um L/S capability | Provides flat rigid base for lithography |
| **Dielectric performance** | Proven RF material | Low Df further enables mmWave |
| **Mechanical rigidity** | Limited (compliant) | Provides stiffness for large panels |
| **CTE control** | High CTE, problematic alone | Low CTE dominates composite behavior |
| **Process maturity** | Decades of HVM experience | Novel but leverageable from display industry |
| **Cost** | Moderate (mature supply chain) | Currently 2-3x ABF; expected to decrease |

### 4.4 Stress Analysis in ABF-Glass Sandwich Structures

Research (MRS Advances, 2026) shows that the double-layer ABF sandwich on glass core introduces complex stress distributions:

- **At room temperature:** ABF in compression on glass (ABF shrinks more during cure).
- **At elevated temperature:** CTE mismatch generates interfacial shear stress at ABF-glass boundaries.
- **During thermal cycling:** Cyclic stress accelerates crack initiation at the ABF-glass interface.

**Proposed solutions:**
- Interfacial adhesion promoter layers between ABF and glass
- Distributed stress-relief features in ABF layers
- Optimized cure schedule to minimize residual stress

### 4.5 ABF-GCP vs. Competitor Approaches

| Approach | Core | Buildup | Status |
|---|---|---|---|
| **ABF-GCP (TSMC CoPoS)** | Glass | ABF (top and bottom) | Development (2028 target) |
| **Intel glass substrate** | Glass | Proprietary dielectric | HVM (2026) |
| **Samsung I-CubeE** | Organic panel | ABF + embedded Si bridges | Development |
| **Conventional FC-BGA** | Organic (BT/FR-4) | ABF | Mature |

---

## 5. RDL (Redistribution Layer) Architecture

### 5.1 RDL Role in CoPoS

In traditional CoWoS-S, all chip-to-chip and chip-to-substrate routing passes through the silicon interposer via TSVs and wafer-level RDL. CoPoS partitions this routing:

**CoPoS routing structure:**

| Routing Domain | Technology | Line/Space | Role |
|---|---|---|---|
| **Chip-level RDL** | Wafer-level Cu/dielectric | 1.5-2 um | Fine-pitch die I/O redistribution |
| **ABF buildup (top)** | Semi-additive Cu on ABF | 8-12 um | Die-to-die and die-to-TGV routing |
| **TGV** | Cu-filled through-hole | 10-50 um dia | Z-axis interconnect (core transit) |
| **ABF buildup (bottom)** | Semi-additive Cu on ABF | 8-12 um | TGV-to-substrate routing |
| **IC substrate** | Standard laminate | 20-100 um | Final BGA array |

This partitioned approach eliminates the need for an ultra-high-cost silicon interposer while maintaining adequate routing density.

### 5.2 RDL Technology Evolution

| Technology | L/S | Applications |
|---|---|---|
| PCB | 60-100 um | Low-end, legacy |
| BT resin substrate | ~20 um | Mid-range |
| ABF buildup | ~10-12 um | Current high-end (CPU/GPU) |
| Wafer-based RDL | 1.5-2 um | FOWLP, CoWoS-L |
| Damascene RDL | Sub-1 um | Next-gen, HBM4+ integration |

### 5.3 RDL Integration Approaches

**A. Silicon Carrier RDL (CoWoS-class):**
- RDL built on silicon interposer with TSVs (AR ~10:1)
- Min thickness: ~100 um (silicon)
- L/S: ~1.5 um (state-of-the-art)
- Highest routing density, highest cost

**B. Carrier-Free RDL (FoWLP-class):**
- RDL built on polyimide/polymer layers without silicon carrier
- Via AR ~1:1 (each polyimide layer ~5-7 um, Cu via ~7 um)
- Total thickness: ~50 um or less depending on layer count
- Lower cost, less dense

**C. Bridge Die + Minimal RDL (CoWoS-L, CoPoS-compatible):**
- Ultra-dense interconnects through embedded Si bridge (sub-um L/S)
- System RDL uses 1-2 coarse layers
- Optimal cost-performance for HBM integration

### 5.4 Chip-Side vs. Substrate-Side RDL in CoPoS Context

In CoPoS, chip-side RDL (on the die itself, within the fab) provides the finest pitch redistribution. The ABF-GCP buildup layers perform the substrate-side routing at coarser pitch. This is a deliberate design choice to partition routing complexity and cost.

---

## 6. Glass Carrier Technology

### 6.1 Temporary vs. Permanent Glass

CoPoS uses glass in two distinct roles:

**A. Temporary Glass Carrier:**
- **Purpose:** Provides rigid support during ABF lamination, RDL buildup, and other front-end panel processes.
- **Material:** Borosilicate or alumino-borosilicate glass (Corning, SCHOTT).
- **Size in CoPoS:** 310 x 310 mm.
- **Surface properties:** Ultra-low TTV, pristine surface (defect-free for particle-sensitive processes).
- **Optical transmission:** High UV-to-IR transmission (enables laser debonding).
- **CTE range:** 3.2-10 ppm/K (matched to process requirements).
- **Bonding:** Temporary adhesive layer (laser-debondable or thermally slide-off).
- **Debonding:** Laser lift-off (LLO), xenon flash debonding (Resonac approach), or thermal slide.
- **Final disposition:** Removed and reused (typically 3-10 cycles depending on quality degradation).

**B. Permanent Glass Core Substrate:**
- **Purpose:** Becomes part of the final package as the core structural layer.
- **Material:** Packaging-grade glass (custom composition for TGV processing).
- **Formation:** Cut from processed panels (510 x 515 mm HVM panels).
- **Processing:** TGV formation, Cu filling, ABF lamination on both sides.
- **Final thickness:** ~100-200 um (thinned from initial ~400-800 um).
- **Final disposition:** Integrated into the finished package.

### 6.2 Glass Carrier Process Flow (CoPoS)

```
  1. Glass panel (510 x 515 mm)
     |
     v
  2. TGV formation (LISE + wet etch)
     |
     v
  3. Functional layer deposition (adhesion + seed)
     |
     v
  4. Cu electroplating (void-free TGV fill)
     |
     v
  5. Top-side ABF lamination + Cu buildup
     |
     v
  6. Temporary bonding to glass carrier (310 x 310 mm)
     |
     v
  7. Back-side thinning + bottom ABF lamination
     |
     v
  8. Debond from carrier
     |
     v
  9. Dicing into individual glass core substrates
     |
     v
  10. Chip attach + IC substrate bonding
```

---

## 7. Reticle Size Scaling and Packaging Economics

### 7.1 What Is a Reticle?

In semiconductor lithography, a **reticle** (photomask) is the quartz template that projects the chip pattern onto the wafer. The maximum field size of an EUV scanner (e.g., ASML NXE:3400C/3600D) defines the **reticle limit** — the largest monolithic area that can be patterned in a single exposure.

- **Standard reticle field size:** 26 x 33 mm (= 858 mm^2)
- **Effective reticle area (TSMC):** ~830 mm^2

For chips larger than this, **reticle stitching** is required — multiple exposures aligned to create a single larger pattern. Stitching introduces overlay errors, edge effects, and throughput penalties.

### 7.2 Reticle Scaling in Advanced Packaging

In advanced packaging, "Nx reticle" refers to the **interposer or package size** relative to the standard reticle field:

| Generation | Multiple | Approx. Area | Package L x W | Timeline | Product |
|---|---|---|---|---|---|
| Current CoWoS | 3.3-3.5x | ~2,830 mm^2 | 100 x 28 mm | Today | AMD MI300X, NVIDIA B200 |
| Next-gen CoWoS | 5.5x | ~4,720 mm^2 | 126 x 37 mm | 2026 | NVIDIA Rubin |
| CoPoS (initial) | **9.5x** | **~7,890 mm^2** | 160 x 49 mm | 2028 | NVIDIA Feynman |
| CoPoS (future) | 14x | ~11,620 mm^2 | 195 x 60 mm | ~2029 | Next-gen |
| SoW-X | 40x+ | ~33,200 mm^2+ | 300 x 110 mm+ | ~2029+ | Wafer-scale |

### 7.3 The Economics of 9.5x Reticle Packages

**The "CoWoS Crunch":** As packages grow beyond 5.5x reticle, round wafer processing becomes increasingly inefficient:

- A 12-inch (300 mm) wafer has a usable diameter of ~295 mm.
- For a 50 x 100 mm rectangular package (5.5x reticle), only ~4-6 fit on a 300 mm wafer.
- For a 75 x 105 mm package (9.5x reticle), only ~1-2 fit.

**The CoPoS solution:**
- A 310 x 310 mm panel provides 96,100 mm^2 usable area (vs. ~68,700 mm^2 for 300 mm wafer, ~45,000 mm^2 accounting for edge waste).
- Effective output per panel: approximately 1.5x that of a 300 mm wafer under similar conditions, with better edge utilization.
- Cost reduction estimated at 15-25% vs. CoWoS-L for same package complexity.
- Long-term glass substrate cost reduction could reach 40% vs. silicon interposer approaches.

### 7.4 The "9.5x Reticle" Target Rationale

The 9.5x target is not arbitrary — it represents the package scale at which:

1. **NVIDIA Feynman** class GPU + 12 HBM4 stacks + I/O dies can fit on a single package.
2. **Panel-level economics** become decisively better than wafer-level.
3. **Warpage and CTE mismatch** of organic substrates become untenable (the "Warpage Wall" is reached at ~5.5-6x reticle for organic cores).
4. **TSV resistance and capacitance** in silicon interposers at 9.5x scale create unacceptable signal integrity degradation.

---

## 8. Panel-Level Packaging

### 8.1 The Paradigm Shift: Round to Square

The semiconductor industry has processed chips on circular wafers since the 1960s. Panel-level packaging (PLP) represents the first major departure from this paradigm in high-volume manufacturing:

| Parameter | Wafer-Level | Panel-Level |
|---|---|---|
| **Shape** | Circular | Rectangular |
| **Standard sizes** | 200, 300 mm diameter | 310 x 310, 510 x 515, 600 x 600 mm |
| **Area utilization** | ~65% (edge waste ~35%) | >95% |
| **Process heritage** | Semiconductor (Si fab) | Display (LCD fab) + PCB |
| **Infrastructure** | Mature 50+ years | Emerging (leveraging display) |
| **Best for** | Small to medium dies | Large dies, high I/O count |
| **Key bottleneck** | Wafer diameter scaling | Warpage, yield, standardization |

### 8.2 PLP Market Forecast

- PLP market: ~$160 million (2024) to >$600 million by 2030 (27% CAGR per Yole Group).
- High-density fan-out and ultra-density platforms dominate, driven by AI and HPC.
- By 2030, HD fan-out PLP is expected to capture >50% of the market share.

### 8.3 PLP Advantages for CoPoS

1. **Area utilization:** >95% (vs. ~65% for wafers) — more chips per panel, less waste.
2. **Cost scaling:** 10-20% cost reduction for UHD fan-out packages depending on panel size.
3. **Throughput:** More chips processed in parallel, fewer tool change steps.
4. **Package size:** Removes the 300 mm wafer diameter constraint for large packages.
5. **Chiplet integration:** Enables large-scale heterogeneous integration (logic + memory + I/O + photonics).

### 8.4 PLP Challenges

| Challenge | Description | Status |
|---|---|---|
| **Warpage** | Panels bend under thermal stress | Mitigated by glass core |
| **Yield** | Defect impact larger than wafers | Early yields lower, improving |
| **Equipment** | New CVD/PVD/lithography tools required | Ecosystem building rapidly |
| **Standardization** | No universal panel size standard | 310 x 310 mm emerging as early standard |
| **Glass fragility** | Micro-cracks, edge integrity | Laser beveling, reinforcement |
| **Inspection** | Large panels difficult to inspect | AOI systems under development |

### 8.5 Industry PLP Initiatives

- **ASE Technology:** First automated 310 mm PLP line; production H1 2027; 2/2 um L/S; ~45% of TSMC's back-end packaging by 2026.
- **Samsung:** I-CubeE (Fan-Out PLP) with embedded Si bridges; targeting Broadcom AI accelerators.
- **Intel:** Glass substrates in HVM (2026); 50% less pattern distortion than organic.
- **TSMC CoPoS:** The most aggressive PLP roadmap for ultra-high-end AI.

---

## 9. Nvidia Feynman Architecture and CoPoS

### 9.1 Feynman Architecture Overview

NVIDIA's Feynman architecture (named after physicist Richard Feynman) was detailed at GTC 2026. It represents the first true logic-on-logic 3D stacking in an NVIDIA accelerator and is the lead candidate for CoPoS packaging.

**Key specifications:**

| Parameter | Feynman |
|---|---|
| **Announcement** | GTC 2026 (March 2026) |
| **Mass production target** | 2028 (aligns with CoPoS H2 2028) |
| **Process node** | TSMC A16 (1.6 nm) with backside power delivery (SPR) |
| **3D stacking** | True logic-on-logic using SoIC hybrid bonding |
| **GPU compute** | >50 PFLOPS (single GPU) |
| **AI inference** | ~5x Blackwell |
| **Memory** | Custom HBM (cHBM) — 12 stacks |
| **LPU** | Groq LP40 (3rd gen) for real-time inference |
| **CPU** | Rosa (custom NVIDIA CPU; named after Rosalind Franklin) |
| **Interconnect** | NVLink 8 (up to 1152 GPU configuration) |
| **Networking** | Spectrum 7 204T, CX10, BlueField-5 DPU |
| **Package power** | >2,000 W (estimated) |
| **Packaging (primary)** | TSMC CoPoS (glass core + ABF) |
| **Packaging (contingency)** | Intel EMIB-T (reportedly under evaluation) |

### 9.2 Why Feynman Needs CoPoS

**Dimension analysis:**
- Feynman GPU logic dies stacked vertically (using SoIC) creates a composite die footprint.
- 12x HBM4 stacks (each ~12 x 14 mm) require ~2,000 mm^2 of substrate area.
- LP40 LPU dies add additional footprint.
- Rosa CPU dies add more.
- Total logic/memory area: ~4,000-6,000 mm^2 minimum (conservative estimate).
- With routing and peripheral I/O: ~7,000-8,000 mm^2 total requires ~9.5x reticle.

**The limit:**
- CoWoS at 5.5x reticle (~4,720 mm^2) is **too small**.
- CoPoS at 9.5x reticle (~7,890 mm^2) is **the minimum viable size**.
- This explains why CoPoS targets exactly 9.5x reticle for H2 2028 mass production — it's driven by Feynman's physical requirements.

### 9.3 Feynman Power and Thermal Implications for CoPoS

- Estimated 2,000 W+ package power creates extreme thermal demands.
- Glass core has lower thermal conductivity (1-2 W/m*K) than silicon (148 W/m*K).
- Thermal management must come primarily from:
  - **Direct die cooling** (liquid cold plate on GPU die top surface)
  - **Through-silicon thermal vias** (within the stacked logic dies, not the glass core)
  - **High-conductivity TIM** (thermal interface materials)
  - **Backside cooling** for stacked die (via SoIC's exposed Si backside)
- The glass core's low thermal conductivity is acceptable because the primary thermal path is vertical (die-to-heatsink), not lateral (through the glass).

### 9.4 Feynman as a CoPoS Lead Product

NVIDIA historically leads new TSMC packaging nodes:
- **CoWoS-S:** First adopted by NVIDIA for H100/B200
- **CoWoS-L:** First adopted by NVIDIA for Blackwell-class products
- **CoPoS:** Feynman is the planned lead product

This pattern reflects NVIDIA's higher tolerance for early-life yield issues (they control the full system stack and can design around limitations) and their need for the largest available packages.

---

## 10. Industry Competitive Landscape

### 10.1 TSMC CoPoS Positioning

TSMC projects its advanced packaging advantage to be visible through approximately 2032. This includes:

- **CoPoS as a multi-generational platform:** Expected to evolve through at least 3 generations (310 mm -> 510 mm -> 750 mm panels).
- **Supply chain capture:** 26 shortlisted equipment suppliers (13 Taiwanese, 13 international).
- **Capital investment:** NT$80-120 billion for 5-8 lines at Chiayi AP7.
- **Customer lock-in:** First-mover advantage with NVIDIA, AMD, and Broadcom.

### 10.2 Competitive Packaging Technologies

| Company | Technology | Approach | Status |
|---|---|---|---|
| **Intel** | EMIB-T + Glass substrate | Glass core + embedded bridge + die-to-wafer hybrid bonding | HVM glass substrates in 2026; EMIB-T under evaluation by NVIDIA |
| **Samsung** | I-CubeE, HPB | Fan-out PLP with embedded Si bridges; hybrid bonding | PLP pilot lines; mass production target H2 2026 |
| **ASE** | FOCoS, Panel FO | Chip-last RDL-first FOPLP | First automated 310 mm PLP line (2027) |
| **Amkor** | S-Connect, SWIFT | Various 2.5D/3D + PLP | Expanding Arizona capacity |
| **DNP** | Glass core substrate (GCS) | TGV + ABF buildup | Samples demonstrated |

### 10.3 CoPoS Equipment Supply Chain

Key equipment categories and suppliers:

| Category | Key Suppliers |
|---|---|
| **Glass panels** | Corning, SCHOTT, AGC, Absolics (SKC) |
| **TGV laser drilling** | DISCO, via mechanics, LPKF |
| **PVD/CVD** | Applied Materials, LAM Research |
| **Plating** | ACM Research, EBARA |
| **Lamination** | Manz (panel-level RDL + turnkey lines) |
| **Debubbling** | APT (7734.TW) — ~90% market share in advanced packaging debubbling |
| **Inspection** | Onto Innovation (PACE Center), KLA |
| **Wafer thinning/dicing** | DISCO |

---

## 11. References and Sources

### Academic Papers

1. Seok, B.C. & Jung, J.P. (2024). "Recent Progress of TGV Technology for High Performance Semiconductor Packaging." *Journal of the Korean Welding and Joining Society*, 42(2), 155-164. DOI: 10.5781/JWJ.2024.42.2.2
   - [Download PDF available on request from e-jwj.org]

2. Lai, Y., Pan, K., & Park, S. (2024). "Thermo-mechanical reliability of glass substrate and Through Glass Vias (TGV): A comprehensive review." *Microelectronics Reliability*, p. 115477 (Elsevier).

3. Zhao, J. et al. (2022). "Stress Issues in 3D Interconnect Technology Using Through Glass Vias." *Journal of Mechanical Engineering*, 58(2), 246-258. DOI: 10.3901/JME.2022.02.246

4. Sun, P., Zhong, Y., Yu, D. et al. (2025). "Recent Progress in Electroless Plating Process for Metallization of Through Glass Via." *Electronics and Packaging*, 25(7), 70107.

5. Hur, J.Y. (2025). "Evaluation of Ultra-thin Copper Foils Characterization for Through Glass Via Copper Electroplating." *Korean Society of Surface Science and Engineering*, 58(6), 379-389.

6. MRS Advances (2026). "Stress analysis of glass substrates vs. resin substrates in double-layer ABF sandwich structures."

### Industry Reports

7. Yole Group (2025). "Glass Materials for Advanced Packaging 2025." [Market research report]

8. Yole Group (2025). "Status of the Advanced IC Substrates Industry 2025." [Market research report; forecasts $31B by 2030]

9. Yole Group (2025). "Panel-Level Packaging 2025." [Market research report; >27% CAGR]

10. IDTechEx (2026). "Glass in Semiconductors 2026-2036: Applications, Emerging Technologies, and Market Insights."

### Analyst Reports

11. Kuo, M.C. (2026-06-11). "TSMC CoPoS Mass Production Slated for H2 2028; Glass and ABF are Complementary, Not Substitutes." [Research note; reported by multiple financial news outlets]

### Industry Articles and Technical Summaries

12. Fiisual Blog (2026). "What Is CoPoS? TSMC's CoWoS Technology and Its Evolution Toward Panel-Level Packaging." [Link: fiisual.com]

13. TechPowerUp (2026). "TSMC Prepares 'CoPoS': Next-Gen 310 x 310 mm Packages." [TechPowerUp]

14. TechPowerUp (2026). "TSMC Prepares CoWoS to CoPoS Shift with 750 x 620 mm Panels." [TechPowerUp]

15. 3D InCites / IMAPS (2022). "Thin Glass: A Simplified Path to Copper-Filled Through-Glass Vias." [Mosaic Microsystems technical whitepaper]

16. 3D InCites / IMAPS (2025). "The Role of Redistribution Layers (RDL) in Advanced Packages." [Jillian McNichol]

17. Cadence / PCB Resources (2025). "Why Ajinomoto Build-Up Film (ABF) is Used in IC Packaging."

18. Yole Group (2025). "PLP Technology Roadmap Toward High-End Packaging Fueled by AI." [Press release]

19. Semiconductor Digest (2025). "Resonac Develops Temporary Bonding Film and New Debonding Process."

20. Corning (2025). "Advanced Packaging Glass Carriers." [Corning product page]

### Supplier Technical Documentation

21. SCHOTT (2025). "Advanced IC Packaging and Integration." [SCHOTT technical materials]

22. E&R (2024). "Glass Substrates and Advanced Technologies at SEMICON Taiwan 2024."

23. APT (2024). "Advanced packaging debubbling processes." [~90% market share in segment]

---

## Appendix A: Key Terminology

| Term | Definition |
|---|---|
| **ABF** | Ajinomoto Build-up Film — epoxy dielectric film for substrate buildup |
| **ABF-GCP** | ABF Glass Core Package — ABF layers encapsulating a glass core |
| **CoPoS** | Chip-on-Panel-on-Substrate — TSMC's panel-level packaging evolution |
| **CoWoS** | Chip-on-Wafer-on-Substrate — TSMC's current advanced packaging |
| **CTE** | Coefficient of Thermal Expansion (ppm/degC) |
| **cHBM** | Custom High Bandwidth Memory — NVIDIA-designed base die |
| **ECDM** | Electrochemical Discharge Machining — TGV formation method |
| **EMIB** | Embedded Multi-die Interconnect Bridge — Intel packaging technology |
| **FOWLP** | Fan-Out Wafer Level Packaging |
| **GCS** | Glass Core Substrate |
| **HBM** | High Bandwidth Memory |
| **HVM** | High Volume Manufacturing |
| **LISE** | Laser-Induced Selective Etching — TGV formation method |
| **LPU** | Language Processing Unit (Groq technology) |
| **PLP** | Panel-Level Packaging |
| **PPR** | Periodic Pulse Reverse — electroplating waveform |
| **RDL** | Redistribution Layer |
| **Reticle** | Photomask field size (858 mm^2 standard) |
| **SoIC** | System Integrated Chip — TSMC hybrid bonding technology |
| **SPR** | Super Power Rail — TSMC backside power delivery |
| **TGV** | Through Glass Via |
| **TSV** | Through Silicon Via |

## Appendix B: Data Sources Summary

This document synthesizes information from:
- Analyst reports (Ming-Chi Kuo, TF International Securities, June 2026)
- Academic journals (JWJ, Microelectronics Reliability, MRS Advances, etc.)
- Industry analyst firms (Yole Group, IDTechEx, TrendForce)
- Technical trade publications (3D InCites, Semiconductor Digest)
- Equipment and materials supplier documentation (Corning, SCHOTT, ASE, Manz)
- Web-based news and analysis (TechPowerUp, Fiisual, EEFocus)

*All information is believed accurate as of June 2026. Manufacturing timelines, specifications, and technology choices are subject to change as development progresses.*
