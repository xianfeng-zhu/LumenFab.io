# Microring Resonator -- Silicon Photonics

## Sources

- Schweib, "Transmission, group delay, and dispersion in single-ring optical resonators and add/drop filters -- a tutorial overview," JLT 2004
- NPTEL Lecture 27 (IIT) -- Microring Resonators
- UAlberta ECE: Silicon microring filter theory
- Enlight-Tec Tutorial: https://www.enlight-tec.com/post/a-tutorial-on-silicon-microring-resonators-and-their-applications

## Physical Mechanism

A microring resonator is an optical waveguide looped into a ring (or racetrack), placed in close proximity to one or two bus waveguides. When the optical path length around the ring equals an integer number of wavelengths, constructive interference occurs and light circulates within the ring. This creates a resonant condition -- only specific wavelengths are trapped, all others pass through unaffected.

## Two Configurations

**All-pass configuration**: One bus waveguide coupled to a ring. At resonance, a notch appears in the transmission spectrum.

**Add-drop configuration**: Two bus waveguides coupled to the ring. The input (through) port and drop port provide:
- Off-resonance light: passes to through port
- On-resonance light: couples to the drop port

## Resonance Condition

The fundamental equation governing microring operation:

```
m * lambda_res = n_eff * L
```

where:
- m = integer (azimuthal mode order)
- lambda_res = resonance wavelength
- n_eff = effective refractive index of the ring waveguide
- L = 2*pi*R = circumference of the ring

At resonance, light circulating in the ring constructively interferes after each round trip. The phase condition is:

```
beta * L = 2*pi*m
```

where beta = 2*pi*n_eff/lambda is the propagation constant.

## Free Spectral Range (FSR)

FSR is the spacing between adjacent resonance wavelengths (or frequencies):

```
FSR_lambda = lambda^2 / (n_g * L)
FSR_freq = c / (n_g * L)
```

where:
- n_g = n_eff - lambda * dn_eff/d_lambda = group index (accounts for dispersion)
- L = ring circumference
- c = speed of light

Key trade-off:
- Smaller ring radius -> larger FSR -> more channels possible before FSR limits
- Smaller ring radius -> increased bending loss -> lower Q

## Quality Factor (Q)

Q characterizes the sharpness of resonances and the photon lifetime in the ring:

```
Q = lambda_res / Delta_lambda
```

where Delta_lambda is the full-width at half-maximum (FWHM) of the resonance.

**Loaded Q**: includes both intrinsic losses (material absorption, sidewall scattering, bend radiation) and coupling losses to bus waveguides.

**Intrinsic Q (Q_i)**: determined solely by the ring's internal losses (without coupling).

For an add-drop resonator, the FWHM is given by:

```
Delta_lambda = (1 - r1*r2*a) * lambda_res^2 / (pi * n_g * L * sqrt(r1*r2*a))
```

where r1, r2 = self-coupling coefficients, a = round-trip amplitude transmission.

## Finesse

Finesse is the ratio of FSR to resonance width:

```
F = FSR / Delta_lambda = pi * sqrt(r1*r2*a) / (1 - r1*r2*a)
```

Finesse measures the number of round trips a photon makes before losing significant energy. High finesse means sharper resonances.

## Critical Coupling

Critical coupling occurs when the coupling loss matches the intrinsic cavity loss. This maximizes the extinction ratio (deepest notch in through port / maximum drop port transmission).

**Condition for critical coupling**:

```
|kappa|^2 = a   or equivalently   r * a = 1  (all-pass)
r1 = a * r2                                (add-drop)
```

where:
- kappa = cross-coupling coefficient (kappa^2 + r^2 = 1 for lossless coupler)
- a = round-trip amplitude transmission (a = 1 means no propagation loss)

At critical coupling:
- **All-pass**: through-port transmission goes to zero at resonance (all power goes into the ring and is dissipated)
- **Add-drop**: maximum power transfers to the drop port

**Three coupling regimes**:
| Regime | Condition | Through-port at resonance |
|--------|-----------|--------------------------|
| Under-coupled | kappa^2 < a | Moderate dip |
| Critically coupled | kappa^2 = a | Zero transmission |
| Over-coupled | kappa^2 > a | Moderate dip, broader resonance |

## Add-Drop Filter Transmission Equations

**Through port**:
```
T_through = (a^2*r2^2 + r1^2 - 2*a*r1*r2*cos(phi)) / (1 + a^2*r1^2*r2^2 - 2*a*r1*r2*cos(phi))
```

**Drop port**:
```
T_drop = (a*kappa1^2*kappa2^2) / (1 + a^2*r1^2*r2^2 - 2*a*r1*r2*cos(phi))
```

where:
- phi = beta*L = round-trip phase
- kappa_i^2 + r_i^2 = 1 (energy conservation, lossless coupler)

At resonance (cos(phi) = 1): drop port transmission is maximized, through port minimized.

## Key Trade-offs

| Parameter | Increase Effect | Decrease Effect |
|-----------|----------------|-----------------|
| Ring radius R | Higher Q (less bend loss) | Smaller FSR |
| Coupling gap g | Higher Q (weaker coupling) | Lower power transfer |
| Waveguide width | Reduced scattering loss | Risk of multimode |
| Propagation loss | Lower Q and finesse | - |

## Typical Performance (SOI)

| Radius | FSR | Q | FWHM |
|--------|-----|---|------|
| 2.5 um | 37 nm | ~800 | ~2 nm |
| 3.0 um | 31 nm | ~800 | ~2 nm |
| 3.5 um | 27 nm | ~800 | ~2 nm |

State-of-the-art SOI: Intrinsic Q > 10^7 demonstrated with careful fabrication.
