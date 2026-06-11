# SiN Integrated Photonics — Professional Sources

## 1. Material Properties vs Si

| Property | Si | Si₃N₄ | Si-rich Nitride |
|---|---|---|---|
| Refractive index n @1550nm | ~3.48 | ~2.00 | 2.2–3.1 |
| Index contrast vs SiO₂ | ~2.0 | ~0.5 | tunable |
| Thermo-optic coefficient dn/dT | ~1.8×10⁻⁴ K⁻¹ | ~2.5×10⁻⁵ K⁻¹ | — |
| Kerr n₂ | ~4.5×10⁻¹⁸ m²/W | ~2.5×10⁻¹⁹ m²/W | ~7.7×10⁻¹⁸ |
| TPA @1550nm | strong (~0.8 cm/GW) | negligible | negligible |
| Transparency | 1.1–5.5 μm | 0.25–8.3 μm | — |
| Best propagation loss | ~0.027 dB/cm | ~0.00034 dB/cm (3 dB/m) | 3–10 dB/cm |

Key: SiN's lower index contrast → larger bend radius but lower scattering loss. Lower TOC → athermal devices. No TPA → high-power nonlinear operation.

## 2. Deposition Methods

| Parameter | LPCVD Si₃N₄ | PECVD SiNx |
|---|---|---|
| Temperature | ~800°C | ~350°C |
| Film stress | ~1 GPa tensile | ~316 MPa (tunable) |
| Loss | as low as 0.003 dB/cm | ~1 dB/cm+ |
| CMOS BEOL compatible | No (>450°C limit) | Yes |
| Cracking threshold | ~400 nm | much thicker |

LPCVD: stoichiometric, low loss, high stress → thickness limited.
PECVD: tunable composition, lower stress, but higher absorption (N-H bonds).

Bilayer approach (McNulty 2025): thin LPCVD (340 nm) + thick PECVD (400 nm) → retains low loss while enabling dispersion engineering.

## 3. Propagation Loss Benchmark

| Loss | Configuration | Source |
|---|---|---|
| **0.003 dB/cm** (3 dB/m) | LPCVD SiN, 200 mm wafers | imec OFC 2025 |
| 0.1 dB/cm | low-confinement, telecom | general |
| 0.13–0.15 dB/cm @1310nm | 300 mm, multi-reticle stitched | MDPI Photonics 2026 |
| <0.25 dB/cm | AIM Photonics SiN passive PIC | — |
| 0.7–1.8 dB/cm | 400 nm LPCVD, O/C/L bands | IEEE 2024 |

## 4. SiN ECL (External Cavity Laser)

- SiN TOC ~5× lower than Si → thermally stable without active cooling.
- Key results: 12 mA threshold, >45 dB SMSR, 3 mW, 80°C stability (MTU/ST).
- 60 nm tuning, 11 mW, 37 kHz linewidth (III-V/Si hybrid on SOI).
- Sub-kHz linewidth via photonic wirebonded SiN ECL (UCSB/Freedom Photonics).
- Integration: photonic wire bonding, micro-transfer printing, butt-coupling.

## 5. SiN Filters & Multiplexers

- CWDM 20 nm channel spacing — SiN athermal multiplexers (Echelle grating, AWG).
- SiN broadband grating couplers (lower index contrast → wider bandwidth).
- Inverse-designed ultra-compact: 4-ch CWDM 24×24 μm² (1200× smaller), −1.0 to −1.7 dB insertion loss.

## 6. Kerr Frequency Combs

- n₂ ≈ 2.4×10⁻¹⁹ m²/W, no TPA → high-Q resonators + high power → efficient comb generation.
- Octave-spanning combs (1300–2100 nm) in annealing-free SiN.
- Repetition rates GHz to THz → terabit/s communications.

## Sources

- Blumenthal et al., Proc. IEEE 106(12), 2209 (2018) — SiN review
- Wilmart et al., Applied Sciences 9(2), 255 (2019) — Si-SiN platform
- Ozdemir et al., OFC 2025 — 3 dB/m LPCVD SiN
- McNulty et al., Nanophotonics 14(23), 3921 (2025) — bilayer SiN
- Pita Ruiz et al., arXiv:2505.02662 (2025) — inverse-designed SiN
