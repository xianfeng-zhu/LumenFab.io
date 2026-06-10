# SDN Control Plane for Optical Circuit Switching Networks

**Sources:**
- COUDER (Columbia University): https://ar5iv.labs.arxiv.org/html/2010.00090
- OPSquare DCN (Xue et al., 2020): https://ui.adsabs.harvard.edu/abs/2020JLwT...38.1103X
- SDN-Enabled Flexible ODN (2020): CNKI Scholar
- RGAIA (Che et al., 2022): https://ouci.dntb.gov.ua/en/works/96oMzVW7/
- LIGHTNESS project (Saridis et al., 2016): research.tue.nl
- Electrical vs. OCS comparison sources
**Type:** Academic compilation
**Label:** Collection-C3

## The Fundamental Challenge: Reconfiguration Latency

Commercial OCS switches (MEMS-based) have a reconfiguration latency of **10-25 ms**. This is problematic because **50% of DCN flows last <10ms** — meaning the topology optimized before switching may no longer suit post-switching demands.

| Component | Typical Latency | Notes |
|---|---|---|
| MEMS mirror settling | 5-20 ms | Main bottleneck |
| SDN controller processing | 1-10 ms | Path computation, validation |
| Optical link stabilization | 1-5 ms | Power equalization |
| **Total OCS reconfiguration** | **~10-35 ms** | Flow-level reconfiguration impractical |

## Two Schools of Thought

### School 1: Fast Switching (Custom Prototypes)
- Build custom OCS with µs or faster switching (MZI-based, TFLN, etc.)
- Increases control plane complexity (must compute paths much more frequently)
- Enables per-flow or per-collective reconfiguration
- **Examples:** OPSquare (µs), Lumorph (3.7 µs)

### School 2: Robust Optimization (Commercial OCS)
- Use robust optimization to work within MEMS OCS constraints
- COUDER approach: optimize for a convex set of traffic matrices, not a single TM
- Daily reconfiguration is sufficient — no need for fast switching hardware
- **Example:** COUDER achieves ~20% higher throughput with daily reconfiguration

## COUDER Framework (Columbia University)

### Approach
- Optimizes topology and routing based on **a convex set of traffic matrices**
- Provides strict throughput guarantees for any traffic bounded by the convex set
- For bursty out-of-bounds traffic: desensitization technique reduces performance hit

### Key Findings
- **92% of traffic matrices** can be bounded by <30 minutes' worth of historical traffic
- **~20% higher throughput** vs. cost-equivalent static topologies
- **~32% lower average hop count** vs. uniform mesh
- **Daily reconfiguration** is sufficient — more frequent reconfiguration brings only marginal improvement

### Three-Stage Algorithm
1. **Fractional topology** via LP optimization maximizing max-min throughput
2. **Desensitization** to minimize maximum link sensitivity for outlier TMs
3. **Integer topology** conversion via Lagrangian Dual Method (decouples NP-complete problem into solvable min-cost flow subproblems)

## SDN Architecture for OCS Networks

### Google's Orion SDN Controller
- Centralized brain for Jupiter Evolving architecture
- Three-layer stack:
  - **Sensing layer (CSIG):** Telemetry data via Shim Header
  - **Transport layer (Falcon):** Hardware-level offloading via Titanium IPU
  - **Global scheduling layer (Orion):** Centralized orchestration
- Functions: splits traffic among multiple shortest/non-shortest paths, observes link capacity and communication patterns, coordinates link drains with routing software and OCS reconfiguration

### OPSquare SDN Extensions
- Extended OpenFlow with **Optical Flow Control (OFC)** protocol to prevent packet loss
- Extended **FlowMod** and **FeatureRep** commands for optical device recognition
- Achieved: **<4.8 µs server-to-server latency**, no packet loss at 0.5 load

### SDN-Enabled Flexible ODN (Dynamic Bandwidth Allocation)
- Uses photonic integrated wavelength selective switches + SDN control
- Results: Packet loss reduced by **1 order of magnitude**, latency improved by **42.2%**
- Only 11.7% performance degradation when scaling from 2,560 to 40,960 servers

## Comparison: Electrical Packet Switching Control Plane vs. OCS Control Plane

| Aspect | Electrical Packet Switching | Optical Circuit Switching |
|---|---|---|
| **Granularity** | Per-packet | Per-circuit (flow/aggregate) |
| **Reaction time** | Sub-µs (hardware forwarding) | 10-ms+ (MEMS), ns (TFLN potential) |
| **Control complexity** | Distributed (switches decide) | Centralized (SDN controller decides) |
| **Traffic adaptation** | Instant, per-packet | Batch, periodic reconfiguration |
| **Buffering** | Required (per-port buffers) | Not required (circuit established) |
| **QoS mechanism** | Queuing/scheduling | Circuit provisioning |
| **Failure recovery** | Fast (ms, via routing protocols) | Slow (10-100 ms, via OCS reconfiguration + rerouting) |

## Wavelength Assignment in OCS Networks

In WDM-based OCS networks, path computation must jointly solve:
1. **Routing:** Which fiber path to use
2. **Wavelength assignment:** Which wavelength channel to use
3. **Topology selection:** Which OCS port mapping to configure

This is a variant of the **RWA (Routing and Wavelength Assignment)** problem, which is NP-complete. In practice, Google decouples these: the SDN controller computes the logical topology first, then assigns fiber paths, and finally configures OCS port mappings.

## Relevance to LumenFab

- **TFLN OCS advantage:** ns switching time eliminates the reconfiguration latency problem
- With TFLN OCS, the "fast switching" school of control plane becomes practical
- COUDER's daily reconfiguration bound validates that even modest reconfiguration is valuable
- The control plane narrative for LumenFab: "TFLN OCS bridges the gap between MEMS-based topology engineering and true flow-level optical switching"
- Google's Orion SDN architecture provides a real-world reference for how to integrate OCS into production networks
