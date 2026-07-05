---

layout: post
title: "Weekly Radiation Oncology Literature Surveillance Digest: June 29–July 5, 2026"
date: 2026-07-05
permalink: /litreview/2026/07/05/radonc-literature-digest-june-29-july-5-2026/
categories: litreview oncology radiation-oncology ai medical-physics
thumbnail: /assets/litreview-radonc-digest.png
summary: "This week’s radiation oncology digest highlights LAD-specific cardiac risk after breast radiotherapy, proton therapy in pediatric rhabdomyosarcoma, robust dose-escalated stereotactic proton planning, synthetic CT-enabled adaptive radiotherapy, CBCT reconstruction from orthogonal X-rays, and open-source software in radiation oncology."

## Weekly Radiation Oncology Literature Surveillance Digest: June 29–July 5, 2026

Coverage window searched: June 29–July 5, 2026

Scope searched: PubMed, arXiv, medRxiv, bioRxiv, IJROBP, Radiotherapy & Oncology, Practical Radiation Oncology, JCO and ASCO publications, Lancet Oncology, Nature Medicine, Medical Physics, and Physics in Medicine & Biology.

Note: This is a best-effort literature surveillance digest, not a formal systematic review.

---

## Bottom Line This Week

The most clinically meaningful paper this week is the JAMA Oncology study on cardiac risk after heart-sparing breast radiotherapy, which suggests that left anterior descending coronary artery dose may be more informative than whole-heart dose metrics for long-term cardiac events.

The most operationally relevant physics and workflow papers are the Gaussian-based stereotactic body proton planning approach, the synthetic CT-enabled adaptive radiotherapy study in nasopharyngeal carcinoma, and the orthogonal X-ray-to-CBCT reconstruction paper.

Nothing this week is a universal immediate practice-changer, but the breast cardiac dosimetry paper is the closest to changing routine plan evaluation. Most other items are implementation-focused or hypothesis-generating, especially the adaptive radiotherapy, AI imaging, and proton planning papers.

Overall, this was a technically useful week for radiation oncology, with moderate clinical importance and strong relevance to planning quality, adaptive workflows, proton therapy, image guidance, and long-term toxicity reduction.

---

## Must Read

1. Cardiac Risk After Heart-Sparing Breast Radiotherapy

Citation: Quirk S, Atkins KM, Logie N, et al. Cardiac Risk After Heart-Sparing Breast Radiotherapy. JAMA Oncology. Published online July 2, 2026.[^1]

Journal/source: JAMA Oncology
Publication type: Peer-reviewed cross-sectional dosimetry/outcomes study
One-line takeaway: LAD-specific dose metrics may predict long-term cardiac events better than whole-heart dose metrics after contemporary breast radiotherapy.

Evidence tier: Large retrospective/cross-sectional clinical outcomes and dosimetry study.

Importance score: 8/10

Key limitations:

- Observational design limits causal inference.
- Single health-system practice patterns may limit generalizability.
- Automated LAD segmentation and dose reconstruction are useful but may not perfectly reflect true coronary anatomy or motion.
- Cardiac events are multifactorial and depend strongly on baseline cardiovascular risk.

Practical radiation oncology relevance:
This is highly relevant for breast radiotherapy planning. It supports paying closer attention to LAD dose, not just mean heart dose, especially for left-sided breast cancer. It also reinforces the value of DIBH, IMRT/VMAT selectivity, prone positioning where appropriate, and cardiac substructure-aware plan review.

2. Proton Beam Therapy in Nonmetastatic Rhabdomyosarcoma

Citation: Proton beam therapy in nonmetastatic rhabdomyosarcoma: outcome, prognostic factors and treatment-related morbidity. International Journal of Radiation Oncology, Biology, Physics. Published online July 2, 2026.[^2]

Journal/source: International Journal of Radiation Oncology, Biology, Physics
Publication type: Peer-reviewed clinical outcomes study
One-line takeaway: Proton therapy outcomes in nonmetastatic rhabdomyosarcoma provide clinically relevant evidence for pediatric and young-adult proton referral decisions.

Evidence tier: Clinical outcomes evidence; likely nonrandomized.

Importance score: 7.5/10

Key limitations:

- Nonrandomized proton series are vulnerable to selection bias.
- Outcomes depend heavily on tumour site, age, group/stage, chemotherapy, surgery, and protocol era.
- Proton dosimetric advantages do not automatically prove lower late toxicity without long follow-up.
- Access and referral pathways vary substantially by health system.

Practical radiation oncology relevance:
This matters for pediatric radiation oncology, proton referral, survivorship, and late-effects reduction. Rhabdomyosarcoma is a disease where integral dose, growth effects, endocrine effects, fertility, second malignancy risk, and functional outcomes can matter for decades.

---

## Worth Skimming

3. A Gaussian-Based Planning Approach for Robust Dose-Escalated Stereotactic Body Proton Therapy

Citation: Zhao X, Mazur TR, Zhang H, et al. A Gaussian-based planning approach for robust dose-escalated stereotactic body proton therapy. International Journal of Radiation Oncology, Biology, Physics. Published online July 1, 2026.[^3]

Journal/source: International Journal of Radiation Oncology, Biology, Physics
Publication type: Peer-reviewed medical physics planning study
One-line takeaway: A Gaussian hotspot-based planning strategy attempts to make stereotactic body proton therapy behave more like ablative photon SBRT while preserving robustness.

Evidence tier: Technical treatment planning validation study.

Importance score: 7/10

Key limitations:

- Planning-quality improvement does not prove improved tumour control.
- Robustness to range uncertainty, motion, setup error, and interplay remains clinically critical.
- Likely evaluated on limited disease sites and selected cases.
- Requires local commissioning, planner expertise, and careful safety review before clinical translation.

Practical radiation oncology relevance:
Worth reading for proton centres and departments thinking about ablative proton therapy. The paper addresses a real conceptual issue: proton plans are often homogeneous, while SBRT often intentionally uses central dose escalation. Whether this improves outcomes remains unproven.

4. Synthetic CT-Enabled Weekly Adaptive Radiotherapy for Nasopharyngeal Carcinoma

Citation: Cao Z, Wu C, Han L, et al. Synthetic CT-enabled weekly adaptive radiotherapy for nasopharyngeal carcinoma: optimizing plan adaptation triggers through volumetric-dosimetric monitoring. Journal of Applied Clinical Medical Physics. 2026;27:e70676.[^4]

Journal/source: Journal of Applied Clinical Medical Physics
Publication type: Peer-reviewed adaptive radiotherapy / medical physics workflow study
One-line takeaway: Synthetic CT and weekly volumetric-dosimetric monitoring may help identify adaptive replanning triggers during nasopharyngeal carcinoma radiotherapy.

Evidence tier: Technical/clinical workflow study; likely retrospective.

Importance score: 6.5/10

Key limitations:

- Adaptive trigger thresholds need prospective validation.
- Nasopharyngeal anatomy and treatment workflows may not generalize to all head and neck sites.
- Synthetic CT accuracy, contour propagation, dose calculation reliability, and workflow burden remain key barriers.
- Demonstrating dosimetric benefit is not the same as demonstrating better xerostomia, swallowing, local control, or quality of life.

Practical radiation oncology relevance:
Very relevant to head and neck adaptive radiotherapy. The practical question is not whether anatomy changes, but when replanning is worth the workload. This paper is useful because it focuses on triggers and timing rather than simply showing that adaptive RT can be done.

5. Physics-Constrained Dual-Domain Network for CBCT Reconstruction From Orthogonal X-Rays in Gynecologic Radiotherapy

Citation: Gao Y, et al. Physics-constrained dual-domain network for CBCT reconstruction from orthogonal X-rays in gynecologic radiotherapy. Medical Physics. First published July 1, 2026.[^5]

Journal/source: Medical Physics
Publication type: Peer-reviewed AI/image reconstruction technical validation study
One-line takeaway: A physics-constrained network reconstructs volumetric CBCT-like images from orthogonal X-rays for gynecologic radiotherapy.

Evidence tier: Technical AI imaging validation study.

Importance score: 6.5/10

Key limitations:

- AI-generated anatomy can hallucinate or smooth clinically important differences.
- Small or single-institution datasets may overestimate performance.
- Gynecologic anatomy is highly deformable, making robust generalization difficult.
- Image similarity metrics do not prove safe online matching or adaptation.

Practical radiation oncology relevance:
Relevant to image guidance and adaptive workflows because it aims to reduce dependence on full daily CBCT while preserving volumetric information. This is promising, but any synthetic or reconstructed image used for positioning or adaptation would require rigorous QA and clinician/physicist oversight.

6. Resource Sharing and Open-Source Software in Radiation Oncology

Citation: Ingram S, et al. Resource sharing and open-source software in radiation oncology. Radiotherapy and Oncology. 2026;220:111587.[^6]

Journal/source: Radiotherapy and Oncology
Publication type: Peer-reviewed review article
One-line takeaway: Open-source tools and shared resources may improve transparency, reproducibility, and collaboration in radiation oncology.

Evidence tier: Review/conceptual workflow article.

Importance score: 6/10

Key limitations:

- Review-level evidence rather than a validated clinical intervention.
- Open-source software still requires local validation, maintenance, cybersecurity review, and governance.
- Adoption barriers include institutional IT policies, regulatory uncertainty, and lack of protected staff time.

Practical radiation oncology relevance:
Useful for departments interested in automation, scripting, data pipelines, plan quality dashboards, and reproducible research. The practical message is that open-source tools can be powerful, but they need clinical-grade validation and ownership.

---

## Save for Later

7. Breast Cancer Reirradiation Practice Patterns

Citation: Hong L, et al. Breast cancer reirradiation practice patterns. Practical Radiation Oncology. 2026.[^7]

Journal/source: Practical Radiation Oncology
Publication type: Peer-reviewed survey / practice-pattern study
One-line takeaway: Contemporary breast reirradiation practice remains variable, reflecting uncertainty around indications, dose, technique, constraints, and patient selection.

Evidence tier: Practice-pattern survey.

Importance score: 5.5/10

Key limitations:

- Survey responses may not reflect actual delivered care.
- Practice patterns do not establish best practice.
- Reirradiation outcomes depend on prior dose, interval, anatomy, recurrence site, surgery, systemic therapy, and patient goals.
- Toxicity and cosmesis data remain essential.

Practical radiation oncology relevance:
Useful for breast and reirradiation clinics. It highlights the need to think carefully about cumulative dose, partial breast approaches, patient selection, and multidisciplinary alternatives.

8. Co-Medications and Gut Microbiome in NSCLC Treated With Durvalumab After Chemoradiotherapy

Citation: Co-medications and gut microbiome in non-small-cell lung cancer treated with durvalumab after chemoradiotherapy. The Lancet Oncology. Published online July 3, 2026.[^8]

Journal/source: The Lancet Oncology
Publication type: Peer-reviewed translational/clinical correlative study
One-line takeaway: Co-medications and microbiome features may influence outcomes after concurrent chemoradiotherapy followed by durvalumab in NSCLC.

Evidence tier: Translational correlative analysis.

Importance score: 5.5/10

Key limitations:

- Correlation does not prove causation.
- Microbiome studies are sensitive to sampling, antibiotics, diet, geography, sequencing methods, and statistical multiplicity.
- The actionable intervention is unclear.
- Radiation-specific variables may be incompletely captured.

Practical radiation oncology relevance:
Relevant to stage III NSCLC because durvalumab after chemoradiotherapy is a core treatment pathway. This is not yet practice-changing, but it may inform future supportive care, antibiotic stewardship, and biomarker-driven trials.

---

## Low Priority

9. Magnetic Resonance Guided Radiotherapy and Cancer Outcomes

Citation: Dullea A, et al. Magnetic resonance guided radiotherapy and cancer outcomes. 2026.[^9]

Journal/source: Clinical imaging/radiotherapy literature
Publication type: Systematic review
One-line takeaway: MR-guided radiotherapy remains promising, but clinical outcome evidence is still evolving and varies by disease site.

Evidence tier: Systematic review.

Importance score: 5/10

Key limitations:

- MRgRT studies are heterogeneous by platform, site, fractionation, adaptation strategy, and endpoint.
- Many studies are single-arm or early implementation series.
- Improved visualization and adaptation do not automatically prove better survival or toxicity outcomes.
- Cost, throughput, staffing, and training remain major implementation barriers.

Practical radiation oncology relevance:
Good background for understanding MR-linac programs and adaptive radiotherapy. Lower priority this week because it is not a new definitive clinical trial or guideline.

10. Radiation-Induced Alopecia in Patients Undergoing Intracranial Radiotherapy

Citation: Jafari M, Hosseini S, Taleei R, Saraei P. Radiation-induced alopecia in patients undergoing intracranial radiotherapy: a systematic review. International Journal of Radiation Oncology, Biology, Physics. 2026.[^10]

Journal/source: International Journal of Radiation Oncology, Biology, Physics
Publication type: Peer-reviewed systematic review
One-line takeaway: Summarizes dose, technique, and patient factors associated with alopecia after intracranial radiotherapy.

Evidence tier: Systematic review.

Importance score: 4.5/10

Key limitations:

- Alopecia endpoints are inconsistently reported.
- Hair follicle dose constraints are not standardized across intracranial RT techniques.
- Cosmetic toxicity matters to patients but rarely drives target coverage decisions.
- Evidence may be heterogeneous across WBRT, SRS, FSRT, proton therapy, and IMRT.

Practical radiation oncology relevance:
Useful for CNS toxicity counselling and survivorship, but lower priority than papers affecting tumour control, major late toxicity, adaptive RT, or treatment selection.

---

## Overall Ranking Summary

Must Read

- 1. Cardiac Risk After Heart-Sparing Breast Radiotherapy
- 2. Proton Beam Therapy in Nonmetastatic Rhabdomyosarcoma

Worth Skimming

- 3. A Gaussian-Based Planning Approach for Robust Dose-Escalated Stereotactic Body Proton Therapy
- 4. Synthetic CT-Enabled Weekly Adaptive Radiotherapy for Nasopharyngeal Carcinoma
- 5. Physics-Constrained Dual-Domain Network for CBCT Reconstruction From Orthogonal X-Rays in Gynecologic Radiotherapy
- 6. Resource Sharing and Open-Source Software in Radiation Oncology

Save for Later

- 7. Breast Cancer Reirradiation Practice Patterns
- 8. Co-Medications and Gut Microbiome in NSCLC Treated With Durvalumab After Chemoradiotherapy

Low Priority

- 9. Magnetic Resonance Guided Radiotherapy and Cancer Outcomes
- 10. Radiation-Induced Alopecia in Patients Undergoing Intracranial Radiotherapy

---

### References

[^1]: Quirk S, Atkins KM, Logie N, et al. Cardiac Risk After Heart-Sparing Breast Radiotherapy. JAMA Oncology. Published online July 2, 2026. DOI: 10.1001/jamaoncol.2026.2066. https://jamanetwork.com/journals/jamaoncology/fullarticle/2850972

[^2]: Proton beam therapy in nonmetastatic rhabdomyosarcoma: outcome, prognostic factors and treatment-related morbidity. International Journal of Radiation Oncology, Biology, Physics. Published online July 2, 2026. DOI: 10.1016/j.ijrobp.2026.06.3066. https://www.redjournal.org/article/S0360-3016(26)03923-4/fulltext

[^3]: Zhao X, Mazur TR, Zhang H, et al. A Gaussian-based planning approach for robust dose-escalated stereotactic body proton therapy. International Journal of Radiation Oncology, Biology, Physics. Published online July 1, 2026. DOI not fully verified during this run. https://www.sciencedirect.com/science/article/pii/S0360301626039246

[^4]: Cao Z, Wu C, Han L, Duan T, Zhang F, Zhang L, Wang B, Lei W, Ni X. Synthetic CT-enabled weekly adaptive radiotherapy for nasopharyngeal carcinoma: optimizing plan adaptation triggers through volumetric-dosimetric monitoring. Journal of Applied Clinical Medical Physics. 2026;27:e70676. DOI: 10.1002/acm2.70676. https://aapm.onlinelibrary.wiley.com/doi/10.1002/acm2.70676

[^5]: Gao Y, et al. Physics-constrained dual-domain network for CBCT reconstruction from orthogonal X-rays in gynecologic radiotherapy. Medical Physics. First published July 1, 2026. DOI not fully verified during this run. https://aapm.onlinelibrary.wiley.com/journal/24734209

[^6]: Ingram S, et al. Resource sharing and open-source software in radiation oncology. Radiotherapy and Oncology. 2026;220:111587. DOI not fully verified during this run. https://www.sciencedirect.com/science/article/pii/S0167814026004263

[^7]: Hong L, et al. Breast cancer reirradiation practice patterns. Practical Radiation Oncology. 2026. DOI not fully verified during this run. https://www.practicalradonc.org/article/S1879-8500(26)00116-5/abstract

[^8]: Co-medications and gut microbiome in non-small-cell lung cancer treated with durvalumab after chemoradiotherapy. The Lancet Oncology. Published online July 3, 2026. DOI not fully verified during this run. https://www.thelancet.com/journals/lanonc/article/PIIS1470-2045(26)00289-5/fulltext

[^9]: Dullea A, et al. Magnetic resonance guided radiotherapy and cancer outcomes. 2026. DOI not fully verified during this run. https://www.sciencedirect.com/science/article/pii/S1078817426001501

[^10]: Jafari M, Hosseini S, Taleei R, Saraei P. Radiation-induced alopecia in patients undergoing intracranial radiotherapy: a systematic review. International Journal of Radiation Oncology, Biology, Physics. 2026. DOI not fully verified during this run. https://www.redjournal.org/articles-in-press
