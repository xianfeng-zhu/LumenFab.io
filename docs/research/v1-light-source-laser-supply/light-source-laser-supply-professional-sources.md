# Light Source / Laser Supply Professional Source Pack

Date: 2026-05-18

Purpose: collect professional sources for the `Light source / laser supply` component page before writing reader-facing content.

Component: `src/pages/components/laser-source.mdx`

## Scope

Cover:

- External laser source (ELS) and ELSFP in CPO systems.
- Why CPO may move lasers outside the optical engine.
- Internal laser versus external laser source boundaries.
- CW light delivery from ELS to optical engine.
- Practical laser-source metrics: output power, wavelength, linewidth, RIN, PCE/WPE, PER, SMSR, thermal behavior, serviceability.
- How light-source discussion connects back to InP substrate, epitaxy, active region, DFB/EML/CW laser, packaging, optical I/O, test and reliability.

Keep out:

- Company investment analysis.
- Company ranking.
- Full CPO architecture, except where needed to explain the light-source boundary.
- General laser physics already covered in 03-04 pages.
- Full optical connector design. Use only enough to explain ELSFP and optical power delivery.

## Downloaded Artifacts

Saved under:

`docs/research/v1-light-source-laser-supply/downloads/`

| Source ID | Local PDF | Local Text Extract | Status |
|---|---|---|---|
| OIF-ELSFP | `oif-elsfp-01-0.pdf` | `oif-elsfp-01-0.txt` | saved |
| OIF-MGT-ELS | `oif-mgt-co-packaging-elsfp-01-0.pdf` | `oif-mgt-co-packaging-elsfp-01-0.txt` | saved |
| OIF-CPO-FD | `oif-co-packaging-framework-fd-01-0.pdf` | `oif-co-packaging-framework-fd-01-0.txt` | saved |
| FRONTIERS-CPO | `frontiers-cpo-status-challenges-solutions-2023.pdf` | `frontiers-cpo-status-challenges-solutions-2023.txt` | saved |
| FURUKAWA-ELS | `furukawa-external-laser-source-cpo-2024.pdf` | `furukawa-external-laser-source-cpo-2024.txt` | saved |

Notes:

- Molex ELSFP optical connector datasheet was readable in browser but direct download timed out twice with no bytes received. It is recorded as reference-only.
- Lumentum product pages are recorded as web references, not copied into the repository.
- Third-party reference images were saved under the gitignored local folder `reference-images/`. They are for research, 3D-model guidance and redraw reference only, not for direct website publication.

## Local Reference Images

Directory:

`docs/research/v1-light-source-laser-supply/reference-images/`

Git status:

- Ignored by `.gitignore`.
- Do not commit these images to the public repository unless a later review explicitly decides a specific asset is safe to publish.

Saved images:

| Image file | Source | Why it was saved |
|---|---|---|
| `oif-mgt-p05-laser-source-use-cases.png` | OIF-MGT-ELS | Internal laser versus external light source use cases. |
| `oif-mgt-p08-els-oe-relationships.png` | OIF-MGT-ELS | ELS-to-OE mapping patterns. |
| `oif-mgt-p11-management-architecture-host-board.png` | OIF-MGT-ELS | Host-board ELS management architecture. |
| `oif-mgt-p15-external-light-data-path.png` | OIF-MGT-ELS | Data-path creation when OE uses external CW light. |
| `oif-elsfp-p08-module-and-cpo-application.png` | OIF-ELSFP | ELSFP module and CPO application overview. |
| `oif-elsfp-p12-host-connector-cage-heatsink.png` | OIF-ELSFP | Host connector, cage, heatsink and ELSFP module layout. |
| `oif-elsfp-p28-module-side-optical-interface.png` | OIF-ELSFP | Module-side optical interface and optical connector. |
| `oif-elsfp-p37-fiber-naming-definition.png` | OIF-ELSFP | Fiber naming definition for 3-row MT-36 ELSFP interface. |
| `oif-elsfp-p59-power-turn-on-procedure.png` | OIF-ELSFP | Recommended ELSFP power turn-on procedure. |
| `oif-cpo-framework-p18-laser-sources-use-cases.png` | OIF-CPO-FD | Laser source terminology and use cases. |
| `oif-cpo-framework-p19-optical-power-scenarios.png` | OIF-CPO-FD | Optical power scenarios from ELS to OE. |
| `oif-cpo-framework-p20-els-interdependencies.png` | OIF-CPO-FD | ELS dependencies across CPO ecosystem. |
| `frontiers-p04-cpo-els-config-and-budgets.png` | FRONTIERS-CPO | ELS configuration and link/power budget tables. |
| `furukawa-p01-cpo-schematic.png` | FURUKAWA-ELS | CPO schematic showing switch ASIC, ELS and optical transceivers. |
| `furukawa-p02-els-layouts-and-tosa-design.png` | FURUKAWA-ELS | QSFP/OSFP/ELSFP ELS layouts and compact 8-channel TOSA design. |
| `furukawa-p03-tosa-structure-thermal-model-photo.png` | FURUKAWA-ELS | TOSA top structure, thermal deformation model and photo. |
| `furukawa-p05-pigtailed-qsfp-els-and-control.png` | FURUKAWA-ELS | Pigtailed QSFP ELS and control-circuit block diagram. |
| `furukawa-p06-els-photos-and-mt-ferrule.png` | FURUKAWA-ELS | Fabricated ELS photos and MT ferrule end-face reference. |
| `lumentum-elsfp-350-product-render.png` | LUMENTUM-ELS | Product render showing ELSFP module exterior shape. |

## Search Log

| Query | Source Type | Useful Results | Notes |
|---|---|---|---|
| `OIF ELSFP external laser small form factor pluggable implementation agreement PDF` | Standards / IA | OIF ELSFP IA | Primary source for ELSFP form factor and interoperability boundary. |
| `OIF co-packaging external laser source management white paper CPO` | Standards / white paper | OIF management white paper | Primary source for ELS/OE management model. |
| `co-packaged optics external laser source link budget CPO laser package wall-plug efficiency` | Open review paper | Frontiers of Optoelectronics CPO review | Strong source for why ELS matters and what metrics become hard. |
| `CPO pluggable laser source Broadcom external laser source` | Vendor / industry | Lumentum, Broadcom ecosystem notes | Useful for current product language, not a neutral standard. |
| `Development of an External Laser Source for Co-Packaged Optics Furukawa` | Vendor R&D paper | Furukawa Electric Review No.55 | Concrete design example with ELS power, PCE, thermal and optical metrics. |
| `External Laser Source Guidance CPO Collaboration PDF` | Standards / legacy lead | No direct official copy located | Furukawa and J-GLOBAL reference the document; keep as an open question. |

## Source Summary

| Source ID | Source | Type | Key Use | Reliability | Status |
|---|---|---|---|---|---|
| OIF-ELSFP | OIF ELSFP Implementation Agreement | Standards implementation agreement | Defines ELSFP form factor for external CW laser delivery to CPO optical engines. | High | downloaded |
| OIF-MGT-ELS | OIF Management of External Light Sources and Co-Packaged Optical Engines | Standards white paper | Defines ELS/OE relationship, CW light resource model and host-controller management boundary. | High | downloaded |
| OIF-CPO-FD | OIF Co-Packaging Framework Document | Standards framework | Places light sources inside broader CPO electrical, optical, thermal and reliability context. | High | downloaded |
| FRONTIERS-CPO | Co-packaged optics (CPO): status, challenges, and solutions | Open access review paper | Explains ELS as enabling CPO technology, including power budget and WPE/PCE implications. | High | downloaded |
| FURUKAWA-ELS | Development of an External Laser Source for Co-Packaged Optics | Vendor R&D article | Concrete ELS implementation: uncooled 8-channel TOSA, DFB laser, QSFP housing, power/PCE/SMSR/PER data. | Medium-high | downloaded |
| LUMENTUM-UHP | Lumentum UHP Laser Sources for CPO | Vendor product page | Current industry product specs for InP UHP lasers and ELSFP-based architecture. | Medium | link only |
| LUMENTUM-ELS | Lumentum ELS module with UHP laser | Vendor product page | Current industry product framing: centralized serviceable ELSFP, 1311 nm, output and thermal control specs. | Medium | link only |
| MOLEX-ELSFP | Molex ELSFP Optical Connectors datasheet | Vendor datasheet | Optical connector / blind-mate physical interface details for ELSFP power delivery. | Medium | reference only |

## Source Notes

### OIF-ELSFP: External Laser Small Form Factor Pluggable Implementation Agreement

URL: https://www.oiforum.com/wp-content/uploads/OIF-ELSFP-01.0.pdf

Type: standards implementation agreement

Publisher / organization: Optical Internetworking Forum (OIF)

Date accessed: 2026-05-18

Local files:

- `downloads/oif-elsfp-01-0.pdf`
- `downloads/oif-elsfp-01-0.txt`

What it supports:

- ELSFP is a front-panel pluggable form factor for external lasers used by CPO optical engines that do not integrate lasers.
- The form factor is designed around field replacement, blind-mate electro-optical connection, mechanical/thermal/electrical/optical interoperability and laser-safety considerations.
- Application requirements such as optical power, noise and wavelength are intentionally not fully specified because they vary by use case.

Boundaries:

- This is a form-factor and interoperability document, not a laser-physics tutorial.
- It does not choose whether a given CPO system should use internal or external lasers.

Use in component page:

- Define `ELSFP` as a form factor, not as a laser chip type.
- Explain why serviceability, field replacement, optical connectorization and safety become part of the light-source story.

### OIF-MGT-ELS: Management of External Light Sources and Co-Packaged Optical Engines

URL: https://www.oiforum.com/wp-content/uploads/OIF-MGT-Co-Packaging-ELSFP-01.0.pdf

Type: standards white paper

Publisher / organization: OIF

Date accessed: 2026-05-18

Local files:

- `downloads/oif-mgt-co-packaging-elsfp-01-0.pdf`
- `downloads/oif-mgt-co-packaging-elsfp-01-0.txt`

What it supports:

- Defines CW light as a continuous-wave non-modulated optical resource delivered from an external light source to an optical engine.
- Defines ELS as an optical module that supplies optical power to optical transceivers or optical engines that do not have their own light source.
- Distinguishes optical engines with internal lasers from optical engines that need external light.
- Shows that ELS changes the management model: light-source control intelligence moves to the host-board controller rather than living fully inside the optical engine.
- Separates data-path behavior from external CW-light resource control.

Boundaries:

- This is management architecture, not mechanical ELSFP specification.
- It is informative and assumes OIF implementation agreements where applicable.

Use in component page:

- Use as the main source for “external laser source is not just a detached laser; it changes control, monitoring and fault isolation.”
- Explain ELS/OE mapping and the idea that one ELS can serve one or more optical engines depending on system architecture.

### OIF-CPO-FD: Co-Packaging Framework Document

URL: https://www.oiforum.com/wp-content/uploads/OIF-Co-Packaging-FD-01.0.pdf

Type: standards framework document

Publisher / organization: OIF

Date accessed: 2026-05-18

Local files:

- `downloads/oif-co-packaging-framework-fd-01-0.pdf`
- `downloads/oif-co-packaging-framework-fd-01-0.txt`

What it supports:

- Defines CPO context: optical or electrical communication interfaces attached on the same first-level substrate as one or more host ASICs.
- Places light sources in the optical interface section, alongside connectorization, optical budget, thermal, power, management and reliability topics.
- Useful for explaining that light source is not an isolated chip topic; it touches the CPO system boundary.
- Includes laser-safety appendices relevant to high-power external laser modules and multi-fiber connectors.

Boundaries:

- Broader than this component page; use only the light-source and CPO-boundary parts.

Use in component page:

- Provide the system framing for why ELS exists in CPO.
- Use as a guardrail for not presenting “CPO = ASIC + PIC only”.

### FRONTIERS-CPO: Co-packaged optics (CPO): status, challenges, and solutions

URL: https://link.springer.com/article/10.1007/s12200-022-00055-y

PDF URL: https://link.springer.com/content/pdf/10.1007/s12200-022-00055-y.pdf

Type: open access review paper

Publisher / organization: Frontiers of Optoelectronics / Springer Nature

Date accessed: 2026-05-18

License / usage: Creative Commons Attribution 4.0 International License, per article rights statement.

Local files:

- `downloads/frontiers-cpo-status-challenges-solutions-2023.pdf`
- `downloads/frontiers-cpo-status-challenges-solutions-2023.txt`

What it supports:

- External laser source is one of the enabling technologies for CPO.
- Silicon-photonics optical engines commonly discuss two light-source paths: on-chip laser and external laser.
- ELS output-power requirements can be derived from optical-engine link budget.
- Wall-plug efficiency / power conversion efficiency matters because high optical power becomes heat and system power.
- Useful numerical examples: ELS package power and laser/TEC contribution in a 102.4T-class discussion.

Boundaries:

- It is a broad multi-author review; do not copy its structure into the website.
- Some numerical assumptions are scenario-specific and should be presented as examples, not universal constants.

Use in component page:

- Explain the ELS tradeoff: better accessibility/serviceability and thermal separation versus extra coupling loss, higher required laser power and power-delivery complexity.
- Use its figures as redraw references only unless we later choose to reuse CC-BY assets with full attribution.

### FURUKAWA-ELS: Development of an External Laser Source for Co-Packaged Optics

URL: https://www.furukawaelectric.com/en/rd/review/fr055/10.html

PDF URL: https://www.furukawaelectric.com/en/rd/review/fr055/fr55_10.pdf

Type: vendor R&D article

Publisher / organization: Furukawa Electric Review No.55

Date accessed: 2026-05-18

Local files:

- `downloads/furukawa-external-laser-source-cpo-2024.pdf`
- `downloads/furukawa-external-laser-source-cpo-2024.txt`

What it supports:

- Concrete ELS implementation for CPO network switch equipment.
- Explains why lasers near a high-power switch ASIC face thermal reliability pressure.
- Uses high-power DFB laser diodes in an uncooled 8-channel TOSA.
- Gives practical metrics: fiber-coupled output power, power consumption, PCE, PER and SMSR.
- Includes design concerns: laser pitch, LD temperature, coupling efficiency, PMF, isolator, monitoring photodiodes and thermal-stress effects.

Boundaries:

- Vendor-specific implementation; should not be generalized as the only ELS route.
- Figures should not be copied into repo unless license is confirmed.

Use in component page:

- Use as the main concrete example of “external laser source is a package/module engineering problem, not just a bare DFB chip.”
- Good source for later pages on laser arrays, TOSA structure, thermal design and reliability.

### LUMENTUM-UHP: UHP Laser Sources for CPO

URL: https://www.lumentum.com/en/products/data-center/cw-lasers/uhp-lasers-cpo

Type: vendor product page

Publisher / organization: Lumentum

Date accessed: 2026-05-18

Status: link only

What it supports:

- Current product framing for ultra-high-power InP CW lasers used in CPO systems.
- Provides real-world metric examples: 1311 nm operation, high output power at elevated temperatures, power-conversion efficiency, narrow linewidth and low RIN.
- States that UHP lasers can be integrated into ELSFP modules to provide centralized, serviceable light for SiPh optical engines.

Boundaries:

- Vendor marketing/product page; use as evidence of industry implementation and metric vocabulary, not as neutral theory.

Use in component page:

- Use in “what metrics matter” and “why external laser source is serviceable” sections.

### LUMENTUM-ELS: External Laser Source module with UHP laser

URL: https://www.lumentum.com/products/external-laser-source-els-module-ultra-high-power-laser

Type: vendor product page

Publisher / organization: Lumentum

Date accessed: 2026-05-18

Status: link only

What it supports:

- ELSFP module as centralized, serviceable CPO light source.
- Removing CW lasers from switch/ASIC package can improve thermal behavior and serviceability.
- Real-world framing: multiple SiPh optical engines may share a high-power source.

Boundaries:

- Product-specific claims require caution.

Use in component page:

- Use to connect OIF standards language with real vendor product language.

### MOLEX-ELSFP: ELSFP Optical Connectors datasheet

URL: https://www.molex.com/content/dam/molex/molex-dot-com/en_us/pdf/datasheets/987652-9731.pdf?inline=

Type: vendor datasheet

Publisher / organization: Molex

Date accessed: 2026-05-18

Status: reference only; direct download timed out twice

What it supports:

- ELSFP connector system supports optical power delivery from ELS to optical chip connection.
- Blind-mate pluggable connection, field servicing, OIF-compliant design support, PM or SM fibers and MT ferrule details.
- Optical connectorization is part of the light-source architecture, not just a mechanical afterthought.

Boundaries:

- Vendor connector datasheet; not a complete ELS specification.

Use in component page:

- Reference for `Optical I/O / fiber coupling` cross-link and for why ELSFP includes connector/fiber considerations.

## Visual Asset Manifest

### OIF-MGT-FIG2: Laser light source use cases

Local path:

Source URL: https://www.oiforum.com/wp-content/uploads/OIF-MGT-Co-Packaging-ELSFP-01.0.pdf

Source title: Management of External Light Sources and Co-Packaged Optical Engines

Creator / organization: OIF

Captured date: 2026-05-18

License / usage: OIF public document; figure should be redrawn for site style instead of copied.

Why it matters: distinguishes optical engines with internal lasers from engines powered by external light sources.

Potential page: `Light source / laser supply`

Alt text: comparison of internal-laser optical engines and external-light-source architectures.

Status: saved local reference | redraw needed

### OIF-MGT-FIG4: ELS and OE relationship map

Local path:

Source URL: https://www.oiforum.com/wp-content/uploads/OIF-MGT-Co-Packaging-ELSFP-01.0.pdf

Source title: Management of External Light Sources and Co-Packaged Optical Engines

Creator / organization: OIF

Captured date: 2026-05-18

License / usage: OIF public document; redraw recommended.

Why it matters: shows that one ELS may relate to one or more OEs and that the mapping must be managed by the system.

Potential page: `External laser source`

Alt text: mapping patterns between external light sources and optical engines.

Status: saved local reference | redraw needed

### FRONTIERS-FIG5: CPO configuration for 102.4T discussion

Local path:

Source URL: https://link.springer.com/article/10.1007/s12200-022-00055-y

Source title: Co-packaged optics (CPO): status, challenges, and solutions

Creator / organization: Frontiers of Optoelectronics / Springer Nature

Captured date: 2026-05-18

License / usage: CC BY 4.0 unless otherwise noted in article credit line. For consistency, redraw before public use unless direct reuse is explicitly desired.

Why it matters: connects ELS requirements to CPO tile capacity and link budget.

Potential page: `Light source / laser supply`

Alt text: CPO switch configuration showing tiles and external laser source role.

Status: saved local reference | redraw needed

### FURUKAWA-FIG2: Internal layouts of QSFP, OSFP and ELSFP ELS

Local path:

Source URL: https://www.furukawaelectric.com/en/rd/review/fr055/fr55_10.pdf

Source title: Development of an External Laser Source for Co-Packaged Optics

Creator / organization: Furukawa Electric

Captured date: 2026-05-18

License / usage: vendor review; do not copy figure into public repo without permission.

Why it matters: visually explains that ELS is a TOSA + control circuit + housing problem.

Potential page: `External laser source`

Alt text: side-by-side internal layouts for ELS implementations in multiple pluggable housings.

Status: saved local reference | redraw needed

## Component Synthesis

Main teaching claims:

- `Light source / laser supply` is a system layer, not just a laser-chip page.
- In CPO, light can be generated inside the optical engine or delivered from an external light source.
- External light source is attractive because it can move heat-sensitive lasers away from the hot ASIC/package area and make the source field-serviceable.
- External light source is hard because extra optical path, connectors and splitting/mapping can raise the power budget and management complexity.
- ELSFP is a pluggable form factor for external laser sources; it is not a laser structure like DFB or an active-region concept like QW.
- CPO light-source pages must connect material → epitaxy → gain → laser chip → laser package → ELS/OE mapping → system management.

Good reader-facing framing:

- Start with: “PIC needs light; silicon photonics usually needs help generating it.”
- Then ask: “Should the laser be inside the optical engine, on the PIC, in the package, or external and pluggable?”
- Use ELS as the bridge from device physics to system serviceability.

Common misconceptions to prevent:

- `ELSFP` is not the laser chip.
- `External laser source` is not the same as DFB.
- `CW laser` means continuous light source; the modulation may happen later in the PIC.
- Moving the laser outside the package does not make the problem disappear; it shifts thermal, optical loss, safety and management tradeoffs.
- A vendor’s ELS product metrics should not be treated as universal requirements.

Layer boundaries:

- QW / MQW: active region.
- InP: material/platform and substrate/epitaxy base.
- DFB / FP / DBR: cavity/feedback structure.
- EML: integrated laser + electro-absorption modulator device architecture.
- CW laser: light-source operating mode.
- ELS / ELSFP: system/module/form-factor architecture.
- CPO: package/system placement of optical engines near ASIC.

## Suggested Pages

1. `Light source / laser supply` overview page.
2. `External laser source in CPO`.
3. `CW laser and why PICs need continuous light`.
4. `InP laser chip from substrate to active region`.
5. `DFB laser and wavelength selection`.
6. `Laser power, WPE/PCE and thermal budget`.
7. `Laser reliability, burn-in and aging`.
8. `ELSFP, connectorization and field serviceability`.

## Open Questions

- Can we locate an official public copy of `Co-packaged Optics External Laser Source Guidance Document, Version 1.0, Jan. 2020`, referenced by Furukawa and J-GLOBAL?
- Should public pages reuse CC BY figures from the Frontiers review with attribution, or redraw all diagrams in LumenFab style?
- For the first reader-facing page, should we include product metric examples from Lumentum/Furukawa, or keep vendor metrics for deeper subpages?
- Should `ELSFP` live primarily under `Light source / laser supply`, `Optical I/O`, or cross-link from both?
