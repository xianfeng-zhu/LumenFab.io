# Advanced Packaging Materials -- Research Notes

**Date:** 2026-06-13
**Scope:** Underfill, TIM, molding compounds, die attach, RDL dielectrics, glass for packaging

---

## Table of Contents

1. [Underfill Materials](#1-underfill-materials)
2. [Thermal Interface Materials (TIM)](#2-thermal-interface-materials-tim)
3. [Molding Compounds (EMC)](#3-molding-compounds-emc)
4. [Die Attach Materials](#4-die-attach-materials)
5. [Dielectric Materials for RDL](#5-dielectric-materials-for-rdl)
6. [Glass for Packaging](#6-glass-for-packaging)

---

## 1. Underfill Materials

### 1.1 Overview

Underfill materials protect solder joint interconnects in flip-chip and advanced packages by distributing thermomechanical stress between the die and substrate. As the industry moves to finer pitches (<50 um), thinner dies, and 3D stacking (HBM, chiplets), underfill selection becomes critical for reliability.

### 1.2 Types of Underfill

#### Capillary Underfill (CUF)
- **Application:** Dispensed post-reflow; flows by capillary action into the die-to-substrate gap.
- **Strengths:** Mature technology, wide material selection, well-characterized.
- **Limitations:** Struggles below 30 um bondline; void risk increases at fine pitch; separate process step.
- **Typical use:** CSP, BGA, WLCSP, standard flip-chip.

#### Molded Underfill (MUF)
- **Application:** Molding compound serves as both encapsulant and underfill in one step (transfer or compression molding).
- **Strengths:** Higher throughput, no separate dispensing step, good for large-area FOWLP.
- **Limitations:** Formulation must balance mold flow with gap-fill; higher void risk than NCF.
- **Typical use:** Fan-out wafer-level packaging (FOWLP), embedded WLP.

#### Non-Conductive Paste (NCP)
- **Application:** Pre-applied to substrate or die before thermal compression bonding (TCB).
- **Strengths:** Excellent for fine-pitch Cu pillar bumps (<80 um pitch), good void fill.
- **Limitations:** Die thickness typically >60 um; potential for tool contamination.
- **Dispense patterns:** Rosette or asterisk-with-dots recommended.

#### Non-Conductive Film (NCF)
- **Application:** Pre-applied as wafer-level film (laminated onto bumped wafers, then diced).
- **Strengths:** Enables 3D TSV stacking (HBM), thin die support (<50 um), controlled fillet, no outgassing.
- **Limitations:** Requires optical transparency for alignment; careful lamination parameters needed.
- **Cure time:** As fast as ~3 seconds with optimized formulations.

### 1.3 Key Material Properties

| Property | Typical Range | Importance |
|----------|---------------|------------|
| CTE (alpha 1, below Tg) | 16-42 ppm/C | CTE should be near solder (24 ppm/C); lower CTE reduces stress |
| CTE (alpha 2, above Tg) | 80-150 ppm/C | Higher above Tg, but must minimize mismatch at operating temp |
| Glass Transition (Tg) | 125-170 C | Must exceed max operating temperature by comfortable margin |
| Flexural Modulus | 4-13 GPa | Balances stress distribution vs. brittle fracture risk |
| Filler Content | 40-70 wt% | Higher filler = lower CTE, higher viscosity |
| Filler Size (max) | 0.3-1.0 um | Smaller filler critical for fine-pitch gap filling |
| Viscosity | 5-40 Pa*s | Lower needed for CUF; higher acceptable for NCP pre-dispense |
| Ionic Purity (Cl-, Na+) | <5 ppm | Corrosion risk to Al pads and solder joints |

### 1.4 Commercial Products -- Example Properties

#### Namics U8443-14 (Capillary Underfill)
| Property | Value |
|----------|-------|
| Filler Content | 50 wt% |
| Filler Size (mean/max) | 0.3 / 1.0 um |
| Viscosity @ 25C | 10 Pa*s |
| Thermal Conductivity | 0.37 W/m*K |
| Tg (DMA) | 151 C |
| Tg (TMA) | 135 C |
| CTE < Tg | 42 ppm/C |
| CTE > Tg | 125 ppm/C |
| Bending Modulus | 6.5 GPa |
| Bending Strength | 110 MPa |
| Storage Modulus < Tg | 6.0 GPa |
| Storage Modulus > Tg | 0.07 GPa |

#### Henkel LOCTITE ECCOBOND Series (Selected)
| Product | CTE1 (ppm/C) | CTE2 (ppm/C) | Tg (C) |
|---------|-------------|-------------|--------|
| FP4526 | 33 | 101 | 133 |
| FP4530 | 46 | 150 | 145 |
| FP4531 | 28 | 104 | 161 |
| E 1172 A | 27 | 85 | 135 |
| E 1216M | 35 | 131 | 125 |

### 1.5 Key Suppliers

| Supplier | Key Products | Technology Focus |
|----------|-------------|------------------|
| **Namics** (Japan) | U8443, U8437 | CUF for high-reliability; fine-pitch capillary underfill |
| **Henkel** (Germany) | LOCTITE ECCOBOND FP, E series | Broad portfolio: CUF, NCP, NCF |
| **Nagase ChemteX** (Japan) | DENATITE XNR series | Epoxy-based encapsulants; NCP/NCF for TCB |
| **Showa Denko** (Japan) | Underfill formulations | CUF and MUF materials |
| **Shin-Etsu** (Japan) | Silicone/epoxy underfills | CUF, MUF for fan-out |
| **Panasonic** (Japan) | NCF films | Wafer-applied underfill for HBM |
| **Fuji Chemical** (Japan) | NCF | Film-type underfill for 3D stacking |

### 1.6 Key Challenges

- **Void-free filling at fine pitch:** As bump pitch shrinks to <40 um, capillary flow resistance increases exponentially; NCF and NCP are preferred.
- **Warpage control:** CTE mismatch between Si (3 ppm/C), underfill (25-40 ppm/C), and substrate (15-20 ppm/C) creates warpage; filler loading optimization is key.
- **Thermal conductivity:** Typical underfill k ~0.3-0.8 W/m*K. For high-power packages, filler selection (alumina, BN, silica) must balance thermal vs. flow properties.
- **Cure shrinkage:** Must be <1% to avoid imposing tensile stress on bumps.
- **Adhesion to passivation:** Must maintain adhesion to SiN/SiO2 and solder mask under HAST and TCT.

---

## 2. Thermal Interface Materials (TIM)

### 2.1 TIM Classification by Location

| Interface | Location | Role | Typical k (W/m*K) |
|-----------|----------|------|-------------------|
| **TIM1** | Die to integrated heat spreader (IHS) | Transfers concentrated heat from hot spots | 4-86 |
| **TIM1.5** | Bare die to heat sink (lidless) | Heat transfer + mechanical die protection | 8-86 |
| **TIM2** | IHS to heat sink (cold plate/fan) | Spread heat across larger area | 2-38 |

Lidless designs (TIM1.5) are increasingly important for AI/HPC: H100 exceeds 800W, next-gen chips higher.

### 2.2 Material Types

#### Thermal Grease
- **Composition:** Silicone or hydrocarbon oil + thermally conductive fillers (Al2O3, ZnO, AlN, BN).
- **k range:** 1-6 W/m*K (standard), up to >10 W/m*K (advanced).
- **Pros:** Low cost, thin bond line, conformable.
- **Cons:** Pump-out under thermal cycling, dry-out over time, messy application.
- **Suppliers:** Shin-Etsu (G-751, X-23-7762, X-23-7921-5), DOWSIL (TC-5026, TC-5550, TC-5888).

#### Thermal Gel (Cured-in-Place)
- **Composition:** Silicone gel + filler; cures to form a flexible solid.
- **k range:** 2-5 W/m*K.
- **Pros:** No pump-out, better reliability than grease, good for automated dispensing.
- **Cons:** Higher thermal resistance than grease at same conductivity due to thicker bond line.
- **Suppliers:** DOWSIL (SE4445, SE4450), Shin-Etsu (TC-2016 series).

#### Phase Change Material (PCM)
- **Composition:** Wax/paraffin/polymer matrix + filler; solid at room temp, melts at 45-60C.
- **k range:** 3.5-8.5 W/m*K.
- **Pros:** No pump-out after phase change, thin bondline, reworkable, high reliability.
- **Cons:** Requires burn-in for best performance; electrical non-conductive only.
- **Key suppliers:**

| Supplier | Product | k (W/m*K) | Impedance (C*cm2/W) |
|----------|---------|-----------|---------------------|
| Honeywell | PTM7900 | 8.0 | 0.045 |
| Honeywell | PTM7950-SPS | 8.5 | 0.04 |
| Honeywell | PTM7000 | 6.5 | 0.06 |
| Honeywell | PTM6000 | 4.4 | 0.07 |
| Laird | Tpcm 7000Plus | 7.5 | Low burn-in |
| Laird | Tpcm 780/780SP | 5.4-5.5 | Screen printable |

#### Solder TIM (sTIM)
- **Composition:** Pure indium, Indium alloys (InAg, InSn), AuSn.
- **k range:** 57-86 W/m*K.
- **Pros:** Highest thermal conductivity; suitable for high-power (>400W) chips.
- **Cons:** Voiding risk (must be <1%), hot tearing, need for backside metallization (Ti/Ni/Au), rework challenges.
- **Key challenges:** Indium pump-out under thermal cycling; addressed by Cu foam / Indium composites.
- **Suppliers:** Indium Corporation (Heat-Spring, Indium foils), Kyocera, Heraeus.

#### Graphite / Carbon-Based
- **Composition:** Compressed exfoliated graphite (CEG), graphene sheets, CNT arrays.
- **k (in-plane):** 300-1000+ W/m*K (CEG/graphite sheets).
- **k (through-plane):** 7-24 W/m*K (much lower; anisotropy is a key limitation).
- **Pros:** Very high in-plane spreading; lightweight; no pump-out.
- **Cons:** Anisotropy (poor z-direction); high contact resistance without thermal adhesive.
- **Emerging:** 3D hybrid carbon networks (VACNT + graphene) achieving 24 W/m*K through-plane.

#### CNT-Based
- **Composition:** Vertically aligned carbon nanotube (VACNT) arrays, CNT-polymer composites.
- **k (through-plane):** Up to 24 W/m*K (composite); intrinsic CNT ~3500 W/m*K.
- **Status:** Research stage; limited by fabrication cost, scalability, contact resistance.

### 2.3 Key Suppliers Summary

| Supplier | Headquarters | Key TIM Products |
|----------|-------------|-----------------|
| **Shin-Etsu Chemical** | Japan | G-751 (4.5 W/m*K), X-23-7762 (6 W/m*K), X-23-7921-5 (6 W/m*K) |
| **DOWSIL (Dow Corning)** | USA | TC-5026, TC-5550, TC-5888 greases; SE4445/SE4450 gels |
| **Honeywell** | USA | PTM6000/7000/7900/7950 phase change materials |
| **Laird (DuPont)** | USA | Tpcm phase change; Tgrease; Tpli gap fillers |
| **Fujipoly** | Japan | Sarcon thermal gap fillers and pads |
| **Indium Corporation** | USA | Solder TIM (indium foils, Heat-Spring); sintered Ag pastes |
| **Heraeus** | Germany | TIM1 paste >30 W/m*K (no backside metallization needed) |
| **Zeon** | Japan | VB200 sheet TIM (38 W/m*K z-direction) |

### 2.4 Challenges

- **Thermal conductivity vs. reliability tradeoff:** Higher filler loading improves k but degrades mechanical compliance, increasing stress on die.
- **Pump-out (grease):** Cyclic thermal expansion squeezes grease out from between surfaces.
- **Solder voiding:** Voids act as thermal insulators; demanding process control (<0.5% void, X-ray verified).
- **Bond line thickness (BLT):** k alone does not determine performance; thermal impedance = BLT/k; thinner is always better.
- **TIM degradation:** Under high-temp storage (150C+), polymer matrices oxidize, fillers settle, and k declines.

---

## 3. Molding Compounds (EMC)

### 3.1 Overview

Epoxy molding compounds (EMC) encapsulate and protect semiconductor devices. >95% of ICs worldwide are encapsulated with EMC. In advanced packaging, EMC serves as the structural matrix for FOWLP, enabling wafer-level redistribution.

### 3.2 EMC Forms

| Form | Description | Application |
|------|-------------|-------------|
| **Liquid EMC** | Low viscosity liquid; dispensed or printed | FOWLP compression molding, SiP |
| **Granular EMC** | Pellet form; transfer molded | Standard QFP/BGA packages |
| **Sheet EMC** | Pre-formed film; laminated | Panel-level packaging, thin packages |
| **UV-curable EMC** | Photocurable; fast room-temp cure | Emerging FOWLP; low die-shift |

### 3.3 Key Properties

| Property | Typical Range | Importance |
|----------|---------------|------------|
| CTE (alpha 1, <Tg) | 7-15 ppm/C | Must be between Si (3) and substrate (15-20) to minimize warpage |
| CTE (alpha 2, >Tg) | 30-60 ppm/C | Larger, but package seldom operates above Tg |
| Tg | 125-230 C | Higher Tg for automotive and power; 165-175 C typical for advanced packaging |
| Flexural Modulus @ 25C | 15-28 GPa | Higher modulus = better rigidity but more brittle |
| Filler Content | 75-92 wt% | Spherical silica (fused or crystalline); higher = lower CTE |
| Filler Size | 10-75 um (standard); <10 um (fine-pitch) | Smaller particles for thin packages, narrow gaps |
| Spiral Flow | 50-200+ cm (175C) | Affects moldability and wire sweep |
| Thermal Conductivity | 0.7-3.0 W/m*K | Alumina-filled grades for high-power |
| Water Absorption | 0.1-0.3% (boiling, 24h) | Lower is better for reliability (popcorn effect) |

### 3.4 Commercial Products

#### Sumitomo Bakelite SUMICON EME Series

| Grade | CTE1 (ppm/C) | CTE2 (ppm/C) | Tg (C) | Flex Mod (MPa) | Features |
|-------|-------------|-------------|--------|-----------------|----------|
| G630L | 10 | 37 | 130 | 26,000 | Halogen-free standard |
| G631H | 9 | 39 | 130 | 25,000 | Halogen-free standard |
| G600F | 9 | 35 | 135 | 24,500 | Low warpage |
| G700L | 8 | 36 | 165 | 25,000 | High reliability, BGA/CSP |
| G720 | 9 | 31 | 165 | 25,000 | Low warpage, high filler |
| G750 | 10 | 44 | 170 | 26,000 | High Tg |
| G760 Type L | 9 | 49 | 150 | 26,000 | Halogen-free |
| A730 High Thermal | 12 | 39 | 165 | 28,000 | 3.0 W/m*K, Al2O3 filler |

#### Kyocera EMC Series

| Grade | CTE1 (ppm/C) | Tg (C) | Spiral Flow (cm) | Features |
|-------|-------------|--------|------------------|----------|
| KE-1000SV | Standard | Standard | Standard | SOP, QFP, DIP, TO, DPAK |
| KE-G200V | Low stress | Standard | Standard | Large chip encapsulation |
| KE-G240V | Fine pitch | Standard | Standard | BGA, LGA, MCM, fine-pitch wire bond |
| XKE-G8393 | 10 | 230 | 165 | High Tg for power devices |

#### Resonac (Hitachi Chemical)
- Notable for CE series molding compounds for FOWLP.
- Participated in Japan's JOINT3 consortium for next-gen packaging.

### 3.5 Key Suppliers

| Supplier | Country | Market Position |
|----------|---------|----------------|
| **Sumitomo Bakelite** | Japan | Largest EMC producer; full range from commodity to advanced |
| **Resonac (Hitachi Chemical)** | Japan | Top-tier; power module and advanced packaging EMC |
| **Shin-Etsu Chemical** | Japan | High-purity EMC; silicone-based encapsulants |
| **Panasonic** | Japan | FOWLP EMC; sheet and liquid forms |
| **Kyocera** | Japan | High-Tg EMC for power devices; fine-pitch formulations |
| **Nagase** | Japan | Specialty encapsulants |
| **Samsung SDI** | Korea | Growing EMC portfolio for memory and logic |
| **Eternal Materials** | Taiwan | EMC for OSATs |
| **Hysol (Huawei)** | China | Domestic EMC for Chinese packaging houses |

### 3.6 Challenges

- **Warpage control:** Primary challenge in FOWLP. CTE mismatch between Si (3 ppm/C) and EMC (8-15 ppm/C) causes wafer bow. High filler loading, dual-Tg approach, and low-modulus formulations help.
- **Die shift:** In compression molding, die position shifts during EMC flow. Smaller die + larger panels raise this risk.
- **Filler settling:** During molding, heavy silica fillers can settle; causes anisotropic shrinkage.
- **Interfacial delamination:** Finite element studies show that CTE above Tg is most influential; safe maximum CTE2 ~42.6 ppm/C.
- **Voiding:** Must be <0.1% for fine-pitch areas; vacuum-assisted molding techniques mitigate.

---

## 4. Die Attach Materials

### 4.1 Overview

Die attach materials mechanically bond the die to the substrate or leadframe while providing thermal and electrical conduction. For power devices (SiC, GaN), the die attach must withstand >200 C junction temperatures.

### 4.2 Material Types

#### Solder-Based Die Attach

| Solder | Composition | k (W/m*K) | Melting Point (C) | Notes |
|--------|-------------|-----------|-------------------|-------|
| SAC305 | Sn-3Ag-0.5Cu | ~58.7 | 217-220 | Standard lead-free; low cost |
| AuSn20 | 80Au-20Sn | ~57 | 280 | High reliability; expensive |
| Pb95Sn5 | 95Pb-5Sn | ~23 | 312 | Legacy; being phased out (RoHS) |
| In (pure) | 100In | 86 | 157 | Excellent TIM; low strength |
| Cu-Sn SLID | Cu-Sn intermetallic | ~60-80 | >415 (after bonding) | High melting point post-bond |

#### Sintered Silver (Ag)

- **Process:** Nano- or micron-scale Ag particles sintered at 200-300 C under pressure (0-30 MPa).
- **k:** >200 W/m*K (pressureless); >250 W/m*K (pressure-assisted).
- **Post-sinter melting point:** 961 C -- enabling high-temperature operation.
- **Advantages:** Excellent thermal and electrical conductivity; proven in EV power modules (Tesla, BYD, Hyundai).
- **Disadvantages:** High material cost (Ag); electrochemical migration risk.
- **Key suppliers:**

| Supplier | Product | Type | k (W/m*K) | Voiding |
|----------|---------|------|-----------|---------|
| Indium Corp | QuickSinter QS815-SD | Dispensing, pressureless Ag | >200 | <2% |
| Indium Corp | QuickSinter QS815-AR | Pressureless + pressure Ag | >200 | <2% |
| Indium Corp | InBAKE | Batch oven sintering (Ag, Cu) | >200 | Process-dependent |
| Heraeus | Silver sinter pastes | Pressure and pressureless | >200 | --
| Kyocera | Silver sinter | Pressureless | >200 | --
| Henkel | Silver sinter | Pressure | >200 | --
| Namics | Silver sinter | Dispensing | >200 | --

#### Sintered Copper (Cu)

- **k:** >200 W/m*K (comparable to Ag).
- **Cost:** ~1/100th of Ag price.
- **Challenge:** Severe oxidation; requires inert/reducing atmosphere (H2/N2, formic acid, or vacuum).
- **Emerging solutions:** Cu@Ag core-shell particles; alloying with Ni or Mn.
- **Status:** Active R&D for mass production; not yet widely deployed outside of pilot lines.

#### Sintered Ag-Cu Composites

- **k:** ~159 W/m*K at 20 wt% Cu (sintered at 380C, no pressure).
- **CTE:** 13 ppm/K.
- **Advantage:** Air-sinterable without pressure; balances cost of Ag with performance.
- **Limitation:** Lower k than pure Ag.

#### Silver Sintering Market

| Metric | Value |
|--------|-------|
| 2024 market | ~$188 million |
| 2030 forecast | ~$255 million |
| CAGR | ~5.2% |
| Key drivers | EV power modules, SiC adoption, HPC |

### 4.3 Die Attach Film (DAF)

- **Type:** Adhesive film pre-applied to dicing tape; die picks up with adhesive already attached.
- **Advantages:** Uniform bondline, no fillet, no voiding, clean process.
- **Typical Tg:** 115-170 C.
- **CTE (alpha 1):** 26-60 ppm/C (formulation-dependent; lower with filler).
- **Modulus:** 2-6 GPa.
- **Suppliers:**
  - **Furukawa (AFN series):** AFN603 (CTE1=37, Tg=115), AFN303 (CTE1=33, Tg=120), AFN601 (CTE1=26, Tg=156).
  - **Henkel:** Loctite Ablestik ATB 125GR (ncDAF, 1000 TCT, automotive Grade 0).
  - **Dow (silicone DAF):** Low modulus, 25-300 um, for stress decoupling.

### 4.4 Die Attach Paste (Conductive Adhesives)

- **Composition:** Epoxy or silicone + Ag flakes (60-85 wt%).
- **k:** 1.5-30 W/m*K (depending on Ag loading).
- **Advantages:** Low temperature cure (<175 C), low stress, low cost.
- **Limitations:** Lower k than sintered Ag or solder; limited to lower-power devices.

### 4.5 Challenges

- **Void control:** Sintered joints must achieve <2% voiding; X-ray and C-SAM inspection required.
- **Oxidation (Cu sintering):** Even trace O2 (<10 ppm) during sintering degrades the joint.
- **Pressure requirements:** Pressure-assisted sintering (5-30 MPa) requires robust tooling and risks die cracking.
- **ECM (Ag):** Under bias in humid environments, Ag ions migrate; mitigating with alloys or barrier layers.
- **Thermal cycling reliability:** Sintered Ag joints are more robust than solder under TCT, but porous microstructure can coarsen.

---

## 5. Dielectric Materials for RDL

### 5.1 Overview

The redistribution layer (RDL) in advanced packages requires thin-film dielectric materials that can be photopatterned with fine resolution, provide electrical insulation, and withstand thermal cycling. The four primary polymer dielectrics are polyimide (PI), polybenzoxazole (PBO), benzocyclobutene (BCB), and epoxy-based build-up films (ABF).

### 5.2 Material Comparison

| Property | Polyimide (PI) | PBO | BCB (CYCLOTENE) | ABF (GX-series) |
|----------|---------------|-----|-----------------|------------------|
| **Dk (dielectric constant)** | 2.8-3.5 | ~2.9 | 2.5-2.65 | 3.0-3.4 |
| **Df (dissipation factor)** | 0.006-0.010 | <0.01 | 0.0008-0.002 | 0.006-0.022 |
| **CTE (ppm/C)** | 30-50 | 55-80 (standard); 26-32 (low-CTE) | 42-65 | 21-95 (varies by grade) |
| **Young's Modulus (GPa)** | 2-4 | 1.9-2.7 | 2.0-3.1 | 4.0-7.8 |
| **Elongation (%)** | 40-50+ | 10-75 | 5.5-28 | --
| **Tg (C)** | 270-350+ | >300 | >350 | 156-210 |
| **Cure Temp (C)** | 200-390 | 200-350 | 210-250 | 180-220 |
| **Moisture Absorption** | Moderate (0.5-2%) | Low (<0.5%) | Very low (<0.2%) | 0.5-1.1% |
| **Resolution** | 5-10 um L/S | 2-5 um | 3-5 um | 5-5 um L/S (SAP) |
| **Photosensitive?** | Yes (some grades) | Yes | Yes (4000 series) | No (requires dry etch or laser) |
| **Cost** | Moderate | Moderate | High | Low-moderate |

### 5.3 Polyimide (PI)

**Properties:**
- Excellent thermal stability, mechanical strength, and chemical resistance.
- Photosensitive PI (PSPI) enables direct photolithography, eliminating dry-etch steps.
- High cure temperature is a key drawback (300+ C typical; 200 C achievable with novel low-temp grades).

**Suppliers:**
| Supplier | Product Series | Key Features |
|----------|---------------|--------------|
| **Toray** | PHOTONEECE GN/LT/PW/UR/PN | Dk 2.8, Df 0.006 (LT-series), elongation >50%, resolution 10 um L/S |
| **Asahi Kasei** | PIMEL BL/BM/AM/MA/LV | Wide cure margin (200-390 C), high elongation |
| **Fujifilm** | -- | Photosensitive polyimides for FOWLP |
| **Eternal** | ETERFLEX EPD-3300 (dry film) | Low CTE, dry film format for panel-level |
| **HD Microsystems** | PI-2600, HD-8900 series | Established products for semiconductor passivation |

### 5.4 Polybenzoxazole (PBO)

**Properties:**
- Lower modulus than PI (1.9-2.7 GPa) reduces stress on underlying layers.
- Lower moisture absorption than PI.
- Standard CTE is higher (55-80 ppm/C), though low-CTE formulations exist (26-32 ppm/C).
- Dk ~2.9; Df <0.01 at 10 GHz.
- Positive-tone photosensitive available; develops in aqueous TMAH.
- Cure temperature as low as 200 C for advanced packaging applications.

**Suppliers:**
- **HD Microsystems:** HD-8940 series (200 C cure PBO).
- **Microcosm (Taiwan):** P-PSPBO positive-tone photosensitive PBO.

### 5.5 Benzocyclobutene (BCB)

**Properties (Dow CYCLOTENE 4000 series):**
- **Lowest Dk/Df** of the four: Dk=2.5-2.65, Df=0.0008 (lowest dielectric loss for RF/mmWave).
- **No volatiles during cure:** Thermal ring-opening polymerization produces no byproducts (unlike PI, which releases H2O). This is key for void-free multi-layer stacks.
- **Excellent planarization:** >90% degree of planarization.
- **Low moisture uptake:** <0.2% (hydrophobic).
- **Limitations:** Brittle (5.5-28% elongation); can crack under aggressive thermal cycling.
- **Cure temp:** 210-250 C (lower than PI).

**Suppliers:**
- **Dow (now part of DuPont):** CYCLOTENE 3022 (dry-etch), 4000 series (photosensitive).
- **Applications:** 3D wafer bonding, GaAs MMICs, RF packaging, MEMS.

### 5.6 Ajinomoto Build-up Film (ABF)

**Properties:**
- Epoxy-based composite with SiO2 filler.
- Used as buildup dielectric in FC-BGA substrates (not wafer-level RDL).
- Ajinomoto holds >95% of the global ABF market.

| ABF Grade | Dk @ 5.8 GHz | Df @ 5.8 GHz | CTE x-y (25-150C) | CTE x-y (150-250C) | Notes |
|-----------|-------------|-------------|-------------------|-------------------|-------|
| SH9K | 3.4 | 0.022 | 95 ppm/C | 180 ppm/C | Mass production |
| GX3/GX13 | 3.1 | 0.019 | 46 | 120 | Mass production |
| GX60 | 3.3 | 0.025 | 39 | 114 | Under development |
| GZ9-2 | 3.2 | 0.009 | 36 | 105 | Mass production |
| GZ11 | 3.1 | 0.012 | 35 | 100 | Sampling |
| GZ20 | 3.1 | 0.010 | 28 | 75 | Sampling |
| GZ30 | 3.2 | 0.008 | 21 | 58 | Under development |
| TB | 3.0 | 0.006 | 52 | -- | CE + olefin | |

- **Filler content:** 38-60 wt% SiO2.
- **Young's Modulus:** 4.0-7.8 GPa.
- **Tg:** 156-210 C (TMA).
- **Resolution:** Supports L/S down to 5/5 um with semi-additive process (SAP).

### 5.7 Challenges

- **CTE mismatch to Cu (17 ppm/C):** Causes stress in microvias under thermal cycling.
- **Cure temperature compatibility:** PI needs >300 C, limiting choice of carrier materials and mold compounds.
- **Photospeed vs. resolution tradeoff:** High photospeed sacrifices resolution; fine-line RDL needs >50 mJ/cm2 sensitivity at 5 um L/S.
- **Adhesion to Cu:** Interfacial delamination under TCT is a top failure mode; adhesion promoters (silane coupling agents) used.
- **PFAS regulations:** Fluorinated polymers being phased out; developing non-fluorinated alternatives.

### 5.8 Market

| Metric | Value |
|--------|-------|
| RDL material market (2022) | $192 million |
| Forecast (2030) | $460 million |
| CAGR | 11.5% |
| PI market share | Largest segment (2022) |
| Driving applications | FOWLP, CoWoS, chiplets |

---

## 6. Glass for Packaging

### 6.1 Overview

Glass substrates and carriers are increasingly adopted in advanced packaging for their CTE match to silicon, dimensional stability, low electrical loss, and ability to form high-density through-glass vias (TGV).

### 6.2 Glass Roles in Packaging

| Role | Description | Key Requirements |
|------|-------------|------------------|
| **Glass carrier** | Temporary support wafer during FOWLP/FOPLP process; removed by laser debonding | UV transparency, CTE match, TTV <1 um |
| **Glass core** | Permanent substrate in package core; replaces organic core | Low CTE, high rigidity, TGVs |
| **Glass interposer** | Intermediate layer between die and substrate with TGVs | Fine-pitch TGV, CTE ~3-4 ppm/C, low Dk/Df |

### 6.3 Corning

**Eagle XG (Alkaline earth boro-aluminosilicate):**
- **CTE:** 3.2-3.6 ppm/C (0-300 C) -- closely matched to Si (3.25).
- **Young's Modulus:** 73.6-74 GPa.
- **Strain point:** 669 C.
- **Annealing point:** 722 C.
- **Softening point:** 971 C.
- **Dk:** 5.3 @ 1 kHz.
- **Surface roughness (Ra):** <0.5 nm (fusion-drawn, no polishing).

**Position in semiconductor packaging:**
- Temporary carriers for FOWLP interposers and wafer thinning (DRAM).
- Providing glass core substrate samples for permanent use in packaging (confirmed 2025).
- Targeting mass production contingent on demand from AI/HPC sector.

### 6.4 SCHOTT

**MEMpax (Borosilicate):**
- **CTE:** 3.3 ppm/K (20-300 C) -- matches Si for anodic bonding.
- **Tg:** 532 C.
- **Dk:** 4.8 @ 1 MHz (4.4 @ 2-77 GHz).
- **Tan delta:** 0.0057-0.015 (1-77 GHz).
- **Ra:** <0.5 nm.
- **Thickness range:** 0.07-0.55 mm.

**Product portfolio for packaging:**
| Glass | CTE (ppm/K) | Tg (C) | Family | Use |
|-------|-------------|--------|--------|-----|
| MEMpax | 3.3 | 532 | Borosilicate | MEMS, WLP, anodic bonding |
| AF 32 eco | 3.2 | 717 | Aluminoborosilicate | High-temp WLP (to ~600 C) |
| D 263 T eco | 7.2 | 557 | Borosilicate | Camera modules, microfluidics |
| BOROFLOAT 33 | 3.3 | ~525 | Borosilicate | Cavity caps, general packaging |
| Low-loss (RF) | 3.1 | -- | Low-loss borosilicate | AiP, 5G/6G (Df=0.0014 @ 10 GHz) |

**Cavity Caps:** Available in all above compositions; hermetic laser bonding at wafer level.

### 6.5 AGC (Asahi Glass)

**EN-A1 (Alkali-free boro-aluminosilicate):**
- **CTE:** ~3-4 ppm/C (matched to Si; offered range 3-8 ppm/C).
- **Young's Modulus:** ~76.9 GPa.
- **Surface roughness (Ra):** <10 Angstroms (<1 nm).
- **Dielectric:** Low Df (<0.002 target, low-loss variants).
- **TGV compatibility:** Low taper when laser-drilled; no adhesion layer needed for metallization.
- **Thickness range:** 0.1-2.0 mm.
- **Wafer/panel sizes:** 150/200/300 mm wafers; panels to 510x515 mm.

**Position:**
- Leading supplier of glass for TGV interposers and WLP carriers.
- Participating in JOINT3 consortium (led by Resonac) to develop next-gen panel-level packaging.
- Co-founded Triton Micro Technologies (with nMode) for glass 2.5D interposer manufacturing.

### 6.6 Other Glass Suppliers

| Supplier | Country | Strengths |
|----------|---------|-----------|
| **Hoya** | Japan | Low-CTE glass cores for minimizing die stress |
| **Ohara** | Japan | Low-CTE glass substrates |
| **NEG** | Japan | Glass carriers |
| **DNP** | Japan | Glass interposer development |
| **SEMCO** | Korea | Glass core substrate development |

### 6.7 Market

| Segment | 2024 Value | 2031 Forecast | CAGR |
|---------|-----------|---------------|------|
| Glass substrate for packaging | ~$185-213M | ~$518-586M | ~15.5% |
| Panel-level glass core substrate | ~$1.81B | ~$8.49B | ~27% |
| **Asia-Pacific** share | ~80% | -- | -- |

### 6.8 Key Trends

- **AI/HPC driving adoption:** Glass substrates offer better thermal stability, lower signal loss, and greater dimensional precision than organic substrates.
- **Intel's glass core initiative:** Announced in 2023; targeting mid-decade production.
- **TSMC + SCHOTT partnership (2023):** Developing next-gen glass substrates for 3D IC packaging.
- **Panel-level packaging:** Glass carriers enable large rectangular panels for FOPLP, promising 20-30% cost reduction vs. circular wafers.
- **5G/6G RF performance:** Glass shows up to 50% better high-frequency performance than organic materials.

### 6.9 Challenges

- **Glass brittleness:** Edge chipping and handling breakage are significant yield risks.
- **TGV formation:** While lasers enable fast via drilling, achieving consistent via geometry (especially tapered vs. straight) at fine pitch remains an active field.
- **CTE mismatch with PCB:** Glass interposer (3-4 ppm/C) vs. organic substrate (15-20 ppm/C) creates stress at 2nd-level interconnects.
- **Cost:** In-line lamination of organic cores is currently cheaper; glass requires more processing steps (laser TGVs, PVD metallization).
- **Supplier concentration:** 3 players hold ~90% of the market (Corning, SCHOTT, AGC); capacity expansions needed.

---

## References

### Underfill
- Henkel LOCTITE Underfill Brochure (LT-8332)
- Namics U8443-14 Datasheet (QP Technologies)
- SEMICON and 3DInCites underfill analysis articles
- The Global Market for Polymeric Materials for Advanced Electronic Packaging 2026-2036 (Research and Markets)

### Thermal Interface Materials
- Heraeus Electronics: Mastering Thermal Spreading - Understanding TIM1, TIM2, and TIM1.5
- Honeywell Advanced Materials: Thermal Interface Materials Brochure and PTM datasheets
- Laird Thermal Interface Materials product catalog
- Indium Corporation: Solder TIMs - Decoding TIM1 vs TIM1.5
- Zeon SMI: VB200 Sheet-Type TIM product data
- ScienceDirect papers on CNT/graphene TIM composites

### Molding Compounds
- Sumitomo Bakelite SUMICON EME Catalog
- Kyocera EMC Datasheet (XKE-G8393 grade)
- 24ChemicalResearch: EMC for FOWLP Market Report 2026-2034
- IEEE papers on FOWLP warpage and viscoelastic EMC modeling

### Die Attach
- Indium Corporation QuickSinter product datasheets
- Furukawa Dicing Die Attach Film (AFN Series) data
- University of Arkansas thesis: Comparative study of die attach materials (Thermal Performance)
- Journal of Materials Research and Technology: Sintered metal alloy review (2025)

### RDL Dielectrics
- Dow CYCLOTENE 4000/3000 series datasheets (MatWeb)
- Toray PHOTONEECE product catalog
- Asahi Kasei PIMEL product overview
- Ajinomoto Fine-Techno ABF product roadmaps (via Cadence, IEK, Chinese tech media)
- HD Microsystems HD-8940 PBO data
- Polymer Innovation Blog: RDL for FOWLP

### Glass
- Corning Eagle XG Product Information Sheet
- SCHOTT MEMpax and AF 32 eco datasheets
- AGC EN-A1 Interposer Design Guide
- AGC JOINT3 Consortium announcement
- Korea Herald: Corning eyes leadership in glass substrate market (2025)
- Global Glass Substrate for Semiconductor Packaging Market Report (various analysts, 2025)
