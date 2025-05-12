---
layout: post
title: "Defining the MVP & Printer Selection: A Rapid PLA Prototype"
date: 2025-05-12
categories: planning phantom mvp printer
---

After juggling rotations in General Surgery and deep dives into materials research, market surveys, and printer specs, it became clear that my original vision—a multi-material skull with sinuses and PETG eyes—was too ambitious for the short term. I needed a streamlined **MVP** I could complete in weeks, not months.

---

## 🎯 Defining the MVP

**New Short-Term Prototype**:  
- **Single-material PLA skull** (no sinuses or eyes)  
- **Local printing** (Edmonton Public Library Makerspace)  
- **Focus**: Validate end-to-end workflow and printability  

**Project goal:** Create a rapid, tangible PLA prototype with a clear path to add complexity later.

**🧠 Current Phase**:  
- CT data segmented using InVesalius 3  
- STL exported from skull (vault + orbits)  
- Initial slicing in PrusaSlicer failed due to over-detail and unsupported overhangs  

**🧪 Meshmixer Steps**:  
- Attempted plane cut near mandible  
- Discovered dense internal anatomy  
- Tried **Make Solid** and **Separate Shells** but ran into stability issues  
- Exploring decimation and manual cleanup  

**🔜 Next Steps**:  
1. Clean model to retain printability  
2. Submit test print to EPL (PLA)  
3. Produce something tangible, with the hope to have a physical prototype completed before the end of the year  

**🧰 Tools Used**:  
- InVesalius 3  
- Meshmixer  
- PrusaSlicer  
- GitHub Pages (this blog!)  

---

## 🖨️ Choosing the Right 3D Printer

> **Note:** I paused this work for my General Surgery rotation, but I’m back now and ready to pick a printer that fits my MVP.

**Printer Must-Haves**:  
1. Handle abrasive filaments (hardened-steel nozzle for Proto-Pasta Stainless PLA)  
2. Print PETG cleanly (direct-drive extruder preferred)  
3. Fit a build volume ≥ 220 × 220 × 270 mm  
4. Stay under CAD \$1 000 (to leave budget for upgrades)  

| Printer                 | Volume (mm)    | Direct-Drive | Hardened-Nozzle Ready | Price (CAD) | Notes                           |
|-------------------------|----------------|--------------|-----------------------|-------------|---------------------------------|
| **Creality Ender 3 V3** | 220 × 220 × 270 | Yes          | Yes                   | \$600–\$700 | ABL, silent drivers, affordable |
| Anycubic Vyper          | 245 × 245 × 260 | No*          | Yes                   | \$500       | Auto-bed level; Bowden extruder |
| Artillery Sidewinder X1 | 300 × 300 × 400 | Yes          | Yes                   | \$500       | Large build; rapid heat-bed      |

_* Bowden extruders can print PETG but may string more._

**Final Choice:** **Ender 3 V3** — balances features, volume, and budget, letting me start printing small PLA test cubes ASAP.

---

Stay tuned for **Phase 2 Prototype Results**, where I’ll share my first EPL prints and preliminary CT/HU validation!
