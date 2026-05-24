# Optical I/O / Fiber Coupling Professional Source Notes

Date: 2026-05-24

Purpose: source pack for `src/pages/components/optical-io.mdx`. These notes support reader-facing educational content about the interface between PICs, fiber arrays, package optical paths, connectors, and CPO optical power delivery. Do not paste source wording directly into the page.

## Scope

Cover:

- Optical I/O as the boundary where PIC waveguide modes become fiber, fiber-array, connector, or package optical-path modes.
- Mode matching between sub-micron PIC waveguides, expanded spot-size converters, SiN / polymer redistribution waveguides, lenses, and single-mode or polarization-maintaining fibers.
- Edge couplers, grating couplers, fiber array units, lensed fibers, microlenses, reflections, polarization, contamination, and alignment.
- CPO-specific requirements: high channel count, compact fiber escape, low optical loss, manufacturable assembly, serviceability, field-replaceable external laser paths, and package-level test.

Keep out:

- Internal laser physics, which belongs on the laser-source page.
- Full PIC routing, modulation, MUX / DEMUX, and photodetector design, which belongs on the PIC page.
- Full mechanical / thermal package stack, which belongs on the packaging page.
- Company ranking, investment mapping, and product comparison.

## Search Log

| Query | Source type | Useful results | Notes |
|---|---|---|---|
| `silicon photonics fiber coupling edge coupler grating coupler mode mismatch professional source` | professional / review | Ansys edge coupler guide, edge-coupler review, grating-coupler review | Use for mode mismatch, edge vs grating tradeoffs, bandwidth, wafer-level test and facet requirements. |
| `imec silicon photonics high density co-packaged optics optical interface edge coupler` | research institute / industry R&D | imec article on high-density CPO optical interfacing | Strong CPO-specific source for low-loss, broadband, polarization-independent coupling, tight alignment tolerance, SiN edge couplers, polymer optical RDL and package relocation of fiber interfaces. |
| `Fraunhofer fiber coupling attachment integrated waveguides fiber array alignment` | applied research institute | Fraunhofer IZM fiber coupling and attachment page | Use for automated optical characterization, IL/MFD, edge and vertical coupling, 50 nm axis resolution, adhesive placement and UV curing, fiber arrays, PM fibers, lensed fibers. |
| `OIF co-packaging framework optical interfaces pigtail connector fiber exit` | standards / framework | OIF Co-Packaging Framework Document | Use for CPO optical interface framing, pigtail/connectorized options, fiber exit and mid-board connector tradeoffs. |
| `OIF ELSFP MT ferrule polarization maintaining fiber optical connector` | standards / vendor | OIF ELSFP IA, Molex ELSFP connector page | Use for ELSFP optical connector, MT ferrules, PM / SM fiber, blind-mate connection, polarization output definitions, inspection and cleaning. |
| `Corning SMF-28 mode field diameter 1310 1550 datasheet` | manufacturer data sheet | Corning / Newport SMF-28 data | Use only as a representative SMF MFD reference to explain why PIC waveguide modes need expansion. |

## Source Summary

| Source ID | Source | Type | Key use | Reliability | Status |
|---|---|---|---|---|---|
| IMEC-CPO-IO | imec, Interfacing silicon photonics for high-density co-packaged optics | Research institute / industry R&D article | CPO optical-interface requirements, SiN edge couplers, lensed-fiber tolerance limits, polymer optical redistribution, package-edge fiber interface | High | web reference |
| IMEC-DATACENTER | imec, Silicon photonics technology for next-generation datacenter interconnects | Research institute article | Optical I/O module boundary and preference for broadband edge couplers in relevant datacenter cases | High | web reference |
| FRAUNHOFER-IZM | Fraunhofer IZM, Fiber coupling and attachment to integrated waveguides | Applied research institute service / capability page | Assembly and test equipment: automated IL/MFD characterization, edge and vertical coupling, adhesive placement and UV curing, fiber arrays, PM fibers, lensed fibers | High | web reference |
| ANSYS-EDGE | Ansys Optics, Edge coupler | Engineering simulation documentation | Edge vs grating coupler distinction, SMF-28 to SOI edge-coupler design, modal overlap, effective-index / mode-size mismatch, substrate leakage and S-parameter extraction | Medium-high | web reference |
| OIF-CPO-FD | OIF Co-Packaging Framework Document | Standards framework | CPO optical interface, pigtail and connectorized boundaries, fiber exit, mid-board connector tradeoffs, large fiber counts and connector insertion loss | High | existing downloaded text/PDF |
| OIF-ELSFP | OIF External Laser Small Form Factor Pluggable Implementation Agreement | Standards implementation agreement | Blind-mate electro-optical connector, MT ferrules, PMF/SMF, fiber wavelength and polarization assignments, inspection and cleaning, high optical power handling | High | existing downloaded text/PDF |
| OIF-MGT-ELS | OIF Management of External Light Sources and Co-Packaged Optical Engines | Standards white paper | ELS port, fiber delivery of CW light, passive fiber path fault isolation and host management boundary | High | existing downloaded text/PDF |
| MOLEX-ELSFP | Molex ELSFP Interconnect System | Vendor connector page | Concrete connector implementation language for ELSFP, up to two 12-fiber MT ferrules, PM/SM fiber, blind-mate serviceability, PM fiber rotational alignment | Medium | web reference |
| CORNING-SMF | Corning / Newport SMF-28 product data | Manufacturer / distributor data | Representative single-mode fiber MFD around 9-10 um and 125 um cladding diameter | Medium | web reference |
| EDGE-REVIEW | Edge Couplers in Silicon Photonic Integrated Circuits: A Review | Peer-reviewed review | Edge coupler strengths and limits: high efficiency, broad bandwidth, low polarization dependence; facet-only alignment and wafer-test limitations | High | web reference |
| GRATING-REVIEW | Grating Couplers on Silicon Photonics: Design Principles, Emerging Trends and Practical Issues | Peer-reviewed review | Grating coupler principles and tradeoffs: vertical access, wafer-level testing, bandwidth and polarization considerations | High | web reference |

## Source Notes

### IMEC-CPO-IO: Interfacing silicon photonics for high-density co-packaged optics

URL: https://www.imec-int.com/en/articles/interfacing-silicon-photonics-high-density-co-packaged-optics

Type: research institute / industry R&D article

Publisher / organization: imec

Date accessed: 2026-05-24

What it supports:

- High-density CPO optical interfaces add assembly yield and scalability to low-loss, broadband and polarization-independent coupling requirements.
- Efficient fiber-edge coupling to lensed fibers can be limited by tight alignment tolerance and air-gap requirements.
- SiN edge couplers, inverse tapers and polymer optical redistribution layers can increase spot size and move the fiber interface toward a more package-friendly location.
- Mode conversion needs to be adiabatic to avoid radiation modes and higher-order modes.
- CPO can require optical redistribution and high-yield coupling between active PIC dies and passive interconnect wafers.

Boundaries:

- This is an imec technology-development article. Use as a concrete R&D example, not as a universal industry standard.
- Numerical loss and tolerance results belong to specific implementations and should be framed as examples.

Use in page:

- Main source for the CPO-specific argument that optical I/O has become a package-scale interface problem.
- Support discussion of SiN / polymer optical RDL, spot-size expansion, lateral tolerance and package-edge fiber relocation.

### FRAUNHOFER-IZM: Fiber coupling and attachment to integrated waveguides

URL: https://www.izm.fraunhofer.de/en/abteilungen/system_integrationinterconnectiontechnologies/arbeitsgruppen/wg-optical-interconnection-technology/waveguide-coupler.html

Type: applied research institute capability page

Publisher / organization: Fraunhofer IZM

Date accessed: 2026-05-24

What it supports:

- Integrated photonics with growing waveguide counts requires automated equipment for optical measurement and fiber-to-chip assembly.
- Relevant assembly systems measure insertion loss and mode-field diameter, support edge and vertical coupling, and perform adhesive placement and UV curing.
- Fiber attach can use single fibers, fiber arrays, standard SM/MM fibers, PM fibers, lensed fibers and UHNA fibers.

Boundaries:

- This page describes available capability, not a full process recipe.

Use in page:

- Support manufacturing / assembly path and the statement that optical I/O is measured and assembled through active or automated alignment, adhesive dispense, curing and IL/MFD characterization.

### ANSYS-EDGE: Edge coupler

URL: https://optics.ansys.com/hc/en-us/articles/360042305354-Edge-coupler

Type: engineering simulation documentation

Publisher / organization: Ansys / Lumerical

Date accessed: 2026-05-24

What it supports:

- Edge couplers and grating couplers are two common ways to couple light into and out of integrated photonic chips.
- Grating couplers support non-destructive access from many chip locations; edge couplers require facet preparation and tend to offer broader bandwidth.
- Coupling efficiency depends on effective-index mismatch and mode-size mismatch between fiber and waveguide.
- Edge-coupler simulation should account for fiber position, taper length, substrate leakage, reflections and packaging environment.

Boundaries:

- This is a simulation example, not a standard specification.
- Do not present its exact geometry as the only edge-coupler design.

Use in page:

- Support mode-overlap explanation, edge vs grating comparison, and reflection / S-parameter discussion.

### OIF-CPO-FD: Co-Packaging Framework Document

URL: https://www.oiforum.com/wp-content/uploads/OIF-Co-Packaging-FD-01.0.pdf

Type: standards framework document

Publisher / organization: Optical Internetworking Forum (OIF)

Date accessed: existing local copy saved 2026-05-18; re-used 2026-05-24

Local files:

- `docs/research/v1-light-source-laser-supply/downloads/oif-co-packaging-framework-fd-01-0.pdf`
- `docs/research/v1-light-source-laser-supply/downloads/oif-co-packaging-framework-fd-01-0.txt`

What it supports:

- CPO optical interfaces include fiber choices, source choices, pigtail / connectorized options, connector or fiber exit location and optical budget effects.
- Pigtails can use ribbon fiber for high-density optical interfaces.
- Mid-board optical connectors can improve rework and allow conventional pigtail use, while adding optical budget penalty.
- Large CPO switch implementations can involve hundreds to more than one thousand front-panel fibers, so connector loss and cable routing matter.

Boundaries:

- Broad system framework; use only optical-interface and fiber-exit sections for this page.

Use in page:

- Support CPO pressure on high fiber count, fiber escape, connector insertion loss, rework and serviceability.

### OIF-ELSFP: External Laser Small Form Factor Pluggable Implementation Agreement

URL: https://www.oiforum.com/wp-content/uploads/OIF-ELSFP-01.0.pdf

Type: standards implementation agreement

Publisher / organization: OIF

Date accessed: existing local copy saved 2026-05-18; re-used 2026-05-24

Local files:

- `docs/research/v1-light-source-laser-supply/downloads/oif-elsfp-01-0.pdf`
- `docs/research/v1-light-source-laser-supply/downloads/oif-elsfp-01-0.txt`

What it supports:

- ELSFP uses blind-mate electro-optical connector concepts and MT-style ferrules.
- The IA covers module-side and host-side optical connectors, physical-contact or air-gap MT-compatible ferrules, fiber wavelength and polarization assignments, PER definition and connector inspection / cleaning.
- High optical power paths require cleanliness and safe power management.

Boundaries:

- ELSFP is for external laser supply, not for every optical I/O path in a CPO system.

Use in page:

- Support PM fiber, MT ferrule, polarization orientation, high-power connector cleanliness and serviceable optical interface discussion.

### MOLEX-ELSFP: ELSFP Interconnect System

URL: https://www.molex.com/en-us/products/optical-solutions/elsfp-interconnect-system

Type: vendor connector page

Publisher / organization: Molex

Date accessed: 2026-05-24

What it supports:

- ELSFP connectors are positioned as direct-to-chip / CPO optical connections for external laser source systems.
- The system supports up to two side-by-side 12-fiber MT ferrules, with PM or SM fiber.
- PM fiber stress rods maintain polarization orientation and require rotational alignment within the ferrule.
- Blind-mate pluggable interfaces support serviceability and compact connection to external light sources.

Boundaries:

- Vendor product page; treat as an implementation example aligned to OIF, not as the OIF standard text itself.

Use in page:

- Support concrete explanation of PM fiber, MT ferrule, and serviceable ELS optical power delivery.

### CORNING-SMF: SMF-28 representative fiber data

URLs:

- https://www.corning.com/media/worldwide/coc/documents/Fiber/PI-1501.pdf
- https://www.newport.com/p/F-SMF-28-C

Type: manufacturer / distributor product data

Publisher / organization: Corning / Newport

Date accessed: 2026-05-24

What it supports:

- Standard single-mode fibers used in communications have mode-field diameters on the order of 9-10 um at 1310 / 1550 nm and 125 um cladding diameter.

Boundaries:

- Product-specific data; use only as a representative scale reference.

Use in page:

- Explain why a sub-micron silicon waveguide mode must be expanded or transformed before coupling to a fiber.

## Chapter Synthesis

Main teaching claims:

- Optical I/O is the optical interface stack between PIC and the outside optical path: coupler, spot-size converter, fiber array, lens, connector, adhesive, alignment mark, package routing and test reference.
- The central physical problem is mode overlap. A PIC waveguide confines light into a small, high-index mode; a communication fiber carries a much larger, nearly circular mode. Couplers and package optics reshape one field into the other.
- Edge couplers usually favor broadband, low-loss, lower-PDL operation, but they need facet access and precise assembly.
- Grating couplers allow vertical access and wafer-level testing, but their diffractive nature brings bandwidth, polarization and upward/downward radiation tradeoffs.
- FAU and lens assemblies convert a good coupler design into a manufacturable multi-channel interface. Pitch, angle, epoxy, cure shrinkage, thermal expansion and cleanliness directly affect loss and reliability.
- Reflection is a system issue. Facets, fiber ends, gratings, lenses and connectors can send light back toward a laser or resonant PIC element, changing noise, SMSR, bias stability or receiver behavior.
- Polarization is a first-order interface condition because many PIC waveguides and couplers are TE/TM sensitive; PM fibers and ferrule rotational alignment are common in external laser delivery paths.
- CPO raises optical I/O requirements because it increases lane count and packaging density while reducing tolerance for rework, loss, thermal drift and service disruption.

Common misconceptions to prevent:

- Coupling loss is only a PIC layout parameter.
- A fiber array is a passive accessory with no system consequences.
- Grating couplers and edge couplers are interchangeable choices with only loss differences.
- PM fiber only matters for coherent systems. In ELS / silicon photonics paths, polarization orientation can also be important.
- CPO reduces packaging difficulty because the optics are closer to the ASIC. It reduces electrical reach but increases optical assembly pressure.

Layer boundaries:

- PIC page: on-chip waveguides, splitters, modulators, MUX / DEMUX, PD, heaters and PDK.
- Optical I/O page: chip-to-fiber / chip-to-package optical mode conversion, alignment, fiber arrays, lenses, reflection, polarization and connector boundary.
- Packaging page: die placement, substrate, thermal, mechanical, rework and system integration.
- Manufacturing and test page: KGD, wafer-level and package-level test flow across components.

## Open Questions

- Later deep-dive pages should decide whether to separate edge coupler, grating coupler, FAU and detachable connector into independent pages.
- If the site later adds diagrams, use internally redrawn schematics rather than vendor connector photos unless licensing is explicitly cleared.
