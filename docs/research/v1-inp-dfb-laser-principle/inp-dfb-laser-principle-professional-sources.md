# InP DFB Laser Principle Professional Source Pack

Date: 2026-05-19

Purpose: collect professional sources for a deep explanatory page on `InP / DFB laser principle` before writing reader-facing content.

Target page:

`src/pages/learn/inp-dfb-laser-principle.mdx`

Parent component page:

`src/pages/components/laser-source.mdx`

## Scope

Cover:

- What a semiconductor laser does: electrical carrier injection, photon generation, stimulated emission and optical feedback.
- Why InP-based material systems matter for 1310 nm / 1550 nm communication wavelengths.
- How p-n / p-i-n junctions, heterostructures and quantum wells create efficient optical gain.
- How waveguides, claddings, facets and distributed feedback structures control optical modes.
- Why DFB gratings favor stable single-frequency / single-longitudinal-mode output.
- How DFB laser metrics connect to CPO light-source needs: CW power, wavelength, linewidth, RIN, SMSR, temperature stability, coupling and reliability.

Also use this source pack to support the component-page principle overview in `src/pages/components/laser-source.mdx`. That overview should summarize the laser-source logic before the manufacturing flow:

1. A laser source converts electrical energy into ordered optical output.
2. InP-related III-V materials matter because direct-bandgap active regions can be engineered for 1310 nm / 1550 nm gain.
3. Forward-biased p-n / p-i-n heterostructures inject electrons and holes into the active region; quantum wells improve carrier confinement and gain.
4. Stimulated emission, optical gain and threshold distinguish laser operation from ordinary spontaneous emission.
5. Waveguides, claddings, cavities and facets confine light and provide feedback.
6. DFB gratings provide distributed wavelength-selective feedback and help stabilize single-longitudinal-mode output, measured by SMSR, linewidth and wavelength stability.
7. Real devices are constrained by high-power CW operation, heat, noise, optical feedback, reliability, coupling interfaces and manufacturing consistency.

Keep out:

- Full raw-material and wafer supply-chain detail. Link to `InP substrate` and raw-material pages instead.
- Full ELSFP system architecture. Keep that in the `Light source / laser supply` component page.
- Company investment analysis.
- Direct reuse of third-party figures on the public site. Reference images are for internal redraw and 3D-model guidance.

## Downloaded Artifacts

Saved under:

`docs/research/v1-inp-dfb-laser-principle/downloads/`

| Source ID | Local File | Local Text Extract | Status |
|---|---|---|---|
| CORNELL-DFB | `cornell-rana-dfb-structures-semiconductor-dfb-lasers.pdf` | `cornell-rana-dfb-structures-semiconductor-dfb-lasers.txt` | saved |
| NANOPLUS-DFB | `nanoplus-dfb-laser-concept.pdf` | `nanoplus-dfb-laser-concept.txt` | saved |
| RP-DFB | `rp-photonics-distributed-feedback-lasers.html` | `rp-photonics-distributed-feedback-lasers.txt` | saved |
| RP-LASER-DIODES | `rp-photonics-laser-diodes.html` | `rp-photonics-laser-diodes.txt` | saved |
| RP-LASER-THRESHOLD | `rp-photonics-laser-threshold.html` | `rp-photonics-laser-threshold.txt` | saved |
| RP-MODES | `rp-photonics-modes.html` | n/a | saved |
| MIT-6.772-DFB | `mit-6-772-lecture21-dfb-dbr-lasers.pdf` | `mit-6-772-lecture21-dfb-dbr-lasers.txt` | saved |
| MIT-3.46-LASERS | `mit-3-46-lecture11-optical-amplifiers-and-lasers.pdf` | `mit-3-46-lecture11-optical-amplifiers-and-lasers.txt` | saved |
| UGENT-INP-SI-DFB | `ugent-multisection-inp-on-silicon-dfb-laser-diodes-phd.pdf` | `ugent-multisection-inp-on-silicon-dfb-laser-diodes-phd.txt` | saved |
| LUMENTUM-CPO-CW | `lumentum-high-power-cw-laser-for-cpo-2022.pdf` | `lumentum-high-power-cw-laser-for-cpo-2022.txt` | saved |
| COHERENT-DFB15 | `coherent-10gbps-dfb-laser-diode-chip-datasheet.pdf` | `coherent-10gbps-dfb-laser-diode-chip-datasheet.txt` | saved |
| COHERENT-10G-PAGE | `coherent-10gbps-fp-dfb-laser-diode-chips-page.html` | `coherent-10gbps-fp-dfb-laser-diode-chips-page.txt` | saved |
| LUMENTUM-CW-PAGE | `lumentum-cw-lasers-page-web-extract.md` | n/a | web extract saved |
| LUMENTUM-SIPHO-PAGE | `lumentum-cw-lasers-sipho-transceivers-page-web-extract.md` | n/a | web extract saved |
| OIF-CPO-FD | `oif-co-packaging-framework-thermal-data-web-extract.md` | n/a | web extract saved |
| ERICSSON-CPO-ELS | `ericsson-cpo-els-thermal-stress-web-extract.md` | n/a | web extract saved |
| LUMENTUM-UHP-CPO | `lumentum-uhp-lasers-cpo-web-extract.md` | n/a | web extract saved |
| THORLABS-SF-WEB | `thorlabs-single-frequency-lasers-tutorial-web-extract.md` | n/a | web extract saved |

Notes:

- Thorlabs and Newport pages were downloaded for traceability, but their local text extracts are mostly empty because the public pages are rendered as app shells. Use them only as link references unless a later pass captures readable material.
- Cornell, RP Photonics and nanoplus are the high-value references for the first version of the page.
- Third-party reference images were saved under the gitignored local folder `reference-images/`. They are for research, 3D-model guidance and redraw reference only, not for direct website publication.

## Local Reference Images

Directory:

`docs/research/v1-inp-dfb-laser-principle/reference-images/`

Git status:

- Ignored by `.gitignore`.
- Do not commit these images to the public repository unless a later review explicitly decides a specific asset is safe to publish.

Saved images:

| Image file | Source | Why it was saved |
|---|---|---|
| `cornell-p01-ingasp-inp-waveguide-grating.png` | CORNELL-DFB | InGaAsP/InP waveguide and grating-region sketch for explaining distributed feedback geometry. |
| `cornell-p06-dfb-laser-structure-ingasp-sch-qws.png` | CORNELL-DFB | DFB laser cross-section with p-InP, InGaAsP SCH/QWs, grating region and n-InP substrate. |
| `cornell-p08-threshold-gain-dfb-modes.png` | CORNELL-DFB | Threshold gain and mode selection reference for explaining why one mode dominates. |
| `mit-6-772-p12-dfb-vs-dbr-structure.png` | MIT-6.772-DFB | DFB versus DBR geometry and active-region boundary. |
| `mit-6-772-p13-dfb-mode-degeneracy-qw-shift.png` | MIT-6.772-DFB | DFB mode degeneracy and quarter-wave-shift selection reference. |
| `mit-3-46-p13-single-frequency-options-divergence.png` | MIT-3.46-LASERS | Single-frequency methods and coupling/divergence tradeoff. |
| `mit-3-46-p14-dfb-dbr-structure-sketch.png` | MIT-3.46-LASERS | DFB and DBR structure sketches. |
| `nanoplus-p01-dfb-laser-schema-and-spectrum.png` | NANOPLUS-DFB | Vendor schematic of DFB ridge waveguide, metal gratings, spectrum and butterfly package. |
| `nanoplus-p02-spectrum-tuning-and-structures.png` | NANOPLUS-DFB | CW spectrum, mode-hop-free tuning and LD/ICL/QCL structure comparison. |
| `ugent-p62-fp-vs-dfb-structure-spectrum.png` | UGENT-INP-SI-DFB | FP versus DFB structure, operation and spectrum comparison. |
| `ugent-p63-dfb-bragg-phase-shift-spectra.png` | UGENT-INP-SI-DFB | Bragg relation, phase-shift diagrams and threshold spectra. |
| `lumentum-cpo-cw-dfb-p01-cos-power-spectrum.png` | LUMENTUM-CPO-CW | CPO CW DFB COS power/PCE and spectrum figures. |
| `lumentum-cpo-cw-dfb-p02-module-pce-spectrum.png` | LUMENTUM-CPO-CW | Packaged butterfly module PCE and spectrum over temperature. |
| `coherent-dfb15-p02-electro-optical-characteristics.png` | COHERENT-DFB15 | Practical DFB chip metrics: threshold, SMSR, wavelength coefficient, divergence and relaxation frequency. |
| `coherent-dfb15-p03-chip-dimensions-top-side-view.png` | COHERENT-DFB15 | DFB chip top and side view dimensions for scale reference. |
| `coherent-10gbps-dfb-laser-diode-chip-product-photo.jpg` | COHERENT-10G-PAGE | Vendor product photo of DFB chip for visual scale and package-free die reference. |

## Search Log

| Query | Source Type | Useful Results | Notes |
|---|---|---|---|
| `DFB semiconductor laser tutorial InP quantum well waveguide grating PDF` | University lecture / tutorial | Cornell DFB structures handout | Strong source for waveguide grating, InGaAsP/InP structure and DFB laser analysis. |
| `distributed feedback semiconductor laser principle tutorial` | Encyclopedia / professional reference | RP Photonics DFB lasers | Strong concise definitions and engineering cautions. |
| `InP DFB laser diode principle quantum well waveguide grating application note` | Vendor technical note | nanoplus DFB Laser Concept | Practical structure and spectrum references. |
| `RP Photonics laser diodes p-n junction quantum well InGaAsP InP DFB` | Encyclopedia / professional reference | RP Photonics laser diodes | Strong bridge from p-n / p-i-n injection to quantum wells, materials and DFB lasers. |
| `RP Photonics laser modes cavity modes semiconductor laser optical modes stimulated emission` | Professional encyclopedia | RP Photonics modes | Supports using “光学模式” as an industry term while explaining it before relying on the term. |
| `MIT OCW compound semiconductor devices DFB DBR laser lecture PDF` | University lecture | MIT 6.772 Lecture 21 | Strong DFB/DBR distinction and quarter-wave-shift explanation. |
| `MIT photonic materials devices optical amplifiers lasers DFB DBR PDF` | University lecture | MIT 3.46 Lecture 11 | Strong laser/gain/threshold/single-frequency overview. |
| `Multi-Section InP-on-Silicon DFB Laser Diodes PDF` | Doctoral thesis | UGent PhD thesis | Strong overview chapter for laser physics, QW materials, DFB operation, phase shift and III-V-on-Si context. |
| `High Power CW Laser for Co-Packaged Optics Lumentum PDF` | Conference paper / vendor R&D | Lumentum + Facebook CLEO 2022 paper | Practical CPO external laser source example with MQW InGaAsP/InP DFB and power/PCE/SMSR/RIN data. |
| `CPO laser source thermal margin reliability external laser source` | Standards / professional / vendor | OIF framework, Ericsson CPO RAN article, Lumentum UHP CPO page | Supports replacing vague “器件余量被放大” wording with thermal margin, power budget and reliability constraints. |
| `Coherent DFB laser diode chip datasheet 1270 1330 PDF` | Vendor datasheet | Coherent DFB15 datasheet | Practical O-band DFB chip metrics and chip geometry. |
| `Thorlabs DFB laser diode tutorial 1310 1550` | Vendor tutorial | Thorlabs pages | Public page found, but local extract is low-use. |
| `Newport laser diode technology DFB tutorial` | Vendor tutorial | Newport page | Public page found, but local extract is low-use. |

## Source Summary

| Source ID | Source | Type | Key Use | Reliability | Status |
|---|---|---|---|---|---|
| CORNELL-DFB | Farhan Rana, Cornell University, Semiconductor Optoelectronics Chapter 13 | University course handout | DFB waveguide gratings, Bragg scattering, DBR/DFB mirror behavior, InGaAsP/InP DFB laser structure, QWS DFB mode selection. | High | downloaded |
| NANOPLUS-DFB | nanoplus Technical Note: DFB Laser Concept | Vendor technical note | DFB ridge-waveguide / metal-grating concept, CW spectrum, mode-hop-free tuning, p-n junction and quantum-well structure cues. | Medium-high | downloaded |
| RP-DFB | RP Photonics Encyclopedia: Distributed Feedback Lasers | Professional encyclopedia | Clear DFB definition, phase shift, grating integration, single-frequency behavior, linewidth and optical-feedback sensitivity. | High | downloaded |
| RP-LASER-DIODES | RP Photonics Encyclopedia: Laser Diodes | Professional encyclopedia | Electrical pumping through p-n / p-i-n junctions, carrier recombination, quantum wells, InGaAsP/InP material system, threshold and reliability concepts. | High | downloaded |
| RP-LASER-THRESHOLD | RP Photonics Encyclopedia: Laser Threshold | Professional encyclopedia | Laser threshold as the point where optical small-signal gain equals resonator losses; below threshold emission is dominated by spontaneous or amplified spontaneous emission; lasing starts when stimulated emission into the laser mode overcomes losses. | High | downloaded |
| RP-MODES | RP Photonics Encyclopedia: Modes | Professional encyclopedia | Defines modes as field distributions satisfying boundary conditions, supports explaining guided modes, resonator modes and single-mode laser operation. | High | downloaded |
| MIT-6.772-DFB | MIT OCW 6.772 Lecture 21: Compound Semiconductor Devices | University lecture | DFB/DBR boundary, quantum-well active-layer evolution, mode stabilization and quarter-wave shift. | High | downloaded |
| MIT-3.46-LASERS | MIT OCW 3.46 Lecture 11: Optical Amplifiers and Lasers | University lecture | Stimulated emission, gain, threshold, cavity modes, single-frequency methods and DFB/DBR sketches. | High | downloaded |
| UGENT-INP-SI-DFB | Multi-Section InP-on-Silicon DFB Laser Diodes: Optimisations and Applications | Doctoral thesis | Detailed overview of laser diode physics, MQW materials, DFB grating, phase shift, III-V-on-Si tradeoffs and EML context. | High | downloaded |
| LUMENTUM-CPO-CW | High Power CW Laser for Co-Packaged Optics | Conference paper / vendor R&D | Practical CPO ELS example: high-power 1310 nm DFB, InGaAsP/InP MQW, cavity design, power, PCE, SMSR, RIN and coupling. | Medium-high | downloaded |
| COHERENT-DFB15 | Coherent 10 Gbps DFB Laser Diode Chip datasheet | Vendor datasheet | Practical DFB chip metrics: O-band wavelengths, threshold current, SMSR, wavelength temperature coefficient, chip dimensions. | Medium | downloaded |
| LUMENTUM-CW-PAGE | Lumentum CW Lasers product page | Vendor product page | Current industry framing: InP CW lasers for SiPh/CPO, DFB core, low RIN, narrow linewidth, GR-468 endurance. | Medium | web extract |
| LUMENTUM-SIPHO-PAGE | Lumentum CW Lasers for Silicon Photonics Transceivers | Vendor product page | Current industry framing: 1311 nm/CWDM4 examples, uncooled operation, SiPh transceiver applications up to 1.6T. | Medium | web extract |
| OIF-CPO-FD | OIF Co-Packaging Framework Document | Standards / framework document | CPO thermal monitoring, laser case/base temperature, temperature or thermal margin, high optical-engine power density and reliability framework. | High | web extract |
| ERICSSON-CPO-ELS | Ericsson Technology Review: Co-packaged optics in 6G RAN | Professional technology review | External laser sources improve reliability by addressing serviceability and thermal stress; lasers benefit from placement away from hot spots. | Medium-high | web extract |
| LUMENTUM-UHP-CPO | Lumentum UHP Laser Sources for CPO | Vendor product page | CPO light sources require optical power, spectral purity, stability and reliability in thermally demanding environments. | Medium | web extract |
| COHERENT-10G-PAGE | Coherent 10 GHz FP and DFB Laser Diode Chips page | Vendor product page | Current product framing: O-band InP FP/DFB chips for datacom, CWDM wavelength channels and operating temperature. | Medium | downloaded |
| THORLABS-SF-WEB | Thorlabs Single-Frequency Lasers Tutorial | Vendor tutorial | Practical DFB/DBR/ECL/VHG comparison, DFB grating placement and phase-shift explanation. | Medium | web extract |
| THORLABS-LD | Thorlabs Laser Diode Tutorial | Vendor tutorial | Potential future reference for packaged laser-diode handling and practical terms. Direct local app-shell extract was not retained. | Medium | link only |
| NEWPORT-LD | Newport Laser Diode Technology | Vendor tutorial | Potential future reference for laser-diode operation terminology. Direct local app-shell extract was not retained. | Medium | link only |

## Source Notes

### CORNELL-DFB: Distributed Feedback Structures and Semiconductor DFB Lasers

URL: https://courses.cit.cornell.edu/ece533/Lectures/handout13.pdf

Type: university course handout

Publisher / organization: Cornell University

Date accessed: 2026-05-19

Local files:

- `downloads/cornell-rana-dfb-structures-semiconductor-dfb-lasers.pdf`
- `downloads/cornell-rana-dfb-structures-semiconductor-dfb-lasers.txt`

What it supports:

- A DFB waveguide can be built in an InGaAsP/InP waveguide using a periodic grating region.
- DFB reflection is a distributed Bragg effect from periodic index perturbations, not a single discrete mirror.
- A DFB laser cavity has no clean separation between cavity and mirrors; the grating provides distributed feedback along the cavity.
- Example DFB structure includes p-doped InP, InGaAsP SCH and QWs, an InGaAsP/InP grating region and an n-doped InP substrate.
- Threshold gain and mode selection depend on the DFB structure and grating strength; phase-shifted DFB designs favor a single central mode.

Use in page:

- Use as the main source for the waveguide, DFB grating and cavity sections.
- Use its figures only as internal redraw / 3D-structure guidance.

### NANOPLUS-DFB: DFB Laser Concept

URL: https://nanoplus.com/fileadmin/user_upload/Data_sheets/Technical_Notes/nanoplus_TechnicalNote_DFB_Laser_Concept.pdf

Type: vendor technical note

Publisher / organization: nanoplus Nanosystems and Technologies GmbH

Date accessed: 2026-05-19

Local files:

- `downloads/nanoplus-dfb-laser-concept.pdf`
- `downloads/nanoplus-dfb-laser-concept.txt`

What it supports:

- DFB lasers provide single-mode emission at a precise wavelength with narrow linewidth.
- A practical DFB design can combine a ridge waveguide with metal gratings near the waveguide.
- The emission wavelength can be defined by the high-precision grating process.
- DFB lasers can run continuous-wave at room temperature and tune with current and temperature.

Use in page:

- Use as a practical complement to Cornell's theory-focused source.
- Use its visual references for future DFB laser 3D model planning, not as publishable site images.

### RP-DFB: Distributed Feedback Lasers

URL: https://www.rp-photonics.com/distributed_feedback_lasers.html

Type: professional encyclopedia

Publisher / organization: RP Photonics

Date accessed: 2026-05-19

Local files:

- `downloads/rp-photonics-distributed-feedback-lasers.html`
- `downloads/rp-photonics-distributed-feedback-lasers.txt`

What it supports:

- A DFB laser uses a periodic structure in the gain medium as a distributed Bragg reflector.
- A phase shift is commonly used to favor one axial mode and enable single-frequency operation.
- Semiconductor DFB lasers can use integrated grating structures such as corrugated waveguides or laterally coupled gratings.
- Typical telecom DFB linewidth is in the MHz range, with high-quality devices going lower.
- DFB lasers can be sensitive to back reflections, which can disturb single-frequency behavior.

Use in page:

- Use for compact definitions, DFB/DBR distinction and metric framing.
- Use cautiously for numerical examples; present them as typical ranges rather than universal values.

### RP-LASER-DIODES: Laser Diodes

URL: https://www.rp-photonics.com/laser_diodes.html

Type: professional encyclopedia

Publisher / organization: RP Photonics

Date accessed: 2026-05-19

Local files:

- `downloads/rp-photonics-laser-diodes.html`
- `downloads/rp-photonics-laser-diodes.txt`

What it supports:

- Laser diodes are electrically pumped semiconductor lasers whose gain is produced by current through a p-n or p-i-n junction.
- Electrons and holes recombine and can produce photons; stimulated emission plus optical feedback leads to laser oscillation.
- Edge-emitting laser diodes often use double heterostructures to confine carriers and optical fields.
- The active region is often thin enough to act as a quantum well.
- Emission wavelength is largely set by active-region bandgap; ternary and quaternary materials allow wavelength tuning.
- InGaAsP / InP is a material system for communication wavelengths around 1.1 to 1.65 micrometers.
- Output power above threshold scales roughly with current minus threshold current, while reliability is affected by facets, dislocations, metal diffusion, heat sinks and operating conditions.

Use in page:

- Use as the main source for the first-principles laser-diode chain: injection, recombination, gain, threshold and reliability.

### RP-LASER-THRESHOLD: Laser Threshold

URL: https://www.rp-photonics.com/laser_threshold.html

Type: professional encyclopedia

Publisher / organization: RP Photonics

Date accessed: 2026-05-22

Local files:

- `downloads/rp-photonics-laser-threshold.html`
- `downloads/rp-photonics-laser-threshold.txt`

What it supports:

- Laser threshold is the operating point where optical small-signal gain just equals resonator losses.
- Below threshold, the gain medium can still emit light through spontaneous emission or amplified spontaneous emission.
- Lasing starts when stimulated emission into the selected laser mode becomes strong enough to overcome losses.
- Practical operation often occurs above threshold to obtain significant output power, better efficiency and stable performance.

Use in page:

- Use for the fourth principle-overview card in `src/pages/components/laser-source.mdx`: explain the transition from weak spontaneous emission to threshold and above-threshold laser oscillation.

### RP-MODES: Modes

URL: https://www.rp-photonics.com/modes.html

Type: professional encyclopedia

Publisher / organization: RP Photonics

Date accessed: 2026-05-23

Local files:

- `downloads/rp-photonics-modes.html`

What it supports:

- In waveguides and resonators, a mode is an allowed field distribution that satisfies boundary conditions.
- A guided mode carries optical power along a waveguide with a specific spatial field pattern.
- A resonator mode is a field distribution that can be reproduced after one round trip, with amplitude reduced only by losses.
- Single-mode laser operation means most optical power is carried by one resonator mode.

Use in page:

- Use to keep “光学模式” as a professional term while introducing it with inline explanation before relying on it.
- Prefer reader-facing phrasing such as “满足波导限制、腔体反馈或 DFB 光栅选择条件的光场” in high-level overview sentences.

### MIT-6.772-DFB: Lecture 21, Compound Semiconductor Devices

URL: https://ocw.mit.edu/courses/6-772-compound-semiconductor-devices-spring-2003/2ab98fac1e90b41381ca8c5dbe4facf1_Lecture21v2.pdf

Type: university lecture note

Publisher / organization: MIT OpenCourseWare

Date accessed: 2026-05-19

Local files:

- `downloads/mit-6-772-lecture21-dfb-dbr-lasers.pdf`
- `downloads/mit-6-772-lecture21-dfb-dbr-lasers.txt`

What it supports:

- Laser-diode vertical structures evolve from homojunction to double heterojunction and quantum wells.
- DFB and DBR are end-mirror / feedback design choices, not material names.
- DFB reflectors sit inside the active laser cavity, while DBR reflectors sit outside the active region at either end.
- A DFB structure can favor modes around the Bragg resonance; adding a quarter-wavelength shift can remove degeneracy.

Use in page:

- Use to sharpen the DFB/DBR distinction and explain phase-shifted DFB without over-mathematizing the reader-facing page.

### MIT-3.46-LASERS: Lecture 11, Optical Amplifiers and Lasers

URL: https://ocw.mit.edu/courses/3-46-photonic-materials-and-devices-spring-2006/f94814c920d012501d9f0a734977b95d_3_46lec11_lasers.pdf

Type: university lecture note

Publisher / organization: MIT OpenCourseWare

Date accessed: 2026-05-19

Local files:

- `downloads/mit-3-46-lecture11-optical-amplifiers-and-lasers.pdf`
- `downloads/mit-3-46-lecture11-optical-amplifiers-and-lasers.txt`

What it supports:

- Stimulated emission creates photons matching direction, wavelength and phase.
- Optical gain and threshold condition connect pump current to lasing.
- Fabry-Perot cavities can support multiple longitudinal modes under the gain bandwidth.
- Single-frequency laser methods include reduced dimensions, external/two-cavity designs, DBR gratings and DFB gratings.
- DFB grating feedback is distributed along the device, while angular divergence affects coupling into fibers or optics.

Use in page:

- Use for the opening intuition, gain/threshold explanation and the fiber-coupling tradeoff section.

### UGENT-INP-SI-DFB: Multi-Section InP-on-Silicon DFB Laser Diodes

URL: https://www.photonics.intec.ugent.be/download/phd_252.pdf

Type: doctoral thesis

Publisher / organization: Ghent University / Photonics Research Group

Date accessed: 2026-05-19

Local files:

- `downloads/ugent-multisection-inp-on-silicon-dfb-laser-diodes-phd.pdf`
- `downloads/ugent-multisection-inp-on-silicon-dfb-laser-diodes-phd.txt`

What it supports:

- Clear educational overview of lasers as active medium + pump mechanism + optical feedback.
- Direct bandgap III-V materials such as InP and GaAs support active devices.
- MQWs improve gain and reduce threshold versus bulk active regions; SCH layers help light confinement.
- InGaAsP/InP and InAlGaAs/InP are mature 1.3 / 1.55 micrometer material systems, with different conduction-band offset and temperature behavior.
- DFB lasers replace FP mirrors with a periodic structure along the cavity and use distributed reflections from effective-index changes.
- DFB grating period is on the order of hundreds of nanometers and sets the Bragg wavelength.
- A quarter-wave phase shift can enforce single-mode behavior at the Bragg wavelength.
- DFB is favored in optical communication because of single-mode behavior and high SMSR.

Use in page:

- Use as the main detailed cross-check for the 7-section reader flow and for a future InP-on-Si / III-V-on-Si page.

### LUMENTUM-CPO-CW: High Power CW Laser for Co-Packaged Optics

URL: https://www.lumentum.com/sites/default/files/2025-12/high_power_cw_laser_for_co-packaged_optics_2022.pdf

Type: conference paper / vendor R&D paper

Publisher / organization: Lumentum + Facebook, CLEO 2022 / Optica Publishing Group

Date accessed: 2026-05-19

Local files:

- `downloads/lumentum-high-power-cw-laser-for-cpo-2022.pdf`
- `downloads/lumentum-high-power-cw-laser-for-cpo-2022.txt`

What it supports:

- CPO external laser sources benefit from laser serviceability, separation from switch-IC heat and removal of integrated lasers from SiPh die.
- A CPO ELS may need high optical power and high power conversion efficiency.
- Demonstrated device uses an InGaAsP/InP MQW DFB structure.
- Low QW confinement factor, low cavity loss, high saturation power, large spot size, long cavity and grating-coupling optimization are used for high-power CW operation.
- Reported example metrics include high output power, SMSR above 45-50 dB, RIN below -156 dBc/Hz in the tested range and 86% coupling to lensed PM fiber.

Use in page:

- Use to connect DFB physics to real CPO external laser source design constraints.
- Use numbers only as a concrete example from one demonstrated prototype, not as universal DFB requirements.

### COHERENT-DFB15: 10 Gbps DFB Laser Diode Chip Datasheet

URL: https://www.coherent.com/content/dam/coherent/site/en/resources/datasheet/networking/10gbps-dfb-laser-diode-chip-ds.pdf

Type: vendor datasheet

Publisher / organization: Coherent

Date accessed: 2026-05-19

Local files:

- `downloads/coherent-10gbps-dfb-laser-diode-chip-datasheet.pdf`
- `downloads/coherent-10gbps-dfb-laser-diode-chip-datasheet.txt`

What it supports:

- Practical DFB chip specs include threshold current, slope efficiency, forward voltage, series resistance, SMSR, wavelength temperature coefficient, divergence and relaxation oscillation frequency.
- O-band CWDM wavelengths cover roughly 1270 nm to 1330 nm.
- Chip dimensions are on the order of hundreds of micrometers.

Use in page:

- Use for a practical metrics table and to show that real DFB chips are tiny bare dies before packaging.

### LUMENTUM-CW-PAGE and LUMENTUM-SIPHO-PAGE: CW Laser Product Pages

URLs:

- https://www.lumentum.com/en/products/data-center/cw-lasers
- https://www.lumentum.com/en/products/data-center/cw-lasers/cw-lasers-sipho-transceivers

Type: vendor product pages

Publisher / organization: Lumentum

Date accessed: 2026-05-19

Local files:

- `downloads/lumentum-cw-lasers-page-web-extract.md`
- `downloads/lumentum-cw-lasers-sipho-transceivers-page-web-extract.md`

What it supports:

- Current industry product language frames InP CW lasers as stable, narrow-linewidth, low-RIN sources for SiPh and CPO.
- Vendor pages connect shared DFB core, buried heterostructure foundation, EML lineage, uncooled operation examples and reliability qualification.

Use in page:

- Use as current industry context after the physics sections.
- Keep vendor claims separate from neutral textbook/lecture facts.

### THORLABS-SF-WEB: Single-Frequency Lasers Tutorial

URL: https://www.thorlabs.com/single-frequency-lasers-tutorial?tabName=ECL+Tutorial

Type: vendor tutorial

Publisher / organization: Thorlabs

Date accessed: 2026-05-19

Local files:

- `downloads/thorlabs-single-frequency-lasers-tutorial-web-extract.md`

What it supports:

- Practical comparison of ECL, DFB, VHG-stabilized and DBR single-frequency lasers.
- DFB grating is internal to the diode structure and coupled close to the active region.
- DFB phase-shift sections help mode selection and manufacturing yield.
- DFB is mode-hop-free over a narrow tuning range, while ECL/DBR/VHG have different power, tuning and stability tradeoffs.

Use in page:

- Use in a future comparison section or page, especially for why DFB is not simply "best" in every dimension.

## Content Implications

For the first reader-facing version, organize the page as a vertical explanation:

1. 激光器在做什么：电能到有序光。
2. 为什么是 InP：通信波段 III-V 直接带隙平台。
3. 从电流到光子：p-n / p-i-n 注入、量子阱和有源区。
4. 受激辐射：为什么它不是 LED。
5. 波导与谐振腔：限制光场、提供反馈、达到阈值。
6. DFB 光栅：分布式反馈和波长选择。
7. 指标和应用：CW power、wavelength、SMSR、linewidth、RIN、温漂、耦合和可靠性。
8. 完整链条：从材料到 CPO 光源的 recap。
9. 3D 模型 brief：后续模型应该展示 substrate、MQW、SCH、ridge、grating、optical mode、facet、submount 和 fiber/PIC coupling 的位置关系。

## Open Questions For Later

- Whether the site should eventually separate `DFB laser principle` and `InP DFB laser fabrication` into two pages.
- Whether to create a 3D model brief for a DFB ridge waveguide with active region, cladding, grating and output facet.
- Whether to add a separate comparison page for FP / DFB / DBR / ECL / EML after this first deep page.
