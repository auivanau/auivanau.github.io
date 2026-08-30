---
layout: post
title: "Weekly Radiation Oncology Literature Surveillance Digest: August 24–30, 2026"
date: 2026-08-30
permalink: "/litreview/2026/08/30/radonc-literature-digest-august-24-30-2026/"
categories: "litreview oncology radiation-oncology ai medical-physics"
thumbnail: "/assets/litreview-radonc-digest.png"
summary: "This week’s digest highlights a phase III trial of hypofractionated salvage prostate radiotherapy, updated multidisciplinary guidance for resectable esophageal and GEJ adenocarcinoma, adaptive glioma dose-painting research, real-time six-degree-of-freedom motion monitoring, breast reirradiation, and treatment-planning optimization."
series: radonc-weekly
---

# Weekly Radiation Oncology Literature Surveillance Digest: August 24–30, 2026

## Bottom Line This Week

The most clinically meaningful publication this week is a **phase III randomized trial of hypofractionated versus conventionally fractionated salvage radiotherapy after prostatectomy**. The study randomized 316 patients to 65 Gy in 26 fractions or 66 Gy in 33 fractions. Four-year biochemical progression-free survival was similar, as were distant metastasis-free survival and patient-reported quality of life. The tradeoff was a higher cumulative incidence of grade 2 or greater gastrointestinal toxicity with hypofractionation, particularly among patients treated without an endorectal balloon. This supports 26-fraction salvage radiotherapy as a reasonable convenience-oriented alternative, but not as a superior regimen.

The other major clinical publication is the **2026 American Radium Society Appropriate Use Criteria for resectable esophageal and gastroesophageal junction adenocarcinoma**. The update is important because perioperative systemic therapy has increasingly challenged the historic trimodality paradigm of chemoradiotherapy followed by surgery. The document synthesizes newer randomized data and provides recommendations spanning chemotherapy, chemoradiotherapy, immunotherapy, targeted therapy, postoperative treatment, and active surveillance after chemoradiotherapy. It is guidance rather than new comparative evidence, but it is directly relevant to multidisciplinary practice.

The most operationally interesting physics paper demonstrates **real-time six-degree-of-freedom tumour-motion monitoring on a standard linear accelerator** using intermittent kV imaging and an internal-external correlation model. Translational errors were generally within a few millimetres and the approach required approximately 95% fewer intrafraction kV images than continuous fluoroscopy. This is promising for liver and lung SBRT, although validation remains limited to a motion platform and three patients from a liver SBRT trial.

The most conceptually ambitious adaptive-radiotherapy paper used quantitative MRI, mathematical modelling, and dose painting to generate mid-treatment adaptive glioma plans. In 15 patients, the model predicted lower post-treatment tumour burden with adapted plans than with standard plans. However, these are **model-predicted outcomes rather than observed clinical outcomes**, making this a hypothesis-generating computational study rather than evidence for adaptive glioma dose escalation.

AI again generated more technical than clinical signal. A rectal-cancer MRI segmentation preprint used large-scale CT pretraining and parameter-efficient fine-tuning, but it remained single-institutional and incompletely calibrated. It is included only as a low-priority example of where adaptive-contouring research is heading.

Nothing this week clearly changes a universal standard of care. The prostate trial is practice-informing, the esophageal guideline is decision-structuring, and most physics/AI work remains implementation-focused or hypothesis-generating. Overall, this was a **moderately useful week**, strongest for prostate salvage fractionation, multidisciplinary upper-GI decision-making, motion management, and adaptive-radiotherapy research.

---

## Must Read

### 1. Salvage Hypofractionated Accelerated Versus Standard Radiotherapy for Biochemical Recurrence After Radical Prostatectomy

Citation: Song Y, Park W, Pyo H, Kim YJ, Ahn H, Kim HJ, Kim YS. Salvage Hypofractionated Accelerated Versus Standard Radiotherapy for Biochemical Recurrence After Radical Prostatectomy: A Phase III Randomized Clinical Trial. Journal of Clinical Oncology. Published online August 25, 2026.[^1]

Journal/source: Journal of Clinical Oncology  
Publication type: Peer-reviewed randomized phase III clinical trial  
One-line takeaway: Salvage radiotherapy delivered as 65 Gy in 26 fractions achieved similar 4-year biochemical control to 66 Gy in 33 fractions, but with more grade 2 or greater gastrointestinal toxicity.

Evidence tier: High-level prospective randomized phase III evidence.

Importance score: 9/10

Key limitations:

- The trial was designed to test superiority rather than formal noninferiority, so similar outcomes do not mathematically establish equivalence.
- Median follow-up of 52.6 months remains relatively short for prostate-cancer metastasis and survival endpoints.
- Androgen-deprivation therapy and elective pelvic nodal irradiation were not uniform across the cohort.
- Endorectal balloons were used in 63% of patients, potentially limiting applicability to contemporary departments that rarely use them.

Practical radiation oncology relevance:
This is directly relevant to prostate salvage practice. Four-year biochemical progression-free survival was 80.1% with 65 Gy in 26 fractions versus 78.1% with 66 Gy in 33 fractions, while distant metastasis-free survival and quality of life were similar. The major caution is gastrointestinal toxicity: grade 2 or greater GI toxicity was 7.9% versus 0.7%, concentrated particularly among patients without an endorectal balloon. The regimen may be a reasonable shorter option, but there is no evidence here that it is oncologically superior.

### 2. American Radium Society Appropriate Use Criteria for Resectable Esophageal and Gastroesophageal Junction Adenocarcinoma

Citation: Anker CJ, Juloori A, Codipilly DC, Lee P, Jethwa KR, Selfridge JE, Jin Z, Abood G, Akselrod D, Amini A, Attallah J, Donington J, Dozois E, Edelman MJ, Hallemeier CL, Iyengar P, Jabbour SK, Kennedy T, Ling DC, et al. Executive Summary of the American Radium Society Appropriate Use Criteria for a Multidisciplinary Treatment Approach to the Management of Resectable Esophageal and Gastroesophageal Junction Adenocarcinoma. International Journal of Radiation Oncology, Biology, Physics. Published online August 25, 2026.[^2]

Journal/source: International Journal of Radiation Oncology, Biology, Physics  
Publication type: Peer-reviewed systematic review and multidisciplinary guideline / Appropriate Use Criteria  
One-line takeaway: Updated ARS guidance incorporates recent randomized evidence comparing perioperative systemic therapy with trimodality treatment and reframes where radiotherapy fits in resectable esophageal and GEJ adenocarcinoma.

Evidence tier: Multidisciplinary guideline based primarily on randomized phase II and III evidence plus formal RAND-UCLA consensus methodology.

Importance score: 8.5/10

Key limitations:

- Appropriate Use Criteria synthesize evidence and expert judgment rather than generating new comparative outcomes.
- Rapidly evolving perioperative immunotherapy and targeted-therapy data may outpace guideline publication.
- Recommendations depend on tumour location, Siewert classification, staging accuracy, surgical candidacy, institutional expertise, and treatment availability.
- The evidence base includes heterogeneous trials with differing chemotherapy regimens, radiation approaches, surgical techniques, and endpoints.

Practical radiation oncology relevance:
This is worth reading because the role of neoadjuvant chemoradiotherapy in resectable adenocarcinoma is no longer discussed in isolation from modern perioperative systemic therapy. The guideline explicitly addresses chemotherapy, chemoradiotherapy, immunotherapy, targeted therapy, postoperative treatment, and active surveillance after chemoradiotherapy. It is particularly useful for tumour-board discussions where the question is not simply “radiation or no radiation,” but which multimodality pathway best fits the patient.

---

## Worth Skimming

### 3. Towards a Clinically Practical Computational Platform for Systematically Adapting Radiation Therapy for Glioma Patients

Citation: Miniere HJM, Hormuth DA II, Lima EABF, Whitaker TJ, Farhat M, Panthi B, Langshaw H, Shanker MD, Talpur W, Thrower S, Goldman J, Chung C, Yankeelov TE. Towards a clinically practical computational platform for systematically adapting radiation therapy for glioma patients. Physics in Medicine and Biology. 2026;71(16):165021.[^3]

Journal/source: Physics in Medicine and Biology  
Publication type: Peer-reviewed computational adaptive-radiotherapy and treatment-planning study  
One-line takeaway: Quantitative MRI and mathematical tumour-response modelling were used to generate clinically deliverable mid-treatment dose-painting plans predicted to reduce tumour burden relative to standard glioma radiotherapy.

Evidence tier: Small retrospective computational modelling study using imaging from 15 patients; no prospective treatment or observed clinical endpoint.

Importance score: 7/10

Key limitations:

- The primary benefit was model-predicted tumour burden, not measured local control, progression-free survival, or overall survival.
- Only 15 high-grade glioma patients were studied.
- Model calibration and biological assumptions may fail when tumour behaviour deviates from the mathematical framework.
- Some complex adaptive boost geometries could not be reproduced faithfully by the clinical treatment-planning system.

Practical radiation oncology relevance:
This paper is more interesting as a blueprint for adaptive decision-making than as evidence to change glioma treatment. Quantitative MRI at baseline and week 3 identified proliferative regions for boosting, after which a physicist converted the proposed dose maps into deliverable plans. The model predicted about a 30% median reduction in tumour burden versus standard therapy. The important next step is prospective validation showing that the model predicts actual biology before it is used to alter prescription dose.

### 4. Real-Time Six-Degree-of-Freedom Internal-External Correlation for Motion Monitoring on a Standard Linear Accelerator

Citation: Kaczynska A, Jin F, Stewart M, Kipritidis J, Booth JT, Hardcastle N, Keall PJ, Sengupta C. A real-time image-guided six-degree-of-freedom internal-external correlation framework for motion monitoring on a standard linear accelerator. Physics in Medicine and Biology. Published online August 25, 2026.[^4]

Journal/source: Physics in Medicine and Biology  
Publication type: Peer-reviewed technical validation study  
One-line takeaway: A correlation model combining an external respiratory signal with intermittent kV imaging estimated six-degree-of-freedom tumour motion with clinically relevant accuracy while markedly reducing imaging frequency.

Evidence tier: Experimental phantom validation plus limited retrospective patient-data validation.

Importance score: 7/10

Key limitations:

- Patient validation included only three liver SBRT patients.
- Accuracy depends on stability of the internal-external respiratory correlation, which can degrade with irregular breathing or baseline drift.
- The system monitors motion but does not by itself demonstrate successful real-time beam adaptation or gating.
- Fiducial-based workflows may not translate to tumours without reliable internal surrogates.

Practical radiation oncology relevance:
This is a practical motion-management concept because it is designed for a standard linac rather than specialized tracking hardware. The framework updated its internal-external model using kV images every 3 seconds and inferred motion between images from the external respiratory signal. Experimental and patient errors were generally within a few millimetres and a few degrees, with approximately 95% fewer intrafraction kV images than continuous fluoroscopy. If prospectively validated, this could expand access to real-time monitoring for liver and lung SBRT.

### 5. Second Breast-Conserving Treatment for Ipsilateral Breast Tumor Recurrence

Citation: Cheptea C, Kirova Y, Mitrica RI, Badea M, Loap P. Second Breast-Conserving Treatment for Ipsilateral Breast Tumor Recurrence: A Review of Patient Selection, Reirradiation Techniques, and Clinical Outcomes. International Journal of Cancer. Published online August 25, 2026.[^5]

Journal/source: International Journal of Cancer  
Publication type: Peer-reviewed review article  
One-line takeaway: Carefully selected patients with ipsilateral breast tumour recurrence may undergo repeat breast-conserving surgery plus partial-breast reirradiation instead of mastectomy.

Evidence tier: Review of predominantly prospective single-arm and retrospective reirradiation evidence.

Importance score: 6.5/10

Key limitations:

- The underlying reirradiation literature is heterogeneous and largely nonrandomized.
- Patient selection strongly influences reported local control and cosmetic outcomes.
- Techniques include brachytherapy, external-beam partial-breast irradiation, and other approaches that are not directly interchangeable.
- Long-term toxicity and second-recurrence risks remain less certain than after standard salvage mastectomy.

Practical radiation oncology relevance:
Second breast conservation is increasingly relevant for motivated patients with small, late, unifocal ipsilateral recurrences and favourable anatomy. This review is useful as a framework for selecting patients and comparing reirradiation techniques, but repeat breast conservation remains a specialized option rather than a default replacement for mastectomy.

---

## Save for Later

### 6. Ventilatory Motion Management Strategies in Conscious Individuals for Improved Radiotherapy and Diagnostic Imaging

Citation: Veldman-Landegent JK, Weststrate T, Stevens MF, Parkes MJ, Daams JG, van Schuppen J, van den Aardweg JG, Palacios MA, van Tienhoven G, Versteijne E, Bel A, van Dijk IWEM. Ventilatory motion management strategies in conscious individuals for improved radiotherapy and diagnostic imaging: an evidence map. British Journal of Radiology. Published online August 26, 2026.[^6]

Journal/source: British Journal of Radiology  
Publication type: Peer-reviewed evidence map / review  
One-line takeaway: The review maps the expanding range of breath-hold, respiratory-control, coaching, and ventilation-modification strategies used to reduce motion during radiotherapy and imaging.

Evidence tier: Evidence-mapping review; broad synthesis rather than comparative efficacy evidence.

Importance score: 5.5/10

Key limitations:

- An evidence map describes the literature landscape but does not establish a single best motion-management strategy.
- Techniques, endpoints, patient populations, and imaging modalities are highly heterogeneous.
- Many motion-management interventions depend strongly on patient compliance and local equipment.
- Evidence for improved clinical outcomes is substantially weaker than evidence for geometric or dosimetric improvement.

Practical radiation oncology relevance:
This is a useful reference for departments designing motion-management protocols in thoracic and upper-abdominal radiotherapy. It helps place familiar strategies such as deep-inspiration breath hold, respiratory coaching, abdominal compression, and other ventilatory-control approaches within a broader evidence landscape.

### 7. From Optimization of Radiation Dose Distributions to Optimal Cancer Treatments

Citation: Bortfeld T, Webb S. From optimization of radiation dose distributions to optimal cancer treatments. Physics in Medicine and Biology. Published online August 25, 2026.[^7]

Journal/source: Physics in Medicine and Biology  
Publication type: Peer-reviewed review and perspective article  
One-line takeaway: The authors trace radiotherapy optimization from inverse planning and robust dose optimization toward adaptive, biologically informed, and whole-treatment-strategy optimization.

Evidence tier: Expert historical and conceptual review.

Importance score: 5/10

Key limitations:

- This is a perspective and review rather than clinical validation of a specific optimization method.
- Many biologically informed and AI-enabled optimization concepts remain investigational.
- Optimal mathematical objective functions may not map cleanly onto patient-valued clinical outcomes.
- Workflow, uncertainty, explainability, and clinician oversight remain major barriers to fully automated treatment optimization.

Practical radiation oncology relevance:
This is valuable background for anyone working in treatment-planning optimization or AI. The central shift is from asking how to optimize a static dose distribution toward asking how imaging, adaptation, uncertainty, biology, and treatment sequencing can be optimized across the entire cancer-treatment pathway. It is more conceptual than immediately actionable.

---

## Low Priority

### 8. Parameter-Efficient Pretrained CT-to-MRI Transfer for Rectal Cancer Segmentation

Citation: Rangnekar A, Tapias Gomez J, Deasy JO, Veeraraghavan H. Parameter-Efficient pretrained-CT-to-MRI Transfer for Rectal Cancer Segmentation: Performance-Calibration Trade-offs. arXiv. Submitted August 27, 2026.[^8]

Journal/source: arXiv  
Publication type: Preprint; AI segmentation technical validation study  
One-line takeaway: Large-scale CT pretraining with parameter-efficient MRI fine-tuning improved rectal-tumour detection while reducing trainable parameters, but performance remained modest and externally unvalidated.

Evidence tier: Single-institution retrospective AI development study; preprint without prospective or external clinical validation.

Importance score: 4/10

Key limitations:

- The test cohort came from a single institution and scanner-vendor environment.
- Median surface Dice remained modest, around 0.61–0.64 depending on configuration.
- Calibration remained imperfect even after temperature scaling.
- The study did not assess physician editing time, adaptive-treatment decisions, dosimetric consequences, or patient outcomes.

Practical radiation oncology relevance:
The paper is technically relevant to MRI-guided adaptive rectal radiotherapy because it explores efficient cross-modality pretraining and uncertainty calibration. However, it is exactly the kind of AI study that should not be overinterpreted: the model is a preprint, external clinical generalizability is unknown, and segmentation metrics alone do not establish a safe adaptive workflow.

---

## Overall Ranking Summary

### Must Read

- 1. Salvage Hypofractionated Accelerated Versus Standard Radiotherapy for Biochemical Recurrence After Radical Prostatectomy
- 2. American Radium Society Appropriate Use Criteria for Resectable Esophageal and Gastroesophageal Junction Adenocarcinoma

### Worth Skimming

- 3. Towards a Clinically Practical Computational Platform for Systematically Adapting Radiation Therapy for Glioma Patients
- 4. Real-Time Six-Degree-of-Freedom Internal-External Correlation for Motion Monitoring on a Standard Linear Accelerator
- 5. Second Breast-Conserving Treatment for Ipsilateral Breast Tumor Recurrence

### Save for Later

- 6. Ventilatory Motion Management Strategies in Conscious Individuals for Improved Radiotherapy and Diagnostic Imaging
- 7. From Optimization of Radiation Dose Distributions to Optimal Cancer Treatments

### Low Priority

- 8. Parameter-Efficient Pretrained CT-to-MRI Transfer for Rectal Cancer Segmentation

---

## References

[^1]: Song Y, Park W, Pyo H, Kim YJ, Ahn H, Kim HJ, Kim YS. Salvage Hypofractionated Accelerated Versus Standard Radiotherapy for Biochemical Recurrence After Radical Prostatectomy: A Phase III Randomized Clinical Trial. *Journal of Clinical Oncology*. Published online August 25, 2026. DOI: https://doi.org/10.1200/JCO-25-02234. PubMed: https://pubmed.ncbi.nlm.nih.gov/42641124/

[^2]: Anker CJ, Juloori A, Codipilly DC, Lee P, Jethwa KR, Selfridge JE, Jin Z, Abood G, Akselrod D, Amini A, Attallah J, Donington J, Dozois E, Edelman MJ, Hallemeier CL, Iyengar P, Jabbour SK, Kennedy T, Ling DC, Miller ED, Newman NB, Park HS, Rimner A, Sharma N, Sio TT, Slotman BJ, Small W Jr, Tao R, Tchelebi L, Wolf A, Russo S, Simone CB II. Executive Summary of the American Radium Society Appropriate Use Criteria for a Multidisciplinary Treatment Approach to the Management of Resectable Esophageal and Gastroesophageal Junction Adenocarcinoma. *International Journal of Radiation Oncology, Biology, Physics*. Published online August 25, 2026. DOI: https://doi.org/10.1016/j.ijrobp.2026.08.038. PubMed: https://pubmed.ncbi.nlm.nih.gov/42641667/

[^3]: Miniere HJM, Hormuth DA II, Lima EABF, Whitaker TJ, Farhat M, Panthi B, Langshaw H, Shanker MD, Talpur W, Thrower S, Goldman J, Chung C, Yankeelov TE. Towards a clinically practical computational platform for systematically adapting radiation therapy for glioma patients. *Physics in Medicine and Biology*. 2026;71(16):165021. DOI: https://doi.org/10.1088/1361-6560/ae9687. PubMed: https://pubmed.ncbi.nlm.nih.gov/42562016/

[^4]: Kaczynska A, Jin F, Stewart M, Kipritidis J, Booth JT, Hardcastle N, Keall PJ, Sengupta C. A real-time image-guided six-degree-of-freedom internal-external correlation framework for motion monitoring on a standard linear accelerator. *Physics in Medicine and Biology*. Published online August 25, 2026. DOI: https://doi.org/10.1088/1361-6560/ae9e81. PubMed: https://pubmed.ncbi.nlm.nih.gov/42644250/

[^5]: Cheptea C, Kirova Y, Mitrica RI, Badea M, Loap P. Second Breast-Conserving Treatment for Ipsilateral Breast Tumor Recurrence: A Review of Patient Selection, Reirradiation Techniques, and Clinical Outcomes. *International Journal of Cancer*. Published online August 25, 2026. DOI: https://doi.org/10.1002/ijc.70718. PubMed: https://pubmed.ncbi.nlm.nih.gov/42638516/

[^6]: Veldman-Landegent JK, Weststrate T, Stevens MF, Parkes MJ, Daams JG, van Schuppen J, van den Aardweg JG, Palacios MA, van Tienhoven G, Versteijne E, Bel A, van Dijk IWEM. Ventilatory motion management strategies in conscious individuals for improved radiotherapy and diagnostic imaging: an evidence map. *British Journal of Radiology*. Published online August 26, 2026. DOI: https://doi.org/10.1093/bjr/tqag202. PubMed: https://pubmed.ncbi.nlm.nih.gov/42644822/

[^7]: Bortfeld T, Webb S. From optimization of radiation dose distributions to optimal cancer treatments. *Physics in Medicine and Biology*. Published online August 25, 2026. DOI: https://doi.org/10.1088/1361-6560/ae9a29. PubMed: https://pubmed.ncbi.nlm.nih.gov/42600639/

[^8]: Rangnekar A, Tapias Gomez J, Deasy JO, Veeraraghavan H. Parameter-Efficient pretrained-CT-to-MRI Transfer for Rectal Cancer Segmentation: Performance-Calibration Trade-offs. *arXiv*. Submitted August 27, 2026. arXiv identifier: 2608.27178. DOI and PubMed indexing are not available because this is a preprint. arXiv: https://arxiv.org/abs/2608.27178
