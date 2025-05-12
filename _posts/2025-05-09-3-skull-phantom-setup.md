---
layout: post
title:  "Phase 1 & 2 – From CT to STL: Building a Phantom Skull"
date:   2025-05-09 18:00:00 -0600
categories: radiation-oncology phantom
---

**Project goal:** Create a 3D-printed anthropomorphic phantom for radiation QA, using real CT data and open-source software.

### 🧠 Current Phase:
- CT data segmented using InVesalius
- STL exported from skull + sinuses + orbits
- Initial slicing in PrusaSlicer failed due to over-detail and unsupported overhangs

### 🧪 Meshmixer Steps:
- Attempted plane cut near mandible
- Discovered dense internal anatomy
- Tried `Make Solid` and `Separate Shells` but ran into stability issues
- Exploring decimation and manual cleanup

### 🔜 Next Steps:
- Clean model to retain printability
- Submit test print to EPL
- Launch poster/blog/paper documentation

### 🧰 Tools Used:
- InVesalius 3
- Meshmixer
- PrusaSlicer
- GitHub Pages (this blog!)
