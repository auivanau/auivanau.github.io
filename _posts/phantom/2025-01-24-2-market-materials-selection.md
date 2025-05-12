---
layout: post
title: "2. Market Landscape & Materials Selection"
date: 2025-01-24
categories: planning phantom market materials
---

Before prototyping my own phantom, I surveyed two areas in parallel:

1. **What’s on the market?**  
2. **What materials best mimic bone, air, and soft tissue on CT?**  

---

## 1. Market Landscape

| Category               | Examples                                    | Cost          | Notes                                      |
|------------------------|---------------------------------------------|---------------|--------------------------------------------|
| **Commercial Phantoms**| Civco, 3D Systems, Stratasys                | \$5 K–\$20 K+ | Turnkey, multi-material, CT-validated      |
| **Dynamic Phantoms**   | SUNPHAN (Sun Nuclear), PTW Motion Series    | \$10 K+       | Simulate breathing/heartbeat; complex QA   |
| **DIY / Open-Source**  | OpenPhantom, academic builds                | < \$2 K       | Affordable, customizable, but variable HU  |

> **Takeaway:** Commercial solutions excel in CT validation but cost an order of magnitude more than a DIY build. Dynamic (motion) phantoms are valuable but out of scope for my MVP.

---

## 2. Materials Selection

I needed three radiological mimics:

| Component  | Target HU Range      | Material Option                 | Pros                                      | Cons                                  |
|------------|----------------------|---------------------------------|-------------------------------------------|---------------------------------------|
| **Skull**  | 700–3 000 HU         | Proto-Pasta Stainless Steel PLA | Prints on FDM; higher density than PLA    | Abrasive (requires hardened nozzle)   |
| **Sinuses**| –1 000 HU (air)      | Air gaps in the model           | Perfect mimicry; no extra material needed | Must design robust hollow cavities    |
| **Eyes**   | 30–100 HU            | Transparent PETG                | Good clarity; easy print; durable         | Less clear than SLA resin prints      |

### ✨ Why These Choices

- **Stainless PLA** gives mid-bone HU and prints on any FDM with a hardened nozzle.  
- **Air gaps** are the simplest, most accurate way to simulate sinuses’ HU of –1 000 HU.  
- **PETG** offers sufficient transparency for “eyes” without the cost and complexity of resins.

---

## ▶️ Next Steps

1. **Upload** the decision matrix and material-comparison chart (under `/assets`) and link here.  
2. Begin **test prints** of small skull sections at the EPL Makerspace.  
3. Document print times, weight, and initial CT/HU validation.
