# Echelle Grating -- Silicon Photonics

## Sources

- Domenech, Banos, Munoz, "Echelle Gratings with Metal Reflectors in Generic Thick Silicon Technology," IEEE/arXiv: https://ar5iv.labs.arxiv.org/html/1506.05945
- US Patent 9,395,494: Echelle grating with TIR
- Song et al., "Polarization-Insensitive Echelle Grating Demultiplexer," IEEE PTL 2008
- Jun Song, Doctoral Thesis, KTH 2008

## Physical Structure

An echelle grating (EG), also called etched diffraction grating (EDG), consists of:

1. **Free propagation region (FPR)**: A slab waveguide where light propagates freely
2. **Reflective grating facets**: Etched mirrors at one end of the FPR that reflect and diffract light
3. **Input/output waveguides**: Placed along the Rowland circle on the opposite side of the FPR

Light from an input waveguide diverges in the FPR, strikes the grating facets, is reflected and diffracted, and is focused to different output waveguide positions depending on wavelength.

## How It Differs from AWG

| Aspect | Echelle Grating | AWG |
|--------|----------------|------|
| Geometry | Single reflective grating | Array of phased waveguides |
| Footprint | Very compact (0.12-0.27 mm^2) | Larger |
| Dispersion mechanism | Diffraction from reflective grating | Phase delay in waveguide array |
| FPR | Single slab region | Two slab regions (input + output) |
| Loss mechanism | Grating reflectivity | Waveguide propagation losses |
| Fabrication | Deep etch for grating facets | Multiple waveguide layers |

The EG is "recognized as the multiplexing block having smallest footprint and robustness" compared to AWG. In thick Si technology (where bend radius is larger), the EG proves particularly convenient.

## Diffraction Equation (Grating Order)

The grating equation for the echelle geometry:

```
d * (sin(theta_d) + sin(theta_i)) = m * lambda / n_eff
```

where:
- d = grating period (facet spacing)
- theta_i = angle of incidence on the grating
- theta_d = angle of diffraction from the grating
- m = diffraction order (integer)
- lambda = free-space wavelength
- n_eff = effective index of the slab mode

## Free Propagation Region (FPR)

The FPR is a slab waveguide that allows 2D free propagation of light. Key aspects:

- Mode is confined vertically by the slab waveguide structure
- Horizontally, light spreads by diffraction
- The Rowland circle geometry ensures stigmatic focusing: input and output waveguides sit on a circle, the grating facets sit on a larger circle
- FPR length sets the angular dispersion and channel spacing

## Grating Reflection Mechanisms

**1. Metal-coated facets**:
- A reflective metal layer (e.g., Al) is deposited on the etched facet
- A quarter-wave dielectric layer (e.g., 265 nm SiO2) may be used as anti-reflection coating
- Reflectivity can reach ~92.7% (measured ~79.4% in practice)
- Insertion loss improvement over bare facets: ~4.6 dB

**2. Total Internal Reflection (TIR) facets**:
- Uses the Si-dielectric interface (SiO2 or air trench)
- Critical angle for Si-SiO2 is ~26 degrees
- Incidence angle must exceed critical angle
- Advantages: no metal deposition needed, CMOS compatible

## Rowland Circle Design

The Rowland circle geometry provides:
- Input/output waveguides placed on a circle of diameter R (Rowland circle)
- Grating facets placed on a larger circle of radius R
- This ensures that light diffracted from the grating is focused at the output waveguide positions

Focal length is related to the Rowland circle diameter.

## Performance Metrics (from measured data)

| Parameter | 4-channel EG | 8-channel EG |
|-----------|-------------|-------------|
| Grating order | 8 | 14 |
| Grating period | 5.425 um | 9.75 um |
| FSR | 198 nm | 113 nm |
| Channel spacing | 20 nm | 10 nm |
| Insertion loss | 5.68 +/- 0.32 dB | 4.25 +/- 0.37 dB |
| Adjacent crosstalk | -34.14 dB | -32.91 dB |
| PDL | 0.58 dB | 0.58 dB |
| Footprint | 0.12 mm^2 | 0.27 mm^2 |
| 3-dB bandwidth | 7.30 nm | 3.59 nm |

## Key Design Parameters

| Parameter | Description |
|-----------|-------------|
| Grating order m | Higher -> finer resolution, smaller FSR |
| Grating period d | Sets angular dispersion |
| FPR length (focal length) | Determines output waveguide spacing |
| Number of grooves | 40-50 typical |
| Facet angle | Determined by Littrow condition |
| FSR | lambda/m (for central order) |

## Design Flow

1. Choose center wavelength, channel spacing, number of channels
2. Select grating order m (trade-off: resolution vs FSR)
3. Determine grating period d from the diffraction equation
4. Design FPR length to achieve required angular dispersion
5. Position output waveguides on Rowland circle
6. Choose facet reflection mechanism (metal or TIR)
7. Add polarization compensation if needed

## Advantages and Limitations

**Advantages**:
- Very compact footprint (smallest of all demultiplexers)
- Single slab region (simpler than AWG)
- Suitable for thick Si platforms
- Good crosstalk performance (< -30 dB achievable)

**Limitations**:
- Requires deep etch for grating facets (fabrication challenge)
- Polarization dependence may need compensation
- FSR is limited by diffraction order
- Passband shape is inherently Gaussian (not flat-top)
