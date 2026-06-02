# Package Integration Professional Source Pack

Date: 2026-05-24; updated 2026-06-02

Purpose: collect professional sources for the `Package integration` component page before writing reader-facing content.

Component: `src/pages/components/packaging.mdx`

## Scope

Cover:

- CPO package interface among switch ASIC, optical engine, substrate / interposer and host board.
- Optical engine placement, including PIC, EIC, laser source and fiber array.
- Internal laser, in-package laser tile and external laser / ELSFP supply interfaces.
- Flip-chip, copper pillar, microbump, substrate and interposer integration.
- Thermal path, mechanical stress, rework, socketed / soldered engine options, KGD and package yield.
- Interface metrics passed among ASIC, EIC, PIC, laser, fiber array, substrate, heat sink and test.

Keep out:

- Detailed laser physics; handled by `laser-source.mdx`.
- Detailed PIC device design; handled by `pic.mdx`.
- Full manufacturing-test flow; handled by `manufacturing-test.mdx`.
- Company ranking or investment analysis.

## Downloaded Artifacts

Saved under:

`docs/research/v1-package-integration/downloads/`

| Source ID | Local file | Status |
|---|---|---|
| OIF-CPO-FD | `oif-co-packaging-framework-fd-01-0.pdf`, `oif-co-packaging-framework-fd-01-0.txt` | copied from existing repository research |
| OIF-ELSFP | `oif-elsfp-01-0.pdf`, `oif-elsfp-01-0.txt` | copied from existing repository research |
| AMKOR-FLIP-CHIP | `amkor-flip-chip-ts102.pdf`, `amkor-flip-chip-ts102.txt` | downloaded and extracted |
| AMKOR-CU-PILLAR | `amkor-copper-pillar-flip-chip-ts106.pdf`, `amkor-copper-pillar-flip-chip-ts106.txt` | downloaded and extracted |
| AMKOR-2P5D-HDFO | `amkor-2-5d-hdfo-technical-article.pdf`, `amkor-2-5d-hdfo-technical-article.txt` | downloaded and extracted |
| ASE-SIPHO | official URL reference | download attempt returned 403; inspected via browser/web source |
| ASE-2P5D | official URL reference | download attempt returned 403; inspected via browser/web source |
| TSMC-ANNUAL-2024 | official annual-report HTML page | download attempt returned 403; inspected via browser/web source |
| ANSYS-TSMC-COUPE | official Ansys investor news page | download attempt returned 403; inspected via browser/web source |
| MDPI-EDGE-COUPLER | `mdpi-edge-couplers-review.html` | browser / access-shell artifact only; use URL as source |

Notes:

- OIF PDF downloads from the current sandbox stalled, so the files were copied from the existing `v1-light-source-laser-supply/downloads/` research directory into this package-specific directory.
- ASE, TSMC and Ansys pages blocked direct `curl` download with HTTP 403 in this environment. They were inspected through browser/web access and recorded as official URL references rather than saved HTML artifacts.
- MDPI returned a short browser-protection artifact to `curl`; the source was still inspected through web search/open results and is recorded as a reference URL.

## Source Summary

| Source ID | Source | Type | Key use | Reliability | Status |
|---|---|---|---|---|---|
| OIF-CPO-FD | OIF Co-Packaging Framework Document | Standards framework | Defines CPO assembly scope, host ASIC / optical engine proximity, use cases, socketed / soldered engine attachment, rework, yield, thermal and optical-source terminology. | High | saved |
| OIF-ELSFP | OIF External Laser Small Form Factor Pluggable Implementation Agreement | Standards implementation agreement | Defines ELSFP as a pluggable external laser form factor with electrical, optical, mechanical, thermal, management and safety interfaces. | High | saved |
| OIF-MGT-ELS | OIF Management of External Light Sources and Co-Packaged Optical Engines | Standards white paper | Explains ELS-to-OE management, CW-light resource control and host-board controller scope. | High | existing repository source, referenced |
| AMKOR-FLIP-CHIP | Amkor Flip Chip Packaging Technology Sheet | Manufacturer technical sheet | Explains flip-chip attach, solder reflow, underfill, shorter signal path, higher interconnect density and thermal package options. | Medium-high | saved |
| AMKOR-CU-PILLAR | Amkor Copper Pillar Flip Chip Technology Sheet | Manufacturer technical sheet | Explains copper pillar / microbump pitch, electromigration, wafer-level electrical test and underfill footprint implications. | Medium-high | saved |
| AMKOR-2P5D-HDFO | Amkor 2.5D Package and HDFO technical article | Manufacturer technical article | Explains silicon interposer, high-density fan-out and substrate/interposer choices for heterogeneous integration. | Medium-high | saved |
| ASE-SIPHO | ASE Silicon Photonics | OSAT technology page | Lists SiPh packaging building blocks and CPO / optical I/O application context. | Medium | URL/reference |
| ASE-2P5D | ASE 2.5D and 3D IC Packaging | OSAT technology page | Explains side-by-side silicon interposer integration, TSV, routing density, microbump density and optics integration. | Medium | URL/reference |
| TSMC-ANNUAL-2024 | TSMC 2024 Annual Report, p. 102 HTML edition | Foundry annual report | Supports SoIC as wafer-level frontend 3DIC stacking and COUPE as electrical chip on photonics chip using SoIC bond. | High | URL/reference |
| ANSYS-TSMC-COUPE | Ansys and TSMC Enable a Multiphysics Platform for Optics and Photonics | Official vendor/investor news | Supports COUPE as multi-die silicon photonics/CPO package requiring optical I/O, photonics, power integrity, EM and thermal simulation. | Medium-high | URL/reference |
| MDPI-EDGE-COUPLER | Edge Couplers in Silicon Photonic Integrated Circuits: A Review | Open-access review | Supports fiber-to-chip coupling, edge-coupler alignment tolerance, facet preparation and packaging difficulty. | Medium-high | URL/reference |
| FRONTIERS-CPO | Co-packaged optics (CPO): status, challenges, and solutions | Open-access review | Supports high-level CPO challenges: ELS, 2.5D packaging, thermal management and alignment. | Medium-high | existing repository source, referenced |

## Source Notes

### OIF-CPO-FD: Co-Packaging Framework Document

URL: https://www.oiforum.com/wp-content/uploads/OIF-Co-Packaging-FD-01.0.pdf

Type: standards framework document

Publisher / organization: Optical Internetworking Forum (OIF)

Local files:

- `downloads/oif-co-packaging-framework-fd-01-0.pdf`
- `downloads/oif-co-packaging-framework-fd-01-0.txt`

Key takeaways:

- CPO places communication engines close to the host ASIC on the same first-level substrate to reduce high-speed electrical channel loss and impedance discontinuities.
- The co-packaging assembly is described as an MCM with ASIC and optical / electrical engines placed on a high-performance substrate; examples include soldered engines, socketed engines and near-package optics.
- Engine attachment may use soldered ball-grid, copper pillar arrays or removable LGA-type connections; socketed approaches need retention hardware and consume substrate area.
- The framework explicitly surfaces footprint, wiring density, fiber-attachment interface, thermal approach, rework limits and high-count integration yield as CPO design issues.
- The document defines optical engine / optical tile, optical / electrical engine substrate, on-chip light source, TOSA, ROSA, PIC, TIA and related terms.

Use in component page:

- Define the ASIC host interface in package-integration language.
- Explain why CPO is not a single package drawing, but a family of soldered, socketed, substrate and near-package arrangements.
- Use for the rework/yield and optical-engine attach discussion.

### OIF-ELSFP: External Laser Small Form Factor Pluggable Implementation Agreement

URL: https://www.oiforum.com/wp-content/uploads/OIF-ELSFP-01.0.pdf

Type: standards implementation agreement

Publisher / organization: OIF

Local files:

- `downloads/oif-elsfp-01-0.pdf`
- `downloads/oif-elsfp-01-0.txt`

Key takeaways:

- ELSFP is an external laser source form factor intended to supply continuous optical power to optical engines that do not integrate their own light source.
- The form factor creates electrical, optical, mechanical, thermal, management and laser-safety requirements at a field-replaceable module interface.
- ELSFP makes blind-mate optical connection, serviceability and front-panel / host-board integration part of the package architecture.
- Optical application requirements vary by use case, so the implementation agreement does not fully specify every optical power, noise or wavelength requirement.

Use in component page:

- Treat ELSFP as a packaging and system interface, rather than a laser-chip type.
- Preserve and deepen the existing internal-laser versus external-laser comparison.

### OIF-MGT-ELS: Management of External Light Sources and Co-Packaged Optical Engines

URL: https://www.oiforum.com/wp-content/uploads/OIF-MGT-Co-Packaging-ELSFP-01.0.pdf

Type: standards white paper

Publisher / organization: OIF

Existing source note:

- `docs/research/v1-light-source-laser-supply/light-source-laser-supply-professional-sources.md`

Key takeaways:

- External light source management separates CW-light resource control from the optical data path.
- One ELS may serve one or more optical engines depending on system architecture.
- Host-board control, fault handling and status monitoring become part of the light-source management scope.

Use in component page:

- Explain that moving the laser outside the package changes management and fault isolation, in addition to thermal and mechanical layout.

### AMKOR-FLIP-CHIP: Flip Chip Packaging Technology Sheet

URL: https://amkor.com/wp-content/uploads/2018/02/Flip_Chip_TS102.pdf

Type: manufacturer technical sheet

Publisher / organization: Amkor Technology

Local files:

- `downloads/amkor-flip-chip-ts102.pdf`
- `downloads/amkor-flip-chip-ts102.txt`

Key takeaways:

- Flip-chip interconnect attaches bumped die to a substrate, commonly by solder reflow, followed by underfill between die and carrier.
- Shorter interconnect length reduces signal inductance and supports high-speed communication and switching devices.
- Full die surface interconnect supports higher signal density than edge-only wire-bonding.
- FCBGA options can include copper heat spreaders and controlled bondline die attach for lower thermal resistance from package to external thermal solution.
- TCNCP plus copper pillar can combine bond formation and underfill cure while supporting finer bump geometries by maintaining standoff and reducing shorting risk.

Use in component page:

- Explain why CPO optical engines use flip-chip / copper pillar style attachment for short electrical paths and dense I/O.
- Connect underfill, standoff and heat spreader choices to mechanical stress and thermal path.

### AMKOR-CU-PILLAR: Copper Pillar Flip Chip Technology Sheet

URL: https://amkor.com/wp-content/uploads/2018/02/Copper_Pillar_Flip_Chip_TS106.pdf

Type: manufacturer technical sheet

Publisher / organization: Amkor Technology

Local files:

- `downloads/amkor-copper-pillar-flip-chip-ts106.pdf`
- `downloads/amkor-copper-pillar-flip-chip-ts106.txt`

Key takeaways:

- Copper pillar bump is used for flip-chip interconnects where fine pitch, low cost and electromigration performance are important.
- The document lists fine-pitch capability down to 30 um in-line and 30/60 um staggered, and describes standard copper pillars, fine-pitch copper pillars and microbumps.
- Wafer-level electrical test before copper pillar bump is part of the offered flow.
- Smaller underfill fillet requirements can enable smaller package footprints.
- Reliability examples include thermal cycling, HAST, temperature/humidity and high-temperature storage tests.

Use in component page:

- Use copper pillar / microbump as the practical interconnect layer between EIC/PIC/engine substrate and package substrate.
- Explain why bump pitch, current density, electromigration, coplanarity and underfill affect both electrical performance and yield.

### AMKOR-2P5D-HDFO: Amkor 2.5D Package and HDFO

URL: https://amkor.com/wp-content/uploads/2018/12/Amkor_2.5D_Package_and_HDFO_Technical_Article_EN.pdf

Type: manufacturer technical article

Publisher / organization: Amkor Technology

Local files:

- `downloads/amkor-2-5d-hdfo-technical-article.pdf`
- `downloads/amkor-2-5d-hdfo-technical-article.txt`

Key takeaways:

- 2.5D integration uses an interposer or high-density fan-out layer to connect multiple die with shorter, denser routing than a conventional organic substrate alone can provide.
- Silicon interposer, RDL and high-density fan-out choices trade routing density, package size, cost, warpage and assembly flow.

Use in component page:

- Support the substrate / interposer section and explain why package integration is partly a routing-density problem.

### ASE-SIPHO: Silicon Photonics

URL: https://ase.aseglobal.com/silicon-photonics/

Type: manufacturer / OSAT technology page

Publisher / organization: ASE

Key takeaways:

- ASE describes CPO and optical I/O as ways to shorten electrical paths and improve energy efficiency over pluggable optics.
- ASE positions silicon photonics packaging around heterogeneous on-board optics, co-packaged optics and optical I/O.

Use in component page:

- Support the manufacturing view that package integration is a combined optical, electrical, assembly and test discipline.

### ASE-2P5D: 2.5D and 3D IC Packaging

URL: https://ase.aseglobal.com/3d-ic-packaging/

Type: manufacturer / OSAT technology page

Publisher / organization: ASE

Key takeaways:

- 2.5D places two or more active semiconductor chips side by side on a silicon interposer to achieve high die-to-die interconnect density.
- 3D stacks active chips for shorter interconnect and smaller footprint.
- Silicon interposers with TSV can bridge the fine-pitch capability gap between assembly substrate and integrated-circuit board.
- ASE lists ultra-high routing density, high microbump I/O density, pitch scalability and optics integration as benefits.

Use in component page:

- Explain substrate versus interposer choices and how die placement changes routing density, thermal extraction and optical escape.

### TSMC-ANNUAL-2024: TSMC 2024 Annual Report, p. 102

URL: https://investor.tsmc.com/static/annualReports/2024/english/ebook/files/basic-html/page102.html

Type: foundry annual report

Publisher / organization: TSMC

Key takeaways:

- TSMC describes SoIC as a wafer-level frontend 3DIC stacking platform with high bonding density, interconnect bandwidth, power efficiency and thin profile.
- The report states that first-generation COUPE uses an electrical chip on a photonics chip with SoIC bonding.
- TSMC also discusses CoWoS CPO development that integrates interposer-based CoW modules and COUPE-based optical I/O in one package.

Use in component page:

- Use COUPE as a technical example of vertical EIC/PIC integration through SoIC and package-level CPO integration, without making supplier ranking or market-share claims.

### ANSYS-TSMC-COUPE: Ansys and TSMC COUPE multiphysics platform

URL: https://investors.ansys.com/news-releases/news-release-details/ansys-and-tsmc-enable-multiphysics-platform-optics-and-photonics/

Type: official vendor / investor news release

Publisher / organization: Ansys

Key takeaways:

- The collaboration covers optics, photonics, power integrity, high-frequency electromagnetic analysis and thermal management for COUPE.
- The release describes COUPE as integrating multiple electrical ICs, a photonic IC and fiber optic connections into a single package.

Use in component page:

- Support the idea that advanced photonic packaging is a coupled optical, electrical, thermal and mechanical design problem.

### MDPI-EDGE-COUPLER: Edge Couplers in Silicon Photonic Integrated Circuits: A Review

URL: https://www.mdpi.com/2076-3417/10/4/1538

Type: open-access review

Publisher / organization: Applied Sciences / MDPI

Key takeaways:

- Fiber-to-chip coupling is often divided into off-plane grating coupling and in-plane edge coupling.
- Edge coupling can be efficient and broadband, but alignment tolerance is tight because the optical mode size is small.
- Practical edge-coupling packaging may involve fiber arrays, lensed fibers, chip facet preparation, polishing and anti-reflection measures.

Use in component page:

- Explain why fiber array placement is part of package integration rather than a late optical accessory.
- Use qualitatively for coupling tolerance, facet condition, active/passive alignment and epoxy / mechanical stability.

### FRONTIERS-CPO: Co-packaged optics (CPO): status, challenges, and solutions

URL: https://link.springer.com/article/10.1007/s12200-022-00055-y

Type: open-access review

Publisher / organization: Frontiers of Optoelectronics / Springer Nature

Existing source note:

- `docs/research/v1-light-source-laser-supply/light-source-laser-supply-professional-sources.md`

Key takeaways:

- CPO compresses the electrical path and moves optical engines near switching silicon, increasing thermal-management and optical-coupling pressure.
- External lasers reduce some thermal pressure on the optical engine but introduce optical alignment, fiber and polarization-management requirements.
- 2.5D and other hybrid integration approaches are common ways to describe PIC/EIC/ASIC package arrangements.

Use in component page:

- Provide review-level support for the tradeoff language across internal laser, external laser, 2.5D packaging, thermal control and optical interconnect.

## Page Structure Notes

Suggested reader-facing structure:

1. Define package integration as the physical system scope that turns laser, PIC, EIC, fiber array, substrate and thermal structure into a CPO optical engine.
2. Explain why CPO raises package-integration requirements: short electrical paths, dense optical escape, hot ASIC proximity, KGD and rework.
3. Walk through the integration chain: ASIC host interface -> die placement -> substrate/interposer -> flip-chip/microbump -> optical I/O -> thermal/mechanical -> test/yield.
4. Preserve internal laser versus ELSFP as package placement decisions.
5. End with interface metrics and a short summary.
