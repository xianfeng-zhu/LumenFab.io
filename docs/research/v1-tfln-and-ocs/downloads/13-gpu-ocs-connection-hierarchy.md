# GPU-OCS Connection Hierarchy: Where Does the Optical Transceiver Plug In?

## Executive Summary

In modern AI data centers, the physical connection hierarchy follows a strict pattern:

```
GPU chip → GPU board → server/node → rack → pod → cluster
```

The **electrical-to-optical (E-O) conversion boundary** sits at the **rack boundary** for NVIDIA and **at the cube/surface boundary** for Google TPU. Inside the rack, everything is copper (NVLink, PCIe). Across racks, everything is optical (InfiniBand, Ethernet, or OCS-based ICI). A "leaf switch" (ToR) aggregates NICs from multiple servers and connects via optics to spine switches.

**The key answer**: A pluggable optical transceiver plugs into a **NIC (Network Interface Card) on the server/node** for scale-out traffic, OR into a **switch faceplate** for fabric links. For Google's TPU OCS, the optical transceiver (OSFP module) sits on the **TPU board itself**, with each TPU having multiple OSFP cages for direct inter-chip ICI to OCS switches. For CPO (co-packaged optics), the optical engine is **integrated into the switch ASIC package**, eliminating the pluggable form factor entirely.

---

## 1. NVIDIA GB200 NVL72: The Copper-Rack / Optical-Fabric Split

### 1.1 Rack-Level Physical Layout

| Component | Per Rack (NVL72) |
|---|---|
| Compute trays (1U) | 18 |
| NVLink switch trays (1U) | 9 |
| Hybrid cooling trays | 2 |
| **Total GPUs (B200)** | **72** |
| **Total CPUs (Grace)** | **36** |
| Rack power | ~120 kW |
| Intra-rack NVLink bandwidth | 1.8 TB/s per GPU (bidirectional) |

Source: NVIDIA Multi-Node NVLink Systems Guide

### 1.2 Compute Tray Architecture

Each 1U compute tray contains:
- **2 Grace Blackwell Superchips** (each: 1 Grace CPU + 2 Blackwell GPUs = 4 GPUs per tray)
- **4 ConnectX-7/8 SuperNICs** (each with 1 OSFP cage, 400G for CX-7 or 800G for CX-8)
- **2 BlueField-3 DPUs** (dual-port 400G each)
- **4 NVMe SSDs**

This means: **4 optical OSFP ports per compute tray** for scale-out networking, regardless of the 4 GPUs inside. The GPU-to-optical-port ratio for scale-out is therefore **1:1** (one optical port per GPU at 400/800G).

Source: NVIDIA DGX GB200 User Guide

### 1.3 NVLink Scale-Up (Intra-Rack): All Copper

Inside the NVL72 rack, all 72 GPUs connect through **NVLink 5 over passive copper twinax cables** to 9 NVSwitch trays. Key numbers:

| Metric | Value |
|---|---|
| NVLink cables per rack | ~5,184 |
| Cable length range | 190 mm -- 925 mm |
| Data rate per NVLink SerDes | 224 Gb/s PAM-4 |
| Cable cartridges | 4 vertical routing assemblies |
| NVSwitch ASICs | 9 (one per tray, 72 ports each) |
| Per-ASIC bisection bandwidth | 1.8 TB/s |

There are **zero optical transceivers inside the NVL72 rack for NVLink**. Jensen Huang stated this saves ~20 kW vs. using optics for the same bandwidth.

Source: OFC 2025 NVIDIA (OFC2025: NVIDIA), Corning AEN LAN-3481

### 1.4 Scale-Out (Inter-Rack): Where Optics Enter

When scaling beyond one rack (e.g., NVL576 = 8 racks = 576 GPUs):

- Each GPU's ConnectX-7/8 NIC transmits over **optical fiber** to an **NVIDIA Quantum InfiniBand ToR switch**
- For NVL576, estimates require ~5,184 x 1.6T optical transceivers
- The GPU-to-1.6T transceiver ratio is approximately **9:1** (576 GPUs to 5,184 transceivers) due to multiple fabric layers

The optical transceiver plugs into the **OSFP cage on the ConnectX-8 SuperNIC**, which sits on the compute tray PCB inside the server. From there, fiber runs to the ToR switch.

### 1.5 GB300 NVL72 Updates

The GB300 NVL72 (announced March 2025) evolves the SuperNIC to **ConnectX-8**, providing **800 Gb/s per GPU** (single-port OSFP 800G). Each compute tray thus has 4x OSFP 800G ports instead of 4x OSFP 400G ports on GB200.

---

## 2. Google TPU v4/v5p: Chip-Level Optics via OCS

### 2.1 The Cube: Basic Building Block

The fundamental unit is the **4x4x4 cube** (64 TPU chips), which occupies **one rack**.

| Level | Chips | Hosts | Description |
|---|---|---|---|
| TPU chip | 1 | -- | Single ASIC with 6 ICI ports |
| TPU board | 4 chips | -- | 4 liquid-cooled TPUs per PCB |
| Host (CPU node) | 4 chips | 1 VM | 1 CPU host drives 4 TPUs |
| Cube (1 rack) | 64 chips | 16 hosts | 4x4x4 3D Torus |
| Full v4 Pod | 4,096 chips | 1,024 hosts | 64 cubes = 64 racks |
| Full v5p Pod | 8,960 chips | 2,240 hosts | 140 cubes = 140 racks |

Source: Google TPU v4 paper (Jouppi et al., ISCA 2023)

### 2.2 Where the Optical Transceivers Sit

Each TPU v4/v5p PCB has:
- **4 top-side PCIe connectors** (to CPU host)
- **16 bottom-side OSFP connectors** (for inter-tray ICI optical links)

The **optical transceiver (OSFP module)** plugs directly into the **TPU board's OSFP cage**. Each OSFP supports **400 Gbps bidirectional** (TPU v4) or **800 Gbps** (TPU v5p).

Within a 64-chip cube, some ICI links use copper (internal faces) and some use optics (external faces):

| Position in 4x4x4 Cube | Chips | Copper ICI links | Optical ICI links |
|---|---|---|---|
| Corner (vertices) | 8 | 3 | 3 |
| Edge | 24 | 4 | 2 |
| Face center | 24 | 5 | 1 |
| Interior (core) | 8 | 6 | 0 |
| **Total** | **64** | **288** | **96** |

**96 optical links per cube (rack)** exit to the OCS fabric. The optics-to-chip ratio is **1.5:1** (96 optics / 64 chips).

Source: Dongwu Securities report, Google TPU v4 paper

### 2.3 OCS Fabric

- **Palomar OCS**: 136x136 3D MEMS mirror switch (128 ports usable)
- **48 OCS units** interconnect a full 4,096-chip TPU v4 pod
- 6,144 optical links total (64 cubes x 96 links)
- Each OCS dimension (X, Y, Z) gets 16 OCS units -- no cross-dimensional traffic

The key insight: **the optical transceiver is at the TPU board level (per-chip-group), not at a switch level**. The OCS switch itself is all-optical -- the MEMS mirrors directly reflect incoming light beams without any O-E-O conversion. The only E-O conversion happens at the TPU board's OSFP module.

Source: Google TPU v4 paper

### 2.4 TPU v5p Changes

- ICI bandwidth increased from 6 x 400 Gbps (v4, 2.4 Tbps aggregate) to **6 x 800 Gbps (v5p, 4.8 Tbps per chip)**
- Same cube + OCS architecture, just faster optics
- 140 cubes per full v5p pod (vs. 64 for v4)
- More OCS units required proportionally

Source: Google Cloud TPU v5p documentation

---

## 3. Leaf Switch: Definition and Position

### 3.1 What Is a Leaf Switch?

In the **Clos (leaf-spine) topology** used by NVIDIA-based AI clusters:

- **Leaf switch** = Top-of-Rack (ToR) switch that sits at the top of each rack
- Connects **down** to GPU servers (via their NICs)
- Connects **up** to spine switches (for cross-rack traffic)

### 3.2 Do GPUs Connect Directly to the Leaf Switch?

**Not the GPU chip directly** -- the GPU connects through its **NIC**:

```
GPU chip → PCIe → NIC (ConnectX-7/8) → OSFP transceiver → fiber → Leaf switch port
```

The NIC is a separate chip on the server board. In DGX H100/GH200, each GPU has a dedicated NIC port (rail-optimized). In GB200 NVL72, there are 4 NICs but 4 GPUs share the tray's networking.

### 3.3 Rail-Optimized Architecture

In DGX H100 SuperPOD:

| Component | Count |
|---|---|
| DGX H100 nodes per scalable unit (SU) | 32 |
| GPUs per node | 8 |
| Total GPUs per SU | 256 |
| ConnectX-7 NICs per node | 8 (one per GPU rail) |
| Leaf switches per SU | 8 |
| Leaf switch ports (downlinks) | 32 (one per node) |
| Leaf switch ports (uplinks) | 32 (to spines) |

Each leaf switch connects to **all nodes' same rail** (e.g., Leaf #1 connects to every node's Port 1/GPU 1, Leaf #2 connects to Port 2/GPU 2, etc.).

Source: NVIDIA DGX SuperPOD Reference Architecture

### 3.4 Typical Cabling in the Leaf Layer

| Connection | Media | Speed | Distance |
|---|---|---|---|
| NIC in server to leaf (in-rack) | DAC (copper) | 400G/800G | < 3 m |
| NIC to leaf (cross-rack) | AOC | 400G/800G | 3--30 m |
| Leaf to spine | OSFP optical module | 400G/800G/1.6T | 50--500 m |

Source: NVIDIA Cable Management Guidelines

---

## 4. CPO (Co-Packaged Optics): Where the Optical Engine Lives

### 4.1 NVIDIA Spectrum-X Photonics (March 2025)

NVIDIA announced **Spectrum-X Photonics** (Ethernet) and **Quantum-X Photonics** (InfiniBand) with co-packaged optics:

- The optical engine is **3D-stacked on top of the switch ASIC** using TSMC SoIC-X hybrid bonding
- TSMC's **COUPE** platform: Photonic IC (PIC) + Electronic IC (EIC, 65 nm) stacked directly
- **No pluggable transceivers** at the switch faceplate

| Model | Ports | Speed | Total Bandwidth | Optical Engine |
|---|---|---|---|---|
| SN6810-LD (single ASIC) | 128 x 800G | 800 Gb/s | 102.4 Tb/s | CPO + single ASIC |
| SN6800 (quad ASIC) | 512 x 800G | 800 Gb/s | 409.6 Tb/s | 4 ASICs + fiber shuffle |

- Each CPO assembly handles **up to 36 ports**
- Per-port power: ~9 W (2 W laser + 7 W engine) vs. ~30 W for pluggable optics
- **Detachable fiber connector** enables automated assembly
- Uses **surface-normal optical I/O** -- port count scales without enlarging the package

Source: NVIDIA Press Release (March 2025), NVIDIA Technical Blog

### 4.2 Implications for the Connection Hierarchy

With CPO, the optical engine moves:
- **Before CPO**: Pluggable OSFP/QSFP module at switch faceplate → fiber
- **With CPO**: Optical engine inside the switch package → detachable fiber connector → fiber

The physical hierarchy from the GPU perspective remains:
```
GPU → NIC → leaf switch (now with CPO) → spine
```

But the switch's port is no longer a pluggable module -- it's a direct fiber attachment point.

---

## 5. Complete Hierarchy Summary

### NVIDIA GB200 NVL72 (Rack-Scale)

```
┌──────────────────────────────────────────────┐
│  Rack (72 GPUs)                              │
│  ┌─────────────────────┐  ┌────────────────┐ │
│  │ Compute Tray x18    │  │ NVSwitch x9    │ │
│  │  ┌───┐ ┌───┐       │  │  Copper NVLink  │ │
│  │  │GPU│ │NIC│──OSFP──┼──┼─► ToR switch   │ │
│  │  │   │ │   │ opt.   │  │  (rack top)    │ │
│  │  └───┘ └───┘       │  └────────────────┘ │
│  │   ↑ PCIe Gen6       │    ↑                │
│  └─────────────────────┘    │ fiber          │
└──────────────────────────────┼────────────────┘
                               │
                    ┌──────────┼──────────┐
                    │  ToR/Leaf Switch     │
                    │  (Quantum InfiniBand  │
                    │   or Spectrum Eth)    │
                    └──────────┬──────────┘
                               │ optical fiber
                    ┌──────────┼──────────┐
                    │  Spine Switch        │
                    └──────────────────────┘
```

| Boundary | Media | Optics? | Speed per Lane | Aggregate per GPU |
|---|---|---|---|---|
| GPU ↔ NVSwitch (intra-rack) | Copper twinax | No | 224 Gb/s NVLink 5 | 1.8 TB/s |
| GPU ↔ NIC (PCIe) | PCB traces | No | PCIe Gen6 | ~128 GB/s |
| NIC → Leaf/ToR (scale-out) | Fiber | **OSFP 400G/800G** | 112/224 Gb/s PAM-4 | 400-800 Gb/s |
| Leaf ↔ Spine | Fiber | **OSFP/QSFP-DD** | Various | N x 800G |
| Spine ↔ Superspine | Fiber | **OSFP/CPO** | Various | Various |

### Google TPU v4/v5p (Pod-Scale)

```
┌──────────────────────────────────────────┐
│  Rack (1 Cube = 64 TPUs)                 │
│  ┌──────────────────┐                    │
│  │ 16 Hosts x 4 TPUs│                    │
│  │ ┌────┐ ┌──────┐  │                    │
│  │ │TPU │ │OSFP  │──┼──┼─► OCS switch   │
│  │ │    │ │opt.  │  │  │   (all-optical)  │
│  │ └────┘ └──────┘  │  │                  │
│  │  ↑ copper ICI     │  │                  │
│  │  inside cube      │  │                  │
│  └──────────────────┘  │                  │
└─────────────────────────┼──────────────────┘
                          │ fiber
               ┌──────────┼──────────┐
               │  Palomar OCS (MEMS) │
               │  128 ports, all-   │
               │  optical switching │
               └────────────────────┘
```

| Boundary | Media | Optics? | Speed per Port | Per-Chip ICI BW |
|---|---|---|---|---|
| Inside cube (same rack) | Copper | No | -- | 6 links |
| Cube face to OCS | Fiber | **OSFP 400G (v4)/800G (v5p)** | 400-800 Gb/s | 96 optics per cube |
| OCS internal | Free-space MEMS | All-optical | N/A | N/A |
| OCS out to next cube | Fiber | No E-O conversion | 400-800 Gb/s | Same link |

---

## 6. Key Takeaways

### 6.1 Where the Optical Transceiver Plugs In

| System | Transceiver Location | Unit |
|---|---|---|
| **NVIDIA DGX H100/H200** | ConnectX-7 NIC on GPU server PCB | Per-GPU (rail-optimized, 1 NIC per GPU) |
| **NVIDIA GB200 NVL72** | ConnectX-7 OSFP on compute tray | 4 GPUs share 4 NICs (1:1 GPU-to-OSFP) |
| **NVIDIA GB300 NVL72** | ConnectX-8 OSFP 800G on compute tray | 1:1 GPU-to-800G-OSFP |
| **Google TPU v4** | OSFP on TPU board | 4 TPUs share 16 OSFP cages (1.5 optics per chip) |
| **Google TPU v5p** | OSFP 800G on TPU board | Same 4x4x4 cube, faster optics |
| **CPO Switch (NVIDIA Spectrum-X)** | 3D-stacked on switch ASIC | Multi-port per photonic engine |

### 6.2 The E-O Boundary

- **NVIDIA NVL72**: E-O happens at the **NIC card's OSFP cage** inside the server. Everything inside the rack is copper. The first optical hop is from the server NIC to the ToR switch.
- **Google TPU v4/v5p**: E-O happens at the **TPU board's OSFP cage** at the cube face boundary. 96 of a cube's 384 total ICI links use optics to connect to OCS; the rest use copper inside the rack.
- **CPO (next-gen switches)**: E-O happens **inside the switch ASIC package** itself. No pluggable module -- fiber attaches directly to the switch.

### 6.3 The Leaf Switch

The leaf switch is the **top-of-rack aggregation switch**. GPUs do NOT plug directly into it -- they connect via their NIC (in the server) to the leaf switch. The hierarchy is:

```
GPU chip → [PCIe] → NIC (on server board) → [OSFP transceiver] → [fiber/DAC] → Leaf switch → [optics] → Spine
```

### 6.4 Port Count and Bandwidth Summary

| System | Optics Location | Optics per Unit | Port Speed | GPU Count |
|---|---|---|---|---|
| DGX H100 SuperPOD (1 SU) | NIC (ConnectX-7) | 8 per node, 256 per SU | 400 Gb/s | 256 |
| GB200 NVL72 (1 rack) | NIC (ConnectX-7) | 72 per rack | 400 Gb/s | 72 |
| GB300 NVL72 (1 rack) | NIC (ConnectX-8) | 72 per rack | 800 Gb/s | 72 |
| NVL576 (8 racks) | NIC (CX-7/8) + ToR | ~5,184 x 1.6T equivalents | 800G-1.6T | 576 |
| TPU v4 (1 pod) | TPU board OSFP | 96 per rack, 6,144 total | 400 Gb/s | 4,096 |
| TPU v5p (1 pod) | TPU board OSFP | 96 per rack, ~13,440 total | 800 Gb/s | 8,960 |

---

## Sources

1. **NVIDIA DGX GB200 User Guide** -- Compute tray layout, component counts, NVLink configuration. [link](https://docs.nvidia.com/dgx/dgxgb200-user-guide/hardware.html)

2. **NVIDIA Multi-Node NVLink Systems Guide** -- GB200 NVL72 system architecture. [link](https://docs.nvidia.com/multi-node-nvlink-systems/multi-node-tuning-guide/system.html)

3. **Corning AEN -- NVL72 Backend Topology** -- NVLink copper cable counts and cable cartridge architecture. [link](https://www.corning.com/catalog/coc/documents/application-engineering-notes/LAN-3481-AEN.pdf)

4. **Google TPU v4 Paper (Jouppi et al., ISCA 2023)** -- Full OCS architecture, cube configuration, OSFP details. [link](https://arxiv.org/abs/2304.01433v2)

5. **Google Cloud TPU v5p Documentation (archived)** -- v5p pod scale, chip count, ICI bandwidth. [link](https://web.archive.org/web/20250428094028/https://cloud.google.com/tpu/docs/v5p)

6. **NVIDIA DGX SuperPOD Reference Architecture** -- Rail-optimized leaf-spine topology, NIC counts. [link](https://docs.nvidia.com/dgx-superpod/reference-architecture-scalable-infrastructure-h100/latest/network-fabrics.html)

7. **NVIDIA Press Release: Spectrum-X Photonics (March 2025)** -- CPO integration details, optical engine location. [link](https://investor.nvidia.com/news/press-release-details/2025/NVIDIA-Announces-Spectrum-X-Photonics-Co-Packaged-Optics-Networking-Switches-to-Scale-AI-Factories-to-Millions-of-GPUs/)

8. **NVIDIA Technical Blog: Spectrum-X Photonics** -- Power per port, packaging technology. [link](https://developer.nvidia.com/blog/scaling-power-efficient-ai-factories-with-nvidia-spectrum-x-ethernet-photonics/)

9. **OFC 2025 NVIDIA Copper Interconnect** -- NVLink 5 cable details, cable cartridge system. [link](https://cloud.tencent.cn/developer/article/2512355)

10. **TechInsights: Blackwell Pod Architecture** -- Copper vs. optical power savings, rack configuration. [link](https://www.techinsights.com/blog/blackwell-pod-brings-exascale-rack)

11. **NVIDIA Cable Management Guidelines** -- DAC, AOC, and optical transceiver cabling hierarchy. [link](https://docs.nvidia.com/networking/display/cablemanagfaq)

12. **Juniper Networks: Calculating Leaf-Spine in AI Fabrics** -- Rail-optimized architecture calculations. [link](https://www.juniper.net/documentation/us/en/software/jvd/jvd-ai-dc-apstra-nvidia-weka/calculating-leaf-spine-servers-gpu.html)
