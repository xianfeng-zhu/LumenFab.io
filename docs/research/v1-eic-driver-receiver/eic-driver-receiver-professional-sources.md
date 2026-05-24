# EIC / Driver And Receiver Professional Source Notes

Date: 2026-05-24

Purpose: source pack for the LumenFab.io component page `src/pages/components/eic.mdx`. These notes support reader-facing educational content about the electrical IC side of a CPO optical engine. Do not paste source wording directly into the page.

## Scope

Cover:

- EIC boundary in a CPO optical engine: modulator drivers, TIAs, receiver front ends, optional CDR / retimer / DSP, control, clocking, and power delivery.
- Why CPO changes EIC requirements: shorter high-speed electrical channels, higher thermal density, tighter package parasitics, and stronger PIC / EIC co-design.
- Driver behavior for silicon photonic MZM / MRM, EAM, and other modulator paths.
- TIA behavior for photodiode readout: current-to-voltage conversion, gain-bandwidth-noise tradeoff, saturation, and input capacitance.
- Retimed, linear-amplified, half-retimed, and direct-drive boundaries.
- Manufacturing and integration routes: discrete EIC die near PIC, flip-chip / 2.5D integration, CMOS photonics / monolithic EPIC, SiGe BiCMOS analog front ends, and known-good-die testing.

Keep out:

- PIC optical device internals, except where they set driver / TIA interface conditions.
- Laser physics and light-source architecture, except laser-driver boundaries.
- Fiber attach, connector mechanics, and optical I/O alignment details.
- Company ranking, investment mapping, or product recommendations.

## Search Log

| Query | Source Type | Useful Results | Notes |
|---|---|---|---|
| OIF Co-Packaging Framework EIC driver TIA | standards / industry forum | OIF Co-Packaging Framework Document and OIF IA index | Use for interface options and definitions of EIC, TIA, LD-DRV, CDR, DSP, SerDes. |
| CPO status challenges driver TIA DSP co-simulation | review paper | Frontiers / PMC CPO status, challenges, and solutions | Use for CPO motivation, electronic-photonic co-simulation, DSP / SerDes considerations, integration routes. |
| OIF linear pluggable optics analog driver TIA host DSP | industry demo / standards context | OIF ECOC 2023 linear drive demo PDF | Use for linear boundary: host SerDes handles full analog electrical-optical link, module contains driver / photodiode / TIA without regeneration. |
| optical PAM4 DSP PHY integrated TIA laser driver | manufacturer technology page | Broadcom BCM85812 and release | Use as an example that optical DSP PHYs may integrate TIA and laser / modulator driver functions. |
| silicon photonics CMOS driver segmented MZM integrated CDR | IEEE / academic abstracts | JSSC 50 Gb/s SiPh transmitter; Caltech 100 Gb/s 3D-integrated SiPh-CMOS transmitter | Use for driver-modulator co-design, segmented MZM, CDR, pre-distortion, peaking, and flip-chip integration examples. |
| optical receiver photodiode TIA co-simulation | Optica / IEEE abstracts | 100 Gbit/s co-designed optical receiver with hybrid integration | Use for PD / TIA parasitic co-simulation and hybrid integration framing. |
| 112G VSR PAM4 SerDes CPO | EDA / IP vendor technical page | Cadence 112G-VSR PAM4 SerDes PHY | Use for short-reach SerDes and optical I/O / CPO use cases. |
| linear drive TIA driver LPO | IC vendor technology page | MACOM PURE DRIVE linear architecture | Use for high-linearity TIA / driver and DSP-removal framing. |

## Source Summary

| Source ID | Source | Type | Key Use | Reliability | Status |
|---|---|---|---|---|---|
| OIF-IA | OIF Implementation Agreements index | Standards organization page | Confirms OIF Co-Packaging, ELSFP, RTLR, CEI, and CMIS documents as relevant interface references. | High | Used |
| OIF-CPO-FD | OIF-Co-Packaging-FD-01.0 Framework Document | Standards / framework PDF, saved locally under `docs/research/v1-light-source-laser-supply/downloads/` | Defines CPO motivation, interface variants, EIC, TIA, CDR, DSP, SerDes, electrical reach, thermal and power considerations. | High | Used |
| FRONTIERS-CPO | "Co-packaged optics (CPO): status, challenges, and solutions" | Peer-reviewed review article | Supports system motivation, DSP / SerDes design considerations, MRM driver challenges, receiver/TIA references, integration routes, and electronic-photonic co-simulation. | High | Used |
| OIF-LINEAR-DEMO | OIF / Eoptolink ECOC 2023 linear drive optics demo | Industry demo PDF | Supports linear architecture: driver and TIA remain in optical path while DSP regeneration is removed, host SerDes equalizes the analog path. | Medium-high | Used |
| MACOM-PURE-DRIVE | MACOM PURE DRIVE Linear Drive Optical Solutions | Manufacturer technology page | Supports high-linearity TIA / driver product category, bare die / flip-chip packaging relevance, and LPO power / latency motivation. | Medium | Used as industry example |
| CADENCE-VSR | Cadence 112G-VSR PAM4 SerDes PHY | EDA / IP vendor technology page | Supports short-reach, near-packaged optics, CPO, optical I/O, and power / area efficient SerDes framing. | Medium | Used as industry example |
| BROADCOM-BCM85812 | Broadcom BCM85812 product / release pages | Manufacturer product page | Supports examples where optical PAM4 DSP PHY integrates TIA and laser driver in advanced CMOS. | Medium | Used as industry example |
| JSSC-SIPH-TX | Liao et al., 50-Gb/s PAM4 silicon-photonic transmitter with CMOS driver and CDR | IEEE JSSC article metadata / abstract | Supports segmented modulator-driver co-design and CDR in a SiPh transmitter. | High | Used |
| CALTECH-100G-TX | CaltechAUTHORS 100-Gb/s PAM4 optical transmitter in 3D-integrated SiPh-CMOS platform | University repository article metadata / abstract | Supports flip-chip bonded CMOS driver, segmented MZM, pre-distortion, peaking, EOBW, and temperature sensitivity. | High | Used |
| OPTICA-100G-RX | 100 Gbit/s co-designed optical receiver with hybrid integration | Optica abstract / article page | Supports PD / TIA hybrid integration and parasitic co-simulation. | High | Used |

## Source Notes

### OIF-IA: OIF Implementation Agreements

URL: https://www.oiforum.com/technical-work/implementation-agreements-ias/

Type: standards organization index

Publisher / organization: OIF

Date accessed: 2026-05-24

What it supports:

- OIF maintains implementation agreements for co-packaging, external laser modules, retimed transmitter / linear receiver, CEI electrical interfaces, and management interfaces.
- The page places Energy Efficient Interfaces / formerly Co-Packaging, CEI, and CMIS in the same standards ecosystem.

Boundaries:

- The index is a document map, not a tutorial.
- Use for standards context and links, not for detailed circuit claims.

Use in chapter:

- Further reading list.
- Standards boundary around CPO, CEI, RTLR / linear interfaces, and management.

### OIF-CPO-FD: OIF Co-Packaging Framework Document

URL: https://www.oiforum.com/wp-content/uploads/OIF-Co-Packaging-FD-01.0.pdf

Local saved text: `docs/research/v1-light-source-laser-supply/downloads/oif-co-packaging-framework-fd-01-0.txt`

Type: standards framework document

Publisher / organization: OIF

Date accessed: 2026-05-24

What it supports:

- CPO places communication engines near a host ASIC to minimize high-speed electrical channel losses and impedance discontinuities, enabling higher-speed, lower-power off-chip I/O drivers.
- Interface options include retimed, linear amplified, half-retimed, and direct drive. Linear amplified removes CDR / DSP in the engine and relies on linearity plus host SerDes compensation.
- EIC is the electrical portion of an optical engine and can include driver electronics for the laser or modulator, TIA, and post amplifier.
- The framework calls out thermal and power monitoring requirements, junction temperature relevance for DSP / drivers, and high power density in optical engines.

Boundaries:

- The framework is architecture-level. Avoid treating every figure as a required CPO implementation.

Use in chapter:

- Define EIC boundary.
- Explain CPO-specific pressure on electrical reach, power, thermal, and interface choice.
- Structure the retimed / linear / direct-drive section.

### FRONTIERS-CPO: Co-Packaged Optics Status, Challenges, And Solutions

URL: https://pmc.ncbi.nlm.nih.gov/articles/PMC10027985/

Local saved text: `docs/research/v1-light-source-laser-supply/downloads/frontiers-cpo-status-challenges-solutions-2023.txt`

Type: review article

Publisher / organization: Frontiers / PMC mirror

Date accessed: 2026-05-24

What it supports:

- CPO shortens SerDes distance through advanced packaging and electronic-photonic co-optimization.
- DSP / SerDes design remains important: XSR SerDes can reduce reach and power, while line-side DSP handles optical device nonlinearity and impairments.
- Driver design for MZM and MRM is tied to modulator structure, PAM4 linearity, bandwidth, voltage swing, and thermal or wavelength locking.
- Electronic-photonic co-simulation is necessary because driver, modulator, TIA, photodiode, package parasitics, and thermal loops interact.
- Integration paths include hybrid integration, 3D integration, and monolithic integration, each trading parasitics, cost, and manufacturability.

Boundaries:

- The paper surveys many topics. Use it to support architecture and co-design claims, not precise product specifications.

Use in chapter:

- CPO requirement section.
- Driver / TIA co-design, DSP / SerDes boundary, and manufacturing / integration path.

### OIF-LINEAR-DEMO: OIF Linear Drive Optics Demo

URL: https://www.oiforum.com/wp-content/uploads/OIF_PLL_Demo_Eoptolink_ECOC2023.pdf

Type: OIF demo / educational PDF

Publisher / organization: OIF / Eoptolink

Date accessed: 2026-05-24

What it supports:

- Linear optical links remove regeneration in the optical module and rely on the host SerDes to handle electrical trace loss, E/O conversion, optical transmission, O/E conversion, and the TIA-to-host electrical path.
- A linear approach requires each analog element to behave linearly.
- DSP-based solutions provide clearer demarcation points; linear solutions target lower power and lower latency.

Boundaries:

- The demo is for LPO, not a universal CPO rule. Use as an analogy for linear interface boundaries relevant to CPO and EIC partitioning.

Use in chapter:

- Linear interface section and EIC architecture table.

### MACOM-PURE-DRIVE: MACOM PURE DRIVE Linear Drive Optical Solutions

URL: https://www.macom.com/pure-drive-linear-architecture

Type: manufacturer technology / product page

Publisher / organization: MACOM

Date accessed: 2026-05-24

What it supports:

- Linear drive products are positioned around TIAs and laser / modulator drivers.
- Benefits claimed include lower module power, lower latency, removing a discrete DSP from the module, and support for bare die / flip-chip / packaged IC options.

Boundaries:

- Vendor marketing claims should be used only as industry examples.

Use in chapter:

- Illustrate the industry category of high-linearity analog driver / TIA paths.

### CADENCE-VSR: Cadence 112G-VSR PAM4 SerDes PHY

URL: https://www.cadence.com/en_US/home/tools/silicon-solutions/design-ip/high-speed-ethernet/112g-vsr-pam4-serdes-phy.html

Type: EDA / IP vendor technology page

Publisher / organization: Cadence

Date accessed: 2026-05-24

What it supports:

- Short-reach connectivity includes chip-to-chip, chip-to-optical-module, near-packaged optics, co-packaged optics, and die-to-die.
- Power, performance, and area are critical for these use cases.
- VSR SerDes can include DSP-based margin and diagnostics even for short-reach links.

Boundaries:

- Product page; use for use-case framing and terminology, not for generic performance guarantees.

Use in chapter:

- SerDes boundary and short-reach electrical interface discussion.

### BROADCOM-BCM85812: Broadcom Optical PAM4 DSP PHY With Integrated TIA And Laser Driver

URL: https://www.broadcom.com/company/news/product-releases/60996

Product page: https://www.broadcom.com/products/ethernet-connectivity/phy-and-poe/optical/bcm85812

Type: manufacturer release / product page

Publisher / organization: Broadcom

Date accessed: 2026-05-24

What it supports:

- Optical PAM4 DSP PHY products may integrate a TIA and laser driver.
- Advanced CMOS nodes are used for high-speed optical DSP / PHY integration.

Boundaries:

- Product-specific, pluggable module oriented. Use as a concrete example of block integration rather than a required CPO architecture.

Use in chapter:

- Explain possible EIC partitioning: analog front ends can be separate or integrated with DSP / PHY.

### JSSC-SIPH-TX: 50-Gb/s PAM4 SiPh Transmitter With Distributed CMOS Driver And CDR

URL: https://doi.org/10.1109/jssc.2021.3134874

Metadata page: https://colab.ws/articles/10.1109%2Fjssc.2021.3134874

Type: IEEE JSSC article

Publisher / organization: IEEE

Date accessed: 2026-05-24

What it supports:

- Silicon-photonic transmitter design can co-design a CMOS driver with a segmented MZM.
- Segmented drivers, clock phase interpolation, and CDR can be used to improve optical PAM4 signal integrity.

Boundaries:

- Research implementation at 50 Gb/s; use conceptually for co-design and circuit block explanations.

Use in chapter:

- Driver section, CDR section, and driver-modulator co-design examples.

### CALTECH-100G-TX: 100-Gb/s PAM4 3D-Integrated SiPh-CMOS Transmitter

URL: https://authors.library.caltech.edu/records/40smm-8cd68

Type: university repository metadata / journal article abstract

Publisher / organization: CaltechAUTHORS

Date accessed: 2026-05-24

What it supports:

- A 3D-integrated silicon photonics-CMOS transmitter can use a flip-chip bonded CMOS driver to drive segmented MZM devices.
- Digitally controllable pre-distortion and inductive peaking can improve electro-optical bandwidth.
- Temperature changes affect PAM4 eye quality and bias conditions.

Boundaries:

- Research example, not a standard architecture.

Use in chapter:

- Manufacturing / integration path and driver design variables.

### OPTICA-100G-RX: 100 Gbit/s Co-Designed Optical Receiver With Hybrid Integration

URL: https://opg.optica.org/abstract.cfm?uri=oe-29-10-14304

Type: Optica research article page

Publisher / organization: Optica

Date accessed: 2026-05-24

What it supports:

- Hybrid-integrated receiver examples combine silicon-photonic photodetectors with SiGe TIAs.
- Accurate equivalent circuit models of PD and electrical parasitics are used for co-simulation with the TIA.

Boundaries:

- Specific receiver implementation. Use for the general point that receiver performance depends on PD / TIA / package parasitics together.

Use in chapter:

- TIA section and electronic-photonic co-simulation discussion.

## Chapter Synthesis

Main teaching claims:

- EIC is the electrical circuit side of an optical engine. It supplies the high-speed Tx drive signal, reads the Rx photodiode current, and often owns clocking, equalization, control, diagnostics, and power sequencing around the PIC.
- CPO shortens high-speed electrical distance and can reduce I/O power, while increasing pressure on EIC heat, power integrity, microbump parasitics, testability, and co-design with the PIC.
- The driver is governed by modulator type, capacitance / impedance, required swing, linearity, and equalization strategy.
- The TIA is governed by PD current, input capacitance, transimpedance gain, bandwidth, input-referred noise, saturation, and package parasitics.
- Retimed / DSP and linear boundaries place signal conditioning responsibility in different places. Linear boundaries reduce engine electronics but require strong host SerDes and linear analog front ends.
- EIC manufacturing and integration are package-level decisions as much as circuit decisions: separate die, flip-chip, 2.5D, 3D, and monolithic EPIC options trade parasitics, yield, cost, and thermal behavior.

Good reader-facing framing:

- Treat the EIC as the circuit that "conditions electrons for optics" and "conditions photodiode current back into usable data."
- Keep the PIC / EIC boundary explicit: PIC owns optical propagation and conversion devices; EIC owns high-speed electrical drive, readout, equalization, clock, control, and power.
- Explain architecture options through where the CDR / DSP lives and how analog the optical engine interface remains.

Common misconceptions to prevent:

- Driver and modulator are separate circuit / photonic-device roles, even when co-designed closely.
- TIA is receiver electronics connected to the photodiode; the photodiode itself belongs to the PIC or optical receiver device.
- Removing a DSP from the optical engine shifts equalization and margin responsibility to the host SerDes and analog channel.
- CPO does not remove power, clock, thermal, or test problems; it changes where they appear.
- Shorter electrical reach still needs impedance control, microbump-aware modeling, and package-level verification.

Layer boundaries:

- CPO / LPO / NPO: architecture or module-boundary choices.
- SerDes / DSP / CDR: electrical signal conditioning and timing recovery choices.
- Driver / TIA: analog front-end circuits.
- MZM / MRM / EAM / PD: photonic or optoelectronic devices connected to the EIC.
- PDK / package substrate / interposer: implementation and integration route.

## Suggested Page Shape

1. `EIC 的器件边界`
2. `为什么 CPO 会提高 EIC 要求`
3. `工作原理：电信号怎样驱动光路，又怎样从光路读回`
4. `接口边界：retimed、linear、half-retimed 与 direct drive`
5. `1. Driver：把 SerDes 输出变成调制器能使用的波形`
6. `2. TIA：把 photodiode 电流变成可判决电压`
7. `3. CDR、DSP 与 SerDes 边界`
8. `4. 电源、时钟、控制与监控`
9. `制造与集成路径`
10. `关键指标`
11. `从 EIC 到 PIC / 封装的接口条件`
12. `总结`

## Open Questions

- Future EIC deep dives can separately cover modulator driver topologies, TIA topology families, and CDR / SerDes equalizer architecture.
- If later pages add dedicated LPO / NPO / CPO architecture chapters, this EIC page should cross-link those pages and keep only the component-level boundary.
