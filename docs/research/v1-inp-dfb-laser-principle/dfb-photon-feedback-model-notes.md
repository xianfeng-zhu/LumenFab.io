# DFB Photon Feedback Model Notes

Date: 2026-05-31

Purpose: support the DFB laser 3D model interaction and animation choices in `src/components/DfbLaserModel.astro`. These notes focus on how photons are fed back by the grating and what a pedagogically accurate path should show.

## Sources

| Source | Type | URL | Local material |
|---|---|---|---|
| Farhan Rana, Cornell ECE 533, "Distributed Feedback Structures and Semiconductor DFB Lasers" | university lecture notes | https://courses.cit.cornell.edu/ece533/Lectures/handout13.pdf | `downloads/cornell-rana-dfb-structures-semiconductor-dfb-lasers.pdf`; `downloads/cornell-rana-dfb-structures-semiconductor-dfb-lasers.txt` |
| MIT OCW 6.772 Lecture 21, "Laser Diodes II" | university lecture notes | https://ocw.mit.edu/courses/6-772-compound-semiconductor-devices-spring-2003/resources/lecture21v2/ | `downloads/mit-6-772-lecture21-dfb-dbr-lasers.pdf`; `downloads/mit-6-772-lecture21-dfb-dbr-lasers.txt` |
| RP Photonics Encyclopedia, "Distributed Feedback Lasers" | professional encyclopedia | https://www.rp-photonics.com/distributed_feedback_lasers.html | `downloads/rp-photonics-distributed-feedback-lasers.html`; `downloads/rp-photonics-distributed-feedback-lasers.txt` |
| UGent PhD thesis, "Multi-Section InP-on-Silicon DFB Laser Diodes" | doctoral thesis | https://biblio.ugent.be/publication/8689696 | `downloads/ugent-multisection-inp-on-silicon-dfb-laser-diodes-phd.pdf`; `downloads/ugent-multisection-inp-on-silicon-dfb-laser-diodes-phd.txt` |

## Technical Takeaways

1. The optical field in a DFB laser is a guided longitudinal mode, not a stream of particles following a bent geometric track. The active MQW/SCH/ridge stack defines the transverse mode; the grating changes the longitudinal feedback condition.
2. The DFB grating is a periodic effective-index perturbation along the cavity. Each grating period contributes a weak partial reflection. Near the Bragg condition, these weak reflections add coherently and couple the forward-propagating and backward-propagating waves.
3. A useful first-order Bragg relation is `lambda_B = 2 n_eff Lambda`, with `n_eff` set by the guided mode and `Lambda` set by the fabricated grating period. More generally, `m lambda_B = 2 n_eff Lambda`.
4. The grating coupling coefficient `kappa` describes how strongly the grating couples the forward and backward waves. It depends on index perturbation, etch depth, duty cycle, length, and overlap between the grating and the optical mode.
5. A uniform DFB can favor two modes around the Bragg wavelength. A quarter-wave phase shift near the middle of the grating is a common way to favor one central mode and improve single-frequency behavior.
6. Non-target wavelengths are not physically "absorbed by a tooth" one by one. They fail to build a low-threshold resonant mode because their partial reflections are not phase-matched, so their field decays relative to the target mode through loss, insufficient feedback, and gain competition.
7. The output path should be shown only at the facet/output side. Inside the cavity, the better visual is a localized active-region photon/mode cloud plus counter-propagating motion along the cavity axis, with non-target colors fading and the target color continuing to the output.

## Model Guidance

- Keep the colored photon balls inside or very near the active-region optical mode volume.
- Show target-wavelength photons oscillating along the cavity length to imply coupled forward/backward waves and standing-wave-like feedback.
- Show non-target colors fading inside the cavity rather than traveling out through the facet.
- Keep the short blue output path at the emitting facet to represent the selected mode leaving the chip.
- Use any layer-explode control as a structural inspection tool; keep functional overlays such as current path and output beam understandable when layers are separated.

## Ridge / Waveguide Vertical Position Check

Purpose: answer whether the 3D model should place the waveguide above the active region, and whether light "enters" that waveguide.

Additional sources used:

| Source | Type | URL | Key model-relevant point |
|---|---|---|---|
| RP Photonics Encyclopedia, "Laser Diodes" | professional encyclopedia | https://www.rp-photonics.com/laser_diodes.html | Edge-emitting laser diodes often use a double heterostructure that confines carriers and serves as a waveguide for the optical field. Index-guided laser diodes use a waveguide structure to guide laser light within the diode. |
| MIT OCW 6.772 Lecture 21, "Laser Diodes II" | university lecture notes | https://ocw.mit.edu/courses/6-772-compound-semiconductor-devices-spring-2003/resources/lecture21v2/ | The vertical design separates carrier confinement and optical waveguide functions; the optical mode peaks near the center of the waveguide, while stripe/ridge structures define lateral confinement. |
| RP Photonics Encyclopedia, "Distributed Feedback Lasers" | professional encyclopedia | https://www.rp-photonics.com/distributed_feedback_lasers.html | Semiconductor DFB lasers use an integrated grating, often a corrugated waveguide; the grating may be above the active region or laterally coupled at the sides. |
| Farhan Rana, Cornell ECE 533, "Distributed Feedback Structures and Semiconductor DFB Lasers" | university lecture notes | https://courses.cit.cornell.edu/ece533/Lectures/handout13.pdf | DFB analysis treats the device as a waveguide mode perturbed by a periodic grating; example InGaAsP/InP DFB structures place SCH/QWs near the optical mode, with grating and cladding around that waveguide. |

Takeaways:

1. In a semiconductor laser, a waveguide is not a hollow track or separate pipe that external photons enter. It is the refractive-index and geometry structure that supports a guided optical mode inside the diode.
2. The photons are generated in the active MQW region. Spontaneous emission components that overlap the guided mode and satisfy feedback conditions are amplified by stimulated emission; other components decay through loss, weak feedback, and gain competition.
3. Vertically, the optical mode should sit around the SCH / waveguide core and overlap the MQW active region. The MQW itself can be much thinner than the full optical mode, so the visible optical-mode object should be centered near MQW/SCH rather than inside the upper ridge.
4. The p-side ridge is a laterally patterned structure above the active region. It changes the lateral effective index and defines the current aperture, so the guided mode and current stay under the ridge near the active region.
5. Therefore, a model can correctly show a solid ridge above the active region while showing the optical field and output beam at active-region height. The possible confusion is the label "Ridge waveguide": it should be explained as a lateral waveguide structure, not as the vertical location of the optical path.
