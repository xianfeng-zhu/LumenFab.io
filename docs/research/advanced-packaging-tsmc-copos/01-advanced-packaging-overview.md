# Advanced Packaging Overview — Comprehensive Research Notes

> Research compiled: 2026-06-12
> Part of the LumenFab.io research library for optical interconnects and semiconductor photonics packaging
> Focus: semiconductor advanced packaging technologies, industry landscape, and relevance to co-packaged optics (CPO) and silicon photonics

---

## 1. Executive Summary

Advanced semiconductor packaging has emerged as the primary driver of system-level performance improvement in the post-Moore era. As traditional transistor scaling slows, packaging innovations -- 2.5D/3D integration, fan-out wafer-level packaging (FOWLP), chiplet architectures, and hybrid bonding -- deliver density, bandwidth, and power efficiency gains that extend the benefits of semiconductor scaling.

The advanced packaging market reached **$46 billion in 2024** (up 19% YoY) and is projected to exceed **$79.4 billion by 2030** (CAGR 9.5%), driven by AI accelerators, HPC, chiplet adoption, and high-bandwidth memory (HBM) demand (Yole Group, 2025).

For LumenFab.io, this material provides the foundational context for understanding how photonic integrated circuits (PICs) and electronic integrated circuits (EICs) are integrated at the package level, which is essential for co-packaged optics (CPO) and silicon photonics module design.

---

## 2. Evolution from Traditional to Advanced Packaging

### 2.1 Historical Progression

| Era | Package Technology | Key Characteristics |
|-----|-------------------|---------------------|
| **1970s** | DIP (Dual In-line Package), Ceramic ICP | Through-hole mounting, wire bonding, low I/O count |
| **1980s** | SMT, QFP, PGA, BGA | Surface mount, area array connections, higher I/O |
| **1990s** | QFN, CSP, Flip-Chip on substrate | Miniaturization, solder bump interconnects, die-face-down |
| **2000s** | SiP (System-in-Package), PoP, WLP | System integration, wafer-level processing, stacked dies |
| **2010s** | 2.5D IC, 3D IC, FOWLP (Fan-Out WLP) | Silicon interposers with TSVs, heterogeneous integration |
| **2020+** | 3D SoC, Hybrid Bonding, CoWoS, Chiplet | Bumpless bonding, sub-10um pitch, die disaggregation |

### 2.2 Key Transition Drivers

1. **Bandwidth demand**: Traditional packaging cannot keep up with data rates required by AI/HPC chips (1TB/s+ memory bandwidth)
2. **Power efficiency**: Off-chip interconnect power dominates in traditional packages; advanced packaging reduces interconnect length and parasitics
3. **Die size limits**: Reticle limits (approx. 800-860 mm^2) constrain monolithic die size; multi-die integration overcomes this
4. **Yield and cost**: Smaller chiplets yield better than large monolithic dies; heterogeneous process nodes optimized per function
5. **Signal integrity**: Shorter, denser interconnects with controlled impedance

### 2.3 The "More than Moore" Framework

Advanced packaging realizes the "More than Moore" vision: system performance gains from heterogeneous integration of diverse functions (logic, memory, analog, photonics, MEMS) in a single package, rather than relying solely on transistor scaling (ITRS/IRDS Roadmaps).

*Reference: ITRS 1999 Assembly & Packaging chapter; Tummala, "Microelectronics Packaging Handbook" (1997); IEEE IRDS EPT Part 1 (2024)*

---

## 3. Core Advanced Packaging Technologies

### 3.1 Bumping (Solder Bumps and Micro-Bumps)

Solder bumps (C4, Cu-pillar, micro-bumps) form the electrical and mechanical connection between the die and substrate or interposer.

| Parameter | Standard C4 Bumps | Cu-Pillar (Micro-bumps) |
|-----------|------------------|------------------------|
| Pitch | 150-200 um | 35-55 um (emerging: 20-25 um) |
| Material | High-Pb, SnAg, SAC solder | Cu pillar + SnAg cap |
| Height | 75-100 um | 20-50 um |
| Applications | Flip-chip on substrate | 2.5D interposer, memory stacking |

**Key challenge**: Bump pitch scaling is slowing; below 20-25 um, solder volume becomes too small for reliable joint formation. This drives the transition to hybrid bonding.

### 3.2 RDL (Redistribution Layer)

RDL re-routes die I/O pads to different locations/arrays across the package surface.

| RDL Type | Min Line/Space | Dielectric | Process | Applications |
|----------|---------------|-----------|---------|-------------|
| Organic RDL (SAP) | 2-5 um | PI, PBO, ABF | Semi-additive, spin-coat/luminate | Fan-out WLP, 2.3D interposers |
| Inorganic RDL (BEOL) | <0.5 um | SiO2 | PECVD + RIE + Cu Damascene | Silicon interposers, high-density routing |
| Hybrid RDL | 0.5 um (inorganic) + 2 um (organic) | SiO2 + polymer | Inorganic first, organic last | Cost-performance balance |

**Trend**: RDL line/space scaling from 2 um toward sub-0.5 um, driven by high-bandwidth chiplet interconnects. The shift from micro-bumps to Cu-Cu hybrid bonding enables further pitch reduction.

### 3.3 TSV (Through Silicon Via)

TSVs provide vertical electrical connections through silicon, fundamental to both 2.5D and 3D integration.

| Parameter | Typical Value |
|-----------|---------------|
| Diameter | 5-20 um |
| Depth | 50-150 um |
| Aspect Ratio | Up to 20:1 |
| Process flow | DRIE etch -> SiO2 insulation -> TaN barrier + Cu seed -> Cu electroplating -> CMP -> wafer thinning |
| Applications | HBM stacks, silicon interposers (CoWoS), 3D logic-memory |

**Challenges**: Void-free Cu filling (60%+ of TSV cost), wafer thinning yield, stress from CTE mismatch, TSV keep-out zone affecting nearby transistors.

**Trend**: Industry moving toward TSV-less alternatives (bridges, RDL-only) for cost reduction where possible. TSVs remain essential for HBM and high-density 3D stacking.

### 3.4 Hybrid Bonding (Cu-Cu Direct Bonding)

Hybrid bonding is the most transformative recent packaging innovation, enabling bumpless direct copper-to-copper bonding at sub-10 um pitch.

| Parameter | Hybrid Bonding | Micro-Bumps |
|-----------|---------------|-------------|
| Minimum pitch | <10 um (<1 um in R&D) | 35-55 um |
| Interconnect density | ~1 TB/s/mm^2 bandwidth | ~10x lower |
| Thermal conductivity | Excellent (Cu-Cu direct) | Moderate (solder joint) |
| Parasitics (R, L, C) | Very low | Higher |
| Bonding temperature | <300 degC | ~250 degC (solder reflow) |
| Surface prep | CMP to <0.5 nm roughness | Standard flux/cleaning |

**Mechanism**: SiO2/Cu co-bonding at <300 degC -- Cu atoms diffuse across the bonding interface at elevated temperature and pressure. Requires extreme CMP surface control and particle-free environment.

**Leading implementations**: TSMC SoIC, Intel Foveros Direct, Sony CMOS image sensors (first volume use).

*References: Cadence "3D-IC Packaging" technical blog; Samsung HCB paper (ECTC 2023); IEEE survey on 3D hybrid bonding (2024)*

### 3.5 Interposer Technologies

| Type | Routing Density | Dielectric (Dk) | Cost | Thermal Cond. | Key Limitation |
|------|----------------|----------------|------|---------------|----------------|
| Silicon Interposer | Sub-0.5 um L/S | ~4.0 (SiO2) | High | ~150 W/m-K | Wafer size limit, cost |
| Organic Interposer | 2-6 um L/S | 3.0-3.6 (PI/PBO) | Low-Med | 0.3-0.8 W/m-K | Warpage, routing density |
| Glass Interposer | 2 um L/S (R&D) | <3.0 | Medium | ~1 W/m-K | TGV formation, maturity |

**Architecture evolution**:
- **2.5D (CoWoS-S)**: Passive silicon interposer with TSVs -- premium performance
- **2.3D (CoWoS-R)**: Fan-out RDL organic interposer, no TSVs -- cost reduced
- **CoWoS-L**: Local silicon bridges (LSI) embedded in organic RDL -- hybrid approach
- **3.3D**: HBM stacked directly on SoC, eliminating interposer entirely

---

## 4. Key Advanced Packaging Platforms

### 4.1 TSMC 3DFabric Platform

TSMC's 3DFabric umbrella includes three technology families:

**CoWoS (Chip-on-Wafer-on-Substrate)** -- 2.5D silicon/organic/glass interposer
- CoWoS-S: Dense silicon interposer (0.4 um L/S) with TSVs
- CoWoS-R: Organic RDL interposer (2 um L/S), no TSVs needed
- CoWoS-L: Local silicon bridge + organic RDL (hybrid approach)
- CoWoS-L entered HVM at **3.5x reticle** for NVIDIA Blackwell
- Ramping to **680K wafers** in 2025 (106% increase from 2024)

**InFO (Integrated Fan-Out)** -- Wafer-level fan-out
- InFO-PoP: Mobile (Apple A-series SoCs)
- InFO-oS: Networking, baseband
- InFO_UHD: Ultra-high-density with sub-micron RDL
- Key advantage: eliminates substrate, thinner profile, better thermal/electrical

**SoIC (System on Integrated Chips)** -- 3D bumpless bonding
- SoIC-X: Cu-Cu hybrid bonding at 3-9 um pitch
- Used in AMD EPYC (3D V-Cache), MI300 series
- Enables bandwidth up to 1000 GB/s

*References: TSMC 3DFabric EDPS 2020 presentation; TSMC Research Portal (off-chip interconnect); Computer History Museum interview on CoWoS/InFO history*

### 4.2 Intel

- **EMIB (Embedded Multi-die Interconnect Bridge)**: Localized silicon bridge embedded in organic substrate. HVM since 2017. Pitch down to 45 um. Used in Stratix 10 FPGAs, NVIDIA H100 with HBM.
- **Foveros**: Active interposer (logic on interposer) with TSVs. 3D stacking of tiles.
- **Foveros Direct**: Hybrid bonding variant for sub-10 um pitch.
- **EMIB 3.5D**: EMIB + Foveros combination for high-density stacking.

*Reference: Intel EMIB Product Brief (2025); Mahajan et al., Wiley 2019*

### 4.3 Samsung

- **I-CubeS**: 2.5D silicon interposer + HBM stacking
- **I-CubeE**: Embedded bridge (similar to EMIB)
- **X-Cube TCB**: 3D micro-bump stacking (mass production from 2024)
- **X-Cube HCB**: Hybrid Cu bonding (mass production planned 2026)
- **H-Cube**: Hybrid substrate for large-scale HPC

*Reference: Samsung Semiconductor "Cube" technology pages; Samsung / ECTC HCB paper (2023)*

### 4.4 OSATs (Assembly and Test Providers)

- **ASE** (incl. SPIL): FOWLP, 2.5D/3D, FO-EB (embedded bridge). Growing CoWoS overflow capacity (~20% by 2028).
- **Amkor**: SLIM (hybrid RDL), SWIFT (fan-out), silicon interposer. EMIB assembly collaboration with Intel.
- **JCET**: NSEB (Silicon-less Embedded Bridge); $1.5B AP investment announced.

### 4.5 Key Customers Driving Advanced Packaging

- **NVIDIA**: largest CoWoS consumer (~59% in 2026). Driving roadmap from Blackwell -> Rubin -> Feynman.
- **AMD**: MI300/MI400 series, 3D V-Cache on SoIC
- **Apple**: M-series with SoIC, iPhone WMCM
- **Broadcom/Google**: TPU series on CoWoS
- **AWS**: Trainium on CoWoS

---

## 5. Chiplet Architecture and Standards

### 5.1 UCIe (Universal Chiplet Interconnect Express)

The industry standard for chiplet-to-chiplet interconnect, backed by Intel, AMD, TSMC, Samsung, and others:

| Version | Key Features |
|---------|------------|
| UCIe 1.0 (2022) | 16-32 GT/s per lane, 2D/2.5D packaging |
| UCIe 1.1 | Backward compatible, new usage models |
| UCIe 2.0 | 3D packaging support (hybrid bonding), 48-64 GT/s |
| UCIe 3.0 (2025) | Further performance scaling, enhanced reliability |

**Key specs**:
- Standard die-to-die interface: 16-64 GT/s per differential pair
- Form factors: Standard package (16 mm) and advanced package (2 mm) die-to-die distances
- Protocol: PCIe 6.0, CXL 3.0, streaming protocol

### 5.2 Other Standards

- **AIB** (Advanced Interface Bus): Intel open-source, used in prior chiplet designs
- **BoW** (Bridge of Wires): Open Compute Project standard
- **HBM JEDEC**: High Bandwidth Memory (HBM3, HBM4) defines 3D DRAM stacking

*Reference: UCIe Consortium white papers; IEEE article on UCIe (2024)*

---

## 6. Technology Comparison Matrix

| Requirement | Best Option | Why |
|-------------|------------|-----|
| Maximum interconnect density | Hybrid bonding | Lowest pitch (<10 um), lowest RC parasitics |
| Best yield for heterogeneous dies | D2W or D2D bonding | Uses known-good dies (KGD) |
| Lowest substrate cost | Organic RDL (panel-scale) | Low-cost materials, large area |
| Premium performance + density | Silicon interposer (2.5D) | High routing density, strong SI |
| Emerging cost/performance | Glass interposer | Low loss, dimensional stability |
| Best thermal pathways | Hybrid bonding + TSVs | Cu-Cu stack improves heat spreading |
| High-volume, cost-sensitive | 2.3D (organic interposer, no TSV) | Eliminates expensive TSVs |

---

## 7. Industry Landscape and Major Players

### 7.1 Market Structure (2024, Yole Group)

| Rank | Company | Type | 2024 Revenue (approx.) |
|------|---------|------|----------------------|
| 1 | Intel | IDM | $6.5B |
| 2 | Amkor | OSAT | $5.3B |
| 3 | ASE (incl. SPIL) | OSAT | $5.3B |
| 4 | TSMC | Foundry | $5.0B |
| 5 | Sony | IDM | $3.7B |
| 6 | Samsung | IDM | $3.1B |
| 7 | JCET | OSAT | $2.7B |
| 8 | TFME (Tongfu Micro) | OSAT | $2.0B |

### 7.2 Key Competitive Dynamics

- **Foundry vs. OSAT**: TSMC's integrated model (front-end + AP) sets industry benchmark. Foundries entering packaging pose competitive threat to traditional OSATs.
- **IDM 2.0**: Intel making AP a central element, with EMIB assembly collaboration with Amkor.
- **Geopolitical shifts**: CHIPS Act driving U.S. capacity; 7+ new AP fabs under construction in China.
- **Supply chain**: Malaysia, Vietnam, India emerging as new OSAT hubs for geographic diversification.
- **IDM/Foundry share growing**: Foundry/IDM segment ~39% of market in 2025, projected to reach 42% by 2029.

### 7.3 Fastest-Growing Segments

- **Telecom & Infrastructure**: 14.9% CAGR (2024-2030), driven by AI accelerators, chiplets
- **Mobile & Consumer**: Still largest (approx. 70% of 2024 revenue)
- **Automotive**: Growing segment for ADAS and autonomous driving

---

## 8. Co-Packaged Optics (CPO) and Advanced Packaging

### 8.1 Key Research Findings

1. **FOWLP for Silicon Photonics**: A*STAR demonstrated a low-cost, volume-manufacturable FOWLP silicon photonic engine with **1.79 Tbps aggregate capacity** (8 x 224 Gbps). EICs and PICs integrated without wire bonds, preserving signal integrity up to 112 Gbaud NRZ/PAM4. (Li et al., JLT 2025)

2. **Polymer Waveguide Optical RDL**: Imec demonstrated adiabatic coupling between SiN waveguides and polymer optical waveguides with sub-1 dB loss around 1310 nm. Two integration methods: (1) lithography-based direct patterning on the PIC, and (2) flip-chip bonding of pre-fabricated waveguide layers. (Van Asch et al., Optica 2025)

3. **Glass Substrates for CPO**: Glass interposers offer low dielectric loss, tunable CTE, and panel-scale manufacturing -- making them attractive for high-frequency optical interconnects. TSMC TGV development underway.

4. **Low-loss Chip-to-Chip Couplers**: MIT demonstrated CPO system with an electrical chip surrounded by 8 silicon photonic chips bonded using automated pick-and-place with novel optical chip-to-chip couplers. (Weninger et al., Adv. Eng. Mater. 2025)

### 8.2 Relevance to LumenFab.io

| LumenFab Topic Area | Relevant Advanced Packaging Content |
|--------------------|-----------------------------------|
| Optical interconnect fundamentals | Package-level vs. board-level signal integrity |
| Silicon photonics design | PIC-to-EIC hybrid bonding, flip-chip alignment |
| Co-packaged optics | FOWLP for PIC/EIC integration, ORDL |
| Transceiver architecture | 2.5D integration of Tx/Rx PICs with drivers/TIAs |
| Packaging fundamentals | From substrate-based to bumpless bonding |
| Manufacturing and yield | Known-good-die, pre-bond testing, hybrid bonding CMP |

### 8.3 Key Takeaways

- Advanced packaging provides the **physical integration framework** for all co-packaged optics modules
- **Hybrid bonding** will eventually replace micro-bumps for high-density PIC-EIC interfaces
- **UCIe standard** will enable chiplet-based optical engines from different suppliers
- **Thermal management** between hot EICs and temperature-sensitive PICs is a critical system-level design constraint
- **Industry dynamics**: TSMC's lead in advanced packaging gives it unique leverage in CPO (they integrate the electronic side, optical side, and package)

---

## 9. Downloaded Artifacts

Saved under: `docs/research/advanced-packaging-tsmc-copos/downloads/`

| Source | File | Description |
|--------|------|-------------|
| IEEE EDPS 2020 — TSMC 3DFabric | `IEEE_EDPS_2020_TSMC_3DFabric.pdf` (2.2 MB) | TSMC CoWoS, InFO, SoIC overview presentation |
| IRDS 2024 EPT Part 1 | `IRDS_2024_EPT_Part1.pdf` (2.8 MB) | IEEE packaging roadmap and executive tutorial |
| UCIe Consortium | `UCIe_White_Paper_Building_Open_Chiplet_Ecosystem.pdf` (1.1 MB) | Original UCIe chiplet standard white paper |
| Intel | `Intel_EMIB_Product_Brief_2025.pdf` (1.3 MB) | Intel EMIB technology brief with variants |

---

## 10. Source References

### Market Data and Industry Reports

1. Yole Group (2025). "Advanced Packaging Market Set to Reach $79.4 Billion by 2030." Press release. https://www.yolegroup.com/press-release/advanced-packaging-market-set-to-reach-79-4-billion-by-2030/
2. IDC (2025). "Worldwide Semiconductor Advanced Packaging Market Forecast and Analysis, 2025-2029." https://mfe-prod.idc.com/getdoc.jsp?containerId=US52212025
3. IDTechEx (2025). "Advanced Semiconductor Packaging 2025-2035: Forecasts, Technologies, Applications." https://cdn.idtechex.com/en/research-report/advanced-semiconductor-packaging/1042

### IEEE and Academic Papers

4. IEEE (2025). "Advanced Packaging -- A must for Next-Gen AI and HPC Hardware." https://ieeexplore.ieee.org/document/11222514
5. IEEE OJ-SSCS (TSMC, 2024). "High-Bandwidth Chiplet Interconnects." https://ieeexplore.ieee.org/ielx8/8782712/10381508/10767590.pdf
6. IEEE IRDS (2024). "EPT Part 1 -- Considerations for HPC and AI: IC Packaging Evolution." https://irds.ieee.org/images/files/pdf/2024/2024IRDS_EPT-Part1.pdf
7. IEEE EDPS (2020). "TSMC 3DFabric Technology." https://ieee-edps.com/archives/2020/c/0100lee.pdf

### Technology White Papers and Briefs

8. Intel (2025). "EMIB Product Brief." https://www.intel.com/content/dam/www/central-libraries/us/en/documents/2025-07/emib-product-brief.pdf
9. UCIe Consortium. "Building an Open Chiplet Ecosystem" (white paper). https://www.uciexpress.org/ucie-resources
10. UCIe Consortium. "UCIe 2.0 Specification: Continuing Innovation to Drive an Open Chiplet Ecosystem." https://www.uciexpress.org/ucie-resources
11. UCIe Consortium. "UCIe 3.0 Specification: Driving Innovation for Efficient, Scalable, and Reliable Chiplet Integration." https://www.uciexpress.org/ucie-resources
12. Cadence (2025). "3D-IC Packaging: Wafer Stacking, Hybrid Bonding, and Interposer/RDL Techniques." https://community.cadence.com/cadence_blogs_8/b/corporate-news/posts/3d-ic-packaging-wafer-stacking-hybrid-bonding-and-interposer-rdl-techniques

### TSMC and Foundry Documentation

13. TSMC Research Portal. "CPI advancement in integrated fan-out (InFO) technology." https://research.tsmc.com/page/off-chip-interconnect/13.html
14. TSMC Research Portal. "InFO (Wafer Level Integrated Fan-Out) Technology." https://research.tsmc.com/page/off-chip-interconnect/23.html
15. Samsung Semiconductor. "Package Technologies" (I-Cube, X-Cube). https://semiconductor.samsung.com/technologies/package/
16. Samsung Tech Blog. "Going Beyond the Limits with Advanced Heterogeneous Integration." https://semiconductor.samsung.com/news-events/tech-blog/going-beyond-the-limits-with-advanced-heterogeneous-integration/

### Co-Packaged Optics / Silicon Photonics + Packaging

17. Li, X. et al. (A*STAR, 2025). "1.6 Tbps FOWLP-Based Silicon Photonic Engine for Co-Packaged Optics." Journal of Lightwave Technology, Vol. 43, No. 4. DOI: 10.1109/jlt.2024.3493855
18. Van Asch, J. et al. (imec, 2025). "Low-loss integration of high-density polymer waveguides with silicon photonics for co-packaged optics." Optica, Vol. 12, No. 6. DOI: 10.1364/OPTICA.559260. arXiv: https://arxiv.org/abs/2503.02712
19. Weninger, D. et al. (MIT, 2025). "Low Loss Chip-to-Chip Couplers for High-Density Co-Packaged Optics." Advanced Engineering Materials, Vol. 27. DOI: 10.1002/adem.202570012
20. Van Asch, J. et al. (imec, 2025). "Integration methods for co-packaged optics using SiN-to-polymer waveguide coupling." OECC/PSC 2025. DOI: 10.23919/oecc/psc62146.2025.11110865

### Historical / Foundational References

21. ITRS (1999). "Assembly and Packaging Chapter." http://public.itrs.net/Links/1999Winter/AP1199.pdf
22. Tummala, R. et al. (1997). "Microelectronics Packaging Handbook." Springer.
23. Lau, J.H. (2023). "Chiplet Design and Heterogeneous Integration Packaging." Springer.
24. Yu, D.C.H. et al. (TSMC, 2022). "Integrated Fan-Out (InFO) for High Performance Computing." In: Advances in Embedded and Fan-Out Wafer and Panel Level Packaging Technologies. Wiley. DOI: 10.1002/9781119793908.ch4

### Roadmaps and Standards

25. IEEE Heterogeneous Integration Roadmap (HIR). https://eps.ieee.org/hir
26. SEMI/UCLA (2024). "Manufacturing Roadmap for Heterogeneous Integration and Electronics Packaging." https://www.semi.org/en/news-media-press-releases/semi-press-releases/semi-and-ucla-offer-guide-to-facilitate-onshoring-advanced-packaging-facilities-in-united-states
27. IEEE ECTC (2024). "74th ECTC Advance Program." https://www.ectc.net/program/74-ECTCAdvance-Web-Final.pdf

### News and Analysis

28. 3D InCites/IMAPS. "IFTLE 648: Unimicron Glass Core Substrates and Hybrid Bonding" (2025-12)
29. 3D InCites/IMAPS. "IFTLE 638: TSMC Advanced Packaging Coming to AZ" (2025-08)
30. Semiconductor Engineering. Advanced packaging series. https://semiengineering.com

---

## 11. Research Notes and Observations

### Gaps in Available Literature
- Most detailed technology papers (TSMC process details, exact yield data, cost breakdowns) are behind IEEE paywalls or in proprietary reports
- Yole/Prismark/TechSearch reports are comprehensive but cost $5K-$15K -- only press release summaries freely available
- Panel-level packaging (PLP) information is scarce -- primarily Samsung and industrial consortia
- CPO + advanced packaging intersection is still emerging; few papers cover both domains holistically

### Key Trends to Watch
1. **Glass interposers entering production** by 2026-2027 (Intel, TSMC TGV development)
2. **CoWoS reticle sizes expanding** from 3.3x to 5.5x and 9x for >12 HBM stacks
3. **Hybrid bonding pitch target <1 um** by 2027
4. **TSV-less architectures** (bridges + RDL) gaining share to reduce cost
5. **Co-packaged optics** becoming the bridge between AP and optical I/O

### For Next Research Sessions
- Deep dive into specific CPO packaging: FOWLP for PIC/EIC integration, optical coupling methods
- Thermal simulation: co-simulating EIC heat (500 W/cm^2) with PIC temperature sensitivity (PIC needs <50 degC delta)
- Manufacturing: yield issues specific to photonic die attach (sub-micron alignment tolerances)
- OSAT capabilities for photonic packaging (Amkor, ASE photonics packaging service offerings)
- Glass core substrate (CoPoS): detailed TGV formation, warpage, and optical waveguide integration
