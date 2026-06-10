# Electrical Packet Switching vs. Optical Circuit Switching: Data Center Comparison

**Sources:**
- Molex blog: https://www.molex.com/en-us/blog/the-rise-of-optical-switching-data-center-optical-interconnects
- Google Cloud Blog (Jupiter): https://cloud.google.com/blog/topics/systems/the-evolution-of-googles-jupiter-data-center-network
- Academic compilations (SPIE, IEEE, DOAJ)
**Type:** Industry analysis
**Label:** Article-A3

## Head-to-Head Comparison

| Metric | Electrical Packet Switching (EPS) | Optical Circuit Switching (OCS) |
|---|---|---|
| **Data plane latency** | Low (µs) but increases with load | Very low (near speed of light) once circuit established |
| **Reconfiguration time** | Instantaneous (per-packet) | 10-25 ms (MEMS); ns (TFLN EO potential) |
| **Power per switch** | High (OEO conversions, cooling) | Low (passive optical path) |
| **Bandwidth scalability** | Limited by switch ASIC | Data-rate agnostic (scales with WDM) |
| **Traffic suitability** | Dynamic, bursty, many-to-many | Persistent, few-to-few flows (AI/ML, HPC) |
| **OEO conversions** | Required at every hop | Eliminated (all-optical path) |
| **Cost at scale** | High (complex cabling, power) | Lower long-term CAPEX per bit |

## Power Consumption Analysis

| Architecture | Power vs. Baseline | Source |
|---|---|---|
| Traditional EPS | Baseline | — |
| OCS-based (Google) | **40% less power** | Google Jupiter Evolving |
| All-optical intra-rack | **67% reduction** | Simulation (Clos-based) |
| Hybrid EPS+OCS | **47% saving** vs. Fat-Tree | Hierarchical ShuffleNet (180K servers) |

## Latency Breakdown

### EPS Path Latency
```
Server NIC TX → ToR switch (µs) → Leaf switch (µs) → Spine switch (µs) → Leaf → ToR → Server RX
Each hop: ~5-20 µs (including SerDes, buffering, switching)
Total for 5-hop path: ~25-100 µs (under light load, can increase 10x under congestion)
```

### OCS Path Latency
```
Server NIC TX → Optical transceiver → OCS (mirror) → Optical transceiver → Server RX
Once circuit established: ~ns propagation delay + fiber latency
Reconfiguration overhead: ~10-25 ms (MEMS) or ns (TFLN EO)
```

## Google's Measured Improvements with OCS

| Metric | Improvement |
|---|---|
| Flow completion time | **10% reduction** |
| Throughput | **30% improvement** |
| Power consumption | **40% less** |
| Cost (CAPEX) | **30% less** |
| Downtime | **50x less** |

## Scalability Comparison

### EPS Limitations at Scale
- Switch ASIC bandwidth doubling every 2 years (slowing)
- 51.2T switch chip max today; 102.4T projected but challenging
- Power and cooling dominate at scale (~50% of total costs in some architectures)
- Each speed upgrade requires full spine/leaf replacement

### OCS Advantages at Scale
- Data-rate agnostic: survive 400G → 800G → 1.6T upgrades
- Simplified cabling: direct-connect mesh vs. Clos multi-stage
- "Pay as you grow": incremental OCS expansion more cost-efficient than EPS expansion

## When to Use Each

| Use Case | EPS | OCS | Hybrid |
|---|---|---|---|
| ToR switching | ✓ | ✗ | ✓ |
| Bursty traffic (web search, video) | ✓ | ✗ | ✓ |
| AI/ML training (persistent flows) | ✗ | ✓ | ✓ |
| HPC (predictable communication) | ✗ | ✓ | ✓ |
| Core/aggregation at hyperscale | ✗ | ✓ | ✓ |

## Relevance to LumenFab

- Provides the quantitative comparison data for positioning TFLN OCS vs. EPS
- Google's measured 40% power reduction, 30% cost savings are powerful data points
- The trend is clear: hyperscalers are moving toward hybrid EPS+OCS architectures
- TFLN OCS' ns switching time addresses the key limitation of MEMS OCS (ms reconfiguration)
