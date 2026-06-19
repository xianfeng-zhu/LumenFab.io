# Si₃N₄ 折射率 ~2.00 的底层物理原理

> 研究日期：2026-06-19
> 对应特性：SiN n ≈ 2.00 vs Si n ≈ 3.48 @1550 nm

---

## 一、Clausius-Mossotti / Lorentz-Lorenz 关系

核心公式（Lorentz-Lorenz，CGS 单位制）：

```
(n² - 1)/(n² + 2) = (4π/3) × N × α
```

其中 N 是分子数密度，α 是分子/原子极化率。

代入数值：

| 材料 | n | (n²-1)/(n²+2) |
|------|---|---------------|
| Si | 3.48 | 0.787 |
| Si₃N₄ | 2.00 | 0.500 |

Si 的高值（0.787）意味着单位体积内总极化率很大，Si₃N₄（0.500）显著更低。

**原子极化率**（Sinha & Lugujjo, 1978, via Lorentz-Lorenz）：
- α_Si（Si-N 基体中）≈ 3.06×10⁻²⁴ cm³
- α_N ≈ 0.35×10⁻²⁴ cm³

**物理实质**：Si-Si 共价键电子云极易被外电场畸变（大极化率）。Si-N 键有明显离子性分量（电负性差 1.14），电子云被 N 原子强烈束缚，极化率显著降低。

---

## 二、Phillips-Van Vechten 键参数模型

| 参数 | a-Si | Si₃N₄ |
|------|------|--------|
| 键长 d (Å) | 2.352 | 1.734 |
| 同极能隙 E_H (eV) | 11.42 | 21.47 |
| 异极能隙 C (eV) | 0.09 | 7.07 |
| 平均能隙 E_g = √(E_H² + C²) (eV) | 11.42 | 22.60 |

Si-N 键比 Si-Si 键短 26%，同极能隙几乎翻倍，且出现了巨大的异极（离子性）贡献 C=7.07 eV（Si 中几乎为零）。三者共同大幅提升平均能隙 → 压低折射率。

---

## 三、Penn 模型

```
n² = ε(0) = 1 + (ℏω_p / E_p)²
```

| 材料 | ℏω_p (eV) | E_p (有效 Penn 能隙, eV) | 计算 n |
|------|-----------|------------------------|--------|
| Si | ~16.6 | ~4.8 | ~3.60 |
| Si₃N₄ | ~22.1 | ~12.75 | ~2.00 |

Si₃N₄ 的 Penn 能隙 (~12.75 eV) 是 Si (~4.8 eV) 的 **2.66 倍**。等离子体频率高出 1.33 倍 (因价电子密度更高)，但在平方反比公式中被能隙项的平方完全压制。

---

## 四、Wemple-DiDomenico 单振子模型

```
n² − 1 = E_d E₀ / (E₀² − (ℏω)²)
```

长波极限：n² − 1 = E_d / E₀

- **晶体 Si**：E₀ ≈ 3.4 eV, E_d ≈ 37 eV, E_d/E₀ ≈ 10.9 → n ≈ 3.45
- **Si₃N₄**：E₀ ≈ 9-10 eV, E_d ≈ 20-27 eV, E_d/E₀ ≈ 2.0-3.0 → n ≈ 1.73-2.0

色散能量 E_d = β × N_c × Z_a × N_e，与配位数和化学价态相关。Si（金刚石，4 配位）vs Si₃N₄（Si 4 配位，N 3 配位），拓扑差异直接影响 E_d。

---

## 五、决定性结论

Si₃N₄ 折射率仅 2.00 的根本原因**不是"电子太少"或"原子太稀疏"**——恰恰相反，Si₃N₄ 比 Si 拥有更高的原子堆积密度（2.07 倍）和价电子密度（2.37 倍）。

真正的主导因素是：

1. **Si-N 键的离子性**导致平均能隙大幅增大（Phillips-Van Vechten 的 C 项从 0.09 跃升至 7.07 eV）
2. **Wemple-DiDomenico 振子能量 E₀** 从 ~3.4 eV 跃升至 ~9 eV
3. 在 Penn/WDD 框架下，折射率平方与**能隙平方成反比**，这个平方关系使能隙差异被极度放大，完全压制了价电子密度（等离子体频率）的贡献

---

## 参考来源

1. Philipp, H.R. "Optical properties of silicon nitride." J. Electrochem. Soc. 120, 295 (1973)
2. Sinha, A.K. & Lugujjo, E. "Lorentz-Lorenz correlation for reactively plasma deposited Si-N films." Appl. Phys. Lett. 32, 245 (1978)
3. Aspnes, D.E. & Theeten, J.B. "Dielectric function of Si-SiO₂ and Si-Si₃N₄ mixtures." J. Appl. Phys. 50, 4928 (1979)
4. Wemple, S.H. & DiDomenico, M. "Behavior of the Electronic Dielectric Constant in Covalent and Ionic Materials." Phys. Rev. B 3, 1338 (1971)
5. Ravindra, N.M. & Narayan, J. "Optical properties of silicon related insulators." J. Appl. Phys. 61, 2017 (1987)
6. Princeton University — Clausius-Mossotti relation derivation (K.T. McDonald, 2024)
7. Simurka et al. "Effect of deposition conditions on physical properties of sputtered silicon oxynitride thin films." Int. J. Appl. Glass Sci. (2018)
8. Campi & Corso. "Optical properties of amorphous SiNₓ." J. Appl. Phys. 64, 4130 (1988)
9. Tao et al. "Optical Properties of Silicon-Rich Silicon Nitride from First Principles." Computation 3(4), 657 (2015)
