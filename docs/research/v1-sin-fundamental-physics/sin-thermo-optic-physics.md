# Si₃N₄ 低热光系数（dn/dT ≈ 2.5×10⁻⁵ K⁻¹）的底层物理

> 研究日期：2026-06-19
> 对应特性：SiN dn/dT 约为 Si 的 1/7

---

## 一、核心数值对比

| 参数 | Si | Si₃N₄ | 比值 |
|------|----|--------|------|
| dn/dT (300 K, 1550 nm) | ~1.8×10⁻⁴ K⁻¹ | ~2.5×10⁻⁵ K⁻¹ | ~1/7 |
| 热膨胀系数 α | ~2.6×10⁻⁶ /K | ~2.6×10⁻⁶ /K | 几乎相等 |
| 禁带宽度 Eg | ~1.12 eV | ~5.0 eV | 4.5× |
| 折射率 n | ~3.48 | ~2.0 | 0.57 |

**关键发现**：Si 和 SiN 的热膨胀系数几乎相同。dn/dT 差距 7 倍根本不能归结于热膨胀 → 必须从带隙差异切入。

---

## 二、dn/dT 的两项竞争贡献

### 1. 热膨胀（负贡献）

温度↑ → 体积膨胀 → 密度↓ → 单位体积极化粒子数↓ → **折射率降低**

用 Prod'homme 模型：
```
dn/dT = f(n) × (Φ − β)
```
- f(n) = (n²−1)(n²+2)/(6n) — Lorentz-Lorenz 微分因子
- β = (1/V)(dV/dT) ≈ 3α — 体热膨胀系数
- Φ = (1/P)(dP/dT) — 电子极化率的温度系数

热膨胀项（−β）始终为负。

### 2. 带隙收缩（正贡献）

温度↑ → 电子-声子相互作用增强 → Eg 减小（Varshni 公式） → 吸收边红移 → 通过 Kramers-Kronig 变换 → **折射率升高**

```
Δn(E) = (ℏc/π) ∫_{Eg}^{∞} Δα(E')/[(E')² − E²] dE'
```

分母 (E')² − E² 决定耦合强度：吸收边距离工作波长越近，积分贡献越大。

---

## 三、SiN dn/dT 只有 Si 1/7 的三条路径

### 路径 1：Kramers-Kronig 耦合被宽带隙削弱（最重要）

- Si：Eg ≈ 1.12 eV，1550 nm 光子 0.8 eV，光谱距离仅 ~0.3 eV → K-K 耦合极强，带隙收缩引起的 Δn 大
- SiN：Eg ≈ 5 eV，光谱距离 > 4 eV → K-K 耦合极弱，带隙收缩几乎不影响 1550 nm 处的 n

Ghosh 模型对 SiO₂ 的分析表明：热膨胀项仅贡献 ~2% 的 dn/dT，带隙位移项贡献 ~98%。SiN 类似但带隙更小→带隙位移项比重介于 SiO₂ 和 Si 之间。

### 路径 2：f(n) 压缩因子

Prod'homme 模型中：
- Si (n=3.48)：f(n) = (n²−1)(n²+2)/(6n) ≈ 7.64
- SiN (n=2.0)：f(n) ≈ 1.56

仅此一项 SiN 就比 Si 小 **4.9 倍**。

### 路径 3：Moss 定则的内在必然性

```
n⁴ × Eg ≈ 95 eV
```

宽带隙必然伴随低折射率，低折射率通过 f(n) 进一步压低 dn/dT。这不是巧合，是同一套电子结构（大 Eg → "硬"键 → 低极化率 → 低 n → 低 dn/dT）的自然结果。

---

## 四、Ghosh 模型

```
2n × dn/dT = G×R + H×R²

G = −3αK₂           （热膨胀，负）
H = −(1/Eg)(dEg/dT)K₂ （带隙位移，正）
R = λ²/(λ² − λ_ig²)    （色散因子）
K₂ = n_∞² − 1
```

| 参数项 | Si | Si₃N₄ | 说明 |
|--------|----|--------|------|
| f(n) | ~7.64 | ~1.56 | SiN 低 4.9× |
| (1/Eg)(dEg/dT) | ~−2.23×10⁻⁴ | ~−0.4×10⁻⁴ | SiN 低 5.6× |
| α | ~2.6×10⁻⁶ | ~2.6×10⁻⁶ | **几乎相等** |
| 综合 dn/dT | ~1.8×10⁻⁴ | ~2.5×10⁻⁵ | **~7.2× 差距** |

---

## 五、一句话结论

Si₃N₄ 的 dn/dT 比 Si 低约 7 倍，**根本原因是其宽带隙（~5 eV vs ~1.12 eV）**。宽带隙通过两条路径实现低 dn/dT：(1) 大光谱距离削弱 Kramers-Kronig 耦合，带隙收缩引起的折射率增量极小；(2) 宽带隙必然伴随低折射率，低折射率通过 f(n) 因子进一步压缩 dn/dT。两种材料的热膨胀系数几乎相同，不是差异来源。

---

## 参考来源

1. RP Photonics — Thermo-optic effect: https://www.rp-photonics.com/thermo_optic_effect.html
2. Prod'homme 模型解释: https://www.sciencedirect.com/science/article/abs/pii/S0925346710000546
3. Ghosh 模型分析 SiO₂ dn/dT (Sensors 2023): https://pmc.ncbi.nlm.nih.gov/articles/PMC10346183/
4. Ghosh 模型半导体温度色散 (AIP 1996): https://pubs.aip.org/aip/jap/article-abstract/79/12/9388/496092/
5. Si₃N₄ 低温 dn/dT 测量 (KTH/Elshaari): https://www.kth.se/polopoly_fs/1.646808.1600688588!/07463458.pdf
6. Si₃N₄ 热膨胀系数测量 (Frontiers 2018): https://www.frontiersin.org/journals/materials/articles/10.3389/fmats.2018.00001/full
7. CTE 对比表 (BYU Cleanroom): https://www.cleanroom.byu.edu/cte_materials
8. Baak (1982) Si₃N₄ Sellmeier 方程: Applied Optics 21(6), 1069-1072
9. Della Corte — Si 热光系数双振子模型 (2000)
10. Moss 定则综述 (ScienceDirect 2023)
