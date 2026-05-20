# 02 Research Notes: Optical Link Tx/Rx And Transceiver

## Scope

本文件服务于 v1-core-learning-path 的第 02 章入门内容。目标是把一条数据中心强度调制/直接探测（IM/DD）光链路讲清楚：

`electrical input -> DSP/CDR/driver -> laser/modulator/coupling/fiber -> PD/TIA/CDR/DSP -> electrical output`

覆盖范围：

- Tx 与 Rx 的职责和瓶颈差异。
- lane / channel / wavelength 的初学者解释。
- pluggable transceiver 内部模块：optics、analog electronics、DSP/retimer、power、control、firmware、packaging。
- DR / FR / LR、PSM / WDM 的基础概念。只支撑 02 章，不展开到后续 11/12 章深水区。
- 后续 3D/图示资料线索：Tx/Rx block diagram、fiber-to-chip coupling、module exploded view、PSM vs WDM fiber topology。

调研时间：accessed 2026-05-14。

## Source Index

| # | Source | Type | Date |
|---|---|---|---|
| S01 | OFC Short Course: Circuits and Equalization Methods for Coherent and Direct Detection Optical Links | conference course / professional education | accessed 2026-05-14 |
| S02 | 100G Lambda MSA homepage and releases | industry MSA | 2020 releases; accessed 2026-05-14 |
| S03 | 100G Lambda MSA 400G-FR4 Technical Specification Rev 2.0 | MSA technical specification | 2018-09-18 |
| S04 | Cisco: 400G QSFP-400G-DR4 Transceiver Modules Data Sheet | vendor data sheet | accessed 2026-05-14 |
| S05 | Cisco Blog: 100G Lambda MSA Group Adds New Members and Releases Updated Specifications | vendor technical blog | accessed 2026-05-14 |
| S06 | Arista / CommScope: Propel Cabling Solutions for Arista 400G and 800G | vendor cabling guide | accessed 2026-05-14 |
| S07 | Arista: 800G Transceivers and Cables Q&A | vendor technical FAQ | accessed 2026-05-14 |
| S08 | Juniper: Know Your 400G Transceiver | vendor documentation | accessed 2026-05-14 |
| S09 | OIF: Common Management Interface Specification (CMIS) page | standards / IA project page | accessed 2026-05-14 |
| S10 | OIF: Common Electrical I/O CEI 5.1 Implementation Agreement | standards / electrical IA | accessed 2026-05-14 |
| S11 | QSFP-DD MSA Specification page | form-factor MSA | accessed 2026-05-14 |
| S12 | Broadcom BCM87416 Product Brief | semiconductor product brief | 2023-02-24 |
| S13 | Marvell PAM4 Optical DSPs page | semiconductor product / architecture overview | accessed 2026-05-14 |
| S14 | Marvell Spica Gen2 PAM4 DSP product brief | semiconductor product brief | accessed 2026-05-14 |
| S15 | Coherent: 100G Transimpedance Amplifiers for 400G/800G Optical Transceivers | component vendor release | 2025-07-24 |
| S16 | Lumentum: EMLs product page | component vendor page | accessed 2026-05-14 |
| S17 | Intel Silicon Photonics page | silicon photonics vendor overview | accessed 2026-05-14 |
| S18 | Analog Devices / Maxim: How to Power Your QSFP-DD Optical Transceiver | power design note | accessed 2026-05-14 |
| S19 | IEEE 802.3 400 Gb/s Ethernet Study Group: 400G Optical Transceivers | IEEE study-group presentation | 2013-11 |
| S20 | IEEE 802.3bs contribution: PAM-4 Four Wavelength 400Gb/s Solution on Duplex SMF | IEEE study-group contribution | 2014-09-08 |

## Stable Concepts For Website

### 1. A Data Center Optical Link Is A Transducer Chain

第 02 章可以把链路讲成“电信号到光信号，再回到电信号”的连续约束链：

1. Switch ASIC / NIC 输出高速 electrical lanes。
2. 模块内 DSP / retimer / CDR 做时钟恢复、均衡、gearbox、FEC 相关支持或诊断。
3. Driver 把电信号推到 laser / modulator。
4. 光源或调制器把比特编码为光强变化；耦合结构把光送入 fiber。
5. Fiber channel 引入插损、反射、色散、偏振相关效应和连接器损耗。
6. Receiver 用 PD 把光功率变成电流。
7. TIA / limiting or linear amplifier 把微弱电流变成可处理电压。
8. CDR / DSP / equalizer 从受损波形中恢复 clock 和 symbols，输出 electrical lanes。

稳定点：这个框架长期成立。具体 DSP 是否在模块内、是否 linear pluggable、是否 co-packaged optics，是路线图层面的变化。

### 2. Tx And Rx Have Different Bottlenecks

Tx 侧常见瓶颈：

- Driver 和 modulator / laser 带宽不足，会造成高频损失、眼图闭合、TDECQ 变差。
- Laser / EML 的输出功率、线性度、消光比、chirp、温度稳定性影响 reach 和 yield。
- Coupling loss 和封装对准难度影响成本与可靠性。
- 多 wavelength WDM Tx 需要波长控制、MUX、可能的热控制，封装复杂度高于单波长并行方案。

Rx 侧常见瓶颈：

- PD + TIA 的输入噪声、带宽、线性度决定灵敏度和误码裕度。
- Rx 需要在低光功率、反射、串扰、ISI、接收动态范围变化下恢复信号。
- DSP/DFE/CTLE 可以补偿部分损伤，但会带来功耗、延迟和调试复杂度。
- Rx sensitivity 不是单看“收到多少 dBm”；还要看发射端质量、SECQ/TDECQ、链路插损、均衡能力和 FEC 门限。

### 3. Lane / Channel / Wavelength

建议网站采用以下入门解释：

- `lane`：一条并行的数据通道。可以是 electrical lane，也可以是 optical lane。必须说明上下文。
- `electrical lane`：host ASIC 到模块之间的高速差分电通道。例如 400GAUI-8 是 8 条 50G PAM4 electrical lanes；400GAUI-4 是 4 条 100G PAM4 electrical lanes。
- `optical lane`：光侧承载一份数据的路径。可能是一根独立 fiber 上的一个 1310 nm 信号，也可能是同一对 fiber 内的一个 wavelength。
- `wavelength`：光的颜色/中心波长。WDM 中多个 wavelength 共享同一根 Tx fiber 和一根 Rx fiber。
- `channel`：更容易混淆。标准里可能指 fiber optic cabling channel，也可能指 data channel。初学内容中建议用“fiber channel”或“data lane”避免裸用 channel。

### 4. DR / FR / LR

可作为入门表：

| Label | Plain Meaning | Typical Data Center Meaning |
|---|---|---|
| DR | Datacenter Reach | 短距单模。400G-DR4 常见为 4 条 100G optical lanes，parallel SMF，约 500 m。 |
| FR | 约 2 km reach | 常见为 duplex SMF + WDM，例如 400G-FR4，4 个 wavelength 每个约 100G。 |
| LR | 约 10 km reach | 更长距离，通常更严格的光功率、接收灵敏度、波长/色散预算。 |

谨慎点：具体 reach、connector、lane count 由标准或 MSA 定义。不要把 “DR/FR/LR” 当成所有速率都完全一致的物理实现。

### 5. PSM vs WDM

PSM / parallel SMF：

- 多条独立 fiber pair 或多芯 MPO/MTP 连接器。
- 每条 optical lane 通常可以使用相同或宽松的 wavelength window。
- 优点：光学 MUX/DEMUX 简化，适合 breakout，如 400G-DR4 到 4x100G。
- 代价：fiber count 和布线复杂度更高。

WDM：

- 多个 wavelengths 复用到一对 duplex SMF。
- 优点：fiber count 低，适合 2 km / 10 km duplex LC 场景。
- 代价：需要波长控制、MUX/DEMUX，封装与测试复杂度更高。

## Source Notes

### S01: OFC Short Course - Circuits and Equalization Methods for Coherent and Direct Detection Optical Links

- URL: https://www.ofcconference.org/program/short-courses/sc357/
- Source type: OFC professional short course.
- Date: accessed 2026-05-14.
- Useful for page: `02 Optical Link: Tx/Rx chain`, `Tx vs Rx bottlenecks`.
- Key points:
  - 课程用 DSP/SerDes、driver、transmitter、optical channel、receiver、TIA、DSP 的顺序描述链路数据路径。
  - 明确把 driver 和 TIA 的性能指标与 bandwidth、linearity、power、output optical power 联系起来。
  - Equalization 包括 CTLE、FFE、DFE；短距光链路也受益于均衡。
  - 强调 electro-optical co-design，适合解释“模块需要链路共同优化”。
- Cautions / timeliness:
  - 课程描述是高层教育内容，不是某个标准的强制定义。
  - 适合做概念骨架，不适合引用为某个 PMD 的参数来源。

### S02: 100G Lambda MSA Homepage

- URL: https://100glambda.com/
- Source type: industry MSA.
- Date: releases in 2020; accessed 2026-05-14.
- Useful for page: `DR/FR/LR basics`, `100G per wavelength explanation`.
- Key points:
  - 100G Lambda MSA 围绕 100 Gb/s per optical channel / wavelength 的 PAM4 optical technology 建立。
  - MSA 覆盖 100G、400G 的 2 km、10 km 以及更长 reach 规格。
  - 100G per wavelength 是从 400G/800G 入门时解释 lane 和 wavelength 的核心概念。
  - MSA 规格与 IEEE 方法和 FEC 思路保持兼容，是产品生态互通的重要资料。
- Cautions / timeliness:
  - MSA 不是 IEEE 标准本身。网站应区分“标准定义”和“MSA 生态规范”。
  - 2020 release 属于稳定历史资料，不代表 2026 最新路线图。

### S03: 100G Lambda MSA 400G-FR4 Technical Specification Rev 2.0

- URL: https://www.100glambda.com/specifications/send/2-specifications/7-400g-fr4-technical-spec-d2p0
- Source type: MSA technical specification.
- Date: 2018-09-18.
- Useful for page: `FR4 example`, `WDM illustration`, `fiber channel`.
- Key points:
  - 400G-FR4 包含 four optical transmitters 和 four optical receivers。
  - WDM lane assignments 使用 1271 / 1291 / 1311 / 1331 nm，中心波长间隔 20 nm。
  - 400G-FR4 operating range 是 2 m 到 2 km single-mode fiber。
  - 每条 lane 的 PAM4 signaling rate 是约 53.125 GBd。
  - 规格中有 transmit/receive path block diagram、receiver sensitivity mask 和 fiber optic cabling model，适合作为后续图示建模参考。
- Cautions / timeliness:
  - 该文档说明 retime function 超出 MSA scope；不要把内部 DSP/retimer 行为说成该规格强制规定。
  - Rev 2.0 是 2018 文档，适合作稳定 FR4 基础，不适合作 2026 产品路线图。

### S04: Cisco 400G QSFP-400G-DR4 Transceiver Modules Data Sheet

- URL: https://www.cisco.com/c/en/us/products/collateral/interfaces-modules/transceiver-modules/qsfp-400g-dr4-transceiver-modules-ds.html
- Source type: vendor data sheet.
- Date: accessed 2026-05-14.
- Useful for page: `DR4 example`, `breakout`, `parallel SMF`.
- Key points:
  - QSFP-400G-DR4 是 400GBASE-DR4，MPO-12，parallel SMF，500 m。
  - Nominal data rate 标为 425 Gbps，high-speed electrical 是 400GAUI-4。
  - Optical specs 给出 per-lane Tx power、Rx power、insertion loss、wavelength 1310 nm 和 pre-FEC reference。
  - 支持 2x200G-DR2 和 4x100G-DR1 breakout，是解释 parallel lane 的好例子。
- Cautions / timeliness:
  - 这是 Cisco SKU 资料。参数可用于示例，不应泛化到所有厂商模块。
  - 产品数据表会更新。页面应描述“例如 Cisco 的 DR4 模块”，不要写成永久行业常数。

### S05: Cisco Blog - 100G Lambda MSA Group Adds New Members and Releases Updated Specifications

- URL: https://blogs.cisco.com/sp/100g-lambda-msa-group-adds-new-members-specifications
- Source type: vendor technical blog / MSA context.
- Date: accessed 2026-05-14.
- Useful for page: `PSM vs WDM tradeoff`, `DSP in pluggables`.
- Key points:
  - PSM4 思路使用 4 对 fiber，减少多 wavelength laser 和 MUX/DEMUX 复杂度，但增加线缆基础设施复杂度。
  - 100GBASE-DR 用 DSP 把 host 的多条较低速 electrical signal 转换为 PAM4 optical signal。
  - 早期 LR4/CWDM4/PSM4 与 single-lambda PAM4 的演进脉络很适合入门叙事。
  - 对比了 duplex WDM 与 parallel fiber 的实际工程权衡。
- Cautions / timeliness:
  - Blog 有厂商叙事色彩。适合解释演进，不适合当最终标准文字。
  - 旧文中的“新”技术到 2026 已是成熟量产基础。

### S06: Arista / CommScope - Propel Cabling Solutions for Arista 400G and 800G

- URL: https://www.arista.com/en/assets/data/pdf/Commscope-400G-Cabling-Guide.pdf
- Source type: vendor cabling guide.
- Date: accessed 2026-05-14.
- Useful for page: `DR/FR/LR quick table`, `connector visualization`.
- Key points:
  - 400G-DR4：parallel SMF，MPO-12，500 m。
  - 400G-FR4：dual SMF，LC duplex，2 km。
  - 400G-LR4：dual SMF，LC duplex，10 km。
  - Guide 把 fiber type、connector type、reach 放在同一张表里，适合转化成初学者对照图。
  - 800G-2FR4 / 2LR4 等命名有助于提示后续章节：更高速率常通过多个 400G-like interfaces 组合。
- Cautions / timeliness:
  - Arista/CommScope guide 是部署资料。术语与产品 SKU 可能包含 vendor-specific 扩展，例如 XDR4、PLR4。
  - 第 02 章只取 DR/FR/LR 主干，不展开所有变体。

### S07: Arista - 800G Transceivers and Cables Q&A

- URL: https://www.arista.com/en/assets/data/pdf/Arista-800G-Transceivers-and-Cables-FAQ.pdf
- Source type: vendor technical FAQ.
- Date: accessed 2026-05-14.
- Useful for page: `lane count and gearbox`, `400G vs 800G intuition`.
- Key points:
  - 800G modules use 8 electrical lanes in each direction at 100G PAM4 each.
  - 400G modules use 8 electrical lanes at 50G PAM4 each in many OSFP/QSFP-DD implementations.
  - Some 400G optics use an 8:4 gearbox to convert 8x50G electrical to 4x100G optical.
  - FAQ explicitly connects electrical lanes, optical waves, gearbox and aggregate bandwidth.
- Cautions / timeliness:
  - 这是 Arista 产品语境，不覆盖所有 possible module architectures。
  - 800G 描述适合帮助理解 lane scaling；第 02 章应避免展开 800G 产品选型。

### S08: Juniper - Know Your 400G Transceiver

- URL: https://www.juniper.net/documentation/us/en/hardware/400g-optics-cables-guide/optics/topics/concept/400g-know-your-400gtransceiver.html
- Source type: vendor documentation.
- Date: accessed 2026-05-14.
- Useful for page: `electrical lane vs optical lane`, `PAM4 baud`.
- Key points:
  - 400GAUI-8 表示 8 lanes，每 lane 53.125 Gbps，26.5625 Gbaud PAM4。
  - 400GAUI-4 表示 4 lanes，每 lane 106.25 Gbps，53.125 Gbaud PAM4。
  - Parallel single-mode 与 WDM duplex 的 fiber count 对比很适合做视觉解释。
  - 文档提醒：each optical lane can operate at 100 Gbps using PAM4 modulation。
- Cautions / timeliness:
  - 文档是部署学习资料，部分表格取决于 Juniper 产品支持矩阵。
  - 可用于概念解释，不应用作唯一规范依据。

### S09: OIF - Common Management Interface Specification (CMIS)

- URL: https://www.oiforum.com/technical-work/hot-topics/management/
- Source type: OIF standards / implementation agreement project page.
- Date: accessed 2026-05-14.
- Useful for page: `module control / firmware / diagnostics`.
- Key points:
  - CMIS 是高复杂度 pluggable modules 的通用管理接口方向。
  - OIF 页面列出 CMIS 5.3、ELSFP Pluggable CMIS、CMIS-FF 等后续工作，说明模块管理仍在演进。
  - 适合解释 transceiver 不只是高速信号路径，还包含 state machine、diagnostics、provisioning、firmware/control。
  - CMIS 的 plug-and-play 目标说明 host-module 管理是互通体验的重要部分。
- Cautions / timeliness:
  - CMIS 版本演进快。第 02 章只讲“模块有管理接口和状态/诊断”，不绑定某个寄存器细节。
  - CMIS 与传统 SFF 管理规范、vendor extensions 可能共存。

### S10: OIF - Common Electrical I/O CEI 5.1 Implementation Agreement

- URL: https://www.oiforum.com/wp-content/uploads/OIF-CEI-5.1.pdf
- Source type: OIF electrical interface implementation agreement.
- Date: accessed 2026-05-14.
- Useful for page: `electrical side`, `chip-to-module signaling`.
- Key points:
  - CEI-112G-XSR-PAM4 和 CEI-112G-VSR-PAM4 是高速 electrical interconnect 的关键接口类别。
  - VSR 类接口面向 very short reach chip-to-module 等场景。
  - 这类 IA 支撑“电口也有标准和链路预算，不只是光口”的解释。
  - 对第 02 章可以只说：host 到 module 的 electrical side 也需要 SerDes、loss budget、equalization。
- Cautions / timeliness:
  - CEI 文档庞大且细节过深，不适合 02 章逐条讲。
  - 224G/更高速接口仍在演进，避免把 112G 说成终局。

### S11: QSFP-DD MSA Specification Page

- URL: https://www.qsfp-dd.com/specification/
- Source type: form-factor MSA.
- Date: accessed 2026-05-14.
- Useful for page: `what a module contains`, `packaging / cage / connector / thermal`.
- Key points:
  - QSFP-DD defines an 8-lane electrical interface to the host.
  - MSA scope includes mechanical module、cage/connector、thermal、pinout、management specifications。
  - Physical-layer optical/copper specs are outside the form-factor MSA，适合解释“form factor 与 optical PMD 是不同层级”。
  - 页面列出 hardware specification 与 CMIS specification 的版本历史。
- Cautions / timeliness:
  - QSFP-DD 是一种 form factor，不代表全部模块形态；OSFP、QSFP112 等也存在。
  - 第 02 章可用其作“典型 pluggable module”例子。

### S12: Broadcom BCM87416 Product Brief

- URL: https://docs.broadcom.com/doc/87416-PB
- Source type: semiconductor product brief.
- Date: 2023-02-24.
- Useful for page: `DSP/gearbox/driver/TIA inside module`, `analog electronics`.
- Key points:
  - BCM87416 是 400GbE PAM4 8:4 PHY，支持 400G DR4/FR4/LR4 optical links。
  - 资料描述 single-chip 400G PAM4 PHY with integrated TIA and laser driver。
  - DSP 和 equalization 用于补偿 pluggable optical modules 内的 optical impairments。
  - 8x53 Gb/s electrical to 4x106 Gb/s optical 的转换是解释 gearbox 的好例子。
- Cautions / timeliness:
  - Product brief 有营销语气和“industry first”等声明，不适合直接复述为中立事实。
  - 具体节点、功耗、集成度会快速过时。用于架构例子，不用于路线图判断。

### S13: Marvell PAM4 Optical DSPs

- URL: https://www.marvell.com/products/pam-dsp.html
- Source type: semiconductor product / architecture overview.
- Date: accessed 2026-05-14.
- Useful for page: `DSP role`, `module software and diagnostics`.
- Key points:
  - PAM4 DSP portfolio 覆盖 100G、200G、400G、800G、1.6T optical modules。
  - 页面列出 integrated laser drivers、integrated TIA、software suite、configurable DSP engine。
  - Perseus 等产品面向 400G/800G optical transceiver modules。
  - 说明 DSP 不只是“计算芯片”，还承担高速模拟前端耦合、配置、诊断生态。
- Cautions / timeliness:
  - 产品组合更新很快。不要把产品名作为入门页核心。
  - “AI infrastructure”叙事偏市场化，内容页应抽象为 DSP/retimer 功能。

### S14: Marvell Spica Gen2 PAM4 DSP Product Brief

- URL: https://www.marvell.com/content/dam/marvell/en/public-collateral/dsp/marvell-spica-gen2-product-brief.pdf
- Source type: semiconductor product brief.
- Date: accessed 2026-05-14.
- Useful for page: `retimer`, `diagnostics`, `800G as scaling example`.
- Key points:
  - Spica Gen2 是 octal 100G/channel PAM4 DSP retimer。
  - 支持 1x800G、2x400G、8x100G breakout。
  - 支持 EML、silicon photonics、VCSEL applications，说明 DSP 位于多种光学实现之上。
  - 集成 modulator driver 和 advanced diagnostic features。
  - 明确提到 IEEE / CMIS compliance，可用于说明标准互通要求。
- Cautions / timeliness:
  - 功耗和制程属于产品路线信息，可能过时。
  - 第 02 章只保留 retimer / breakout / diagnostics 的概念。

### S15: Coherent - 100G Transimpedance Amplifiers for 400G/800G Optical Transceivers

- URL: https://www.coherent.com/news/press-releases/coherent-launches-100g-transimpedance-amplifiers
- Source type: component vendor release.
- Date: 2025-07-24.
- Useful for page: `Rx bottlenecks`, `PD/TIA explanation`.
- Key points:
  - 56 Gbaud PAM4 TIA 面向 400G/800G optical transceivers。
  - Vendor 强调 input-referred noise、receiver sensitivity、linearity、power per channel。
  - TIA 是 Rx 侧把 photodiode current 转换为可用 electrical signal 的关键模拟前端。
  - 适合解释 Rx 难点：小信号、噪声、动态范围、线性度和功耗。
- Cautions / timeliness:
  - 这是 2025 产品发布，性能数据和供应状态可能变化。
  - 可作为 Rx metrics 词汇来源，不应转成产品推荐。

### S16: Lumentum - EMLs Product Page

- URL: https://www.lumentum.com/en/products/data-center/modulated-lasers/emls
- Source type: optical component vendor page.
- Date: accessed 2026-05-14.
- Useful for page: `Tx bottlenecks`, `laser/modulator`.
- Key points:
  - EML integrates a wavelength-locked DFB laser with a monolithic electro-absorption modulator。
  - EML 目标是 high bandwidth、signal integrity、efficiency，用于 short/medium-reach AI and cloud data center connectivity。
  - 100G 和 200G EMLs 用于 400G、800G DR4/FR4 模块。
  - 适合解释 Tx 中 laser 与 modulator 可以集成，也可以有不同材料平台。
- Cautions / timeliness:
  - Vendor page 有产品营销语言。只抽象为 EML 功能和 Tx 指标。
  - “upgrade path to 1.6T”属于路线图，不要作为稳定定义。

### S17: Intel Silicon Photonics

- URL: https://www.intel.com/content/www/us/en/products/details/network-io/silicon-photonics.html
- Source type: silicon photonics vendor overview.
- Date: accessed 2026-05-14.
- Useful for page: `optical engine`, `fiber-to-chip coupling`, `integrated photonics`.
- Key points:
  - Intel 描述 PIC + EIC die stack：PIC 含 on-chip lasers / SOAs，EIC 含形成 optical I/O subsystem 所需的 electronics。
  - 页面区分 DR parallel interfaces 与 FR WDM interfaces。
  - On-die integrated laser arrays、wafer-scale test、known-good-die 可用于解释为什么封装和测试是 transceiver 成本核心。
  - 适合后续 3D 建模：PIC/EIC stack、fiber attach、laser array、modulator/detector lanes。
- Cautions / timeliness:
  - 包含 Intel 产品路线和出货量声明，随公司战略变化。
  - 入门页应讲“silicon photonics 是一种实现路径”，不要暗示所有模块都用 Intel 式集成。

### S18: Analog Devices / Maxim - How to Power Your QSFP-DD Optical Transceiver

- URL: https://www.analog.com/media/en/reference-design-documentation/design-notes/ds138-how-to-power-your-qsfp-dd-optical-transceiver.pdf
- Source type: power design note.
- Date: accessed 2026-05-14.
- Useful for page: `power subsystem`, `TOSA/ROSA basics`.
- Key points:
  - 资料把 fiber optic transceivers 定义为小型形态、集成 optical subassemblies、适合高密度网络。
  - 主要组件包括 TOSA 和 ROSA。
  - Transceiver 在 cable 与 host 之间做 optical/electrical translation。
  - Power rail 设计说明模块内部还有 DC/DC、digital rails、analog rails 等电源问题。
- Cautions / timeliness:
  - 原文来自 Maxim/Analog power design 视角，重点不是 optical architecture。
  - 适合补齐“模块也有电源设计”，不适合做光学参数依据。

### S19: IEEE 802.3 400 Gb/s Ethernet Study Group - 400G Optical Transceivers

- URL: https://www.ieee802.org/3/400GSG/public/13_11/welch_400_01_1113.pdf
- Source type: IEEE study-group presentation.
- Date: 2013-11.
- Useful for page: `PSM vs WDM economics`, `module component count`.
- Key points:
  - 早期 400G 方案比较包含 PSM、多 lane PAM4、4 wavelength PAM4 等架构。
  - 图中列出 TIA/LA、MZI driver、laser driver、PLL、MUX、ADC、digital、bandgap、eFuse 等模块内部功能块。
  - 明确讨论 module cost、link cost、assembly yield、optical attach yield。
  - 结论强调目标距离会影响成本优化方向，sub-500 m 与 10 km 不是同一设计中心。
- Cautions / timeliness:
  - 这是 2013 study-group economic comparison，不是最终产品状态。
  - 成本数字和具体架构假设已过时，但“距离目标影响成本”和“parallel SMF 对 500 m 有价值”的教学点仍有用。

### S20: IEEE 802.3bs Contribution - PAM-4 Four Wavelength 400Gb/s Solution on Duplex SMF

- URL: https://www.ieee802.org/3/bs/public/14_09/conroy_3bs_01_0914.pdf
- Source type: IEEE study-group contribution.
- Date: 2014-09-08.
- Useful for page: `WDM block diagram`, `DSP/FEC role`.
- Key points:
  - 提供 4x100G / four wavelength PAM4 on duplex SMF 的 proposal block diagram。
  - 图示包含 PAM4 DSP、FEC、PHY/Gearbox 等功能。
  - 资料提出 integrated DSP 可以让低成本 optics 在更长 reach 中可用。
  - 适合后续图示参考：用多个 wavelength lanes 合成一个 400G duplex link。
- Cautions / timeliness:
  - 这是 proposal contribution，不是最终 IEEE 标准文本。
  - 不应作为“标准要求 DSP/FEC 如何实现”的依据。

## Cautions

- 标准/稳定定义与产品路线图必须分开。DR/FR/LR reach、lane/wavelength mapping 可用 IEEE/MSA/供应商数据表支持；3 nm、5 nm、200G/lane、400G/lane 等是产品路线和供应链状态。
- `lane` 必须标注 electrical 或 optical。初学者最容易把 8 electrical lanes 和 4 optical lanes 混为一谈。
- `channel` 不建议裸用。若讲 fiber channel，就明确是 fiber optic cabling channel；若讲 data lane，就用 lane。
- 400G/800G 的实际模块可能有 DSP-based、LPO、linear receive、retimed Tx linear Rx 等不同路线。02 章先讲主流 DSP/retimer pluggable mental model。
- PSM/WDM 不是优劣绝对关系。PSM 简化光学复用但增加 fiber count；WDM 节省 fiber 但增加波长和光学封装复杂度。
- Rx sensitivity 不能简化成“收到的光功率越大越好”。过强也可能超出接收范围；链路合规要看 power budget、signal quality、FEC/pre-FEC BER、receiver specs。
- Vendor data sheets 的参数会随 SKU 和 revision 改变。网站示例应写“typical/example”，不要写成永久常数。
- IEEE study-group slides 是历史决策资料。适合解释 tradeoff，不适合代表 2026 产品价格或最终标准要求。

## Candidate Page Mapping

### Page: Optical Link In One Pass

Use sources: S01, S03, S12, S15, S16, S18.

Content:

- One horizontal chain diagram: ASIC electrical output -> module electrical front-end -> DSP/CDR/retimer -> driver -> laser/modulator -> coupling -> fiber -> PD -> TIA -> DSP/CDR -> ASIC electrical input.
- Annotate “signal changes form twice: electrical to optical, optical to electrical”.
- Add callouts:
  - Tx shapes and launches light.
  - Fiber attenuates and distorts.
  - Rx detects and reconstructs symbols.

### Page: Tx vs Rx Bottlenecks

Use sources: S01, S12, S15, S16, S17.

Content:

- Tx bottleneck cluster: driver bandwidth, modulator/laser linearity, output power, wavelength stability, coupling loss, packaging yield.
- Rx bottleneck cluster: PD responsivity, TIA noise, bandwidth, linearity, receiver sensitivity, equalization/FEC.
- A good teaching metaphor: Tx is about launching a clean-enough optical waveform; Rx is about recognizing a damaged, weak waveform.

### Page: Lane, Channel, Wavelength

Use sources: S03, S07, S08, S10.

Content:

- Show 400G electrical side examples:
  - 400GAUI-8: 8 x 50G PAM4 electrical.
  - 400GAUI-4: 4 x 100G PAM4 electrical.
- Show optical side examples:
  - DR4: 4 optical lanes on parallel fibers.
  - FR4: 4 wavelengths on duplex SMF.
- Warn: same total bandwidth can be split differently on host side and optical side.

### Page: Inside A Pluggable Transceiver

Use sources: S09, S11, S12, S13, S14, S18, S19.

Content:

- Blocks:
  - Optical engine: lasers/modulators, PDs, lenses/gratings, MUX/DEMUX where needed.
  - Analog front-end: drivers, TIA, LA, ADC/DAC where architecture uses them.
  - DSP/retimer/CDR: equalization, gearbox, FEC assist/monitoring, diagnostics.
  - Power: DC/DC rails, analog/digital isolation, thermal limits.
  - Control/firmware: CMIS, state machine, DOM/DDM, firmware revision, alarms.
  - Packaging: cage, connector, heatsink, fiber receptacle, alignment.

### Page: DR/FR/LR And PSM/WDM

Use sources: S02, S03, S04, S05, S06, S08.

Content:

- DR4 visual: four parallel arrows, same wavelength family, MPO connector, 500 m.
- FR4 visual: four colors combined into one Tx fiber and separated at Rx, LC duplex, 2 km.
- LR4 visual: same WDM concept but longer reach and tighter budget, 10 km class.
- Explain `4` suffix as four lanes/wavelengths in these common examples, not a universal rule for every optic name.

## 3D / Diagram Opportunities

### 1. Tx/Rx Block Diagram

- Source leads: S01, S03, S12, S20.
- Model idea:
  - Left-to-right pipeline with distinct material zones: copper traces, DSP die, driver, laser/modulator, fiber, PD/TIA, DSP die, copper traces.
  - Animate symbols degrading through channel and being cleaned/equalized at Rx.
- Educational payoff:
  - Shows why a transceiver is both photonics and high-speed electronics.

### 2. DR4 Parallel Fiber Topology

- Source leads: S04, S06, S08.
- Model idea:
  - MPO-12 connector with 4 Tx fibers and 4 Rx fibers.
  - Four independent optical lanes to four remote receivers.
  - Breakout mode: one 400G module splits to four 100G modules.
- Educational payoff:
  - Makes PSM / parallel SMF tangible.

### 3. FR4 WDM Topology

- Source leads: S03, S06, S20.
- Model idea:
  - Four colored wavelengths from four modulators enter a MUX, travel through one Tx fiber, then DEMUX at receiver.
  - Use 1271 / 1291 / 1311 / 1331 nm as labels in an optional advanced overlay.
- Educational payoff:
  - Shows why WDM saves fiber count but adds optical components and wavelength control.

### 4. Fiber-To-Chip Coupling

- Source leads: S17, S19.
- Model idea:
  - PIC surface with waveguides and grating/edge couplers.
  - Fiber array aligned to chip edge or grating area.
  - Heatmap overlay for coupling loss / alignment tolerance.
- Educational payoff:
  - Explains why packaging and active alignment matter to cost and yield.

### 5. Module Exploded View

- Source leads: S11, S18, S19.
- Model idea:
  - Shell, pull tab, heatsink contact, PCB, DSP, power ICs, optical subassemblies/PIC, fiber receptacle, cage connector.
  - Optional layer toggle: signal path, power path, control path, thermal path.
- Educational payoff:
  - Reframes “transceiver” as a compact system, not a simple adapter.

### 6. Tx vs Rx Bottleneck Split View

- Source leads: S01, S15, S16.
- Model idea:
  - Tx side: driver swing, modulator bandwidth, laser power, coupling.
  - Rx side: photon-to-current, TIA noise, equalizer recovery, FEC threshold.
  - Show eye diagram closing and reopening after equalization.
- Educational payoff:
  - Makes asymmetric constraints memorable.
