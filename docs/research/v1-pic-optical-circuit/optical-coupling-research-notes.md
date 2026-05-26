# Optical I/O Coupling Research Notes: Grating Couplers and Edge Couplers for Silicon Photonics

Date: 2026-05-26

Purpose: supplement the coupling section of the PIC component page (`src/pages/components/pic.mdx`) with technically specific, source-backed details on grating couplers, edge couplers, spot-size converters, and how coupling loss impacts CPO system budgets. These notes feed into `docs/research/v1-pic-optical-circuit/pic-optical-circuit-professional-sources.md` and `docs/research/v1-optical-io-fiber-coupling/optical-io-fiber-coupling-professional-sources.md`.

---

## 1. Grating Couplers: Performance and Tradeoffs

### 1.1 Typical Insertion Loss

| Design | Insertion Loss | Platform | Source |
|---|---|---|---|
| Standard uniform grating (C-band) | -3 to -5 dB | 220 nm SOI, 70 nm shallow etch | Industry typical |
| Apodized grating | -3 dB (~50%) | 220 nm SOI | Foundry PDK typical |
| 2D double-layer grating (DUV-only, 2024) | -2.54 dB | 220 nm SOI, 193 nm litho | Zhou & Tong, 2024 |
| Hybrid alpha-Si/SiN SWG apodized (2024) | -1.0 dB (simulated) | alpha-Si on SiN | IEEE 2024 |
| Shifted-polysilicon overlay (foundry, 2024) | < -1 dB | Commercial foundry | npj Nanophotonics, 2024 |
| Hybrid GC+EC (2022) | < 1.2 dB | SiN platform | Bhandari & Lee, CLEO 2022 |

### 1.2 Optical Bandwidth

- Typical 1-dB bandwidth: **30-40 nm** for standard SOI gratings
- Typical 3-dB bandwidth: **~40-60 nm**
- Best reported: **>100 nm 1-dB bandwidth** using mirror symmetry and resonant cavity enhancement (npj Nanophotonics, 2024)
- SWG broadband design: **105 nm (TE)** / **121 nm (TM)** 3-dB bandwidth
- The 2D double-layer grating achieved **23.4 nm** 3-dB bandwidth (tradeoff for polarization diversity)

### 1.3 Polarization Dependence

- Standard SOI gratings are strongly TE-polarized (TM efficiency is much lower)
- 2D grating couplers enable polarization diversity: **<0.3 dB PDL** over 23.4 nm bandwidth
- Polarization independence requires either: 2D grating design, dual-stage approach, or SiN-Si hybrid
- For CPO systems requiring polarization independence, grating couplers need additional complexity

### 1.4 Coupling Angle and Back-Reflection

**Coupling angle (from vertical):**
- Standard shallow-etched: **8-15 degrees** (to suppress second-order back-reflection)
- Perfect vertical coupling (blazed anti-back-reflection): **0 degrees** (normal incidence)
- SWG for TE: ~39 degrees; for TM: ~16 degrees

**Back-reflection (return loss):**
- Standard uniform grating: **>5%** (poor, due to Bragg symmetry)
- Apodized grating: **<5%** (~-13 dB)
- Blazed anti-back-reflection structure: **<1%** (< -20 dB)
- SWG with anti-reflective taper: **~1%** (-20 dB)
- For CPO with external laser sources, back-reflection > -20 dB may affect laser stability and SMSR

### 1.5 Wafer-Level Testing Tradeoffs

**Advantage:** Grating couplers are on the top surface and can be probed at wafer-scale before dicing. This is their strongest differentiator.

**Limitations:**
- Higher loss than edge couplers means test margin is tighter
- Narrower bandwidth limits WDM wafer test coverage
- Polarization sensitivity adds uncertainty if both TE/TM devices are on the same chip
- Sacrificial GC + splitter approach burns ~1-5% of signal power permanently

**2024 advances:**
- Parallel fiber-array probes with fast SOP calibration (3 sec) for multi-device simultaneous IL/PDL measurement
- Hybrid GC+SSC structures allow wafer-level test while preserving low edge-coupling loss for chip-level
- GlobalFoundries + Ayar Labs demonstrated wafer-level optical edge-coupling IL measurement prior to fiber attach

### 1.6 Key Design Parameters

| Parameter | Typical Range |
|---|---|
| Grating period (Lambda) | 600-1800 nm (wavelength-dependent) |
| Etch depth (shallow) | 70 nm on 220 nm SOI |
| Etch depth (full) | 220 nm |
| Fill factor | 0.3-0.6 |
| SWG sub-period | < lambda (200-600 nm) |
| Min feature size (DUV) | 180 nm (MPW), <=30 nm (e-beam) |
| Blazed directionality | 90-97% |
| Best directionality (blazed anti-back-reflection) | >97% |

---

## 2. Edge Couplers: Performance and Tradeoffs

### 2.1 Structure: Inverse Taper

The inverse taper (also called reverse taper or spot-size converter) works by:
1. Narrowing the silicon waveguide tip to sub-micron width (typically <100-180 nm)
2. The mode becomes less confined and expands evanescently into the surrounding cladding (SiO2 or SiN)
3. A secondary waveguide (SiN or polymer) captures the expanded mode and further converts it to match SMF mode field diameter (~9-10 um for SMF-28)
4. The mode conversion is adiabatic when the taper is long enough, minimizing loss to radiation modes

**Typical taper tip widths:** 80-180 nm (fabrication-limited for DUV lithography)
**Typical taper lengths:** 200-600 um (longer = more adiabatic = lower loss, but larger footprint)

### 2.2 Insertion Loss

| Design | Coupling Loss | Notes | Year |
|---|---|---|---|
| Single-tip inverse taper (220 nm SOI) | TE ~1.9 dB, TM ~4.0 dB | SMF-28; high substrate leakage | -- |
| Double-tip inverse taper | TE 1.10 dB, TM 1.52 dB | 1480-1630 nm bandwidth | 2016 |
| 10-tip inverse taper | -0.72 dB (1310 nm), -1.12 dB (1550 nm) | >400 nm bandwidth, PDL <0.4 dB | 2021 |
| SiN-Si dual-stage SWG | TE 0.61 dB, TM 0.95 dB (sim) | 100 nm BW, PDL <0.2 dB C-band, 315.8 um length | 2024 |
| SiN-assisted (index-matching oil) | 0.35 dB at 1570 nm | High-NA fiber, 1-dB BW 95 nm | 2019 |
| O-band bi-level taper | TE 0.53-0.57 dB, TM 0.45-0.55 dB | 4 um MFD fiber, PDL ~0.18 dB | 2025 |
| SiN SSC (Brunetti) | **0.18 dB** (lowest reported) | 600 um taper, C-band SiN | 2023 |
| Triple-tip SSC (Si3N4) | <1 dB over 600 nm window | 1550 nm, polarization-insensitive | 2020 |
| Hybrid SiN-Si edge coupler (foundry, imec) | **-1.5 dB/fiber** for TE/TM | O- and C-bands, 400 nm SiN taper | imec |

### 2.3 Optical Bandwidth

- Inverse tapers are **inherently broadband** (non-resonant coupling mechanism)
- Typical: **100-400+ nm 1-dB bandwidth**
- Best reported: **>600 nm** (triple-tip SSC)
- This is a key advantage over grating couplers for WDM systems

### 2.4 Alignment Tolerance

| Parameter | Direct Coupling | Expanded Beam (with lenses) |
|---|---|---|
| 1-dB lateral (XY) | ±1.0 to ±2.5 um | ~±6 um |
| 1-dB axial (Z) | >25 um (with index-matching) | >100 um |
| 1-dB rotational | -- | ~1.1 degrees |
| Best reported 1-dB tolerance | ±3.1 um (multi-tip) | -- |

**Key insight:** alignment tolerance is the dominant packaging challenge for edge couplers. Direct coupling requires sub-micron active alignment or precision passive alignment, which adds assembly cost. Expanded-beam micro-optics relax tolerance by an order of magnitude.

### 2.5 Facet Quality and FAU

**Facet preparation is critical for edge couplers:**
- Requires dicing, cleaving, or polishing to create smooth, low-scatter facets
- Facet angle errors, roughness, or chipping directly increase coupling loss
- Anti-reflection coating on the facet reduces Fresnel back-reflection (< -40 dB typical)

**Fiber Array Unit (FAU) considerations:**
- Typical configurations: **12, 16, 36, 72 channels** with **80/127/250 um pitch**
- Sub-micron alignment accuracy required for direct edge coupling
- PM fiber stress rod angular tolerance: **±3 degrees**
- Adhesive selection crucial: UV-curable optical epoxy, with controlled cure shrinkage
- Adhesive in optical path can reduce Fresnel reflection and scattering: from ~3 dB to ~2.13 dB/coupler

**Facet-attached micro-lenses (FaML) / 3D-printed coupling:**
- Mean loss ~1.9 dB (sigma = 0.5 dB) over 50 re-plugs
- Enables pluggable edge coupling with relaxed contamination sensitivity

---

## 3. Spot-Size Converters (SSC): Mode Conversion Mechanism

### 3.1 The Core Problem

Silicon photonic waveguides: 300-500 nm wide, ~220 nm tall (submicron mode)
Single-mode fiber (SMF-28): MFD ~9-10 um at 1310/1550 nm

Direct butt-coupling loss: **>25 dB** due to mode field diameter mismatch alone.

The mode mismatch has two components:
1. **Effective-index mismatch**: silicon (n~3.48) vs silica (n~1.44) -- huge Fresnel reflection if abrupt
2. **Mode-size mismatch**: submicron vs ~10 um -- negligible overlap integral

### 3.2 How SSCs Work

SSCs bridge the mode mismatch through adiabatic mode evolution:

**Step 1: Inverse taper (mode expansion)**
- The Si waveguide is tapered to a narrow tip (80-180 nm)
- Below the cutoff width (~0.5 um for 220 nm SOI), the mode is no longer guided by the Si core
- The mode expands into the surrounding SiO2 cladding (or SiN intermediate layer)
- Expanded mode MFD: **3-5 um** typical at the SSC output

**Step 2: Secondary waveguide coupling**
- A SiN or polymer waveguide overlaps the expanded mode
- Through evanescent coupling, the mode transfers to the secondary waveguide
- Secondary waveguide dimensions (e.g., 3-6 um for polymer) are engineered to approximate SMF mode

**Step 3: Fiber matching**
- The SSC output mode is matched to the fiber (or to a lens that couples to fiber)
- With SiN/polymer design, overlap efficiency with SMF can exceed **95%**

### 3.3 SSC Performance Summary

| SSC Type | Loss | MFD | Length |
|---|---|---|---|
| Si inverse taper + SiO2 cladding | <0.5 dB total (with TEC fiber) | ~4-5 um | 200-400 um |
| Si inverse taper (80 nm tip) | ~0.1 dB conversion loss | -- | ~200 um |
| 17-layer Poly-Si multilayer | **0.087 dB** | 2 um radius (high-NA fiber) | -- |
| Si3N4/SiO2 multilayer | 0.71 dB (TE), 0.48 dB (TM) | SMF-matched | -- |
| SiN taper (400 nm height, 130 nm tip) | <1 dB (O-band) | ~5 um (to polymer/smf) | <1 mm |
| Polymer waveguide SSC (EpoCore) | ~1 dB/facet butt-coupling | ~6 um (95% overlap with SMF) | -- |

### 3.4 Design Tradeoffs

- **Adiabaticity vs. length**: Longer tapers give lower loss but larger footprint. Adiabatic condition demands taper angle small enough that the local mode evolves without coupling to radiation or higher-order modes.
- **Tip width vs. fabrication**: Tips <100 nm require advanced lithography (e-beam or immersion DUV). Foundry MPW typically limits to 180 nm minimum feature.
- **Multilayer SSCs**: Offer short device length and relaxed alignment tolerances but require more complex (CMOS-compatible) fabrication.
- **Substrate leakage**: The expanded mode in an edge coupler can leak into the Si substrate. Substrate removal (etching below BOX) or thick BOX (>2-3 um) is needed.
- **Vertical vs. lateral taper**: Most designs use lateral tapering (width variation). Vertical tapers are also possible but require multi-layer processing.

---

## 4. CPO Coupling Loss Impact: OMA Penalty and Link Budget

### 4.1 Coupling Loss is a 1:1 Penalty

In an intensity-modulated direct-detect (IM-DD) link:
- Available OMA budget = TX minimum OMA_outer - RX required sensitivity
- Every 1 dB of coupling loss **directly reduces the OMA budget by 1 dB**
- There is no amplification or compensation for optical loss before the receiver

### 4.2 CPO Link Budget Example

Using a real CPO silicon optical engine (GIGALIGHT 400G DR4 Linear CPO):

| Parameter | Value |
|---|---|
| TX output power | 0 to +3 dBm |
| Extinction ratio | 4-5 dB |
| TDECQ | <2.5 dB (typically 1-2 dB) |
| Wavelength | 1304.5-1317.5 nm |
| RX OMA sensitivity | < -5.5 dBm |
| **Raw OMA budget** | **~5.5 dB** |

**Budget consumption for a CPO link:**

| Component | Loss (Typical) |
|---|---|
| TX coupling (PIC to FAU) | 0.5-1.5 dB (edge) or 3-5 dB (grating) |
| FAU-to-fiber connector | 0.25-0.5 dB |
| Fiber propagation (500 m SMF) | ~0.15 dB |
| Mid-board connector (if present) | 0.5-1.0 dB |
| RX coupling (FAU to PIC) | 0.5-1.5 dB (edge) or 3-5 dB (grating) |
| Dispersion penalty | 0.5-1.0 dB |
| Aging & temperature margin | 1.0-2.0 dB |
| **Total path loss (edge coupler)** | **~3.4-7.7 dB** |
| **Total path loss (grating coupler)** | **~8.4-14.7 dB** |

With a 5.5 dB OMA budget:
- Edge coupler path: tight but possible with low-loss designs (<1 dB per facet) and budget management
- Grating coupler path: **exceeds the OMA budget by several dB** -- not viable for CPO final assembly

### 4.3 Why Grating Couplers Are Not Used for CPO Final Assembly

The 3-5 dB loss per direction means 6-10 dB total coupling loss for a TX+RX path. This consumes the entire OMA budget (typically 5-10 dB for modern links) before any fiber, connector, or margin allocation. Grating couplers are reserved for wafer-level testing only in CPO designs.

### 4.4 Yield Impact

From imec's evanescent coupler data for die-to-wafer bonding:
- 0.5 mm EVC: mean 0.32 dB, yield **57%**
- 1.5 mm EVC: mean 0.36 dB, yield **75.5%**
- Misalignment >1 um causes functional failure for short couplers

This shows the tight coupling between coupling design, alignment tolerance, and assembly yield -- all directly affecting CPO economics.

### 4.5 PAM4 Penalty

PAM4 imposes an additional ~9.5 dB eye-opening penalty vs NRZ at the same symbol rate. This makes the coupling loss budget even more critical for 100 Gb/s+ per lane CPO links (which use PAM4). FEC is mandatory, with pre-FEC BER targets of 10^-4 to 10^-5.

---

## 5. Grating vs Edge Coupler: When to Choose

| Criterion | Grating Coupler | Edge Coupler |
|---|---|---|
| **Final assembly** | Not recommended (high loss precludes meeting OMA budget) | Preferred (lowest loss, highest bandwidth) |
| **Wafer-level test** | Preferred (top-surface access, no dicing needed) | Not accessible until singulation |
| **WDM systems** | Limited (narrow bandwidth, polarization-dependent) | Preferred (broadband, polarization-diverse) |
| **High channel count** | Higher density possible (2D arrays) | Limited by facet pitch and FAU pitch |
| **Polarization-sensitive** | Requires 2D grating (added complexity) | Naturally accommodates polarization-diverse designs |
| **Bandwidth requirement >60 nm** | Difficult (diffractive bandwidth limit) | Straightforward (adiabatic, non-resonant) |
| **Low back-reflection** | Requires blazed/apodized designs (<1% possible) | Natural with AR coating on facet |
| **Assembly cost** | Lower alignment tolerance (<±20 um) | Higher (sub-micron active alignment for direct coupling) |
| **Fiber management** | Vertical fiber access (space constraints) | In-plane fiber routing (more natural for arrays) |
| **R&D / prototyping** | Faster turnaround (no facet prep) | Requires dicing/polishing |
| **High-volume production** | GC for wafer test + EC for final assembly | Standard practice for CPO |

### Industry Practice Summary

1. **Wafer-level test**: Grating couplers or hybrid GC+EC structures for screening gross failures, process monitoring
2. **Final assembly**: Edge couplers (inverse taper + SSC) for lowest loss, broadest bandwidth
3. **Hybrid approach**: Growing trend of structures that can operate as both, eliminating sacrificial taps
4. **SiN edge couplers**: Increasingly favored for CPO because they integrate naturally with polymer optical redistribution layers (ORDL) on interposers

### Emerging Trends (2024-2025)

- **Sub-1 dB edge coupling** is now standard for SiN-assisted designs in both O- and C-bands
- **Expanded-beam pluggable connectors** (lenses on both PIC and FA) relax alignment tolerance to >±6 um
- **3D-printed facet-attached micro-lenses** enable pluggable edge coupling with mean loss ~1.9 dB
- **Hybrid GC+EC structures** eliminate the need for sacrificial test couplers
- **Polymer optical redistribution** moves the fiber interface from the PIC edge to a more package-friendly location

---

## 6. Source URLs

### Primary Sources (Fetched and Saved)

| Title | URL |
|---|---|
| imec: Interfacing silicon photonics for high-density co-packaged optics | https://www.imec-int.com/en/articles/interfacing-silicon-photonics-high-density-co-packaged-optics |
| NPJ Nanophotonics: Silicon photonics review (Nature, 2024) | https://www.nature.com/articles/s44310-024-00024-7 |
| CLEO 2022: Hybrid edge and grating coupler | https://opg.optica.org/abstract.cfm?uri=cleo_qels-2022-JW3B.196 |
| GIGALIGHT 400G DR4 Linear CPO engine | https://www.gigalight.com/news-events/news-7938.html |
| Wevolver: What is Co-Packaged Optics | https://www.wevolver.com/article/what-is-co-packaged-optics-architecture-benefits-challenges-and-performance |
| Neptec: Precision Fiber Arrays for Silicon Photonics | https://www.neptecos.com/post/neptec-s-photonic-leap-advancing-silicon-photonics-with-precision-fiber-arrays |
| ZJU EPIC: Silicon waveguide optical coupling | http://www.zjuisee.zju.edu.cn/epic/t20140611_239434%20-%20english.html |
| Polster et al.: Wafer-scale edge coupling (OFC 2018) | https://lipson.ee.columbia.edu/sites/default/files/content/docs/Wafer-scale%20high-density%20edge%20coupling%20for%20high.pdf |
| ABPTEL: Optical link budget calculation | https://abptel.com/calculate-reach-application-fit/ |

### Key Papers Referenced

| Topic | First Author / Year | DOI / Reference |
|---|---|---|
| 2D grating coupler, DUV-only, 2024 | Zhou & Tong, 2024 | arXiv:2407.14432 |
| High-efficiency single-etch grating on alpha-Si/SiN | 2024 | IEEE 10543998 |
| SiN-Si dual-stage edge coupler | Jiang et al., 2024 | IEEE Photonics Journal (10.1109/10476676) |
| O-band edge coupler, bi-level taper | Yi et al., 2025 | Optics Letters, Vol. 50, No. 5 (10.1364/OL.550873) |
| SiN spot-size converter | Brunetti, 2023 | Photonics, 2023 |
| Double-tip inverse taper | Wang et al., 2016 | IEEE 7537229 |
| Multi-tip inverse taper | 2021 | IEEE Photonics North, 9597847 |
| SiN-assisted edge coupler | Cheng, 2019 | IEEE Photon. Technol. Lett. (10.1109/LPT.2019.2895095) |
| Triple-tip SSC | 2020 | Optics Communications, Vol. 475 |
| Blazed anti-back-reflection grating | Watanabe/Ayata, 2017 | J. Lightwave Technol. 35(21) |
| Broadband SWG with low back-reflection | Purwaha et al., 2019 | OSA Continuum 2(4) |
| Bottom-reflector enhanced GC | 2024 | J. Lightwave Technol. |
| Parallel wafer-level IL/PDL measurement | 2024/2025 | Optics and Lasers in Engineering, Vol. 186 |
| Wafer and chip-level characterization with GC+SSC | 2024 | JJAP (10.35848/1347-4065/ad5fd5) |
| Wafer-level IL monitoring (GlobalFoundries + Ayar Labs) | 2024 | sciprofiles.com |
| FaML/3D-printed coupling structures | 2024 | OAPEN (20.500.12657/62898) |

### Downloaded Local Files

All in `docs/research/v1-pic-optical-circuit/downloads/`:
- `imec-interfacing-silicon-photonics-cpo.txt`
- `grating-coupler-2024-review-extract.txt`
- `edge-coupler-inverse-taper-2024-2025.txt`
- `cpo-link-budget-oma-penalty.txt`
- `grating-vs-edge-coupler-wafer-test.txt`

---

## 7. Open Questions for Further Research

1. **Foundry-specific PDK numbers**: What are the exact insertion loss numbers for grating and edge couplers in specific foundry PDKs (imec iSiPP300, Tower/SiPhotonics, AIM Photonics, GlobalFoundries 90WG)?
2. **Temperature dependence**: How does coupling efficiency of grating vs edge couplers vary over -40 to 85 C operating range?
3. **Reliability data**: What is the Hermeticity and reliability (Telcordia GR-468) testing data for edge couplers with UV-epoxy FAU attachment?
4. **Polarization splitter-rotator (PSR) integration**: How do PSRs interact with grating/edge coupler selection in CPO designs?
5. **Cost modeling**: Quantitative comparison of GC wafer-test cost savings vs EC final-assembly yield impact at CPO volumes.
