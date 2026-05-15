# 03-04 Semiconductor, Optics, And Laser Physics Research Notes

Date: 2026-05-16

Purpose: source-backed notes for the next reader-facing LumenFab.io pages. These notes are not the site structure. They only collect the minimum physics needed before material platforms.

## Scope

Use these notes for:

- `03. Semiconductor And Optics Basics`
- `04. Laser Physics`

Do not use these notes to introduce company mapping, supply-chain order, or investment framing. The goal is to connect the already published link-level pages to later material, epitaxy, device, PIC, packaging, and system chapters.

## Reader Sequence

Recommended order:

1. Bandgap and band edges.
2. Direct vs indirect bandgap.
3. PN junction and carrier injection.
4. Photon energy, wavelength, and frequency.
5. Refractive index and total internal reflection.
6. Waveguides and optical modes.
7. Interference, resonance, and loss.
8. Spontaneous vs stimulated emission.
9. Optical gain and threshold current.
10. Fabry-Perot cavity.
11. Distributed feedback and wavelength selection.
12. Optical confinement in vertical and lateral directions.
13. Linewidth and mode stability.
14. Temperature sensitivity.

## Key Technical Anchors

### Bandgap

- The valence band and conduction band are energy-state bands, not physical layers.
- The bandgap is the energy difference between the top of the valence band and the bottom of the conduction band.
- The light-emission problem depends on both energy and crystal momentum.
- Direct bandgap materials put the relevant band extrema at the same k-state, making radiative recombination more likely.
- Indirect bandgap materials require momentum assistance, often from phonons, so non-radiative paths dominate more easily.
- This explains the broad platform split:
  - GaAs and InP-related III-V systems are important for native optical sources.
  - Silicon is excellent for electronics and waveguides, but weak as a native efficient laser source.

### PN Junction And Injection

- Doping changes which carriers dominate transport.
- A PN junction under forward bias injects electrons and holes toward the junction or active region.
- In a light-emitting diode or semiconductor laser, the device must place recombination where light generation and optical mode overlap.
- Heterostructures improve carrier confinement, optical confinement, and defect control.

### Photon Energy

- Photon energy relates to frequency and wavelength through `E = h nu = hc/lambda`.
- Larger bandgap means higher photon energy and shorter emitted wavelength, all else equal.
- This is why material composition and quantum well design are tied to 850 nm, 1310 nm, and 1550 nm communication bands.

### Waveguides And Modes

- A dielectric slab or rib waveguide uses a higher-index core and lower-index cladding.
- Guided light is not a ray trapped only inside a geometric core; it is a mode with fields extending into nearby regions.
- A practical page should introduce:
  - refractive index
  - total internal reflection
  - evanescent field
  - effective index
  - single-mode vs multimode
  - loss
- Later pages can reuse this to explain fiber, silicon photonics waveguides, laser ridges, grating couplers, MZM, MRM, DFB gratings, and packaging alignment.

### Laser Physics

- A laser diode is an electrically pumped semiconductor laser where current injection creates gain in a PN or PIN heterostructure.
- Spontaneous emission can seed light, but stimulated emission and feedback are needed for laser action.
- Threshold is where small-signal gain balances resonator loss.
- Above threshold, useful output power grows roughly with current above threshold, but efficiency and stability depend on design, temperature, resistance, leakage, absorption, and scattering.

### Fabry-Perot Cavity

- A Fabry-Perot laser diode uses reflections at both ends of the chip as the main resonator.
- Natural semiconductor-air facet reflections can provide feedback because the refractive-index contrast is large.
- FP devices often allow multiple longitudinal modes because the gain bandwidth can cover several cavity resonances.
- This makes FP a useful teaching bridge from "feedback" to "mode selection", even when later datacenter transmitters use DFB, EML, or external CW sources.

### DFB

- A distributed feedback laser uses a periodic structure in or near the gain medium for wavelength-selective feedback.
- The key teaching idea is not "a better mirror"; it is distributed Bragg reflection along the cavity.
- A quarter-wave phase shift or related design can favor one mode and improve single-frequency operation.
- DFB must be kept conceptually separate from:
  - QW/MQW/QD, which are active-region concepts.
  - InP/GaAs/Si, which are platform concepts.
  - EML, which is a transmitter device/architecture combining a laser and electro-absorption modulator.

### Confinement

- Directional output is not created by one electron choosing an output direction.
- Laser structure selects modes in three dimensions:
  - longitudinal feedback selects cavity modes and output direction;
  - vertical heterostructure waveguiding keeps optical mode near the active region;
  - lateral ridge or buried structure helps control transverse modes and current injection.

### Temperature

- Semiconductor lasers are temperature-sensitive because temperature changes carrier distributions, bandgap, refractive index, gain peak, threshold current, and cavity resonance.
- Thermal management is not just packaging housekeeping. It is part of optical stability, wavelength control, lifetime, and module qualification.

## Source Notes

- MIT OpenCourseWare 6.772 lists compound-semiconductor device topics including `E_g` vs lattice constant, band structures, Gamma/L/X minima, direct vs indirect gaps, and optical properties.
- MIT OpenCourseWare 3.46 Photonic Materials and Devices includes lecture notes on direct and indirect gap materials and compound semiconductors.
- MIT OpenCourseWare 3.15 lecture notes cover photodiodes, direct/indirect gap, LEDs, lasers, heterostructures, carrier and light confinement.
- NIST atomic spectroscopy notes give the photon-energy relation `Delta E = h nu = hc/lambda`.
- MIT OpenCourseWare 6.974 notes describe dielectric slab waveguides, total internal reflection, evanescent fields, effective index, and guided modes.
- RP Photonics explains laser-diode current injection, spontaneous/stimulated emission, threshold, FP laser diodes, resonator modes, and distributed feedback lasers. Cite specific RP pages when used.

## References

- [MIT OCW 6.772 Compound Semiconductor Devices lecture notes](https://ocw.mit.edu/courses/6-772-compound-semiconductor-devices-spring-2003/pages/lecture-notes/)
- [MIT OCW 3.46 Photonic Materials and Devices: optical materials lecture](https://ocw.mit.edu/courses/3-46-photonic-materials-and-devices-spring-2006/resources/3_46lec2_optmat2/)
- [MIT OCW 3.15 lecture 9: photoconducting materials, photodiode, PV, direct and indirect gap](https://ocw.mit.edu/courses/3-15-electrical-optical-magnetic-materials-and-devices-fall-2006/resources/lecture9/)
- [MIT OCW 3.15 LEDs and Lasers lecture handout](https://ocw.mit.edu/courses/3-15-electrical-optical-magnetic-materials-and-devices-fall-2006/b8c5e774bd8ce5038bd28b87da0d439b_lecture11_12_13.pdf)
- [NIST Atomic Spectroscopy Introduction](https://www.nist.gov/pml/atomic-spectroscopy-compendium-basic-ideas-notation-data-and-formulas/atomic-spectroscopy-0)
- [MIT OCW 6.974 Waveguides and Integrated Optics](https://ocw.mit.edu/courses/6-974-fundamentals-of-photonics-quantum-electronics-spring-2006/7ce86803e5d51ad749a86c37f5d72ce6_wavegude_int_opt.pdf)
- RP Photonics Encyclopedia, article on "Laser Diodes", Dr. Ruediger Paschotta, https://www.rp-photonics.com/laser_diodes.html
- RP Photonics Encyclopedia, article on "Laser Threshold", Dr. Ruediger Paschotta, https://www.rp-photonics.com/laser_threshold.html
- RP Photonics Encyclopedia, article on "Fabry-Perot Laser Diodes", Dr. Ruediger Paschotta, https://www.rp-photonics.com/fabry_perot_laser_diodes.html
- RP Photonics Encyclopedia, article on "Distributed Feedback Lasers", Dr. Ruediger Paschotta, https://www.rp-photonics.com/distributed_feedback_lasers.html
- RP Photonics Encyclopedia, article on "Resonator Modes", Dr. Ruediger Paschotta, https://www.rp-photonics.com/resonator_modes.html
