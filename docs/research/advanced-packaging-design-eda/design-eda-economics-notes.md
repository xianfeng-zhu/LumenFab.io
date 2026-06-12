# Advanced Packaging: Design EDA, Cost Modeling, and Industry Economics

> Research notes compiled June 2026.
> This is a living document for the LumenFab.io learning/research repository.

---

## Table of Contents

1. [Package Design Flow and EDA Tools](#1-package-design-flow-and-eda-tools)
2. [Cost Modeling in Semiconductor Packaging](#2-cost-modeling-in-semiconductor-packaging)
3. [Advanced Packaging Market and Industry Landscape](#3-advanced-packaging-market-and-industry-landscape)
4. [Books and Learning Resources](#4-books-and-learning-resources)

---

## 1. Package Design Flow and EDA Tools

### 1.1 Overview: How Packaging Design Differs from PCB and IC Design

Packaging design occupies a unique middle ground between IC design and PCB design, inheriting challenges from both domains while introducing its own constraints.

| Aspect | IC Design | Package Design | PCB Design |
|--------|-----------|----------------|------------|
| **Feature size** | nm-scale (3-7nm) | um-scale (2-20um RDL, 20-130um bumps) | mm-scale (75-150um traces) |
| **Layer count** | 10-20+ metal layers | 2-15+ (substrate + RDL) | 4-30+ layers |
| **Design tools** | Custom EDA (Virtuoso, Innovus) | Specialized package EDA (APD, SiP Layout) | PCB EDA (Allegro, Altium, PADS) |
| **Foundry/OSAT relationship** | In-house or foundry PDK | Requires OSAT ADK/PDK | Board house specs |
| **Output format** | GDSII | GDSII, ODB++, Gerber | Gerber, ODB++, IPC-2581 |
| **SI/PI analysis** | Full-chip extraction | Chip-package co-analysis | Board-level extraction |
| **Yield modeling** | Fab defect density | Compound multi-die yield | Assembly yield only |

**Key differentiating factors:**
- **Co-design**: Package design requires simultaneous optimization of die I/O placement, interposer routing, and substrate stack-up -- a tighter coupling than PCB design.
- **Heterogeneous integration**: Multiple dies from different process nodes (e.g., N3 + N5 + N12), different vendors, and different materials must work together in a single package.
- **Multiphysics coupling**: Thermal gradients from stacked dies affect electrical performance; mechanical stress from CTE mismatch affects reliability. These interactions are far more severe than in PCB design.

### 1.2 Standard Package Design Flow: From Netlist to GDSII/ODB++

The typical package design flow proceeds through these stages:

```
Netlist / Die Data (GDS, LEF/DEF, Verilog)
        |
        v
[1] System Planning & Partitioning
    - Die placement, stack ordering
    - Bump/TSV budgeting
    - Interconnect architecture (UCIe, HBM, SerDes)
        |
        v
[2] Substrate / Interposer Layout
    - Layer stack-up definition
    - Constraint-driven routing
    - Power delivery network design
        |
        v
[3] Physical Verification
    - DRC (design rule checking)
    - LVS (layout vs. schematic)
    - 3D stack verification
        |
        v
[4] SI/PI/Thermal Analysis
    - Signal integrity (eye diagram, crosstalk)
    - Power integrity (IR drop, decoupling)
    - Thermal simulation
        |
        v
[5] Manufacturing Output
    - GDSII (for silicon interposer/TSV layers)
    - ODB++ (for substrate fabrication)
    - Gerber 274X (for substrate/PCB)
    - Assembly drawings, bond diagrams
```

### 1.3 Major EDA Vendors for Packaging

#### Cadence -- Allegro X Advanced Package Designer + SiP Layout + OrbitIO

Cadence's packaging ecosystem is the most comprehensive in the industry:

- **Allegro X Advanced Package Designer (APD)**: The core package layout tool. Handles wire bonding, flip-chip, and 2.5D/3D interposer designs. Outputs GDSII, ODB++, Gerber, DXF.
- **SiP Layout Option**: Extends APD for complex System-in-Package designs. Supports multiple die technologies in one package, design variants for different die combinations.
- **Integrity 3D-IC Platform**: High-capacity unified platform for multi-chiplet designs. Built on Innovus infrastructure with native 3Dblox support.
- **OrbitIO Interconnect Designer**: Newer tool focused on die-to-die interconnect planning and optimization for chiplet-based designs. Handles UCIe, BoW, and proprietary interfaces.
- **Sigrity / Clarity 3D Solver**: SI/PI/EM analysis integrated into the package flow.
- **Celsius Thermal Solver**: Thermal analysis for 3D stacks.

**Reference flows**: Cadence's AI-driven flow was adopted as Intel's advanced packaging reference flow for EMIB (2024). Certified for TSMC CoWoS, InFO, SoIC.

#### Synopsys -- 3DIC Compiler

Positioned as "the industry's only unified exploration-to-signoff platform for 2.5D and 3D multi-die designs":

- **Single environment** spanning feasibility exploration through signoff.
- **Automated high-speed die-to-die routing** for UCIe and HBM.
- **Integrated multiphysics analysis** via RedHawk-SC, RedHawk-SC Electrothermal, and HFSS-IC (now part of Synopsys following the July 2025 Ansys acquisition close).
- **AI-driven optimization** via Synopsys 3DSO.ai.
- **Foundry certifications**: TSMC, Samsung, Intel Foundry, GlobalFoundries, Rapidus, UMC.
- **3Dblox support** for standardized die stacking definition.
- **Reference flow** for Intel Foundry EMIB technology (June 2024).

**Notable result (June 2025)**: Successful tape-out with Samsung I-CubeS 2.5D, showing 6% improvement in worst-case eye-opening, HBM routing reduced to 4 hours.

#### Siemens EDA -- Xpedition Package Design + Calibre

- **Xpedition Package Designer**: Substrate and IC package design with constraint management.
- **Innovator3D IC**: Digital twin approach for heterogeneous integration, unified data model across all design domains.
- **Calibre nmPlatform**: DRC, LVS, 3D thermal analysis for advanced packages.
- **Support for EMIB**: Intel EMIB reference flow driven by Intel's Package Assembly Design Kit (PADK).
- **Heterogeneous Integration eBook series**: Covers a 10-step methodology from digital foundation through signoff.

#### Ansys -- Multiphysics Simulation for Packaging

Ansys tools (now part of Synopsys as of July 2025) are the gold standard for packaging simulation:

- **RedHawk-SC Electrothermal**: Chip-package co-simulation for power integrity (IR drop, EM), thermal integrity, and electrothermal coupling. Cloud-native SeaScape platform enables elastic computing. Foundry-certified for TSMC CoWoS/InFO/SoIC, Samsung X-Cube, Intel EMIB.
- **HFSS-IC / HFSS 3D Layout**: Full-wave EM simulation for signal integrity, crosstalk, and S-parameter extraction in packages.
- **Icepak**: Thermal management simulation for package-level and system-level cooling design.
- **Mechanical**: Structural simulation for thermal-mechanical stress, warpage, and reliability (CTE mismatch analysis).
- **optiSLang**: Design optimization and sensitivity analysis.

### 1.4 Design Challenges in Heterogeneous Integration

#### Data Fragmentation
Traditional die-by-die design uses disparate formats spreadsheets, LEF/DEF, GDS, Verilog RTL, CSV files. Version mismatches compound across integration. Industry push toward **3Dblox** standard data format for unified stack definition.

#### Connectivity Management
Modern designs exceed **500,000+ bumps** and millions of connections with hybrid bonding. Spreadsheet-based management is error-prone. Language-based netlists (Verilog RTL) replacing spreadsheets for die-to-die connections.

#### Multiphysics Coupling
- **Thermal**: Stacked dies create hotspots and large thermal gradients. Hundreds of watts in compact form factors.
- **Power integrity**: Power delivery to bridges and across stacked dies.
- **Signal integrity**: High-speed signaling across die boundaries introduces noise, crosstalk, timing challenges.
- **Electromigration**: Reliability concerns from current density in micro-bumps and TSVs.
- **Mechanical stress**: CTE mismatches in heterogeneous materials.

#### Lack of Standardized Flows
No standard EDA flow exists that can design, analyze, and optimize complete heterogeneous 2.5D/3D chiplet-based systems. IC verification tools insufficient for package-level verification; require LVS across dies, 3D-stack DRC, cross-die RC extraction.

#### Industry Shift: From DTCO to STCO
The industry is moving from **Design-Technology Co-Optimization (DTCO)** to **System-Technology Co-Optimization (STCO)**, where architecture, chiplet interconnects, packaging thermal-electrical performance, board-level signal integrity, and system cooling are all optimized together early in the design cycle. This drives EDA vendor acquisitions (Synopsys+Ansys, Siemens+Altair, Cadence+BETA CAE).

---

## 2. Cost Modeling in Semiconductor Packaging

### 2.1 Cost Breakdown of Advanced Packages

#### CoWoS Cost Structure (approximate)

| Cost Component | Share of Total | Key Drivers |
|----------------|:--------------:|-------------|
| Silicon interposer + TSVs | 30-40% | Passive silicon wafer, TSV etch/fill/CMP, BEOL processing |
| ABF substrate (package carrier) | ~40% | Multi-layer (14-26 layers), fine L/S, large body size |
| Assembly & bonding | 15-20% | Micro-bump bonding, underfill, reflow, molding |
| Test & burn-in | 5-10% | KGD testing, final package test, burn-in |

**CoWoS variants cost ordering (highest to lowest):**
CoWoS-S (full silicon interposer) > CoWoS-L (silicon + RDL hybrid) > CoWoS-R (RDL-only)

#### Silicon Interposer Cost Drivers
- Full passive silicon wafer with TSVs requires FEOL-equivalent processing.
- Reticle limit: max ~4-5x reticle size forces stitching for larger packages.
- Yield loss on interposer itself (~5-15%) compounds with die and assembly yields.

#### Assembly & Test Cost Drivers
- Known Good Die (KGD) testing adds significant cost but prevents compound yield loss.
- Micro-bump bonding at <50um pitch requires precision alignment tools.
- Final test complexity scales with die count and interface count.

### 2.2 CoWoS vs. CoPoS Cost Comparison

CoPoS (Chip-on-Panel-on-Substrate) is TSMC's panel-level evolution of CoWoS, announced in 2025.

| Factor | CoWoS (baseline) | CoPoS | CoWoP |
|--------|:-----------------:|:-----:|:-----:|
| **Relative cost** | Baseline (highest) | -20 to -30% | -40 to -50% |
| **Substrate cost share** | ~40% of total | -20% substrate unit cost | Substrate eliminated entirely |
| **Area utilization** | ~85% (round wafer) | >95% (square panel) | >95% |
| **Max package size** | ~2,500 mm^2 | 310x310mm to 700x700mm | 450x450mm |
| **Status** | Volume production | Pilot line 2026, HVM 2028-2029 | NVIDIA testing, not near-term |
| **Applications** | H100/B200/GB200 AI GPUs | Next-gen AI, HBM4 | Edge AI, automotive, optics |

**Key insight**: CoWoS substrate costs exceed $100 per unit for large AI packages, accounting for over 50% of total packaging cost. This drives the industry toward panel-level alternatives.

### 2.3 Fan-Out vs. Silicon Interposer Cost Trade-Offs

| Factor | Silicon Interposer (2.5D) | Fan-Out WLP | Fan-Out PLP |
|--------|:-------------------------:|:-----------:|:-----------:|
| **Relative cost** | Highest | Moderate | Lowest |
| **Min L/S** | <2 um | 2-5 um | 3-8 um |
| **Max package size** | Reticle-limited | ~30x30mm | 300x300mm+ |
| **Throughput** | 1x (wafer) | ~1.5x (wafer) | ~3-5x (panel) |
| **Cost savings vs. Si int.** | -- | ~40% | ~60% |
| **Thickness** | Baseline | ~40% thinner | ~40% thinner |
| **Best for** | HPC, AI, highest bandwidth | Mobile, IoT, mid-range | Large dies, high volume |

**Decision framework:**
- Choose **silicon interposer** when interconnect density exceeds 2um L/S -- no other technology matches.
- Choose **FOWLP** for cost-sensitive applications that still need fine RDL (2-5um).
- Choose **FOPLP** for large packages in high volume where area utilization matters.
- Choose **localized Si bridges (EMIB)** as a middle ground -- silicon only where needed.

### 2.4 Panel-Level Packaging Economics

#### Area Utilization
- Round 300mm wafer: ~86% surface utilization for 8mm dies.
- Rectangular panel (e.g., 610x457mm): ~94% utilization.
- TSMC's rectangular substrate (515x510mm): triples usable area vs. 12-inch wafer.

#### Throughput
- Panel (610x457mm) has ~4x area of 300mm wafer (2,788 cm^2 vs. 707 cm^2).
- ~2x throughput advantage (dies/hour) due to fewer substrate exchanges.
- Panel-based lithography can reduce cost per die by up to 40% compared to wafer-based.

#### Cost Savings vs. FOWLP
- FOPLP achieves 20-30% cost savings over FOWLP (Yole Group).
- Per-unit cost reductions exceeding 15% demonstrated for panel-level QFN.
- Even intermediate 310x310mm panels provide meaningful cost improvements for large AI packages.

#### Key Challenges
- **Yield**: Die shift and warpage remain the biggest barriers.
- **Capital**: Scaling FOPLP lines can exceed $100-200M, requiring high utilization for ROI.
- **Standardization**: Panel sizes range from 400x500mm to 650x650mm, adding equipment cost.
- **Hybrid bonding at panel scale**: Particle contamination destroys yields; OSAT cleanrooms less clean than fabs.

#### Market
- PLP market estimated at $0.35B in 2025, projected to reach $1.97B by 2030 (CAGR 41%).
- FOPLP for advanced nodes (AI, 5G, HPC) expected to gain traction from 2026-2027.

### 2.5 Yield Modeling in Multi-Die Packages (Compound Yield)

The fundamental formula governing multi-die packaging economics:

```
Package Yield = Y_die1 x Y_die2 x ... x Y_dieN x Y_interposer x Y_assembly
```

This **multiplicative** nature causes yield to drop rapidly as die count increases.

#### KGD (Known Good Die) Economics

The critical tradeoff:
- Higher KGD probability -> higher die cost (burn-in, test, carrier costs).
- Lower KGD probability -> more package failures -> higher effective cost per good package.

**Key findings from literature (H.K. Charles, IEEE; 2001):**
- Cost minimum exists in KGD probability space -- optimal KGD level per chip type.
- First repair provides the largest yield/cost improvement.
- Repair most valuable when KGD probability < 0.95.
- Yield amplification risk in 3D-ICs: rework after stacking is extremely limited.

**TSMC benchmark**: CoWoS at 5.5-reticle size achieved >98% yields (announced 2026 Taiwan Technology Symposium).

### 2.6 Total Cost of Ownership (TCO) Framework

A complete TCO model for advanced packaging should capture:

1. **Die costs**: Wafer cost, dicing, KGD testing, burn-in.
2. **Interposer costs**: Silicon or organic, TSV processing, RDL layers.
3. **Substrate costs**: ABF/BT layers, body size, layer count, yield.
4. **Assembly costs**: Bonding (TCB, reflow), underfill, molding.
5. **Test costs**: Pre-bond test, mid-bond test, final test, burn-in.
6. **Yield loss costs**: Compound yield across all steps.
7. **Reliability costs**: Warranty returns, field failures.
8. **Capital depreciation**: Equipment cost per unit.

**Rule of thumb for AI packages**: Advanced packaging now accounts for 15-20% of total semiconductor build cost for AI chips (vs. 5-8% for mainstream CPUs).

---

## 3. Advanced Packaging Market and Industry Landscape

### 3.1 Market Size and Growth

| Metric | Value | Source |
|--------|-------|--------|
| 2024 market | ~$46B (+19% YoY) | Yole Group |
| 2025 estimate | ~$51.6B | IDC |
| 2030 projection | $79.4B (CAGR 9.5%) | Yole Group |
| 2031 projection | $99.4B (CAGR 11.53%) | GII/Mordor Intelligence |

#### Growth by Platform Segment

| Platform | Growth Rate | Key Drivers |
|----------|:-----------:|-------------|
| 2.5D interposer (CoWoS, EMIB) | >30% CAGR | AI GPUs, HBM, data center ASICs |
| 3D stacking (SoIC, hybrid bonding) | >25% CAGR | HBM4, logic-on-logic stacking |
| Fan-Out (WLP, PLP) | ~15% CAGR | Mobile, IoT, automotive |
| Advanced wire bond / flip-chip | Low single-digit | Mature, commoditized |
| Embedded die (e.g., Intel EMIB) | >20% CAGR | Chiplets, AI accelerators |

### 3.2 Market Share: Foundries vs. OSATs vs. IDMs

2024 advanced packaging revenue rankings (Yole Group):

| Rank | Company | Type | Est. 2024 Revenue | Market Position |
|:----:|---------|:----:|:-----------------:|:---------------:|
| 1 | Intel | IDM | ~$6.5B | Largest overall; broad portfolio (EMIB, Foveros) |
| 2 | Amkor | OSAT | ~$5.3B | Leading pure-play OSAT |
| 3 | ASE (incl. SPIL) | OSAT | ~$5.3B | #1 OSAT by units; CoWoP development with NVIDIA |
| 4 | TSMC | Foundry | ~$5.0B | Fastest-growing; CoWoS/InFO/SoIC leader |
| 5 | Sony | IDM | ~$3.7B | Image sensor packaging |
| 6 | Samsung | IDM | ~$3.1B | I-Cube, SAINT, HBM packaging |
| 7 | JCET | OSAT | ~$2.7B | Leading China OSAT |
| 8 | TFME (Tongfu) | OSAT | ~$2.0B | Flip-chip, WLP, FOPLP |

**By business model (IDC, 2025):**
- OSATs (ASE, Amkor, JCET): ~59% of market share.
- Foundry/IDM (TSMC, Samsung, Intel): ~39%, projected to grow to 42% by 2029.

### 3.3 Capacity Expansion Plans

#### TSMC CoWoS Capacity
- End-2024: ~35K wafers/month.
- End-2026: 100-130K wafers/month (~3-4x increase).
- 2027: ~122K/month (1.47M/year).
- New facilities: AP8 (Southern Taiwan), AP7 (Chiayi) -- equipment move-in started late 2025.
- Technology: shifting from CoWoS-S to CoWoS-L (lower cost, larger packages).
- 14-reticle-size CoWoS supporting 20 HBM chips planned for 2028.
- NVIDIA has booked ~60% of CoWoS capacity through 2026.

#### Intel
- EMIB-T yields reached ~90%.
- EMIB + Glass Substrate samples shown (78x77mm, 45um micro-bump pitch).
- 18A wafer commitments to foundry customers start 2026; HVM ramps 2026-2027.
- $25B Terafab project targeting terawatt AI compute.

#### Samsung
- SAINT technology (S/D/L) for 3D stacking.
- SoP (System on Panel) using 415x510mm panels.
- $73B semiconductor investment announced for 2026.
- Secured $16.5B AI chip foundry order from Tesla.
- 2nm yields reportedly in mid-50% range.

#### ASE (OSAT)
- Absorbing TSMC overflow orders.
- CoWoS capacity projected to 20-25K wafers/month by end-2025 (3x increase).
- Subsidiary SPIL leading NVIDIA's CoWoP development.

#### China
- At least 7 new advanced packaging fabs under construction.
- JCET: $1.5B domestic AP investment.
- HT-Tech Nanjing: ~$1.4B second-phase expansion.
- TFME: ~$1.0B advanced packaging project (completion by 2029).

### 3.4 Advanced IC Substrate Market

The ABF substrate market is the largest cost component of advanced packages and remains supply-constrained.

| Player | HQ | Market Share | Focus |
|--------|:--:|:------------:|-------|
| Unimicron | Taiwan | ~22% | Largest globally; dominant in ASIC AI substrates |
| Ibiden | Japan | Major | Leader in GPU AI substrates (51% share); expanding 40% by 2027 |
| Nan Ya PCB | Taiwan | Major | ASIC AI server substrates |
| AT&S | Austria | Major | Only European player; Kulim, Malaysia expansion |
| Shinko | Japan | Major | High-end substrates; new Chikuma plant |

**Market size**: ABF substrate market ~$5.3-5.5B in 2024, projected $9.5-10.6B by 2031 (CAGR 9.8-10.7%).

**Supply dynamics (2025):**
- T-Glass core material shortage: lead times extended from 4-6 weeks to 25+ weeks.
- ABF resin supply gap: ~20% demand-supply gap (Ajinomoto).
- Spot premiums up to 25% over 2024 contract levels.
- Top 5 manufacturers command ~74% of global supply.
- High-end ABF (AI GPU/ASIC) remains tight; mid/low-end faces pricing pressure.

**Divergent analyst views**: Goldman Sachs (May 2025) predicts ABF oversupply through 1H 2026, with 7% market surplus in 2025, due to AI GPU shipments below expectations and aggressive capacity expansions coming online.

### 3.5 Glass Substrate Adoption Timeline

Glass core substrates are the leading candidate to replace organic (ABF) substrates for advanced packaging:

| Company | Pilot | HVM Target | Key Details |
|---------|:-----:|:----------:|-------------|
| Intel | 2025 | 2026-2027 | First glass-core commercial CPU (Xeon 6, 2026); 10x interconnect density target |
| TSMC (CoPoS) | 2026 | 2028-2029 | 310x310mm panel format; NVIDIA as strategic partner |
| Samsung Electro-Mechanics | 2026 | 2027 | Sampling to Apple; 510x515mm panels; <2um via position accuracy |
| SKC/Absolics | 2025 | 2026-2027 | Most aggressive investment ($1.2T KRW); 25% thickness reduction, 30% power efficiency gain |
| BOE (China) | 2025 | 2027-2029 | Pilot line; 2027 initial production, 2029 scale-up |

**Key insight**: Glass offers tunable CTE (matching silicon), better dimensional stability for large panels, and potential for panel-scale manufacturing. TGV (Through-Glass Via) technology at high aspect ratio (100:1 demonstrated) is the critical process challenge.

### 3.6 Key Industry Trends

1. **AI is the demand driver**: AI accelerators consume majority of advanced packaging capacity. Packaging, not silicon, is the bottleneck for AI chip supply.
2. **CoWoS remains sold out through 2026**: Capacity constraints are the primary limiter for AI chip supply, not wafer fabrication.
3. **Panel-level transition accelerating**: "Square vs. round" economics driving FOPLP and CoPoS adoption.
4. **Substrate shortage structural**: Despite analyst oversupply concerns, high-end ABF remains tight due to T-Glass and ABF resin constraints.
5. **Glass substrates entering commercialization**: Intel first to market with glass-core products in 2026.
6. **Memory-centric packaging**: HBM4 requires advanced through-silicon via and hybrid bonding at >16-die stacks.
7. **EDA consolidation**: Synopsys+Ansys ($35B), Siemens+Altair ($10B), Cadence+BETA CAE ($1.24B) + Hexagon Design/Engineering (~$3B) reshape the multi-physics simulation landscape.

---

## 4. Books and Learning Resources

### 4.1 Recommended Textbooks

| Title | Author(s) | Year | Publisher | Focus |
|-------|-----------|:----:|-----------|-------|
| **Semiconductor Advanced Packaging** | John H. Lau | 2021 | Springer | Comprehensive: design, materials, process, reliability. Best single-volume reference. |
| **Introduction to Microelectronics Advanced Packaging Assurance** | Asadizanjani, Kottur, Dalir | 2025 | Springer | Newest (2025): IC packaging tech, bonding, test, reliability, quantum/wearable packaging. |
| **Advanced Electronic Packaging** | W. Brown (ed.) | -- | Wiley | Electrical/thermal/mechanical design, CAD, MCM case studies, cost analysis. |
| **3D Microelectronic Packaging: From Fundamentals to Applications** | P. Garrou, C. Bower, P. Ramm | 2017 | Springer | Deep dive on 3D integration, TSVs, hybrid bonding. |
| **Fan-Out Wafer-Level Packaging** | John H. Lau | 2018 | Springer | Definitive text on FOWLP technology and processes. |
| **Heterogeneous Integrations** | John H. Lau | 2019 | Springer | Focus on chiplets, 2.5D/3D, system-in-package. |

### 4.2 Key Review Papers

- **"Recent Advances and Trends in Advanced Packaging"** -- J.H. Lau, *IEEE Transactions on CPMT*, 2022. Comprehensive survey of packaging technologies.
- **"Heterogeneous Integration Technologies for AI Workloads"** -- *Proceedings of the IEEE*, Vol. 112, 2024. Detailed comparison of MCMs, FOWLP, interposers, bridges, 3D integration. Covers Cerebras, NVIDIA, AMD, Intel, TSMC.
- **"System Technology Co-Optimization for Advanced Integration"** -- Review article on STCO approaches for chiplet-based systems.
- **IEEE Heterogeneous Integration Roadmap (HIR)** -- Annual roadmap from IEEE EPS covering 23 Technical Working Groups across 6 application areas. Key resource for interconnect scaling targets (hybrid bonding: 2um -> 0.25um pitch, TSV: 10x100um -> 1x15um).
- **U.S. Microelectronics Research & Heterogeneous Integration Enablers for Packaging (MRHIEP)** -- Final report, SEMI, 2024. U.S. CHIPS Act-driven advanced packaging manufacturing blueprint.

### 4.3 Conferences and Proceedings

| Conference | Full Name | Frequency | Location (Typical) | Key Topics |
|-----------|-----------|:---------:|:------------------:|------------|
| **ECTC** | IEEE Electronic Components and Technology Conference | Annual | US (rotating) | Premier packaging conference. 2,500+ attendees, 390+ papers (2025). |
| **EPTC** | IEEE Electronics Packaging Technology Conference | Annual | Singapore | Asia-Pacific focus. Strong on manufacturing and assembly. |
| **IMPACT** | International Microsystems, Packaging, Assembly and Circuits Technology Conference | Annual | Taiwan | Taiwanese packaging ecosystem focus. |
| **IWLPC** | International Wafer-Level Packaging Conference | Annual | San Jose, CA | Silicon wafer-level and panel-level packaging focus. |
| **IEEE EPEPS** | Electrical Performance of Electronic Packaging and Systems | Annual | US | SI/PI/EM focus for packaging. |
| **SEMICON** | SEMI (various: West, Taiwan, Japan, Europa) | Multiple | Global | Industry trade show with packaging focus tracks. |

**Notable ECTC 2025 statistics**: Record 2,518 attendees, 775 abstracts submitted, 390 papers, 138 exhibitors. Key topics: hybrid bonding, co-packaged optics, glass substrates, backside power delivery thermal management, chiplet integration.

### 4.4 Online Courses

| Provider | Course | Instructor | Hours | Description |
|----------|--------|------------|:-----:|-------------|
| **Coursera (Arizona State University)** | Advanced Semiconductor Packaging | Ravi Mahajan (Intel Fellow) | ~15 | 6 modules on heterogeneous integration, MCPs, co-packaged optics, thermal management. Free to audit. |
| **Coursera (ASU)** | Semiconductor Packaging (specialization) | Various | Multi-course | Broader series covering fundamentals to advanced packaging. |
| **SEMI University** | Advanced Packaging Modules | Industry experts | Various | Industry-focused technical training. |
| **IEEE** | Short courses on Heterogeneous Integration | Various | Various | Professional-level, often at conferences. |

### 4.5 Key Industry Reports (Paid)

| Publisher | Report | Cost (Approx.) |
|-----------|--------|:--------------:|
| Yole Group | Status of the Advanced Packaging Industry 2025 | ~$7,500+ |
| Yole Group | Advanced Semiconductor Packaging 2025-2035 | ~$7,500+ |
| IDTechEx | Advanced Semiconductor Packaging 2025-2035 | ~$6,000+ |
| IDC | Worldwide Semiconductor Advanced Packaging Forecast | ~$5,000+ |
| Mordor/GII | Advanced Packaging Market Analysis | ~$3,000+ |

---

## References

Sources consulted for this research:

- Cadence Integrity 3D-IC Platform documentation
- Synopsys 3DIC Compiler product page
- Siemens EDA heterogeneous integration blog series
- Ansys RedHawk-SC Electrothermal datasheet
- Yole Group, "Status of the Advanced Packaging Industry 2025"
- IDC, "Worldwide Semiconductor Advanced Packaging Market Forecast 2025-2029"
- IEEE Heterogeneous Integration Roadmap (HIR) 2025
- IEEE ECTC 2025 Conference Proceedings
- Semiconductor Engineering (semiengineering.com): FOPLP, panel-level packaging
- Goldman Sachs ABF substrate market analysis (May 2025)
- Counterpoint Research, TSMC foundry 2.0 analysis
- TrendForce, CoWoS capacity tracking
- Industry analysis from Design & Reuse, EE Times, Forbes
- H.K. Charles, "Tradeoffs in Multichip Module Yield and Cost" (IEEE, 2001)
- John H. Lau, "Semiconductor Advanced Packaging" (Springer, 2021)
- MKS Instruments, "Process Technologies in Advanced Packaging Handbook" (2025)
