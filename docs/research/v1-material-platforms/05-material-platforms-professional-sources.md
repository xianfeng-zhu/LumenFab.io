# 05 Material Platforms Professional Source Notes

Date: 2026-05-16

Purpose: professional source pack for the next LumenFab.io chapter, `05. Material Platforms`. These notes supplement the local research directory and should not become the website structure. Use them to write reader-facing pages that explain why each material platform occupies a different role.

## Scope

Cover:

- silicon and SOI / Photonics-SOI
- GaAs and 850 nm VCSEL
- InP and 1310/1550 nm communication PICs
- silicon nitride, SiN
- thin-film lithium niobate, TFLN / LNOI
- why no single platform wins everything

Keep out:

- company ranking
- valuation / investment framing
- substrate supply-chain detail, which belongs in `06 Raw Materials To Wafers`
- QW / MQW / QD active-region detail, which belongs in `07 Epitaxy And Active Regions`
- device-specific deep dives, which belong in `08 Device Layer`

## One-Page Material Map

| Platform | Main Strength | Main Boundary | How To Explain It |
|---|---|---|---|
| Si / SOI / Photonics-SOI | CMOS-compatible, dense waveguides, modulators, Ge PD integration, scalable foundry ecosystem | silicon is indirect-bandgap and not a good native laser material | silicon organizes and processes light on chip; it usually still needs III-V light sources |
| GaAs | 850 nm VCSEL ecosystem, short reach, multimode fiber, wafer-level VCSEL array economics | not the main 1310/1550 nm single-mode communication platform | GaAs explains why SR optics and VCSELs are their own short-reach world |
| InP | direct-bandgap active platform; lasers, SOAs, EAMs, modulators, photodiodes can be monolithically integrated | harder to scale like silicon CMOS; not the lowest-loss passive platform | InP explains why communication light sources remain hard to replace |
| SiN | very low loss, broad wavelength range, power handling, phase stability, good passive photonics | no native efficient laser/gain; active integration requires hybrid or heterogeneous approaches | SiN is a low-loss passive routing/filtering complement, not a complete transmitter platform |
| TFLN / LNOI | strong Pockels effect, high-speed/low-loss electro-optic modulation, good linearity | wafer/foundry ecosystem and packaging are less mature than SOI; it is mainly a modulator platform | TFLN is a high-performance modulation layer, often combined with SiPh/SiN/InP |

## Silicon, SOI, And Photonics-SOI

Professional sources:

- Soitec positions Photonics-SOI as an SOI substrate platform for optical communication and data-center interconnect applications. Their page emphasizes integration/scalability, power, high data rates, and optical transceiver relevance.
- Soitec's 2025 AI data-center release explicitly connects silicon photonics SOI technology to AI/HPC optical connectivity and CPO-oriented bandwidth and energy-efficiency pressure.
- Sandia describes its silicon photonics process as an electro-optical PIC platform built on SOI wafer technology. Its stack includes silicon and silicon-nitride waveguide layers, dopant implants, metal interconnect, and Ge detectors.
- AIM Photonics' active PIC MPW describes one silicon and two silicon-nitride waveguide layers, implant levels, a Ge photodetector, and metal wiring.
- imec frames SOI silicon photonics as commercially important because it can use 300 mm semiconductor foundry infrastructure, but it also stresses silicon's indirect-bandgap limitation and the need to combine silicon with other platforms such as InP and SiN.

Reader-facing interpretation:

- Do not explain silicon photonics as "silicon became a good light source".
- Explain it as "silicon became a useful light-routing and integration platform".
- SOI matters because the top silicon layer and buried oxide create high index contrast for compact waveguides.
- Photonics-SOI is not just generic SOI. It is engineered for optical waveguide uniformity, loss, layer thickness, and interface quality.
- SiPh PICs commonly include waveguides, splitters, couplers, modulators, Ge photodetectors, heaters, and electrical pads.
- The missing native high-performance laser function is why external laser source, flip-chip InP, heterogeneous integration, or integrated laser approaches keep appearing.

Good page claims:

- Silicon is excellent for electronics, integration, waveguides, and foundry-style scaling.
- Silicon is poor as a native high-performance laser because it is indirect-bandgap.
- SOI is the dominant substrate concept for many silicon photonics implementations.
- SiPh is a platform route, not a complete material answer.

Avoid:

- "SOI equals all optical modules."
- "Silicon photonics means no InP."
- "Photonics-SOI is a finished PIC." It is an engineered substrate.

## GaAs And 850 nm VCSEL

Professional sources:

- The Fiber Optics Tech Consortium explains 400GBASE-SR4 as 400 Gb/s PAM4 parallel transmission at 850 nm over multimode fiber, with IEEE 802.3db references and short-reach ranges.
- NVIDIA's 400G SR4 documentation describes an OSFP multimode SR4 transceiver using 100G-PAM4 per lane, 850 nm VCSEL, and short OM3/OM4 reach.
- RP Photonics explains VCSELs as surface-emitting semiconductor lasers with vertical emission, Bragg mirrors, quantum-well active regions, wafer-level testing advantages, and common GaAs/AlGaAs 750-980 nm / often 850 nm operation.

Reader-facing interpretation:

- GaAs belongs in the material-platform chapter because it explains the short-reach VCSEL world.
- VCSEL belongs later in the device layer, but the material chapter can say GaAs/AlGaAs supports the common 850 nm VCSEL ecosystem.
- SR optics are a system/application family around short reach, multimode fiber, and 850 nm operation.
- The GaAs/VCSEL route is not "worse InP"; it is optimized around a different distance, fiber type, cost structure, and packaging/test model.

Good page claims:

- GaAs is strong around 850 nm VCSEL and short-reach multimode applications.
- VCSEL's vertical emission enables wafer-level testing and array-friendly manufacturing.
- Multimode SR links use a different physical/fiber context from 1310 nm single-mode DR/FR links.

Avoid:

- "GaAs = all VCSEL forever." Other wavelengths and materials exist.
- "VCSEL is a material platform." VCSEL is a device structure; GaAs is the platform.

## InP And Communication PICs

Professional sources:

- Nokia describes its ICE-D intra-datacenter optics as monolithic InP PIC technology integrating DFB lasers, multi-channel arrays, MZMs, EAMs, and photodiode arrays.
- PhotonHub describes InP PIC access as supporting integrated lasers, modulators, detectors, epitaxy, processing, packaging, and reliability testing for high-speed optical applications.
- PhotonDelta states that InP can integrate active components such as amplifiers and detectors and that SiN/SiPh often need InP for light generation.
- Optica's InP generic integration paper notes InP's ability to combine passive components with active components such as optical amplifiers, lasers, modulators, and detectors on the same platform.

Reader-facing interpretation:

- InP matters because it is a direct-bandgap III-V platform with a mature communication-band active-device ecosystem.
- InP is not just "laser material". It can support lasers, SOAs, EAMs, MZMs in some implementations, detectors, and monolithic PIC routes.
- InP can be used as a standalone monolithic PIC platform or as an active-source chip integrated with silicon or SiN.
- The distinction from SiPh is not "old vs new". It is active light-generation capability vs silicon-scale integration capability.

Good page claims:

- InP is central for 1310/1550 nm communication light sources and many high-speed active devices.
- InP's role persists even when modulation or routing moves to SiPh or TFLN.
- InP PICs can integrate more active optical functions natively than SOI or SiN.

Avoid:

- "InP means pure InP emits every telecom wavelength." The active layers are usually InP-based heterostructures such as InGaAsP or AlGaInAs on InP.
- "InP only matters upstream as a substrate." It matters across epi, device, PIC, and light-source integration.

## Silicon Nitride, SiN

Professional sources:

- imec describes SiN as suited for very-low-loss PIC applications, including datacom/telecom, with LPCVD low-loss SiN, PECVD CMOS-compatible SiN, and co-integrated Si/SiN options.
- imec lists SiN strengths including low propagation loss, power handling, CMOS compatibility, lower temperature sensitivity, and integration paths for gain material, high-speed modulators, and Ge detectors.
- imec's SiN/Silicon photonics co-integration announcement highlights low propagation loss, phase control, low-loss coupling, lower thermal variation, and high power handling as reasons to add high-quality SiN to SiPh PICs.
- LIGENTEC positions its SiN platform as low-loss integrated photonics from visible to mid-IR and emphasizes volume-scale manufacturing.

Reader-facing interpretation:

- SiN should be introduced as a low-loss passive platform, not as a full replacement for silicon photonics or InP.
- SiN is useful for long passive paths, filters, delay lines, routing, resonators, sensing, quantum, and hybrid external-cavity lasers.
- SiN's platform question is often not "can it make everything?" but "where does low loss and stable phase justify adding another layer/platform?"

Good page claims:

- SiN complements SOI by reducing loss and improving phase stability for passive optical circuits.
- SiN can be co-integrated with active silicon photonics in some process flows.
- SiN usually needs another platform for efficient light generation and high-speed active modulation.

Avoid:

- "SiN replaces silicon photonics."
- "Low loss means no packaging issue." Coupling and assembly still matter.

## TFLN / LNOI

Professional sources:

- Nature Reviews Physics summarizes thin-film lithium niobate as an integrated electro-optic platform with strong electro-optic interaction, low optical loss, high microwave bandwidth, and scalable reconfigurability.
- The 2018 Nature paper on integrated lithium niobate modulators explains the motivation: chip-scale modulators need CMOS-compatible voltages, ultra-high bandwidth, and low optical loss; the demonstration reached 210 Gb/s with low on-chip loss.
- Nature Communications work on lithium-niobate-on-silicon-nitride demonstrates wafer-scale bonding of thin-film LiNbO3 to SiN PICs, preserving low-loss SiN waveguides and adding electro-optic functionality.
- Lightium positions TFLN as a foundry platform with 200 mm wafers, >100 GHz modulation, low-voltage operation, broad transparency, and nonlinearities, while noting its platform was in closed beta at the time captured.

Reader-facing interpretation:

- TFLN should not be introduced as a whole optical-module replacement.
- Its clearest role is high-performance electro-optic modulation, especially where bandwidth, voltage, linearity, and optical loss become critical.
- LNOI/TFLN often appears in hybrid or heterogeneous integration with Si, SiN, or InP. That integration challenge belongs partly to later PIC and packaging chapters.
- TFLN belongs in `05 Material Platforms` as a platform option, then returns in `09 Modulation And PIC`.

Good page claims:

- TFLN is attractive because the Pockels effect provides fast, linear electro-optic modulation.
- TFLN is a strong candidate for next-generation high-speed modulators.
- TFLN needs ecosystem, foundry, packaging, and integration maturity before it can be treated like mature SOI.

Avoid:

- "TFLN has already replaced SiPh."
- "TFLN removes the need for InP light sources."
- "Low Vpi means no driver/DSP is needed."

## Why No Single Material Wins Everything

The best teaching frame is:

```text
Material platforms solve different constraints:

InP  -> active light generation and active communication devices
GaAs -> short-reach 850 nm VCSEL ecosystem
Si/SOI -> dense CMOS-compatible routing, modulation, and Ge detection
SiN -> low-loss passive routing, filters, resonators, phase stability
TFLN -> high-speed, low-loss, linear electro-optic modulation
```

Reasons:

- A platform that generates light well may not scale like CMOS.
- A platform that scales like CMOS may not generate light efficiently.
- A platform with very low optical loss may not provide native gain or high-speed modulation.
- A platform with excellent modulation may still need light sources, detectors, drivers, packaging, and yield learning.
- At module/system level, the winning architecture is often a material stack and integration strategy, not a single material.

## Suggested Reader Pages

Use the following pages for the next chapter:

1. `Silicon: electronics and photonic integration`
   - explain indirect bandgap boundary
   - explain SOI/BOX/Photonics-SOI
   - explain waveguides, modulators, Ge PD, foundry/PDK angle

2. `GaAs: 850 nm and VCSEL`
   - explain GaAs/AlGaAs and 850 nm VCSEL context
   - connect to SR / MMF / short reach
   - leave VCSEL device structure details for chapter 08

3. `InP: 1310/1550 nm and high-speed communication`
   - explain InP-based active platform
   - DFB/EML/CW source/PD relevance
   - clarify pure InP vs InP-based heterostructures

4. `SOI and Photonics-SOI`
   - explain engineered substrate stack
   - separate substrate from foundry process and final PIC
   - show why BOX matters and where thermal tradeoff appears

5. `SiN as a low-loss passive platform`
   - explain low loss, phase stability, broad wavelength range
   - position as complement to SOI/InP

6. `LNOI and TFLN`
   - explain Pockels effect and electro-optic modulation
   - position as high-speed modulator platform
   - avoid overstating commercial maturity

7. `Why no single material wins everything`
   - compare platform strengths/boundaries
   - introduce hybrid and heterogeneous integration as the natural outcome

## Source List

- Soitec, "Photonics-SOI substrates", https://www.soitec.com/home/products/product-platforms/photonics-soi
- Soitec, "Soitec contributes to accelerated development of integrated optical connectivity solutions for AI datacentres with its silicon photonics SOI technology", https://www.soitec.com/home/group/newsroom/press-releases/2025/03/19/soitec-contributes-to-accelerated-development-of-integrated-optical-connectivity-solutions-for-ai-datacentres-with-its-silicon-photonics-soi-technology
- Sandia MESA, "Silicon Photonics", https://www.sandia.gov/mesa/silicon-photonics/
- AIM Photonics, "Active PIC Features, MPW Run Schedule and Pricing", https://www.aimphotonics.com/base-active-pic
- imec, "Silicon photonics: piggybacking on chip manufacturing experience", https://www.imec-int.com/en/articles/silicon-photonics-piggybacking-decades-chip-manufacturing-experience
- TIA Fiber Optics Tech Consortium, "400GBASE-SR4 Application Overview", https://www.tiafotc.org/ieee-802-3-ethernet-standards-update/multimode-standards-update/400gbase-sr4/
- NVIDIA Docs, "MMA4Z00-NS400 400Gb/s Single-port OSFP 400Gb/s Multimode SR4 50m", https://docs.nvidia.com/networking/display/mma4z00ns400
- RP Photonics Encyclopedia, article on "Vertical Cavity Surface-emitting Lasers", Dr. Rüdiger Paschotta, https://www.rp-photonics.com/vertical_cavity_surface_emitting_lasers.html
- Nokia, "ICE-D Intra Data Center Optics", https://www.nokia.com/optical-networks/ice-d-intra-datacenter/
- PhotonHub, "Indium Phosphide PICs", https://photonhub.eu/technology-platform/indium-phosphide-pics/
- M. Smit et al., "InP photonic circuits using generic integration", Photonics Research, https://opg.optica.org/prj/fulltext.cfm?uri=prj-3-5-B60
- PhotonDelta, "Integrated photonics platforms compared: Silicon Nitride, Indium Phosphide & Silicon Photonics", https://www.photondelta.com/news/integrated-photonics-platforms-compared-silicon-nitride-indium-phosphide-silicon-photonics/
- imec, "Silicon nitride-based photonics", https://www.imec-int.com/en/what-we-offer/development/silicon-nitride
- imec, "Co-integration of high-quality SiN waveguide technology with active silicon photonics platform", https://www.imec-int.com/en/press/imec-demonstrates-co-integration-its-high-quality-sin-waveguide-technology-its-active-silicon
- LIGENTEC, "Technology", https://www.ligentec.com/technology/
- M. Loncar et al., "Integrated electro-optics on thin-film lithium niobate", Nature Reviews Physics, https://www.nature.com/articles/s42254-025-00825-5
- C. Wang et al., "Integrated lithium niobate electro-optic modulators operating at CMOS-compatible voltages", Nature, https://www.nature.com/articles/s41586-018-0551-y
- J. Liu et al., "A heterogeneously integrated lithium niobate-on-silicon nitride photonic platform", Nature Communications, https://www.nature.com/articles/s41467-023-39047-7
- Lightium, "Thin Film Lithium Niobate Photonic Foundry", https://lightium.com/

## Open Questions For The Writing Plan

- Should the `05` chapter include a separate page for "hybrid vs heterogeneous integration", or keep that as the final page in this chapter?
- Should `SOI and Photonics-SOI` be a standalone page or folded into `Silicon: electronics and photonic integration`?
- Should GaAs include only 850 nm VCSEL, or also mention that GaAs-based systems can support other wavelengths and devices in a short note?
- How much TFLN commercial status should be included now, given the site is not meant to be a news tracker?
