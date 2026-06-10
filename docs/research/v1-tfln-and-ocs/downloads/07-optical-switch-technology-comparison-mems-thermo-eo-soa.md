# Optical Switch Technology Comparison: MEMS, Thermo-Optic, Electro-Optic, SOA

**Sources:**
- Google OCS technical breakdown (Tencent Cloud): https://cloud.tencent.com/developer/article/2610702
- Google Cloud Blog (Jupiter Evolution): https://cloud.google.com/blog/topics/systems/the-evolution-of-googles-jupiter-data-center-network
- Academic compilation from CNKI Scholar, SPIE, IEEE
**Type:** Industry analysis / technology comparison
**Label:** Article-A2

## Technology Comparison Matrix

| Dimension | 3D MEMS | Thermo-Optic (SiPh) | Electro-Optic (TFLN) | SOA-Based | Piezo |
|---|---|---|---|---|---|
| **Switching speed** | ms | µs-22 µs | **ns** | ns | ns/µs |
| **Insertion loss** | <2 dB | 1-5 dB | **<0.5 dB (potential)** | +gain (5-15 dB) | <1.5 dB |
| **Port scalability** | 136x136 (Palomar), 300x300 (Lumentum R300) | 8x8 to 32x32 | **Under research** | 8x8 to 64x64 | 8x8 to 64x64 |
| **Crosstalk** | -38 dB good | -20 to -35 dB | **-30 to -42 dB** | -25 to -40 dB | -35 to -45 dB |
| **Power consumption** | Low (passive optical path) | Moderate (heating elements) | **Low (no OEO)** | High (gain current) | Low |
| **Wavelength agnostic** | Yes | No (limited BW) | **Yes (broadband)** | Yes | Yes |
| **Maturity (2025)** | Commercial mainstream | Commercial | R&D / early commercial | Commercial | Specialized commercial |
| **Industry reps** | Google/Lumentum | Silicon Photonics fabs | HyperLight/Lightium | Various | Huber+Suhner (Polatis) |

## Detailed Technology Analysis

### 1. 3D MEMS (Micro-Electro-Mechanical Systems)
- **How it works:** High-voltage electrostatically driven 2D mirror arrays operating in 3D space (±X, ±Y, ±Z) to redirect light paths
- **Speed bottleneck:** Milliseconds due to mechanical mirror movement
- **Key advantage:** Wavelength/rate agnostic — can survive 400G→800G→1.6T upgrades without replacing core equipment
- **Key disadvantage:** Mechanical parts prone to wear, relatively slow reconfiguration
- **Commercial examples:** Google Palomar (136x136), Lumentum R300 (300x300)

### 2. Thermo-Optic (Silicon Photonics)
- **How it works:** Heating Si waveguides changes refractive index (thermo-optic coefficient)
- **Speed bottleneck:** Microseconds (thermal time constant)
- **Key advantage:** Foundry-compatible with standard CMOS processes, low cost
- **Key disadvantage:** Temperature-sensitive, higher power consumption (continuous heating)

### 3. Electro-Optic (TFLN)
- **How it works:** Pockels effect in lithium niobate — applied electric field changes refractive index via r33 coefficient (~31 pm/V)
- **Speed potential:** Femtosecond/attosecond material response
- **Key advantage:** Nanosecond switching, no thermal drift, athermal operation
- **Key disadvantage:** Currently lower port density, less mature manufacturing

### 4. SOA-Based (Semiconductor Optical Amplifier)
- **How it works:** Gating — signal passes through when SOA is biased, blocked when not
- **Speed:** Nanosecond
- **Key advantage:** Provides gain (can compensate for other losses)
- **Key disadvantage:** High power consumption, noise accumulation, non-linear effects

### 5. Piezo (Piezoelectric)
- **How it works:** Inverse piezoelectric effect physically displaces fiber collimators
- **Speed:** <3 ns to µs
- **Key advantage:** Extremely low optical loss, high stability
- **Key disadvantage:** Difficult to achieve 500+ port density due to actuator volume

## Switching Speed vs. Scalability Trade-off

```
Speed (faster ↑)
   |
ns  ── EO (TFLN) ── SOA ── Piezo
   |       |
µs  ── Thermo-optic
   |
ms  ── 3D MEMS
   |
   └───────────────────────────────→ Scalability (ports →)
        8x8     64x64    136x136   300x300
```

## Relevance to LumenFab

- TFLN (electro-optic) occupies a unique niche: nanosecond switching with excellent crosstalk
- This speed is 1000x faster than MEMS, enabling new use cases (per-collective reconfiguration for ML training)
- No other technology simultaneously offers ns switching, low loss, and broadband operation
- The comparison table should be a centerpiece of the LumenFab technology positioning
