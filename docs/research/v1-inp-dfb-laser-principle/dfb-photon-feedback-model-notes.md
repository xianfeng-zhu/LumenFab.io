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
