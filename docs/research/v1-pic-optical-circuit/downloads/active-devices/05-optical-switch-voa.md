# Silicon Photonics Optical Switch & VOA: Architectures, Mechanisms & Design Tradeoffs

## Source References
- "Algorithmically calibrated optical switch with high-extinction-ratio and low-polarization-dependence on 3-μm-thick SOI platform," Optics Communications (2024)
- Chrostowski & Hochberg, "Silicon Photonics Design" (2015), Chapter 6 -- Modulators
- Kotura Inc., "Fundamentals of Silicon Photonic Devices" (2006) -- https://network.nvidia.com/pdf/whitepapers/KOTURA_Fundamentals_of_Silicon_Photonic_Devices.pdf
- "Compact silicon photonic resonance-assisted variable optical attenuator," Opt. Express 24(24), 27600 (2016)
- "A fast SOI-based variable optical attenuator with a p-i-n structure with low polarization dependent loss," Optoelectronics Letters (2016)
- Kim et al., "Demonstration of record-low injection-current variable optical attenuator based on strained SiGe with optimized lateral pin junction," Opt. Express 23(9), 12354 (2015)
- "Single-stage 2x2 silicon thermo-optic switch with crosstalk < -35 dB over 40 nm and Pπ < 8 mW," Optica Open Preprint (2024)
- Yang et al., "Low cross talk, low Pπ silicon optical switch based on highly balanced couplers and folded phase shifters," Opt. Lett. 50(1), 101-104 (2025)
- Tang & Chu, "Research Progress in Silicon Optical Switching Devices (Invited)," Acta Optica Sinica (2024)
- "A comprehensive analysis of silicon photonic switching chips," Optical and Quantum Electronics (2025)

## Optical Switch Architectures

### 1. MZI-Based Optical Switch
Uses a Mach-Zehnder interferometer with phase shifters in one or both arms.

**Operation:**
- Cross state (bar): Δφ = 0 (or 2π)
- Through state (cross): Δφ = π

**Performance highlights (state-of-the-art 2x2 MZI TO switch):**
- Pπ = ~8 mW (TiW heater, folded waveguide/heater design)
- Crosstalk: < -35 dB (e-beam) / < -30 dB (DUV) over 40 nm
- Optical bandwidth: 40 nm (C-band)
- MMI excess loss: < 0.14 dB
- MMI imbalance: < 0.13 dB
- Overall insertion loss: ~0.7-1.3 dB
- Switching time: < 20 μs (thermo-optic)

**MZI switch coupler design:**
- MMI multimode region: 3.6 μm wide x 46.7 μm long
- Tapered access waveguides: 1.5 μm wide x 25.0 μm long
- Taper spacing: 2.1 μm at the taper end

**Performance comparison of 2x2 MZI switches:**

| Paper (Year) | Crosstalk (dB) | ER (dB) | IL (dB) | Pπ (mW) | Speed |
|---|---|---|---|---|---|
| Zhang et al. (2024) | < -35 | -- | 0.7 | 7.6 | < 20 μs |
| Yang et al. (2025) | < -35 | 35 | -- | ~8 | -- |
| LETI (2020) | -31.3 | -- | < 1.31 | -- | -- |
| Early SOI (2006) | -15.5 | 14.9 | 3.44 | -- | 300 ns |

### 2. Ring-Based Optical Switch
Uses microring resonators as switching elements.

**Advantages:** Ultra-compact, low switching energy
**Disadvantages:** Wavelength-selective, temperature-sensitive, limited scalability

### 3. Large-Scale Switch Fabrics
- 64x64 MZI-based TO switch demonstrated (2018) with ~1 ns link switching time
- TO switches at larger scale show lower loss and better crosstalk than EO switches
- EO switches: 32x32 demonstrated (2017)

## Phase Shifter Mechanisms for Switches

| Mechanism | Speed | Power | Loss | Typical Application |
|---|---|---|---|---|
| Thermo-optic (TO) | μs-ms | Several mW (Pπ 8-50 mW) | Low | Large port-count switches |
| Electro-optic (EO, carrier depletion) | ns | Lower than TO | Moderate-High | High-speed switches |
| Carrier injection (PIN) | ns-μs | Moderate | Higher | VOAs, small switches |
| Phase-change materials (PCM) | ns | fJ/bit (non-volatile) | Moderate-High | Emerging technology |

### Thermo-Optic vs. Electro-Optic Switch Tradeoffs

| Metric | Thermo-Optic | Electro-Optic |
|---|---|---|
| Switching speed | μs-ms (thermal) | ns (carrier) |
| Power consumption | Higher (continuous) | Lower (dynamic) |
| Optical loss | Lower | Higher (carrier absorption) |
| Crosstalk | Better (lower) | Worse (imbalanced loss) |
| Scalability | 64x64 demonstrated | 32x32 demonstrated |
| Fabrication | Simple | More complex (doping, contacts) |

## Variable Optical Attenuator (VOA)

### Operating Mechanisms

#### 1. Carrier Injection VOA (PIN diode)
- Forward-biased PIN diode injects electrons and holes into the waveguide
- Free-carrier absorption increases (Δα increases)
- Also produces index change (Δn) via plasma dispersion
- **Fundamental mechanism:** plasma dispersion effect (Soref equations)

**Performance:**
| Metric | Typical Si PIN | Best Reported |
|---|---|---|
| Attenuation range | 15-20 dB (PIN only) | 20 dB @ 20 mA/mm (SiGe) |
| On-chip insertion loss | ~1-3 dB | Depends on doping |
| Response time (rise/fall) | 30-50 ns | 5.7 ns (carrier-limit) |
| Switching speed | ~30-50 MHz | 2 GHz (SiGe w/ pre-emphasis) |
| Power @ 20 dB attenuation | ~76-424 mW | 22 mW (SiGe, optimized) |

**Response time fundamentals:**
- Carrier-lifetime limited: τ_recomb determines fall time
- Rise time: junction forward-bias charging time (~RC)
- Pre-emphasis can overcome lifetime limits for faster switching

#### 2. Thermo-Optic VOA
- MZI-based or two-mode interference (TMI) structure
- Heating changes refractive index, altering interference condition
- Typical response: 180-184 μs (rise/fall)
- Power: 8.72 mW for 18.64 dB attenuation (polymer/silica hybrid)
- Low insertion loss, broadband operation

#### 3. Resonance-Assisted VOA (PIN + MRR)
- PIN diode provides ~15 dB attenuation
- Second-order microring thermally tuned for additional attenuation
- Combined contrast >40 dB
- Dual time-constant response: carrier injection (~28 MHz) + thermal (~8.3 kHz)
- Heat from PIN operation reused for thermal tuning

#### 4. MEMS VOA
- Electrically movable mirror
- Low power (< 2 mW), fast response (< 2 ms)
- Attenuation up to 40 dB

### VOA Design Tradeoffs

| Mechanism | Attenuation Range | Speed | Insertion Loss | Power |
|---|---|---|---|---|
| Carrier injection | 15-40 dB | 5-50 ns | 1-3 dB | 20-400 mW |
| Thermo-optic | 15-25 dB | 100-200 μs | 0.5-2 dB | 8-460 mW |
| Resonance-assisted | >40 dB | Dual: fast + thermal | 1-3 dB | Moderate |
| MEMS | Up to 40 dB | < 2 ms | < 1 dB | < 2 mW |

## Commercial VOA Parameter Ranges (General)
- Attenuation range: 0-60 dB
- Insertion loss: < 1 dB (off-chip)
- PDL: < 0.2 dB
- Response time: varies by mechanism
