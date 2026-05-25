# Silicon Two-Photon Absorption (TPA) at 1550 nm — Reference Notes

Date: 2026-05-25

## Physical Basis

- Si indirect bandgap ~1.1 eV. Single 1550nm photon (0.8 eV) below bandgap — no linear absorption.
- But 2×0.8 = 1.6 eV > 1.1 eV, enabling TPA: two photons simultaneously absorbed to create an e-h pair.
- TPA coefficient β ≈ 0.8–1.5 cm/GW in crystalline Si at 1550 nm.

## Consequences

- Intensity-dependent loss: P_abs ∝ I²
- TPA generates free carriers → free-carrier absorption (FCA) — additional loss channel
- Carrier recombination → localized heating → thermo-optic wavelength shifts (dn/dT ≈ +1.87×10⁻⁴ K⁻¹)
- Free-carrier dispersion (FCD): index change ~ −5.3×10⁻²¹ cm³ × carrier density
- Significant TPA onset: ~100–300 mW coupled into Si waveguides
- In micro-ring resonators, mW-level intra-cavity power can cause multi-K temperature shifts

## SiN Advantage

- SiN bandgap ~5 eV → 1550nm photon energy (0.8 eV) far below half-bandgap → no TPA
- SiN can handle much higher optical power without nonlinear loss or free-carrier effects

## Sources

- Gil-Molina et al., Appl. Phys. Lett. 2018 (β = 1.5±0.1 cm/GW in Si nano-waveguides)
- MIT MTL Annual Report 2011 (poly-Si β ≈ 310 cm/GW)
- Ferrari et al., IEEE 2011 (dynamic TPA compensation in Si photonic filters)
- Various theses and reviews on Si nonlinear optics
