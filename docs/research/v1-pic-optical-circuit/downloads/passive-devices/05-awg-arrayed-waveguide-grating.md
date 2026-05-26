# AWG (Arrayed Waveguide Grating) -- Silicon Photonics

## Sources

- Handbook of Silicon Photonics (Chapter 4.2)
- Luceda AWG Designer: https://academy.lucedaphotonics.com/modules/awg/api/functions/ref/awg_designer.all.get_layout_params_1xM_demux_um.html
- Fang et al., "1x32 AWG on SOI," Opt. Express 2010

## Physical Structure

An AWG consists of three main parts:

1. **Input star coupler (slab)**: Light from an input waveguide diverges in a free-propagation slab region and is coupled into an array of waveguides
2. **Arrayed waveguides**: A set of waveguides with a constant path length difference Delta_L between adjacent arms
3. **Output star coupler (slab)**: Light from the arrayed waveguides interferes in a second slab region and is focused onto output waveguides

## Grating Equation (Fundamental)

The core equation governing AWG operation:

```
n_s * sin(theta_i) + n_c * Delta_L + n_s * sin(theta_d) = m * lambda
```

where:
- n_s = effective refractive index of the star coupler (slab) region
- n_c = effective refractive index of the arrayed waveguides
- theta_i = angle of the input waveguide relative to the slab axis
- theta_d = angle of the output waveguide relative to the slab axis
- Delta_L = constant path length difference between neighboring arrayed waveguides
- m = diffraction order (integer)
- lambda = operating wavelength

For the **central input/output waveguides** (theta_i = theta_d = 0), this simplifies to:

```
n_c * Delta_L = m * lambda_0
```

This determines the required path length difference for a given center wavelength lambda_0 and diffraction order m.

## Star Coupler (Free Propagation Region)

The star coupler is a slab waveguide that acts like a free-space lens. It consists of:
- A **Rowland circle** geometry: input/output waveguides sit on a circle of radius R/2, while the array apertures sit on a circle of radius R
- The slab mode propagates freely in 2D (confined in vertical direction)

Light from an input waveguide diverges in the slab, illuminating the arrayed waveguide apertures. The far-field pattern determines the amplitude and phase distribution coupled into each array arm.

## Path Length Difference Delta_L

The constant path length difference between adjacent array waveguides is the key to the AWG's wavelength selectivity:

```
Delta_L = m * lambda_0 / n_c
```

This creates a wavelength-dependent phase tilt across the array output, which is focused to different positions in the output star coupler.

## Channel Spacing and Angular Dispersion

Using the paraxial approximation (small angles):

```
Delta_theta_d = (m * n_g) / (n_c * n_s * d) * Delta_lambda
```

where:
- Delta_theta_d = angular spacing between output channels (in the slab)
- n_g = group index of the arrayed waveguide
- d = spacing between arrayed waveguide apertures
- Delta_lambda = channel spacing (wavelength)

**Output waveguide spacing** on the Rowland circle:
- Related to focal length f and angular spacing: Delta_x = f * Delta_theta_d
- The focal length of the star coupler is f = n_s * R (the effective focal length of the Rowland mounting)

The channel spacing formula in terms of physical parameters:

```
Delta_lambda = (n_s * d * Delta_x) / (m * n_g * f)
```

where Delta_x is the physical separation between output waveguides.

## Free Spectral Range (FSR)

FSR is the wavelength range over which the AWG operates before the spectrum repeats with the next diffraction order:

```
FSR = lambda_0 * n_c / (m * n_g)
```

Design requirement: FSR must exceed N * Delta_lambda (where N = number of channels).

## Crosstalk Sources

| Source | Mechanism | Typical Level |
|--------|-----------|---------------|
| Phase errors | Fabrication imperfections in array waveguide width/length | -20 to -30 dB |
| Side lobes | From star coupler far-field pattern | Limits adjacent isolation |
| Evanescent coupling | Insufficient spacing between array waveguides | Depends on d |
| Higher-order modes | At star coupler boundaries | Additional |
| Sidewall roughness | Scattering in the array waveguides | Broadband background |

## Key Design Parameters (Typical SOI Values)

| Parameter | Value Range |
|-----------|-------------|
| Grating order m | 2-28 |
| Delta_L | 0.8-14 um |
| Channel spacing | 200 GHz (1.6 nm), 100 GHz (0.8 nm) |
| Number of array waveguides | 20-100 |
| Waveguide pitch d | 1.5-2.5 um |
| FPR focal length | 80-800 um |
| Insertion loss | 1-7 dB |
| Adjacent crosstalk | -18 to -38 dB |
| FSR | 10-50 nm |

## Design Flow

1. Choose center wavelength lambda_0, number of channels N, channel spacing Delta_lambda
2. Determine grating order m and path length difference Delta_L = m*lambda_0/n_c
3. Verify FSR > N * Delta_lambda
4. Find focal length f and Rowland circle radius R
5. Set waveguide spacing d and output waveguide spacing to meet crosstalk targets
6. Optimize star coupler tapers and aperture widths

## Advantages and Limitations

**Advantages**:
- High channel count (up to 32+)
- Can achieve very narrow channel spacing
- Well-established design methodology

**Limitations**:
- Large footprint (especially in thick Si)
- Phase-sensitive -> fabrication accuracy critical
- Temperature-sensitive (thermo-optic effect in Si)
- Insertion loss scales with channel count
