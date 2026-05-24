# Silicon Photonics PIC Cross-Section and Layer Stack — Extracted Details

**Sources:**
- https://docs.flexcompute.com/projects/photonforge/en/latest/examples/Loading_Technology.html (PhotonForge / Tidy3D)
- https://github.com/SiEPIC/SiEPICfab-EBeam-ZEP-PDK
- https://www.cmc.ca/amf-silicon-photonics-general-purpose/
- IPSR-I 2024 Silicon Photonics Roadmap
- IMEC / STMicroelectronics / SiEPIC EBeam PDK documentation

## Generic SOI Silicon Photonics Layer Stack

| Layer | Material | Typical Thickness | Notes |
|---|---|---|---|
| Si substrate (handle) | Crystalline Si | ~725 µm | Mechanical support; high resistivity (>750 ohm-cm) for RF |
| Buried Oxide (BOX) | SiO₂ | **2.0–3.5 µm** | 2.0 µm (imec, SiEPIC); 2.0 µm (AMF); 3.5 µm (SiEPIC ZEP) |
| Si device layer (core) | Crystalline Si | **220 nm** (standard) or 300 nm | P-type Boron, ~30-60 ohm-cm (SiEPIC) |
| Top cladding / ILD | SiO₂ (PECVD) | **1.5–2.0 µm** | Deposited oxide |
| SiN waveguide (optional) | Si₃N₄ | 0.4 µm | PECVD or LPCVD; SiN thickness from PhotonForge tech |
| M1 (heater) | TiN or W or doped Si | 0.1–2.0 µm | 200 nm typical for TiN heaters; sometimes doped Si |
| ILD2 | SiO₂ | ~0.5–1 µm | Inter-metal dielectric |
| M2 (router/RF electrode) | Al or Cu | 0.5–2.0 µm | 2.0 µm typical for RF performance (Al) |
| Passivation | SiO₂ / SiN | variable | Protective coating with pad openings |

## SiEPIC EBeam Default Stack (Bottom to Top)

From PhotonForge technology file:

1. **Si substrate** (below z = -2 µm)
2. **BOX** (SiO₂, z = -2 to 0 µm) — 2.0 µm thick
3. **Si device layer** (z = 0 to 0.22 µm) — 220 nm, full-etch strip waveguides and 90 nm slab regions for rib
4. **SiN layer** (z = 0 to 0.4 µm) — optional, 0.4 µm Si₃N₄
5. **Top oxide cladding** (z = 0.22 to 1.5 µm) — ~1.5 µm
6. **M1_heater** (z = 1.5-1.7 µm) — doped Si, 2.0 µm thick, conductivity 0.2 S/µm
7. **M2_router** (z = 1.7-3.5 µm) — Al, 2.0 µm thick, conductivity 38 S/µm
8. **Oxide open** (z = 3.5+ µm) — opened for pad access
9. **Air above stack**

## SiEPICfab-EBeam-ZEP-PDK Wafer Stack

| Layer | Material | Thickness | Resistivity |
|---|---|---|---|
| Top Si | CZ P-type Boron, <110> orientation | 220 nm ± 12.5 nm | 30-60 ohm-cm |
| BOX | SiO₂ | 3500 nm ± 150 nm | — |
| Handle | CZ P-type Boron, <100> orientation | 725 µm ± 15 µm | 500-1000 ohm-cm |

Wafer: 200 mm format, max warp 50 µm. Baseline has no top cladding (air cladding).

## AMF (Advanced Micro Foundry) Stack

- High-resistivity handle wafer: >750 ohm-cm
- BOX: 3000 nm (3 µm)
- Top Si: 220 nm
- Three Si etches: 2 partial + 1 full
- 6 implant levels (P++, P+, P, N++, N+, N)
- Ge deposition for photodetectors
- 2 metal levels (no planarization) + metal heater
- PECVD SiN waveguide integration
- Deep trench with etched facets for edge coupling
- Front-side oxide etch for waveguide exposure (sensing)

## Key Waveguide Dimensions

- **Strip waveguide (full etch)**: 220 nm tall × 400-500 nm wide
  - Single-mode condition (no top oxide): width < 580 nm for TE/TM at 1550 nm
  - Propagation loss: ~2.4-2.7 dB/cm (e-beam), ~0.6 dB/cm (193 nm DUV)
- **Rib waveguide (partial etch)**: 220 nm tall with 70-90 nm slab
- **SiN waveguide**: 0.4 µm thick

## Foundry Comparison Summary

| Parameter | imec iSiPP200 | SiEPIC EBeam | AMF | STMicroelectronics DAPHNE |
|---|---|---|---|---|
| Si thickness | 220 nm | 220 nm | 220 nm | 300 nm |
| BOX thickness | 2000 nm | 3500 nm | 3000 nm | ~2 µm+ (bonded) |
| Wafer diameter | 200 mm | 200 mm | 200 mm | 300 mm |
| Si etches | Multi-level | 1 (full) | 3 (2 partial + 1 full) | 3 (2 partial + 1 full) |
| Metal layers | Up to 4 | 1-2 | 2 + heater | 5 + far BEEL |
| Implant levels | Not specified | 0 | 6 | Not specified |
| SiN integration | PECVD + LPCVD | Optional | PECVD | Not specified |
