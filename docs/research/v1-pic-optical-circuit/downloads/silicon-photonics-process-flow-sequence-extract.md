# Silicon Photonics PIC Process Flow Sequence — Extracted Details

**Sources synthesized from:**
- "Silicon Photonics: The State of the Art" (detailed book chapter on CMOS-SiPh integration)
- AIM Photonics official documentation (aimphotonics.com)
- AMF (Advanced Micro Foundry) fabrication process (cmc.ca)
- IMEC iSiPP200/iSiPP300 platform documentation
- IPSR-I 2024 Silicon Photonics Roadmap
- CORNERSTONE (Southampton) bespoke fabrication
- STMicroelectronics DAPHNE platform
- US Patent 8,741,684 B2 (Ge detector process)

## Generic Silicon Photonics PIC Process Flow

### Front-End-of-Line (FEOL)

#### 1. SOI Wafer Start
- **Wafer:** 200 mm or 300 mm SOI wafer (Smart-Cut Unibond preferred)
- **Standard stack:** 220 nm crystalline Si device layer / ~2 µm buried oxide (BOX) / 725 µm Si handle wafer
- Alternatively: 300 nm Si device layer (STMicroelectronics)
- Thick BOX (~2 µm) distinguishes photonic SOI from electronic SOI (which uses 50-100 nm BOX)

#### 2. Silicon Waveguide Patterning
**Three consecutive etch steps** (e.g., AMF foundry, DAPHNE):

| Step | Etch Depth | Purpose |
|---|---|---|
| 1 | ~70 nm | Grating coupler formation |
| 2 | ~130 nm (cumulative) | Slab region for rib/ridge waveguides |
| 3 | Full etch (220 nm) | Channel/strip waveguide definition |

- **Lithography:** 193 nm DUV immersion (imec) or 248 nm DUV
- **Minimum CD:** ~90 nm (193 nm) to ~180 nm (248 nm)
- **Etch:** Dry etch (F/Cl/Br chemistries), targeting >88° sidewall angle, <2 nm sidewall roughness
- **Post-etch treatment:** Chemical treatment for ultra-smooth sidewalls (AIM Photonics)
- **Auto-alignment** between partial and full etch levels (DAPHNE)
- **Waveguide loss target:** ~1-2 dB/cm for channel waveguides

#### 3. Silicon Nitride Waveguide Fabrication (Optional Layer)
- Two SiN levels deposited via **low-temperature PECVD** (enables co-integration with active devices)
- Patterned with RIE + post-etch treatment
- Clad in pTEOS (plasma-enhanced TEOS)
- Alternatively: LPCVD SiN for ultra-low loss (imec, high-temperature, prototyping only)

#### 4. Ion Implantation (Modulators)
**Standard active PIC: 6 implant levels** (common in both AIM Photonics and AMF):

| Type | Species | Purpose |
|---|---|---|
| P++ | Boron heavy | Ohmic contact to p-type regions |
| P+ | Boron | p-type doping for modulator junctions |
| P | Boron light | Light p-type doping |
| N++ | Phosphorus/As heavy | Ohmic contact to n-type regions |
| N+ | Phosphorus/As | n-type doping for modulator junctions |
| N | Phosphorus/As light | Light n-type doping |

- Plus CMOS well and source/drain implants if monolithically integrated
- **Advanced platforms (AIM QFlex):** 12 implant levels for more advanced active designs
- **Activation anneal:** ~1000°C, must occur before BEOL metals

#### 5. Germanium Photodetector Integration
**Damascene process flow for selective Ge epitaxy:**

1. **Oxide deposition** over patterned SOI waveguides
2. **Trench etch** through oxide to expose underlying Si waveguide
3. **Selective Ge epitaxial growth** on exposed Si:
   - Low-temperature ~350°C Ge buffer layer
   - High-temperature ~750°C Ge layer
   - Optional: in-situ HCl vapor etch + H₂ bake at 850°C for seed surface preparation
4. **Annealing** (e.g., 3 min at 850°C in N₂) to reduce threading dislocation density (target: <10⁷ cm⁻²)
5. **CMP planarization** of Ge, stopping on oxide (final Ge thickness: ~100-500 nm)
6. **Cap layer** (e.g., 20 nm Si₀.₅₅Ge₀.₅₀) for silicidation compatibility
7. **Implantation** (n+ and p+) to form vertical or lateral p-i-n structure
8. **Activation anneal** (<700°C to maintain thermal budget)
- **Performance:** Responsivity up to 1.1 A/W, bandwidth scaling to 300 GHz

### Back-End-of-Line (BEOL)

#### 6. Contact Formation
- Deep via etch to implanted silicon and Ge contact regions
- Ti/TiN liner deposition + W plug fill
- CMP planarization

#### 7. Copper Metal 1 (M1)
- Single damascene Cu routing
- ILD deposition → via/trench patterning → Cu fill → CMP
- Typical thickness: 200 nm - 1 µm

#### 8. ILD and Vias
- SiO₂ or low-k ILD deposition
- Via patterning and etch
- W or Cu via fill + CMP

#### 9. Metal 2 (M2) and Higher Metal Layers
- Dual damascene Cu or Al routing
- M2 typically thicker (up to 2 µm) for RF performance
- **imec offers up to 4 metal layers**
- **STMicroelectronics DAPHNE: 5 metal layers**
- **Standard MPW: 2 Cu wiring levels**

#### 10. Heater Elements (Thermal Phase Shifters)
- TiN resistor layer (sheet resistance monitored for process control)
- Typically between M1 and M2
- Used for thermo-optic tuning of ring resonators and MZIs

#### 11. Aluminum Termination Pad
- Final Al pad for wire bonding or flip-chip
- Passivation (SiN/SiO₂) opening over pads

#### 12. Passivation and Pad Opening
- Oxide passivation with selective pad openings

#### 13. Optical I/O Structures
- **Edge coupling:** Deep trench etch with nano-tapers and etched facets
- **Surface coupling:** Grating couplers (single-mode fiber, sub-dB loss possible)
- **AIM Photonics:** "Trench with substrate release" for low-loss edge couplers

### Optional Advanced Modules

#### 14. Heterogeneous Integration
- **III-V laser integration:** Flip-chip, wafer bonding, or micro-transfer printing
- **LNO modulator integration**
- **TSVs:** Through-silicon vias (imec: 11 µm diameter, 100 µm depth)
- **Microbumps and UBM:** Cu-Ni-Sn under-bump metallization (imec)

## Summary: Number of Process Levels

| Level Type | Typical MPW Count | Advanced Platform |
|---|---|---|
| **Si etch levels** | 3 (2 partial + 1 full) | 3 (e.g., AMF, DAPHNE) |
| **Implant levels** | 6 (standard) | 12 (AIM QFlex) |
| **Ge detector levels** | 1 | 1 |
| **Metal layers (Cu)** | 2 | Up to 4-5 |
| **Al termination pad** | 1 | 1 |
| **SiN waveguide levels** | 0-2 | 2 (AIM) |
| **Total mask levels** | ~10-15+ | Up to ~20+ |
| **Si waveguide layers** | 1 (Si) | 1 Si + 2 Ridge (AIM Low-Loss) |

## Platform-Specific Process Flow Variance

### AIM Photonics (Base Active, 300 mm)
1. 300 mm SOI substrate
2. Si/ridge patterning (193 nm immersion lithography + RIE)
3. SiN waveguide deposition and patterning (low-temp PECVD)
4. Ion implantation (6 levels)
5. Ge photodetector integration (CVD in pTEOS trenches)
6. Contact formation
7. Cu M1 (single damascene)
8. Cu M2 (dual damascene)
9. Al pad
10. Passivation + pad open
11. Deep trench (optional)

### AMF (200 mm)
1. 200 mm SOI (220 nm Si / 3 µm BOX)
2. 3 Si etch steps (2 partial + 1 full, 193 nm DUV)
3. SiN waveguide (PECVD)
4. 6 implant levels (P++, P+, P, N++, N+, N)
5. Ge deposition + implant for photodetectors
6. 2 metal levels (no planarization) + metal heater
7. Deep trench with etched facets
8. Front-side oxide etch (selective waveguide exposure)

### STMicroelectronics DAPHNE (300 mm)
1. 300 mm SOI (300 nm Si)
2. 3 Si etch steps (partial 150 nm, partial 50 nm, full 300 nm; auto-aligned)
3. Multiple implant configurations
4. Ge detectors
5. 5 metal layers (BEOL)
6. Far BEOL: 20 µm Cu posts for 3D integration
