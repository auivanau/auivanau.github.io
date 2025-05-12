---
layout: post
title: "2. Market Landscape & Materials Selection"
date: 2025-01-24
categories: planning phantom scope
---

When I started brainstorming this project, I knew I wanted to bridge two parts of my life: my **background in materials engineering**, and my **current path in medicine**. I missed the technical challenges from my engineering career and saw an opportunity to bring that mindset into something clinically useful — particularly for radiation oncology, radiology, and medical education.

## A Tangent That Led Me Here

Before I landed on the idea of building a radiation therapy phantom, I was exploring a completely different path: creating a high-fidelity auscultation dummy to help med students practice hearing murmurs. The idea was to simulate realistic heart sounds using layered materials, embedded speakers, and possibly vibration transducers to replicate how sound travels through the chest.

As I dove into speaker placement and tissue-mimicking composites, it clicked—this was the kind of hands-on design work I used to love in materials engineering. But then a sharper idea emerged: what if I applied that same mindset to radiation?

Radiation oncology also requires anatomically accurate phantoms, especially for quality assurance (QA). Instead of mimicking how sound transmits through a ribcage, I would mimic **radiation** through bone, air, and soft tissue.

So in a way, this project isn’t entirely new. It’s a redirection of the same design impulse—to build something tactile and realistic that lives at the intersection of engineering and medicine.

But I didn't want to get ahead of myself. The first question was obvious: **what exactly should I build?**

## Why the Skull?

I considered other anatomical regions like the hand or pelvis. They could make great future additions, but the skull stood out for several reasons:

* It's **instantly recognizable** and visually impactful.
* It contains a **complex mix of tissues**: dense bone, air-filled sinuses, nervous system structures, and vascular channels—all in a compact volume.
* **Head and neck** anatomy is one of the most challenging regions in radiation oncology for contouring and treatment planning.

If I could build a phantom that performs well in this region, it would set a strong foundation for future development.

## Structuring the Problem

Rather than choosing arbitrarily, I created a **decision matrix** to weigh the pros and cons of different anatomical phantom options. I evaluated four escalating levels of complexity:

* **Option A**: Skull only
* **Option B**: Skull + Sinuses
* **Option C**: Skull + Sinuses + Eyes
* **Option D**: Skull + Sinuses + Eyes + Facial Features

I scored each one across several weighted criteria:

* Anatomical Accuracy
* Distinctiveness
* Feasibility (for 3D printing within my timeline)
* Clinical Relevance
* Educational Value
* Presentation Impact
* Resource Requirements

Each criterion was scored from 1 (poor) to 5 (excellent), and weighted based on my priorities.

### 📊 Decision Matrix Summary

| **Criteria**          | **Weight (%)** | **Option A**<br>Skull Only | **Option B**<br>Skull + Sinuses | **Option C**<br>Skull + Sinuses + Eyes | **Option D**<br>+ Facial Features |
| --------------------- | -------------- | -------------------------- | ------------------------------- | -------------------------------------- | --------------------------------- |
| Anatomical Accuracy   | 20             | 3                          | 4                               | 4                                      | 5                                 |
| Distinctiveness       | 15             | 3                          | 4                               | 5                                      | 5                                 |
| Feasibility           | 15             | 5                          | 4                               | 3                                      | 2                                 |
| Clinical Relevance    | 20             | 3                          | 4                               | 4                                      | 5                                 |
| Educational Value     | 10             | 2                          | 3                               | 4                                      | 5                                 |
| Presentation Impact   | 10             | 2                          | 3                               | 4                                      | 5                                 |
| Resource Requirements | 10             | 5                          | 4                               | 3                                      | 2                                 |
| **Total Score**       | **100**        | **3.1**                    | **3.6**                         | **3.9**                                | **4.0**                           |

## 🏆 The Winner: Option C

While Option D scored the highest, it came with higher complexity and risk. **Option C — Skull with Sinuses and Eyes — offered the best balance** of realism, clinical relevance, visual impact, and print feasibility.

* The **skull** offers strong bone structure and visual recognition.
* The **sinuses** introduce radiologically important air gaps.
* The **eyes**, printed in transparent PETG, offer soft-tissue mimicry and educational value.

## 🌟 Why This Scope Works

This scope is:

* **Visually distinct**: Recognizable and compelling for demonstration and education.
* **Clinically relevant**: Frequently treated area in RT and challenging for planning.
* **Printable**: Compact enough to fit within a single build volume.
* **Scalable**: Leaves room for adding complexity later (facial features, dosimeters, even motion).

With this scope, I can experiment with materials, validate CT Hounsfield Units, and test radiation attenuation—all without biting off more than I can chew during clerkship.

---

Next up: I’ll review what’s already out there in the phantom world — and how my design fits in.



