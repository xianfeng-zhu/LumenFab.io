# Downloads -- SI, PI, and Thermal Management in Advanced Packaging

This directory contains PDF resources downloaded as part of the SI/PI/thermal research. See `../si-pi-thermal-notes.md` for the full compiled research notes.

## Downloaded Files

| File | Source | Size | Pages | Description |
|---|---|---|---|---|
| `224G_PAM4_End-to-End_Channel_Solutions.pdf` | Intel / DesignCon 2022 | 2.0 MB | 17 | Comprehensive 224G loss budget breakdown for package + PCB. Covers BGA pitch, materials, copper roughness, via design. |
| `DesignCon2022_224G_Packaging.pdf` | IEEE 802.3df | 479 KB | -- | IEEE 802.3df presentation on 224G package modeling. |
| `DesignCon2025_HBM_Interposer_Solutions.pdf` | Alphawave Semi / DesignCon 2025 | 4.3 MB | 25 | HBM3/4 interposer signal integrity: crosstalk reduction, novel shielding structures, 12.8 Gbps equalization. |
| `IEEE_8023_224G_Package_Model.pdf` | IEEE 802.3dj | 262 KB | -- | IEEE 802.3dj presentation on 224G package reference models. |
| `UCIe_Specification.pdf` | UCIe Express | 2.0 MB | 24 | UCIe standard specification for die-to-die chiplet interfaces (including UCIe-3D for hybrid bonding). |

## How These Were Sourced

- Web searches targeted Signal Integrity Journal, IEEE Xplore, Semiconductor Engineering, UCIe Express, and OCP/ODSA.
- PDFs were downloaded via `curl` from public / open-access links.
- Additional resources (keysight.com whitepapers, semiengineering.com articles) are behind soft paywalls; their key findings were extracted via WebFetch and are incorporated into the main research notes.
- ECTC 2023 and IEEE Xplore papers require institutional access and could not be downloaded directly.

## Related Standards (downloadable from respective orgs)

- UCIe 2.0: https://www.uciexpress.org/
- BoW PHY v2.0: https://www.opencompute.org/documents/bunch-of-wires-phy-specification-pdf
- IEEE 802.3df/dj: https://www.ieee802.org/3/
- JEDEC HBM4: https://www.jedec.org/
