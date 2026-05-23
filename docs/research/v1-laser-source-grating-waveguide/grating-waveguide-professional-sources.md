# 光栅与波导加工：专业资料记录

日期：2026-05-21

适用范围：为 `src/pages/components/laser-source.mdx` 第 3 节“光栅与波导加工”准备资料。该章节应解释 InP / DFB 激光器如何从外延层结构进入器件加工：先形成能够限制光场的波导，再通过 DFB 光栅建立沿传播方向的波长选择和反馈。

## 已保存资料

| 来源 | 类型 | 原始链接 | 本地保存路径 | 可用于第 3 节的内容 |
|---|---|---|---|---|
| Farhan Rana, Cornell ECE 533, “Distributed Feedback Structures and Semiconductor DFB Lasers” | 大学课程讲义 | https://courses.cit.cornell.edu/ece533/Lectures/handout13.pdf | `downloads/cornell-rana-dfb-structures-semiconductor-dfb-lasers.pdf`；`downloads/cornell-rana-dfb-structures-semiconductor-dfb-lasers.txt` | DFB 波导结构、周期性折射率扰动、Bragg 条件、耦合系数、阈值谱、四分之一波相移 DFB 的物理图像。 |
| MIT OCW 6.772, Lecture 21, “Laser Diodes II” | 大学课程讲义 | https://ocw.mit.edu/courses/6-772-compound-semiconductor-devices-spring-2003/resources/lecture21v2/ | `downloads/mit-6-772-lecture21-dfb-dbr-lasers.pdf`；`downloads/mit-6-772-lecture21-dfb-dbr-lasers.txt` | DFB / DBR 结构区别、单频选择、横向定义结构、相移 DFB 的结构示意。 |
| RP Photonics Encyclopedia, “Distributed Feedback Lasers” | 专业百科 | https://www.rp-photonics.com/distributed_feedback_lasers.html | `downloads/rp-photonics-distributed-feedback-lasers.html`；`downloads/rp-photonics-distributed-feedback-lasers.txt` | DFB 激光器定义、集成 Bragg 光栅、相移设计、窄线宽、外部反射敏感性。 |
| UGent PhD thesis, “Multi-Section InP-on-Silicon DFB Laser Diodes” | 博士论文 | https://biblio.ugent.be/publication/8689696 | `downloads/ugent-multisection-inp-on-silicon-dfb-laser-diodes-phd.pdf`；`downloads/ugent-multisection-inp-on-silicon-dfb-laser-diodes-phd.txt` | Bragg 波长、相位移、DFB 光谱、光栅耦合效率、InP / III-V-on-Si 背景。 |
| Lim et al., “Fabrication techniques for grating-based optical devices” | 研究论文 | https://drum.lib.umd.edu/items/23dc9178-8446-4426-96d2-778bd8b4ac41 | `downloads/umd-lim-grating-fabrication-inp.pdf`；`downloads/umd-lim-grating-fabrication-inp.txt` | InP 波导上细周期 Bragg 光栅的加工流程；光栅周期、角度对准、硬掩膜、RIE、埋入式沟道再生长等工艺敏感点。 |
| Rosborough et al., UCSB, “Monolithic Integration of Widely-Tunable DBR and DFB Lasers with One-Step Grating Formation” | 大学 / 会议论文 | https://www.osti.gov/biblio/2290233 | `downloads/ucsb-rosborough-one-step-grating-formation.pdf`；`downloads/ucsb-rosborough-one-step-grating-formation.txt` | 一阶光栅、光栅 gap、耦合系数、DBR / DFB 单片集成中的光栅形成方式。 |
| Georgia Tech, “Semiconductor Laser Structures” | 大学教学网页 | https://www.fiberoptics4sale.com/blogs/wave-optics/semiconductor-laser-structures | `downloads/gatech-semiconductor-laser-structures.html`；`downloads/gatech-semiconductor-laser-structures.txt` | 用较直观的方式解释折射率差导致的垂直光限制、ridge 结构导致的横向光限制。 |

## 参考图片

| 文件 | 来源 | 后续用途 |
|---|---|---|
| `reference-images/cornell-p01-ingasp-inp-waveguide-grating.png` | Cornell DFB handout | InGaAsP/InP 波导与光栅几何关系，可作为网页示意图或 3D 模型参考。 |
| `reference-images/cornell-p06-dfb-laser-structure-ingasp-sch-qws.png` | Cornell DFB handout | p-InP、InGaAsP SCH/QWs、光栅区、n-InP 衬底的截面结构参考。 |
| `reference-images/mit-6-772-p12-dfb-vs-dbr-structure.png` | MIT 6.772 | DFB 与 DBR 结构差异参考。 |
| `reference-images/ugent-p63-dfb-bragg-phase-shift-spectra.png` | UGent thesis | Bragg 条件、相移和模式谱参考。 |
| `reference-images/umd-lim-inp-bragg-grating-fabrication-p01.png` | UMD paper | InP Bragg 光栅加工与掩膜 / 刻蚀示意参考。 |
| `reference-images/ucsb-rosborough-dfb-grating-gap-kappa-p01.png` | UCSB paper | 光栅 gap、耦合系数和单片集成结构参考。 |

## 关键结论

1. 外延层先提供垂直方向的折射率和增益结构，器件加工再完成横向和纵向控制。横向控制决定光学模式在芯片横截面里的位置和大小；纵向控制决定反馈、腔模和目标波长。
2. 波导限制光的基本机制来自折射率差和边界条件。高折射率区域可以承载传播模式，低折射率包层或周围材料把模式限制在目标区域附近。真实光场以模式形式分布，部分能量会延伸到周围材料中，因此有效折射率 `n_eff` 会同时受到外延层、ridge 尺寸、刻蚀深度和侧壁形貌影响。
3. Ridge waveguide 主要通过光刻、硬掩膜、刻蚀、绝缘 / 钝化和金属化定义横向波导和电流通道。它工艺相对直接，但侧壁粗糙、刻蚀深度和横向电流扩散会影响散射损耗、模式稳定性、阈值和可靠性。
4. Buried heterostructure 把有源条带或波导条带埋入再生长材料、半绝缘层或电流阻挡层中。它可以带来更强的光学和电流限制，代价是再生长界面、污染、缺陷、应力和良率控制更难。
5. DFB 光栅属于沿传播方向的反馈结构。周期性折射率扰动会把前向传播模式耦合到后向传播模式；当相位满足 Bragg 条件时，分布式反馈最强。UGent thesis gives the Bragg relation as `m lambda_B = 2 n_eff Lambda`, where `m` is the diffraction order. For first-order DFB this reduces to `lambda_B = 2 n_eff Lambda`.
6. 耦合系数 `kappa` 表示光栅把前向光耦合成后向光的强度。它受折射率扰动、光栅深度、占空比、光栅长度、光栅与光学模式的重叠程度影响。耦合太弱会降低反馈和边模抑制；耦合过强会增加损耗、空间烧孔和模式不稳定风险。
7. 均匀 DFB 光栅常会在 stopband 两侧形成竞争模式。四分之一波相移或等效相位设计可以让中心模式成为最低阈值模式，从而提高单模稳定性和 SMSR。
8. 工艺误差会直接变成器件误差。光栅周期误差会移动波长；有效折射率偏差会移动 Bragg 波长；刻蚀深度和占空比会改变耦合系数；电子束拼接、相位误差或端部相位控制不良会降低 SMSR；侧壁粗糙和刻蚀损伤会增加散射损耗、阈值和长期退化风险。
9. 外部反射会扰动 DFB 腔体的相位和强度噪声。第 3 节可以点到端面镀膜、反馈容忍度和返回光敏感性，但连接器、隔离器和系统反射预算应放到封装与系统页面展开。

## 建议的第 3 节读者结构

### 1. 从外延层到可传播的光学模式

先说明外延层解决厚度方向的问题：cladding、SCH 和有源区共同决定垂直折射率分布和增益位置。随后引入加工步骤的任务：把这套材料层变成横向有边界、纵向有反馈的激光器腔体。

可写入页面的核心句：

> 外延层提供“材料和厚度方向的结构”，波导加工把光场限制到窄条区域，光栅加工则沿传播方向加入周期性反馈。

### 2. 波导为什么能限制光

从折射率和模式出发解释：光在芯片里传播时会选择满足边界条件的场分布，这个场分布称为 optical mode。高折射率核心区和低折射率包层之间的差异让光场主要集中在核心区。实际模式会有尾场，因此 ridge 宽度、刻蚀深度、包层厚度和材料折射率都会改变 `n_eff`。

建议区分三个方向：

| 方向 | 结构 | 主要作用 |
|---|---|---|
| 垂直方向 | cladding / SCH / QW / MQW | 由外延层决定光场和载流子在厚度方向的重叠。 |
| 横向方向 | ridge waveguide / buried heterostructure | 由刻蚀、再生长或电流阻挡结构决定光场横向宽度和电流注入区域。 |
| 纵向方向 | facet / DBR / DFB grating / phase shift | 决定反馈、腔模和目标波长。 |

### 3. Ridge waveguide 和 buried heterostructure 怎样加工

按照“光刻定义图形 -> 刻蚀形成几何边界 -> 绝缘或再生长 -> 金属化和后续测试”的顺序写。Ridge 适合解释横向光限制和电流限制；buried heterostructure 适合解释更强限制、更高加工复杂度和再生长界面风险。

建议表格：

| 结构 | 工艺动作 | 对器件的影响 |
|---|---|---|
| Ridge waveguide | 光刻定义条带，刻蚀上包层或限制层，沉积介质并开电流窗口。 | 工艺直观；侧壁粗糙、刻蚀深度和电流扩散影响损耗、阈值和模式稳定性。 |
| Buried heterostructure | 刻出有源条带或 mesa，再进行 InP 或半绝缘材料再生长。 | 光场和电流限制更强；再生长界面、缺陷和污染控制更难。 |
| Laterally coupled grating / surface grating | 在波导旁侧或上方形成周期性结构。 | 改变与光学模式的重叠，从而控制耦合系数和损耗。 |

### 4. DFB 光栅如何选择波长

先解释周期性微反射，再给出 Bragg 条件。把 `n_eff` 和 `Lambda` 的含义讲清楚：`Lambda` 是实际加工出来的周期，`n_eff` 来自波导模式。随后解释 `kappa`、相移和 SMSR。

可写入页面的核心关系：

```text
lambda_B = 2 n_eff Lambda / m
```

For reader intuition, a 1550 nm DFB with `n_eff` around 3.4 has a first-order grating period on the order of 0.23 um; a second-order grating period is approximately twice that. Treat this as an order-of-magnitude example, not a fixed design rule.

解释顺序建议：

1. 周期性折射率扰动产生很多微弱反射。
2. 在 Bragg 波长附近，这些反射相位相加，反馈最强。
3. DFB 腔体用分布式反馈选择目标纵模。
4. 相移结构让目标模式具有更低阈值，提高单模稳定性和 SMSR。

### 5. 工艺误差如何影响 SMSR、波长、损耗和可靠性

把工艺误差映射到读者可理解的器件指标。

| 工艺变量 | 影响路径 | 器件表现 |
|---|---|---|
| 光栅周期 `Lambda` | 改变 Bragg 条件 | 发射波长偏移。 |
| 有效折射率 `n_eff` | 受外延厚度、ridge 宽度、刻蚀深度和温度影响 | 波长漂移、模式位置变化。 |
| 光栅深度 / 占空比 | 改变耦合系数 `kappa` | SMSR、阈值、线宽和损耗变化。 |
| 光刻拼接 / 相位误差 | 扰动纵向反馈相位 | 边模抑制下降，单模稳定性变差。 |
| 侧壁粗糙 / 刻蚀损伤 | 增加散射和非辐射复合中心 | 阈值升高、效率下降、长期可靠性变差。 |
| 再生长界面 | 引入缺陷、污染或应力 | 漏电、吸收损耗、寿命下降。 |

## 页面写作边界

- 第 3 节应聚焦激光器芯片内部的波导和光栅加工。
- InP、InGaAsP、InAlGaAs 属于材料 / 平台层；QW / MQW 属于有源区层；ridge waveguide、buried heterostructure、DFB grating 属于器件加工和腔体结构层。
- TOSA、ELSFP、光纤连接器、系统反射预算、光隔离器等内容可在第 3 节作为约束简短出现，详细解释应交给封装与系统页面。
