# Coupler-Splitter Research Notes

**Date:** 2026-06-18  
**Purpose:** Source pack for a material-platform-independent explanation of coupler-splitter as a fundamental photonic building block.  
**Target page scope:** Explain what coupler-splitter is, the physical mechanisms behind the main variants, and why the component matters for PICs and transceivers. Keep the treatment independent of specific material platforms (Si, InP, TFLN, SiN); platform-specific strengths/weaknesses can be mentioned only as examples.

---

## Scope

The page section should treat "coupler-splitter" as a family of passive waveguide components that redistribute optical power between ports:

- **1×2 / 2×2 power splitters/combiners** (Y-branch, directional coupler, MMI, adiabatic coupler).
- The emphasis is on *physical mechanism*, *key parameters*, and *system-level role*.
- Keep out: deep foundry process recipes, specific PDK design rules, modulator internals, and fiber-coupling packaging details (those belong on adjacent pages).

---

## Sources

### 1. University Lecture Notes

#### Lehigh University — Y. Messaddeq, "Introduction to Dielectric Waveguide" (Lecture 19)
- **URL:** https://www.lehigh.edu/imi/teched/GlassProcess/Lectures/Lecture%2019_Messaddeq_Dielectricwaveguide.pdf
- **Type:** University lecture slides (PDF saved as `downloads/lehigh-lecture19-dielectric-waveguide.pdf`)
- **Key takeaways:**
  - Lists the main passive waveguide devices: Y- and X-junctions, grating-assisted directional couplers, Mach-Zehnder filters, MMI couplers, star couplers, AWGs.
  - Y-junction: a three-port power divider made by bifurcating a planar waveguide at a small angle; no extended coupling region.
  - Four-port couplers: coupled Y-junctions and X-couplers; power splitting depends on relative phase between inputs.
  - Introduces the idea that waveguides can be designed to couple intentionally rather than treating coupling only as crosstalk.
- **Concepts for the page:**
  - Y-junction as the simplest 1×2 splitter.
  - The distinction between a junction-based splitter and an evanescent-field coupler.
  - Directional couplers as a four-port device family.
- **Useful diagrams:** Slide sketches of Y-junction, coupled Y-junction, X-coupler, and MMI. Good for tracing how a single input becomes two outputs.

#### Purdue University — W.C. Chew, *Lectures on Theory of Microwave and Optical Waveguides*
- **URL:** https://engineering.purdue.edu/wcchew/course/tgwAll20160215.pdf
- **Type:** Graduate lecture notes (PDF saved as `downloads/purdue-chew-waveguides.pdf`)
- **Key takeaways:**
  - Chapter 4 treats coupling into waveguides and cavities; Chapter 7 covers directional couplers using microstrip lines.
  - Even/odd mode formalism for coupled transmission lines, characteristic impedances, and phase velocities.
  - Directional-coupler figures of merit: coupling, transmission, directivity, isolation.
- **Concepts for the page:**
  - Coupled systems support even and odd supermodes with different propagation constants; interference between them produces the familiar bar/cross power oscillation.
  - Directional couplers are characterized by coupling factor, transmission (insertion loss), directivity, and isolation.
- **Useful diagrams:** Schematics of four-port directional couplers and field/mode plots. Treat as background for the supermode explanation.

#### National Tsing Hua University (NTHU) — M.-C. Lee, *Integrated Photonic Devices* course notes
- **URL:** https://www.ee.nthu.edu.tw/mclee/Lecture/Integrated%20Photonic%20Devices/Note.htm
- **Type:** University course page with lecture-note links (HTML saved as `downloads/nthu-integrated-photonic-devices.html`)
- **Key takeaways:**
  - Course outline explicitly includes "Waveguide Couplers and Coupled Mode Theory" followed by "MZI, MMI and AWG".
  - References standard textbooks: Okamoto *Fundamentals of Optical Waveguides*, Chuang *Physics of Photonic Devices*, Hunsperger *Integrated Optics*.
- **Concepts for the page:**
  - Coupler-splitter sits logically between waveguide theory and larger functional blocks (MZI, AWG).
  - CMT and supermode analysis are the two standard ways to explain a directional coupler.

### 2. Textbooks / Monographs

#### G. Lifante, *Integrated Photonics: Fundamentals*
- **URL:** https://download.e-bookshelf.de/download/0000/5800/99/L-G-0000580099-0015240073.pdf
- **Type:** Textbook (PDF saved as `downloads/lifante-integrated-photonics-fundamentals.pdf`; note: this appears to be a short preview/sample)
- **Key takeaways:**
  - Defines integrated photonics as the integration of passive and active components on a common planar substrate.
  - Waveguides perform guiding, coupling, switching, splitting, multiplexing, and demultiplexing.
  - Chapter 4 introduces coupled-mode theory: modal orthogonality, coupling coefficients, co-directional and contra-directional coupling.
- **Concepts for the page:**
  - Coupler-splitter is one of the basic integrated-photonic building blocks alongside gratings, interferometers, modulators, and detectors.
  - Coupled-mode theory provides the vocabulary (coupling coefficient κ, beat length, phase matching) for directional couplers.

#### SPIE / OP-TEC, *Integrated Photonics* (2016 module)
- **URL:** https://spie.org/Documents/Courses/OP-TEC/Integrated_Photonics_2016.pdf
- **Type:** SPIE educational module (PDF saved as `downloads/spie-optec-integrated-photonics.pdf`)
- **Key takeaways:**
  - Covers III-V PIC passive devices: passive waveguide, input/output coupling, MMI coupler, AWG.
  - MMI coupler is introduced as a compact broadband splitter/combiner.
  - Defines insertion loss of an optical power coupler/splitter as a passive device that divides an input light beam.
- **Concepts for the page:**
  - Insertion loss as a key metric for any splitter/combiner.
  - MMI coupler as a robust alternative to directional couplers.
- **Useful diagrams:** Layout diagrams of MMI coupler and AWG; insertion-loss definition figure.

### 3. Supplier Application Notes

#### Ansys Lumerical — "Evanescent waveguide couplers"
- **URL:** https://optics.ansys.com/hc/en-us/articles/360042304694-Evanescent-waveguide-couplers
- **Type:** Simulation tool application note (content captured via FetchURL; HTML save failed due to Cloudflare challenge)
- **Key takeaways:**
  - A directional coupler is made from two straight waveguides close enough that evanescent modes overlap.
  - Light transfers back and forth between guides; the coupling fraction is set by gap and interaction length.
  - Coupling length for 100 % transfer: `L_100% = λ₀ / (2 Δn_eff)`, where Δn_eff is the difference between the effective indices of the symmetric and antisymmetric supermodes.
  - For a 500 nm × 200 nm SOI example with 50 nm gap, Δn_eff ≈ 0.060 and L_c ≈ 12.9 µm at 1.55 µm.
  - FDE, varFDTD, EME, and FDTD can all simulate the same structure; eigenmode solvers give the most accurate Δn_eff.
- **Concepts for the page:**
  - The supermode picture: the input mode excites both the even and odd supermodes of the coupled system; their relative phase evolves and produces the bar/cross oscillation.
  - Coupling length scales inversely with the supermode index splitting.
  - Small gap → strong coupling → short coupling length, but also more fabrication sensitivity.
- **Useful diagrams:** Mode profiles of even/odd supermodes, E-field propagation plot showing power oscillation, table comparing solver results.

#### FlexCompute / PhotonForge — "Analytic Directional Coupler Model"
- **URL:** https://docs.flexcompute.com/projects/photonforge/en/latest/guides/Analytic_Directional_Coupler.html
- **Type:** Simulation/modeling documentation (HTML saved as `downloads/flexcompute-analytic-directional-coupler.html`)
- **Key takeaways:**
  - Defines three lengths: interaction length `l_i`, coupling (beat) length `l_c`, and propagation length `l_p`.
  - Power coupling ratio: `c_r = sin²(π l_i / (2 l_c))`.
  - `l_i = l_c` → full crossover; `l_i = l_c / 2` → 3-dB / 50:50 splitter.
  - Propagation length affects phase accumulation but not power splitting.
  - The analytic model can reproduce FDTD S-parameters for both magnitude and phase, making it useful for circuit-level exploration.
- **Concepts for the page:**
  - Clean definition of interaction length vs. coupling length.
  - The sinusoidal dependence of splitting ratio on length.
  - Phase behavior of bar and cross ports matters when the coupler is used inside an MZI or coherent receiver.

#### Luceda Academy — "Y-branch" (SiFab PDK documentation)
- **URL:** https://academy.lucedaphotonics.com/pdks_sources/si_fab/si_fab/ipkiss/si_fab/components/y_branch/doc/
- **Type:** PDK / design-tool documentation (HTML saved as `downloads/luceda-ybranch.html`)
- **Key takeaways:**
  - A Y-branch is a 1×2 splitter with one input and two outputs.
  - Circuit model uses a simple S-matrix: equal transmission `t` to both outputs, with reflection terms `r1` (input) and `r2` (outputs).
  - Parametric and optimized (inverse-design) versions are both used in PDKs.
- **Concepts for the page:**
  - Y-branch as a reciprocal device: it can split or combine.
  - Excess loss and reflection are the main figures of merit.
  - Modern PDKs provide both parametric and optimized Y-branch cells.

### 4. Educational Tutorials

#### BYU CamachoLab — "Multimode Interferometers (MMIs)" (Photonics Bootcamp)
- **URL:** https://byucamacholab.github.io/Photonics-Bootcamp/pages/mmis.html
- **Type:** Educational tutorial (HTML saved as `downloads/byu-photonics-bootcamp-mmi.html`)
- **Key takeaways:**
  - MMI = multimode region + input/output tapers; denoted N×M by number of ports.
  - Function is based on self-imaging: the input field is replicated periodically at the beat length `L_π = π / (β₀ − β₁)`.
  - MMIs are robust against manufacturing errors and have lower wavelength sensitivity than directional couplers.
  - Common applications: Mach-Zehnder switches, WDM devices, optical hybrids, polarization-diversity photodetectors.
- **Concepts for the page:**
  - Self-imaging / Talbot effect as the MMI mechanism.
  - MMI beat length and image positions.
  - Comparison: MMI is more fabrication-tolerant than directional coupler.
- **Useful diagrams:** gdsfactory layout of 1×2 and 2×2 MMI, Meep simulation GIF idea.

### 5. Professional References / Reports

#### UC Santa Barbara — V. Moreira, *Integrated Optical True Time Delay Circuits* (Ph.D. dissertation, 2016)
- **URL:** https://ocaqpi.ece.ucsb.edu/sites/default/files/2021-04/2016_Moreira_Diessertation.pdf
- **Type:** Ph.D. dissertation (PDF saved as `downloads/ucsb-moreira-2016-directional-coupler.pdf`)
- **Key takeaways:**
  - Directional coupler is "one of the most fundamental building blocks in almost any photonic integrated circuit."
  - Derives transfer matrix for a symmetric coupler and the power-transfer equations `P_through = cos²(κL + φ)`, `P_cross = sin²(κL + φ)`.
  - Coupling coefficient is exponentially sensitive to waveguide separation because it depends on the evanescent-tail overlap.
  - Phase mismatch between non-identical waveguides prevents complete power transfer.
  - Includes measured data and fitted model for a 3-dB coupler design.
- **Concepts for the page:**
  - The directional coupler as the canonical 2×2 PIC building block.
  - Why identical waveguides (phase matching) are required for full crossover.
  - How coupling coefficient and interaction length determine the splitting ratio.
- **Useful diagrams:** Figure 27 (schematic), Figure 28 (field propagation), Figure 29 (measured through/cross data and fit).

#### NASA NEPP — *Photonic Integrated Circuit (PIC) Device Structures* (2016)
- **URL:** https://nepp.nasa.gov/files/26909/2016-561-Alt-Final-NEPPweb-IP-BOK-TN34661.pdf
- **Type:** Government technology report (PDF saved as `downloads/nasa-nepp-pic-device-structures.pdf`)
- **Key takeaways:**
  - MMI couplers can serve as power splitters/combiners on different material platforms and offer wider fabrication tolerances than directional couplers.
  - Self-imaging reproduces the input field in single or multiple images along the multimode waveguide.
  - Mach-Zehnder interferometer is shown as a structure with a Y-junction splitter, two arms, and a combiner.
- **Concepts for the page:**
  - Material-platform-independent framing: couplers work on many platforms.
  - MMI tolerance advantage over directional coupler.
  - Coupler-splitter is the immediate precursor to MZI-based modulators/switches.
- **Useful diagrams:** MMI schematic, MZI block diagram.

#### MDPI Books — *Recent Progress in Integrated Photonics* (book chapter)
- **URL:** https://mdpi-res.com/bookfiles/book/12297/Recent_Progress_in_Integrated_Photonics.pdf?v=1773886386
- **Type:** Edited book / review chapter (PDF saved as `downloads/mdpi-recent-progress-integrated-photonics.pdf`)
- **Key takeaways:**
  - Once light is on-chip it must be divided and routed; primary components are Y-branches, MMI couplers, and directional couplers.
  - Y-branch is the simplest and most robust power splitter; modern adiabatic or mode-evolution designs reduce excess loss to negligible levels.
  - MMI couplers offer wider bandwidth and better fabrication tolerance than directional couplers.
  - Directional couplers are simple but narrowband and fabrication-sensitive.
- **Concepts for the page:**
  - A concise three-way comparison of Y-branch, MMI, and directional coupler.
  - Excess loss numbers as context for "how good is good enough."
- **Useful diagrams:** Chapter figures showing the three splitter types and their typical layouts.

#### Universitat Politècnica de Catalunya (UPC) — A. Sosa, *Design of Silicon Photonic Multimode Interference Couplers* (M.S. thesis)
- **URL:** https://upcommons.upc.edu/server/api/core/bitstreams/0792dc8b-345d-4db4-a3fe-b498ca0f4a55/content
- **Type:** M.S. thesis (PDF saved as `downloads/upc-mmi-coupler-design.pdf`)
- **Key takeaways:**
  - Comprehensive summary of MMI self-imaging theory: general, paired, and symmetric interference mechanisms.
  - Lengths for single-image and N-fold image formation are tabulated for each mechanism.
  - Tapered access waveguides reduce reflections and cross-talk.
- **Concepts for the page:**
  - The three interference regimes of MMI and how they trade off length, port count, and excitation symmetry.
  - Tapering at inputs/outputs improves imaging quality.
- **Useful diagrams:** Tables of self-imaging lengths, layout figures for 1×2, 1×3, and 2×2 MMIs.

---

## Key Physics / Concepts to Cover

1. **What a coupler-splitter is**
   - A passive waveguide component that redistributes optical power among ports.
   - Reciprocal: can be used as a splitter (one-to-many) or a combiner (many-to-one), depending on propagation direction.
   - Common port counts: 1×2, 2×2, 1×N, N×N.

2. **Three main physical mechanisms**
   - **Y-branch splitter:** symmetric adiabatic bifurcation of one waveguide into two. The fundamental mode evolves gradually into the even supermode of the two output waveguides. Low wavelength dependence; length vs. loss trade-off.
   - **Directional coupler:** two parallel single-mode waveguides placed close enough for evanescent-field overlap. The coupled system has even and odd supermodes; their interference causes periodic power exchange. Splitting ratio is set by interaction length and coupling coefficient (gap/geometry).
   - **MMI coupler:** a wider multimode section supports many lateral modes. Self-imaging (Talbot effect) replicates the input field at specific beat lengths. More fabrication-tolerant and broadband than directional couplers; footprint is intermediate.

3. **Key parameters**
   - Splitting ratio / coupling ratio (e.g., 50:50, 90:10).
   - Insertion loss and excess loss (loss beyond the ideal split).
   - Coupling length / beat length.
   - Wavelength and polarization dependence.
   - Fabrication tolerance (gap sensitivity for DCs, width/length for MMIs, angle/profile for Y-branches).
   - Directivity / isolation / return loss (especially for 2×2 and N×N devices).

4. **Why it matters**
   - Building block for Mach-Zehnder interferometers (modulators, switches, sensors).
   - Power distribution networks in transceivers (splitting a CW laser to multiple modulators).
   - Combining/splitting in coherent receivers and optical hybrids.
   - Feeds WDM filters, AWGs, ring resonators, and photonic neural networks.

---

## Recommended Page Outline

1. **引言：什么是耦合-分束器**
   - Define coupler-splitter as a passive power-redistribution element.
   - Mention the reciprocal splitter/combiner role.
   - Preview the three main families (Y-branch, directional coupler, MMI).

2. **Y 分支分束器：从一路分到两路**
   - Geometry: single input waveguide gradually bifurcates into two outputs.
   - Physics: adiabatic mode evolution; symmetry guarantees equal split.
   - Key trade-off: branching angle vs. excess loss / device length.
   - Why it is broadband and fabrication-tolerant.

3. **定向耦合器：消逝场让光“来回跳”**
   - Geometry: two parallel waveguides with a narrow gap.
   - Supermode picture: even and odd modes, Δn_eff, beat length.
   - Coupling length formula and the sin²/cos² power oscillation.
   - 3-dB vs. full-crossover designs.
   - Phase relationship between bar and cross ports.
   - Wavelength sensitivity and phase-matching requirement.

4. **多模干涉耦合器：自成像分光**
   - Geometry: wide multimode section with input/output tapers.
   - Physics: self-imaging / Talbot effect, beat length L_π.
   - 1×2 and 2×2 operation; general / paired / symmetric interference.
   - Advantages: broadband, fabrication-tolerant, easy to scale to N×N.

5. **三种方案怎么选：一张表讲清 trade-off**
   - Compare Y-branch, directional coupler, and MMI on splitting principle, wavelength sensitivity, fabrication tolerance, footprint, and typical applications.

6. **它在 PIC 和光模块里做什么**
   - MZI modulators/switches need two 3-dB couplers.
   - CW laser power distribution in transmitters.
   - Coherent receivers and optical hybrids.
   - Connection to WDM filters and monitoring taps.

7. **设计时需要盯住的指标**
   - Splitting ratio, excess loss, insertion loss, bandwidth, polarization dependence, return loss, directivity/isolation.
   - Mention that exact numbers are platform-dependent but the physics is general.

8. **小结**
   - Coupler-splitter is a universal PIC building block; the choice of mechanism depends on the required bandwidth, tolerance, footprint, and phase properties.

---

## Claims to Use

- "A coupler-splitter is a passive device that redistributes optical power; the same structure often works as a splitter or a combiner because waveguide propagation is reciprocal."
- "The directional coupler relies on the overlap of evanescent tails; its coupling length is set by the difference between the effective indices of the even and odd supermodes."
- "In a symmetric directional coupler, complete power transfer only occurs when the two waveguides are phase-matched."
- "MMI couplers use self-imaging: many lateral modes interfere so that the input field is reproduced at periodic beat lengths, making them more fabrication-tolerant than directional couplers."
- "Y-branch splitters achieve broadband, low-loss splitting by adiabatically evolving the fundamental mode from one waveguide into the even supermode of two waveguides."
- "A 3-dB coupler is the standard building block for Mach-Zehnder interferometers and many coherent-receiver front-ends."

## Claims to Avoid

- "All PICs use directional couplers." (Different platforms and applications prefer Y-branches, MMIs, or adiabatic couplers.)
- "A coupler-splitter has no loss." (Every real device has insertion/excess loss; the goal is to minimize it.)
- "Directional couplers are broadband." (They are inherently wavelength-sensitive due to dispersion of the supermode index splitting.)
- "Y-branches are always smaller than MMIs." (Optimized MMIs can be competitive; trade-offs depend on specs.)
- Material-specific claims presented as universal (e.g., "Si photonics always uses MMI").

---

## Image / Diagram Ideas

- **Conceptual figure:** Three schematics side-by-side — Y-branch, directional coupler, MMI — with light flow arrows.
- **Directional coupler:** even/odd supermode profiles and a propagation plot showing the sinusoidal power exchange.
- **MMI:** input field → multimode region → self-imaged double output; annotate beat length.
- **Y-branch:** cross-section animation idea showing the fundamental mode evolving into two separated modes.
- **MZI use-case:** two 3-dB couplers + phase shifter, showing how couplers enable modulation/switching.
- **Comparison table:** as outlined above.

All saved reference files live in `docs/research/coupler-splitter/downloads/`.
