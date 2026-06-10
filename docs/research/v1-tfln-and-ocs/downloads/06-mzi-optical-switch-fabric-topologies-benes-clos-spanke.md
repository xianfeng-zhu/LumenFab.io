# MZI Optical Switch Fabric Topologies: Benes, Clos, Spanke-Benes

**Sources:**
- Kouissi et al. (2020): "Comprehensive Model for Evaluating MZI-Based SiPh Switch Fabrics" - https://ouci.dntb.gov.ua/en/works/4YOmyE39/
- Bahadori et al. (Columbia): "Analysis of Loss and Crosstalk for Planar SiPh Switch Architectures"
- IEEE Comms Mag (2023): "From Small to Large: Clos Network for Scaling All-Optical Switching" - https://ieeexplore.ieee.org/document/10210476
- Scalability analysis papers via Infona/Scilit
**Type:** Academic compilation / technical reference
**Label:** Ref-R2

## The MZI as a 2x2 Optical Switch

A Mach-Zehnder Interferometer (MZI) consists of two directional couplers connected by two waveguide arms. A phase shifter on one arm controls the interference condition:

- **Bar state (crossing):** 0 or π phase shift → input exits the opposite port
- **Cross state:** π/2 phase shift → input exits the adjacent port

### Key Performance Metrics (Typical Ranges)

| Parameter | Typical Range | Best Reported |
|---|---|---|
| MZI crosstalk | -12 dB to -31.3 dB | -35 to -42 dB (Si, optimized) |
| MZI insertion loss | 0.1 dB to 3.44 dB | 0.1-0.3 dB (TFLN potential) |
| Extinction ratio (ER) | 12-16 dB | ~24 dB (LNOI MZI) |
| Switching speed (EO) | ~ns | Sub-ns (TFLN potential) |
| Switching speed (thermo-optic) | ~µs-22 µs | N/A |
| Waveguide crossing loss | ~0.2 dB | Can be <0.07 dB with optimized design |

## Switch Fabric Topologies

### 1. Benes Network

- **Type:** Rearrangeably non-blocking (RNB)
- **Elements:** O(N·log2N) — for 100x100: ~614; for 1000x1000: ~9,470
- **Stages:** 2·log2(N) - 1
- **Path loss:** Proportional to stages (logarithmic)
- **Crosstalk concern:** Two signals pass through each MZI, creating first-order crosstalk that accumulates through multiple stages
- **Control:** O(N·log2N) complexity
- **Best for:** Large port counts where element count matters most

### 2. Spanke / Spanke-Benes Architecture

- **Type:** Strict-sense non-blocking (SNB)
- **Elements:** O(N²) — for 100x100: ~9,900-19,800; for 1000x1000: ~1-2 million
- **Path loss:** Only 2·log2(N) elements in optical path (same stages as Benes but many more total elements)
- **Crosstalk:** Better than Benes (fewer signals share MZIs)
- **Signal quality:** Better OSNR — only Spanke architectures meet <30 dB insertion loss + >15 dB OSNR for 1000x1000
- **Energy:** Quadratic increase with port count
- **Best for:** Medium switches where strict nonblocking and signal quality are critical

### 3. Clos Network (Three-Stage)

- **Type:** Strict-sense non-blocking (SNB)
- **Elements:** O(N^1.5) — for 100x100: ~8,100; for 1000x1000: ~760,000
- **Moderate:** Better element count than Spanke, more than Benes
- **Best for:** ROADMs, balance of scalability and blocking performance
- **2023 finding:** Clos offers better blocking performance with lower element and fiber complexity than Spanke-based architectures for large-scale optical switches

## Scalability Comparison

| Architecture | Elements (100x100) | Elements (1000x1000) | Insertion Loss | OSNR | Energy Scaling |
|---|---|---|---|---|---|
| Benes (RNB) | ~614 | ~9,470 | Low | Moderate | Near-constant |
| Spanke (SNB) | ~9,900-19,800 | ~1-2M | Low | Best | Quadratic |
| Clos (SNB) | ~8,100 | ~760,000 | Moderate | Good | O(N^1.5) |
| Crossbar (WSNB) | ~10,000 | ~1,000,000 | High | Worst | O(N²) |

## Key Challenges at Scale

1. **Multi-path coherent crosstalk:** Significantly degrades performance as port count increases
2. **Waveguide crossings:** Introduce additional loss (~0.2 dB each) and crosstalk
3. **Dilated architectures:** Help by ensuring only one signal per MZI, at the cost of more switching elements
4. **Crosstalk requirement:** Better than -35 dB may be required for low-margin links
5. **Scalability limit:** For SiPh MZI-based switches, practical limit is around 32x32 without optical amplification

## Relevance to LumenFab

- TFLN MZI switches offer potential for lower crosstalk and faster switching than SiPh thermo-optic MZIs
- Understanding topology trade-offs is essential for designing TFLN-based OCS fabrics
- Benes topology is most scalable for large OCS port counts
- TFLN's electro-optic switching (ns) vs. MEMS (ms) is a key differentiation for applications needing faster reconfiguration
