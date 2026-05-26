# Silicon Photonics Thermo-Optic Phase Shifter: Physics, Efficiency & Thermal Crosstalk

## Source References
- Jacques et al., "Optimization of thermo-optic phase-shifter design and mitigation of thermal crosstalk on the SOI platform," Opt. Express (2019) -- https://pubmed.ncbi.nlm.nih.gov/31052905/
- Sabouri et al., "Thermo Optical Phase Shifter With Low Thermal Crosstalk for SOI Strip Waveguide," IEEE Photonics J. 13(2), 1-12 (2021) -- https://doaj.org/article/4c7b3a7275f64535835009bad4db0a45
- "Thermo-Optic Phase Tuners Analysis and Design for Process Modules on a Silicon Nitride Platform," Photonics (2021) -- https://doaj.org/article/c43a7a0b733d4ad38552baa6cb5d02f1
- PsiQuantum, "Reliability Optimization of Open Trench Undercuts Silicon Photonic Tuner Heater," IEEE EPS (2024)
- "Ultra-low loss hybrid ITO/Si thermo-optic phase shifter with optimized power consumption," Opt. Express (2020)

## Thermo-Optic Effect in Silicon

The refractive index of silicon changes with temperature due to the thermo-optic effect:

```
dn/dT = 1.86 × 10^(-4) K^(-1) (at 1550 nm, room temperature)
```

For a phase shift Δφ over length L:
```
Δφ = (2π / λ) · (dn/dT) · ΔT · L · Γ
```

where Γ is the thermal confinement factor (overlap of thermal field and optical mode).

### Power for π phase shift (Pπ):
```
Pπ = ΔT_π · G_th
```

where ΔT_π is the temperature rise needed for π phase shift and G_th is the thermal conductance of the heater-to-waveguide path.

## Heater Material Comparison

### TiN (metal) heater (Jacques et al., 2019):
- Pπ = 21.4 mW
- τ = 5.6 μs (switching time)
- Negligible optical loss
- CMOS-compatible, stable

### N++ doped silicon heater (Jacques et al., 2019):
- Pπ = 22.8 mW (marginally higher)
- τ = 2.2 μs (2.5x faster than TiN)
- Negligible optical loss
- Most practical and efficient on standard SOI
- No additional material deposition needed

### Compact SOI strip waveguide (Sabouri et al., 2021):
- Pπ = 13.2 mW
- ΔT < 0.1°C at 10 μm distance (low thermal crosstalk)
- For strip and rib waveguide geometries

### SiN with open trench undercut (PsiQuantum, 2024):
- Pπ = 15 mW (room temperature)
- Pπ = 12.5 mW (cryogenic)
- Quantum photonics optimized

### Hybrid ITO/Si heater (2020):
- Pπ = 10 mW (lowest reported)
- 50 μm heater length
- Ultra-low optical loss
- ITO allows heater placement closer to waveguide

## Typical Pπ Range

**10-50 mW** across most practical SOI thermo-optic phase shifter designs.

## Switching Speed

- Typical switching time: **1-20 μs** (thermally limited)
- Doped Si heater: 2.2 μs (fastest standard SOI)
- TiN heater: 5.6 μs
- Thermal time constant scales with square of feature size: τ ~ L^2 / D_th

## Thermal Crosstalk

### Problem:
Heat from one phase shifter diffuses laterally through the substrate and affects adjacent devices, causing unintended phase shifts.

### Mitigation techniques:

**1. Deep air-filled trenches:**
- Reduce power consumption by up to 70%
- Thermal crosstalk phase shift: 0.045 π rad/mm
- Fabrication-friendly structure

**2. Trenches + substrate undercut:**
- Reduce power consumption by up to 97%
- Thermal crosstalk phase shift: 0.006 π rad/mm
- Penalty: bandwidth drops to ~0.9 kHz
- More complex fabrication

**3. Compact SOI design (Sabouri et al.):**
- ΔT < 0.1°C at 10 μm distance
- Good isolation without complex fabrication

### Key crosstalk mitigation insight:
Deep trenches are identified as the best fabrication-friendly structures for reducing heat leakage affecting nearby phase-sensitive devices.

## Phase Shifter Geometry Tradeoffs

Key design knobs that affect Pπ, speed, and crosstalk:
- Heater width: typically 2.5-7 μm
- Gap between heater and waveguide
- Cladding configuration (SiO2 vs. air)
- Etching patterns (slots, trenches)
- Substrate thickness (SOI BOX layer affects thermal isolation)

## Applications

| Application | Why Thermo-Optic | Requirements |
|---|---|---|
| MZI switch | Large phase shift needed (~π) | Low Pπ, moderate speed |
| Tunable filter/ring | Continuous resonance tuning | Low Pπ, no speed requirement |
| VOA array | Multi-channel trimming | Low crosstalk |
| Phase array (OPA) | Phase calibration | Independent phase control |
| MRM thermal lock | Resonance stabilization | Low power, continuous operation |
