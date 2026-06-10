# LNOI Wafer Fabrication: Smart Cut / Ion Slicing Process

**Sources:**
- Zhihu article (Chinese): https://zhuanlan.zhihu.com/p/483949310
- HSU-HH thesis: https://openhsu.ub.hsu-hh.de/bitstream/10.24405/4361/1/openHSU_4361.pdf
- SJTU paper: https://otip.sjtu.edu.cn/publication/Journal/2025-APN-JianShen-Integrated%20Pockels%20Modulators%20on%20Silicon.pdf
**Type:** Technical reference / academic compilation
**Label:** Ref-R1

## Smart Cut / Ion Slicing Process Overview

The "Smart Cut" technique, originally developed for SOI (Silicon on Insulator) wafers, is the primary commercial method for producing LNOI wafers.

### Process Steps

1. **Ion Implantation**: High-energy ions (He+ or H+, or combined) are implanted into a bulk lithium niobate (LN) crystal at a precise depth, creating a weakened plane.
   - He+ only: Dose ~5×10^16 cm^-2 at 3.8 MeV
   - Combined: 6×10^16 cm^-2 H+ + 5×10^16 cm^-2 He+
   - Implantation angle: 7° from normal to prevent ion channeling

2. **Wafer Bonding**: The implanted LN wafer is bonded (direct bonding or with adhesive) to a handle substrate (e.g., Si, quartz, sapphire) often coated with a SiO2 layer (BOX - Buried Oxide).
   - Common BOX thicknesses: 1.9 µm, 2 µm, 4.7-4.8 µm

3. **Annealing & Splitting**: The bonded pair is heated, causing the implanted layer to blister and split, transferring a thin LN film to the handle wafer.
   - Splitting temperature: ~220°C
   - Post-split annealing: up to ~500°C to repair implantation damage

4. **CMP (Chemical Mechanical Polishing)**: Final step to achieve sub-nanometer surface roughness.
   - Achievable RMS roughness: 0.17 nm

## Commercial Wafer Specifications

| Parameter | Typical Range |
|---|---|
| LN Thickness | 300 nm - 1 µm |
| LN thickness tolerance | ±5-10 nm or ±3-5% |
| Wafer sizes | 3", 4", 6", 8" |
| Surface Roughness (Ra) | <1 nm (sub-nm typical) |
| Crystal Orientation | X-cut, Y-cut, Z-cut |
| BOX (SiO2) | 1.9-4.8 µm |
| Handle Substrate | High-resistivity Si (500-675 µm) |

## Propagation Loss Evolution

| Era | Loss Value | Notes |
|---|---|---|
| ~2010-2013 | 10-17 dB/cm | Early dry etching results |
| ~2015-2018 | 1-6 dB/cm | Process optimization |
| ~2020-2022 | 0.3-0.7 dB/cm | Advanced etching + annealing |
| ~2024-2025 | <0.2 dB/cm | State of the art, commercial grade |
| Best demonstrated | 0.04 dB/cm | Laboratory record |

## Key Commercial Suppliers

- **NanoLN** (China): Dominant commercial LNOI wafer supplier, 4-inch standard
- **Soitec** (France): EU supply chain via CEA-Leti process, 150mm production
- **NGK** (Japan): Developing TFLN bonded wafers with proprietary crystal growth and bonding

## Relevance to LumenFab

- Provides technical foundation for describing TFLN material platform
- Important for understanding manufacturing readiness and supply chain
- Supports claims about TFLN fabrication scalability
