# Waveguide Research Notes

Research goal: collect professional, material-platform-independent source material for a reader-facing explanation of the optical waveguide as a building block for PICs and transceivers.

## Key concepts the page section should cover

1. **Definition** – A waveguide is a structure that confines and guides light, typically a higher-refractive-index core surrounded by a lower-index cladding.
2. **Physical mechanism** – Confinement arises from total internal reflection (TIR) at the core–cladding boundaries; index contrast makes the light “turn back” rather than radiate away.
3. **Ray picture vs. wave picture** – A ray description is intuitive, but at wavelength-scale dimensions the wave nature of light matters: only field patterns that reproduce themselves after each round trip can propagate stably.
4. **Modes** – These stable field patterns are waveguide modes. Each mode has a propagation constant β and an effective refractive index n_eff = β/k₀. The field extends slightly into the cladding as an evanescent tail.
5. **Polarization** – Modes are often classified as TE (transverse electric) or TM (transverse magnetic), depending on which field is perpendicular to the plane of incidence.
6. **Single-mode vs. multimode** – A waveguide can support only one guided mode (single-mode) or many (multimode). The normalized frequency / V-number controls how many modes propagate and where cutoff occurs.
7. **Geometry families** – Planar (slab) waveguides confine in one transverse direction; channel/strip waveguides confine in two; optical fibers are the classic cylindrical two-dimensional waveguide.
8. **Why it matters** – Waveguides are the “wires” of photonics: they route light between lasers, modulators, splitters, and detectors on a PIC and between chips/fibers in a transceiver. Their loss, dispersion, mode size, and bend tolerance set many system trade-offs.
9. **Stay platform-independent** – Do not anchor the explanation in Si, InP, TFLN, or a specific fabrication process; treat those as later pages.

---

## Sources saved

### 1. UBC – Saleh & Teich, *Fundamentals of Photonics*, Chapter “Guided-Wave Optics”
- **URL:** https://phas.ubc.ca/~halpern/454/notes/guides.pdf
- **Saved as:** `ubc_fundamentals_photonics_guides.pdf`
- **Quality tier:** Technical textbook chapter (2)
- **Key takeaways:**
  - Clear definition of optical waveguide and the core/cladding index picture.
  - Pedagogical planar-mirror waveguide, then planar dielectric waveguide.
  - Derivation of the self-consistency / mode condition.
  - Coupled-mode theory for adjacent waveguides (useful background for couplers/splitters).
- **Useful diagrams (saved in `figures/`):**
  - `figure_waveguide_types_ubc.png` – Fig. 7.0-1: slab, strip, and fiber waveguides.
  - `figure_integrated_optic_chip_ubc.png` – Fig. 7.0-2: integrated optic receiver/transmitter example showing how waveguides connect laser, modulator, photodiode, and fiber.
  - UBC pages 5–6 contain the bounce-angle / wavevector diagram (Fig. 7.1-3) for the planar-mirror waveguide, helpful for the “allowed angles = modes” intuition.
- **How to use:** Use for the main conceptual flow and for platform-independent figures.

### 2. Lehigh University – Messaddeq, “Introduction to Dielectric Waveguide” (Lecture 19)
- **URL:** https://www.lehigh.edu/imi/teched/GlassProcess/Lectures/Lecture%2019_Messaddeq_Dielectricwaveguide.pdf
- **Saved as:** `lehigh_lecture19_dielectric_waveguide.pdf`
- **Quality tier:** University lecture notes (1)
- **Key takeaways:**
  - Classification by geometry, mode structure, index profile, and material.
  - Planar waveguide picture with n₁ > n₂.
  - Waves inside the core: constructive-interference / self-consistency condition.
  - Waveguide condition, mode number m, propagation constants β and κ.
  - Mode field pattern, evanescent field, and cladding penetration.
  - TE and TM modes.
  - V-number and single-mode condition.
  - Representative channel waveguide geometries (buried, ridge, rib, strip-loaded, diffused) – useful only as examples of “channel” confinement, not as platform details.
- **Useful diagrams (saved in `figures/`):**
  - `figure_planar_waveguide_lehigh.png` (p. 12)
  - `figure_tir_self_interference_lehigh.png` (p. 13)
  - `figure_waveguide_condition_lehigh.png` (p. 14)
  - `figure_mode_field_evanscent_lehigh.png` (p. 18)
  - `figure_modes_planar_lehigh.png` (p. 19)
  - `figure_single_vs_multimode_lehigh.png` (p. 20)
  - `figure_te_tm_modes_lehigh.png` (p. 21)
  - `figure_v_number_lehigh.png` (p. 22)
- **How to use:** Primary source for the ray/wave physics and for most of the recommended figures.

### 3. University of Washington / Southern Taiwan University of Technology – Wang, “Optical Waveguides, Devices and Applications”
- **URL:** https://depts.washington.edu/mictech/optics/tainan_2004/waveguide_week1.pdf
- **Saved as:** `uw_optical_waveguides_week1.pdf`
- **Quality tier:** University lecture notes (1)
- **Key takeaways:**
  - Ray-optics approach vs. electromagnetic-wave approach.
  - Modes in rectangular waveguides, losses, and coupling.
  - V-number for fibers and LP-mode naming.
- **How to use:** Supplement for the electromagnetic description and for extending the section to fiber modes if desired.

### 4. IIT Delhi / SPIE STEP module – Ghatak & Thyagarajan, “Optical Waveguides and Fibers”
- **URL:** https://spots.augusta.edu/tcolbert/optics/spie%20book%20modules/00%20STEP%20Module%2007%20optical%20waveguides%20and%20fibers.pdf
- **Saved as:** `iit_spie_optical_waveguides_fibers.pdf`
- **Quality tier:** Reputable technical encyclopedia / educational module (3)
- **Key takeaways:**
  - Fiber as the canonical optical waveguide.
  - Numerical aperture, intermodal dispersion, single-mode vs. multimode fibers, graded-index fibers.
- **How to use:** Provide telecom/fiber context and the link between waveguide physics and real communication systems.

### 5. Purdue University – Chew, “Lectures on Theory of Microwave and Optical Waveguides”
- **URL:** https://engineering.purdue.edu/wcchew/course/tgwAll20160215.pdf
- **Saved as:** `purdue_chew_waveguides.pdf`
- **Quality tier:** University lecture notes (1)
- **Key takeaways:**
  - Rigorous electromagnetic treatment starting from Maxwell’s equations.
  - Mode orthogonality and the relationship between microwave and optical waveguides.
- **How to use:** Reference for deeper Maxwell-equation grounding if the section needs a more formal statement of why modes exist.

### 6. RP Photonics Encyclopedia – “Waveguides”
- **URL:** https://www.rp-photonics.com/waveguides.html
- **Saved as:** `rp_photonics_waveguides.txt`
- **Quality tier:** Reputable technical encyclopedia (3)
- **Key takeaways:**
  - Concise, accurate definition and overview.
  - Planar vs. channel waveguides.
  - Single-mode vs. multimode, effective index, dispersion, applications.
  - Lists material platforms (use only to confirm that the concept is general, not to dwell on any one platform).
- **How to use:** Quick cross-check and source for the “what is a waveguide?” opening and the applications list.

### 7. Ansys / Lumerical – “Introduction to Waveguide Design” (online course)
- **URL:** https://innovationspace.ansys.com/product/introduction-to-waveguide-design/
- **Quality tier:** Supplier application note / training (4)
- **Key takeaways:**
  - Waveguides described as the backbone of photonic integrated circuits.
  - Maxwell equations → light propagation → waveguide types, modes, confinement, effective indices.
- **How to use:** Cite as industry-side confirmation of why waveguide fundamentals matter for PIC design; no downloadable PDF was saved.

---

## Recommended figures for the page section

Use the extracted PNGs in `figures/`:

| File | Source | What it shows | Suggested use |
|------|--------|---------------|---------------|
| `figure_waveguide_types_ubc.png` | UBC Fig. 7.0-1 | Slab, strip, and fiber waveguides | Introduce geometry families |
| `figure_integrated_optic_chip_ubc.png` | UBC Fig. 7.0-2 | Laser → waveguide → modulator → coupler → fiber | Explain why waveguides matter on a PIC/transceiver |
| `figure_planar_waveguide_lehigh.png` | Lehigh p. 12 | n₁ > n₂ planar core/cladding | Index-contrast / TIR setup |
| `figure_tir_self_interference_lehigh.png` | Lehigh p. 13 | Ray bouncing inside the core | Self-consistency / round-trip phase picture |
| `figure_waveguide_condition_lehigh.png` | Lehigh p. 14 | Waveguide condition equation | Allowed angles = discrete modes |
| `figure_mode_field_evanscent_lehigh.png` | Lehigh p. 18 | Lowest-order mode and exponential evanescent tail | Mode profile and evanescent field |
| `figure_modes_planar_lehigh.png` | Lehigh p. 19 | m = 0, 1, 2 field patterns | Higher-order modes and cladding penetration |
| `figure_single_vs_multimode_lehigh.png` | Lehigh p. 20 | High-order vs. low-order ray paths and pulse spreading | Why single-mode matters for high-speed links |
| `figure_te_tm_modes_lehigh.png` | Lehigh p. 21 | TE and TM field orientations | Polarization classification |
| `figure_v_number_lehigh.png` | Lehigh p. 22 | V-number formula and single-mode condition | Quantitative single-mode criterion |

These are internal reference images; redraw final artwork rather than republishing the lecture slides directly.

---

## Recommended page-section outline

1. **Opening: the “wire” of photonics**
   - Define a waveguide as a structure that confines and routes light.
   - Mention the simplest picture: a higher-index core surrounded by lower-index cladding.

2. **How confinement works**
   - Total internal reflection at the core–cladding boundary.
   - Index contrast and critical angle (keep qualitative or use a simple formula with explanation).

3. **From rays to modes**
   - A ray bouncing inside the core must stay in phase with itself after each round trip.
   - Only certain bounce angles / propagation constants are allowed; each one is a mode.
   - Connect the discrete mode picture to the smooth field profile.

4. **Mode properties**
   - Propagation constant β and effective refractive index n_eff.
   - Mode profile (intensity distribution) and evanescent tail.
   - TE vs. TM polarization.

5. **Single-mode vs. multimode**
   - Intuitive difference and the role of core size and index contrast.
   - Introduce the normalized frequency (V-number) as the control parameter.
   - Why PICs and high-speed transceivers usually prefer single-mode waveguides.

6. **Common geometry families**
   - Planar (slab) – confinement in one dimension.
   - Channel/strip – confinement in two dimensions; the PIC workhorse.
   - Fiber – cylindrical two-dimensional waveguide for long-distance links.
   - Avoid tying the discussion to Si, InP, TFLN, or a fabrication recipe.

7. **Why waveguides matter for PICs and transceivers**
   - They connect lasers, modulators, splitters/combiners, and detectors.
   - They set loss budget, dispersion, mode-matching/coupling efficiency, and minimum bend radius.
   - Hand off to adjacent pages for modulators, couplers, and packaging.

8. **Brief closing**
   - Summarize the causal chain: index contrast → TIR → allowed modes → single/multimode behavior → system-level implications for PICs.

---

## Writing-style reminders (from `AGENTS.md`)

- Write as reader-facing explanation, not author notes or construction commentary.
- Define terms inline (e.g., mode, evanescent field, effective index) at first use.
- Use `TermNote` for compact term annotations where appropriate.
- Avoid material-specific digressions; keep the focus on the platform-independent concept.
- After any `.mdx` page is written, run `npm run build` before finishing.
