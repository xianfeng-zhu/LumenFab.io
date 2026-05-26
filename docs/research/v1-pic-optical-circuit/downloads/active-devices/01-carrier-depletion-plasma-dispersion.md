# Silicon Photonics Carrier Depletion: Plasma Dispersion Effect & PN Junction Phase Shifter

## Source References
- Soref & Bennett, "Electrooptical effects in silicon," IEEE J. Quantum Electron. 23(1), 123-129 (1987)
- Chrostowski & Hochberg, "Silicon Photonics Design" (Cambridge, 2015), Chapter 6 -- Modulators
- Nedeljkovic, Soref & Mashanovich, "Free-carrier electro-refraction and electroabsorption modulation predictions," IEEE Photon. J. 3(6), 1171-1180 (2011)
- Baehr-Jones et al., "Ultralow drive voltage silicon traveling-wave modulator," Opt. Express 20(11), 12014-12020 (2012)
- Ogawa et al., "Silicon-based phase shifters for high figure of merit in optical modulation," SPIE OPTO (2016)
- Kim, Takenaka & Takagi, "Numerical Analysis of Carrier-Depletion Strained SiGe Optical Modulators With Vertical p-n Junction," IEEE JQE (2015)
- https://www.cambridge.org/core/books/abs/silicon-photonics-design/modulators/DE2A36CC01D0E3C4576F4B91935AB05B

## Plasma Dispersion Effect (Soref-Bennett, 1987)

Fundamental mechanism for refractive index modulation in silicon. Free carrier concentration changes alter both real refractive index and absorption.

### Empirical equations at 1550 nm:

**Refractive index change:**
```
Δn = -8.8 × 10^(-22) ΔN_e - 8.5 × 10^(-18) (ΔN_h)^(0.8)
```

**Absorption change:**
```
Δα = 8.5 × 10^(-18) ΔN_e + 6 × 10^(-18) ΔN_h  [cm^(-1)]
```

where:
- ΔN_e = change in electron concentration (cm^(-3))
- ΔN_h = change in hole concentration (cm^(-3))

### Updated formulation (Nedeljkovic et al., 2011):

```
Δn = -5.4 × 10^(-22) (ΔN_e)^(1.011) - 1.53 × 10^(-18) (ΔN_h)^(0.838)
```

### Key physical observations:
- Holes produce a **larger index shift per carrier** than electrons
- Electrons produce **more absorption per carrier** than holes
- Design implication: hole-rich (p-type) regions are preferred for phase modulation to minimize optical loss

### Equations at 1310 nm:
```
Δn = -6.2 × 10^(-22) ΔN_e - 6 × 10^(-18) (ΔN_h)^(0.8)
Δα = 6 × 10^(-18) ΔN_e + 4 × 10^(-18) ΔN_h  [cm^(-1)]
```

## PN Junction as Depletion-Mode Phase Shifter

### Operating principle
A reverse-biased PN junction is formed across the silicon waveguide core. Under reverse bias:
1. Carriers are swept out of the waveguide core
2. Depletion region width increases
3. Net carrier concentration in the waveguide decreases
4. Refractive index increases via plasma dispersion effect (Δn is negative for added carriers; removing carriers gives positive Δn)
5. Optical mode experiences a phase shift proportional to the index change

### Phase shift per unit length:
```
Δφ = (4π / λ) · Γ · Δn_eff · L
```

where Γ is the confinement factor of the optical mode in the depletion region.

### Modulation efficiency VπL
VπL = product of voltage required for π phase shift and phase shifter length.

| Configuration | VπL | Reference |
|---|---|---|
| Standard lateral PN junction (3 V) | 1.8-3.1 V·cm | Typical commercial |
| Vertical PN junction Si(0.7)Ge(0.3) (strain-enhanced) | 0.31 V·cm at -2 V | Kim, Takenaka, Takagi (2015) |
| Interleaved PN junction (optimized 200 nm junction width) | ~0.78 V·cm at 1 V reverse bias | Literature |
| Ultra-responsive design (incomplete ionization model) | 0.31 V·cm (with 20 dB/cm loss) | Literature |

### Figure of Merit: αVπL
Product of optical loss and modulation efficiency. Lower is better.
- State-of-the-art FOM: as low as 6.7 V·dB

### Design tradeoffs
- **Doping concentration**: Higher doping reduces VπL but increases free-carrier absorption loss
- **Junction width**: Shorter (~200 nm) with higher doping reduces VπL but increases loss
- **Lateral vs. vertical junctions**: Lateral is more common, compatible with compensation doping to reduce loss. Vertical offers higher confinement but less compatible with compensation doping
- **Typical waveguide dimensions**: ~500 nm wide, ~220 nm thick (SOI)
- **Typical phase shifter length**: 1-5 mm for π phase shift at reasonable drive voltage (2-5 V)

## Carrier Injection (PIN Diode) Alternative

- Uses forward-biased PIN diode
- Injects carriers into waveguide (rather than depleting them)
- Larger index change per unit length (shorter devices possible)
- Slower switching speed (carrier lifetime limited, ~ns)
- Higher optical loss from injected carriers
- Typically used for VOAs and optical switches, not high-speed modulation
