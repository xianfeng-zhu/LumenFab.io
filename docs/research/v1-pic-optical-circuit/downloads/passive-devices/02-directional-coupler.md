# Directional Coupler -- Silicon Photonics

## Sources

- PhotonForge Analytic Directional Coupler Model: https://docs.flexcompute.com/projects/photonforge/en/latest/guides/Analytic_Directional_Coupler.html
- Ansys Evanescent Waveguide Couplers: https://optics.ansys.com/hc/en-us/articles/360042304694-Evanescent-waveguide-couplers
- Coupled Mode Theory Review, Asian Journal of Physics

## Physical Mechanism

A directional coupler consists of two parallel waveguides placed close together (gap typically 50-300 nm for SOI). When light propagates in one waveguide, its evanescent field extends into the adjacent waveguide, causing power to transfer back and forth periodically along the propagation direction.

## Supermode Theory

The coupled system supports two "supermodes":
- **Symmetric (even) mode**: higher effective index n_s
- **Antisymmetric (odd) mode**: lower effective index n_a

The interference between these two supermodes causes the power oscillation. The beat length depends on the difference of their effective indices.

## Coupling Length L_pi (Beat Length)

The coupling length (also called beat length L_c or L_pi) is the distance required for complete (100%) power transfer from one waveguide to the other:

```
L_c = lambda_0 / (2 * |n_s - n_a|)
```

where:
- lambda_0 = free-space wavelength
- n_s = effective index of symmetric supermode
- n_a = effective index of antisymmetric supermode
- |n_s - n_a| = Delta_n_eff depends on gap, waveguide geometry, and wavelength

For a typical SOI directional coupler (500 nm wide, 220 nm thick, 50 nm gap), Delta_n_eff ~ 0.060, giving L_c ~ 12.88 um at lambda = 1.55 um.

## Power Transfer Equation

The power in the coupled (cross) waveguide at distance L is:

```
P_cross(L) = P_0 * sin^2(pi * L / (2 * L_c))
```

The power remaining in the input (bar) waveguide is:

```
P_bar(L) = P_0 * cos^2(pi * L / (2 * L_c)) = P_0 - P_cross(L)
```

Key operating points:

| Condition | P_cross | P_bar | Use |
|-----------|---------|-------|-----|
| L = L_c   | 100%    | 0%    | Full crossover |
| L = L_c/2 | 50%     | 50%   | 3-dB coupler |
| L = 0     | 0%      | 100%  | No coupling |

## Coupling Ratio Formula (Engineering Form)

```
c_r = sin^2(pi * l_i / (2 * l_c))
```

where:
- c_r = power coupling ratio
- l_i = interaction length (geometric, determined by layout)
- l_c = coupling length (determined by gap, geometry, wavelength)

When l_i exceeds l_c, power couples back to the bar port (sinusoidal, not monotonic).

## Wavelength Sensitivity

The coupling length varies significantly with wavelength. For a fixed geometry (0.4 um strip, 0.2 um gap), L_c ranges from 7.59 um to 11.98 um across 1.5-1.6 um -- a ~58% variation. This makes directional couplers inherently wavelength-sensitive.

## Phase Mismatch (Asymmetric Couplers)

If the two waveguides are not identical (different widths), their propagation constants beta_1 and beta_2 differ, creating phase mismatch Delta_beta = beta_1 - beta_2:

- Complete power transfer is no longer possible
- Maximum power coupled is reduced: P_max = P_0 * k^2 / (k^2 + Delta_beta^2 / 4)
  where k is the coupling coefficient
- The device becomes even more wavelength-sensitive

For identical waveguides (Delta_beta = 0), complete sinusoidal transfer occurs.

## Key Parameters

| Parameter | Symbol | Description |
|-----------|--------|-------------|
| Coupling length (beat length) | L_c (or L_pi) | Length for 100% power transfer |
| Half-beat length | L_c/2 | Length for 50:50 splitting (3 dB coupler) |
| Phase mismatch | Delta_beta | beta_1 - beta_2; zero for symmetric |
| Coupling coefficient | kappa | kappa = pi/(2*L_c) |
| Gap | g | Separation (50-300 nm for SOI) |
| Supermode index diff | Delta_n_eff | n_sym - n_anti; directly sets L_c |

## Additional Phase Shift

At L = 2*L_c, power returns to the launching waveguide with an additional pi phase shift -- important for MZI designs.

## Advantages and Limitations

**Advantages**:
- Simple geometry, easy to fabricate
- Well-understood physics
- Compact for small gaps

**Limitations**:
- Strong wavelength sensitivity
- Gap-dependent performance (fabrication sensitive)
- Limited bandwidth for precise splitting ratios
