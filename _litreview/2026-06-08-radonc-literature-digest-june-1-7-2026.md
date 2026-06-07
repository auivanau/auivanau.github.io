---
layout: post
title: "Weekly Radiation Oncology Literature Surveillance Digest: June 1–7, 2026"
date: 2026-06-08
permalink: /litreview/2026/06/08/radonc-literature-digest-june-1-7-2026/
categories: litreview oncology radiation-oncology ai medical-physics
thumbnail: /assets/litreview-radonc-digest.jpg
summary: "A weekly radiation oncology literature surveillance digest covering adaptive radiotherapy, image guidance, AI contouring, treatment planning, QA, toxicity prediction, SBRT, reirradiation, and major oncology trials."
---

# Weekly Radiation Oncology Literature Surveillance Digest: June 1–7, 2026

Preamble:  
I am one month away from my radiation oncology residency at U of A, starting in July, so I wanted to prime my mind for radiation oncology topics. Also, I wanted to continue experimenting with AI agents via scheduled literature surveillance.

This is a self-curated list using ChatGPT 5.5 Thinking. I created a scheduled task, i.e. a basic AI agent, to provide me with topics in radiation oncology that interest me. Topics include: adaptive radiotherapy, image guidance, AI contouring, treatment planning, QA, toxicity prediction, SBRT, reirradiation, and major oncology trials.

Coverage window searched: **June 1–7, 2026**  
Scope searched: **PubMed/web-indexed PubMed records, arXiv medical physics, medRxiv/bioRxiv, IJROBP, Radiotherapy & Oncology, Practical Radiation Oncology, JCO, Lancet Oncology, Nature Medicine, Medical Physics, and Physics in Medicine & Biology.**

Scoring method:  
Importance scores are heuristic 1–10 editorial scores based on clinical impact, evidence strength, radiation oncology specificity, novelty, generalizability, and immediate practicality.

This was a relatively technical/preprint-heavy week. I found fewer clearly practice-changing peer-reviewed clinical radiation oncology papers than in the previous digest window. The most relevant new items were in treatment planning automation, proton range verification, 4D proton delivery, post-radiotherapy imaging prediction, deep-learning dose prediction, toxicity/supportive care, and rectal cancer long-term outcomes.

---

## Must Read

### 1. Abrar MM, Jia X, Chi Y. A Machine-to-Machine Knowledge-Guided LLM Agent for Generalizable Radiotherapy Treatment Planning

Source: arXiv, 2026  
Publication type: Preprint  
Link/DOI: [^1]

One-line takeaway:  
A prototype LLM planning agent guided by deep-reinforcement-learning-derived treatment-planning parameter knowledge may reduce iterative trial-and-error in automated planning.

Evidence tier: Retrospective technical AI planning study; preprint  
Importance score: 7.5/10

Key limitations:  
Preprint only; not clinically deployed; planning “optimality” depends on the scoring framework; validation was limited to selected prostate and liver scenarios; no prospective planner-vs-agent workflow, safety, or failure-mode study yet.

Practical radiation oncology relevance:  
Highly relevant to planning automation and future “AI planner assistant” workflows. The most useful concept is not that an LLM replaces a planner, but that an LLM can be constrained by physics/planning-parameter knowledge rather than free-form prompting.

---

### 2. Safavi F, Peterson SW, Mossahebi S, et al. The First Nozzle-Mounted Compton Camera Prompt Gamma Imaging System for In Vivo Proton Therapy Dose Verification

Source: arXiv, 2026  
Publication type: Preprint  
Link/DOI: [^2]

One-line takeaway:  
A nozzle-mounted prompt-gamma imaging system showed feasibility for detecting millimetre-scale proton range shifts under realistic delivery conditions.

Evidence tier: Experimental proton-therapy physics study; preprint, submitted to IEEE TMI  
Importance score: 7.5/10

Key limitations:  
Phantom/experimental work rather than patient outcome evidence; clinical value depends on integration, robustness, false positives, action thresholds, and whether range verification changes treatment decisions.

Practical radiation oncology relevance:  
Important for proton therapy, range uncertainty, adaptive proton workflows, and in vivo verification. If this matures, it could support tighter margins or safer adaptive proton treatment, but it is not clinic-changing yet.

---

## Worth Skimming

### 3. von Muehlenen NN, Bieder F, Zhang Y, Cattin PC. Magnet-Free Proton Therapy with 4D Pencil Beam Delivery Optimisation

Source: arXiv, 2026  
Publication type: Preprint  
Link/DOI: [^3]

One-line takeaway:  
A 4D pencil-beam delivery optimization strategy may help manage respiratory motion in simplified proton delivery systems, though fully magnet-free setups had tradeoffs.

Evidence tier: Phantom/simulation proton-therapy methods study; preprint  
Importance score: 6.5/10

Key limitations:  
Phantom-based; simplified delivery configurations; motion irregularity remains difficult; not yet evidence that this improves patient outcomes or clinical throughput.

Practical radiation oncology relevance:  
Relevant to lung/liver proton therapy, motion management, and the long-term goal of more accessible proton systems. Worth reading if interested in cost-reduced proton infrastructure or 4D robust optimization.

---

### 4. Belkacemi N, Huisman S, Keil VC, Verhoeff JJC, David S. 3D-GlioPREDICT: 3D Latent Diffusion for Post-Radiotherapy Brain MRI Prediction in Patients with Glioma

Source: arXiv, 2026  
Publication type: Preprint  
Link/DOI: [^4]

One-line takeaway:  
A 3D latent diffusion model conditioned on baseline MRI, voxel-wise dose, and follow-up time can synthesize post-radiotherapy brain MRI changes in glioma datasets.

Evidence tier: Retrospective AI imaging methods study; preprint  
Importance score: 6.5/10

Key limitations:  
Small dataset: 257 scans from 25 glioma patients; image-similarity metrics do not equal clinically useful prediction; unclear robustness to recurrence, pseudoprogression, treatment heterogeneity, and external datasets.

Practical radiation oncology relevance:  
Interesting for CNS radiomics, toxicity prediction, response modelling, and future adaptive/biology-informed radiotherapy. Not ready for clinical decision-making.

---

### 5. Advancing radiotherapy with deep learning: A review of dose prediction models

Journal: Physica Medica, 2026  
Publication type: Peer-reviewed review  
Link/DOI: [^5]

One-line takeaway:  
A current review of deep-learning dose prediction methods, useful for understanding where automated planning may realistically fit into clinical workflows.

Evidence tier: Narrative/technical review  
Importance score: 6/10

Key limitations:  
Review-level evidence; likely heterogeneous methods and datasets; dose prediction is only one step toward deliverable, approved, safe treatment planning.

Practical radiation oncology relevance:  
Useful background for treatment planning optimization, automated planning research, and understanding the gap between predicted dose and clinically deliverable plans.

---

## Save for Later

### 6. Maham M, et al. Efficacy of Esomeprazole Cream in Preventing Radiation Dermatitis in Breast Cancer Patients Undergoing Radiotherapy

Journal: Journal of Pain and Symptom Management, 2026  
Publication type: Peer-reviewed randomized placebo-controlled clinical trial  
Link/DOI: [^6]

One-line takeaway:  
A topical esomeprazole strategy was tested for prevention of radiation dermatitis in breast radiotherapy.

Evidence tier: Randomized placebo-controlled supportive-care trial  
Importance score: 6/10

Key limitations:  
Need full paper review before changing practice: dermatitis grading, blinding quality, baseline skin care protocols, skin tone representation, fractionation regimens, and magnitude of benefit matter.

Practical radiation oncology relevance:  
Potentially relevant to breast radiotherapy supportive care and patient counselling, but should be interpreted against existing institutional skin-care standards before adoption.

---

### 7. 10-year overall survival in the LARC-RRP trial

Journal: Peer-reviewed clinical outcomes paper, 2026  
Publication type: Peer-reviewed long-term clinical outcomes paper  
Link/DOI: [^7]

One-line takeaway:  
Long-term rectal cancer data address how chemotherapy intensity alongside standard radiotherapy affects metastatic progression and survival.

Evidence tier: Long-term clinical trial follow-up  
Importance score: 6.5/10

Key limitations:  
Need full-text appraisal for exact trial schema, era of surgery/systemic therapy, radiation technique, TNT relevance, and applicability to current rectal cancer pathways.

Practical radiation oncology relevance:  
Relevant to rectal cancer multidisciplinary discussions, especially when thinking about the evolving balance between chemoradiation, total neoadjuvant therapy, systemic intensification, and organ preservation.

---

### 8. Wang B, et al. Chronic liver diseases aggravate radiation-induced intestinal injury

Journal: Journal of Translational Medicine, 2026  
Publication type: Peer-reviewed translational/preclinical study  
Link/DOI: [^8]

One-line takeaway:  
Chronic liver disease may worsen radiation-induced intestinal injury, suggesting comorbidity biology could matter for abdominal/pelvic radiotherapy toxicity risk.

Evidence tier: Translational/preclinical toxicity study  
Importance score: 5.5/10

Key limitations:  
Mechanistic/translational work; not yet a clinical normal tissue complication probability model; unclear how this should alter dose constraints today.

Practical radiation oncology relevance:  
Worth noting for abdominal/pelvic radiotherapy, liver disease comorbidity, and toxicity prediction research. Not immediately practice-changing.

---

## Low Priority

### 9. Ordas L, et al. Emerging Role of Radiopharmaceutical Therapy in Oncology

Journal: Peer-reviewed review, 2026  
Publication type: Peer-reviewed review  
Link/DOI: [^9]

One-line takeaway:  
Reviews radiopharmaceutical therapy as a systemic radiation modality complementing external-beam radiotherapy.

Evidence tier: Narrative review  
Importance score: 5/10

Key limitations:  
Not primarily EBRT workflow-focused; review rather than new clinical trial data; relevance varies depending on whether your centre is involved in theranostics/radiopharmaceutical therapy.

Practical radiation oncology relevance:  
Useful for broader radiation oncology literacy, especially as radiopharmaceutical therapy, nuclear medicine, and radiation oncology continue to overlap. Lower priority if your focus is EBRT/adaptive/AI.

---

### 10. Parkes JD, et al. Proton Beam Radiation Therapy for All Children and Adolescents Globally: Is This a Realistic and Cost-Effective Goal?

Journal: International Journal of Radiation Oncology, Biology, Physics, 2026  
Publication type: Peer-reviewed perspective/commentary  
Link/DOI: [^10]

One-line takeaway:  
A policy-facing discussion of whether universal pediatric/adolescent proton access is realistic and cost-effective.

Evidence tier: Commentary/perspective  
Importance score: 5/10

Key limitations:  
Not new comparative effectiveness data; cost-effectiveness conclusions are context-dependent and health-system-specific.

Practical radiation oncology relevance:  
Good for residents thinking about proton referral patterns, pediatric radiotherapy equity, and technology allocation, but not a direct clinical protocol changer.

---

## Bottom Line This Week

The strongest workflow/technology signal this week is in:

1. Automated treatment planning
2. Proton verification
3. AI-based post-treatment imaging prediction

The most clinically grounded items are more modest:

1. Radiation dermatitis prevention
2. Rectal cancer long-term outcomes
3. Toxicity biology

I would not change practice based on the preprints, but they are good “watchlist” papers for an AI/adaptive/proton-focused radiation oncology literature copilot.

---

## References

[^1]: Abrar MM, Jia X, Chi Y. A Machine-to-Machine Knowledge-Guided LLM Agent for Generalizable Radiotherapy Treatment Planning. arXiv. https://arxiv.org/abs/2606.00922

[^2]: Safavi F, Peterson SW, Mossahebi S, et al. The First Nozzle-Mounted Compton Camera Prompt Gamma Imaging System for In Vivo Proton Therapy Dose Verification. arXiv. https://arxiv.org/abs/2606.03978

[^3]: von Muehlenen NN, Bieder F, Zhang Y, Cattin PC. Magnet-Free Proton Therapy with 4D Pencil Beam Delivery Optimisation. arXiv. https://arxiv.org/abs/2606.03562

[^4]: Belkacemi N, Huisman S, Keil VC, Verhoeff JJC, David S. 3D-GlioPREDICT: 3D Latent Diffusion for Post-Radiotherapy Brain MRI Prediction in Patients with Glioma. arXiv. https://arxiv.org/abs/2606.05113

[^5]: Advancing radiotherapy with deep learning: A review of dose prediction models. Physica Medica. https://doi.org/10.1016/j.ejmp.2026.105827

[^6]: Maham M, et al. Efficacy of Esomeprazole Cream in Preventing Radiation Dermatitis in Breast Cancer Patients Undergoing Radiotherapy. Journal of Pain and Symptom Management. PubMed record listed online June 2, 2026. DOI/link not fully verified in the source digest; replace with exact article URL before publishing.

[^7]: 10-year overall survival in the LARC-RRP trial. DOI/link not fully verified in the source digest; replace with exact article URL before publishing.

[^8]: Wang B, et al. Chronic liver diseases aggravate radiation-induced intestinal injury. Journal of Translational Medicine. https://doi.org/10.1186/s12967-026-08359-9

[^9]: Ordas L, et al. Emerging Role of Radiopharmaceutical Therapy in Oncology. DOI/link not fully verified in the source digest; replace with exact article URL before publishing.

[^10]: Parkes JD, et al. Proton Beam Radiation Therapy for All Children and Adolescents Globally: Is This a Realistic and Cost-Effective Goal? International Journal of Radiation Oncology, Biology, Physics. https://doi.org/10.1016/j.ijrobp.2026.03.027
