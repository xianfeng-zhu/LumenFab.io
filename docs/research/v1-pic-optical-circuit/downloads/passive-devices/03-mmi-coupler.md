# MMI (Multimode Interference) Coupler -- Silicon Photonics

## Sources

- BYU Camacho Lab Photonics Bootcamp: https://byucamacholab.github.io/Photonics-Bootcamp/pages/mmis.html
- MDPI Photonics: "MMI Couplers and the Talbot Effect, Symmetries and Golden Ratio" (2025), doi:10.3390/photonics12030229
- JePPIX Tutorial on MMI Couplers
- Broadband 2x2 SWG MMI on Si3N4: Optics Express 2024

## Self-Imaging Principle

Self-imaging is the property that an input field is replicated into single or multiple images at periodic intervals along a multimode waveguide. This occurs because the input excites multiple guided modes that interfere constructively and destructively at specific distances.

The interference is caused by light reflecting off the sidewalls of the multimode region and interfering with other reflections.

## Beat Length L_pi

The beat length L_pi is the minimum distance after which the fundamental (v=0) and first-order (v=1) modes accumulate a pi phase difference:

```
L_pi = pi / (beta_0 - beta_1)
```

Using the parabolic approximation for mode propagation constants:

```
L_pi = 4 * n_c * W_e^2 / (3 * lambda_0)
```

where:
- n_c = effective refractive index of the multimode region
- W_e = effective width of the MMI (accounts for Goos-Hanchen shift into cladding)
- lambda_0 = free-space wavelength

The propagation constant difference between the fundamental mode and mode v is:

```
beta_0 - beta_v ~= v(v+2) * pi / (3 * L_pi)
```

## Talbot Effect in Multimode Waveguides

The self-imaging in a multimode waveguide is the guided-wave analog of the Talbot effect in free space:
- In free space: a periodic grating produces repeated images of itself at Talbot distances
- In a multimode waveguide: the input field produces self-images at distances determined by the beat length

For high-index-contrast waveguides (like SOI), anti-symmetry conditions are imposed by mirror-like sidewalls.

## Self-Image Positions

**General interference** (no restrictions on input position, requires N+1 modes for N outputs):

| Distance | Image |
|----------|-------|
| L = 3*L_pi | Single image (same as input) |
| L = 3*L_pi/2 | Double image (for 1x2 or 2x2) |
| L = 3*L_pi/3 = L_pi | Triple image (for 1x3) |
| L = 3*L_pi/N | N-fold image |

**Symmetric interference** (input centered on multimode axis, only even modes excited -- modes 1, 3, 5... suppressed):
- First double image at L = 3*L_pi/8 (much shorter device)
- Used for compact 1x2 splitters

## 1x2 MMI Design

**Requirement**: Multimode region must support at least 3 guided modes.

**General interference 1x2**:
- Length: L = 3*L_pi/2
- Output port spacing: W_e/2 (centered)

**Symmetric interference 1x2** (preferred for compactness):
- Length: L = 3*L_pi/8
- Input centered on MMI

**Design steps**:
1. Choose MMI width W_MMI to support sufficient modes
2. Calculate L_pi from formula
3. Set L = 3*L_pi/8 (symmetric) or 3*L_pi/2 (general)
4. Position output ports at W_e/2 separation
5. Add adiabatic tapers from single-mode to access waveguide width
6. Optimize via BPM or FDTD simulation

## 2x2 MMI Design

**General interference 2x2** (L = 3*L_pi/2):
- Acts as a 3-dB coupler with 90-degree phase difference between outputs
- Output field: U(y, 3L_pi/2) = (1/sqrt(2)) * [U(y,0) + j*U(-y,0)]

**Paired interference** (input ports at x = +/- W_MMI/6):
- Only modes v=0, 3, 6, 9... are excited
- First double image at L = L_pi/2 (3x shorter!)
- More compact but less fabrication-tolerant

| Length | Function |
|--------|----------|
| L = 3*L_pi | Mirrored image (cross state) |
| L = 6*L_pi | Full image (bar state) |
| L = 3*L_pi/2 | 3-dB coupler (general) |
| L = L_pi/2 | 3-dB coupler (paired) |

## Why MMI is More Fabrication Tolerant

Compared to directional couplers:
1. MMI splitting ratio is determined by the geometry (length and width), not by the gap between waveguides -- gaps are the most fabrication-sensitive parameter
2. The beat length depends on W_e^2, but the self-imaging condition is periodic -- small fabrication errors shift the optimum length slightly but don't fundamentally break the device
3. MMI operates on self-imaging interference of multiple modes, which is inherently robust to small perturbations
4. SWG (subwavelength grating) MMIs can achieve 1 dB bandwidth >300 nm

## MMI Transmission Matrix

For an NxN MMI, the phase relationship from input port r to output port s is:

```
phi_rs = phi_0 + (pi/4N) * (s-r) * (2N + r - s)   (+ pi for even r+s)
```

## Key Parameters for Silicon Photonics

| Parameter | Typical SOI Value |
|-----------|-------------------|
| MMI width | 2-10 um |
| MMI length | 5-100 um (depends on width) |
| Access waveguide width | 400-500 nm |
| Taper length | 5-20 um |
| Excess loss | 0.2-0.5 dB |
| Bandwidth | 50-100 nm (standard); >300 nm (SWG) |
