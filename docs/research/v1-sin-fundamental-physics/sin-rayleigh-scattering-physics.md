# Si₃N₄ 超低传输损耗（Rayleigh 散射）的底层物理

> 研究日期：2026-06-19
> 对应特性：SiN 传输损耗可低至 0.00034 dB/cm (3 dB/m)，比 SOI 最优值低约 2 个数量级

---

## 一、Payne-Lacey 散射模型

Payne & Lacey (1990/1994) 是分析波导侧壁粗糙度 (SWR) 散射损耗的标准解析框架。粗糙度被视为波导介电常数的微扰，由自相关函数（指数型或高斯型）描述。

### TE 基模散射损耗系数

```
α_r^TE = 2 φ²(d) (n₁² − n₂²)² × (k₀³ / 4πn_eff) × ∫₀^π R̃(β − n₂k₀ cosθ) dθ
```

其中：
- φ²(d) = 波导表面处归一化模场强度
- n₁, n₂ = 芯层和包层折射率
- R̃ = 表面粗糙度自相关函数的傅里叶变换

### 三个独立因子的乘积

**因子 1：介电反差平方 (n₁² − n₂²)²**

| 波导系统 | n_core² − n_clad² | 相对散射强度 |
|---------|-------------------|------------|
| Si/SiO₂ | 3.48² − 1.44² ≈ 10.04 | **基准（~18× SiN）** |
| Si₃N₄/SiO₂ | 2.00² − 1.44² ≈ 1.93 | **~1/5.2 的 Si** |
| 平方后比值 | | **~(1/5.2)² ≈ 1/27** |

仅介电反差平方一项，SiN 的散射源强度就比 SOI 弱 **~27 倍**。这是 SiN 低损耗最重要的单一因素。

**因子 2：侧壁场强 φ²(d)**

SiN 折射率差小 → 光模场"松散"→ 模场直径更大 → 侧壁处的电场强度大幅降低 → 对同一种物理粗糙度的敏感度更低。

**因子 3：k₀³ / n_eff**

此项对 Si 和 SiN 近似相等（同一波长、相近 n_eff），不是差异来源。

### 3-D 扩展模型（Barwicz & Haus, 2005）

```
α_sca ∝ (n₁² − N²)/[t_eff (n₁² − n₂²)] × (k₀³/4πn₁) × (√2πσ²/β) × [(n₁² − n₂²)² + J²(n₁² − n_s²)²] × [F_c + F_s]
```

仍然保留了 **(n₁² − n₂²)²** 的核心缩放关系。

### 散射损耗的关键依赖

1. α ∝ σ² — RMS 粗糙度的平方
2. α ∝ (n₁² − n₂²)² — 介电反差平方（Rayleigh 型）
3. α ∝ φ²(d) — 侧壁处场强
4. α ∝ 1/d — 与波导宽度成反比
5. 当粗糙度空间周期 ≈ λ/(2πn_eff) 时达到峰值（相位匹配条件）

---

## 二、为什么 SiN 散射损耗可比 SOI 低两个数量级

将 Payne-Lacey 模型代入两种材料：

| 因素 | Si/SiO₂ | Si₃N₄/SiO₂ | SiN 优势 |
|------|---------|------------|---------|
| (Δε)² = (n₁² − n₂²)² | ~100 | ~3.7 | **~27 倍** |
| φ²(d) 侧壁场强 | 强约束 → 大 | 弱约束 → 小 | **~3-5 倍** |
| 乘积效应 | — | — | **~100-200 倍** |

即 SiN 波导的侧壁散射损耗可比同等粗糙度的 SOI 波导低约 **两个数量级**。这就是 LPCVD SiN 能做到 0.03 dB/cm (3 dB/m) 的物理基础。

---

## 三、体积散射：无晶界散射

### 非晶 vs 晶体

SiN 光子学使用的始终是**非晶（amorphous）Si₃N₄**：

| 散射源 | 晶体 Si | 非晶 Si₃N₄ |
|--------|---------|------------|
| 晶界散射 | 有（多晶 Si 波导） | **无**（无非晶界） |
| 晶粒取向不均匀 | 有 | **无**（各向同性） |
| 点缺陷/空位 | 有 | 极低（化学计量比 LPCVD） |
| 密度起伏 | 有（晶界处） | 极低（连续无规网络） |

非晶 Si₃N₄ 在空间上是**连续无规网络（CRN）**——Si 和 N 原子通过共价/离子混合键形成三维连续网络，没有尖锐的晶界或晶粒。这意味着：

1. **无晶界散射**：光在非晶介质中传播时不会遇到折射率突变界面（晶界两侧取向不同 → 折射率差异 → 散射）
2. **无择优取向**：各向同性 → 偏振相关散射最小
3. **无解理面**：不需要切割单晶 → 侧壁可以更平滑（虽然 SOI 也是单晶 Si，但刻蚀后的侧壁是另一回事）

### 单晶 SOI 的特殊之处

SOI 的器件层是**单晶 Si**——没有晶界。那为什么 SOI 损耗还是高？因为 SOI 的损耗主导来源是**侧壁粗糙度散射**而非体积散射。单晶 SOI 的"无晶界"优势被极大折射率对比度带来的侧壁散射完全淹没。

---

## 四、损耗来源总结

| 损耗机制 | SOI (Si/SiO₂) | Si₃N₄/SiO₂ | SiN 优势根源 |
|---------|---------------|-------------|------------|
| 侧壁散射 (Rayleigh) | **主导**（0.1-3 dB/cm） | 极低（<0.001 dB/cm 可控） | (Δε)² 低 27 倍 + 场强因子 |
| 体积散射（晶界） | 无（单晶 Si） | 无（非晶连续网络） | 两者平等 |
| 材料吸收 | TPA 显著 @ 高功率 | 可忽略 | 宽带隙 ~5 eV |
| N-H 泛频吸收 | 无 | PECVD 中有（~1520 nm），LPCVD 无 | 无自挂键 |
| 衬底泄漏 | BOX 2 μm 足够 | 下包层需 2-8 μm（弱约束 → 需要更厚） | 设计约束而非物理劣势 |

---

## 五、一句话结论

SiN 的超低损耗是**一个乘积效应**：(Δε)² 低 ~27 倍 × 侧壁场强低 ~3-5 倍 → 侧壁散射总压低 ~100-200 倍。再加上非晶连续网络结构无晶界散射、宽禁带无电子吸收——四条机制叠加，使 LPCVD SiN 的传输损耗可比 SOI 低两个数量级。

---

## 参考来源

1. Payne & Lacey. "Radiation loss from planar waveguides with random wall imperfections." IEE Proc. 137(4), 282-288 (1990)
2. Payne & Lacey. "A theoretical analysis of scattering loss from planar optical waveguides." Opt. Quant. Electron. 26, 977-986 (1994)
3. Barwicz & Haus. "Three-dimensional analysis of scattering losses due to sidewall roughness in microphotonic waveguides." JLT 23(9), 2719 (2005)
4. Yap et al. "3-D extension of Payne-Lacey." (2009)
5. Schmid et al. "Thin-film interference effect in scattering loss of high-index-contrast planar waveguides." (2008)
6. MDPI Coatings 2026: 两种理论模型的比较 — P-L vs Hörmann
7. Sinclair thesis (2020): "Reduced index contrast results in decreased loss due to sidewall scattering"
8. Blumenthal et al. "Silicon Nitride in Silicon Photonics." Proc. IEEE 106(12), 2209 (2018)
9. Ozdemir et al. "Advancements in LPCVD SiN Waveguides: Achieving 3 dB/m." OFC 2025
10. LioniX International — TriPleX SiN platform waveguide loss specification
