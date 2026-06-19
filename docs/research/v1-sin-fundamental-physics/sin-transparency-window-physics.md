# Si₃N₄ 超宽透明窗口（0.25–8.3 μm）的底层物理

> 研究日期：2026-06-19
> 对应特性：SiN 透明窗口 0.25–8.3 μm vs Si 1.1–5.5 μm

---

## 一、UV/可见光吸收边（~0.25 μm / ~5 eV）

### 禁带宽度

化学计量比 Si₃N₄ 间接带隙约 4.6–5.3 eV。1240 / 5 eV ≈ 248 nm，吸收边落在 UVC 区。

### 为什么 Si₃N₄ 带隙远大于 Si（1.12 eV）

三个因素：

1. **N 的电负性拉低价带顶**：N（电负性 3.04）远高于 Si（1.90），Si→N 电荷转移约 0.56 e⁻/键。价带顶由 N 2p 轨道（特别是 N pπ 孤对电子态）主导，能量低于 Si 3p 态 → 价带顶被"拉低"。

2. **反键态推高导带底**：导带底以 Si 3s 反键态为主。Si-N 强 σ 键的成键-反键分裂远大于 Si-Si 键 → 导带底被推高。

3. **Robertson (1991) N 孤对电子图像**：非晶 Si₃N₄ 中，N 原子近平面三配位，垂直于 Si-N 键平面存在 N 2p 孤对电子，形成价带顶。

| 特性 | 单质 Si | Si₃N₄ |
|------|---------|--------|
| 键型 | 纯共价 Si-Si | 部分离子性 Si-N |
| 带隙 | 1.12 eV（间接） | ~5.0 eV（间接） |
| 价带顶 | Si 3p | N 2p 孤对电子 |
| 导带底 | Si 3p 反键 | Si 3s 反键 |
| 电荷转移 | 无 | Si→N ~0.56 e⁻/键 |

---

## 二、中红外吸收边（~8.3 μm）：声子吸收

### Si-N 键振动模式

| 振动模式 | 波数 (cm⁻¹) | 波长 (μm) | 归属 |
|---------|-------------|-----------|------|
| Si-N 不对称伸缩 | 800–900 | 11.1–12.5 | 主吸收峰 |
| Si-N 伸缩（最强） | ~900 | ~11.1 | 最强红外活性模 |
| Si-N 纵向光学 LO | ~1100 | ~9.1 | 肩峰 |
| Si-N-Si 弯曲 | 450–500 | 20–22 | N 面外摇摆 |
| NSi₃ 呼吸模 | ~640–650 | ~15.4 | 四面体关联运动 |

### 为什么 Si₃N₄ IR 截止比 SiO₂ 更深

| 材料 | 最强声子峰 | 力常数 | 多声子吸收边 |
|------|-----------|--------|-------------|
| SiO₂ | Si-O ~1100 cm⁻¹ (~9 μm) | 大（部分双键特征） | ~3.5–4 μm |
| Si₃N₄ | Si-N ~900 cm⁻¹ (~11 μm) | 较小（单键） | ~7.3–8.5 μm |

SiO₂：Si-O 键具有部分双键特征（键能 ~800 kJ/mol，键长 1.61 Å），力常数大 → 基频 ~1100 cm⁻¹，2-3 倍频正好落在 3-4.5 μm → 中红外最早被"杀死"的氧化物。

Si₃N₄：Si-N 键是单键（键能 ~435 kJ/mol，键长 1.74 Å），力常数为 Si-O 的 60-70% → 基频 ~900 cm⁻¹ → 多声子吸收边向长波推移 >2 倍。

---

## 三、中间波段无吸收

一旦光子能量低于带隙（λ > ~250 nm），Si₃N₄ 中：
- 无自由载流子（电阻率 > 10¹⁴ Ω·cm，宽带隙绝缘体）
- 无双光子吸收（2 × 0.8 eV = 1.6 eV << 5 eV Eg）
- LPCVD 化学计量比 Si₃N₄ 禁带中几乎无深能级缺陷态

因此从 UV 吸收边到多声子吸收边整段（~0.25–7 μm）都透明。

---

## 四、N-H 键倍频吸收（PECVD SiN 的"阿喀琉斯之踵"）

### 机制

N-H 伸缩振动基频 ~3350 cm⁻¹（~3.0 μm），第一倍频 (v=0→2) 约 6700 cm⁻¹ → **~1520–1550 nm**——正好命中 C 波段！

### PECVD vs LPCVD 的 H 含量

| 特性 | PECVD SiN | LPCVD Si₃N₄ |
|------|-----------|-------------|
| 沉积温度 | 250-400°C | 700-800°C |
| N-H 浓度 | ~5.9-7.6×10²¹ cm⁻³ | ~4.5×10²⁰ cm⁻³ |
| Si-H 浓度 | ~5.8×10²¹-1.4×10²² cm⁻³ | 低于检测限 |
| 总 H 含量 | ~1.3-2.0×10²² cm⁻³ | ~4.5×10²⁰-5.5×10²¹ cm⁻³ |

LPCVD 高温使 SiH₄ + NH₃ → Si₃N₄ + H₂↑ 反应完全，H 以 H₂ 形式释放；残余 N-H/Si-H 键在高温下断裂。LPCVD 的 N-H 浓度比 PECVD 低 1-2 个数量级 → 1550 nm 吸收可忽略。

### 退火的作用

1150-1200°C 退火进一步驱除残余 H，将损耗从 ~1 dB/cm 压到 0.03 dB/cm 以下。

---

## 参考来源

1. Philipp, H.R. "Optical properties of silicon nitride." J. Electrochem. Soc. 120(2), 295-300 (1973)
2. Robertson, J. "Electronic structure of silicon nitride." Phil. Mag. B 63(1), 47-77 (1991)
3. Ren & Ching. "Band structure and density of states of beta-silicon nitride." (~1980)
4. Giacomazzi et al. "Localization properties of vibrational modes in a-Si3N4." arXiv:1809.00610 (2018)
5. Luongo, J.P. "IR Study of Amorphous Silicon Nitride Films." Applied Spectroscopy 38(2), 195 (1984)
6. Jonak-Auer, Meisels, Kuchar. "FTIR Measurements of the Hydrogen Concentration of SiN Layers." TU Wien
7. J. Appl. Phys. 126, 133101 (2019) — N-H overtone absorption at 1520 nm
8. Lin et al. "Low-stress silicon nitride platform for broadband mid-infrared microphotonics." IEEE AVFOP (2014)
9. Xu & Ching. "Electronic structure and optical properties of alpha and beta phases." Phys. Rev. B 51, 17379 (1995)
10. Beshkov et al. "IR and Raman absorption spectroscopic studies of APCVD, LPCVD and PECVD thin SiN films." Vacuum 69, 301-305 (2002)
