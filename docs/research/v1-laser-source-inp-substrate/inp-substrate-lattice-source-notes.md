# InP Substrate And Lattice Matching Source Notes

Date: 2026-05-21

Purpose: narrow source pack for enriching `src/pages/components/laser-source.mdx`, section `1. InP 单晶生长与衬底制备`. Use this pack to explain why an InP substrate can support telecom-band laser active layers, how lattice matching works, and why purity, dislocations, and epi-ready surfaces matter to laser behavior.

## Downloaded Files

- `downloads/ioffe-inp-basic.html`
  - Source: Ioffe Institute NSM Archive, "Basic Parameters of Indium Phosphide (InP)"
  - URL: https://www.ioffe.ru/SVA/NSM/Semicond/InP/basic.html
  - Use: InP zincblende material parameter context and lattice constant.

- `downloads/ioffe-gainasp-basic.html`
  - Source: Ioffe Institute NSM Archive, "Basic Parameters Gallium Indium Arsenide Phosphide (GaInAsP)"
  - URL: https://www.ioffe.ru/SVA/NSM/Semicond/GaInAsP/basic.html
  - Use: GaInAsP alloy parameters for alloys lattice-matched to InP; bandgap varies with composition while lattice constant can remain matched to InP.

- `downloads/ioffe-gainas-basic.html`
  - Source: Ioffe Institute NSM Archive, "Basic Parameters Gallium Indium Arsenide (GaInAs)"
  - URL: https://www.ioffe.ru/SVA/NSM/Semicond/GaInAs/basic.html
  - Use: InGaAs lattice-matched composition context on InP.

- `downloads/freiberger-technology.html`
  - Source: Freiberger Compound Materials, "Technology"
  - URL: https://freiberger.com/en/technology/
  - Use: high-pressure InP synthesis, VGF crystal growth, low dislocation density target, EPD and wafering flow.

- `downloads/ucsb-indium-phosphide-photonic-integrated-circuits.pdf`
  - Source: UCSB / OFC 2017 tutorial material, "Indium Phosphide Photonic Integrated Circuits"
  - URL: https://coldren.ece.ucsb.edu/sites/default/files/publications/indium-phosphide_photonic-interated-circuits.pdf
  - Use: InP as a III-V platform; zincblende structure; lattice constant around 5.87 A; InGaAsP/InP lattice-matched alloys for 1.31 and 1.55 um; InP/InGaAsP waveguide cross sections.

- `downloads/rp-photonics-laser-diodes.html`
  - Source: RP Photonics Encyclopedia, "Laser Diodes"
  - URL: https://www.rp-photonics.com/laser_diodes.html
  - Use: laser-diode lifetime and degradation context, including crystal dislocation growth and facet-related failure modes.

- `downloads/ganwafer-ingaasp-on-inp.html`
  - Source: Ganwafer, "Indium Gallium Arsenide Phosphide (InGaAsP) Thin Film Epitaxy on Indium Phosphide"
  - URL: https://www.ganwafer.com/indium-gallium-arsenide-phosphide/
  - Use with caution: supplier page for InGaAsP on InP and adjustable bandgap range. Prefer Ioffe/UCSB for lattice and material claims.

## Writing Takeaways

- InP is useful for telecom laser sources because it is a direct-bandgap III-V platform and because InP-compatible alloys can form active regions in the 1310 nm / 1550 nm windows.
- The substrate acts as a crystal template. Epitaxy tries to continue the atomic ordering of the substrate, so the natural lattice spacing of the deposited layer should be close to the substrate lattice spacing.
- Ioffe lists InP lattice constant as 5.8687 A. Ioffe also lists GaInAsP lattice-matched alloy parameters with lattice constant 5.8687 A for Ga0.47In0.53As_yP_1-y at 300 K.
- UCSB tutorial material frames InP as zincblende III-V material and explicitly associates InGaAsP/InP lattice-matched alloys with 1.31 and 1.55 um.
- Composition tuning in quaternary alloys is the key teaching point: one can change bandgap / target wavelength while keeping the lattice constant close to InP.
- Lattice mismatch creates strain. If strain is not kept under control, defects such as misfit dislocations can form and propagate through active layers.
- Defects and impurities matter because they can provide non-radiative recombination paths, leakage paths, and early reliability failure sites.
- Freiberger supports the manufacturing chain: high-purity In and P become polycrystalline InP, then VGF single-crystal InP, then wafering, polishing, cleaning and inspection. It also supports EPD as a surface-intersecting dislocation density metric.

## Boundaries

- This source pack supports the laser-source component page, but deep substrate manufacturing details should still link out to `learn/inp-substrate`, `learn/single-crystal-growth`, and related pages.
- Do not turn this section into a supplier or company page.
- Keep the component page focused on why the substrate matters to laser-source behavior: gain quality, threshold, dark current, output stability and reliability.
