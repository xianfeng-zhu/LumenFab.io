# InP/InGaAsP DFB Laser Temperature Sensitivity — Professional Sources

## 1. Bandgap Temperature Dependence (Varshni)

**Varshni equation:** E_g(T) = E_g(0) − αT²/(T + β)

| Material | E_g(0) eV | α ×10⁻⁴ eV/K | β K | dE_g/dT @300K meV/K |
|---|---|---|---|---|
| InP | 1.421–1.425 | 4.5–4.9 | 327 | ~−0.36 |
| InGaAsP/InP | comp-dependent | 4.9 | 327 | ~−0.33 to −0.40 |
| InGaAs (on InP) | 0.803 | 4.0 | 226 | — |
| InAlAs (on InP) | 1.541 | 4.7 | 149 | — |

Key: For InGaAsP/InP, α=4.9×10⁻⁴ eV/K and β=327 K are composition-independent (Adachi).

Sources:
- Varshni, Physica 34, 149 (1967)
- Ioffe NSM: https://www.ioffe.ru/SVA/NSM/Semicond/InP/bandstr.html
- Adachi, Physical Properties of III-V Semiconductor Compounds (Wiley, 1992)
- Gaskill et al., Appl. Phys. Lett. 56, 1269 (1990)

## 2. Refractive Index Thermal Drift → Wavelength Shift

**Thermo-optic coefficient:** dn/dT ≈ 2×10⁻⁴ K⁻¹ for InP; ~3.0×10⁻⁴ K⁻¹ for GaInAsP at 1.6 μm (Stubkjaer/Suematsu 1980).

**Thermal expansion:** α_InP ≈ 4.6×10⁻⁶ K⁻¹ (only ~5% contribution).

**Bragg wavelength drift decomposition:**
dλ_B/dT = λ_B × (1/n_eff × dn_eff/dT + 1/Λ × dΛ/dT)
= 1550 nm × (9.4×10⁻⁵ + 4.6×10⁻⁶) ≈ 0.15 nm/K (calculated) ≈ 0.1 nm/K (measured, Sakai 1982)

**95% from thermo-optic effect, 5% from thermal expansion.**

**Gain peak shifts ~0.5 nm/K** (5× faster than Bragg mode) → gain-cavity detuning with temperature.

Sources:
- Stubkjaer et al., Electron. Lett. 16(23), 895 (1980): https://doi.org/10.1049/el:19800638
- Sakai et al., IEEE JQE 18(8), 1272 (1982): https://ieeexplore.ieee.org/document/1071597
- Akiba et al., Jpn. J. Appl. Phys. 21, 1736 (1982): https://doi.org/10.1143/JJAP.21.1736

## 3. Carrier Leakage Mechanisms

### Thermionic Emission
- Electrons with thermal energy exceeding heterobarrier escape QW.
- Electron leakage dominates (lower effective mass, higher mobility).
- Arrhenius-type exponential temperature dependence.

### Conduction Band Offset: InAlGaAs vs InGaAsP
| Property | InGaAsP/InP | InAlGaAs/InP |
|---|---|---|
| ΔE_c / ΔE_g | 36–40% | ~70–72% |
| I_th @85°C (4-QW, 1.55 μm) | 87.7 mA | 37.4 mA (2.3× lower) |
| Auger coeff @85°C | 6.5×10⁻²⁹ | 5.0×10⁻²⁹ |

The ~72% conduction band offset in InAlGaAs directly suppresses electron leakage — this is the central reason InAlGaAs is preferred for uncooled operation.

Sources:
- Forrest et al., Appl. Phys. Lett. 45, 1199 (1984): ΔE_c = 0.39 ΔE_g for InGaAsP/InP
- Evans et al., SPIE Vol. 3284 (1998): InAlGaAs vs InGaAsP comparison
- Irikawa et al., Jpn. J. Appl. Phys. 39, 1730 (2000): leakage + Auger theory

## 4. Characteristic Temperatures T₀ and T₁

**T₀** (threshold): J_th(T) ∝ exp(T/T₀)

| Material | T₀ (K) |
|---|---|
| InGaAsP/InP DH, 1.3–1.55 μm | 50–65 |
| InGaAsP/InP MQW | 55–80 |
| InAlGaAs/InP MQW | 70–80 (up to 143 optimized) |
| InAlGaAs/InP 1.55 μm theoretical | ~97 |
| T₀ if Auger + leakage suppressed | >150 |

**T₁** (slope efficiency): η_slope(T) ∝ exp(−T/T₁)
InGaAsP/InP typical T₁ ~80–120 K.

Sources:
- Burkhard & Kuphal, Jpn. J. Appl. Phys. 22, L721 (1983)
- Al-Muhanna et al., IEEE JSTQE 9, 582 (2003): https://doi.org/10.1109/JSTQE.2003.818859

## 5. Non-Radiative Recombination

### Auger Recombination
- **CHCC**: e-h recombination → second e excited. ∝ n²p. E_a ~0.45–0.55 eV for 1.55 μm.
- **CHSH**: e-h recombination → split-off hole excited. ∝ p²n. E_a ~60–120 meV for 1.55 μm (E_g ≈ Δ makes this dominant).
- C_Auger = C₀ exp(−E_a/kT).
- At 300 K, Auger accounts for up to 94% of threshold current in 1.55 μm InGaAsP.
- Larger at 1.55 μm than 1.3 μm (smaller E_g → lower E_a threshold).
- T₀ drops from ~100–110 K (radiative-only) to ~61 K (1.55 μm with Auger).

Sources:
- Dutta & Nelson, Appl. Phys. Lett. 38, 407 (1981): https://pubs.aip.org/aip/apl/article-abstract/38/6/407/528988/
- Sugimura, IEEE JQE 19, 932 (1983): https://ieeexplore.ieee.org/document/1071956
- Henry et al., IEEE JQE 19, 947 (1983): IVBA: https://ieeexplore.ieee.org/document/1071954

### IVBA (Intervalence Band Absorption)
- α_IVBA = k_p · p. At 1.3 μm: k_p ≈ 14×10⁻¹⁸ cm²; at 1.5 μm: k_p ≈ 20×10⁻¹⁸ cm².
- Internal loss α_i doubles from ~15 cm⁻¹ @20°C to ~22 cm⁻¹ @80°C.

### SRH (defect-mediated)
- Via deep-level traps; weak T-dependence via v_th ∝ √T.
- Higher EPD → more N_t → shorter SRH lifetime.
- Minor contributor at threshold in high-quality MOCVD, but critical for aging (REDR).

### COD (Catastrophic Optical Damage)
- InP SRV ~10³–10⁴ cm/s vs GaAs ~4×10⁵ cm/s → InP much more COD-resistant.
- InGaAsP/InP no facet meltdown observed (Diehl).

## 6. Self-Heating & Thermal Resistance

**Feedback loop:** I → I²R heat → T_j ↑ → I_th ↑, η ↓ → more I needed → more heat.

**R_th values:**
- Ridge DFB, epi-down, good heatsink: 30–60 K/W
- Heterogeneous integration (Si substrate, BCB bond): 115–360 K/W (Abdi 2025)

**T_j = T_case + R_th × P_diss**

Sources:
- Abdi et al., J. Phys. Photonics 7 (2025): https://beta.iopscience.iop.org/article/10.1088/2515-7647/adaf63
- Jacquet et al. 2011: https://supelec.halpreprod.archives-ouvertes.fr/hal-00660308v1

## 7. TEC & APC Control

### TEC
- Peltier element inside butterfly package, thermistor feedback, PID loop.
- Stability: ±0.01–0.03°C → ±0.001–0.003 nm wavelength.
- Power: 2–5 W steady-state.
- Dual-TEC: inner fine + outer coarse → ±0.001 nm stability.

### APC (Automatic Power Control)
- Back-facet monitor PD → I_PD → error amp → adjust bias.
- Stability: ±0.1–0.5 dB over life.
- Does NOT correct wavelength drift (TEC's job).
- Risk: aging → higher bias → more heat → faster aging (thermal runaway).

## 8. CPO System-Level Thermal Constraints

- dλ/dT = 0.1 nm/°C × 60°C range = 6 nm drift.
- CWDM4: ±6.5 nm tolerance — barely fits.
- LAN-WDM (4.5 nm spacing): impossible without TEC.
- DWDM (0.8 nm): mandatory sub-0.1°C control.

**CPO thermal architecture gap:**
- ASIC dissipates ~835 W @80–105°C case temp.
- Laser must stay below 70–85°C.
- 15–35°C temperature difference must be maintained across mm-scale distance.

**Mitigations:** ELS/ELSFP (move laser out), dual-TEC, thermal decoupling, predictive scheduling.

Sources:
- Yang et al., Adv. Photon. Nexus 2026: https://m.researching.cn/articles/OJdfcef54819a8d106
- Lumentum ELSFP: https://www.lumentum.com/products/external-laser-source-els-module-ultra-high-power-laser
- IEEE 802.3cu CWDM4 wavelength tolerance
