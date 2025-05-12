---
layout: post
title: "1. Choosing the Scope: Skull, Eyes & Sinuses"
date: 2025-01-22
categories: planning phantom scope
---

When I started brainstorming this project, I knew I wanted to bridge two parts of my life: my **background in materials engineering**, and my **current path in medicine**. I missed the technical challenges from my engineering career, and saw an opportunity to bring that mindset into something clinically useful — particularly for radiation oncology, radiology, and education.

### A Tangent That Led Me Here

Before I landed on the idea of building a radiation therapy phantom, I was actually exploring something totally different—a high-fidelity auscultation dummy to help med students practice hearing murmurs. The idea was to simulate realistic heart sounds using layered materials, speakers, and maybe even vibration transducers to replicate how sound travels through the chest.

As I dove into speaker placement and tissue-like composites, it hit me—this was exactly the kind of hands-on design I used to love in materials engineering. But then a sharper idea came in: what if I applied that same mindset to radiation?

Radiation oncology has its own need for anatomically accurate phantoms, especially for QA. So I pivoted. Instead of mimicking sound through a ribcage, I’d mimic **radiation** through bone, air, and soft tissue.

So in a way, this isn’t a brand-new idea—it’s just the same design itch, redirected toward something even more clinically relevant. But *maybe* in the future, I can incorporate bio-printing real cells on to this, perhaps I can test different methods and materials of 3d-printing material, maybe incorporate sensors, motors? Who knows.

But I didn't want to get ahead of myself. The first challenge was obvious: **what exactly should I build?**

The skull, sinuses, and eyes became the perfect target: small, distinct, radiologically complex, and realistically printable on a tight schedule.

---

### 🧠 Structuring the Problem

Rather than choosing arbitrarily, I took a structured approach. I created a **decision matrix** to weigh the pros and cons of different anatomical phantom options. I evaluated four escalating levels of complexity:

- **Option A**: Skull only  
- **Option B**: Skull with Sinuses  
- **Option C**: Skull with Sinuses and Eyes  
- **Option D**: Skull with Sinuses, Eyes, and Basic Facial Features

I scored each one across several weighted criteria:
- Anatomical Accuracy
- Distinctiveness
- Feasibility (for 3D printing within my timeline)
- Clinical Relevance
- Educational Value
- Presentation Impact
- Resource Requirements

Each criterion was weighted based on what I personally valued for this project, and each option was rated from 1 (poor) to 5 (excellent) per criterion. 

![Decision Matrix-Scope](/assets/phantom_decision_matrix.png)

---

### 🏆 The Winner: Option C

While Option D scored the highest overall, it came with higher complexity and risk. **Option C — Skull with Sinuses and Eyes — emerged as the best balance** between realism, clinical relevance, visual impact, and print feasibility.

- The **skull** provides a recognizable structure with bone density mimicking
- The **sinuses** allow for accurate air gaps to test radiological behavior
- The **eyes**, printed in transparent PETG, offer soft-tissue simulation and enhance educational use

---

### 🎯 Why This Scope Works

This setup is:
- **Visually distinct**: easy to recognize from across a room
- **Clinically relevant**: skull, orbits, and sinuses are common RT targets
- **Printable**: fits within a single build volume on an FDM printer
- **Scalable**: allows future iterations (e.g. facial features, dosimeters)

It also leaves room to experiment with materials, validate CT behavior, and eventually integrate with clinical QA workflows — without being so complex that I can’t finish it by October.

---

Next up: I’ll review what’s already out there in the phantom world — and how my design fits in.
