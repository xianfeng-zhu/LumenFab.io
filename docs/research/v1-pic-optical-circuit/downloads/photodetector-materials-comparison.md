# Photodetector Materials for Silicon Photonics — Reference Notes

Date: 2026-05-25

## Ge/Si (mainstream for SiPh platforms)

- **Why needed**: Si bandgap ~1.1 eV; 1550nm photon (0.8 eV) below bandgap → Si is transparent
- **Why Ge**: Direct bandgap ~0.8 eV matches 1550nm; indirect gap 0.66 eV
- **Integration**: RPCVD selective epitaxy on Si waveguide; evanescent coupling
- **Lattice mismatch**: ~4% Ge-Si → TDD reduction via low-temp buffer (~350°C) + high-temp growth (~700-750°C) + anneal (~800-850°C)
- **Performance**: Bandwidth up to 265 GHz (fin-Ge); responsivity 0.3–1.16 A/W; dark current ~1–100 nA
- **Tradeoff**: Dark current 2-3 orders higher than native InGaAs/InP due to lattice mismatch

## InGaAs/InP (premium option for InP PICs)

- **Advantages**: Higher absorption coefficient, very low dark current (<2 nA), mature
- **Bandwidth**: Up to 220 GHz (MUTC)
- **Disadvantage**: Not CMOS-compatible; requires InP substrate or heterogeneous integration
- **Best for**: Long-haul, high-performance receivers

## Other options (emerging/niche)

- **All-Si**: Sub-bandgap absorption via defects/TPA; bandwidth ~15 GHz max; very weak
- **GeSn**: Adding Sn reduces bandgap, extends response to 2+ μm; ~40 GHz bandwidth demo; pre-production

## Sources

- Liu et al. (2024), "高速光电探测器的研究进展", Acta Optica Sinica
- Lischke et al. (2021), Nature Photonics — 265 GHz Ge fin-PD
- Various imec/AIM/AMF platform documentation
