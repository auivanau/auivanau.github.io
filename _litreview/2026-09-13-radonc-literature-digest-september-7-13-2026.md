---
layout: post
title: "Weekly Radiation Oncology Literature Surveillance Digest: September 7–13, 2026"
date: 2026-09-13
permalink: "/litreview/2026/09/13/radonc-literature-digest-september-7-13-2026/"
categories: "litreview oncology radiation-oncology ai medical-physics"
thumbnail: "/assets/litreview-radonc-digest.png"
summary: "A relatively quiet week, led by a multi-cohort lung-tumour interactive segmentation preprint, translational NSCLC radioimmunotherapy biology, and prognostic molecular data in localized NSCLC; no new phase III radiotherapy trial appears practice-changing."
series: radonc-weekly
---

# Weekly Radiation Oncology Literature Surveillance Digest: September 7–13, 2026

## Bottom Line This Week

This was a relatively quiet week for clinically practice-changing radiation oncology literature. I did not identify a new phase III radiotherapy trial, major guideline, or high-level comparative study published during September 7–13 that should alter routine practice.

The most operationally interesting paper is **LeCor**, an arXiv preprint on interactive 3D lung-tumour segmentation. Rather than treating clinician corrections only as prompts, the model uses each correction to perform case-specific test-time adaptation. Across five public CT cohorts, the approach improved segmentation on slices the clinician had not directly edited and reached the accuracy of a conventional fine-tuned model with fewer correction rounds. This is a more clinically plausible direction than fully autonomous contouring because it explicitly assumes physician interaction, but it remains a preprint using simulated clicks rather than a prospective contouring-time or safety study.

The most relevant translational lung paper examines the **METTL14/Wnt9a/β-catenin axis** in NSCLC treated with radiotherapy plus PD-1 blockade. Single-cell and m6A sequencing implicated METTL14 in maintaining cancer-stem-cell biology and resistance, while pharmacologic inhibition enhanced combined treatment efficacy in preclinical models. This is biologically interesting but remains far from a clinical radiosensitization strategy.

A European Lungscape analysis of **TP53, KEAP1, and STK11 alterations in localized NSCLC** is also worth noting because these mutations may eventually refine prognostic or treatment-stratification approaches around surgery, radiotherapy, and perioperative systemic therapy. At present, however, they do not define a radiation prescription or alter standard local therapy.

Overall, the week is best characterized as **hypothesis-generating and workflow-oriented rather than practice-changing**. The AI signal is stronger than the clinical-trial signal, but none of the AI work meets the threshold for unsupervised clinical adoption.

---

## Must Read

### 1. LeCor: Learning to Be Corrected by Meta-Learned Test-Time Training for Interactive 3D Lung-Tumour Segmentation

Citation: Luo Y, Guo Y, Li W, Zhou Z, Zhang R, Ding K. LeCor: Learning to Be Corrected by Meta-Learned Test-Time Training for Interactive 3D Lung-Tumour Segmentation. arXiv. Submitted September 8, 2026.[^1]

Journal/source: arXiv  
Publication type: Preprint; AI segmentation technical validation study  
One-line takeaway: A case-adaptive interactive segmentation model used clinician corrections as test-time training signals and improved lung-tumour segmentation across five public CT datasets with fewer correction rounds.

Evidence tier: Multi-dataset retrospective technical validation; preprint without prospective clinical workflow testing.

Importance score: 7.5/10

Key limitations:

- This is a preprint and has not yet undergone peer review.
- Corrections were simulated rather than supplied prospectively by practicing radiation oncologists.
- Dice improvement does not establish reduced contouring time, fewer clinically meaningful edits, or safer target delineation.
- The model was evaluated on public datasets rather than deployed prospectively in a treatment-planning workflow.
- Interactive adaptation introduces new failure modes that require explicit QA and rollback mechanisms.

Practical radiation oncology relevance:
This is one of the more clinically plausible foundation-model contouring papers because it treats physician editing as part of the intended workflow rather than as a failure of automation. On 690 test cases from five public CT cohorts, fine-tuning SAM 3 improved single-prompt Dice substantially, and LeCor further improved performance after iterative corrections. In the subset of 133 larger lesions, seven correction rounds improved Dice from 0.787 with the fine-tuned model to 0.827, while three LeCor correction rounds matched the accuracy the conventional model required seven rounds to reach. The result is interesting for adaptive and thoracic contouring workflows, but prospective physician-in-the-loop testing should be the next threshold.

---

## Worth Skimming

### 2. Impact of TP53, KEAP1 and STK11 Mutations in Localized-Stage NSCLC: A European Thoracic Oncology Platform Lungscape Project

Citation: Molina-Vila MA, Tsourti Z, Vervita K, Bertran-Alamillo J, García-Peláez B, Kerr KM, Bubendorf L, Madsen LB, Biernat W, Stenzinger A, Haberecker M, Blackhall F, Pokharel S, Jordana-Ariza N, Vives-Usano M, Vagenknecht P, Dafni U, Kammler R, Finn SP, Peters S, Stahel RA, Rosell R. Impact of TP53, KEAP1 and STK11 mutations in localized-stage NSCLC: A European thoracic oncology platform Lungscape project. European Journal of Cancer. 2026;245:116583.[^2]

Journal/source: European Journal of Cancer  
Publication type: Peer-reviewed retrospective molecular cohort study  
One-line takeaway: TP53, KEAP1, and STK11 alterations provide prognostic information in localized NSCLC but do not yet define a radiation-specific treatment strategy.

Evidence tier: Large retrospective translational cohort with centralized molecular characterization.

Importance score: 6.5/10

Key limitations:

- Retrospective design limits causal treatment inference.
- The study is prognostic rather than a randomized test of biomarker-directed therapy.
- Molecular associations may differ across resected, unresectable, and medically inoperable populations.
- The findings do not establish whether radiation dose, fractionation, target volume, or systemic therapy should change by genotype.

Practical radiation oncology relevance:
As perioperative targeted therapy and immunotherapy move earlier in NSCLC, molecular risk factors are becoming increasingly relevant to radiation oncologists as well as medical oncologists. KEAP1 and STK11 in particular have been associated with treatment resistance in advanced disease. This analysis helps extend that discussion into localized NSCLC, but it should currently inform prognosis and trial stratification rather than routine RT prescription.

### 3. Targeting the METTL14/Wnt9a/β-Catenin Pathway Enhances Radiotherapy and Immunotherapy Efficacy in NSCLC

Citation: Ji K, Yu R, Zhang W, Yang H, You L, Li Z. Targeting the METTL14/Wnt9a/β-catenin pathway with pharmacological inhibitors enhances radiotherapy and immunotherapy efficacy in non-small cell lung cancer. European Journal of Pharmacology. 2026;1032:179195.[^3]

Journal/source: European Journal of Pharmacology  
Publication type: Peer-reviewed translational and preclinical mechanistic study  
One-line takeaway: METTL14-mediated Wnt9a/β-catenin signalling appears to support cancer-stem-cell persistence and resistance to combined radiotherapy and PD-1 blockade in NSCLC.

Evidence tier: Translational single-cell and epitranscriptomic analysis with preclinical pharmacologic validation.

Importance score: 6/10

Key limitations:

- The study does not provide clinical efficacy data from a therapeutic trial.
- Mechanistic findings from preclinical models may not translate into a safe or effective radiosensitization strategy.
- The optimal inhibitor, dose, timing, and toxicity profile in combination with thoracic RT are unknown.
- Biomarker selection and generalizability across NSCLC molecular subtypes remain uncertain.

Practical radiation oncology relevance:
The study is mainly relevant to investigators working on radioimmunotherapy resistance. Single-cell RNA sequencing and m6A profiling identified METTL14 as a regulator of Wnt9a stability and β-catenin signalling, with inhibition reducing cancer-stem-cell features and enhancing combined RT/PD-1 effects in experimental systems. It provides a plausible resistance mechanism but is not yet actionable for routine stage III or metastatic NSCLC care.

---

## Save for Later

No additional paper from this 7-day window met the threshold for inclusion here without diluting signal. Several newly indexed radiotherapy-adjacent technical and biological studies were screened but lacked sufficient clinical relevance, external validation, or operational impact.

---

## Low Priority

No paper was included solely to populate this section. This was intentional: the objective of the digest is signal over noise.

---

## Overall Ranking Summary

### Must Read

- 1. LeCor: Learning to Be Corrected by Meta-Learned Test-Time Training for Interactive 3D Lung-Tumour Segmentation

### Worth Skimming

- 2. Impact of TP53, KEAP1 and STK11 Mutations in Localized-Stage NSCLC
- 3. Targeting the METTL14/Wnt9a/β-Catenin Pathway Enhances Radiotherapy and Immunotherapy Efficacy in NSCLC

### Save for Later

- No additional paper met the threshold this week.

### Low Priority

- No paper included solely to fill this category.

---

## References

[^1]: Luo Y, Guo Y, Li W, Zhou Z, Zhang R, Ding K. LeCor: Learning to Be Corrected by Meta-Learned Test-Time Training for Interactive 3D Lung-Tumour Segmentation. *arXiv*. Submitted September 8, 2026. arXiv:2609.09477. DOI and PubMed indexing are not available because this is a preprint. arXiv: https://arxiv.org/abs/2609.09477

[^2]: Molina-Vila MA, Tsourti Z, Vervita K, Bertran-Alamillo J, García-Peláez B, Kerr KM, Bubendorf L, Madsen LB, Biernat W, Stenzinger A, Haberecker M, Blackhall F, Pokharel S, Jordana-Ariza N, Vives-Usano M, Vagenknecht P, Dafni U, Kammler R, Finn SP, Peters S, Stahel RA, Rosell R. Impact of TP53, KEAP1 and STK11 mutations in localized-stage NSCLC: A European thoracic oncology platform Lungscape project. *European Journal of Cancer*. 2026;245:116583. DOI: https://doi.org/10.1016/j.ejca.2026.116583. PubMed: https://pubmed.ncbi.nlm.nih.gov/41723072/

[^3]: Ji K, Yu R, Zhang W, Yang H, You L, Li Z. Targeting the METTL14/Wnt9a/β-catenin pathway with pharmacological inhibitors enhances radiotherapy and immunotherapy efficacy in non-small cell lung cancer. *European Journal of Pharmacology*. 2026;1032:179195. DOI: https://doi.org/10.1016/j.ejphar.2026.179195. PubMed: https://pubmed.ncbi.nlm.nih.gov/42562044/
