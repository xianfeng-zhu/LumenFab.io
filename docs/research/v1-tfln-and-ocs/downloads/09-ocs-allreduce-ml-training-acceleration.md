# OCS for AllReduce Acceleration in ML Training

**Sources:**
- Lumorph (Cornell/Lightmatter): arXiv:2501.18169
- PCCL (Photonic Circuit-Switched Collective Communication): arXiv:2509.15450
- NEC Labs (OECC/PSC 2025): https://www.nec-labs.com/blog/accelerating-distributed-machine-learning-with-allreduce-reconfiguration
- RailX (Tsinghua/Hoefler): arXiv:2507.18889
- TopoOPT (MIT): arXiv preprint
- Chinese study: 光通信研究 (2024) - "Reconfigurable OCS for LLM Pre-training"
**Type:** Academic compilation
**Label:** Collection-C2

## The Problem: Communication Bottleneck in Distributed Training

In distributed ML training, collective communications (especially AllReduce) can account for 30-70% of total training time. Traditional electrical networks use fixed topologies (fat-tree, torus) that are optimized for average traffic, not specific collective patterns.

## Key Research Findings

### 1. Lumorph (Cornell & Lightmatter, 2025)

- **Approach:** Optically reconfigurable datacenter rack using chip-to-chip SiPh
- **Switch speed:** MZI-based optical switches reconfigure in **3.7 µs**
- **Methods:** Recursive doubling/halving and quadrupling/quartering (Lumorph-2, Lumorph-4) for AllReduce on dynamically configured topologies
- **Results:** **74% faster collective communication**, **1.7x end-to-end ML training throughput** vs. Ring on ideal electrical switch
- **Key insight:** Addresses **compute fragmentation** in multi-tenant clusters by enabling arbitrary-sized direct-connect topologies

### 2. PCCL: Photonic Circuit-Switched Collective Communication (2025)

- **Approach:** Reconfigures network topology to match the communication pattern of ANY collective primitive (AllReduce, AllToAll, etc.)
- **Optimization:** Hardware-agnostic framework decides *when* to reconfigure, balancing reconfiguration delay vs. congestion/dilation costs
- **Results:** **Up to 3x speedup for AllReduce on 128 GPUs**, **1.3x end-to-end training throughput** improvement

### 3. NEC Labs: AllReduce Reconfiguration with OCS (OECC/PSC 2025)

- **Approach:** Simulated annealing-based optimization to determine optimal OCS reconfiguration strategies for AllReduce
- **Results:** **31% less average training time** vs. existing solutions
- **Authors:** Zilong Ye, Philip N. Ji, Ting Wang

### 4. RailX (Tsinghua & Hoefler, 2025)

- **Architecture:** Intra-node direct connectivity + inter-node OCS
- **Innovation:** Organizes rail-based rings into all-to-all topology using Hamiltonian Decomposition
- **Cost:** **<10% of Fat-Tree** cost per injection/AllReduce bandwidth at hyper-scale (200K chips)

### 5. TopoOPT (MIT)

- **Approach:** Alternating optimization over computation x communication x topology
- **Method:** Uses OCS for dynamic server reconfiguration
- **Results:** **Up to 3x faster training iteration** vs. cost-equivalent Fat-Tree

### 6. Chinese Study: Reconfigurable OCS for LLM Pre-training (2024)

- **Approach:** OCS dedicated to **data parallelism only**, configured once per training job
- **Scope:** Joint optimization of AllReduce algorithms and opto-electronic architecture

## Key Technical Insight: Fine-Grained vs. Coarse-Grained Reconfiguration

| Approach | Reconfiguration Frequency | Switch Speed Required | Suitability |
|---|---|---|---|
| **Job-level** | Once per training job | Seconds-minutes | MEMS OCS works |
| **Per-iteration** | Every training step | µs-ms | TFLN OCS ideal |
| **Per-collective** | Within a single AllReduce | ns-µs | Only EO (TFLN) works |

## Why TFLN OCS Matters for ML Training

Current MEMS OCS (Google Palomar) has **ms switching time**, limiting reconfiguration to job-level or hour-level changes. New research on per-collective reconfiguration (Lumorph, PCCL) requires **µs or ns switching** — achievable with TFLN electro-optic switches but not with MEMS or thermo-optic technologies.

**Performance ceiling with MEMS OCS for ML:** Since 50% of DCN flows last <10ms, MEMS OCS can only reconfigure for flow aggregates, not individual flows or collectives. TFLN OCS, with ns switching, can reconfigure within a single AllReduce operation.

## Relevance to LumenFab

- The strongest technical argument for TFLN-based OCS vs. MEMS-based OCS
- Quantitative performance uplift (31-74% faster collectives, up to 1.7x training throughput)
- Key narrative: "MEMS OCS is for topology engineering; TFLN OCS is for collective acceleration"
- Central to the LumenFab value proposition for AI/ML data center customers
