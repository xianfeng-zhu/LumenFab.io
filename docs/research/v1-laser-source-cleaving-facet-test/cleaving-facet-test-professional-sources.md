# 解理、端面工程与芯片测试：专业资料记录

日期：2026-05-23

适用范围：为 `src/pages/components/laser-source.mdx` 第 5 节“解理、腔长与端面工程”和第 6 节“芯片测试、分档与可靠性筛选”准备资料。该章节应把晶圆工艺之后的边发射激光器步骤讲清楚：解理形成 bar / chip 和光学端面，端面镀膜设定腔体边界，测试把外延、光栅、波导、电极和端面工艺的差异转化为可筛选的数据。

本轮未新增外部下载，使用仓库中已经保存的专业资料。

## 已使用资料

| 来源 | 类型 | 原始链接 | 本地保存路径 | 可用于第 5 / 6 节的内容 |
|---|---|---|---|---|
| Cornell ECE 533, “Distributed Feedback Structures and Semiconductor DFB Lasers” | 大学课程讲义 | https://courses.cit.cornell.edu/ece533/Lectures/handout13.pdf | `../v1-laser-source-grating-waveguide/downloads/cornell-rana-dfb-structures-semiconductor-dfb-lasers.pdf`；`../v1-laser-source-grating-waveguide/downloads/cornell-rana-dfb-structures-semiconductor-dfb-lasers.txt` | DFB 的反馈来自分布式光栅；端面反射和不对称 coating 会影响阈值谱、模式竞争和 SMSR。 |
| MIT OCW 6.772, “Laser Diodes II / DFB and DBR Lasers” | 大学课程讲义 | https://ocw.mit.edu/courses/6-772-compound-semiconductor-devices-spring-2003/resources/lecture21v2/ | `../v1-laser-source-grating-waveguide/downloads/mit-6-772-lecture21-dfb-dbr-lasers.pdf`；`../v1-laser-source-grating-waveguide/downloads/mit-6-772-lecture21-dfb-dbr-lasers.txt` | 边发射激光器的 cleaved facets、facet coatings、DFB / DBR 结构和单频选择。 |
| MIT OCW 3.46, “Optical Amplifiers and Lasers” | 大学课程讲义 | https://ocw.mit.edu/courses/3-46-photonic-materials-and-devices-spring-2006/resources/3_46lec11_lasers/ | `../v1-laser-source-electrode-current-confinement/downloads/mit-3-46-lecture11-optical-amplifiers-and-lasers.pdf`；`../v1-laser-source-electrode-current-confinement/downloads/mit-3-46-lecture11-optical-amplifiers-and-lasers.txt` | L-I 曲线、阈值、阈值以上斜率效率、腔内损耗和镜面输出耦合。 |
| RP Photonics Encyclopedia, “Laser Diodes” | 专业百科 | https://www.rp-photonics.com/laser_diodes.html | `../v1-inp-dfb-laser-principle/downloads/rp-photonics-laser-diodes.html`；`../v1-inp-dfb-laser-principle/downloads/rp-photonics-laser-diodes.txt` | I-V、输出功率和电流关系、PCE、温度敏感性、COD、端面氧化、位错增长、金属扩散、burn-in 和质量控制。 |
| Lumentum / Meta, “High Power CW 1310nm DFB Lasers for Co-Packaged Optics” | 会议论文 / 厂商 R&D | https://www.lumentum.com/sites/default/files/2025-12/high_power_cw_laser_for_co-packaged_optics_2022.pdf | `../v1-inp-dfb-laser-principle/downloads/lumentum-high-power-cw-laser-for-cpo-2022.pdf`；`../v1-inp-dfb-laser-principle/downloads/lumentum-high-power-cw-laser-for-cpo-2022.txt` | 高功率 CW DFB 的腔长、AR / HR coating、COS 测试、PCE、阈值、斜率效率、SMSR、RIN 和温度测试例子。 |
| Coherent, “10 Gbps DFB Laser Diode Chip Datasheet” | 厂商 datasheet | https://www.coherent.com/content/dam/coherent/site/en/resources/datasheet/networking/10gbps-dfb-laser-diode-chip-ds.pdf | `../v1-inp-dfb-laser-principle/downloads/coherent-10gbps-dfb-laser-diode-chip-datasheet.pdf`；`../v1-inp-dfb-laser-principle/downloads/coherent-10gbps-dfb-laser-diode-chip-datasheet.txt` | 实际 DFB chip 指标：阈值、SMSR、波长温度系数、芯片尺寸和工作温度范围。 |

## 关键结论

1. 对边发射 InP 激光器来说，解理同时是机械分割和光学端面形成步骤。通常先把晶圆解理成 bar，暴露两端 facet，再进行 bar-level 清洁、镀膜、检查或测试，随后分割为单颗 die / chip。
2. Fabry-Perot 激光器的主要反馈来自两个端面镜面；DFB 激光器的主要反馈来自沿腔长分布的光栅。DFB 端面仍然会通过反射率、反射相位、输出耦合和外部反馈敏感性影响阈值、SMSR、输出方向和器件间离散。
3. 腔长需要按器件目标理解。长腔有利于高功率 CW、低热阻、低串联电阻和较低端面功率密度，但会牵动光栅耦合强度、`kappa L`、模式选择、芯片面积和调制能力，不能写成单向优势。
4. DFB 解理位置相对于光栅周期的位置会改变端面边界相位。残余端面反射、不完全 AR coating 或两端 coating 不对称，会改变竞争模式阈值，造成 SMSR 和良率差异。
5. AR / HR coating 是端面工程的设计变量。低反射 AR 可降低残余 facet feedback；高反射 HR 可改变输出方向和腔内功率分布。高功率 CW DFB 常见一端低反射、一端高反射的设计，但这不是所有 DFB 的固定规则。
6. 端面可靠性要同时覆盖突发失效和渐进退化。端面缺陷、污染、氧化、膜层针孔或局部吸收会造成热点，严重时诱发 COD；长期退化还可能来自端面氧化、位错增长、金属扩散、散热退化和驱动尖峰。
7. 芯片测试需要从外观和电学预检开始，再进入 L-I-V、光谱、温度、噪声和 aging / burn-in。完整光学测试常在 bar、chip、COS 或封装阶段完成，不能笼统写成全部由 wafer-level test 完成。
8. L-I-V test 把工艺结果转成阈值电流、斜率效率、目标功率点电流 / 电压、串联电阻、PCE / WPE、kink 和 rollover 等指标。PCE 峰值通常不等于最大输出功率点。
9. 光谱测试要覆盖中心波长、SMSR、mode stability、mode hop、随电流和温度的波长漂移，以及 RIN / linewidth 等更高阶可用性指标。
10. 分档和良率分析不只是 pass / fail。测试数据可以按波长通道、输出功率、效率、温度余量、噪声、老化漂移等维度分档，也可以通过 wafer map、bar map 和批次统计反向定位外延、光栅、刻蚀、金属、解理和镀膜问题。

## 页面写作边界

- 第 5 节聚焦激光器芯片的光学边界和端面可靠性，不展开 TOSA、ELSFP、光纤连接器和系统反射预算。
- 第 6 节聚焦裸芯片、bar、chip 或 COS 阶段的器件测试、筛选和工艺反馈；package-level test、known-good-die 和模块级 burn-in 只做指向，详细内容交给 `manufacturing-test` 页面。
- 使用 `AR / HR coating`、`L-I-V test`、`SMSR`、`RIN`、`aging / burn-in` 等行业词时，应在正文中解释它们如何映射到器件指标，避免把章节写成术语表。
