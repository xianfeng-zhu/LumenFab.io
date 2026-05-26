# Silicon Two-Photon Absorption (TPA) at 1550 nm — Reference Notes (Updated)

Date: 2026-05-26

## Two Regimes (Critical Distinction)

### Straight Waveguides
- TPA coefficient β ≈ 0.8–1.5 cm/GW in crystalline Si at 1550 nm
- SPA (defect-mediated single-photon absorption) significant up to ~300 mW
- At ~100-300 mW coupled into a typical strip waveguide, TPA loss becomes comparable to linear propagation loss (~2-3 dB/cm)
- Gil-Molina et al. (2018): β = 1.5±0.1 cm/GW, SPA = 1.9±0.1 m⁻¹ in Si nanowaveguides

### Ring Resonators (Resonant Enhancement)
- High-Q Si ring resonators: TPA-induced nonlinearities begin at ~0.277-0.3 mW (−5.6 dBm) input power
- Spectral asymmetry (bistability) observed at ~0.3 mW
- At ~1 mW: transition from FCD-dominated (blue-shift) to thermal-dominated (red-shift)
- At ~15.8 mW: carrier saturation; PN junction becomes ineffective
- Optimal modulation power for ring modulators: ~0.45 mW

Key insight: resonant field enhancement in rings amplifies intra-cavity power by Q-factor, making TPA threshold 1000× lower than straight waveguides.

## SiN Advantage
- SiN bandgap ~5 eV → 1550nm photon energy (0.8 eV) far below half-bandgap → no TPA
- Can handle watt-level optical power without nonlinear loss

## Sources
- Gil-Molina et al., Appl. Phys. Lett. 2018 (β = 1.5±0.1 cm/GW in Si nano-waveguides)
- Jeyaselvan et al., IEEE 2019/2020 (TPA onset ~0.277 mW in Si ring resonators)
- OE 27(17):24274, 2019 — Power handling of silicon microring modulators
- Rizzo et al., Optics Letters 48(2):215-218, 2023
