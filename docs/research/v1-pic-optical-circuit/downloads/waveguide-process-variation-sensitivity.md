# Silicon Waveguide Process Variation Sensitivity — Reference Notes

Date: 2026-05-26

## Key Sensitivity Values

- Standard 400nm-wide SOI waveguide: ∂n_eff/∂w ≈ 3.0×10⁻³ nm⁻¹
- 2000nm-wide waveguide: ∂n_eff/∂w ≈ 2.5×10⁻⁵ nm⁻¹ (>100× reduction)
- 1 nm width error → ~1 nm wavelength shift in ring resonators (for 100 GHz DWDM, channel spacing is 0.8 nm)
- Conventional MZI: dλ/dw ≈ 1 nm/nm
- Width-compensated MZI: dλ/dw < 60 pm/nm (20× improvement)

## Foundry Reality

- Ouyang et al. (2018): waveguides systematically ~27 nm wider than design in standard IMEC 220nm SOI MPW
- Wafer-scale non-uniformity: center vs edge, batch-to-batch variations

## Mitigation

- Dual-width MZI arms, wide multimode waveguides with Euler bends
- Thermal tuning with monitor PD feedback
- Wafer-level test data → PDK model calibration → design rule updates

## Sources

- Rizzo et al. (2023), Optics Letters 48(2):215-218
- Ouyang, Bogaerts, Caro (2018), IEEE Photonics Society Benelux
- Bogaerts et al. (2019), IEEE JSTQE 25(5)
