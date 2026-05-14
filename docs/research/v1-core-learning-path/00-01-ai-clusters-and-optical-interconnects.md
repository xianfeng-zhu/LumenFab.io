# 00-01 Research Notes: AI Clusters And Optical Interconnects

## Scope

本文件服务于 v1 core learning path 的 00-01 章。目标不是投资叙事，而是为网站建立稳定、可解释、可复用的工程口径：

- AI 数据中心和 AI 集群为什么放大 east-west bandwidth、scale-up / scale-out、网络功耗、带宽密度压力。
- 高速铜互连为什么在更高 lane rate、距离、插损、ISI、均衡、SerDes power 上变难。
- 光互连相对铜解决什么，并新增哪些代价：光电转换、封装、测试、耦合、热管理、功耗。
- 400G / 800G / 1.6T / 3.2T 如何用“总速率 = 多条 lane 聚合”解释，避免市场化或路线图化表达。

## Source Index

| # | Title | URL | Source Type | Date |
|---|---|---|---|---|
| S01 | NVIDIA Spectrum-X Ethernet Platform for AI Networking | https://www.nvidia.com/en-us/networking/spectrumx/ | Vendor product / architecture page | accessed 2026-05-14 |
| S02 | NVIDIA NVLink and NVLink Switch | https://www.nvidia.com/en-us/data-center/nvlink/ | Vendor architecture page | accessed 2026-05-14 |
| S03 | NVIDIA DGX SuperPOD Cabling Data Centers Design Guide: Cable Technologies | https://docs.nvidia.com/dgx-superpod/design-guide-cabling-data-centers/latest/cable-tech.html | Vendor technical documentation | accessed 2026-05-14 |
| S04 | IEEE P802.3df 400 Gb/s and 800 Gb/s Ethernet Task Force | https://www.ieee802.org/3/df/ | Standards working-group page | approved 2024-02-16 |
| S05 | IEEE P802.3dj PAR: 1.6 Tb/s and 200/400/800 Gb/s Ethernet | https://mentor.ieee.org/802-ec/dcn/22/ec-22-0198-00-00EC-draft-ieee-p802-3dj-par.pdf | Standards project document | accessed 2026-05-14 |
| S06 | OIF Common Electrical I/O (CEI)-224G | https://www.oiforum.com/technical-work/hot-topics/common-electrical-i-o-cei-224g/ | Standards / implementation agreement overview | launched 2022, accessed 2026-05-14 |
| S07 | OIF Next Generation CEI-224G Framework | https://www.oiforum.com/wp-content/uploads/OIF-FD-CEI-224G-01.0.pdf | Standards framework PDF | accessed 2026-05-14 |
| S08 | OIF 448G Panel at Ethernet Alliance TEF 2025 | https://ethernetalliance.org/wp-content/uploads/2025/12/OIF_TEF_Panel2_2512.pdf | Standards / industry technical panel | 2025-12 |
| S09 | OIF Implementation Agreement for a 3.2Tb/s Co-Packaged (CPO) Module | https://www.oiforum.com/wp-content/uploads/OIF-Co-Packaging-3.2T-Module-01.0.pdf | Standards implementation agreement | 2023-03-29 |
| S10 | Ethernet Alliance 2026 Ethernet Roadmap | https://ethernetalliance.org/technology/ethernet-roadmap/ | Industry roadmap | accessed 2026-05-14 |
| S11 | Ethernet Alliance: Charting a Bold Future, 2024 Ethernet Roadmap | https://ethernetalliance.org/blog/2024/03/12/charting-a-bold-future-the-2024-ethernet-roadmap/ | Industry blog / roadmap explanation | 2024-03-12 |
| S12 | Ethernet Alliance / Synopsys: Enabling Next-Generation AI Applications with 800G/1.6T Ethernet | https://ethernetalliance.org/blog/2024/03/13/enabling-next-generation-ai-applications-with-800g-1-6t-ethernet/ | Industry technical blog | 2024-03-13 |
| S13 | Arista AI Networking Center | https://www.arista.com/ko/solutions/ai-networking | Vendor solution page | accessed 2026-05-14 |
| S14 | Arista 800G Transceivers and Cables Q&A | https://www.arista.com/assets/data/pdf/Arista-800G-Transceivers-and-Cables-FAQ.pdf | Vendor technical FAQ | accessed 2026-05-14 |
| S15 | Arista 7060X6 Series: Accelerated Data Center and AI Networking at 800G | https://www.arista.com/assets/data/pdf/Whitepapers/7060X6-Series-AI-Networking-at-800G-White-Paper.pdf | Vendor white paper | accessed 2026-05-14 |
| S16 | Marvell: A Deep Dive into the Copper and Optical Interconnects Weaving AI Clusters Together | https://www.marvell.com/blogs/copper-and-optical-interconnects-in-ai-cluster.html | Vendor technical blog | accessed 2026-05-14 |
| S17 | Marvell Announces 5nm Transmit-Only 800G PAM4 Optical DSP | https://investor.marvell.com/news-events/press-releases/detail/145/marvell-announces-industrys-first-5nm-transmit-only-800g-pam4-optical-dsp-for-ai-and-cloud-interconnects | Vendor press release | 2024-03-25 |
| S18 | Broadcom Advances Optical Connectivity for AI Infrastructure at OFC 2025 | https://investors.broadcom.com/news-releases/news-release-details/broadcom-advances-optical-connectivity-ai-infrastructure | Vendor press release | 2025-03-31 |
| S19 | Broadcom Optical Interconnects for AI | https://docs.broadcom.com/doc/optical-interconnects-for-ai-2024 | Vendor technical presentation / document | accessed 2026-05-14 |
| S20 | Cisco Announces Silicon One G300, Systems and Optics for AI Data Centers | https://newsroom.cisco.com/c/r/newsroom/en/us/a/y2026/m02/cisco-announces-new-silicon-one-g300.html | Vendor press release | 2026-02 |
| S21 | Optica: Co-Packaged Silicon-Photonics Based Optical Transceivers for High-Speed Datacenter Interconnects | https://www.optica.org/events/webinar/2022/10_october/co-packaged_silicon-photonics_based_optical_transc/ | Optica technical webinar page | 2022-10 |
| S22 | Optica JOCN: Toward Lower-Diameter Large-Scale HPC and Data Center Networks with Co-Packaged Optics | https://opg.optica.org/jocn/abstract.cfm?uri=jocn-13-1-A67 | Peer-reviewed journal abstract | 2020 |
| S23 | Optica Blog: Leaders Explore Emerging Challenges for Integrating Photonics and Electronics in Data Centers | https://www.optica.org/optica_blog/2021/april_2021/industry_leaders_explore_emerging_challenges_for_i/ | Optica industry workshop recap | 2021-04 |

## Stable Concepts For Website

### 1. AI 集群把数据中心网络从“访问网络”推向“计算 fabric”

- 传统云数据中心有大量 north-south 流量：用户、存储、服务入口与出口。
- AI 训练和分布式推理更像一个跨机柜的并行计算机。GPU / XPU 之间需要频繁交换梯度、激活值、KV cache、参数分片或 collective operation 结果。
- 因此 east-west bandwidth 变成核心约束。网络不只是“把包送到”，还要减少 job completion time，避免最慢链路拖慢整体计算。
- Scale-up 指在一个服务器、一个机柜或紧耦合域内，把多个加速器当成更大的单个计算资源使用。典型目标是低延迟、高带宽、强一致的 GPU-to-GPU 通信。
- Scale-out 指跨机柜、跨 pod、跨数据中心更大范围扩展计算节点。典型目标是开放互联、可路由、可运维、可容错、足够低的尾延迟。

### 2. 带宽密度和功耗是同一个问题的两面

- 端口从 400G 到 800G、1.6T，并不只是“速度翻倍”。同样 1RU / 2RU 面板空间内需要承载更多 Tbps。
- 更高带宽密度带来更高 I/O 密度、更多高速 lane、更紧密的连接器和线缆、更强散热需求。
- 网络功耗不能只看交换 ASIC。SerDes、retimer、DSP、光模块、主动电缆、冷却与面板热设计都会进入系统级功耗。
- 网站可用一句话：AI 集群让“每比特功耗”和“每毫米/每 RU 带宽”成为与总带宽同等重要的指标。

### 3. 铜互连的核心挑战不是“不能传”，而是传得越来越贵

- 铜在很短距离内仍然便宜、可靠、低延迟，仍是机箱内、机柜内、短跳线的主力。
- 但 lane rate 提高后，单位时间间隔变短，铜通道的导体损耗、介质损耗、反射、串扰、skew、ISI 都更难控制。
- 插损不是唯一指标。回损、近端/远端串扰、连接器不连续性、封装与 PCB 材料都会影响眼图和误码。
- 均衡、FEC、retimer、redriver、DSP 可以延长铜链路，但代价是功耗、延迟、热、成本、测试复杂度。
- 因此“铜墙”更准确的表述是：在更高速率和更长距离下，铜链路需要越来越多主动补偿，系统代价上升。

### 4. 光互连解决距离、密度和频率相关损耗，但引入系统工程代价

- 光纤传输本身对高速信号的频率相关损耗和串扰问题更轻，适合跨机柜、跨机房、跨数据中心。
- 光模块、LPO、NPO、CPO 等方案的核心动机之一，是缩短高速电连接距离，让电信号尽早变成光信号。
- 但光不是“免费升级”。它增加激光器、调制器、探测器、TIA/driver、DSP 或线性接口、耦合结构、封装、测试、清洁度、可靠性、现场可维护性问题。
- 对网站解释：光解决的是电通道的 reach / loss / density 压力；它付出的代价是光电转换和光电子封装链条。

### 5. 400G / 800G / 1.6T / 3.2T 应解释为“系统总速率”，不是单根线的魔法速度

- 400G、800G、1.6T、3.2T 通常指端口、模块、链路或接口总吞吐。
- 总速率由多条 electrical lane 或 optical lane 聚合而来。例如 800G 可由 8×100G 或 4×200G class lane 实现，具体取决于标准、模块、PMD 和时代。
- 1.6T 常见解释口径是 8×200G 或 16×100G class lane。3.2T 可解释为更高 lane rate 或更多 lane 的组合，CPO 场景中还可表现为一个 co-packaged optical module 的总容量。
- 避免写成“800G 一定是某一种 lane 数”。应写成：每代 Ethernet 都在总速率、lane rate、lane 数、调制、FEC、reach、功耗之间折中。

## Source Notes

### S01. NVIDIA Spectrum-X Ethernet Platform for AI Networking

- URL: https://www.nvidia.com/en-us/networking/spectrumx/
- 来源类型: NVIDIA vendor architecture / product page
- 日期: accessed 2026-05-14
- 可用于网站哪一页: 00-01 AI 集群为何需要新互连；scale-up / scale-out 概念页。
- 要点:
  - NVIDIA 将 Spectrum-X 定位为面向 AI compute fabrics 的 Ethernet 平台，强调 GPU-to-GPU 通信、有效带宽和性能隔离。
  - 页面明确区分 rack-scale 铜连接与 front-panel optical connectivity 对更大 GPU domain 的 scale-out 作用。
  - Multiplane / two-tier topology 可作为解释 AI fabric 扩展方式的例子，但不应把具体 GPU 数当成长期事实。
  - 该资料适合说明 AI 网络已经从普通数据中心互联变成针对大规模并行计算优化的 fabric。
- 谨慎点/时效风险:
  - 产品名、GPU 数、拓扑能力、性能倍率属于 vendor claim，更新快。网站正文只抽象成“短距铜 + 跨域光 + 多平面扩展”的概念。

### S02. NVIDIA NVLink and NVLink Switch

- URL: https://www.nvidia.com/en-us/data-center/nvlink/
- 来源类型: NVIDIA vendor architecture page
- 日期: accessed 2026-05-14
- 可用于网站哪一页: 00-01 scale-up vs scale-out；AI rack-scale architecture。
- 要点:
  - NVLink / NVLink Switch 是解释 scale-up fabric 的好例子：高带宽、低延迟、GPU-to-GPU、rack-scale。
  - NVIDIA 将 NVLink Switch 描述为跨节点构建高带宽 multi-node GPU cluster 的方式。
  - “all-to-all”“collective operations”“in-network reduction”可用于说明 AI workload 对网络行为的特殊要求。
  - 可帮助读者理解：AI 集群里并非所有连接都等价，有紧耦合 scale-up 域，也有 Ethernet / InfiniBand scale-out 域。
- 谨慎点/时效风险:
  - 具体带宽、GPU 数、产品代际属于动态规格。用于概念，不用于路线图。

### S03. NVIDIA DGX SuperPOD Cabling Design Guide: Cable Technologies

- URL: https://docs.nvidia.com/dgx-superpod/design-guide-cabling-data-centers/latest/cable-tech.html
- 来源类型: NVIDIA technical documentation
- 日期: accessed 2026-05-14
- 可用于网站哪一页: 铜与光的基础取舍页。
- 要点:
  - NVIDIA 文档将铜线优势概括为低成本、高可靠性。
  - 其限制包括高速率下 reach 短、线径更大、影响高密度布线和气流。
  - 文档明确指出铜线因 reach 短主要用于 rack 内。
  - 这适合做初学者表格：Copper = cheap / reliable / short reach；Fiber = longer reach / easier high-density routing / more optical cost。
- 谨慎点/时效风险:
  - 面向 NVIDIA DGX SuperPOD / InfiniBand 语境，不应泛化成所有数据中心唯一设计规则。

### S04. IEEE P802.3df 400 Gb/s and 800 Gb/s Ethernet Task Force

- URL: https://www.ieee802.org/3/df/
- 来源类型: IEEE standards working-group page
- 日期: approved 2024-02-16
- 可用于网站哪一页: 400G / 800G / Ethernet standards learning page。
- 要点:
  - IEEE P802.3df 的工作已完成，并在 2024-02-16 获 IEEE-SA Standards Board 批准为 IEEE Std 802.3df-2024。
  - 这是解释 800GbE 已经标准化的高可信来源。
  - 可用于建立“800G 是 Ethernet 标准演进的一部分，不是厂商营销词”的口径。
  - 与 S05 配合，可解释 800G 标准化工作和 1.6T / 200G lane 相关工作之间的分工。
- 谨慎点/时效风险:
  - IEEE 页面只证明标准状态，不解释市场部署规模。

### S05. IEEE P802.3dj PAR: 1.6 Tb/s and 200/400/800 Gb/s Ethernet

- URL: https://mentor.ieee.org/802-ec/dcn/22/ec-22-0198-00-00EC-draft-ieee-p802-3dj-par.pdf
- 来源类型: IEEE project authorization request
- 日期: accessed 2026-05-14
- 可用于网站哪一页: 1.6T / lane-rate learning page。
- 要点:
  - P802.3dj 项目范围包括 1.6 Tb/s MAC 参数，以及 200G / 400G / 800G / 1.6T PHY 和管理参数。
  - 项目覆盖 copper、multi-mode fiber、single-mode fiber PMD。
  - 文件将需求归因于 cloud-scale data centers、internet exchanges、co-location、content delivery 等高密度互联场景。
  - 可用于解释 1.6T 不只是光模块问题，也包括电接口、铜缆、背板、光纤 PHY 的标准化。
- 谨慎点/时效风险:
  - PAR 是项目授权文件，不等同最终标准文本。正式条款可能变化。

### S06. OIF Common Electrical I/O (CEI)-224G

- URL: https://www.oiforum.com/technical-work/hot-topics/common-electrical-i-o-cei-224g/
- 来源类型: OIF implementation agreement overview
- 日期: launched 2022, accessed 2026-05-14
- 可用于网站哪一页: SerDes / lane rate / electrical interface learning page。
- 要点:
  - OIF CEI-224G 覆盖 XSR、VSR、MR、LR 等不同电接口 reach classes。
  - VSR 支持 chip-to-module，可服务 200G、400G、800G、1600G optical modules。
  - MR 提到 144-232Gbps signaling 和最高 500 mm PCB / connector 级别应用。
  - 这可用于说明 lane rate 提高后，行业会按应用距离拆分电接口规范，而不是一条铜链路打天下。
- 谨慎点/时效风险:
  - OIF CEI 是实现协议和互操作范围，不代表所有产品已经量产。

### S07. OIF Next Generation CEI-224G Framework

- URL: https://www.oiforum.com/wp-content/uploads/OIF-FD-CEI-224G-01.0.pdf
- 来源类型: OIF framework PDF
- 日期: accessed 2026-05-14
- 可用于网站哪一页: 铜互连为什么变难；SerDes power 与均衡。
- 要点:
  - 更高速率缩短 unit interval，反射和串扰噪声更难缓解。
  - I/O 密度提升会加重端口邻近带来的串扰。
  - OIF 明确把 power consumption 视为 network operators 的关键参数。
  - 文档强调 repeaters 和高性能 equalization 会带来 latency 与 power trade-off。
  - 材料、PCB、连接器、封装、回损等都进入通道设计，不只是插损。
- 谨慎点/时效风险:
  - 这是 framework，不是某个产品测试结果。适合作为稳定工程逻辑来源。

### S08. OIF 448G Panel at Ethernet Alliance TEF 2025

- URL: https://ethernetalliance.org/wp-content/uploads/2025/12/OIF_TEF_Panel2_2512.pdf
- 来源类型: OIF / Ethernet Alliance technical panel deck
- 日期: 2025-12
- 可用于网站哪一页: 3.2T / 下一代 lane-rate caution；铜链路压力页。
- 要点:
  - Deck 将当前 scale-up primary interconnect 描述为铜为主，并展示下一代可能引入 row 内光互连。
  - 对比 56G、112G、224G、448G CEI，说明 lane rate 提升与 switch capacity、Ethernet rate 的同步关系。
  - 提到 448G 下 comparable reach 很难，Nyquist frequency 提高使带宽受限的铜互连更困难。
  - 通道劣化来自导体/介质损耗、反射、串扰、skew、ISI，I/O 密度进一步加重串扰。
  - 可用于谨慎解释 3.2T 与 448G lane 的潜在关系。
- 谨慎点/时效风险:
  - 448G 和 3.2T 信息具有路线图属性。网站正文应标注“emerging / under development”，不要写成既成事实。

### S09. OIF 3.2Tb/s Co-Packaged (CPO) Module IA

- URL: https://www.oiforum.com/wp-content/uploads/OIF-Co-Packaging-3.2T-Module-01.0.pdf
- 来源类型: OIF implementation agreement
- 日期: 2023-03-29
- 可用于网站哪一页: CPO / optical packaging / 3.2T 概念页。
- 要点:
  - OIF 定义了 3.2Tb/s co-packaged optical module 的实现协议。
  - 文件体现 CPO 不只是“把光放进芯片旁边”，还包括 electrical host interface、laser source、mechanical footprint、power sequencing、test points、pigtail / connector 等系统约束。
  - 对 3.2T 的解释可用作“co-packaged module 总容量”的例子。
  - 测试点、机械尺寸、连接器、寿命 margin 等内容可支持“光互连新增封装与测试复杂度”的论点。
- 谨慎点/时效风险:
  - CPO IA 不代表 CPO 已经大规模替代 pluggable optics。用于解释工程对象，不用于部署判断。

### S10. Ethernet Alliance 2026 Ethernet Roadmap

- URL: https://ethernetalliance.org/technology/ethernet-roadmap/
- 来源类型: Industry roadmap
- 日期: accessed 2026-05-14
- 可用于网站哪一页: Ethernet speed evolution overview。
- 要点:
  - 2026 roadmap 明确提到 AI-scale speed jumps with 100G-800G interconnects and emerging 1.6Tb/s Ethernet。
  - 也提到 next-gen optics、LPO，以及更高效的 copper and fiber designs。
  - Roadmap 把 better bandwidth-per-watt、cooling、advanced power management 放在网络演进的核心。
  - 适合解释为什么学习路径中把 Ethernet rates、光互连和功耗放在同一章。
- 谨慎点/时效风险:
  - Roadmap 是行业方向图，具有预测性。不要把“emerging”写成“已全面普及”。

### S11. Ethernet Alliance: 2024 Ethernet Roadmap Blog

- URL: https://ethernetalliance.org/blog/2024/03/12/charting-a-bold-future-the-2024-ethernet-roadmap/
- 来源类型: Industry blog / roadmap explanation
- 日期: 2024-03-12
- 可用于网站哪一页: AI/ML drives Ethernet speeds; copper + fiber blend。
- 要点:
  - 文章称 AI/ML 是推动 Ethernet 跨过 800G threshold 的 bandwidth-hungry application。
  - 文章提到 AI-driven data centers 正演进为 copper and fiber 混合互连。
  - 文章把 interconnect options 与 power efficiency 放在 Ethernet 演进中。
  - 可用于网站 opening narrative：不是“光替代铜”，而是“铜和光在不同距离、功耗、密度边界上重新分工”。
- 谨慎点/时效风险:
  - Blog 语言偏行业传播。用于辅助说明，不作为唯一技术依据。

### S12. Ethernet Alliance / Synopsys: 800G/1.6T Ethernet for AI

- URL: https://ethernetalliance.org/blog/2024/03/13/enabling-next-generation-ai-applications-with-800g-1-6t-ethernet/
- 来源类型: Industry technical blog
- 日期: 2024-03-13
- 可用于网站哪一页: Why 800G / 1.6T matters for AI clusters。
- 要点:
  - 文章解释 cluster-scale computing：多个机柜互连后作为单个 compute unit。
  - 将更快 interconnect rate 与 compute racks 的低延迟连接关联起来。
  - 提及 IEEE P802.3df 和 P802.3dj 分别服务 800G 与 1.6T 相关工作。
  - 可作为初学者解释“为什么 Ethernet rate 继续提升”的入门来源。
- 谨慎点/时效风险:
  - 含 LLM 参数增长预测，容易过时。网站应保留 cluster-scale logic，避免引用具体增长率。

### S13. Arista AI Networking Center

- URL: https://www.arista.com/ko/solutions/ai-networking
- 来源类型: Vendor solution page
- 日期: accessed 2026-05-14
- 可用于网站哪一页: AI network requirements; high-bandwidth lossless low-latency。
- 要点:
  - Arista 将现代 AI 应用的网络需求概括为 high-bandwidth、lossless、low-latency、scalable、multi-tenant。
  - 页面提到数百到数千 accelerators，速率从 100G / 400G 演进到 800G and beyond。
  - 800G AI Spine 的高 radix 和高总吞吐可用于说明带宽密度。
  - 可与 NVIDIA 资料互补，避免只用单厂商视角。
- 谨慎点/时效风险:
  - 产品吞吐、端口数会更新。正文只保留 requirements 和 high-radix fabric 概念。

### S14. Arista 800G Transceivers and Cables Q&A

- URL: https://www.arista.com/assets/data/pdf/Arista-800G-Transceivers-and-Cables-FAQ.pdf
- 来源类型: Vendor technical FAQ
- 日期: accessed 2026-05-14
- 可用于网站哪一页: 800G lane / optics reach / bandwidth density examples。
- 要点:
  - FAQ 用 32×400G 到 32×800G 的系统对比说明每 RU 带宽密度翻倍。
  - 800G port 可支持 2×400GE 或 8×100GE 等 breakout / aggregation 解释。
  - FAQ 列出 50m MMF、500m SMF、2km、10km 等不同 optical reach，便于做“不同 PMD 面向不同距离”的示意。
  - 可支持“800G 是端口总速率，可拆分成更小速率服务”的教学口径。
- 谨慎点/时效风险:
  - 具体 SKU 和 reach 组合属于 Arista 产品目录，网站可抽象为“800G families support multiple reaches and breakouts”。

### S15. Arista 7060X6 Series: AI Networking at 800G

- URL: https://www.arista.com/assets/data/pdf/Whitepapers/7060X6-Series-AI-Networking-at-800G-White-Paper.pdf
- 来源类型: Vendor white paper
- 日期: accessed 2026-05-14
- 可用于网站哪一页: AI workload traffic pattern; lossless RDMA fabric; LPO power。
- 要点:
  - 白皮书说明 AI 训练需要多种 parallelism，节点之间要共享中间结果，整体速度会被最慢任务拖累。
  - 网络视角的关键是处理同步、低熵、突发流量，并避免 link contention 和 congestion。
  - RDMA 传输链路中的最低带宽会限制整体数据移动。
  - 白皮书称 LPO 可降低系统功耗，适合说明光模块 power optimization 的方向。
- 谨慎点/时效风险:
  - LPO 节电比例是特定产品 / 条件下的 vendor claim。用于说明趋势，不写成通用保证。

### S16. Marvell: Copper and Optical Interconnects in AI Clusters

- URL: https://www.marvell.com/blogs/copper-and-optical-interconnects-in-ai-cluster.html
- 来源类型: Vendor technical blog
- 日期: accessed 2026-05-14
- 可用于网站哪一页: Copper vs optics decision tree; 800G / 1.6T / 3.2T overview。
- 要点:
  - Marvell 明确指出 passive copper 仍是云数据中心 rack 内 server-to-switch 和 AI cluster xPU-to-xPU 短距连接的常用技术。
  - 文章给出短距铜的核心优势：便宜、可靠、适合 5m 以下。
  - 同时说明从 50G 到 100G connection speeds 后，普通 passive cable 在这些短距离上也变得困难。
  - 文章提到 1.6T PAM DSP、200G electrical and optical lanes，以及 3.2T work underway，可用于 lane-rate 演进背景。
- 谨慎点/时效风险:
  - “5m 以下”“100G 后变难”等为厂商表述，适合作为经验口径，不应变成绝对物理边界。

### S17. Marvell 800G PAM4 Optical DSP Press Release

- URL: https://investor.marvell.com/news-events/press-releases/detail/145/marvell-announces-industrys-first-5nm-transmit-only-800g-pam4-optical-dsp-for-ai-and-cloud-interconnects
- 来源类型: Vendor press release
- 日期: 2024-03-25
- 可用于网站哪一页: Optical DSP / retimed optics / module power tradeoffs。
- 要点:
  - Press release 将 AI compute demand 与更高带宽 optical modules 联系起来。
  - 提到 tens of thousands of connections 级别的 AI clusters，使光互连效率变得关键。
  - 介绍 transmit-retimed optical module 思路，可用于说明“光模块内部也有 DSP / retiming choices”。
  - 该资料适合解释：光互连不是单一方案，DSP-retimed、linear、co-packaged 都是在 power / reach / interoperability 间取舍。
- 谨慎点/时效风险:
  - 省电比例和“industry first”是营销型 claim。只抽象技术方向。

### S18. Broadcom Advances Optical Connectivity for AI Infrastructure at OFC 2025

- URL: https://investors.broadcom.com/news-releases/news-release-details/broadcom-advances-optical-connectivity-ai-infrastructure
- 来源类型: Vendor press release
- 日期: 2025-03-31
- 可用于网站哪一页: Optical interconnect portfolio; CPO / SerDes / DSP / PCIe over optics。
- 要点:
  - Broadcom 将 AI workloads 增长与 higher bandwidth、lower latency、more power-efficient optical interconnects 联系起来。
  - 资料覆盖 CPO、200G/lane DSP and SerDes、400G optics、PCIe Gen6 over optics、LPO、AEC 等多个互连层次。
  - 这证明行业不是在“铜 vs 光”二选一，而是在短距铜、active electrical、pluggable optics、linear optics、CPO 之间组合。
  - XPU-CPO 和 PCIe over optics 可作为“光可能进入 scale-up fabric”的路线图例子。
- 谨慎点/时效风险:
  - OFC demo / roadmap 属性强。不要把展示技术写成已广泛部署。

### S19. Broadcom Optical Interconnects for AI

- URL: https://docs.broadcom.com/doc/optical-interconnects-for-ai-2024
- 来源类型: Vendor technical presentation / document
- 日期: accessed 2026-05-14
- 可用于网站哪一页: CPO motivation; eliminating electrical interconnect power。
- 要点:
  - 资料围绕 AI optical interconnects 和 CPO 展开，适合说明为什么业界希望把 optics 靠近 switch / compute silicon。
  - 核心逻辑是减少高速电通道长度，从而降低电互连损耗和补偿功耗。
  - 可用于解释“pluggable optics 仍然需要 ASIC 到前面板模块的一段高速电连接”。
  - CPO 的网站表述应聚焦“减少 electrical reach”，而不是“光本身永远低功耗”。
- 谨慎点/时效风险:
  - 需要注意 vendor framing。与 OIF CPO IA、Optica 来源交叉验证后使用。

### S20. Cisco Silicon One G300 / 800G LPO Announcement

- URL: https://newsroom.cisco.com/c/r/newsroom/en/us/a/y2026/m02/cisco-announces-new-silicon-one-g300.html
- 来源类型: Vendor press release
- 日期: 2026-02
- 可用于网站哪一页: LPO / AI scale-out power efficiency。
- 要点:
  - Cisco 将 800G Linear Pluggable Optics 用于 AI scale-out networks 的效率提升。
  - 资料可说明 LPO 的基本思路：减少或移除模块侧 retiming / DSP，利用 host SerDes 驱动 optical engine。
  - 文中提到 800G / 1.6T port density 和 51.2T / 102.4T switch capacity，可用于带宽密度背景。
  - 适合作为“光互连内部也有 power-optimized variants”的例子。
- 谨慎点/时效风险:
  - 2026 产品公告很新，性能和省电数字依赖产品条件。页面只写概念，不写保证值。

### S21. Optica: Co-Packaged Silicon-Photonics Transceivers Webinar

- URL: https://www.optica.org/events/webinar/2022/10_october/co-packaged_silicon-photonics_based_optical_transc/
- 来源类型: Optica technical webinar page
- 日期: 2022-10
- 可用于网站哪一页: Why optical I/O; CPO basics。
- 要点:
  - Optica 页面明确把 silicon photonics optical I/O 描述为绕过数据中心电互连 reach、bandwidth、power limitations 的候选方案。
  - 说明当前高容量产品多为 pluggable modules，由离散 electronics 和 photonics ICs 组成。
  - CPO 将光电收发器与 XPU 同封装或近封装，可把高速电连接缩短到几厘米。
  - 页面提到 energy efficiency 和 shoreline bandwidth density，是解释 CPO 的核心术语。
- 谨慎点/时效风险:
  - Webinar 页面是研究/教育资料，不是标准或量产说明。

### S22. Optica JOCN: Lower-Diameter HPC and Data Center Networks with CPO

- URL: https://opg.optica.org/jocn/abstract.cfm?uri=jocn-13-1-A67
- 来源类型: Peer-reviewed journal abstract
- 日期: 2020
- 可用于网站哪一页: Why bandwidth density changes topology。
- 要点:
  - 论文从网络架构角度分析 CPO 的高 escape bandwidth / high radix switch 价值。
  - 模拟显示 CPO 可帮助更低直径、更少层数的数据中心 / HPC 网络。
  - 更少 hop 意味着更少 SerDes lane、switch buffer 与竞争机会，从而可能降低能耗和包延迟。
  - 适合支持“光互连的价值不只在单条链路，也在网络拓扑和交换层级”。
- 谨慎点/时效风险:
  - 论文是模拟与架构研究，不是部署统计。不要把数值收益直接当成产品承诺。

### S23. Optica Blog: Integrating Photonics and Electronics in Data Centers

- URL: https://www.optica.org/optica_blog/2021/april_2021/industry_leaders_explore_emerging_challenges_for_i/
- 来源类型: Optica industry workshop recap
- 日期: 2021-04
- 可用于网站哪一页: Packaging, shoreline density, power-per-bit challenges。
- 要点:
  - Workshop 讨论 photonics 与 electronics 的 co-packaging，参与者包括 Nvidia、Microsoft、Intel、Broadcom、Tencent、Cisco。
  - 资料强调 laser source 放在 package 内还是外部“optical power supply”是重要架构问题。
  - Shoreline density 被定义为芯片边缘每毫米可承载的带宽。
  - AI specialty processors 被识别为最需要高密度高速 CPO 的平台之一。
- 谨慎点/时效风险:
  - 2021 资料较早，适合讲长期工程问题，不适合讲当前产品状态。

## Cautions

- 区分稳定事实与动态路线图:
  - 稳定: 高速电互连随 lane rate 提升面临更短 UI、更高频损耗、串扰、反射、ISI、均衡功耗等问题。
  - 稳定: 光互连适合更长距离和更高带宽密度，但需要光电转换、封装、耦合、测试和热管理。
  - 动态: 具体 GPU 数、端口数、switch capacity、某厂商省电比例、CPO 部署时间、1.6T / 3.2T 产品化节奏。
- 不要写“光一定比铜低功耗”。更准确:
  - 在较长距离和高 lane rate 下，光可避免长高速电通道的补偿功耗。
  - 但光模块本身有 laser、driver、TIA、DSP / retimer、thermal budget。
- 不要写“铜已经被淘汰”。更准确:
  - 铜仍适合短距、低成本、低延迟连接。
  - 随速率和距离上升，铜需要主动补偿或改用光，边界随材料、连接器、SerDes 和调制技术变化。
- 不要把 400G / 800G / 1.6T / 3.2T 当成单一物理实现:
  - 它们是系统或端口总速率。
  - 同一总速率可由不同 lane rate、lane 数、调制方式、reach class 和 PMD 实现。
- 市场/投资叙事排除:
  - 不讨论厂商份额、股票、capex 预测、出货量预测。
  - Vendor claims 只用于技术方向，不用于证明市场赢家。
- 2026 以后信息需复核:
  - IEEE P802.3dj 最终状态。
  - 1.6T / 3.2T Ethernet 和 optical module 实际部署。
  - LPO / CPO / NPO 的真实量产、可维护性和互操作性。

## Candidate Page Mapping

| Website Page / Section | Use These Sources | Recommended Message |
|---|---|---|
| 00-01 opening: Why AI clusters stress interconnects | S01, S02, S12, S13, S15 | AI workloads turn the network into a compute fabric. East-west traffic and collective operations make bandwidth, latency and tail behavior part of model performance. |
| Scale-up vs scale-out explainer | S01, S02, S08, S18 | Scale-up is tight accelerator-to-accelerator communication; scale-out connects many racks or pods. Copper dominates short tight domains today; optical expands reach and fabric size. |
| Copper interconnect limitations | S03, S06, S07, S08, S16 | Copper remains excellent at short reach, but higher lane rates shrink timing margins and increase loss, crosstalk, ISI and compensation power. |
| Optical interconnect value and costs | S09, S18, S19, S21, S22, S23 | Optics reduces high-speed electrical reach and improves distance/density, but adds lasers, photonics, coupling, packaging, test and serviceability challenges. |
| 400G / 800G / 1.6T / 3.2T explanation | S04, S05, S09, S10, S11, S14, S16 | These are aggregate link/module/port rates. Explain by lane aggregation and standard generations, not by a single physical wire. |
| Bandwidth density and power-per-bit | S10, S14, S15, S20, S21, S23 | AI fabrics are constrained by Tbps per RU, Tbps per package edge and watts per bit, not only by headline port speed. |
| CPO / LPO / optical packaging future-looking section | S09, S18, S20, S21, S22, S23 | Present as emerging packaging strategies to shorten electrical paths. Mark roadmap and deployment status as time-sensitive. |

