# 光子学逆向设计（Inverse Design）研究笔记

> 日期：2026-06-19
> 目的：为逆向设计教育页面提供全面的基础原理、应用案例和工具生态来源

---

## 一、基础原理

### 1.1 逆向设计 vs 正向设计

正向设计：人构思几何→仿真验证→手动调参→重复
逆向设计：人指定光学响应→伴随法算梯度→算法优化→收敛

### 1.2 伴随法（Adjoint Method）

- 核心：只需两次仿真（正向+伴随）得到所有像素的梯度 ∂F/∂ε
- 公式：∂F/∂ε ∝ Re[E_fwd · E_adj]
- 对比：有限差分法需要 N+1 次仿真（N=设计变量数）

### 1.3 拓扑优化工作流

设计区域离散化→灰度初始化→正向+伴随仿真→梯度更新→逐步二值化→工艺约束→收敛

### 1.4 关键里程碑

- 2015: Piggott et al., Nature Photonics — 2.8×2.8 μm² 解复用器
- 2020: Stanford SPINS 开源
- 2022: GlobalFoundries 45CLO 代工厂验证
- 2024-2025: 商用 PDK 集成

---

## 二、应用案例

### 光栅耦合器
- Jin et al. (2024): -2.77 dB, 单层 DUV, 180 nm MFS, Chinese Optics Letters
- Hammond et al. (2022): -4.7 dB, GF 45CLO 多层, 75 nm BW, Optics Express

### WDM 解复用器
- Piggott et al. (2015): 2.8×2.8 μm², IL <2.4 dB, Nature Photonics
- Pita Ruiz et al. (2025): 24×24 μm² SiN 4-ch CWDM, -1.0 to -1.7 dB, Nature Comms

### 功分器
- Hansen et al. (2024): 2×3 μm², 0.13 dB IL, >629 nm 仿真带宽, MQT

### 模式复用器
- Pita Ruiz et al. (2025): 5-mode MDM on SiN, 16×7 μm²
- Sun et al. (2025): 38.2 Tbit/s 系统容量, Nature Comms

### 非传统器件
- 光子卷积加速器 (Nature Comms 2025): 0.42 mm²
- 量子干涉器 (arXiv 2025): 99.56% HOM visibility
- 光子逻辑门 (ACS Photonics 2025): AND/OR/NOT, 5×6 μm²

---

## 三、工具与代工

### 开源工具
- SPINS/SPINS-B (Stanford): FDFD + 伴随法
- top200EM (DTU): 200 行 MATLAB

### 商业工具
- Tidy3D (Flexcompute): 内置逆向设计 API
- Lumerical (Ansys): LumOpt 优化引擎

### 代工通道
- GlobalFoundries 45CLO: 首个 CMOS 代工厂验证
- Applied Nanotools NanoSOI: Luceda PDK 支持
- 各 SiN MPW (LioniX, LIGENTEC)

---

## 参考来源

1. Piggott et al., Nature Photonics 9, 374 (2015)
2. Hammond et al., Optics Express 30(17), 31058 (2022)
3. Jin et al., Chinese Optics Letters 22(11), 112201 (2024)
4. Pita Ruiz et al., Nature Communications 16, 9307 (2025)
5. Hansen et al., Materials for Quantum Technology 4, 016201 (2024)
6. Christiansen & Sigmund, JOSA B 38(2), 496 (2021) — tutorial
7. Su et al., Applied Physics Reviews 7, 011407 (2020) — SPINS
8. Sun et al., Nature Communications (2025) — 38.2 Tbit/s MDM
9. Ribas et al., arXiv:2505.08668 (2025) — quantum interferometer
10. Neseli et al., ACS Photonics (2025) — photonic logic gates
