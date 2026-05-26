# Y-Branch Splitter -- Silicon Photonics

## Sources

- Luceda Academy SiFab PDK: https://academy.lucedaphotonics.com/pdks_sources/si_fab/si_fab/ipkiss/si_fab/components/y_branch/doc/
- PhotonForge Y-Splitter Example: https://docs.flexcompute.com/projects/photonforge/en/v1.1.4/examples/Y_Splitter.html
- SIMWORKS Y-Branch Tutorial: https://www.simworks.net/en/case-detail/y-branch
- GMPT Inverse Design: https://www.gmpt.com.cn/documents/siph/Y-Branch_Waveguide

## Physical Mechanism

A Y-branch waveguide distributes optical power from a single input to two (or more) output waveguides. The input waveguide splits into two arms that diverge at a small branching angle (typically 0.5-1 degree).

## Why Splitting is Inherently Symmetric

The Y-branch is structurally symmetric about the horizontal axis. When light is injected from the input, the intensities at the two output ports are forced to be equal by the geometric symmetry. This is confirmed by FDTD simulations showing transmittance differences between outputs within ~7.4e-8 (effectively a perfect 50:50 split).

## Adiabatic Transition

The adiabatic transition mechanism allows the fundamental mode to gradually transform from a single waveguide mode into the two separate waveguide modes of the output arms without coupling to higher-order modes or radiating. This requires:

- **Small branching angle** (0.5-1 degree typical): ensures the mode transformation is gradual enough to remain adiabatic (loss <0.1 dB)
- **S-bend shape**: cosine arc is often recommended for lowest bend loss
- **Tapered transition region**: width is gradually expanded before splitting to reduce mode mismatch

## Key Design Parameters

| Parameter | Typical Value (SOI) |
|-----------|---------------------|
| Core dimensions | 500 nm x 220 nm (SOI strip) |
| Branching angle | 0.5-1 degree |
| Operating wavelength | 1550 nm (C-band) |
| S-bend shape | Cosine arc |
| Bend length | 2-5 um typical |
| Output separation | Gradually increased to avoid mode coupling |

## Loss Mechanisms

1. **Excess loss at branching point**: The fundamental mode must transition from a single waveguide to two separated guides. Small angle reduces this loss.
2. **Bending loss in S-bends**: Curved sections cause radiation loss. Longer bends reduce curvature.
3. **Mode mismatch loss**: If the transition is too abrupt, power couples to radiation modes.
4. **Return loss (reflection)**: Small reflections occur at the branching junction.

Typical excess loss: 0.1-0.5 dB for well-optimized SOI designs.

## S-Parameter Model

The Y-branch is a 3-port device (1 input, 2 outputs):

- S[in, out1] = S[out1, in] = t (transmission through)
- S[in, out2] = S[out2, in] = t (identical for symmetry)
- S[in, in] = r1 (reflection at input)
- S[out1, out1] = S[out2, out2] = r1 = r2 (reflection at outputs)

## Simulation Approaches

- **BPM (Beam Propagation Method)**: Fast, good for length optimization
- **FDTD (Finite Difference Time Domain)**: Accurate, good for detailed loss analysis
- **Inverse design**: Shape optimization using algorithms (Nelder-Mead, Genetic Algorithm) can achieve ~97.5% transmission

## Key Formulas

No closed-form analytical formula for excess loss. Performance is determined numerically. The key constraint is that the branching angle must be small enough that:

```
(delta_n_eff / n_eff) << theta_branch
```

where delta_n_eff is the effective index difference between the symmetric supermode (even) and antisymmetric supermode (odd) of the two coupled output arms.
