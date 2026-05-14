# LumenFab.io Site Structure

## Positioning

LumenFab.io is a structured Chinese learning path for AI data-center optical interconnects.

The goal is to help a reader build a mental model from first principles:

```text
Why optical interconnects matter
→ how one optical link works
→ why lasers work
→ why materials differ
→ how wafers and epitaxy create device platforms
→ how devices become PICs and modules
→ why packaging, testing, and reliability decide volume production
→ how CPO, LPO, and AI systems sit above the module
```

## Core Principle

Do not organize the first version by industrial supply chain.

Supply-chain order starts from raw materials, but a learner needs another order:

1. Understand why electrical interconnects hit limits.
2. Understand what an optical link does.
3. Understand how light is generated, guided, modulated, and detected.
4. Understand why material choices matter.
5. Understand how manufacturing turns materials into devices.
6. Understand why packaging and test decide deployability.
7. Understand modules, systems, and companies.

## Chapter Map

### 00. Start Here

Purpose: define the scope and give the reader one high-level map.

Core ideas:

- AI clusters create bandwidth and power pressure.
- Optical interconnects move information by converting electrical signals into light.
- A module is not just a laser. It is a system of optics, electronics, packaging, and tests.
- Company names should be learned after the technical stack is clear.

Suggested pages:

- What this site explains
- The one-page stack map
- How to read the site
- Glossary entry point

### 01. Why Optical Interconnects

Purpose: explain why AI data centers need optical links.

Core ideas:

- GPU clusters need massive east-west bandwidth.
- Copper traces and cables face loss, distance, equalization, and power limits.
- Electrical SerDes gets harder at higher lane rates.
- Optical links trade electronic loss for optical conversion and packaging complexity.

Suggested pages:

- Why AI clusters stress interconnects
- Copper vs optical links
- Bandwidth density and power per bit
- Why 800G, 1.6T, and 3.2T matter
- Where optics sits in a data-center network

### 02. Optical Link Overview

Purpose: show the whole link before diving into components.

Core ideas:

- A link converts electrical bits to optical intensity or phase changes, sends them through fiber, then converts them back.
- Tx and Rx have different bottlenecks.
- A transceiver contains optics, analog electronics, digital processing, power, control, and packaging.

Suggested pages:

- Electrical signal to optical signal
- Tx path: DSP, driver, laser, modulator, coupling, fiber
- Rx path: fiber, detector, TIA, CDR/DSP, electrical output
- What "lane" means
- What a transceiver contains

### 03. Semiconductor And Optics Basics

Purpose: give only the physics needed for the rest of the site.

Core ideas:

- Bandgap explains why materials emit or do not emit light efficiently.
- Direct and indirect bandgap explains why III-V materials matter.
- Refractive index and total internal reflection explain waveguides.
- Interference and resonance explain modulators, filters, and laser cavities.

Suggested pages:

- Valence band, conduction band, and bandgap
- Direct vs indirect bandgap
- PN junction and carrier injection
- Photon, wavelength, frequency, and energy
- Refractive index and total internal reflection
- Waveguides and optical modes
- Interference, resonance, and loss

### 04. Laser Physics

Purpose: move laser physics earlier than material supply chain.

Reason: readers should first know what a laser needs before learning why InP, GaAs, and silicon play different roles.

Core ideas:

- A semiconductor laser needs carrier injection, radiative recombination, gain, feedback, confinement, and output coupling.
- Directionality is selected by cavity feedback and waveguide modes, not by a single electron "knowing" where to emit.
- DFB, DBR, FP, EML, and external CW sources are easier to understand after this foundation.

Suggested pages:

- Spontaneous vs stimulated emission
- Optical gain and threshold current
- Fabry-Perot cavity
- Distributed feedback and wavelength selection
- Vertical and lateral optical confinement
- Laser linewidth and mode stability
- Why semiconductor lasers are temperature-sensitive

### 05. Material Platforms

Purpose: explain why different materials occupy different roles.

Core ideas:

- Silicon is excellent for electronics and photonic routing, but poor for native high-performance lasers.
- GaAs is strong for 850 nm VCSEL and short-reach optics.
- InP is central to 1310 nm and 1550 nm communication lasers and detectors.
- SOI enables dense silicon photonics.
- LNOI/TFLN and SiN are important complementary platforms.

Suggested pages:

- Silicon: electronics and photonic integration
- GaAs: 850 nm and VCSEL
- InP: 1310/1550 nm and high-speed communication
- SOI and Photonics-SOI
- SiN as a low-loss passive platform
- LNOI and TFLN
- Why no single material wins everything

### 06. Raw Materials To Wafers

Purpose: explain how material platforms become usable wafers.

Core ideas:

- Raw elements must become high-purity crystals.
- A wafer is not a finished device. It is a controlled starting platform.
- Substrate quality affects epitaxy, defect density, dark current, reliability, and yield.

Suggested pages:

- In, P, Ga, As, Si, Ge, LiNbO3: what each is used for
- High-purity raw materials
- Polycrystal synthesis
- Single-crystal growth
- Wafer slicing, grinding, polishing, and CMP
- Epi-ready substrates
- InP substrate
- GaAs substrate
- SOI wafer
- LNOI wafer

### 07. Epitaxy And Active Regions

Purpose: explain how wafers become functional optical material stacks.

Core ideas:

- Epitaxy grows functional layers on a substrate.
- Active regions are where gain, absorption, or detection happens.
- QW, MQW, and QD are active-region concepts, not device-package concepts.
- Defects matter because they affect optical efficiency, leakage, dark current, reliability, and yield.

Suggested pages:

- What epitaxy means
- MOCVD and MBE
- Lattice matching and strain
- Defects, dislocations, and non-radiative recombination
- Quantum wells and multiple quantum wells
- Quantum dots
- InGaAsP and AlGaInAs on InP
- InAs/GaAs QD systems
- Ge-on-Si for photodetectors
- Dark current

### 08. Device Layer

Purpose: explain the physical devices that generate, modulate, and detect light.

Core ideas:

- Device words must not be mixed with material-platform words.
- VCSEL, DFB, EML, CW laser, and PD describe different functions and structures.
- A transmitter and a receiver are different systems.

Suggested pages:

- VCSEL
- FP laser
- DFB laser
- DBR laser
- EML and EAM
- External CW laser
- Photodiode and avalanche photodiode
- Driver
- TIA
- Device comparison by role, wavelength, distance, and platform

### 09. Modulation And PIC

Purpose: explain how light is routed, split, modulated, multiplexed, and detected on chip.

Core ideas:

- Modulation can happen by directly driving a laser or externally changing light with a modulator.
- MZM and MRM are structures. SiPh and TFLN are platforms. CPO and LPO are system architectures.
- A PIC is an optical circuit, not just a laser chip.

Suggested pages:

- Direct modulation
- Electro-absorption modulation
- Mach-Zehnder modulator
- Microring modulator
- TFLN modulator
- SiPh PIC overview
- Waveguides and splitters
- MUX, DEMUX, AWG, and filters
- Grating coupler and edge coupler
- Ge photodetectors on silicon
- PSM vs WDM signal flow

### 10. Packaging And Test

Purpose: make packaging and test a first-class learning unit.

Reason: many photonic devices work as demos but fail as products because coupling, thermal design, test time, reliability, and yield are hard.

Core ideas:

- Optical packaging is not simple assembly.
- Coupling loss, alignment tolerance, thermal drift, and testability directly affect link budget and cost.
- Known-good-die and wafer-level testing become critical for optical engines and CPO.
- Reliability testing separates lab demos from volume products.

Suggested pages:

- Why photonic packaging is hard
- Die attach, wire bonding, and flip-chip
- Chip-on-submount
- TO-CAN, butterfly, and array packages
- Fiber array units, lenses, and spot-size converters
- Active alignment
- Passive alignment
- Coupling loss and link budget impact
- Thermal management, TEC, and uncooled optics
- Wafer-level optical test
- Known-good-die
- Burn-in and aging
- Eye diagram, BER, OMA, TDECQ
- Receiver sensitivity
- Reliability tests: temperature cycling, damp heat, vibration, lifetime
- Yield and volume production

### 11. Optical Modules

Purpose: explain how devices, PICs, electronics, packaging, firmware, and tests become products.

Core ideas:

- A transceiver is an integrated product, not a loose set of components.
- DSP-based modules buy margin and interoperability with power and cost.
- LPO removes or weakens module DSP, shifting burden to the host and system.
- Standards determine lane count, wavelength plan, reach, connector, and form factor.

Suggested pages:

- What a transceiver is
- OSFP and QSFP-DD
- 400G, 800G, 1.6T, and 3.2T
- SR, DR, FR, and LR
- DR4, DR8, FR4, and 2xFR4
- DSP-based pluggable optics
- LPO
- Module Tx/Rx internal signal flow
- Power, thermal, firmware, and monitoring

### 12. System Architectures

Purpose: explain how modules connect to AI systems.

Core ideas:

- Pluggable, NPO, and CPO are system boundary decisions.
- CPO moves optical engines closer to switch ASICs or XPUs to shorten electrical paths.
- External laser source changes serviceability, thermal, and optical power architecture.
- OCS and MEMS sit above individual modules and change network topology.

Suggested pages:

- Pluggable optics
- NPO
- CPO
- Optical engine
- External laser source
- Optical interposer
- Co-packaging and thermal constraints
- OCS and MEMS
- Switch ASIC, GPU, XPU, and NIC context
- Ethernet, InfiniBand, and NVLink boundaries

### 13. Industry Map

Purpose: map technical layers to companies only after the reader understands the stack.

Core ideas:

- Material, substrate, epitaxy, device, PIC, module, ASIC, and cloud companies have different economics.
- A company can be important without being closest to the final module.
- "AI optics beneficiary" is too vague unless the layer is named.

Suggested pages:

- Layer-by-layer supply chain
- Raw materials and substrates
- Epitaxy and III-V manufacturing
- Lasers and optical devices
- SiPh foundry and PIC platforms
- Module and optical-engine makers
- Switch ASIC and DSP providers
- Hyperscalers and AI demand
- Common company-mapping mistakes

## Page Template

Every core page should answer:

1. What problem does this concept solve?
2. What prior concepts does it depend on?
3. What is the underlying physical principle?
4. How is it implemented in engineering?
5. What metrics matter?
6. What are the common misconceptions?
7. How does it connect to the previous and next layer?

## Navigation Model

Use three navigation paths:

- Learning path: chapter order from 00 to 13.
- Stack map: jump by layer, from physics to system.
- Glossary: jump by term.

The first version should prioritize the learning path.

