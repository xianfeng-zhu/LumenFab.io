# Silicon Photonics PIC: Physical Structure and Process Notes

> Compiled from web research on industry-standard silicon photonics platforms (imec iSiPP50G, iSiPP200, iSiPP300 and literature).
> Date: 2026-05-25

---

## 1. SOI Layer Stack (Starting Substrate)

The foundation of any silicon photonics PIC is a **Silicon-on-Insulator (SOI)** wafer. The industry-standard dimensions for 1550 nm operation are:

| Layer | Material | Typical Thickness | Notes |
|-------|----------|-------------------|-------|
| **Device layer** (top) | Single-crystal silicon (Si) | **220 nm** | The waveguide core layer. This is the standard for 1550 nm C-band. Thicker layers (250 nm, 340 nm, 500 nm) exist for other wavelengths. |
| **Buried Oxide (BOX)** | Silicon dioxide (SiO2) | **2 um (2000 nm)** | Optical isolation layer. Prevents light from leaking into the handle wafer. |
| **Handle wafer** (bottom) | Silicon (Si) | **~725 um (300mm) or ~675 um (200mm)** | Mechanical support. High-resistivity Si optional for RF performance. |

Sources:
- imec IC-link iSiPP200 specification: "220nm silicon / 2000nm buried oxide (BoX) SOI wafers" [imeciclink.com](https://www.imeciclink.com/en/asic-fabrication/silicon-photonics-foundry-services)
- Europractice imec iSiPP50G documentation confirms 220 nm Si device layer [europractice-ic.com](https://europractice-ic.com/technologies/photonics/imec/)
- PMC article on SOI MEMS uses 5 um Si / 1 um BOX / 140 um handle (different application, but validates the three-layer structure) [PMC11340004](https://pmc.ncbi.nlm.nih.gov/articles/PMC11340004/figure/fig3/)

**Note on 220 nm thickness:** This thickness is chosen because it provides single-mode condition for a ~500 nm wide waveguide at 1550 nm wavelength, while also providing enough confinement to allow tight bends (few-um radius). The 2 um BOX is thick enough to prevent leakage into the substrate but thin enough for practical wafer processing.

---

## 2. Waveguide Etch Levels

The 220 nm silicon device layer is patterned with **three distinct etch depths**, each serving different optical functions:

### 2.1 Full Etch (220 nm) -- Strip Waveguide

- **Etch depth:** 220 nm (etched completely through the Si layer, down to BOX)
- **Slab thickness:** 0 nm (no slab remaining)
- **Properties:** Highest optical confinement (Delta n ~ 2.0 between Si and SiO2)
- **Bend radius:** Very tight (few um) -- enables compact circuits
- **Propagation loss:** Higher (~2-3 dB/cm) due to sidewall scattering from fully etched interfaces
- **Used for:** Compact routing, ring resonators, small bend-radius devices

### 2.2 Deep Partial Etch (150-160 nm) -- Rib Waveguide (High Confinement)

- **Etch depth:** ~150-160 nm into the 220 nm Si layer
- **Slab thickness:** ~60-70 nm remaining
- **Properties:** Moderate confinement
- **Used for:** Grating couplers, multimode interferometers (MMIs), some modulator designs, tapers

### 2.3 Shallow Partial Etch (70 nm) -- Rib Waveguide (Low Confinement)

- **Etch depth:** ~70 nm into the 220 nm Si layer
- **Slab thickness:** ~150 nm remaining
- **Properties:** Lowest optical confinement, lowest propagation loss
- **Bend radius:** Large (tens of um)
- **Propagation loss:** As low as 0.27 dB/cm demonstrated
- **Used for:** Long routing waveguides, delay lines, low-loss circuits

### Summary Table

| Waveguide Type | Etch Depth | Slab Left | Confinement | Bend Radius | Propagation Loss | Applications |
|---------------|-----------|-----------|-------------|-------------|-----------------|--------------|
| Strip (full) | 220 nm | 0 nm | High | Few um | Higher (~2-3 dB/cm) | Rings, compact routing |
| Rib (deep partial) | 150-160 nm | 60-70 nm | Moderate | Moderate | Moderate | GCs, MMIs, modulators |
| Rib (shallow partial) | 70 nm | 150 nm | Low | Large (tens um) | Lowest (<0.3 dB/cm) | Long routing, delay lines |

Sources:
- Europractice imec iSiPP50G: "3 etch depths in 220nm Si: 70nm, 160nm, 220nm (193nm litho)" [europractice-ic.com](https://europractice-ic.com/technologies/photonics/imec/)
- SPIE/imec technology details PDF (2022) confirms the three-level Si patterning [imeciclink.com PDF](https://www.imeciclink.com/sites/default/files/2022-06/Technology-details_Silicon-Photonics.pdf)
- Literature reports rib waveguide losses as low as 0.27 dB/cm

---

## 3. Full Cross-Section Narrative (Typical Imec-Style Process)

Below is a bottom-to-top description of a completed silicon photonics PIC cross-section, including all process modules that would be present in a full active platform.

### Layer-by-Layer Description

**Layer 1: Silicon Handle Wafer (Substrate)**
- ~725 um thick (300mm) or ~675 um (200mm) single-crystal Si
- Optional: high-resistivity Si (>1 kOhm-cm) to reduce RF losses through substrate
- Mechanical support for all overlying layers

**Layer 2: Buried Oxide (BOX) -- 2 um SiO2**
- Thermally grown silicon dioxide
- Provides vertical optical isolation
- Prevents light in the waveguide core from coupling into the lossy Si handle
- Thickness ~2 um ensures negligible leakage for 1550 nm operation

**Layer 3: Silicon Device Layer -- 220 nm Single-Crystal Si**
- The "canvas" for all photonic devices
- Patterned with 3 etch levels (70 nm, 150-160 nm, 220 nm) to form:
  - **Strip waveguides** (full 220 nm etch): compact routing, rings, high-confinement devices
  - **Rib waveguides** (partial etch, ~70 nm or ~150 nm slab): lower-loss routing, modulator phase shifters
  - **Grating couplers** (partial etch): fiber-to-chip coupling
- 8 ion implantation levels (4 n-type + 4 p-type) create:
  - **p-n junctions** in modulator waveguides (carrier depletion Mach-Zehnder and ring modulators)
  - **Ohmic contact regions** (p++ and n++) for low-resistance electrical access
  - **Doped resistors**

**Layer 4: Germanium Photodetector Region (selective)**
- Ge selectively grown via RPCVD (Reduced Pressure Chemical Vapor Deposition) only in detector regions
- The Ge sits on top of (or partially recessed into) the Si waveguide layer
- Light from the Si waveguide evanescently couples into the Ge absorption region
- 2 additional implant levels for Ge p-i-n junction formation (Ge photodetectors and GeSi EAMs)
- Process: open oxide window on Si waveguide -> selective epitaxial Ge growth -> anneal (TDD reduction) -> dope -> contact

**Layer 5: Poly-Silicon Layer (selective)**
- ~160 nm thick poly-Si layer deposited and patterned (1 etch level)
- Used for advanced grating couplers (two-layer gratings with Si + poly-Si)
- Can also form poly-Si waveguides (higher loss, useful for some applications)

**Layer 6: Inter-Layer Dielectric (ILD) -- SiO2 Cladding**
- ~1-2 um of deposited SiO2 covering the patterned Si and Ge layers
- Functions as:
  - Upper cladding for waveguides (provides index symmetry or asymmetry)
  - Electrical isolation between devices and metal layers
- Can be locally removed for "exposed waveguide" option (index sensing)

**Layer 7: Contact Layer (W Plugs)**
- Tungsten (W) contact plugs through the ILD to reach doped Si regions
- Silicide formation (e.g., NiSi) at Si-contact interface for ohmic behavior
- Standard CMOS contact plug process

**Layer 8: Metal Heater Layer (dedicated)**
- A metal layer (typically Ti, TiN, Ni, or W in imec process) specifically for thermal phase shifters
- Placed ~1 um above the waveguide (on top of ILD) to avoid optical absorption
- Heat conducts downward through the SiO2 cladding to change the Si refractive index (thermo-optic effect, dn/dT ~ 1.86e-4 K^-1)
- Typical dimensions: ~2 um wide, ~100-200 nm thick
- Power consumption for pi phase shift: ~10-50 mW, switching time ~1-100 us
- In Luceda SiFab PDK reference: heater_offset ~1.0 um from center, heater_width ~0.6 um

**Layer 9: Metal 1 (M1) -- First Cu Interconnect**
- Copper-based first metallization layer
- Provides local routing of electrical signals
- Connects to heaters via vias, connects to modulator electrodes via contact chain

**Layer 10: Metal 2 (M2) -- Second Cu Interconnect**
- Copper-based second metallization layer
- Used for longer-distance signal routing, bus lines
- Together with M1, forms the standard CMOS dual-damascene Cu BEOL

**Layer 11: RF Electrodes (integrated into M1-M2 stack for modulators)**
- For Mach-Zehnder modulators: coplanar waveguide (GSG or GS) traveling-wave electrodes
- Signal and ground electrodes sit on either side of the modulator rib waveguide
- Connected to the p++ and n++ doped regions through W vias
- Designed for 50 Ohm characteristic impedance
- Velocity matching between RF signal (n_microwave ~4-5) and optical signal (n_group ~3.5-4.5)
- In imec platforms: traveling-wave MZ p-n modulators, micro-ring p-n modulators

**Layer 12: Passivation / Al Bondpad Layer**
- Aluminum finish metallization
- Bond pads for wire bonding or flip-chip connections
- Openings for fiber coupling (grating coupler regions)

**Layer 13: Deep Trench (at chip edges)**
- Deep etch through all dielectric layers down to handle wafer
- Exposes edge coupler facets for butt-coupling to fiber
- Used for edge coupler implementation with broader optical bandwidth than grating couplers

**Layer 14: Optional SiN Waveguide Layer (iSiPP200N / iSiPP300)**
- LPCVD or PECVD silicon nitride (SiN) layer
- Provides low-loss waveguides for high-power handling, filter synthesis
- LPCVD SiN: within-wafer thickness control 1-sigma < 0.5%, refractive index control 1-sigma < 5e-4

Sources:
- imec iSiPP50G process module stack [europractice-ic.com](https://europractice-ic.com/technologies/photonics/imec/)
- imec IC-link SOI specification [imeciclink.com](https://www.imeciclink.com/en/asic-fabrication/silicon-photonics-foundry-services)
- Tsuchizawa et al. IEEE JSTQE 2011 for Ge PD integration
- Nature Photonics 2021 for Ge-fin PD process flow [nature.com](https://www.nature.com/articles/s41566-021-00893-w)
- Luceda SiFab heater PDK reference [lucedaphotonics.com](https://academy.lucedaphotonics.com/pdks_sources/si_fab/si_fab/ipkiss/si_fab/components/heater/doc/)
- Parra et al. Advanced Photonics Nexus 2024 heater review
- PMC3601732 heater/waveguide cross-section example [pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC3601732/figure/g001/)

---

## 4. Process Mask Levels Count

A full active silicon photonics process (e.g., imec iSiPP50G) requires approximately **17-20 mask levels**:

| Module | Mask Levels | Notes |
|--------|-------------|-------|
| Si patterning (3 etch depths) | 3 | 70 nm, 150-160 nm, 220 nm |
| Poly-Si patterning | 1 | Gate oxide + poly-Si layer |
| Si implants | 8 | 4x n-type + 4x p-type |
| Ge selective epitaxy | 1 | Defines Ge growth windows |
| Ge implants | 2 | For Ge photodetector p-i-n junctions |
| Contacts | 1 | W plug / silicide contacts |
| Heater metal | 1 | Dedicated heater resistor layer |
| Metal 1 (M1) | 1 | First Cu interconnect |
| Metal 2 (M2) | 1 | Second Cu interconnect |
| Passivation / Al pad | 1 | Bond pad openings |
| Deep trench | 1 | Edge coupler facets |
| **Total approximate** | **~17-20** | Depends on implant layer counting |

For **passive-only platforms** (no implants, no Ge, no heaters): approximately **8-10 mask levels**.

For **advanced platforms** (iSiPP300 with TSV, microbumps, up to 4 metal layers, SiN waveguides): the count increases to **25+** mask levels.

Source: Consolidated from imec iSiPP50G process module descriptions via Europractice and IC-link.

---

## 5. Germanium Photodetector Vertical Integration

Ge photodetectors in the imec process sit **on top of the Si waveguide layer**, with the Ge selectively grown only in detector regions.

### Vertical Stack for Ge PD Region (bottom to top)

1. **Si handle wafer** (~675-725 um)
2. **BOX** (2 um SiO2)
3. **Si waveguide core** (220 nm) -- the Si waveguide below carries C-band light
4. **Ge absorption region** (~200-500 nm thick) -- selectively grown via RPCVD. Light evanescently couples from Si waveguide into Ge
5. **Doped contact layers** -- p++ and n++ regions on either side (lateral p-i-n) or above/below (vertical p-i-n)
6. **ILD SiO2** cladding
7. **W contact plugs** through ILD to doped Si/Ge regions
8. **Metal interconnects** (M1/M2) for electrical readout

### Key Process Steps

1. Si waveguide patterning on SOI (standard 3-etch-level process)
2. Oxide hard mask deposition and lithographic window opening over detector region
3. Selective epitaxial growth of Ge (RPCVD, 100% Ge or GeSi) in the oxide window -- Ge only grows on exposed Si, not on oxide
4. Annealing step (~600-800 C) to reduce threading dislocation density (TDD)
5. Implant doping for p-i-n junction (2 implant levels)
6. Contact formation (NiSi silicide, W plugs)
7. Standard BEOL metallization

### Advanced: Ge-Fin PD (Nature Photonics 2021)

- Recessed Ge fin grown on SOI waveguide
- In-situ doped Si epitaxy on both sides of Ge fin (no ion implantation)
- Lateral Si-Ge-Si p-i-n diode
- 3-dB bandwidth up to 265 GHz

Source:
- imec Ge module: "100% Ge(Si) RPCVD selective epitaxial growth & 2x implants levels" [europractice-ic.com](https://europractice-ic.com/technologies/photonics/imec/)
- Tsuchizawa et al., IEEE JSTQE 2011 -- monolithic integration flow
- Nature Photonics 2021 -- Ge-fin photodetector [nature.com](https://www.nature.com/articles/s41566-021-00893-w)
- Materials Science in Semiconductor Processing 2024 -- selective epitaxy review

---

## 6. Metal Heater Placement Details

### Conventional Top-Heater Configuration

- **Position:** Metal heater strip runs parallel to the waveguide, ~1 um above it in the ILD
- **Separation:** The SiO2 cladding layer between heater and waveguide is ~1 um thick to prevent optical absorption by the metal
- **Heat flow:** Heat conducts down through the SiO2 (low thermal conductivity, k ~ 1.4 W/mK) to the Si waveguide
- **Thermo-optic effect:** dn/dT of Si ~ 1.86e-4 K^-1 at 1550 nm

### Placement Options

| Type | Gap to Waveguide | Speed | Efficiency | Optical Loss |
|------|-----------------|-------|-----------|-------------|
| Metal heater above (conventional) | ~1 um | Slow (1-100 us) | Moderate (10-50 mW P_pi) | Negligible |
| Metal heater very close | <600 nm | Faster | Better | Some metal absorption |
| Doped Si heater (in waveguide) | 0 (integrated) | Fastest | Best | Absorption in doped Si |
| Free-standing (undercut) | N/A | Fast | Efficient | Requires UCUT module |

### imec Implementation

- Dedicated **metal heater layer** in the process stack (separate from M1/M2 interconnect)
- In the Luceda SiFab PDK, the heater is drawn on an **HT layer** with:
  - `heater_offset`: ~1.0 um from waveguide center (lateral offset for side-heater configuration)  
  - `heater_width`: ~0.6 um
  - Sheet resistance: **R_sh = 0.5 Ohm/sq**
- Heater is connected to M1 pads through metal vias at each end
- imec's **local undercut (UCUT)** module can remove the BOX and Si substrate under the heater region to thermally isolate it, reducing power consumption and improving switching speed

Source:
- Luceda SiFab PDK heated waveguide documentation [lucedaphotonics.com](https://academy.lucedaphotonics.com/pdks_sources/si_fab/si_fab/ipkiss/si_fab/components/heater/doc/)
- Parra et al. review, Advanced Photonics Nexus 2024
- PMC3601732 heater example: 2.5 um x 200 nm Ni heater, SOI 250 nm Si / 3 um BOX, 440 nm wide waveguide [pmc.ncbi.nlm.nih.gov](https://pmc.ncbi.nlm.nih.gov/articles/PMC3601732/figure/g001/)
- imec UCUT module: "local undercut for thermal insulation" [imeciclink.com](https://www.imeciclink.com/en/asic-fabrication/silicon-photonics-foundry-services)

---

## 7. RF Electrode Placement (Traveling-Wave Modulators)

### Cross-Section Layout

For imec's traveling-wave Mach-Zehnder modulators (carrier-depletion p-n junction type):

```
  GND        SIGNAL         GND
   |           |             |
   |    M2     |     M2      |
   |    |      |      |      |
   |    M1     |     M1      |
   |    |      |      |      |
   |   W via   |    W via    |
   |    |      |      |      |
  p++ region  |   n++ region |
   \    |     / \     |     /
    \   |    /   \    |    /
     \  |   /     \   |   /
      \ |  /  p-i-n \  |  /
       \| /  junction \| /
    ======================= (rib waveguide cross-section)
   |  p-doped  | intrinsic |  n-doped  |
   |    slab   | (or n- lightly doped waveguide core) | slab  |
   ===============================================
   =========  BOX (2 um SiO2)  ================
   =========  Si Handle Wafer  ================
```

### Key Electrode Features

- **Configuration:** Ground-Signal-Ground (GSG) coplanar waveguide (CPW) or Ground-Signal (GS)
- **Signal electrode** sits above or beside one arm of the MZM
- **Ground electrodes** sit on either side of the signal line
- **Doped contact regions:** heavily doped p++ and n++ regions adjacent to the waveguide connect through **W vias** to M1 pads, then up to M2 CPW electrodes
- **Vias** (tungsten plugs) connect metal layers to Si through the ILD
- **Impedance:** designed for 50 Ohm characteristic impedance
- **Velocity matching:** RF group index (n_microwave ~4-5) matched to optical group index (n_group ~3.5-4.5) using periodic/slow-wave electrode designs
- **Multi-metal-layer construction:** M1 and M2 (and additional layers in iSiPP300) used to create the thick electrodes needed for RF performance

Source:
- imec: "Traveling-wave Mach-Zehnder p-n modulators" and "Micro-ring p-n modulators" [imeciclink.com](https://www.imeciclink.com/en/asic-fabrication/silicon-photonics-foundry-services)
- IEEE JLT 2012 (6159049) -- TWE equivalent circuit model for carrier-depletion Si modulators
- US Patent 20230296925 (InnoLight) -- multi-layer TWE structure with continuous and periodic electrodes [justia.com](https://patents.justia.com/patent/20230296925)
- US Patent 20180180965 -- Si modulator RF electrode cross-section

---

## 8. Key Geometry Summary for Designers

| Parameter | Typical Value | Notes |
|-----------|--------------|-------|
| Si device layer thickness | **220 nm** | Standard for C-band (1550 nm). Verified for imec. |
| BOX thickness | **2 um (2000 nm)** | Sufficient isolation for 1550 nm. |
| Handle wafer thickness | ~675-725 um | Standard Si CMOS thickness. |
| Strip waveguide width | ~400-500 nm | Single-mode for 1550 nm. |
| Rib waveguide slab thickness options | **70 nm** (deep partial) or **150 nm** (shallow partial) | Two distinct partial etch levels. |
| Full etch depth | **220 nm** | Etches through entire device layer to BOX. |
| Ge PD thickness | ~200-500 nm | Selective RPCVD-grown on Si waveguide. |
| Heater-to-waveguide gap | ~1 um (conventional) | SiO2 cladding prevents optical absorption. |
| Heater metal sheet resistance | ~0.5 Ohm/sq | imec SiFab PDK value. |
| MZM electrode type | GSG or GS CPW | Traveling-wave, 50 Ohm target. |
| Typical mask count (full active) | ~17-20 | Si, poly-Si, implants, Ge, contacts, metals, passivation, trench. |
| Typical mask count (passive only) | ~8-10 | No implants, no Ge, no heaters. |

---

## 9. Sources

1. **imec IC-link silicon photonics foundry services** -- https://www.imeciclink.com/en/asic-fabrication/silicon-photonics-foundry-services
2. **imec iSiPP300 platform page** -- https://www.imeciclink.com/en/asic-fabrication/silicon-photonics-foundry-services/isipp300
3. **Europractice imec photonics technology** -- https://europractice-ic.com/technologies/photonics/imec/
4. **Europractice imec photonics (alternative)** -- https://europractice-ic.proyectanda.com/technologies/photonics/imec/
5. **imec Int photonics page** -- https://www.imec-int.com/en/what-we-offer/development/photonics
6. **imec technology details PDF (2022)** -- https://www.imeciclink.com/sites/default/files/2022-06/Technology-details_Silicon-Photonics.pdf
7. **PMC article SOI cross-section** (PMC11340004) -- https://pmc.ncbi.nlm.nih.gov/articles/PMC11340004/figure/fig3/
8. **Nature Photonics 2021 Ge-fin photodetector** -- https://www.nature.com/articles/s41566-021-00893-w
9. **Tsuchizawa et al., IEEE JSTQE 2011** -- Monolithic Integration of Si, Ge, and Silica-Based Optical Devices
10. **Luceda SiFab heater PDK docs** -- https://academy.lucedaphotonics.com/pdks_sources/si_fab/si_fab/ipkiss/si_fab/components/heater/doc/
11. **PMC3601732 heater/waveguide cross-section** -- https://pmc.ncbi.nlm.nih.gov/articles/PMC3601732/figure/g001/
12. **Parra et al., Adv. Photonics Nexus 2024** -- Thermo-optic phase shifter review
13. **IEEE JLT 2012 TWE model** (6159049) -- https://ieeexplore.ieee.org/document/6159049/figures
14. **US Patent 20230296925** -- TWE modulator with multi-layer electrodes -- https://patents.justia.com/patent/20230296925
15. **TSMC COUPE platform** -- https://cloud.tencent.com.cn/developer/article/2545031
16. **Materials Science in Semiconductor Processing 2024** -- Selective epitaxy of Ge on Si for SWIR PDs
