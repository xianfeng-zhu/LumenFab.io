# Grating Coupler Research Notes

Date: 2026-06-18

Purpose: source pack for a reader-facing educational section on grating couplers as a fundamental photonic component. Keep the explanation material-platform independent; do not make the page about Si, InP, or TFLN process details.

## Scope

Cover:

- What a grating coupler is and the physical problem it solves (coupling between a large free-space/fiber mode and a small guided PIC mode).
- The momentum-matching / phase-matching picture that makes coupling possible.
- Grating coupler as a periodic array of scatterers and as a leaky-wave converter.
- Reciprocity, directionality, reflection cancellation, and mode-matching concepts.
- Key performance metrics and trade-offs: coupling efficiency / insertion loss, bandwidth, polarization dependence, alignment tolerance, footprint.
- Why grating couplers matter for PICs and transceivers: vertical access, wafer-level test, multi-channel fiber arrays, avoidance of polished facets.

Keep out:

- Deep material-specific implementation recipes (etch depths, exact layer stacks, foundry design rules).
- Full package assembly sequence (refer to `docs/research/v1-optical-io-fiber-coupling/`).
- Detailed edge-coupler design (already covered in the optical-I/O source pack).
- Investment or market commentary.

## Relation to existing research

- `docs/research/v1-optical-io-fiber-coupling/` already covers the system-level optical interface, edge vs grating comparison, fiber arrays, connectors, and CPO packaging. This pack focuses on the grating coupler itself as a component and its physics.
- Cross-reference the optical-I/O pack for readers who want the broader fiber-to-chip interface context.

## Search Log

| Query | Source type | Useful results | Notes |
|---|---|---|---|
| `grating coupler photonics lecture notes physics how it works site:.edu` | university thesis / lecture | UC Berkeley thesis (Narasimha), Purdue thesis (Wirth), UW/Tsing Hua lecture notes | Best physical-picture sources. Use for momentum matching, leaky-wave, reciprocity, reflection cancellation. |
| `grating coupler "momentum matching" "phase matching" waveguide coupling textbook pdf` | textbook / review | *Integrated Photonics: Fundamentals* chapter, Chinese review in Wuli Xuebao | Use for coupled-mode and Bragg-condition framing. |
| `"Grating Couplers on Silicon Photonics: Design Principles, Emerging Trends and Practical Issues" pdf` | peer-reviewed review | Cheng et al., Micromachines 2020 | Comprehensive modern review; use for figures, metrics, and practical trade-offs. |
| `RP Photonics grating coupler encyclopedia` | technical encyclopedia | RP Photonics entry (web) | Useful concise definition and cross-links. |
| `Ansys Lumerical grating coupler application note` | vendor app note | Ansys Optics examples | Vendor examples for simulation context; treat as implementation illustration. |

## Source Summary

| Source ID | Source | Type | Key use | Reliability | Status |
|---|---|---|---|---|---|
| NARASIMHA-THESIS | A. Narasimha, UC Berkeley PhD thesis, Ch. 6–7 | University research / dissertation | Physical mechanism: momentum matching, leaky-wave picture, reciprocity, reflection cancellation, directionality | High | PDF + extracted text downloaded |
| WIRTH-THESIS | J. C. Wirth, Purdue MS thesis, Ch. 2 | University research / thesis | Introductory explanation, grating coupler as Bragg grating, fiber-to-chip setup | High | PDF + extracted text downloaded |
| CHENG-REVIEW | L. Cheng et al., "Grating Couplers on Silicon Photonics: Design Principles, Emerging Trends and Practical Issues," Micromachines 2020 | Peer-reviewed review | Bragg condition, loss channels, efficiency-enhancement strategies, practical issues | High | PDF + extracted text downloaded |
| WANG-LECTURE | W.-C. Wang, "Periodic Structure" lecture notes (ME557 / NTHU) | University lecture notes | Spatial harmonics and phase-matching equation | High | PDF + extracted text downloaded |
| YANG-REVIEW | Yang Biao et al., "The progress of silicon-based grating couplers," Wuli Xuebao 2013 | Peer-reviewed Chinese review | Chinese terminology and domestic-research context; principles of coupling efficiency and alignment tolerance | High | PDF + extracted text downloaded |
| RP-PHOTONICS | RP Photonics, Grating Couplers encyclopedia article | Technical encyclopedia | Concise definition and cross-references | Medium-high | web reference |
| NATURE-INDEX | Nature Index, Optical Coupling Techniques in Silicon Photonics | Topic summary | High-level context on fiber-to-chip coupling and grating vs edge distinction | Medium | web reference |

## Downloaded Artifacts

- `downloads/narasimha-berkeley-grating-coupler-thesis.pdf` — full UC Berkeley thesis.
- `downloads/narasimha-ch6-7-grating-coupler-theory.txt` — extracted text of Chapters 6–7 for quick reference.
- `downloads/wirth-purdue-grating-coupler-thesis.pdf` — full Purdue thesis.
- `downloads/wirth-ch2-grating-coupler-theory.txt` — extracted text of Chapter 2.
- `downloads/cheng-micromachines-grating-coupler-review.pdf` — Micromachines review PDF.
- `downloads/cheng-grating-coupler-review.txt` — extracted text of the review.
- `downloads/wang-periodic-structure-lecture.pdf` — periodic-structure lecture notes.
- `downloads/wang-periodic-structure-lecture.txt` — extracted text.
- `downloads/yang-wuli-xuebao-silicon-grating-coupler-review.pdf` — Chinese review PDF.
- `downloads/yang-silicon-grating-coupler-review.txt` — extracted text of first 10 pages.

## Source Notes

### NARASIMHA-THESIS: UC Berkeley PhD thesis, Ch. 6–7

URL: http://optoelectronics.eecs.berkeley.edu/ThesisAdit.pdf

Type: university dissertation.

Date accessed: 2026-06-18.

What it supports:

- Grating couplers are planar periodic perturbations that scatter light between a fiber/free-space beam and a high-index-contrast waveguide (Fig. 6.4).
- The horizontal wave-vector of incident light is too small to match the guided-mode propagation constant; the grating adds integer multiples of its reciprocal lattice vector so one harmonic can phase-match (Fig. 7.3).
- Grating action can be viewed as a leaky wave surface or as an array of distributed scattering centers (Fig. 7.6).
- Grating couplers are reciprocal (non-magnetic), so in-coupling and out-coupling efficiencies are identical.
- Efficiency is fundamentally about suppressing two loss channels: power transmitted into the substrate and power reflected from the surface.
- Reflection cancellation: the total reflected field contains a specular component and a leaky-wave component; by designing amplitudes and phases these can interfere to cancel (Fig. 7.11).
- Surrounding interfaces (e.g., buried oxide in SOI) modify the effective coupling length and the cover/substrate power split because reflected substrate light re-enters the grating.

Boundaries:

- Examples are SOI-specific, but the physical principles (momentum matching, reciprocity, leaky-wave interference) are platform-independent.
- Fabrication details and the specific low-loss dielectric-stack design belong to advanced implementation, not the introductory section.

Use in page:

- Primary source for the physical-principle narrative: momentum matching, leaky-wave picture, reciprocity, and reflection cancellation.
- Reference Fig. 6.4 and Fig. 7.3 conceptually when explaining what the grating does.

### WIRTH-THESIS: Purdue MS thesis, Ch. 2

URL: https://engineering.purdue.edu/~fsoptics/thesis/Wirth__Justin_MS.pdf

Type: university thesis.

Date accessed: 2026-06-18.

What it supports:

- A grating coupler is essentially a Bragg grating optimized to diffract light between a free-space source and a dielectric waveguide.
- Typical setup: fiber above chip, grating on the waveguide surface, taper to connect to nanophotonic wire.
- Common taper shapes (linear, parabolic) convert between the wide fiber mode and the narrow waveguide mode.
- A vertical grating coupler can be designed and characterized in terms of period, etch depth, duty cycle, and fiber angle.

Boundaries:

- SOI examples are illustrative; the definition itself does not depend on silicon.

Use in page:

- Introductory definition and the simple system picture (fiber → grating → taper → waveguide).
- Bridge from the generic Bragg-grating concept to the fiber-to-chip coupler.

### CHENG-REVIEW: Micromachines 2020 review

URL: https://doi.org/10.3390/mi11070666

Type: peer-reviewed review article.

Date accessed: 2026-06-18.

What it supports:

- Concise definition: a grating is a periodic variation of refractive index; a grating coupler operates in the diffraction regime (period comparable to or larger than the wavelength inside the material).
- Bragg / phase-matching condition: `k0 sin θ + m G = βm`, with `G = 2π/Λ` (Equation 1, Fig. 2).
- Loss channels in input/output coupling: upward radiation, downward radiation/substrate leakage, reflection, and back-reflection into the waveguide (Fig. 2a).
- Wave-vector diagrams for fiber-to-chip and chip-to-fiber coupling (Fig. 2b,c).
- Efficiency-enhancement strategies: directionality engineering (mirror, overlay, blazed/asymmetric grating), apodization to match the Gaussian fiber mode, focusing gratings to reduce footprint.
- Practical issues: testing, packaging, bandwidth, polarization sensitivity, alignment tolerance.

Boundaries:

- Review is silicon-centric; frame metrics and examples as typical values, not universal constants.

Use in page:

- Main source for the phase-matching equation and loss-channel diagram.
- Source for the efficiency-vs-bandwidth-vs-polarization trade-off discussion.
- Fig. 2a is a useful conceptual diagram for loss channels (upward, downward, reflected, back-reflected).

### WANG-LECTURE: Periodic Structure lecture notes

URL: https://depts.washington.edu/mictech/optics/me557/periodic%20structure.pdf

Type: university lecture notes.

Date accessed: 2026-06-18.

What it supports:

- Because of periodicity, the grating perturbs the waveguide mode and gives it a set of spatial harmonics with propagation constants `βv = β0 + v 2π/Λ` (`v = 0, ±1, ±2, …`).
- Phase matching occurs when one of these harmonics equals the tangential wave-vector of the incident light: `βv = k n1 sin θm`.
- Grating couplers can be viewed as surface-wave to leaky-wave converters.
- Advantages: reproducible, permanent, planar, compatible with high-index semiconductor waveguides where prism materials are hard to find.

Boundaries:

- Brief lecture slides; useful for equations and intuition, not for detailed design.

Use in page:

- State the spatial-harmonic phase-matching condition.
- Reinforce the surface-wave ↔ leaky-wave converter picture.

### YANG-REVIEW: Wuli Xuebao 2013 review

URL: https://wulixb.iphy.ac.cn/fileWLXB/journal/article/wlxb/2013/18/PDF/2013-18-184214.pdf

Type: peer-reviewed Chinese review.

Date accessed: 2026-06-18.

What it supports:

- Grating couplers play an important role in PICs because they enable efficient optical coupling on/off chip.
- Advantages for packaging and test: larger alignment tolerance and no requirement for wafer scribing or chip polishing.
- Discusses principles, structure types, and performance trends for silicon-based grating couplers.

Boundaries:

- Silicon-specific examples; use for Chinese terminology and for the practical-package argument.

Use in page:

- Cross-check Chinese engineering terms (光栅耦合器， 耦合效率， 对准容差， 带宽).
- Support the claim that grating couplers simplify wafer-level testing and high-density packaging.

### RP-PHOTONICS: Grating Couplers encyclopedia article

URL: https://www.rp-photonics.com/grating_couplers.html

Type: technical encyclopedia entry.

Date accessed: 2026-06-18.

What it supports:

- Concise definition of grating couplers as devices for coupling light between a waveguide and free space using a diffraction grating.
- Notes use for fiber-to-chip coupling and for coupling free-space beams into waveguides.

Boundaries:

- Encyclopedia-level; not a primary derivation source.

Use in page:

- Verify terminology and provide an accessible external reference.

### NATURE-INDEX: Optical Coupling Techniques in Silicon Photonics

URL: https://www.nature.com/nature-index/topics/l4/optical-coupling-techniques-in-silicon-photonics

Type: topic summary / review aggregator.

Date accessed: 2026-06-18.

What it supports:

- High-level framing: grating couplers use diffractive elements to redirect light vertically into the chip, offering wafer-scale testing and alignment tolerance at the cost of bandwidth and polarization sensitivity.
- Edge couplers transform the mode laterally and favor broadband, lower-PDL operation.

Boundaries:

- Summary content; use only for high-level context.

Use in page:

- Brief comparison with edge coupling in the "why it matters" section, pointing readers to the optical-I/O page for depth.

## Chapter Synthesis

Main teaching claims:

- A grating coupler is a periodic perturbation on a waveguide that uses diffraction to bridge a large free-space/fiber mode and a tightly confined guided mode.
- The central physics is momentum matching (phase matching): the grating adds integer multiples of its reciprocal lattice vector `K = 2π/Λ` to the incident light’s tangential wave-vector, allowing one spatial harmonic to match the guided-mode propagation constant `β`.
- Useful forms of the condition: `βv = β0 + v 2π/Λ` and `k0 sin θ + m 2π/Λ = βm`. The grating period selects which diffraction order couples to which guided mode at a given wavelength and angle.
- A grating coupler can be understood either as a leaky-wave converter or as a phased array of scatterers. Both pictures lead to the same design concerns: directionality, reflection, and mode overlap.
- Reciprocity means the same structure couples light into and out of the chip with the same efficiency; analysis can switch between in-coupling and out-coupling whichever is more intuitive.
- The main loss channels are (1) downward/substrate leakage, (2) reflection from the surface, (3) back-reflection into the waveguide, and (4) mode mismatch with the fiber.
- High-efficiency design therefore means: push radiation toward the fiber (directionality), cancel the reflected field by interference, and apodize the grating strength so the diffracted field profile matches the fiber mode.
- Practical trade-offs: grating couplers give vertical access, relaxed alignment tolerance, compact footprint, and wafer-level testability, but they are more wavelength- and polarization-sensitive than edge couplers.
- For PICs and transceivers, grating couplers are a key building block because they let light enter and leave the chip at arbitrary locations without polished facets, enabling high-density multi-fiber interfaces and automated wafer probing.

Common misconceptions to prevent:

- "A grating coupler is just a mirror that bends light." It is a diffractive, momentum-matching device; the period, angle, and wavelength are linked.
- "Higher coupling efficiency is only about deeper etch." Efficiency is a wave-interference problem involving directionality, reflection cancellation, and mode overlap, not merely etch depth.
- "Grating couplers and edge couplers compete on equal terms." They serve different interface requirements; one is not universally better.
- "Grating couplers work for any polarization." Most simple gratings are strongly polarization-sensitive because TE and TM modes have different effective indices and scattering strengths.

## Recommended Page-Section Outline

1. **What a grating coupler is**
   - Definition: a periodic corrugation or index modulation on a waveguide that couples a guided mode to a free-space/fiber mode by diffraction.
   - Simple system picture: fiber above the chip → grating → taper → on-chip waveguide.

2. **The problem it solves**
   - Mode-size mismatch between a large fiber mode and a sub-micron PIC waveguide mode.
   - Why direct butt coupling is inefficient: effective-index and mode-field mismatch cause reflection and radiation loss.

3. **Momentum matching: the core physics**
   - Tangential wave-vector of incident light is too small to match `β` of the guided mode.
   - The grating supplies spatial harmonics `βv = β0 + v 2π/Λ`.
   - Phase-matching condition `k0 sin θ + m 2π/Λ = βm` and how period/angle/wavelength are coupled.
   - Selecting the diffraction order and suppressing unwanted orders.

4. **Two equivalent physical pictures**
   - **Leaky-wave converter:** the guided mode becomes a radiating leaky mode inside the grating region.
   - **Phased array of scatterers:** each tooth scatters light; constructive interference sets the output angle.
   - Mention reciprocity: in-coupling and out-coupling are the same process run backward.

5. **Directionality and reflection cancellation**
   - Upward vs downward radiation; why some light is lost into the substrate.
   - How mirrors, overlays, or asymmetric/blazed teeth can improve directionality.
   - Reflection is not just Fresnel reflection: the leaky wave also contributes a reflected component; the two can interfere and cancel.

6. **Matching the diffracted field to the fiber**
   - A uniform grating radiates like an exponential/leaky wave; a fiber mode is Gaussian.
   - Apodization: vary coupling strength (duty cycle, depth, fill) along the grating to reshape the radiated field.
   - Focusing gratings: curve the teeth so the grating also focuses the beam, removing the need for a long taper.

7. **Performance metrics and trade-offs**
   - Coupling efficiency / insertion loss.
   - 1 dB and 3 dB bandwidth.
   - Polarization dependence.
   - Alignment tolerance.
   - Footprint and placement flexibility.
   - Brief contrast with edge couplers (refer to optical-I/O page for detail).

8. **Why it matters for PICs and transceivers**
   - Vertical access from the top of the chip.
   - Wafer-level optical probing without polishing facets.
   - Multiple I/O ports and fiber-array compatibility.
   - Enables compact, high-channel-count optical interconnects and co-packaged optics.

## Equations and figures to reference

- Phase-matching equation: `k0 sin θ + m G = βm`, where `G = 2π/Λ`.
- Spatial-harmonic form: `βv = β0 + v 2π/Λ`.
- Conceptual diagrams:
  - Narasimha Fig. 6.4: grating coupler as a planar fiber-to-chip interface.
  - Narasimha Fig. 7.3: momentum conservation / wave-vector diagram.
  - Cheng et al. Fig. 2a: loss channels (upward, downward, reflected, back-reflected).
  - Cheng et al. Fig. 2b,c: wave-vector diagrams for fiber-to-chip and chip-to-fiber coupling.
- Do not reproduce copyrighted figures directly; redraw simplified reader-facing versions for the website.
