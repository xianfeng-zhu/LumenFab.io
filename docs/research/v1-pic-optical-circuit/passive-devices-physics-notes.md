# Passive Silicon Photonic Devices -- Physics Notes

> Undergraduate/engineer-level physics explanations for educational content.
> Target: clearly explainable formulas and mechanisms for a silicon photonics educational page.

---

## 1. Y-Branch Splitter

### Mechanism
A Y-branch splits optical power from one input waveguide into two (or more) output arms. The waveguide gradually widens and bifurcates at a small branching angle (typically 0.5-1 degree).

### Why Splitting is Inherently Symmetric
The device is structurally symmetric about the horizontal axis. Geometric mirror symmetry forces equal power division between the two outputs. FDTD simulations confirm transmittance differences on the order of ~1e-8.

### Adiabatic Transition Mechanism
The key to low loss: the fundamental mode gradually transforms from a single-waveguide mode into the two separated waveguide modes. If the branching angle is small enough, the mode transformation is "adiabatic" -- the mode shape changes slowly enough that power does not scatter into higher-order or radiation modes.

**Design rule**: The branching angle must be small enough that:
```
(delta_n_eff / n_eff) << theta_branch
```
where delta_n_eff is the difference in effective indices between the even and odd supermodes of the two coupled output arms.

### Key Formulas

There is no simple closed-form formula for excess loss. It is determined numerically through BPM or FDTD simulation. The key parameter is the **branching angle** -- smaller angle means lower loss but longer device.

### Performance
- Typical excess loss (SOI): 0.1-0.5 dB for well-optimized designs
- Splitting ratio: 50:50 +/- 0.001 (limited by fabrication asymmetry)
- Operating bandwidth: broad (wavelength-independent splitting)

### Key Sources
- [Luceda Academy -- YBranch](https://academy.lucedaphotonics.com/pdks_sources/si_fab/si_fab/ipkiss/si_fab/components/y_branch/doc/)
- [FlexCompute Y-Splitter Tutorial](https://docs.flexcompute.com/projects/photonforge/en/v1.1.4/examples/Y_Splitter.html)
- [SIMWORKS Y-Branch Simulation](https://www.simworks.net/en/case-detail/y-branch)

---

## 2. Directional Coupler

### Mechanism
Two parallel waveguides placed close together (gap ~50-300 nm for SOI). The evanescent field of light in one waveguide extends into the adjacent waveguide, causing periodic power transfer along the propagation direction.

### Supermode Explanation
The coupled system supports two "supermodes":
- **Symmetric (even) mode**: higher effective index n_s
- **Antisymmetric (odd) mode**: lower effective index n_a

The interference between these two supermodes causes the power oscillation.

### Coupling Length L_pi (Beat Length)

The distance required for 100% power transfer from one waveguide to the other:

```
L_c = lambda_0 / (2 * |n_s - n_a|)
```

For a typical SOI coupler (500 nm wide, 220 nm thick, 50 nm gap):
- Delta_n_eff = n_s - n_a ~ 0.060
- L_c ~ 12.88 um at lambda = 1.55 um

### Power Transfer Equation

The power in the coupled waveguide at distance L:

```
P_cross = P_0 * sin^2(pi * L / (2 * L_c))
P_bar   = P_0 * cos^2(pi * L / (2 * L_c))
```

Key points:
| L = L_c | 100% crossover (full transfer) |
| L = L_c/2 | 50:50 split (3-dB coupler) |
| L > L_c | Power couples BACK to bar port (sinusoidal) |

### Wavelength Sensitivity

L_c is strongly wavelength-dependent. For a fixed geometry, L_c can vary by ~58% across 1.5-1.6 um. This makes DCs inherently wavelength-sensitive.

### Phase Mismatch
If the two waveguides are not identical (different widths):
- Complete power transfer is not possible
- Maximum coupled power is reduced
- Even more wavelength-sensitive

Phase-match condition (identical waveguides) is critical.

### Key Formulas Summary

```
Coupling coefficient:  kappa = pi / (2 * L_c)
Phase mismatch:        Delta_beta = beta_1 - beta_2
Max cross power:       P_max = P_0 * kappa^2 / (kappa^2 + Delta_beta^2/4)
Cross phase shift:     pi/2 between cross and through ports (at L = L_c/2)
```

### Key Sources
- [PhotonForge Analytic Directional Coupler Model](https://docs.flexcompute.com/projects/photonforge/en/latest/guides/Analytic_Directional_Coupler.html)
- [Ansys/Lumerical Evanescent Coupler Guide](https://optics.ansys.com/hc/en-us/articles/360042304694-Evanescent-waveguide-couplers)

---

## 3. MMI (Multimode Interference) Coupler

### Mechanism
A multimode waveguide supports many lateral modes. An input field excites multiple modes that propagate at different speeds. At specific distances, these modes interfere to reproduce the input field (self-image) or split it into multiple copies.

### Self-Imaging / Talbot Effect
Self-imaging is the guided-wave analog of the Talbot effect in free-space optics. The input field is replicated at periodic intervals along the multimode waveguide because the propagation constants of the modes follow a quadratic relationship:
```
beta_0 - beta_v ~ v(v+2) * pi / (3 * L_pi)
```

### Beat Length L_pi

The fundamental scaling parameter:

```
L_pi = 4 * n_c * W_e^2 / (3 * lambda_0)
```

where:
- n_c = effective refractive index of the multimode waveguide
- W_e = effective width (accounts for field penetration into cladding)
- lambda_0 = free-space wavelength

### Self-Image Positions (General Interference)

| Distance | Image |
|----------|-------|
| L = 3*L_pi | Single image (same as input) |
| L = 3*L_pi/2 | Double image (for 1x2 or 2x2 coupler) |
| L = 3*L_pi/N | N-fold image |

### 1x2 MMI Design
- **General interference** (no restrictions on input): L = 3*L_pi/2, outputs at W_e/2 spacing
- **Symmetric interference** (input centered, only even modes excited): L = 3*L_pi/8 (much shorter!)
- Requires at least 3 guided modes in the multimode region

### 2x2 MMI Design
- **General**: L = 3*L_pi/2, 3-dB coupler with 90 deg phase difference between outputs
- **Paired** (input ports at +/-W_MMI/6): L = L_pi/2 (3x shorter, less fabrication tolerant)
- Phase relationship: phi_rs = phi_0 + (pi/4N)(s-r)(2N+r-s) [+ pi for even r+s]

### Why MMI is More Fabrication Tolerant than DC

1. Splitting ratio is determined by **geometry** (length and width), not by **gap** (most fabrication-sensitive parameter)
2. Self-imaging condition is **periodic** -- small fabrication errors shift the optimum length slightly but don't break the device
3. Multiple modes average out small perturbations
4. SWG (subwavelength grating) MMIs achieve >300 nm bandwidth

### Key Sources
- [BYU Photonics Bootcamp -- MMI Tutorial](https://byucamacholab.github.io/Photonics-Bootcamp/pages/mmis.html)
- MDPI Photonics 2025, "MMI Couplers and the Talbot Effect" (doi:10.3390/photonics12030229)
- JePPIX MMI Tutorial (Leijtens and Smit)

---

## 4. Microring Resonator

### Mechanism
Light circulates in a closed waveguide loop. Only wavelengths that satisfy the resonance condition constructively interfere after each round trip. All others pass through.

### Resonance Condition

```
m * lambda_res = n_eff * L = n_eff * 2*pi*R
```

where m = integer, lambda_res = resonance wavelength, n_eff = effective index, R = ring radius.

### Free Spectral Range (FSR)

```
FSR_lambda = lambda^2 / (n_g * L)
FSR_freq   = c / (n_g * L)
```

where n_g = n_eff - lambda * dn_eff/d_lambda (group index, accounts for dispersion).

**Key trade-off**: Smaller R -> larger FSR -> more channels; but smaller R -> higher bend loss -> lower Q.

### Quality Factor (Q)

```
Q = lambda_res / Delta_lambda
```

where Delta_lambda is the FWHM of the resonance. High Q means:
- Narrower bandwidth
- Longer photon lifetime in the ring
- Better wavelength selectivity

**Loaded Q** = includes both intrinsic and coupling losses
**Intrinsic Q (Q_i)** = determined by material absorption, sidewall scattering, bend radiation

### Finesse

```
F = FSR / Delta_lambda = pi * sqrt(r1*r2*a) / (1 - r1*r2*a)
```

Measures number of round trips before significant energy loss.

### Critical Coupling Condition

Critical coupling occurs when coupling loss equals intrinsic cavity loss:

```
All-pass:  kappa^2 = a   (or equivalently r*a = 1)
Add-drop:  r1 = a * r2
```

- **Under-coupled** (kappa^2 < a): not enough power enters ring; moderate dip
- **Critical** (kappa^2 = a): max extinction; at resonance all input power is dissipated/coupled to drop
- **Over-coupled** (kappa^2 > a): too much coupling; broadens resonance

### Add-Drop Filter

**Through port** transmission:
```
T_through = (a^2*r2^2 + r1^2 - 2*a*r1*r2*cos(phi)) / (1 + a^2*r1^2*r2^2 - 2*a*r1*r2*cos(phi))
```

**Drop port** transmission:
```
T_drop = (a*kappa1^2*kappa2^2) / (1 + a^2*r1^2*r2^2 - 2*a*r1*r2*cos(phi))
```

At resonance (cos(phi) = 1): drop max, through min.

### Key Sources
- Schweib, JLT 2004: "Transmission, group delay, and dispersion in single-ring optical resonators"
- [NPTEL Lecture 27 -- Microring Resonators](http://elearn.psgcas.ac.in/nptel/courses/video/108106180/lec27.pdf)
- UAlberta ECE microring theory (http://www.ece.ualberta.ca/~kambiz/papers/J67.pdf)

---

## 5. AWG (Arrayed Waveguide Grating)

### Mechanism
Light from an input waveguide spreads in a slab (star coupler), enters an array of waveguides with increasing path lengths, then recombines in a second slab. Wavelength-dependent phase tilts created by the path length differences cause different wavelengths to focus at different output positions.

### Star Coupler Structure
- Slab waveguide (free propagation region)
- Rowland circle geometry: input/output waveguides on a circle, array apertures on larger circle
- Acts as a Fourier transform lens

### Path Length Difference

The constant path length difference between adjacent arms:

```
Delta_L = m * lambda_0 / n_c
```

This is the key design parameter -- it creates a linear phase ramp across the array output that varies linearly with wavelength.

### Grating Equation

```
n_s * sin(theta_i) + n_c * Delta_L + n_s * sin(theta_d) = m * lambda
```

For central I/O (theta_i = theta_d = 0):

```
n_c * Delta_L = m * lambda_0
```

### Channel Spacing

```
Delta_lambda = (n_s * d * Delta_x) / (m * n_g * f)
```

where d = array waveguide pitch, Delta_x = output waveguide spacing, f = focal length, n_g = group index.

### FSR

```
FSR = lambda_0 * n_c / (m * n_g)
```

Requirement: FSR > N * Delta_lambda (N = number of channels).

### Crosstalk Sources
- Phase errors from fabrication (dominant, limits to -20 to -30 dB)
- Side lobes from star coupler far-field pattern
- Evanescent coupling between array waveguides
- Higher-order mode generation

### Key Sources
- Handbook of Silicon Photonics (Chapter 4.2)
- [Luceda AWG Designer](https://academy.lucedaphotonics.com/modules/awg/api/functions/ref/awg_designer.all.get_layout_params_1xM_demux_um.html)
- Fang et al., Opt. Express 2010 (1x32 SOI AWG)

---

## 6. Echelle Grating

### Mechanism
An etched reflective grating in a slab waveguide. Light diverges from an input waveguide in the free propagation region (FPR), strikes reflective grating facets, and different wavelengths are diffracted to different output waveguide positions.

### How It Differs from AWG

| Aspect | Echelle Grating | AWG |
|--------|----------------|------|
| Dispersion | Single reflective grating | Array of phased waveguides |
| Footprint | Very compact | Larger |
| FPR | One slab region | Two slab regions |
| Loss mechanism | Grating reflectivity | Waveguide propagation |
| Advantages | Thick Si, small footprint | Higher channel count, flat passband |

### Free Propagation Region (FPR)
A slab waveguide allowing 2D free diffraction. The Rowland circle geometry ensures stigmatic focusing: I/O waveguides sit on a circle of radius R/2, grating facets on a circle of radius R.

### Grating Equation

```
d * (sin(theta_d) + sin(theta_i)) = m * lambda / n_eff
```

where d = grating period, theta_i/d = incidence/diffraction angles, m = order.

### Reflection Mechanisms
1. **Metal-coated facets**: Al + quarter-wave SiO2, ~80-93% reflectivity
2. **TIR facets**: Si-SiO2 interface, critical angle ~26 deg, no metal needed

### Typical Performance (SOI)
- Insertion loss: 4-6 dB
- Adjacent crosstalk: -33 to -38 dB
- FSR: 100-200 nm (order-dependent, typically m = 8-14)
- Channel spacing: 10-20 nm typical
- Footprint: 0.1-0.3 mm^2 (smallest demultiplexer option)

### Key Sources
- [Domenech et al., Echelle Gratings with Metal Reflectors (arXiv)](https://ar5iv.labs.arxiv.org/html/1506.05945)
- Song et al., IEEE PTL 2008: Polarization-insensitive EG
- US Patent 9,395,494: TIR-facet EG design

---

## Comparison Table: Passive Power Splitting Devices

| Device | Splitting Principle | Wavelength Sensitivity | Fabrication Tolerance | Bandwidth | Footprint |
|--------|---------------------|----------------------|----------------------|-----------|-----------|
| Y-branch | Adiabatic mode evolution | Low | High | Very broad | Small |
| Directional coupler | Evanescent field coupling | High | Low (gap-dependent) | Moderate | Small |
| MMI coupler | Self-imaging interference | Low | High | Broad | Medium |
| Microring | Resonant recirculation | Very high (resonant) | Moderate | Ultra-narrow (filter) | Small |

## Comparison Table: Wavelength (De)Multiplexers

| Device | Dispersion Mechanism | Channel Count | Crosstalk | Footprint | Typical FSR |
|--------|---------------------|---------------|-----------|-----------|-------------|
| AWG | Phased waveguide array | 8-32+ | -18 to -38 dB | Large | 10-50 nm |
| Echelle grating | Reflective diffraction | 4-16 | -30 to -38 dB | Very small | 100-200 nm |
| Cascaded microrings | Vernier resonance | 4-8 | -15 to -25 dB | Small | FSR-dependent |
