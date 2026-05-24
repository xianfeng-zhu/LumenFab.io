# PIC Fabrication Process and Physical Structure — Research Notes

**Date:** 2026-05-24

**Purpose:** Source notes for the LumenFab.io PIC page section on "Design and Manufacturing" and for the planned PIC fabrication chapter. Covers the physical cross-section layer stack, step-by-step process flow, and mask/level counts for standard silicon photonics PIC fabrication on SOI platforms.

---

## 1. Physical Structure / Cross-Section

### Standard SOI Silicon Photonics Layer Stack

The canonical cross-section of a silicon photonics PIC (bottom to top):

| Layer | Material | Typical Thickness | Notes |
|-------|----------|-------------------|-------|
| Si handle wafer | Crystalline Si | ~725 µm | High resistivity (>750 ohm-cm) for RF isolation |
| Buried Oxide (BOX) | SiO₂ | **2.0–3.5 µm** | 2.0 µm (imec, SiEPIC default); 3.0 µm (AMF); 3.5 µm (SiEPIC ZEP) |
| Si device layer (waveguide core) | Crystalline Si | **220 nm** (standard) or 300 nm | P-type Boron, 30-60 ohm-cm. 220 nm is the dominant standard |
| Top cladding / ILD | SiO₂ (PECVD) | **1.5–2.0 µm** | Deposited oxide over waveguides |
| SiN waveguide (optional) | Si₃N₄ | ~0.4 µm | PECVD or LPCVD; low-loss passive routing |
| M1 (heater/local interconnect) | TiN, W, or doped Si | 0.1–2.0 µm | 200 nm typical for TiN thermal phase shifters |
| Inter-metal dielectric | SiO₂ | ~0.5–1 µm | |
| M2 (router/RF electrode) | Al or Cu | 0.5–2.0 µm | 2.0 µm Al typical for RF performance |
| Passivation | SiO₂ / SiN | variable | Protective coating with selective pad openings |

### Key Dimensional Details

- **Strip waveguide:** 220 nm tall × 400–500 nm wide, fully etched through Si layer
  - Single-mode condition (no top cladding): width < 580 nm for TE/TM at 1550 nm
  - Propagation loss: ~2.4–2.7 dB/cm (e-beam), ~0.6 dB/cm (193 nm DUV)
- **Slab/rib thickness (partial etch):** 70–90 nm (for rib waveguides, modulators)
- **Metal-Si separation:** ~1.2–2.2 µm from top of Si waveguide
- **SiN waveguide thickness:** ~0.4 µm (PECVD common)

### Foundry Comparison: Starting Wafer Stack

| Parameter | imec iSiPP200 | SiEPIC EBeam | AMF | ST DAPHNE |
|-----------|--------------|-------------|-----|-----------|
| Si device layer | 220 nm | 220 nm | 220 nm | 300 nm |
| BOX | 2000 nm | 3500 nm | 3000 nm | ~2 µm+ (bonded) |
| Wafer diameter | 200 mm | 200 mm | 200 mm | 300 mm |

### Sources
- PhotonForge/Tidy3D technology stack: https://docs.flexcompute.com/projects/photonforge/en/latest/examples/Loading_Technology.html
- SiEPICfab-EBeam-ZEP-PDK: https://github.com/SiEPIC/SiEPICfab-EBeam-ZEP-PDK
- AMF Silicon Photonics: https://www.cmc.ca/amf-silicon-photonics-general-purpose/
- imec iSiPP200: https://www.imeciclink.com/en/asic-fabrication/silicon-photonics-foundry-services

---

## 2. Process Flow (Detailed Step Sequence)

### Complete Silicon Photonics PIC Process Flow

The general process flow, synthesized across IMEC, AIM Photonics, AMF, and DAPHNE platforms:

#### Front-End-of-Line (FEOL)

**Step 1 — SOI Wafer Start**
- 200 mm or 300 mm SOI wafer (Smart-Cut Unibond)
- Standard: 220 nm crystalline Si / ~2 µm BOX / 725 µm Si handle
- Photonic SOI uses much thicker BOX than electronic SOI (which uses 50–100 nm)

**Step 2 — Silicon Waveguide Patterning (3 etch levels)**
Three consecutive etch steps define different waveguide types. The exact etch depths vary slightly by platform:

| Etch Type | Depth (imec) | Remaining Si Slab | Waveguide Type |
|-----------|-------------|-------------------|----------------|
| Shallow partial | ~70 nm | ~150 nm | Rib WG (low confinement), grating couplers |
| Deep partial | ~150–160 nm | ~60–70 nm | Rib WG (high confinement), strip WGs, tapers |
| Full etch | 220 nm | 0 nm (down to BOX) | Strip/channel WG (high confinement) |

- Lithography: 193 nm DUV immersion (imec) or 248 nm DUV. Minimum CD down to ~90 nm (193 nm) or ~150 nm (248 nm).
- Etch targets: >88° sidewall angle, <2 nm sidewall roughness
- Post-etch chemical treatment for smooth sidewalls (AIM Photonics)
- Full etch has highest optical confinement enabling tight bends (few microns radius) but higher propagation loss from sidewall scattering. Shallow etch has lowest propagation loss (0.27 dB/cm demonstrated) but higher bending loss.

**Step 3 — Silicon Nitride Waveguide Deposition and Patterning (0–2 levels)**
- Low-temperature PECVD (compatible with active device co-integration)
- Patterned with RIE + post-etch treatment
- Clad in pTEOS
- AIM Low-Loss uses 2 SiN levels; AMF uses 1 PECVD SiN level
- imec offers both PECVD (CMOS-compatible) and LPCVD (ultra-low loss, prototyping)

**Step 4 — Ion Implantation for Modulators/Active Devices**
- **6 implant levels** (standard on AIM Base Active and AMF):
  - P++, P+, P (p-type)
  - N++, N+, N (n-type)
- Enables p-n junctions for carrier-depletion modulators
- Activation anneal: ~1000°C (must occur before BEOL metals)
- AIM QFlex platform: **12 implant levels** for advanced active designs

**Step 5 — Germanium Photodetector Integration**
- Oxide deposition over patterned waveguides
- Trench etch through oxide to expose Si waveguide
- **Selective Ge epitaxial growth:**
  - Low-temp ~350°C Ge buffer
  - High-temp ~750°C Ge layer
  - Optional: H₂ bake at 850°C for surface preparation
- Anneal at 850°C in N₂ to reduce threading dislocations
- CMP planarization (final Ge thickness ~100–500 nm)
- Implant n+ and p+ to form p-i-n structure
- Activation anneal <700°C

#### Back-End-of-Line (BEOL)

**Step 6 — Contact Formation**
- Deep via etch to implanted Si and Ge regions
- Ti/TiN liner + W plug fill
- CMP planarization

**Step 7 — Metal 1 (M1) Routing**
- Single damascene Cu or Al routing
- Thickness: 200 nm – 1 µm

**Step 8 — Inter-metal Dielectric and Vias**
- SiO₂ ILD deposition
- Via patterning, etch, and fill

**Step 9 — Metal 2 (M2) and Higher Metal Layers**
- Dual damascene Cu or thick Al routing
- M2 typically 2 µm for RF performance
- Platform variance: 2 Cu levels (standard MPW), up to 4–6 (imec, DAPHNE)

**Step 10 — Heater Elements**
- TiN resistor layer between M1 and M2
- Used for thermo-optic phase shifters

**Step 11 — Aluminum Termination Pad**
- Final Al pad for wire bonding / flip-chip
- Metal stack: 2 Cu + 1 Al pad (typical MPW)

**Step 12 — Passivation and Pad Opening**
- Oxide/nitride passivation deposition
- Selective etch for pad openings

**Step 13 — Optical I/O Structures**
- Edge coupling: Deep trench etch with nano-tapers and etched facets
- Surface coupling: Grating couplers
- AIM Low-Loss includes "trench with substrate release" for edge couplers

#### Optional Advanced Modules (Post-BEOL or in Dedicated Runs)

**Step 14 — Heterogeneous Integration**
- III-V laser flip-chip or wafer bonding
- TSVs (imec: 11 µm diameter, 100 µm depth)
- Microbumps and Cu-Ni-Sn UBM
- imec offers laser flip-chip, fiber attach, undercut for thermal isolation

### Platform-Specific Process Flow Order

#### AIM Photonics Base Active (300 mm)
1. 300 mm SOI substrate
2. Si waveguide patterning (193 nm immersion + RIE)
3. SiN waveguide deposition and patterning (low-temp PECVD)
4. Ion implantation (6 levels)
5. Ge photodetector integration (CVD in pTEOS trenches)
6. Contact formation
7. Cu M1 (single damascene)
8. Cu M2 (dual damascene)
9. Al termination pad
10. Passivation + pad opening
11. Deep trench (optional)

#### AMF (200 mm)
1. 200 mm SOI (220 nm Si / 3 µm BOX)
2. 3 Si etch steps (2 partial + 1 full, 193 nm DUV)
3. SiN waveguide (PECVD)
4. 6 implant levels (P++, P+, P, N++, N+, N)
5. Ge deposition + implant for photodetectors
6. 2 metal levels (no planarization) + metal heater
7. Deep trench with etched facets for edge coupling
8. Front-side oxide etch (selective waveguide exposure for sensing)

#### STMicroelectronics DAPHNE (300 mm)
1. 300 mm SOI (300 nm Si device layer)
2. 3 Si etch steps (150 nm partial, 50 nm partial, full 300 nm; auto-aligned)
3. Multiple implant configurations for modulators
4. Ge detectors
5. 5 metal layers (BEOL)
6. Far BEOL: 20 µm Cu posts for 3D integration

### Sources
- AIM Photonics: https://www.aimphotonics.com/base-active-pic
- AIM Photonics Low-Loss: https://www.aimphotonics.com/low-loss-active-pic
- AMF: https://www.cmc.ca/amf-silicon-photonics-general-purpose/
- imec: https://www.imeciclink.com/en/asic-fabrication/silicon-photonics-foundry-services
- CORNERSTONE: https://cornerstone.sotonfab.co.uk/bespoke-fabrication/
- IPSR-I 2024 Silicon Photonics Roadmap: https://photonicsmanufacturing.org/sites/default/files/documents/2024_ipsr-i_silicon_photonics_updated_v2.pdf
- "Silicon Photonics: The State of the Art" — detailed SiPh-CMOS integration process flow
- DAPHNE platform: https://www.academia.edu/73225142/DAPHNE_silicon_photonics_technological_platform_for_research_and_development_on_WDM_applications

---

## 3. Number of Lithography / Etch / Implant / Metal Levels

### Typical Counts for Silicon Photonics PIC Platforms

| Level Type | Typical MPW Count | Advanced Platform Max |
|------------|------------------|----------------------|
| **Si etch steps** | 3 (2 partial + 1 full) | 3 |
| **SiN waveguide levels** | 0–2 | 2 (AIM Low-Loss, imec) |
| **Implant levels** | 6 | 12 (AIM QFlex) |
| **Ge photodetector** | 1 module (multiple masks) | 1 (plus APD in QFlex) |
| **Cu metal routing layers** | 2 | 4–6 (imec, DAPHNE) |
| **Al termination pad** | 1 | 1 |
| **Heater level (TiN)** | 1 (between M1 and M2) | 1 |
| **Deep trench / edge coupler** | 0–1 | 1 |

### Approximate total mask levels
- **Simple passive PIC:** ~8–10 masks
- **Standard active PIC (MPW):** ~12–15 masks
- **Full-feature active PIC with SiN, multiple implants, Ge PD:** ~15–20 masks
- **Advanced platform with 12 implants, multiple metal layers, TSVs:** ~20+ masks

### Platform-Specific Detail

#### imec iSiPP50G (200 mm MPW Platform)
Exact mask level breakdown (based on imec/europractice documentation):

| Module | Mask Levels | Notes |
|--------|-------------|-------|
| Si patterning | 3 | 70 nm shallow, 160 nm partial, 220 nm full etch |
| Poly-Si gate | 1 | For advanced grating couplers, poly-Si waveguide |
| Si implants | 8 | 4x n-type (N++, N+, N, N-) + 4x p-type (P++, P+, P, P-) |
| Ge module | 2 | Ge selective epitaxy + Ge implant/contact |
| Contacts (W plugs) | 1 | Standard CMOS contact |
| Heater metal | 1 | Dedicated metal heater layer |
| Metal 1 (M1) | 1 | Cu-based routing |
| Metal 2 (M2) | 1 | Cu-based routing |
| Passivation | 1 | Al finish + opening |
| Deep trench | 1 | Edge coupler facet |
| **Total** | **~20** | Full active platform |

- **iSiPP50G Passives (no implants, no Ge):** ~8–10 mask levels
- **SOI substrate:** 220 nm top Si / 2000 nm BOX, optional high-resistive Si handle

Key point: The imec implant count (8) differs from AIM/AMF (6). imec uses 4 p-type + 4 n-type levels including light/medium doses for fine dopant profile control, while AMF/AIM use 3 p-type + 3 n-type. This is a meaningful platform design choice, not a documentation difference.

#### AIM Photonics Base Active PIC
- 1 Si waveguide layer (3 sub-masks for etch depths)
- 2 SiN waveguide layers
- 6 implant levels
- 1 Ge PD module
- 2 Cu wiring levels
- 1 Al pad level
- 1 passivation level
- ~12–15 total masks estimated

#### AIM Photonics Low-Loss Active PIC
- 1 Si waveguide + 2 Ridge waveguide layers
- 2 SiN waveguide layers
- 6 implant levels
- 1 Ge PD module
- 2 Cu wiring levels
- 1 Al pad level
- Edge coupler with trench + substrate release
- ~14–18 total masks estimated

#### AIM Photonics Quantum Flex (QFlex)
- Same waveguide stack as Low-Loss
- 12 implant levels
- Ge PD + APD (avalanche photodetector)
- Extrinsic material cavity trench
- Low-loss edge coupler
- ~20+ total masks estimated

#### AMF (Advanced Micro Foundry)
- 3 Si etch levels (2 partial + 1 full)
- 1 PECVD SiN level
- 6 implant levels
- 1 Ge detector module
- 2 metal levels + metal heater
- 1 Al pad level
- 1 deep trench level
- ~12–15 total masks estimated

#### imec iSiPP200
- Multi-level Si waveguide patterning (193 nm immersion)
- PECVD SiN (plus optional LPCVD)
- Up to 4 metal layers
- TSV module available
- Under-bump metallization
- Undercut structures for thermal isolation
- Implant levels not disclosed publicly (in PDK)

### Sources
- AIM Photonics MPW: https://www.aimphotonics.com/mpw
- AMF: https://www.cmc.ca/amf-silicon-photonics-general-purpose/
- imec iSiPP200: https://www.imeciclink.com/en/asic-fabrication/silicon-photonics-foundry-services
- SiEPIC PDK: https://github.com/SiEPIC/SiEPICfab-EBeam-ZEP-PDK

---

## 4. Source URLs (Complete List)

### Official Foundry / Platform Pages
- AIM Photonics Base Active PIC: https://www.aimphotonics.com/base-active-pic
- AIM Photonics Low-Loss Active PIC: https://www.aimphotonics.com/low-loss-active-pic
- AIM Photonics MPW overview: https://www.aimphotonics.com/mpw
- imec silicon photonics foundry services: https://www.imeciclink.com/en/asic-fabrication/silicon-photonics-foundry-services
- imec iSiPP300 platform: https://www.imeciclink.com/en/asic-fabrication/silicon-photonics-foundry-services/isipp300
- imec iSiPP200 close look: https://www.imeciclink.com/en/articles/close-look-isipp200-ic-links-integrated-photonics-platform
- AMF Silicon Photonics (CMC): https://www.cmc.ca/amf-silicon-photonics-general-purpose/
- CORNERSTONE bespoke fabrication: https://cornerstone.sotonfab.co.uk/bespoke-fabrication/

### PDK and Design Tool Documentation
- PhotonForge / Tidy3D technology stack: https://docs.flexcompute.com/projects/photonforge/en/latest/examples/Loading_Technology.html
- SiEPICfab-EBeam-ZEP-PDK (GitHub): https://github.com/SiEPIC/SiEPICfab-EBeam-ZEP-PDK
- SiEPIC EBeam HSQ PDK (GitHub): https://github.com/SiEPIC/SiEPIC-EBeam-PDK

### Research and Roadmap
- IEEE DAPHNE silicon photonics platform: https://www.academia.edu/73225142/DAPHNE_silicon_photonics_technological_platform_for_research_and_development_on_WDM_applications
- AIM Photonics MPW (IEEE, 2019): https://ieeexplore.ieee.org/document/8807165
- IPSR-I 2024 Silicon Photonics Roadmap: https://photonicsmanufacturing.org/sites/default/files/documents/2024_ipsr-i_silicon_photonics_updated_v2.pdf
- AIM 300 mm platform: https://www.dodmantech.mil/Portals/107/300%20mm%20Silicon%20Photonics%20Wafer%20Platform%20%20AIM%20Photonics.pdf

### News and Industry
- CEA-Leti PLAT4M platforms: https://www.ledinside.com/news/2015/11/leti_and_european_fp7_project_partners_in_silicon_photonics_supply_chain
- STMicroelectronics PIC100G / OFC2026: http://mp.weixin.qq.com/s?__biz=MzkwMjYxODE3Mw==&mid=2247497144&idx=1&sn=f000f5e2c1e7364b99965596ea56b7d0
- IMEC silicon photonics TSV: https://cloud.tencent.cn/developer/article/1927827?from=15425

---

## 5. Key Takeaways for LumenFab.io Pages

1. **The standard SOI platform for silicon photonics is remarkably consistent:** 220 nm Si on 2 µm BOX is the dominant combination across imec, AMF, SiEPIC, and AIM Photonics.

2. **A complete silicon photonics PIC requires 10–20 mask levels,** significantly fewer than advanced CMOS (which may use 50+ masks) but substantially more than a simple passive PIC.

3. **The process flow follows a clear front-end/back-end split:** FEOL handles waveguide definition (Si + SiN), implants for modulators, and Ge detector integration. BEOL handles contacts, Cu/Al routing metal, heaters, and pad openings.

4. **The number of metal layers varies by platform complexity:** Standard MPW offerings use 2 Cu + 1 Al pad, while advanced platforms (imec, DAPHNE) offer 4–6 metal layers for denser routing and RF performance.

5. **Implant count is a good proxy for active-device complexity:** 6 implants (standard) covers basic p-n modulators; 12 implants (QFlex) enables more advanced active designs including avalanche photodetectors.

6. **SiN integration adds a second waveguide material** for low-loss passive routing and filtering, typically deposited via PECVD (CMOS-compatible) or LPCVD (ultra-low loss, higher temperature).

7. **Edge coupling vs. grating coupling** is a key design choice that affects the entire back-end process: edge couplers require deep trench etching with substrate release; grating couplers can be formed during the Si etch steps.

## Downloaded Supporting Files

Detailed extracts saved in `docs/research/v1-pic-optical-circuit/downloads/`:
- `aim-photonics-base-active-pic-extract.md`
- `silicon-photonics-cross-section-layer-stack-extract.md`
- `silicon-photonics-process-flow-sequence-extract.md`
