# Semiconductor Packaging Reliability -- Failure Modes, Qualification & Accelerated Testing

**Last updated:** 2026-06-13  
**Scope:** Learning/research reference covering JEDEC standards, common failure modes, 2.5D/3D-specific challenges, glass substrate reliability, qualification flows, and accelerated life test modeling.

---

## Table of Contents

1. [JEDEC Reliability Test Standards](#1-jedec-reliability-test-standards)
2. [JESD47 Qualification Framework](#2-jesd47-qualification-framework)
3. [AEC-Q100 Automotive vs. JEDEC JESD47](#3-aec-q100-automotive-vs-jedec-jesd47)
4. [Common Failure Modes in Advanced Packaging](#4-common-failure-modes-in-advanced-packaging)
5. [2.5D/3D Packaging Reliability Challenges](#5-25d3d-packaging-reliability-challenges)
6. [Glass Substrate (TGV) Reliability](#6-glass-substrate-tgv-reliability)
7. [Qualification Flow: Component to System](#7-qualification-flow-component-to-system)
8. [Accelerated Life Testing & Failure Prediction Models](#8-accelerated-life-testing--failure-prediction-models)

---

## 1. JEDEC Reliability Test Standards

JEDEC Solid State Technology Association publishes the JESD22 family of test methods and JESD47/JEP150 qualification frameworks. These are the foundation of semiconductor package reliability assessment.

### 1.1 Thermal Cycling (JESD22-A104)

Evaluates the ability of a device to withstand extreme high-to-low temperature excursions. Failures arise from coefficient of thermal expansion (CTE) mismatch between dissimilar materials (silicon die, mold compound, substrate, solder joints).

**Common Conditions:**

| Condition | Tmin (deg C) | Tmax (deg C) | Typical Cycles |
|-----------|-------------|-------------|----------------|
| B | -55 | +125 | 500-1000 |
| C | -65 | +150 | 500-1000 |
| G | -40 | +125 | 500-1000 |
| H | -55 | +150 | 500-2000 |
| K | 0 | +100 | 500-1000 |
| L | -40 | +110 | 500-1000 |
| M | -40 | +150 | 500-2000 |
| N | -10 | +100 | 500-1000 |
| R | -25 | +125 | 500-1000 |
| T | -40 | +85 | 500-1000 |

- **Ramp rate:** Typically 10-15 deg C/min (air-to-air)
- **Dwell time:** 5-15 minutes at each extreme
- **Pass criterion:** Zero electrical failures out of 77 units per lot (3 lots)
- **Failure modes:** Solder joint fatigue, delamination, die cracking, wire bond fracture

### 1.2 Thermal Shock (JESD22-A106)

Similar to temperature cycling but uses liquid-to-liquid immersion for much faster temperature transitions (seconds vs. minutes). Creates steeper thermal gradients and higher instantaneous stress.

**Conditions:**

| Condition | Tlow (deg C) | Thigh (deg C) | Transfer time |
|-----------|-------------|--------------|---------------|
| A | 0 | +100 | <10 s |
| B | -55 | +125 | <10 s |
| C | -65 | +150 | <10 s |

- **Dwell time:** Typically 2-5 minutes per bath
- **Number of cycles:** 100-300 (liquid-to-liquid is more severe than air-to-air)

### 1.3 Highly Accelerated Temperature/Humidity Stress Test -- HAST (JESD22-A110, A118)

Accelerates moisture-driven failure mechanisms (corrosion, electrochemical migration) by combining high temperature, high humidity, and (for biased HAST) applied voltage.

| Test | Standard | Conditions | Duration | Bias |
|------|----------|------------|----------|------|
| Biased HAST (BHAST) | JESD22-A110E.01 | 130 deg C / 85% RH | 96-264 h | Yes |
| Unbiased HAST (uHAST) | JESD22-A118B.01 | 130 deg C / 85% RH | 96-264 h | No |
| Autoclave (PCT) | JESD22-A102 | 121 deg C / 100% RH / 2 atm | 168-336 h | No |
| THB (85/85) | JESD22-A101 | 85 deg C / 85% RH | 1000 h | Yes |

**Failure mechanisms:** Galvanic corrosion, dendritic growth (electrochemical migration), delamination at mold compound/die interface, bond pad corrosion, leakage current increase.

### 1.4 High Temperature Storage Life -- HTSL (JESD22-A103)

Bake without electrical bias to evaluate long-term thermal stability.

| Condition | Temperature | Duration |
|-----------|-------------|----------|
| Standard | 150 deg C | 1000 h |
| Extended | 175 deg C | 1000 h |
| Accelerated | 200-250 deg C | 500-1000 h |

**Failure mechanisms:** Intermetallic compound (IMC) growth at solder joints and wire bonds (e.g., Au-Al Kirkendall voiding), die attach degradation, passivation cracking.

### 1.5 High Temperature Operating Life -- HTOL (JESD22-A108)

Combines elevated temperature with operating bias to accelerate electromigration, hot carrier injection, and oxide breakdown.

- **Temperature:** 125-150 deg C (Tj < 150 deg C typically)
- **Duration:** 1000 h (extended: 2000 h for automotive)
- **Sample:** 77 units per lot, 3 lots, zero failures

### 1.6 Preconditioning (JESD22-A113)

Simulates the thermal/mechanical stresses a device sees during board assembly *before* reliability testing. Mandatory preconditioning flow:

1. **Bake** (125 deg C, 24 h) -- removes moisture
2. **Moisture soak** (JEDEC Level 1-5a; Level 3 = 30 deg C/60% RH, 192 h)
3. **3x reflow** (peak 245-260 deg C for Pb-free)
4. **Flux clean** (optional)
5. **Bake** again before reliability test

This step is critical because undetected pre-existing cracks or delamination from reflow will propagate during subsequent stressing.

### 1.7 Tin Whisker Test (JESD22-A121 / JESD201)

Evaluates susceptibility of tin and tin-alloy finishes to spontaneous whisker growth. Three stress legs:

| Stress | Conditions | Duration |
|--------|------------|----------|
| Temperature Cycling | -55 to +85 deg C | 1000-1500 cycles |
| Ambient Storage | 30 deg C / 60% RH | 4000 h |
| High Temp/Humidity | 55 deg C / 85% RH | 4000 h |

**Whisker definition:** Aspect ratio >2, length >=10 um.  
**Acceptance criteria per JESD201:**

| Class | Application | Max whisker length |
|-------|-------------|-------------------|
| Class 3 | Mission-critical (aerospace, medical) | Pure tin typically not allowed |
| Class 2 | Business-critical (telecom, servers) | 40 um (storage) / 45 um (TC) |
| Class 1 | Industrial/consumer | 67 um (storage) |
| Class 1A | Consumer short-life | 75 um (storage) |

### 1.8 Board-Level Drop Test (JESD22-B111/B111A)

Simulates handheld product drops. Key parameters:

| Parameter | Condition B (original) | B111A (2016 update) |
|-----------|----------------------|---------------------|
| Peak accel | 1500 G | 1500 G |
| Pulse duration | 0.5 ms half-sine | 0.5 ms half-sine |
| Board size | 132 x 77 mm | 77 x 77 mm |
| Components/board | 15 | 4 |
| Failure criterion | R > 1000 Ohm > 1 us | Same |
| Max drops | 30 (or 80% failed) | Same |

### 1.9 Cyclic Bending (JESD22-B113)

Evaluates solder joint robustness under repeated board flexure (key for portable electronics).

- **Method:** 4-point bending
- **Frequency:** 1 Hz (sinusoidal)
- **Deflection:** 1.0-3.0 mm (depending on severity)
- **Failure:** Resistance > 300-500 Ohm

### 1.10 Other JESD22 Test Methods

| Standard | Name |
|----------|------|
| A105 | Power & Temperature Cycling |
| A107 | Vibration, Variable Frequency |
| A110 | Biased HAST |
| A112 | Mechanical Shock |
| A114 | ESD HBM |
| B110 | Board Level Impact/Cyclic Bend |
| B117 | Ball Impact Shear Test |
| C101 | ESD CDM |
| D17 | Solder Ball Shear |
| D22 | Wire Bond Pull |

---

## 2. JESD47 Qualification Framework

JESD47 (Stress-Test-Driven Qualification of Integrated Circuits) is the overarching qualification standard that specifies which JESD22 tests apply, with what sample sizes and pass criteria.

### 2.1 Core Tests & Sample Requirements

| Test | Standard | Primary Condition | Sample/Lot | Lots |
|------|----------|-------------------|------------|------|
| HTOL | JESD22-A108 | 125 deg C / 1000 h | 77/0 | 3 |
| BHAST | JESD22-A110 | 130 deg C / 85% RH / 96 h | 77/0 | 3 |
| uHAST | JESD22-A118 | 130 deg C / 85% RH / 96 h | 77/0 | 3 |
| TC | JESD22-A104 | -65 to +150 deg C / 500 cyc | 77/0 | 3 |
| HTS | JESD22-A103 | 150 deg C / 1000 h | 15-77/0 | 3 |
| Autoclave | JESD22-A102 | 121 deg C / 100% RH / 96 h | 77/0 | 3 |
| ESD HBM | JS-001 / A114 | >= 1000 V | 3/voltage | 1 |
| ESD CDM | JS-002 / C101 | >= 250 V | 3/voltage | 1 |
| Latch-up | JESD78 | Per technology | 3-6 | 1 |
| IOL | JESD22-A105 | 15k cycles | 77/0 | 3 |

**Notation "77/0"** = 77 units tested, 0 failures allowed. The number 77 derives from LTPD sampling tables: 77 units with zero failures gives 90% confidence that the lot defect rate is < 3%.

### 2.2 Pass/Fail Criteria

- **Electrical failure:** Any unit not meeting datasheet electrical test limits
- **Physical damage:** Any unit exhibiting external physical damage attributable to the environmental test
- **Zero failures** is the standard acceptance criterion for all tests in the baseline qualification plan
- Failures from mishandling, test equipment malfunction, or ESD may be discounted but must be documented

### 2.3 Qualification by Similarity (QBS)

JESD47 allows leveraging existing data from previously qualified devices if:
- Same silicon technology/platform
- Same package family and assembly site
- Differences are properly assessed and documented
- Reduces redundant testing significantly

### 2.4 DPPM Demonstration

For demonstrating specific defect rate targets:

| Target (DPPM) | Zero failures needed (60% conf) | One failure allowed |
|--------------|-------------------------------|-------------------|
| < 1000 | 307 units/lot x 3 lots | 673 units per lot |
| < 100 | 3070 units/lot x 3 lots | ~6730 per lot |

---

## 3. AEC-Q100 Automotive vs. JEDEC JESD47

For automotive applications, AEC-Q100 (Failure Mechanism Based Stress Test Qualification for Integrated Circuits) is the governing standard. It references JESD22 test methods but imposes stricter requirements.

### 3.1 Key Differences

| Aspect | JESD47 | AEC-Q100 |
|--------|--------|----------|
| Philosophy | Acceptable reliability under "normal" use | Zero defect, failure mechanism based |
| Lifetime target | ~10 years (15% duty) | 15+ years, full vehicle life |
| Temperature range | -40 to +85 deg C | -40 to +150 deg C (Grade 0, -40 to +150) |
| TC sample size | 77/lot | 77/lot x 3 lots |
| ELFR | Not mandatory | **Mandatory** (2400 units) |
| HBM ESD | Classification only | >= 2000 V |
| CDM ESD | Classification only | 750 V corner, 500 V others |
| Additional | -- | PPAP, DFMEA required |

### 3.2 AEC Temperature Grades

| Grade | Tmax (deg C) | Typical Application |
|-------|-------------|-------------------|
| 0 | +150 | Engine compartment |
| 1 | +135 | Underhood |
| 2 | +105 | Passenger cabin |
| 3 | +85 | Passenger cabin (low-power) |

---

## 4. Common Failure Modes in Advanced Packaging

### 4.1 Solder Joint Fatigue (Thermal Cycling)

**Mechanism:** CTE mismatch between die (~2.6 ppm/K), substrate (12-17 ppm/K for organic, ~3 ppm/K for silicon), and solder (21-25 ppm/K) generates cyclic shear strain during temperature excursions. Strain concentrates at solder joint corners where geometry changes abruptly.

**Key parameters:**
- **SAC305 solder:** Dominant material for Pb-free assemblies
- **Critical locations:** Corner balls of BGA/CSP arrays (furthest from neutral point, DNP effect)
- **Recrystallization:** Thermal cycling causes Sn grain recrystallization that weakens the joint
- **IMC growth:** Cu6Sn5 and Cu3Sn intermetallics grow at interfaces; thick IMC layers are brittle and crack preferentially

**Mitigation:**
- Bi doping in SAC alloys improves mechanical strength (hardness, creep, tensile)
- Underfill encapsulation distributes stress across the package
- Optimized standoff height
- Cu pillar bumps (replace full solder joints with Cu + small solder cap)

### 4.2 Electromigration (EM) in Bumps and RDL

**Mechanism:** High current density causes momentum transfer from conducting electrons to metal atoms (Cu, Sn, Ni), pushing atoms in the direction of electron flow. This creates:
- **Void formation** at the cathode (current inlet side)
- **Hillock/whisker formation** at the anode (current outlet side)
- **IMC polarity effect:** IMC grows faster at anode, slower (or dissolves) at cathode

**Key parameters:**
- **Current density threshold:** ~1e4 A/cm2 for solder; >1e5 A/cm2 for Cu
- **Temperature acceleration:** EM is strongly thermally activated (Ea ~0.8-1.2 eV for solder, ~1.0-1.5 eV for Cu)
- **Current crowding:** At trace-to-bump interfaces, current density can be 10x the average -- this is where voids nucleate
- **Blech length effect:** Short interconnects can be immortal if they satisfy a critical product (j x L) threshold

**Microbump-specific EM behavior (2024-2026 findings):**
- Void nucleation accounts for only ~5% of testing time; void propagation for ~95%
- Surface diffusion of Sn along Ni/Cu metallization emerges as a dominant failure mode in microbumps (<30 um), distinct from bulk diffusion in larger C4 bumps
- Symmetric Cu/SnAg/Cu structures have 42-117% longer failure times than asymmetric Cu/SnAg/Ni/Cu due to reduced thermomigration effects
- Full IMC transformation renders microbumps effectively "immortal" under some conditions (Ni3Sn4 has 45-57x higher critical product than solder)

**Mitigation:**
- Ni barrier layers (slow IMC formation)
- Cu pillar with solder cap (reduces EM-prone solder volume)
- Fine-grained Cu in RDL (grain boundary engineering)
- Optimized underfill to reduce stress on bumps

### 4.3 Stress-Induced Voiding (SIV) / Stress Migration (SM)

**Mechanism:** Thermal mismatch between Cu (CTE ~17 ppm/K) and surrounding low-k dielectrics (CTE ~3-5 ppm/K) creates tensile stress in Cu lines and vias. At temperatures near half the Cu melting point (Tm ~1083 deg C; SIV occurs at 150-300 deg C), vacancy migration along stress gradients leads to void nucleation and growth at via bottoms and sidewalls.

**Key characteristics:**
- **Stress-free temperature:** ~270 deg C for Cu BEOL
- **Void location:** Typically at the bottom of vias connecting wide Cu lines to narrow lines
- **Line width effect:** Wider lines generate higher stress on adjacent narrow lines
- **Temperature range:** 150-250 deg C (below Tm/2)

**TSV-specific SIV:** Cu TSVs (large Cu volumes) create mechanical stress in BEOL interconnect layers above the TSV. The Cu protrusion ("Cu pumping") during thermal cycling deforms the layers above it, causing SIV in vias located on top of TSVs.

**Mitigation:**
- Optimized TSV geometry (lower aspect ratio reduces stress)
- Annealing to stabilize Cu microstructure (grain growth reduces driving force)
- Keep-out zones (KOZ) around TSVs to protect active devices
- Barrier layer integrity

### 4.4 Delamination

**Mechanism:** Loss of adhesion at material interfaces due to CTE-mismatch stress during thermal cycling, moisture absorption, or contamination. Proceeds in a cascading sequence:

1. Initial separation at die edge/corner (highest stress concentration)
2. Lateral propagation of the delamination front
3. Cracking of brittle passivation/interlevel dielectrics
4. Metal deformation (bond pads, leads) as mold compound shifts
5. Ball bond lifting from pad
6. Moisture ingress leads to corrosion and catastrophic failure

**Critical interfaces:**
- Mold compound / die passivation (SiN, polyimide)
- Underfill / die backside
- Underfill / substrate solder mask
- Die attach / die pad
- Dielectric / dielectric (low-k/ULK layer interfaces in BEOL)
- Cu / dielectric (TSV sidewall, RDL)

**Adhesion enhancement strategies:**
- Mechanical anchoring (slots in bond pads, trench structures at die corners)
- Oxide-free metal adhesion layers (Cu, Pd)
- Plasma cleaning of die surfaces prior to molding
- Polyimide stress buffer layer (acts as compliant intermediate)
- Silane coupling agents in mold compound formulation

**Important nuance:** Delamination alone is not always a predictor of device failure. Some mold compound formulations contain additives that enhance reliability but promote controlled delamination. The failure mode must be assessed in context.

### 4.5 Die Cracking and Chipping

**Root causes:**
- **Blade dicing:** Mechanical saw induces microcracks, backside chipping (avg 24 um on thin wafers), sidewall chipping
- **Laser ablation dicing:** Thermal damage creates microcracks and porosity; die strength can be 290 MPa vs 829 MPa for blade dicing on top side
- **Die pick-up:** Needle ejection causes micro-indentations under the die, especially for ultra-thin dies (<50 um)
- **Wafer thinning:** Grinding damage remains a fracture initiation site

**Comparison of dicing methods:**

| Metric | Blade Dicing | Laser Ablation |
|--------|-------------|----------------|
| Kerf width | 27 um | 15.4 um |
| Top chipping | 6.2 um | 2.3 um |
| Backside chipping | 24.3 um | 13.8 um |
| Sidewall chipping | Present | Absent |
| Die strength (top) | 829 MPa | 290 MPa (optimized) |
| Die strength (bottom) | 824 MPa | 877 MPa (optimized) |
| Speed | ~25 min/wafer | 3-5 min/wafer |

**Mitigation:**
- Dicing Before Grinding (DBG) -- dice before thinning
- Wet/dry etching after dicing to remove sidewall damage
- Optimized pick-up mechanisms (heated ejector, thermal release tape)
- Die strength enhancement post-processing
- IR inspection for subsurface cracks

### 4.6 Corrosion and Moisture Ingress

**Mechanism:** Moisture penetrates through the epoxy mold compound (EMC), along leadframe interfaces, or through delamination gaps. Combined with ionic contaminants (chlorides, sulfates) and applied bias, this creates:

- **Galvanic corrosion:** Dissimilar metal couple (Cu/Al, Sn/Cu) accelerates anodic dissolution
- **Electrochemical migration (dendritic growth):** Metal ions migrate in the electric field and plate out as dendrites, causing shorts
- **Popcorning:** Absorbed moisture vaporizes during reflow, causing internal delamination and cracking

**Key factors:**
- Relative humidity: Exponential acceleration (Peck's model exponent N = 2-3 for RH)
- Temperature: Arrhenius acceleration (Ea ~0.8-1.2 eV for corrosion mechanisms)
- Bias voltage: Higher voltage = faster migration
- Contamination level: Cleanliness of assembly environment is critical

**Mitigation:**
- Moisture-sensitive device (MSD) handling per IPC/JEDEC J-STD-033
- Proper preconditioning (bake before reflow)
- Conformal coating for harsh environments
- Halogen-free mold compounds (reduce ionic contamination)
- Barrier layers (Ni, polyimide)

### 4.7 Whisker Growth

**Mechanism:** Compressive stress in tin or tin-alloy plated surfaces drives spontaneous extrusion of conductive filaments (whiskers) that can create electrical shorts.

**Stress sources:**
- Intermetallic formation (Cu6Sn5) at Sn-Cu interface creates volume shrinkage and compressive stress
- Galvanic corrosion of tin (Sn -> SnO2 has higher molar volume, generating stress)
- Thermal cycling CTE mismatch stress
- External mechanical stress (bending, clamping)

**Whisker characteristics:**
- Length: 10 um to >1 mm
- Diameter: 1-10 um
- Growth rate: 0.01-10 mm/year (highly variable)
- Incubation period: Days to years
- Current carrying capacity: Can melt at <100 mA

**Mitigation:**
- Ni under-plating (barrier layer)
- Amorphous Co-W barrier layers (200 nm shows superior suppression)
- Sn alloying (Sn-Pb, Sn-Bi)
- Annealing after plating (150 deg C, 1-2 h) to stabilize stress
- Conformal coating (Parylene, urethane) can contain whiskers
- Underfill on micro-bumps reduces whisker probability by up to 66%

---

## 5. 2.5D/3D Packaging Reliability Challenges

### 5.1 Through-Silicon Via (TSV) Reliability

**Thermal stress:**
- Cu CTE ~17 ppm/K vs. Si CTE ~2.8 ppm/K -- large mismatch
- Tensile hoop stress in Si around TSV generates "keep-out zones" (KOZ) of 10-50 um where transistor performance is affected
- Stress causes carrier mobility shifts in nearby transistors (piezoresistive effect)

**Cu pumping (protrusion):**
- Cu expands more than Si during thermal cycling, extruding from the TSV end
- Can be 10-100 nm of protrusion per cycle
- Deforms BEOL interconnect layers above the TSV
- Drives SIV in vias and cracking in dielectrics above TSVs

**Void and seam defects:**
- Incomplete Cu fill during electroplating creates centerline seams
- High aspect ratio TSVs (>10:1) are especially vulnerable
- Voids increase resistance and reduce mechanical strength
- Detection requires X-ray or SAM (optical inspection cannot reach buried TSVs)

**TSV reveal issues:**
- Backside reveal (grinding + CMP + dry etch) is the most challenging process step
- Edge defects during wafer thinning on glass carriers
- Overlay alignment between frontside and backside patterns after thinning

### 5.2 Microbump Reliability

**Scaling challenges:**
- As bump pitch shrinks from 100 um (C4) to 40 um (microbump) and below, solder volume decreases dramatically (6.3e5 um3 to ~1.6e3 um3)
- Current density increases proportionally (fixed current over smaller cross-section)
- Standoff height decreases, reducing strain compliance

**Distinct failure mechanisms vs. C4:**
- Surface diffusion of Sn emerges as dominant failure mode (not bulk diffusion)
- Full IMC transformation can occur (entire bump becomes Ni3Sn4)
- Underfill becomes more critical for stress distribution
- Non-wet opens and partial bonding are common defects

**Electromigration in microbumps:**
- Current crowding ratio approaches 1 (more uniform current distribution than C4)
- Void formation at IMC/solder interface still dominant
- Ni consumption rate determines lifetime at the cathode
- Symmetric Cu/SnAg/Cu outperforms asymmetric Cu/SnAg/Ni/Cu by 42-117%

### 5.3 Hybrid Bonding Reliability

Hybrid bonding (Cu/pad + SiO2 or SiCN dielectric) is the leading interconnect for fine-pitch (<10 um) 3D stacking. It replaces solder entirely with direct Cu-Cu and dielectric-dielectric bonds.

**Void types in hybrid bonding:**
1. Cu-Cu interfacial voids (from surface roughness)
2. Dielectric-dielectric voids (from CMP dielectric roll-off, ~5-6 nm)
3. Stress-induced cracks at dielectric-to-barrier interfaces
4. Galvanic corrosion voids at Cu/barrier interface during CMP
5. Misalignment-induced voids at Cu-to-dielectric bonding regions

**Reliability data (down to 0.81 um pitch):**
- Thermal Cycling: Stable after 2000 cycles (-65 to +150 deg C)
- HTS: Stable after 4000 h at 175 deg C
- SIV: Passed
- TDDB: High reliability
- EM: High reliability (fine-grained Cu has 3x better EM resistance)

**Thermal stress challenges:**
- Cu CTE ~17 ppm/K vs. SiO2 CTE ~0.5 ppm/K -- extreme mismatch at the bonding interface
- During post-bond anneal (250-350 deg C), Cu expands causing local stress
- Can propagate to adjacent TSVs and affect KOZ
- Residual stress shifts transistor performance

**Low temperature bonding advances (2025-2026):**
- Ti passivation layers enable void-free bonding at <=250 deg C
- Fine-grain Cu (<0.2 um) enables bonding at 150-180 deg C
- Self-formed Cu2O at misaligned Cu/SiO2 interfaces acts as natural Cu diffusion barrier
- Bond strength >30 MPa shear with fine-grain Cu (vs <15 MPa for coarse-grain)

**Thermal conductivity concern:**
- Damascene Cu micro-pads (5 um radius) show 40% lower thermal conductivity (160-220 W/mK vs. 315 W/mK bulk) due to nanocrystalline grains and interfacial voids

### 5.4 Interposer Warpage

**Material comparison:**

| Material | CTE (ppm/K) | Relative Warpage | Relative Stress |
|----------|-------------|-----------------|-----------------|
| Silicon | ~2.8 | Baseline | Baseline |
| Glass | ~3-8 (variable) | ~18% more than Si | ~27% higher than Si |
| Organic | ~12-17 | ~20% less than Si | Similar to Si |

**Warpage drivers:**
- Interposer thickness (thicker = less warpage, but higher stress)
- Die thickness (should be <= interposer thickness)
- Substrate CTE (lower CTE reduces mismatch)
- Passivation thickness (thicker = more warpage; ~50 um per +5 um passivation)
- Underfill modulus (high modulus = 69 GPa reduces C4 bump stress effectively)

**Process-dependent warpage:**
- Glass carrier CTE tuning (3.2 to 5.7 ppm/K) can reduce interposer warpage by ~100 um
- Organic interposer with embedded bridge dies: reducing bridge die and RDL thickness mitigates C4-level warpage

---

## 6. Glass Substrate (TGV) Reliability

Glass substrates with through-glass vias (TGVs) are an emerging alternative to silicon interposers, offering lower cost, larger panel sizes, and excellent electrical properties. Reliability challenges center on the Cu-glass interface.

### 6.1 CTE Mismatch Stress

| Material | CTE (ppm/K) |
|----------|-------------|
| Cu | ~17 |
| Glass (varies by type) | 3-8 |
| Fused silica | ~0.5 |
| Ceramic glass | ~3-4 |
| Si | ~2.8 |

The CTE mismatch between Cu and glass drives several failure mechanisms.

### 6.2 Cu Protrusion and Grain Coarsening

A 2026 Nature Microsystems study found after aging Cu TGVs at 250 deg C:

| Property | Initial | After 1008 h @ 250 deg C |
|----------|---------|------------------------|
| Cu hardness | 2.0-2.5 GPa | <0.5 GPa |
| Cu modulus | 110-130 GPa | 40-90 GPa |
| Grain size | 0.46 um | 1.86 um (300% growth in first 84 h) |
| Dislocation density | ~2e16 m-2 | ~4e15 m-2 |

- Annealing reduces residual stress but prolonged exposure generates tensile stress in glass -- causing microcracking
- Cu protrusion height increases with aging time but at decreasing rate
- A creep rate model achieved 87% accuracy for TGV creep prediction

### 6.3 Glass Cracking

A 2026 Microelectronic Engineering study (FEM + fracture mechanics) found:

- Energy Release Rate (ERR) scales **linearly** with via diameter
- ERR scales **quadratically** with temperature change
- Peak crack driving force occurs when crack length ~ 1/4 of via diameter
- **Fused silica** substrate produces highest stress (worst choice for reliability)
- **Ceramic glass** is the most reliable substrate material
- **Polymer buffer layers** (1 um) reduce maximum principal stress by ~40%

### 6.4 Metal-Glass Adhesion

- Poor adhesion between Cu and bare glass is a fundamental challenge
- **Adhesion layers:** Ti, TiW, Cr are commonly used as intermediate layers
- **Polymer buffer layers** (polyimide, BCB) provide both stress relief and improved adhesion
- Surface roughening of glass (via etching or laser treatment) improves mechanical interlocking
- **Chemical bonding:** Silane coupling agents can create covalent bonds between glass and metal

### 6.5 Summary of TGV Reliability Concerns

| Issue | Mechanism | Mitigation |
|-------|-----------|------------|
| Cu grain coarsening | High-temp aging, grain growth | Optimize electroplating + anneal |
| Cu protrusion | Creep-driven expansion | Creep models, lower temp processing |
| Glass cracking | Tensile stress accumulation | Buffer layers, ceramic glass |
| Interface delamination | Stress concentration | Adhesion layers (TiW, polymer) |
| Cu fatigue | Thermal cycling | Buffer layers, matched CTE glass |

---

## 7. Qualification Flow: Component to System

Semiconductor package qualification spans three levels, each testing different aspects of reliability.

### 7.1 Component-Level Qualification

Tests the package as a standalone unit (before board assembly).

**Scope:**
- Die and interconnect integrity
- Package construction analysis (PCA)
- Internal moisture content
- Wire bond strength / bump shear

**Key component-level tests:**
- Preconditioning (JESD22-A113)
- Temperature Cycling (A104)
- HTSL (A103)
- HAST / uHAST (A110/A118)
- Autoclave (A102)
- ESD (A114/A114A/C101)
- Latch-up (JESD78)
- HTOL (A108)

**Typical flow:**
```
[Wafer level test] → [Assembly] → [Preconditioning] → [Reliability stress]
→ [Electrical test] → [Failure analysis if fails] → [Qualification sign-off]
```

### 7.2 Board-Level Qualification

Tests the package mounted on the application PCB.

**Scope:**
- Solder joint reliability under field-like mechanical and thermal loads
- Interaction between package and PCB
- Assembly-related defects (head-in-pillow, non-wet opens, bridging)

**Key board-level tests:**
- Temperature Cycling on board (JESD22-A104)
- Drop Test (JESD22-B111)
- Cyclic Bending (JESD22-B113)
- Vibration (JESD22-A107)
- Mechanical Shock (JESD22-A112)
- Board-level temperature humidity bias

**Per JEP150 (Stress-Test-Driven Qualification of Assembled Surface Mount Components):**
- Defines failure mechanisms specific to board assembly
- Considers PCB design effects (pad size, solder mask, trace routing)
- Sample size often larger than component-level to capture statistical variation

### 7.3 System-Level Qualification

Tests the full assembled product.

**Scope:**
- System-level interactions (thermal management, EMI, mechanical housing)
- Power cycling and thermal management
- Vibration and shock in final system configuration
- Environmental exposure (dust, salt spray, altitude)

**Key system-level tests:**
- Power cycling (on-off cycling at system level)
- System-level thermal chamber cycling
- HALT (Highly Accelerated Life Test) -- combined thermal + vibration step stress
- HASS (Highly Accelerated Stress Screening) -- production screen
- Field trial / beta testing

### 7.4 Qualification Decision Flow

```
Component qualification passes?
  YES ---> Board-level qualification passes?
             YES ---> System-level qualification passes?
                        YES ---> Product release
                        NO  ---> System redesign
             NO  ---> Board/Package redesign
  NO  ---> Package redesign
```

**Qualification by Similarity (QBS):** A package qualified in one application can be reused in similar applications with minimal delta-qualification. QBS requires data showing that the delta (die shrink, minor substrate change, different test house) does not change the failure mechanisms.

---

## 8. Accelerated Life Testing & Failure Prediction Models

### 8.1 Arrhenius Model (Temperature Acceleration)

The most fundamental acceleration model for temperature-driven failure mechanisms (EM, corrosion, diffusion, oxide breakdown).

```
TF = A * exp(Ea / (k * T))
```

Where:
- TF = Time to Failure (hours)
- A = Scaling constant
- Ea = Activation energy (eV)
- k = Boltzmann constant (8.617e-5 eV/K)
- T = Absolute temperature (K)

**Typical activation energies:**

| Failure Mechanism | Ea (eV) |
|-------------------|---------|
| Electromigration (Cu) | 1.0 - 1.5 |
| Electromigration (solder) | 0.8 - 1.2 |
| Corrosion | 0.7 - 1.0 |
| TDDB (gate oxide) | 0.5 - 1.0 |
| Hot carrier injection | -0.1 to -0.2 (negative) |
| Intermetallic diffusion | 1.0 - 2.0 |
| Moisture-driven failure | 0.8 - 1.2 |

**Acceleration factor:** The ratio of life at use condition to life at test condition:
```
AF = exp[Ea/k * (1/T_use - 1/T_test)]
```

Example: Ea = 1.0 eV, T_use = 85 deg C (358 K), T_test = 125 deg C (398 K):
- AF = exp[1.0 / 8.617e-5 * (1/358 - 1/398)] = exp(11,604 * 0.000281) = exp(3.26) = ~26x
- Meaning: 1 hour at 125 deg C equals ~26 hours at 85 deg C use.

### 8.2 Coffin-Manson Model (Thermal Cycling Fatigue)

Describes solder joint fatigue life under thermal cycling.

**Basic form:**
```
Nf = C0 * (Delta_T)^(-n)
```

Where:
- Nf = Number of cycles to failure
- C0 = Material/geometry constant
- Delta_T = Temperature range (K)
- n = Coffin-Manson exponent

**Typical exponent values:**
- Ductile materials (solder): n = 1.2 - 2.5
- Hard metals: n = 1 - 2
- Brittle materials (IMC, dielectrics): n = 3 - 10

### 8.3 Norris-Landzberg Model (Coffin-Manson + Arrhenius)

Generalizes the Coffin-Manson model to include frequency and maximum temperature effects:

```
Nf = A * f^(-m) * (Delta_T)^(-n) * exp(Ea / (k * T_max))
```

Where:
- f = Cycling frequency (cycles/day)
- m = Frequency exponent (~0.3-0.5 for solder)
- T_max = Maximum temperature in the cycle (K)
- Other parameters as above

**Use case:** When comparing two thermal cycling conditions with different Delta_T, T_max, and frequency. Essential for converting accelerated test results to field use conditions.

### 8.4 Peck's Model (Temperature + Humidity Acceleration)

For moisture-driven failure mechanisms:

```
TF = A * (RH)^(-N) * exp(Ea / (k * T))
```

Where:
- RH = Relative humidity (decimal or %)
- N = Humidity exponent (typical: 2-3)

**Example values:**
- N = 2.7 (typical for corrosion mechanisms)
- Ea = 0.9 eV (for most corrosion-driven failures)

This model is the basis for HAST acceleration calculations. At 85 deg C/85% RH vs. 130 deg C/85% RH:
- AF ~ 20-50x (depends on Ea and N values)

### 8.5 Black's Model (Electromigration)

```
MTF = A * j^(-n) * exp(Ea / (k * T))
```

Where:
- MTF = Median time to failure
- j = Current density (A/cm2)
- n = Current density exponent (~1.5-2 for Cu, ~1 for solder)
- Ea = Activation energy (1.0-1.5 eV for Cu, 0.8-1.2 eV for solder)

### 8.6 Weibull Distribution (Failure Statistics)

Most reliability data is fit to a Weibull or lognormal distribution. The Weibull cumulative distribution function:

```
F(t) = 1 - exp[-(t / eta)^beta]
```

Where:
- eta = Characteristic life (63.2% fail point)
- beta = Shape parameter
  - beta < 1: Infant mortality
  - beta = 1: Random failures (constant hazard rate)
  - beta > 1: Wear-out failures

**Typical beta values for package failures:**
- Solder joint fatigue: beta = 2-4
- Electromigration: beta = 0.5-2
- Dielectric breakdown: beta = 5-20

### 8.7 Summary Table of Acceleration Models

| Model | Equation | Application | Key Parameters |
|-------|----------|-------------|----------------|
| Arrhenius | TF = A exp(Ea/kT) | Temp-driven mechanisms | Ea (activation energy) |
| Coffin-Manson | Nf = C (Delta_T)^(-n) | Thermal cycling fatigue | n = 1.2-2.5 (solder) |
| Norris-Landzberg | Nf = A f^(-m) (Delta_T)^(-n) exp(Ea/kTmax) | TC + temperature + frequency | f, delta_T, Tmax, Ea |
| Peck | TF = A RH^(-N) exp(Ea/kT) | Temp + humidity | N = 2-3, Ea = 0.8-1.0 eV |
| Black | MTF = A j^(-n) exp(Ea/kT) | Electromigration | j, n = 1-2, Ea = 0.8-1.5 |
| Weibull | F(t) = 1 - exp(-(t/eta)^beta) | Failure statistics | eta, beta |

### 8.8 HALT (Highly Accelerated Life Test)

A discovery tool (not a pass/fail qualification) that applies step-stress to find design and process margins:

- **Thermal step stress:** Start at 20 deg C, step to -10, -30, -50... until failure; repeat on hot side
- **Vibration step stress:** Start at 5 Grms, step up to 20-50 Grms
- **Combined environment:** Thermal + vibration simultaneously

**Objective:** Find the "operating margin" and "destruct margin" -- the difference between specification limits and fundamental technology limits.

---

## References & Further Reading

### JEDEC Standards
- JESD22-A104: Temperature Cycling
- JESD22-A106: Thermal Shock
- JESD22-A108: Temperature, Bias, and Operating Life
- JESD22-A110: Biased HAST
- JESD22-A118: Unbiased HAST
- JESD22-A103: High Temperature Storage Life
- JESD22-A113: Preconditioning
- JESD22-A121: Tin Whisker Test Method
- JESD22-B111: Board Level Drop Test
- JESD22-B113: Board Level Cyclic Bend
- JESD47: Stress-Test-Driven Qualification of ICs
- JEP150: Stress-Test-Driven Qualification of Assembled SMT Components
- JESD201: Environmental Acceptance Requirements for Tin Whiskers

### Key Papers
1. "Reliability modeling of SAC305 solder joints at different testing temperatures and load levels using the Arrhenius model" -- Scientific Reports 13, 2493 (2023)
2. "A new failure mechanism of electromigration by surface diffusion of Sn on Ni and Cu metallization in microbumps" -- Scientific Reports 8, 5935 (2018)
3. "Long-term high-temperature aging mechanism of copper-metallized through-glass vias" -- Microsystems & Nanoengineering (2026)
4. "Effect of thermally-induced cracks on the mechanical and electrical behaviour of TGVs" -- Microelectronic Engineering (2026)
5. "Void-free Cu/dielectric hybrid bonding at low-temperature enabled by ultrathin metal passivation engineering" -- Communications Engineering (2026)
6. "Impact of Cu TSVs on BEOL metal and dielectric reliability" -- IEEE IRPS (2014)
7. "Investigation on electromigration failure behavior of SAC305/SnPb micro-hybrid solder joints" -- Materials Letters 377 (2024)
8. "Comparison of the electromigration behaviors between micro-bumps and C4 solder bumps" -- IEEE ECTC
9. "Reliability of the hybrid bonding level using submicrometric bonding pads" -- Microelectronics Reliability (2023)
10. "Sequential Versus Concurrent Effects in Combined Stress Solder Joint Reliability" -- Journal of Electronic Packaging (Dec 2024)

### Books
- "Reliability of Semiconductor Packages" by Aris Christou
- "Solder Joint Reliability: Theory and Applications" by John H. Lau
- "Semiconductor Packaging: Materials, Reliability and Testing" by Haleh Ardebili, Michael G. Pecht
- "3D Microelectronic Packaging: From Architectures to Applications" by Yan Li, Deepak Goyal

### Downloads
See `./downloads/` directory for PDFs of key papers and the TI JESD47 summary.
