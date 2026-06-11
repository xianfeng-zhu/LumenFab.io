# Inside a Transceiver — Professional Sources

## 1. Form Factor Dimensions

| Parameter | QSFP-DD | OSFP |
|---|---|---|
| Width | 18.35 mm | 22.6-22.9 mm |
| Height | 8.5 mm | 13.0 mm |
| Depth | ~100 mm | ~100-108 mm |
| Max power (standard) | ~14-15W | ~16W |
| Max power (extended) | up to 25-30W | up to 25W+ (1.6T) |
| Electrical lanes | 8 | 8 |

## 2. PCB Stackup (QSFP-DD, 10-layer HDI)

L1(top): Front-row 4 high-speed signals
L2: Ground (voided under gold fingers)
L3: Rear-row 4 high-speed signals
L4: Signal
L5-L6: Continuous ground planes (reference)
L7: Signal
L8: Rear-row 4 high-speed signals (bottom)
L9: Signal
L10(bottom): Front-row 4 high-speed signals

Via: laser vias L1-L3/L8-L10 (0.1mm drill), buried vias L3-L8, 0.5-0.6mm pitch.

## 3. Three-Zone Internal Layout

1. DSP digital processing zone - near electrical connector (shortest host traces)
2. Integrated silicon optical engine zone - near faceplate (fiber pigtail exit)
3. Power adaptation zone - DC/DC converters, filtering, decoupling

DSP must be thermally isolated from optical engine.

## 4. Power Architecture

3.3V Vcc from gold fingers → on-board DC/DC:

| Rail | Voltage | Supplied To |
|---|---|---|
| DSP Digital core | 0.70-0.85V | DSP core logic |
| DSP Analog | 0.80-1.10V | DSP analog (ADC/DAC/PLL) |
| Optical interface | 1.6-1.8V | Laser driver, TIA, TOSA/ROSA |
| MCU | 3.3V direct | Microcontroller, I2C |

### Power Breakdown (400G DR4/FR4 ~12W):
- DSP: 4-6W (40-50%)
- Laser Driver: 1.0-1.5W (10-12%)
- Lasers + TEC: 2-3W (15-25%)
- TIA: 0.3-0.8W (3-7%)
- MCU/support: 0.5-1W (5-8%)

For coherent ZR/ZR+: DSP alone 8-12W of 15-23W total.

### Analog/Digital Power Isolation
Digital switching noise injects high-freq noise. TIA converts μA currents; ADC/DAC need clean references. Solutions: separate power planes (AVDD/DVDD), star-point ground, ferrite beads, LDOs for analog rails.

## 5. Signal Flow & Latency

TX: Host SerDes → Gold Fingers → DSP(CDR+FEC enc+EQ+PAM4 enc+DAC) → Driver → Laser/Modulator → Fiber
RX: Fiber → PD → TIA → DSP(ADC+EQ+FEC dec+CDR) → Gold Fingers → Host SerDes

Latency:
- DSP-based: 8-10 ns/hop (dominated by retiming + FEC)
- LPO: <3 ns/hop (no DSP, no retiming)
- LRO: ~5 ns/hop (DSP on TX only)

## 6. Thermal Management

Heat path: Junction → TIM pad → Module case → Riding heatsink (dry sliding, ~0.0004 K-m²/W, no TIM) → Heatsink fins → Airflow (2.5-7 m/s)

### Rth values:
- Junction-to-case: ~0.86 °C/W (ΔT ~7.8°C at 70°C case)
- Case-to-heatsink: dominated by sliding interface (no TIM possible)
- OSFP integrated heatsink avoids this bottleneck entirely

### QSFP-DD vs OSFP thermal capacity:
- QSFP-DD (riding): ~1.5 W/channel → ~12W for 8 channels
- OSFP (integrated): >1.9 W/channel → >15W for 8 channels

DSP is dominant heat source (~50% of module power). Module power cap at 25-30W limited by faceplate airflow and riding heatsink physics.

## 7. CMIS (Common Management Interface Specification)

OIF managed, current version 5.3 (Sep 2024).

### Monitored Parameters (DDM/DOM):
- Case Temperature: 1/256°C resolution
- Supply Voltage: 0.1 mV resolution
- Tx Bias Current: 2 μA resolution
- Tx/Rx Optical Power: 0.1 μW resolution
- BER per lane

Each with alarm/warning thresholds (low/high). Three states: Normal, Warning, Alarm.

### Module State Machine (MSM) + Data Path State Machine (DPSM)
Structured power-up and data path initialization.

### Application Advertising (AppSel)
Module advertises supported applications (e.g. 400GBASE-DR4, 4x100G). CMIS 5.3 adds per-application power consumption.

### Firmware Upgrade via CDB
In-system firmware updates without removing transceiver. Hitless updates supported.

## 8. Architecture Variants

| Dimension | DSP-Based | LRO (Half-Retimed) | LPO (Linear) | CPO |
|---|---|---|---|---|
| DSP in module | TX + RX | TX only | None | None |
| Power (800G) | 13-17W | ~9-12W | 7-9W | ~4-5W/800G |
| pJ/bit | ~16-20 | ~12 | ~7 | ~5.6-7 |
| Latency | Highest | Medium | Very low (<3ns) | Lowest |
| Reach | 2km+ | ~2km | <500m | <1m |
| Hot-swap | Yes | Yes | Yes | No |
| MTTR | Minutes | Minutes | Minutes | Hours-days |
| Maturity | Mature | Emerging | 800G shipping | First products 2025 |

Sources:
- QSFP-DD MSA: https://www.qsfp-dd.com/specification/
- Analog Devices DS138: How to Power QSFP-DD
- VitexTech: LPO vs DSP, Thermal Planning Guide, Latency, DDM
- TE Connectivity: System Challenges of Next Gen IO (DesignCon 2018)
- OIF CMIS 5.3: https://www.oiforum.com/
- EFFECT Photonics: Co-Designing Optics Green Transceivers
- Semianalysis: Co-Packaged Optics Book
- Addon Networks: OSFP Journey
- Juniper: Form Factors
