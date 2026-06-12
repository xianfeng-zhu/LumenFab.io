# Signal Integrity, Power Integrity, and Thermal Management in Advanced Packaging

> Research notes compiled June 2026. Part of the LumenFab.io advanced packaging research series.

---

## Table of Contents

1. [Signal Integrity in Packaging](#1-signal-integrity-in-packaging)
   - 1.1 Channel Loss Budget for Advanced Packages
   - 1.2 Impedance Control in Substrate Routing
   - 1.3 Via Design Impact on Signal Integrity
   - 1.4 Differential Pair Routing in Organic Substrates
   - 1.5 Interposer SI Comparison: Silicon vs. Organic vs. Glass
   - 1.6 High-Speed Signaling at 112G / 224G PAM4
   - 1.7 Die-to-Die Interface SI (UCIe, BoW, HBM)
2. [Power Integrity in Packaging](#2-power-integrity-in-packaging)
   - 2.1 Power Distribution Network (PDN) Design
   - 2.2 Decoupling Capacitor Integration
   - 2.3 IR Drop and Voltage Ripple
   - 2.4 Deep Trench Capacitors and Silicon Capacitors
   - 2.5 Power Delivery for >1000W AI Chips
3. [Thermal Management](#3-thermal-management)
   - 3.1 Junction-to-Case Thermal Resistance (Theta-JC)
   - 3.2 Thermal Interface Materials (TIM1, TIM2)
   - 3.3 Liquid Cooling Integration
   - 3.4 Thermal Cross-Talk in Multi-Die Packages
   - 3.5 Glass Core Thermal Challenges
4. [References and Resources](#4-references-and-resources)

---

## 1. Signal Integrity in Packaging

### 1.1 Channel Loss Budget for Advanced Packages

For **224Gbps-PAM4** systems, the industry (led by Intel and IEEE 802.3 working groups) has converged on an **end-to-end (bump-to-bump) link budget of <=40 dB at the Nyquist frequency (53 GHz)**.

| Component | Loss Target at 53 GHz | Key Enablers |
|---|---|---|
| Package Trace (TX+RX) | ~0.123 dB/mm, <=60mm total | Low-loss material, smooth Cu, skip-layer routing |
| Package Vertical (BGA+via) | <=1 dB | <=0.8mm ball pitch, <=1050 um core, <=22 layers |
| PCB Trace (global routing) | ~0.95 dB/inch | Ultra-low-loss material (Df <=0.002), HVLP Cu |
| PCB Vertical (via) | <=1 dB | Via length <=65 mils, via stub <6 mils |
| Cable + 2x Connector | ~10-15 dB | 1m cable, optimized connector mating |

**Key insights:**
- At 224G, channels tend to be **return-loss dominated** rather than insertion-loss dominated.
- Desired S-parameter targets: sub -10 dB return loss at all frequencies up to at least 56 GHz.
- The three major bandwidth-limiting factors: (1) excitation of non-TEM modes (determined by Dk and geometry, typically begins 50-100 GHz), (2) impedance mismatch from copper roughness (creates inductive impedance increasing with frequency), and (3) excessive group delay dispersion (Dk variance as function of frequency).

*Sources: Intel DesignCon 2022 paper, Altium (Zachariah Peterson), IEEE 802.3df/dj presentations*

---

### 1.2 Impedance Control in Substrate Routing

**BGA Ball Pitch as Critical Constraint:**
- **0.8mm pitch** is the minimum required for 224G to push TEM mode cutoff above 56 GHz. At 0.8mm, TEM cutoff is ~59-72 GHz (depending on material Dk).
- **0.5mm pitch** is preferred for maximum margin but introduces package reliability concerns.
- **1.0mm pitch** is insufficient for 224G -- TEM cutoff is ~58 GHz, leaving no margin.

**Material Selection for Substrates:**
| Category | Df (10 GHz) | Application |
|---|---|---|
| Ultra-low-loss (ULL) | <=0.0020 | Long-reach 224G SerDes |
| Very-low-loss (VLL) | 0.0021-0.0040 | 112G, PCIe Gen6 |
| Low/mid-loss | 0.0050-0.0100 | Power/control layers |

**Copper Roughness:**
- At 224G (56 GHz bandwidth), copper surface roughness is the **dominant loss mechanism** on low-loss laminates.
- **HVLP (hyper very low profile)** and **VLP2** copper foils are essential.
- Roughness creates inductive impedance mismatch that increases with frequency.

**Key techniques for impedance-controlled substrate routing:**
- **Skip-layer routing**: differential coplanar stripline with via fences for reduced loss and crosstalk.
- **Interleaved ground vias**: to prevent via-to-via crosstalk.
- **Hybrid stack-ups**: reserve ULL materials for SerDes layers, use modified FR4 elsewhere.
- **Spread-glass laminates** (1067, 1078): minimize glass-weave skew at 56 GHz.

---

### 1.3 Via Design Impact on Signal Integrity

**Through-Hole Vias:**
- Via stubs act as antennas, causing reflections and resonances at high frequencies.
- At speeds above 5 Gbps, stubs begin to have noticeable impact on insertion and return loss.
- Parasitic effects: larger via barrels cause significant capacitance/inductance, leading to impedance discontinuities (typically 25-35 ohms vs. desired 50 ohms).
- Plane voids: through-hole vias create voids in power/ground planes under BGAs, increasing inductance and resistance.

**Microvias (laser-drilled, <150 um diameter, <0.25 mm depth):**
- Lower parasitic inductance and capacitance compared to through-hole vias.
- No stubs -- eliminates resonant stub effects, reducing bit error rates.
- Better impedance control, especially in HDI designs.
- Essential for fine-pitch BGAs and high-density interconnect designs.

**Blind and Buried Vias:**
- Completely eliminate through-hole via stubs without requiring back-drilling.
- Reduced plane voids minimize disruption to power/ground planes.
- Free up routing space on outer layers.

**Back-Drilling:**
- Removes unused stub portion mechanically; lower-cost alternative to blind/buried vias.
- Particularly important for 224G: via stub must be <6 mils.

**Optimization strategies:**
- Minimize via count on high-speed signal paths.
- Use microvias for lower parasitic inductance/capacitance.
- Use ground vias around signal vias (coaxial-like structures) to provide return paths.
- Control aspect ratios (typically 10:1 or less).
- Stitching vias around differential pairs guarantee TEM mode propagation to progressively higher frequencies.

---

### 1.4 Differential Pair Routing in Organic Substrates

**Key Parameters Affecting Differential Impedance:**
- Trace width (W) and intra-pair spacing (S)
- Height to reference plane (H) and dielectric constant (Er)
- Copper thickness

**Typical Impedance Targets by Standard:**
| Standard | Differential Impedance |
|---|---|
| USB | 90 ohms |
| HDMI | 100 ohms |
| PCIe Gen 4/5 | 85 ohms |
| LVDS | 100 ohms |

**Organic Substrate Challenges:**
- **Glass-weave effects** in standard FR-4 can add 10-100 ps of skew at 10 Gbps+.
- **CTE mismatch** (17-50 ppm/C for organics vs. ~3 ppm/C for Si) causes package warpage, solder joint stress.
- **Dielectric loss** and rough surface finishes degrade SI at high data rates.
- **Moisture absorption** further degrades electrical performance.

**Fine-Line Routing (SAP Process):**
- **"Johnny Cash Principle"**: As long as the differential pair's (width, gap) combination stays on a constant-impedance curve, impedance remains constant even as geometry changes through constrained areas.
- **Ultra-fine lines** (6 um width, 6 um gap) enabled by Semi-Additive Process (SAP) allow fitting 4 routing channels between 0.5 mm pitch BGA pads.
- **Span** (outside-edge to outside-edge distance) introduced as a key metric for routing through dense via fields.

---

### 1.5 Signal Integrity Comparison: Silicon Interposer vs. Organic Interposer vs. Glass Core

| Parameter | Silicon Interposer | Organic Interposer | Glass Interposer |
|---|---|---|---|
| **Dielectric Constant (Dk)** | ~11.9 (worst) | ~3.1 (best) | ~4-6 (good) |
| **Loss Tangent (Df)** | Higher (conductive Si) | Low | Very low |
| **Routing Density (L/S)** | <1 um (best) | 2-4 um (limited) | Potentially fine (emerging) |
| **CTE (ppm/C)** | ~3 (matches Si well) | 17-50 (worst mismatch) | 3-8 (engineerable) |
| **Thermal Conductivity** | ~150 W/mK (excellent) | ~0.3 W/mK (poor) | ~1-2 W/mK (poor) |
| **High-Freq SI** | Poor (high Dk, lossy) | Good (low Dk) | Very good (low loss, stable) |
| **Cost** | High | Low | Low (potential) |
| **Maturity** | Mature (production) | Mature (production) | Emerging (R&D) |

**Key takeaway:** Organic interposers have the best dielectric properties for high-speed signals but suffer from CTE mismatch and lower routing density. Silicon interposers offer the best routing density and thermal management but have poor dielectric properties for high-frequency signals. **Glass interposers aim to combine the best of both** -- low loss, engineerable CTE, dimensional stability -- but manufacturing is still maturing.

*Sources: KAIST/KAIS (Signal Integrity Analysis of Silicon/Glass/Organic Interposers), PatSnap HBM4 Interposer Materials report, DNN Technology Advanced Packaging Guide*

---

### 1.6 High-Speed Signaling: 112G and 224G PAM4 Packaging Requirements

**Package Trace Loss Trends (112G to 224G):**
- 112G package loss: ~0.44 dB/mm at 26.6 GHz
- 224G package loss: ~0.123 dB/mm at 53 GHz (requires improved materials)

**Critical PCB/Package Design Rules for 224G:**
1. Via stub must be <6 mils; back-drilling with tight tolerances required
2. Via length should be <65 mils
3. BGA fanout requires HDI with microvias for 0.5mm-0.8mm pitch components
4. Hybrid stack-ups: reserve ULL materials for SerDes layers, use modified FR4 elsewhere
5. Spread-glass laminates to minimize glass-weave skew at 56 GHz

**Co-Packaged Solutions (Molex Impress):**
- Moves high-speed connection point directly onto the ASIC substrate.
- Bypasses PCB routing loss using compression-based connectors on the package.
- Reduces overall channel length in FR-4, shifting loss burden away from the board.
- Validated for 224G, development underway for 336G and 448G.

**Forward Look -- 448G:**
- Expected to use **PAM6** (86.7 GHz bandwidth) or **PAM8** (74.7 GHz bandwidth) modulation.
- BGA pitch becomes an even more severe constraint.
- Industry may need to move to substrate-like PCBs (SLP) or in-package connectors to bypass traditional PCB-Package interfaces.

---

### 1.7 Die-to-Die Interface SI (UCIe, BoW, HBM)

#### UCIe (Universal Chiplet Interconnect Express)

**UCIe Standard (Advanced Packaging):**
- Standard die-to-die interface for chiplets on interposer/bridge substrates.
- UCIe-3D extends to face-to-face hybrid bonding with bump pitch <=10 um.
- Data rates up to 32 Gbps per wire in advanced packaging configurations.
- BER < 1E-27, 0 FIT reliability target.
- NRZ signaling deemed optimal for power-limited low-loss systems.
- Power efficiency target: <0.05 pJ/b at 9 um bump pitch, >0.01 pJ/b at 1 um.

**UCIe SI Challenges:**
- Requires careful crosstalk mitigation and line width/spacing optimization.
- Yield-aware interposer design methodology using Gaussian Process Regression.

#### BoW (Bunch of Wires)

| Parameter | BoW-32 | BoW-64 | BoW-128 | BoW-256 |
|---|---|---|---|---|
| Data Rate | 2 Gbps/wire | 4 Gbps/wire | 8 Gbps/wire | 16 Gbps/wire |
| Max Capacitance | 800 fF | 800 fF | 400 fF | 200 fF |
| RX BW | >=0.667/Tbit | >=0.667/Tbit | >=0.667/Tbit | >=0.667/Tbit |

**BoW SI findings (ECTC 2023):**
- Custom termination optimization + PDN decoupling improved SNR by ~12 dB.
- Power dissipation: ~0.14 pJ/bit at 8 Gbps, ~0.09 pJ/bit at 16 Gbps.
- Adding 4 power planes improved SNR by 1-3 dB vs. no power planes.
- 14-24 dB SNR achievable for 16 Gbps data transfer.
- PDN non-idealities doubled decoupling capacitor requirements (600 pF to 1.2 nF).

#### HBM Interface SI

**HBM3e / HBM4 Signal Integrity:**
| Spec | HBM3e | HBM4 |
|---|---|---|
| Interface width | 1024-bit | 2048-bit |
| Pin speeds | 9.2-12.4 Gbps | 6.4-12.8 Gbps |
| Bandwidth per stack | >1.2 TB/s | >2.0 TB/s (up to 3.3 TB/s) |
| Capacity per stack | Up to 36 GB | Up to 64 GB |

**Critical SI challenges for HBM4:**
- 2048-bit width at 12.8 Gbps creates dense I/O routing and crosstalk challenges.
- Novel signal-ground routing pattern using ground grids and stitching vias: ~18 dB crosstalk reduction.
- A 4-layer signal configuration with optimized trace width, ground trace width, and spacing is needed.
- Jitter decomposition identifies crosstalk as the dominant mechanism affecting eye closure.
- Equalization (CTLE + DFE) is required to achieve 12.8 Gbps.

**Packaging technologies for HBM:**
- **TSMC CoWoS** (Chip-on-Wafer-on-Substrate) -- industry leading, used for NVIDIA H100/B200.
- **Intel EMIB** (Embedded Multi-die Interconnect Bridge) -- alternative for HBM integration.

*Sources: UCIe Express specification, BoW PHY Specification v2.0 (OCP), Keysight whitepaper, DesignCon 2025 Alphawave Semi paper, Siemens EDA HBM design guide*

---

## 2. Power Integrity in Packaging

### 2.1 Power Distribution Network (PDN) Design

**Fundamental PDN Goal:** Maintain supply voltage within tolerance (typically +/-3-5%) across all operating conditions, for all dies in the package, across the full frequency range of transient current demands.

**Key PDN Metrics:**
- **Target impedance**: Z_target = (Vdd * tolerance) / I_transient
- For a 1000A AI chip at 0.7V with 5% tolerance: Z_target = (0.7 * 0.05) / 1000 = 35 micro-ohms
- This extremely low impedance must be maintained from DC to GHz frequencies.

**PDN Hierarchy (in order of decreasing distance from transistors):**
1. On-die capacitance (transistor gate, MIM, deep trench)
2. On-package decoupling (DTCs, Si caps, MLCCs)
3. On-board decoupling (bulk capacitors, MLCCs)
4. Voltage regulator module (VRM)

**PDN Impedance Profile:**
- Low frequencies (<1 MHz): dominated by VRM response and bulk capacitors
- Mid frequencies (1-100 MHz): dominated by board-level MLCCs
- High frequencies (>100 MHz): dominated by on-package and on-die capacitance
- The anti-resonance peak where these domains meet is the critical design challenge.

*Source: Murata SPEAKS webinar on HPC power solutions, IEEE papers on PDN optimization*

---

### 2.2 Decoupling Capacitor Integration

**Decoupling Capacitor Hierarchy:**

| Type | Location | Capacitance Density | Effective Frequency | ESL |
|---|---|---|---|---|
| Gate capacitance | On-die | High (device-level) | >1 GHz | <1 pH |
| MIM capacitor | On-die (BEOL) | ~86 nF/mm2 | 100 MHz - 1 GHz | ~1 pH |
| Deep Trench (DTC) | On-die or interposer | Up to 1200 nF/mm2 | 10 MHz - 1 GHz | <10 pH |
| Silicon capacitor | On-package | 100-500 nF/mm2 | 1-100 MHz | 5-50 pH |
| MLCC | On-package/on-board | 10-100 nF/mm2 | <10 MHz | 100-500 pH |
| Bulk capacitor | On-board | High (uF-mF) | <1 MHz | >1 nH |

**Key Integration Insights:**
- On-package decoupling (OPD) techniques can reduce voltage droop by **5 mV** at the package C4 bump compared to traditional MLCCs alone.
- Adding 4 power planes in a BoW interposer improved SNR by 1-3 dB.
- PDN non-idealities can double decoupling capacitor requirements (e.g., 600 pF to 1.2 nF in BoW designs).

---

### 2.3 IR Drop and Voltage Ripple in Large Packages

**IR Drop Challenges:**
- For 1000A+ AI chips at ~0.7V, **every milliohm matters**: at 1400A, even 0.1 mOhm of path resistance causes ~200W of loss.
- Traditional lateral power delivery (routing amps across cm of package/PCB traces) creates unacceptable losses and heat.
- **BGA/solder ball bottleneck**: current density limits due to electromigration and thermal-mechanical stress.

**Scaling Problem:**
- A k-tier 3D stack draws ~k times the current of a 2D chip in the same footprint, but power pins don't scale.
- TSVs introduce ~1 Ohm per stack, worsening IR drop significantly.
- Bottom tier must carry cumulative current for the entire stack.

**Temperature-IR Drop Coupling:**
- Localized hotspots increase resistance (copper TCR ~0.39%/C), worsening IR drop.
- Higher temperature increases leakage current, increasing total power draw.
- This creates a positive feedback loop that must be broken by thermal-PI co-design.

---

### 2.4 Deep Trench Capacitor (DTC) and Silicon Capacitor Integration

**Deep Trench Capacitor Advantages:**
- **Very high capacitance density**: up to **1200 nF/mm2** (vs. ~86 nF/mm2 for MIM capacitors).
- **Low ESL and low ESR** -- effective for decoupling above 10 MHz, targeting hundreds of MHz switching noise.
- Integration directly into interposers, bridges, or die backside without consuming active area.

**Integration Approaches:**

| Approach | Description | Key Benefit |
|---|---|---|
| DTC in Bridge Substrate | Capacitors embedded in EMIB silicon bridge | Shortest decoupling path for die-to-die; 400 nF/mm2 |
| Backside DTC in 3D-HB | DTCs in wafer backside for hybrid bonding | No active area penalty; 1200 nF/mm2; 600 mOhm PDN impedance |
| DTC in Memory Die | Trench capacitors in memory die substrate | Processor-near-memory decoupling |
| DTC on Si Interposer | Capacitors on TSV-based interposers | Improved PI for 2.5D/3D chiplets |

**Industry Activity:**
- **TSMC CoWoS** with DTC integration
- **Samsung** Integrated Stack Capacitor (ISC)
- **Murata** DTC die embedded in interposers
- Multiple 2024-2026 ECTC and IEEE papers on DTC optimization

*Sources: ScienceDirect (3D-IC multi-wafer hybrid bonding DTC paper, 2026), IEEE papers on DTC design and optimization, Justia Patents (DTC-bridge architecture)*

---

### 2.5 Power Delivery Challenges for >1000W AI Chips

**The Power Delivery Wall:**
- NVIDIA B200/Blackwell generation: >1000W to 1400W per chip.
- At ~0.7V core voltage: ~1400-2000A of current.
- Traditional lateral power delivery has **hit a wall** for >1000W AI chips.

**Key Solutions:**

#### 1. Backside Power Delivery Networks (BSPDN)
- **Intel PowerVia** (18A node): First to HVM. Uses Nano-TSVs to connect backside power to transistors.
  - ~30-69% reduction in static IR drop, up to 90% cell utilization.
  - Frees ~20% of front-side routing resources.
- **TSMC Super Power Rail** (A16 node, H2 2026): Connects directly to transistor source/drain.
  - Targets 8-10% speed improvement, 15-20% power reduction.

#### 2. Vertical Power Delivery (VPD)
- Moves voltage regulation **close to/under the die** using in-package integrated voltage regulators (IVR).
- Shortens high-current path from centimeters to millimeters.
- Reduces I2R loss, loop inductance, transient noise, and BGA ball count.
- Enables 2:1, 4:1, 8:1 conversion ratios within the package.

#### 3. Material Innovations
- **Molybdenum** replacing tungsten/copper: up to 50% lower contact resistance, better performance at sub-20nm dimensions.
- Advanced TIMs with ~80 W/mK thermal conductivity for better heat extraction.

*Sources: SemiEngineering "Power Delivery Challenges for AI Chips", Wedbush/Tokenring reports on PowerVia, Intel Capital EPIC Microsystems*

---

## 3. Thermal Management

### 3.1 Junction-to-Case Thermal Resistance (Theta-JC)

**Theta-JC (Rjc)** is the primary metric for package-level thermal performance.

**State-of-the-Art (Indium TIM1 model):**
- Indium metal TIM1 (81 W/mK, 350 um thick) + thermal grease TIM2 (8.3 W/mK, 20 um thick).
- Demonstrated **Rjc = 0.023 C/W**, capable of dissipating **1000W** while keeping Tj_max at ~105C.
- TIM1 thickness reduction from 350 um to 30 um improves thermal performance by **~22%**.

**Design Insights:**
- Thinner dies (380 um vs. 755 um) increase sensitivity to TIM1 thermal conductivity.
- High-k TIM1 (e.g., indium metal) compensates for thinner die's reduced vertical conduction.
- Substrate thickness has negligible impact on Rjc (<0.3% of heat escapes through substrate bottom).
- Thermal grease outperforms thermal pads at TIM2 layer due to much thinner bond lines (20 um vs. 500 um).

---

### 3.2 Thermal Interface Materials (TIM1, TIM2)

**TIM Definitions:**
- **TIM1**: Between semiconductor die and package lid/integrated heat spreader (IHS).
- **TIM1.5** (emerging): Between bare die and heatsink/cold plate (lidless BGA packages for HPC).
- **TIM2**: Between heat spreader/lid and heatsink or cold plate.

**TIM Material Options:**

| Material | Thermal Conductivity | Application | Notes |
|---|---|---|---|
| Indium metal | ~81 W/mK | TIM1 (high power) | Ultra-low Rth; <0.005 K/W; up to <0.0003 K-W |
| Liquid metal (Ga alloys) | 40-80+ W/mK | TIM1 (high power) | <0.005 K/W Rth; requires containment |
| Thermal grease | 1.9-8.3 W/mK | TIM2 | Thin bond line (~20 um) |
| Thermal pads | 3-25 W/mK | TIM2 | Thicker BLT (500 um); worse than grease |
| Heat-Spring patterned metal | Variable | TIM2 | Low-pressure, recyclable, eliminates hotspots |
| Diamond-Cu composite | Extremely high | Lid material | ~6 ppm/K CTE; direct soldering possible |

**Intel's Hybrid TIM Architecture (2025):**
- **Center**: Liquid metal for peak heat flux.
- **Periphery**: Deformable silicon-based adhesive TIM to absorb warpage and unevenness.
- A "dam" structure controls liquid metal flow and stabilizes bond line thickness (BLT).
- Significantly reduces junction-to-case resistance while maintaining reliability under thermal cycling.

*Sources: Indium Corporation, iTherm.cn (Intel hybrid TIM), ECTC 2023 thermal papers, IBM lid-integral cold plate research*

---

### 3.3 Liquid Cooling Integration with Advanced Packages

**When Liquid Cooling Becomes Necessary:**
- Power densities exceeding **2 W/mm2** require liquid cooling.
- For >1000W AI chips, air cooling is generally insufficient.

**IBM Lid-Integral Cold Plate:**
- Eliminates **TIM2 entirely** by integrating liquid cooling directly into the lid.
- Uses wafer-level processes for manufacturing.
- Enables a more uniform TIM1 layer.
- Achieved **15 mm2 K/W** thermal resistance at 30 kPa pressure drop.

**Emerging Architectures:**
- Double-sided cooling for 3D-stacked chips.
- Microfluidic cooling with embedded channels.
- Vapor chambers integrated into the package substrate.
- Immersion cooling paired with advanced TIMs.

**Design Considerations:**
- Heatsinks intentionally bowed by 50-100 um to accommodate thermal expansion.
- Latest TIMs achieve <0.0003 K-W even under stress (power module applications).

---

### 3.4 Thermal Cross-Talk in Multi-Die Packages

**Definition:** One die's temperature rise elevates adjacent dies through shared conduction paths in the interposer, substrate, and heat spreader.

**Key Findings:**
- Thermal is "**the number one limitation for integration density**" -- Marc Swinnen, Ansys.
- Bumpless interconnect benefits heat dissipation (fewer thermal barriers).
- Staggered column fins provide superior cooling; short pitch creates cooling challenges for fine-pitch multi-chiplet integration.
- Under 10,000 W/m2-K convective cooling, max TDP was ~250W for 2.5D chiplet systems.

**Thermal-Aware Design (IMPPACT framework, UT Austin):**
- Compute-on-top stacking reduces peak temperature by ~22C.
- Chiplet spacing gives ~10C temperature reduction.
- Hybrid bonding provides ~9.6C benefit over microbump bonding.
- Thermal analysis must begin at architectural floorplanning stage, not at end-of-design.

**EDA Tools for Thermal Management:**
- **Synopsys RedHawk-SC Electrothermal**: Multiphysics signoff (thermal + power + SI + structural).
- **Siemens Calibre 3DThermal / Simcenter Flotherm**: Die-level and system-level analysis.
- **Ansys**: Power-to-thermal correlation and electro-thermal co-simulation.

*Sources: SemiEngineering "Navigating Heat in Advanced Packaging", IEEE papers on thermal crosstalk in 2.5D/3D, UT Austin IMPPACT, Siemens EDA blog*

---

### 3.5 Glass Core Thermal Challenges

**The Fundamental Problem:**
- Glass has **low thermal conductivity of ~1-2 W/mK** (vs. silicon at ~150 W/mK).
- In simulations: a plain glass substrate with 100 mA current showed max temperature of **127C**, while silicon remained at only **37C** under the same conditions.

**Mitigation Strategies:**

| Approach | How It Works | Effective Thermal Conductivity |
|---|---|---|
| Copper-filled TGVs | Fully filled through-glass vias conduct heat vertically | >200 W/mK (vertical) |
| Copper slugs/TPVs | Through-package vias for heat conduction | Substantial improvement |
| Two-phase vapor chambers | Ultra-thin (<1 mm) heat spreaders | ~25% better than Cu RDL |
| Nanocopper sintered TIMs | All-copper die-attach joints | Bulk-like Cu properties |
| Copper-graphene composites | Reduced CTE + maintained conductivity | 30% stress reduction on glass |

**CTE Mismatch Challenge:**
- CTE mismatch between copper (high CTE) and glass (low CTE, ~3.5 ppm/K or lower) generates significant stress.
- Stress leads to **crack propagation** in the glass core.
- Barriers using stress-absorbing materials (resin plugs, epoxy, buildup film) with intermediate CTE values can arrest crack growth.

**Despite thermal weakness, glass offers key advantages:**
- Excellent electrical insulation (ultra-high resistivity).
- Low dielectric constant and low loss tangent (ideal for high-frequency signals).
- Engineerable CTE to match silicon.
- Reduces electromagnetic interference in densely packed assemblies.

**Industry Activity:**
- **Intel**: Demonstrated glass-based test vehicles in Arizona.
- **Samsung**: Exploring glass cores for I-Cube and H-Cube packages.
- **SKC**: Installed pilot drill-and-fill line for 500 mm glass panels.
- **AGC**: Supplying low-CTE borosilicate sheets for early evaluations.
- **Georgia Tech**: Comprehensive research on thermal management of glass substrates.

*Sources: IDTechEx "Glass in Semiconductors 2026-2036", Georgia Tech research, IEEE ECTC papers, DTIC/DoD reports*

---

## 4. References and Resources

### Key Papers and Articles

1. **Jiang et al. (Intel), "224G PAM4 End-to-End Channel Solutions"** -- DesignCon 2022. The most comprehensive breakdown of 224G loss budgeting for packaging and PCB. [Downloaded PDF]
2. **IEEE 802.3df/dj Working Group Presentations** -- Reference package models for 112G and 224G SerDes channels. [Downloaded: IEEE_8023_224G_Package_Model.pdf]
3. **Alphawave Semi, "Innovative Interposer Solutions for HBM3/4: A Path to 12.8 Gbps"** -- DesignCon 2025. Crosstalk reduction techniques, novel shielding structures, equalization for HBM4. [Downloaded: DesignCon2025_HBM_Interposer_Solutions.pdf]
4. **UCIe Express, "UCIe Specification v2.0"** -- Die-to-die interconnect standard for chiplets, including UCIe-3D for hybrid bonding. [Downloaded: UCIe_Specification.pdf]
5. **OCP / ODSA, "BoW PHY Specification v2.0"** -- Bunch of Wires die-to-die interface standard for open chiplet ecosystems.
6. **Z. Peterson (Altium), "PCB and Package Design for 224G PAM-4 Channels"** -- Practical guidance on TEM mode, copper roughness, skip-layer routing, and BGA constraints.
7. **Keysight, "UCIe vs. BoW: Practical Insights for Choosing the Right Chiplet Standards"** -- White paper comparing SI definitions and compliance approaches.
8. **Signal Integrity Journal, --- HBM interposer design and crosstalk shielding** -- DesignCon 2025 track paper on 12.8 Gbps HBM routing.
9. **Siemens EDA, "HBM3e and HBM4: IC Design Guide"** -- Comprehensive guide on HBM signal integrity, power, and thermal considerations.

### Key Power Integrity References

10. **ScienceDirect, "Deep trench capacitor embedded in 3D-IC multi-wafer hybrid bonding package for PDN optimization"** (2026) -- State-of-the-art DTC integration: 1200 nF/mm2, 600 mOhm PDN impedance.
11. **IEEE, "Design and Simulation of Deep Trench Capacitor on High-Performance Silicon Interposer"** (2022).
12. **IEEE, "Power Integrity Performance Gain of a Novel Integrated Stack Capacitor (ISC) Solution for High-end Computing Applications"** (2020, Samsung).
13. **SemiEngineering, "Power Delivery Challenges for AI Chips"** -- Overview of >1000W power delivery problems and BSPDN solutions.
14. **Wedbush/Tokenring, "The Backside Revolution: How Intel's PowerVia Architecture is Solving the AI Power Wall"** (Jan 2026).
15. **Murata, "SPEAKS Webinar: DC-HPC Power Solutions"** -- On-package decoupling strategies for AI/HPC.

### Key Thermal References

16. **Indium Corporation, "TIM1, TIM1.5, TIM2 Thermal Interface Materials"** -- Application guides for each TIM layer.
17. **Intel / iTherm.cn, "Intel Hybrid TIM Architecture"** -- Liquid metal + silicon-based adhesive TIM for advanced packages (2025).
18. **IBM Research, "Lid-Integral Cold Plate Topology: Integration, Performance, and Reliability"** -- Eliminates TIM2 by integrating liquid cooling into the lid.
19. **SemiEngineering, "Navigating Heat in Advanced Packaging"** -- Comprehensive article on thermal challenges in heterogeneous integration.
20. **Siemens EDA, "Advanced Thermal Design Strategies for 3D IC Systems"** (Feb 2026) -- Four strategies for 3D thermal management.
21. **UT Austin, "IMPPACT: Thermal-Aware Architecture-to-Package STCO for 3D Heterogeneous AI Microsystems"** -- Chiplet spacing, hybrid bonding, and compute-on-top thermal benefits.
22. **IEEE, "Thermal Modeling of a Chiplet-Based Packaging With a 2.5-D TSV Interposer"** (2022) -- Thermal crosstalk analysis.
23. **IDTechEx, "Glass in Semiconductors 2026-2036"** -- Market and technology report on glass core substrates, including thermal challenges.

### Standards Documents

| Standard | Organization | Relevance |
|---|---|---|
| UCIe 2.0 | UCIe Express | Die-to-die interface, bump pitch, BER, SI spec |
| BoW PHY v2.0 | OCP/ODSA | Open chiplet PHY spec, termination, ESD, capacitance |
| IEEE 802.3df | IEEE | 100 Gb/s, 200 Gb/s, 400 Gb/s Ethernet over electrical backplanes |
| IEEE 802.3dj | IEEE | Next-gen 200 Gb/s per lane electrical interfaces |
| JEDEC HBM4 | JEDEC | 2048-bit interface, 12.8 Gbps, 2+ TB/s bandwidth |
| JESD402B | JEDEC | PDN target impedance and decoupling methodology |
| IPC-2141A | IPC | Controlled impedance design guidelines |

### Downloaded Resources

See `./downloads/` directory for PDFs:
- `224G_PAM4_End-to-End_Channel_Solutions.pdf` -- Intel DesignCon 2022 (2.0 MB, 17 pages)
- `DesignCon2022_224G_Packaging.pdf` -- IEEE 802.3df 224G package model (479 KB)
- `DesignCon2025_HBM_Interposer_Solutions.pdf` -- Alphawave Semi HBM interposer SI (4.3 MB, 25 pages)
- `IEEE_8023_224G_Package_Model.pdf` -- IEEE 802.3dj 224G package model (262 KB)
- `UCIe_Specification.pdf` -- UCIe Express specification (2.0 MB, 24 pages)
