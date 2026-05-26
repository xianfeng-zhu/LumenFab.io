# Silicon Photonics Active Devices: Physics Notes

> Engineer-level summary of key mechanisms, formulas, design tradeoffs, and concrete numbers for Si photonic active devices. All values at 1550 nm unless noted.

---

## 1. Plasma Dispersion Effect (Soref-Bennett, 1987)

Fundamental mechanism for all Si active devices. Free carriers change both index and absorption.

### Formulas

```
Δn = -8.8e-22 ΔN_e  -  8.5e-18 (ΔN_h)^0.8
Δα =  8.5e-18 ΔN_e  +  6.0e-18 ΔN_h          [cm^-1]
```

**Updated (Nedeljkovic 2011):**
```
Δn = -5.4e-22 ΔN_e^1.011  -  1.53e-18 ΔN_h^0.838
```

**Key insight:** Holes give larger Δn per carrier than electrons. Electrons give larger Δα. P-type regions preferred for phase shifters.

---

## 2. Carrier Depletion PN Junction Phase Shifter

**Physics:** Reverse bias widens depletion region, removing carriers from waveguide core, shifting index via plasma dispersion.

### Phase shift:
```
Δφ = (4π/λ) · Γ · Δn_eff · L
```

### VπL (modulation efficiency):
| Configuration | VπL |
|---|---|
| Standard lateral PN junction | 1.8-3.1 V·cm |
| Interleaved PN (200 nm junction) | ~0.78 V·cm at 1 V |
| Vertical PN SiGe (strained) | 0.31 V·cm at -2 V |

**Figure of merit:** α·VπL -- product of loss and efficiency. Best reported: 6.7 V·dB.

**Tradeoff:** Higher doping reduces VπL but increases free-carrier absorption. Phase shifter length typically 1-5 mm.

---

## 3. Mach-Zehnder Modulator (MZM)

### Push-pull operation
- Two PN junctions in series, back-to-back
- 50% capacitance reduction (RC benefit)
- Reduces chirp
- Single-drive push-pull TWE demonstrated: VπL = 1.35 V·cm, 35 GHz EO bandwidth

### Traveling-wave electrode design
Three-way tradeoff: **Z_0 = 50 Ω** vs. **RF loss** vs. **velocity matching**

### Bandwidth formula (lossless, matched):
```
f_3dB = 0.18 / [(n_eff - n_0) · L]
```

### State-of-the-art bandwidth:
- Standard TWE MZM: 30-50 GHz
- Optimized TWE: 47-60 GHz
- Segmented TWE: 67 GHz
- Slow-light MZM: 110+ GHz (124 μm phase shifter)

### Typical insertion loss: 3-6 dB on-chip
### Typical drive voltage: 2-5 V_pp

---

## 4. Microring Modulator (MRM)

### Advantage over MZM:
- 100-1000x smaller footprint (10 μm radius vs. mm-scale arms)
- Lower drive voltage (0.6-1 V_pp vs. 2-5 V_pp)
- Excellent WDM scalability

### Disadvantage vs. MZM:
- Temperature sensitive: resonance drifts ~0.1 nm/K
- Requires active thermal stabilization: 4-14 mW/nm tuning power
- Narrow optical bandwidth (~0.5 nm)
- Nonlinear transfer function (Lorentzian)
- Fabrication-sensitive (thickness, width variations)

### Bandwidth:
- Standard Si MRM: 30-110 GHz (limited by photon lifetime)
- Advanced (plasmonic): 176 GHz
- 240 Gb/s demonstrated with PAM-4

### When to use which:
| Scenario | Choice |
|---|---|
| Ultra-dense WDM, controlled environment | MRM |
| Uncooled, high linearity, simple drive | MZM |

---

## 5. Thermo-Optic Phase Shifter

### Physics:
```
dn/dT = 1.86e-4 K^-1  (Si at 1550 nm)
Δφ = (2π/λ) · (dn/dT) · ΔT · L · Γ
```

### Heater performance:
| Heater type | Pπ (mW) | τ (μs) |
|---|---|---|
| TiN metal | 21.4 | 5.6 |
| N++ doped Si | 22.8 | 2.2 |
| Compact SOI strip | 13.2 | -- |
| SiN + trench undercut | 15 (RT) / 12.5 (cryo) | -- |
| ITO/Si hybrid | 10 | few |

**Typical Pπ range: 10-50 mW**
**Typical switching time: 1-20 μs**

### Thermal crosstalk:
- Compact design: ΔT < 0.1°C at 10 μm
- Deep trenches reduce crosstalk to 0.045 π rad/mm
- Trenches + undercut reduce to 0.006 π rad/mm (penalty: bandwidth drops to ~0.9 kHz)
- Doped Si heaters are most practical on standard SOI (2.5x faster than TiN at similar Pπ)

---

## 6. Optical Switches

### MZI-based 2x2 switch benchmarks:
- **Crosstalk:** < -35 dB (state-of-the-art)
- **Insertion loss:** 0.7-1.3 dB
- **Pπ:** 7.6-8 mW (thermo-optic)
- **Optical bandwidth:** 40 nm (C-band)
- **Switching time:** < 20 μs (TO); ~300 ns (EO)

### TO vs. EO switch tradeoffs:
| Metric | TO | EO |
|---|---|---|
| Speed | μs-ms | ns |
| Loss | Lower | Higher |
| Crosstalk | Better | Worse |
| Largest fabric | 64x64 | 32x32 |

---

## 7. Variable Optical Attenuator (VOA)

### Carrier injection (PIN diode) VOA:
- **Mechanism:** Forward bias injects carriers, increasing Δα via plasma dispersion
- **Attenuation range:** 15-20 dB (PIN only); >40 dB (resonance-assisted)
- **Response time:** 30-50 ns (carrier-lifetime limited; 5.7 ns best)
- **Speed:** ~30-50 MHz; up to 2 GHz with SiGe + pre-emphasis
- **Power @ 20 dB:** ~76-424 mW
- SiGe PIN: 1.5x better efficiency than pure Si

### Thermo-optic VOA:
- MZI or TMI structure
- Slower (100-200 μs), broadband
- 18.64 dB @ 8.72 mW (polymer/silica hybrid)

---

## Quick Reference: Key Numbers

| Device | Hit Metric | Typical Value | Best Reported |
|---|---|---|---|
| PN phase shifter | VπL | 1.8-3.1 V·cm | 0.31 V·cm (SiGe) |
| PN phase shifter | FOM (αVπL) | -- | 6.7 V·dB |
| MZM | Insertion loss | 3-6 dB | < 3 dB |
| MZM | EO bandwidth | 30-50 GHz | 110+ GHz |
| MZM | Drive voltage | 2-5 V_pp | < 1 V |
| MRM | Radius | 5-10 μm | -- |
| MRM | EO bandwidth | 30-110 GHz | 176 GHz |
| MRM | Resonance drift | 0.1 nm/K | -- |
| TO phase shifter | Pπ | 10-50 mW | 10 mW |
| TO phase shifter | Speed | 1-20 μs | 2.2 μs |
| TO 2x2 switch | Crosstalk | -30 dB | -35 dB |
| TO 2x2 switch | IL | 0.7-1.3 dB | 0.7 dB |
| PIN VOA | Attenuation range | 15-20 dB | 40 dB (hybrid) |
| PIN VOA | Response time | 30-50 ns | 5.7 ns |

---

## Source URLs

- https://www.cambridge.org/core/books/abs/silicon-photonics-design/modulators/DE2A36CC01D0E3C4576F4B91935AB05B
- https://pubmed.ncbi.nlm.nih.gov/31052905/
- https://doaj.org/article/4c7b3a7275f64535835009bad4db0a45
- https://preprints.opticaopen.org/articles/preprint/Single-stage_2_2_silicon_thermo-optic_switch_with_crosstalk_35_dB_over_40_nm_and_P_8_mW/25676397
- https://opg.optica.org/ol/abstract.cfm?uri=ol-50-1-101
- https://opg.optica.org/oe/fulltext.cfm?uri=oe-23-9-12354
- https://pubmed.ncbi.nlm.nih.gov/25969320/
- https://network.nvidia.com/pdf/whitepapers/KOTURA_Fundamentals_of_Silicon_Photonic_Devices.pdf
