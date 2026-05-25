# Tower Semiconductor Silicon Photonics Foundry Platform — Reference Notes

Date: 2026-05-25

## Overview

Tower Semiconductor (formerly TowerJazz, Israel-based) is a pure commercial silicon photonics foundry. Its SiPho platforms serve fabless customers through an open foundry model (unlike some proprietary platforms).

## PH18 Platform (200 mm)

- **Wafer**: 200 mm SOI
- **Fab**: Newport Beach, CA, USA
- **Status**: High-volume production (mature workhorse platform)
- **Backend**: Aluminum-based, CMOS-compatible
- **Key components**: Low-loss Si and SiN waveguides, Ge PIN photodiodes and APDs, PIN-diode MZMs, on-chip heaters, facet coupling, under-bump metallization for laser attach
- **Variants**: PH18DA (supports 400G/lane modulators — OpenLight demo, March 2025: 0.6V Vpp, >3.5 dB ER, PAM-4); PH18DB (heterogeneous integration of GaAs quantum dot lasers)
- **Key milestone**: Xscape Photonics (backed by NVIDIA, Cisco) demonstrated industry's first optically-pumped on-chip multi-wavelength laser on PH18 (Aug 2025), supporting CWDM/DWDM for GPU-to-GPU optical interconnects
- **PDK support**: Cadence, Synopsys, Ansys, Luceda, Mentor Graphics; MPW shuttles available
- **Differentiator**: Open platform — accessible to all SiPho customers; fast-turn short-loop runs; complements Tower's SiGe BiCMOS for full E-P integration

## 300 mm SiPho Platform

- **Announced**: November 2024
- **Status**: Standard foundry offering (complements, not replaces, PH18)
- **Features**: Best-in-class Si waveguides, improved low-loss SiN waveguides; enhanced OSAT compatibility
- **Purpose**: Migration path for existing PH18 customers to next-gen technology

## Relevance to LumenFab.io

- Tower is the 5th major foundry confirming SOI as the universal starting substrate for silicon photonics platforms (alongside imec, AIM Photonics, AMF, ST DAPHNE)
- Source: https://towersemi.com/technology/rf-and-hpa/silicon-photonics-rf/
- 300mm SiPho PR: https://towersemi.com/wp-content/uploads/2024/11/SiPho-300mm-PDK-PR_Final-.pdf
- OpenLight 400G/lane demo: https://www.nasdaq.com/press-release/openlight-and-tower-semiconductor-demonstrate-400g-lane-modulators-built-silicon
- Xscape multi-wavelength laser: https://www.xscapephotonics.com/blog-post/xscape-photonics-and-tower-semiconductor-unveil-the-industrys-first-optically-pumped-on-chip-multi-wavelength-laser-platform-for-ai-datacenter-fabrics
