# Manufacturing and Test Professional Source Notes

Date: 2026-05-24

Purpose: source pack for `src/pages/components/manufacturing-test.mdx`. These notes support a reader-facing Chinese page about the verification chain for CPO optical engines, from wafer-level optical/electrical test and known-good-die screening through assembly, package-level electro-optic test, BER, aging, and yield feedback.

## Scope

Cover:

- Manufacturing and test as an engineering flow rather than a physical CPO component.
- Wafer-level test, die sort, known-good-die, assembly test, package-level test, and link-level validation.
- Photonic test difficulty: optical coupling, wavelength dependence, temperature dependence, RF / DC / optical measurements, and test throughput.
- Layer-specific tests for laser, PIC, EIC, optical I/O, and package integration.
- BER, eye diagram, TDECQ, FEC margin, aging / burn-in, wafer maps, and yield feedback.

Keep out:

- Detailed laser physics, which belongs on the laser-source page.
- Full PIC platform explanation, which belongs on the PIC page.
- Mechanical package layout details, which belong on the packaging page.
- Field operations and redundancy policy, which belong on the reliability and operations page.

## Professional Sources

| Source | Type | URL | Key takeaways for the page |
|---|---|---|---|
| AIM Photonics, Test, Assembly and Packaging | Photonics manufacturing institute service page | https://www.aimphotonics.com/tap | Supports the idea that integrated photonics production needs wafer-scale, chip-scale, I/O attach, assembly, packaging, and opto-electronic test. Specific useful categories include wafer probing with optical / RF / DC access, passive optical insertion / propagation / spectral measurements, active optoelectronic measurements such as modulation, detector responsivity and laser LIV, telecom/datacom eye-diagram and BER testing, RF S-parameters, DC IV and leakage, and metrology such as SEM, X-ray, IR and acoustic microscopy. |
| Teradyne Photon 100 | Test-equipment manufacturer technology page | https://www.teradyne.com/products/photon-100/ | Supports the high-volume manufacturing framing: silicon photonics and CPO need automated optical + electrical test across wafer, package, optical-engine and co-packaged-module insertions. Useful for explaining why test throughput and repeatability become productization issues, not only lab characterization issues. |
| NIST, Optical probe for nondestructive wafer-scale characterization of photonic elements | Government research publication page | https://www.nist.gov/publications/optical-probe-nondestructive-wafer-scale-characterization-photonic-elements | Supports the claim that wafer-scale photonic characterization requires controlled optical coupling and precise probe positioning. The source describes nondestructive evanescent coupling and localized chip-scale / wafer-scale testing of nanophotonic devices. Use as research support for the special difficulty of wafer-level optical test. |
| JEDEC JESD49B / JESD49, Procurement Standard for Semiconductor Die Products Including Known Good Die | Semiconductor standard | https://www.jedec.org/standards-documents/docs/jesd49b01 and https://standards.globalspec.com/std/14369207/jedec-jesd-49 | Supports the KGD concept: bare die products may be procured and used outside conventional packaged formats, and KGD exists because higher-level assemblies need confidence before die are built into expensive packages. Use for definition-level grounding, not for photonic-specific metrics. |
| OIF, Co-Packaging Framework Document | Industry standards framework | https://www.oiforum.com/wp-content/uploads/OIF-Co-Packaging-FD-01.0.pdf | Supports CPO system boundary: optical/electrical engines attached near ASICs, electrical interface options with future test points / methods / criteria, high-count engine integration yield pressure, optical connector loss distribution, single-mate mid-board connector risk, thermal pressure, and system-level reliability concerns. Local text exists at `../v1-light-source-laser-supply/downloads/oif-co-packaging-framework-fd-01-0.txt`. |
| OIF, External Laser Small Form Factor Pluggable Implementation Agreement | Industry implementation agreement | https://www.oiforum.com/wp-content/uploads/OIF-ELSFP-01.0.pdf | Supports optical test point, test-grade patch-cord characterization, ELSFP connector system testing, cyclic temperature, mixed flowing gas, shock, vibration, ESD, and host / module engagement concerns. Use only for external laser source and optical-interface test concepts. Local text exists at `../v1-light-source-laser-supply/downloads/oif-elsfp-01-0.txt`. |
| PhotonHub, Silicon and Silicon Nitride PICs | European photonics infrastructure page | https://photonhub.eu/technology-platform/silicon-and-silicon-nitride-pics/ | Supports silicon / SiN PIC fabrication, optical and electrical characterization, coupling efficiency, bandwidth, and environmental / lifetime testing. Already captured in `../v1-pic-optical-circuit/pic-optical-circuit-professional-sources.md`. |
| PhotonHub, Indium Phosphide PICs | European photonics infrastructure page | https://photonhub.eu/technology-platform/indium-phosphide-pics/ | Supports InP PIC testing with optical / electrical / RF characterization, modulation speed, insertion loss, and reliability under thermal and electrical stress. Already captured in `../v1-pic-optical-circuit/pic-optical-circuit-professional-sources.md`. |
| RP Photonics Encyclopedia, Laser Diodes | Professional technical encyclopedia | https://www.rp-photonics.com/laser_diodes.html | Supports laser diode package forms, lifetime / reliability, temperature sensitivity, catastrophic optical damage, gradual degradation, and quality-control / burn-in framing. Local copies exist in laser-source research folders. |
| Lumentum / Meta, High Power CW 1310nm DFB Lasers for Co-Packaged Optics | Vendor / conference technical paper | https://www.lumentum.com/sites/default/files/2025-12/high_power_cw_laser_for_co-packaged_optics_2022.pdf | Supports CPO laser-source metrics such as high-power CW DFB, PCE, threshold, slope efficiency, SMSR, RIN, and temperature testing. Local copies exist at `../v1-inp-dfb-laser-principle/downloads/lumentum-high-power-cw-laser-for-cpo-2022.pdf` and `.txt`. |
| Keysight / Electronic Design, TDECQ: Understanding the Theory Behind the Key Metric for PAM4 Optical Transmitters | Test-and-measurement technical article | https://www.electronicdesign.com/technologies/test-measurement/article/21283812/keysight-technologies-tdecq-understanding-the-theory-behind-the-key-metric-for-pam4-optical-transmitters | Supports the page explanation of TDECQ as a PAM4 transmitter metric that estimates additional power needed relative to an ideal reference transmitter after receiver equalization, and why BER-only tests can be slow at low probabilities. Use as a professional explanatory source for link-level optical transmitter test language. |
| Ethernet Alliance, Improving 400/800GE optics: Is your Layer 1 FEC compliance testing enough? | Industry alliance technical blog | https://ethernetalliance.org/blog/2021/07/06/improving-400-800ge-optics-is-your-layer-1-fec-compliance-testing-enough/ | Supports BER / FEC-margin framing: modern high-speed optical links use FEC; useful validation can include per-lane raw BER, pre-FEC BER, error distribution across FEC codewords, lane error density, and host/optic interoperability stress. |

## Reader-Facing Interpretation

Manufacturing and test should be presented as the verification chain that turns individual process outputs into a shippable CPO optical engine. The page should avoid treating test as a final pass/fail step after packaging. Each insertion point answers a different question:

- Wafer-level test asks whether the process created usable die and where variation sits on the wafer.
- Die sort and KGD ask which die deserve expensive assembly.
- Assembly test asks whether attach, alignment, bonding, and thermal paths damaged or shifted the device.
- Package-level test asks whether laser, PIC, EIC, optical I/O, substrate and cooling work together as a link.
- Aging / burn-in and stress tests ask whether early failures or drift modes appear before deployment.
- Yield analysis asks which upstream process, design, or assembly step caused the measured distribution.

Photonic manufacturing differs from pure electrical die testing because the measurement path includes optical coupling. A die can be electrically reachable but optically difficult to test; the fixture, fiber array, grating/edge coupler, probe alignment, laser wavelength, polarization, temperature, and calibration standard can all become part of the measurement uncertainty.

## Good Page Claims

- Manufacturing and test is an engineering flow across wafer, die, assembly, package, link and reliability stages.
- CPO raises test pressure because optical engines sit near expensive ASICs, use many die and lanes, and have limited package-level rework.
- Wafer-level photonic test requires optical plus electrical access; the optical fixture and coupling path are part of the measurement.
- KGD reduces the risk of assembling bad die into expensive multi-die packages, but KGD is a confidence level based on available tests rather than a guarantee that no package-induced failure will appear later.
- PIC tests include insertion loss, propagation loss, spectral response, modulator bandwidth, PD responsivity, heater behavior, RF S-parameters, DC IV and leakage.
- Laser tests include L-I-V, threshold, slope efficiency, output power, wavelength, SMSR, RIN, temperature behavior, burn-in drift and failure modes.
- EIC tests include DC parametrics, scan/BIST, SerDes / driver / TIA behavior, jitter, equalization, power integrity, thermal behavior and interface margins.
- Optical I/O tests include coupling loss, return loss, polarization behavior, alignment tolerance, fiber attach, connector loss, contamination and thermal/mechanical stability.
- Package-level tests include optical power budget, eye diagram, BER, TDECQ, FEC margin, channel crosstalk, thermal maps, calibration loops and stress / aging behavior.
- Wafer maps, die maps, assembly logs and package test results should be correlated so yield loss can be traced back to process, design, material, alignment, bonding, contamination, thermal or test-fixture causes.

## Avoid

- Presenting wafer-level test as capable of finding every package-level failure.
- Treating KGD as a perfect guarantee.
- Collapsing BER, TDECQ, eye diagram and OMA into one interchangeable metric.
- Describing CPO test as only a final module test.
- Implying that a better tester alone solves yield; useful test must feed process control, binning, design rules and assembly choices.

## Page Shape

Recommended sections:

1. `Manufacturing and test 的流程边界`
2. `为什么 CPO 会提高测试要求`
3. `工作原理：测试链路怎样把风险逐层收敛`
4. `制造测试路径：从 wafer 到 package-level BER`
5. `1. Wafer-level test：把工艺离散性变成 wafer map`
6. `2. KGD 与 die sort：决定哪些 die 值得进入封装`
7. `3. Assembly test：确认贴装、互连和光耦合没有破坏窗口`
8. `4. 各层测试项：laser、PIC、EIC、optical I/O 与 package`
9. `5. Package-level link test：eye、TDECQ、BER 与 FEC margin`
10. `6. Aging、burn-in 与应力筛选`
11. `7. 良率反馈：从 test data 回到工艺窗口`
12. `8. 总结：测试链路在 CPO 里承担什么`
