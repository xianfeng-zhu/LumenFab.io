# PIC / Optical Circuit Professional Source Notes

Date: 2026-05-24

Purpose: source pack for the LumenFab.io component page `src/pages/components/pic.mdx`. These notes should guide reader-facing educational content; do not paste source wording into the page.

## Scope

Cover:

- PIC as the chip-level optical circuit in an optical engine.
- Silicon photonics / SOI PICs, InP PICs, SiN PICs, TFLN / LNOI PICs, and hybrid or heterogeneous integration.
- Core optical functions: waveguiding, splitting, phase control, intensity modulation, WDM MUX / DEMUX, coupling, monitoring, and photodetection.
- CPO-specific pressure on insertion loss, thermal tuning, lane density, EIC proximity, and testability.

Keep out:

- Laser device internals, which belong on the laser-source page.
- Fiber attach and mechanical alignment details, which belong on optical I/O and packaging pages.
- EIC driver / TIA circuit design, which belongs on the EIC page.
- Company ranking or investment mapping.

## Professional Sources

| Source | Type | URL | Key takeaways for the page |
|---|---|---|---|
| imec, Silicon photonics foundry services | Foundry / research institute technology page | https://www.imec-int.com/en/what-we-offer/development/photonics | Use for the idea that silicon photonics platforms support scalable PIC manufacturing, 200 mm / 300 mm platform routes, SiN integration, and integration options for III-V lasers, LNO modulators, SOAs, and active devices. |
| imec IC-Link, iSiPP300 integrated photonics platform | Foundry platform page | https://www.imeciclink.com/en/asic-fabrication/silicon-photonics-foundry-services/isipp300 | Use as concrete evidence for platform building blocks: high-precision waveguides, SiN waveguides, grating couplers, edge couplers, directional couplers, ring modulators, GeSi EAMs, silicon MZMs, Ge photodetectors, metal layers, TSVs, and microbumps. Also supports the foundry / PDK framing. |
| PhotonHub, Silicon and Silicon Nitride PICs | European photonics infrastructure page | https://photonhub.eu/technology-platform/silicon-and-silicon-nitride-pics/ | Use for the design-to-reliability sequence: layout / waveguide design, cleanroom fabrication, optical and electrical characterization, coupling efficiency, bandwidth, and lifetime / environmental testing. |
| PhotonHub, Indium Phosphide PICs | European photonics infrastructure page | https://photonhub.eu/technology-platform/indium-phosphide-pics/ | Use for InP PIC boundary: integrated lasers, modulators, and detectors on-chip, epitaxy and processing, optical / electrical / RF testing, modulation speed, insertion loss, and reliability under thermal and electrical stress. |
| PhotonHub, Lithium Niobate PICs | European photonics infrastructure page | https://photonhub.eu/technology-platform/lithium-niobate-pics/ | Use as support for lithium-niobate PIC roles: high-speed modulation, nonlinear optics, and quantum applications. Treat TFLN / LNOI as a modulation-oriented platform rather than a complete laser source answer. |
| Luceda Academy, Working with AWG Designer | Design tool documentation | https://academy.lucedaphotonics.com/tutorials/working_with_awg_designer | Use for AWG explanation: input star coupler, waveguide array with path-length differences, output star coupler, routing to the rest of the circuit, and manufacturable layout flow. |
| Lumentum, A-thermal Arrayed Waveguide Grating | Manufacturer product page | https://www.lumentum.com/en/products/dwdm-muxdemux-thermal-arrayed-waveguide-grating | Use for the practical MUX / DEMUX role of AWGs in WDM systems. Avoid implying all CPO PICs must use this exact packaged PLC product. |
| MIT MTL, Microring modulators with integrated thermal tuner | University research report | https://mtlsites.mit.edu/annual_reports/2013/adiabatic-resonant-microring-modulators-with-integrated-thermal-tuner/ | Use for the thermal-control point: microring / microdisk resonators are compact and wavelength-selective, but process and temperature drift detune alignment with WDM lasers and need compensation. |
| Optica / Columbia, Integrated thermal stabilization of a microring modulator | Research paper page | https://opg.optica.org/oe/abstract.cfm?uri=oe-21-12-14342 | Use only for the high-level claim that microring modulators often need integrated sensing / heater feedback to stabilize resonance under temperature variation. |

## Reader-Facing Interpretation

PIC should be explained as an optical circuit layer, not as a synonym for silicon photonics. A PIC is where continuous light is guided, split, phase-shifted, intensity-modulated, wavelength-multiplexed, coupled, monitored, and detected. The exact material stack changes the native strengths of that circuit:

- Si / SOI: dense waveguides, CMOS-like scaling, compact modulators, Ge photodiodes, strong foundry / PDK ecosystem, but no efficient native communication laser.
- InP: direct-bandgap active platform that can integrate lasers, SOAs, EAMs, modulators, and detectors, but with different scaling and passive-loss tradeoffs from silicon.
- SiN: low-loss passive routing, filtering, resonators, interposers, and external-cavity functions, usually combined with another active platform.
- TFLN / LNOI: strong electro-optic modulation platform, often combined with silicon, SiN, or InP for a complete optical engine.

The page should teach PIC through signal flow:

```text
CW light in
→ splitter / distribution
→ modulator per lane
→ WDM MUX or parallel-lane routing
→ edge / grating coupler
→ fiber or package optical I/O

fiber light in
→ edge / grating coupler
→ DEMUX or parallel routing
→ photodetector
→ TIA / EIC
```

This lets the reader see why laser source, PIC, EIC, optical I/O, package, and test are separate but coupled design layers.

## Good Page Claims

- PIC is the optical circuit layer of the optical engine.
- The same PIC may include passive waveguides, splitters, couplers, modulators, filters, monitor taps, photodetectors, heaters, metal pads, and optical I/O structures.
- Silicon photonics is an important PIC platform, but PIC is broader than SiPh.
- A silicon PIC usually needs a separate or integrated III-V light source for efficient communication-band laser power.
- CPO increases pressure on PIC insertion loss, lane density, thermal behavior, tuning power, EIC proximity, fiber coupling, and wafer / package test coverage.
- WDM PICs need wavelength-selective components such as AWGs, rings, Echelle gratings, or other filters; PSM / parallel-lane designs reduce wavelength-multiplexing complexity but use more fibers or lanes.
- Ring-based elements are compact and wavelength-selective, but their resonance positions are sensitive to process and temperature.
- MZM and MRM are modulator structures; SiPh, InP, SiN, and TFLN are material / platform routes; CPO and LPO are system architecture or module-boundary choices.

## Avoid

- "PIC means silicon photonics."
- "PIC includes the switch ASIC."
- "A silicon PIC solves the laser problem by itself."
- "MZM / MRM are material platforms."
- "SiN is a complete active transmitter platform."
- "TFLN removes the need for laser, driver, detector, coupling, or packaging."
- "WDM always wins over parallel optics." The tradeoff depends on fiber count, MUX / DEMUX loss, wavelength control, test, and packaging.

## Page Shape

Recommended component page sections:

The page should be organized as one signal journey through a silicon photonics PIC. Give the reader a map first, then expand the device families in the order a light signal encounters them:

1. `0. 什么是硅光 PIC`
2. `1. 一颗硅光 PIC 里有什么`
3. `2. 材料栈：硅、二氧化硅、氮化硅、锗和金属层`
4. `3. 波导与模式：芯片上的光路导线`
5. `4. 光输入输出：从光纤到片上波导`
6. `5. 被动光路器件：分束、合束、滤波和路由`
7. `6. 主动光器件：用电信号控制光`
8. `7. 从光到电，再从电控制光`
9. `8. 设计与制造：从光路图到真实芯片`
10. `9. 封装与系统集成：光、电、热一起对准`
11. `10. 测试指标：怎样判断 PIC 是否工作正常`
12. `11. 应用场景：从数据通信到传感和计算互连`
13. `12. 总结：一束光在硅光 PIC 里的旅程`

The visual structure should act as a map, not a decorative figure. The page should use a PIC top-view diagram to keep the signal path visible while the reader moves from platform to waveguide, devices, control, manufacturing, packaging, test, and applications.
