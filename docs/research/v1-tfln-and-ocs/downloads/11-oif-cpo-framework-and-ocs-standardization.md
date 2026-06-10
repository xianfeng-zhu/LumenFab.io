# OIF Co-Packaged Optics Framework and OCS Standardization

**Sources:**
- OIF Co-Packaging Framework Document (OIF-Co-Packaging-FD-01.0): https://www.oiforum.com/wp-content/uploads/OIF-Co-Packaging-FD-01.0.pdf
- OIF 3.2T CPO Module Implementation Agreement (April 2023)
- SemiEngineering: https://semiengineering.com/new-standards-push-co-packaged-optics/
- OCP OCS subproject (July 2025)
**Type:** Standards document summary
**Label:** Standard-S1

## OIF Co-Packaging Framework

### Document: OIF-Co-Packaging-FD-01.0
- Defines application spaces, technology considerations, and use cases for CPO
- Application scope: Ethernet switching, HPC/AI, disaggregated memory, CXL interconnects

### 3.2T Co-Packaged Module IA (April 2023)
- Industry's first CPO Implementation Agreement
- Key specifications:
  - 100G electrical lanes (backward compatible with 50G)
  - ~140G/mm bandwidth edge-density
  - Enables 51.2 Tbps aggregate bandwidth switches
  - 8x400G optical interface options (FR4 and DR4)
  - 32xCEI-112G-XSR host interface (OIF's extra-short-reach standard)

### Three Interlinked Projects
1. **CPO Framework IA** — overall architecture and use cases
2. **3.2T Co-Packaged Module IA** — module implementation spec
3. **External Laser SFP (ELSFP) IA** — pluggable external laser sources

### Electrical Interface Options
1. **Re-timed** — with CDR/DSP in the engine
2. **Linear Amplified** — no CDR/DSP, lower power
3. **Half-retimed** — hybrid approach
4. **Direct Drive** — simplest engine, most ASIC capability needed

### Power Efficiency Targets
| Application | Power Target | Engine Type |
|---|---|---|
| Ethernet Switching | ≤15 pJ/b | CoPkg 32x106G |
| HPC/AI/ML | ≤15 pJ/b | CoPkg 32x106G |
| Disaggregation (Memory) | 5-10 pJ/b | CoPkg 32x32G |
| CXL interconnect | 5-10 pJ/b | CoPkg 32x32G |

## OCP OCS Subproject (July 2025)

- **Formation:** Open Compute Project (OCP) established an OCS subproject
- **Founding members:** Google, Microsoft, NVIDIA, Lumentum, Coherent
- **Goal:** Standardize OCS hardware interfaces, control protocols, and management for multi-vendor interoperability
- **Significance:** First industry-wide standardization effort for OCS

## CPO + OCS Convergence Timeline

According to industry analysis (Tencent Cloud, 2025):

- **2026-2028:** CPO enters scaled commercial deployment
  - Integrates optical engines directly onto GPU/TPU substrates
  - Cuts SerDes power by "30% or more"
- **Target architecture:** All-CPO compute units + one OCS switching layer + orchestration scheduling control layer
- **NVIDIA OCP data:** Introducing OCS in the CPO era could reduce network energy an additional 30-40%

## Relevance to LumenFab

- OIF CPO framework provides the packaging/interface standards context for TFLN-based OCS
- OCP OCS subproject shows industry momentum toward OCS standardization
- CPO+OCS convergence creates the architectural narrative for TFLN's role in future data centers
- Standards compliance is important for the LumenFab product positioning
