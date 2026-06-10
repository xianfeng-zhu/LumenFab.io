# Google OCS Deployment: Apollo, Jupiter, and TPU v4/v5/v7

**Sources:**
- "Jupiter Evolving" (SIGCOMM 2022): https://dl.acm.org/doi/10.1145/3544216.3544265
- "Mission Apollo" (arXiv 2022): https://arxiv.org/abs/2208.10041
- "Lightwave Fabrics" (SIGCOMM 2023): https://dl.acm.org/doi/10.1145/3603269.3604836
- Google Cloud Blog: https://cloud.google.com/blog/topics/systems/the-evolution-of-googles-jupiter-data-center-network
- Tencent Cloud technical analysis: https://cloud.tencent.com/developer/article/2610702
**Type:** Paper summary + industry analysis compilation
**Label:** Collection-C1

## The Three Canonical Google OCS Papers

### Paper 1: Mission Apollo (arXiv:2208.10041, Aug 2022)
- **Title:** "Mission Apollo: Landing Optical Circuit Switching at Datacenter Scale"
- **Authors:** Ryohei Urata, Hong Liu, Kevin Yasumura et al. (Google)
- **Key device:** **Palomar OCS** — homegrown 3D MEMS-based 136x136 optical circuit switch
- **Palomar specs:** Millisecond switching time, <2 dB insertion loss, -38 dB return loss
- **Innovation:** Circulators to realize bidirectional links through OCS, effectively doubling OCS port count
- **WDM co-design:** Customized WDM transceivers delivered over 4 generations (40, 100, 200, 400 GbE)
- **Status:** Nearly a decade in production

### Paper 2: Jupiter Evolving (SIGCOMM 2022)
- **Title:** "Jupiter Evolving: Transforming Google's Datacenter Network via Optical Circuit Switches and Software-Defined Networking"
- **Key architectural change:** Transition from Clos to **direct-connect topology** among machine aggregation blocks
- **Key results:**
  - 5x higher speed and capacity
  - 30% CAPEX reduction
  - 41% power reduction
  - 60% of traffic takes direct path (average block-level path length: 1.4)
  - 3x faster fabric reconfiguration vs. patch-panel-based Clos
  - 6+ Pb/sec aggregate bandwidth (from 1 Pb/sec in 2015)
  - 50x less downtime than best known alternatives

### Paper 3: Lightwave Fabrics (SIGCOMM 2023)
- **Title:** "Lightwave Fabrics: At-Scale Optical Circuit Switching for Datacenter and Machine Learning Systems"
- **Key focus:** OCS for ML systems (TPU v4)
- **Key results:**
  - 3x better system availability
  - Up to 3.3x model-dependent performance improvement vs. static fabric
  - OCS costs <6% of total system cost
  - Large-scale ML superpod with **4096 TPU v4 chips** (>1 ExaFLOP)
  - WDM + optical circulators support high-bandwidth bidirectional traffic on a single fiber strand

## TPU v4/v5/v7 OCS Deployment Architecture

### TPU v4 Pod
- **4096 TPU v4 chips** per supercomputer/pod
- **48 Palomar OCS** units to build 3D Torus topology
- 4 chips per Tray (board), 16 trays = 64 chips per Rack (4x4x4 Cube)
- 64 racks = 4096 chips per Pod
- Cube: copper 3D Mesh inside; OCS: 3D Torus between Cubes
- OCS cost: <5% of system total; power: <3%

### TPU v7 Ironwood (Hot Chips 2025)
- **9216 chips** per pod (up from 4096)
- **Twisted 3D Torus** topology: adds long-distance jumper connections for better bisection bandwidth
- ICI bandwidth: 9.6 Tb/s
- Global HBM pool: 1.77 PB unified address space
- Per pod: 48 OCS required

### 147k-TPU v7 Cluster
- **~1024 OCS** total (256 for super-spine replacement + 48 x 4 x 4 for modular deployment)
- 73,728 400G NICs, 4,608 ToR switches, 2,304 Leaf/Spine switches
- OCS replaced an entire Super-Spine electrical switch cluster

## Supply Chain

### Internal Route (~80%)
- Google owns MEMS mirror design IP
- **Silex Microsystems** (Sweden): wafer foundry for MEMS fabrication
- **Celestica**: L10 system integration

### External Route (~20%)
- **Lumentum** (R300 platform): 300x300 OCS, <1.5 dB insertion loss
- **Coherent**: commercial OCS supplier
- OCP OCS subproject (Jul 2025): Members include Google, Microsoft, NVIDIA, Lumentum, Coherent

## OCS Market Forecast

- **Cignal AI:** OCS market >$1.6B by 2029
- **Coherent:** TAM up to $2B

## Key Insight: Wavelength/Rate Agnosticism

The Apollo OCS operates transparently to wavelength and port rate. Spine switches can upgrade from 400G to 800G to 1.6T **without replacing core OCS equipment**. This is a critical TCO advantage over electrical switching, where every speed upgrade requires full spine replacement.

## Relevance to LumenFab

- Google's OCS success validates the OCS approach for large-scale deployment
- Specific data points (port counts, insertion loss, cost percentages) are essential for the LumenFab page
- TPU OCS integration provides the use case narrative for ML training acceleration
- MEMS OCS limitations (ms switching) create the market opportunity for faster TFLN-based OCS
