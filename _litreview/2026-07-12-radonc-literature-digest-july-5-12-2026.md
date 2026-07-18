---
layout: post
title: "Weekly Radiation Oncology Literature Surveillance Digest: July 5–12, 2026"
date: 2026-07-12
permalink: "/litreview/2026/07/12/radonc-literature-digest-july-5-12-2026/"
categories: "litreview oncology radiation-oncology ai medical-physics"
thumbnail: "/assets/litreview-radonc-digest.png"
summary: "This week’s digest highlights simulation-free palliative radiotherapy, CBCT-guided online adaptive prostate SBRT, cardiac toxicity after central lung SBRT, federated learning for pneumonitis prediction, breast secondary-cancer modelling, and practical device and workflow studies."
---

# Weekly Radiation Oncology Literature Surveillance Digest: July 5–12, 2026

**Suggested filename:** `2026-07-12-radonc-literature-digest-july-5-12-2026.md`

**Coverage window searched:** July 5–12, 2026

**Scope searched:** PubMed, arXiv, medRxiv, bioRxiv, IJROBP, Radiotherapy & Oncology, Practical Radiation Oncology, JCO and ASCO publications, Lancet Oncology, Nature Medicine, Medical Physics, and Physics in Medicine & Biology.

**Note:** This is a best-effort literature surveillance digest, not a formal systematic review. Online-first dates were used where available. Articles assigned to a July issue but first released before the surveillance window were generally excluded.

---

## Bottom Line This Week

The most clinically and operationally meaningful paper this week is the prospective implementation study of **simulation-free, single-fraction radiotherapy for non-spine bone and soft-tissue metastases**. Its main contribution is not a new dose schedule, but a potentially lower-burden pathway using a recent diagnostic CT, on-unit verification, and same-day treatment.

The strongest adaptive-radiotherapy paper is the retrospective study of **CBCT-based online adaptive prostate SBRT**. Adaptation consistently improved target coverage, but organ-at-risk benefits were less reliable, reinforcing that adaptive radiotherapy should not automatically be equated with broad normal-tissue sparing.

The most relevant AI paper is the multicentre **center-specific federated-learning framework for radiation pneumonitis prediction**. Federated learning is operationally attractive because institutions can collaborate without centralizing patient data, but retrospective model performance is not yet evidence of improved patient outcomes or safe clinical deployment.

The central and ultracentral lung SBRT cardiac-toxicity study is clinically important, although retrospective. It strengthens the argument that cardiac substructures deserve attention in thoracic SBRT rather than treating the heart as a single homogeneous organ.

Nothing this week clearly establishes a new universal standard of care. The dominant theme is **implementation and risk refinement**: faster palliative workflows, more reliable adaptive target coverage, improved toxicity modelling, and safer management of technically complex patients.

Overall, this was a moderately important week for radiation oncology practice, with more near-term workflow relevance than practice-changing randomized evidence.

---

## Must Read

### 1. Simulation-Free Single-Fraction High-Dose Radiotherapy for Non-Spine Bone and Soft Tissue Metastases

Citation: Hoerner-Rieber J, et al. Simulation-Free Single-Fraction High-Dose Radiotherapy for Non-Spine Bone and Soft Tissue Metastases. Practical Radiation Oncology. Published online July 7, 2026.[^1]

Journal/source: Practical Radiation Oncology  
Publication type: Peer-reviewed prospective implementation and technical validation study  
One-line takeaway: Selected patients with non-spine bone or soft-tissue metastases were treated using a recent diagnostic CT without a separate simulation visit, enabling a streamlined single-fraction pathway.

Evidence tier: Prospective implementation cohort preceded by technical validation; clinically relevant but nonrandomized.

Importance score: 8/10

Key limitations:

- Small prospective cohort and selected lesions limit generalizability.
- Simulation-free treatment depends on recent diagnostic imaging of adequate quality and reproducible anatomy.
- Rotational setup error and mismatch between diagnostic and treatment positioning can reduce target coverage.
- The study demonstrates feasibility and acute safety, not comparative pain response, late toxicity, or health-system cost-effectiveness.

Practical radiation oncology relevance:
This is directly relevant to palliative radiation oncology and department workflow. A validated diagnostic-CT-based pathway could reduce visits, shorten time to treatment, and improve access for symptomatic patients. Departments adopting this approach would need strict eligibility criteria, image-transfer standards, immobilization rules, on-unit verification, and escalation procedures when anatomy differs.

### 2. CBCT-Based Online Daily Adaptive Treatment Improves Target Coverage With Limited Benefit for OAR Protection in SBRT Prostate Cancer

Citation: Gáldi Á, Ágoston P, Pesznyák C, Takácsi-Nagy Z, Major T. CBCT-Based Online Daily Adaptive Treatment Improves Target Coverage With Limited Benefit for OAR Protection in SBRT Prostate Cancer. Radiation Oncology. Published online July 7, 2026.[^2]

Journal/source: Radiation Oncology  
Publication type: Peer-reviewed retrospective adaptive-radiotherapy dosimetric study  
One-line takeaway: Daily CBCT-based online adaptation improved prostate SBRT target coverage, while organ-at-risk dose improvements were smaller and inconsistent.

Evidence tier: Retrospective single-centre dosimetric comparison involving 30 patients.

Importance score: 7.5/10

Key limitations:

- Retrospective dosimetric study with no clinical toxicity or tumour-control endpoint.
- Small single-centre cohort limits generalizability.
- Adaptive plans were compared with scheduled plans rather than with an independently optimized nonadaptive workflow.
- Some organ-at-risk parameters worsened after adaptation, showing that adaptation does not guarantee universal dosimetric improvement.

Practical radiation oncology relevance:
The paper provides a useful reality check for online adaptive prostate SBRT. The clearest benefit appears to be preservation of target coverage under daily anatomical variation. Departments should evaluate adaptation using structure-specific and clinically weighted objectives rather than assuming that every adapted plan is globally superior.

### 3. Radiation-Induced Cardiac Toxicity After SBRT for Central and Ultracentral Lung Tumors

Citation: Licha A, Felici F, et al. Radiation-Induced Cardiac Toxicity After SBRT for Central and Ultracentral Lung Tumors: A Multicenter Retrospective Cohort Study. Radiotherapy and Oncology. Available online July 11, 2026.[^3]

Journal/source: Radiotherapy and Oncology  
Publication type: Peer-reviewed multicentre retrospective cohort study  
One-line takeaway: Cardiac dose and cardiac-substructure exposure may contribute to clinically relevant toxicity after SBRT for central and ultracentral lung tumours.

Evidence tier: Multicentre retrospective clinical outcomes study.

Importance score: 7.5/10

Key limitations:

- Retrospective design leaves residual confounding from baseline cardiovascular disease, systemic therapy, tumour location, and competing mortality.
- Cardiac events may be variably detected and attributed.
- Fractionation schedules, contouring practices, and cardiac-substructure definitions may differ across centres.
- Associations do not establish a validated dose constraint.

Practical radiation oncology relevance:
Central lung SBRT planning commonly focuses on proximal bronchial tree, esophagus, great vessels, and spinal cord. This study supports deliberate review of whole-heart and cardiac-substructure doses, particularly when treating lesions abutting the mediastinum. It is hypothesis-generating for constraints rather than sufficient to define new ones.

---

## Worth Skimming

### 4. Center-Specific Federated Learning for Radiation Pneumonitis

Citation: Center-Specific Federated Learning for Radiation Pneumonitis: A Cross-Center Adaptive Alternating Framework. International Journal of Radiation Oncology, Biology, Physics. Published online July 9–10, 2026.[^4]

Journal/source: International Journal of Radiation Oncology, Biology, Physics  
Publication type: Peer-reviewed multicentre AI technical validation study  
One-line takeaway: A federated-learning framework attempts to improve radiation-pneumonitis prediction across institutions while retaining centre-specific adaptation and avoiding central pooling of patient data.

Evidence tier: Retrospective multicentre AI model-development and validation study.

Importance score: 6.5/10

Key limitations:

- Retrospective predictive performance does not establish clinical utility.
- Centre-specific adaptation can improve local fit while making implementation and model governance more complex.
- Pneumonitis labels, follow-up, treatment techniques, dosimetry, and systemic therapies may differ across sites.
- Prospective impact, calibration, fairness, drift monitoring, and failure-management procedures remain unproven.

Practical radiation oncology relevance:
Federated learning is highly relevant to radiation oncology because high-quality multicentre datasets are difficult to centralize. The paper is important as infrastructure research, but it should be viewed as a step toward prospective validation rather than a deployable decision-support tool.

### 5. The Impact of Breast Radiation Technique on Secondary Lung Cancer Risk Modeling

Citation: The Impact of Breast Radiation Technique on Secondary Lung Cancer Risk Modeling: An Analysis Based on Clinically Delivered Lung Doses of Modern Radiation Techniques. International Journal of Radiation Oncology, Biology, Physics. Published online July 8, 2026.[^5]

Journal/source: International Journal of Radiation Oncology, Biology, Physics  
Publication type: Peer-reviewed dosimetric risk-modelling study  
One-line takeaway: Modern breast-radiotherapy techniques produce different low- and intermediate-dose lung exposures that may translate into different modelled secondary lung-cancer risks.

Evidence tier: Comparative dosimetric and risk-modelling study.

Importance score: 6.5/10

Key limitations:

- Secondary-cancer estimates are model-derived rather than observed long-term outcomes.
- Risk models carry uncertainty when extrapolated across dose distributions and modern techniques.
- Technique selection must also account for target coverage, heart dose, contralateral breast dose, setup robustness, and resource use.
- Absolute risk depends strongly on age, smoking history, baseline risk, and life expectancy.

Practical radiation oncology relevance:
This paper is useful when comparing 3D conformal RT, IMRT, VMAT, prone positioning, and other breast approaches. It reinforces that reducing high-dose exposure is not the only objective; the low-dose bath can matter, especially in younger patients and smokers.

### 6. In Vitro Assessment of Contemporary Leadless and Transvenous Pacemakers During Photon-Based Radiotherapy

Citation: Tajstra M, Dyrbuś M, Stąpór-Fudzińska M, Rutkowski T, Gąsior M, Blamek S. In Vitro Assessment of Contemporary Leadless and Transvenous Pacemakers During Photon-Based Radiotherapy. Heart Rhythm. Published online July 7, 2026.[^6]

Journal/source: Heart Rhythm  
Publication type: Peer-reviewed in vitro device-safety study  
One-line takeaway: Contemporary leadless and transvenous pacemakers were experimentally assessed under photon-radiotherapy exposure to better characterize malfunction risk.

Evidence tier: Bench/in vitro technical safety study.

Importance score: 6/10

Key limitations:

- In vitro performance does not capture all patient-specific and device-programming conditions.
- Results may not generalize to every manufacturer, model, beam energy, neutron-producing treatment, dose rate, or cumulative dose.
- Rare stochastic device failures are difficult to exclude.
- The study does not replace multidisciplinary device-management guidelines or real-time patient monitoring.

Practical radiation oncology relevance:
Patients with implanted cardiac devices are common and can generate substantial workflow complexity. This paper may refine risk assessment for newer leadless systems, but treatment decisions should continue to incorporate device type, dependency, estimated dose, beam energy, monitoring capability, and cardiology input.

### 7. Structural Vulnerability in the United States Radiation Oncology Practice Landscape

Citation: Structural Vulnerability in the United States Radiation Oncology Practice Landscape. International Journal of Radiation Oncology, Biology, Physics. Published online July 9, 2026.[^7]

Journal/source: International Journal of Radiation Oncology, Biology, Physics  
Publication type: Peer-reviewed health-services and workforce study  
One-line takeaway: The study examines predictors of radiation-oncology practice-site disappearance between 2018 and 2025, highlighting geographic and structural threats to treatment access.

Evidence tier: Retrospective national health-services analysis.

Importance score: 6/10

Key limitations:

- Practice disappearance does not necessarily equal complete regional loss of radiotherapy access.
- Administrative and directory data may misclassify mergers, relocations, satellite restructuring, or temporary closures.
- Findings from the United States may not generalize to other health systems.
- The study identifies vulnerability but does not test a specific policy intervention.

Practical radiation oncology relevance:
Access depends on functioning treatment centres, not only evidence-based indications. This is relevant to department leaders, workforce planners, and residents interested in health services. It also contextualizes why hypofractionation, remote planning, regional networks, and streamlined palliative pathways can have system-level value.

---

## Save for Later

### 8. MRI-Based Gross Tumor Volume Delineation in High-Grade Glioma Using a Deep Convolutional Neural Network

Citation: MRI-Based Gross Tumor Volume Delineation in High-Grade Glioma Using a Deep Convolutional Neural Network. Applied Radiation and Isotopes. Published online July 8, 2026.[^8]

Journal/source: Applied Radiation and Isotopes  
Publication type: Peer-reviewed AI segmentation study  
One-line takeaway: A deep convolutional network was developed to automate MRI-based gross-tumour-volume delineation in high-grade glioma.

Evidence tier: Technical AI development and validation study.

Importance score: 5.5/10

Key limitations:

- Automated GTV delineation in glioma is highly dependent on MRI sequences, postoperative change, steroid use, enhancement pattern, and institutional contouring conventions.
- Segmentation overlap metrics do not establish oncologic safety.
- External and prospective validation details require careful review.
- The clinical target volume remains a biologic and clinical construct that cannot be inferred from GTV segmentation alone.

Practical radiation oncology relevance:
This may eventually reduce contouring time or provide a consistency check, but CNS target definition is too consequential for unreviewed automation. Its nearer-term role is likely as a draft contour or quality-assurance aid.

### 9. Spatially Fractionated Radiotherapy and Immunotherapy: A Synergistic Strategy for Systemic Antitumor Immunity

Citation: Spatially Fractionated Radiotherapy and Immunotherapy: A Synergistic Strategy for Systemic Antitumor Immunity. Journal of Translational Medicine. Published online July 8, 2026.[^9]

Journal/source: Journal of Translational Medicine  
Publication type: Peer-reviewed review article  
One-line takeaway: Reviews the biological rationale and early evidence for combining spatially fractionated radiotherapy with immunotherapy.

Evidence tier: Translational narrative review.

Importance score: 5/10

Key limitations:

- Review-level evidence with substantial reliance on preclinical and heterogeneous early clinical data.
- Spatial dose geometry, fractionation, sequencing, and immunotherapy combinations are not standardized.
- Abscopal and systemic immune effects remain unpredictable.
- Publication bias may overrepresent positive translational findings.

Practical radiation oncology relevance:
Useful background for GRID, LATTICE, and other spatially fractionated approaches, particularly for bulky tumours. It is not sufficient to establish routine combination treatment outside protocols or experienced centres.

---

## Low Priority

### 10. Radioligand Therapy for Paediatric Patients With Solid Tumours

Citation: Teles L, et al. Radioligand Therapy for Paediatric Patients With Solid Tumours. British Journal of Radiology. Published online July 7, 2026.[^10]

Journal/source: British Journal of Radiology  
Publication type: Peer-reviewed review article  
One-line takeaway: Reviews emerging radioligand-therapy applications in paediatric solid tumours.

Evidence tier: Narrative review of an early and highly specialized field.

Importance score: 4.5/10

Key limitations:

- Limited paediatric prospective evidence.
- Disease-specific indications, dosimetry, long-term toxicity, fertility effects, and second-malignancy risks remain incompletely characterized.
- Availability depends on specialized radiopharmacy, nuclear medicine, paediatric oncology, and dosimetry infrastructure.
- The topic is adjacent to, rather than central to, routine external-beam radiation oncology.

Practical radiation oncology relevance:
Worth awareness as radiopharmaceutical therapy expands, but lower priority for general radiation oncology practice this week than adaptive RT, palliative workflow, lung SBRT toxicity, and device safety.

---

## Overall Ranking Summary

### Must Read

- 1. Simulation-Free Single-Fraction High-Dose Radiotherapy for Non-Spine Bone and Soft Tissue Metastases
- 2. CBCT-Based Online Daily Adaptive Treatment Improves Target Coverage With Limited Benefit for OAR Protection in SBRT Prostate Cancer
- 3. Radiation-Induced Cardiac Toxicity After SBRT for Central and Ultracentral Lung Tumors

### Worth Skimming

- 4. Center-Specific Federated Learning for Radiation Pneumonitis
- 5. The Impact of Breast Radiation Technique on Secondary Lung Cancer Risk Modeling
- 6. In Vitro Assessment of Contemporary Leadless and Transvenous Pacemakers During Photon-Based Radiotherapy
- 7. Structural Vulnerability in the United States Radiation Oncology Practice Landscape

### Save for Later

- 8. MRI-Based Gross Tumor Volume Delineation in High-Grade Glioma Using a Deep Convolutional Neural Network
- 9. Spatially Fractionated Radiotherapy and Immunotherapy: A Synergistic Strategy for Systemic Antitumor Immunity

### Low Priority

- 10. Radioligand Therapy for Paediatric Patients With Solid Tumours

---

## References

[^1]: Hoerner-Rieber J, et al. Simulation-Free Single-Fraction High-Dose Radiotherapy for Non-Spine Bone and Soft Tissue Metastases. *Practical Radiation Oncology*. Published online July 7, 2026. DOI: https://doi.org/10.1016/j.prro.2026.06.009. PubMed: https://pubmed.ncbi.nlm.nih.gov/42413576/

[^2]: Gáldi Á, Ágoston P, Pesznyák C, Takácsi-Nagy Z, Major T. CBCT-Based Online Daily Adaptive Treatment Improves Target Coverage With Limited Benefit for OAR Protection in SBRT Prostate Cancer. *Radiation Oncology*. Published online July 7, 2026. DOI: https://doi.org/10.1186/s13014-026-02888-9. PubMed: https://pubmed.ncbi.nlm.nih.gov/42415083/

[^3]: Licha A, Felici F, et al. Radiation-Induced Cardiac Toxicity After SBRT for Central and Ultracentral Lung Tumors: A Multicenter Retrospective Cohort Study. *Radiotherapy and Oncology*. Available online July 11, 2026. Publisher record: https://www.sciencedirect.com/science/article/abs/pii/S0167814026005335. DOI and complete author list were not fully verified during this run.

[^4]: Center-Specific Federated Learning for Radiation Pneumonitis: A Cross-Center Adaptive Alternating Framework. *International Journal of Radiation Oncology, Biology, Physics*. Published online July 9–10, 2026. Publisher record: https://www.redjournal.org/article/S0360-3016(26)03945-3/fulltext. Complete author list and DOI were not fully verified during this run.

[^5]: The Impact of Breast Radiation Technique on Secondary Lung Cancer Risk Modeling: An Analysis Based on Clinically Delivered Lung Doses of Modern Radiation Techniques. *International Journal of Radiation Oncology, Biology, Physics*. Published online July 8, 2026. DOI: https://doi.org/10.1016/j.ijrobp.2026.06.3082. PubMed: https://pubmed.ncbi.nlm.nih.gov/42419586/

[^6]: Tajstra M, Dyrbuś M, Stąpór-Fudzińska M, Rutkowski T, Gąsior M, Blamek S. In Vitro Assessment of Contemporary Leadless and Transvenous Pacemakers During Photon-Based Radiotherapy. *Heart Rhythm*. Published online July 7, 2026. DOI: https://doi.org/10.1016/j.hrthm.2026.06.056. PubMed: https://pubmed.ncbi.nlm.nih.gov/42413803/

[^7]: Structural Vulnerability in the United States Radiation Oncology Practice Landscape. *International Journal of Radiation Oncology, Biology, Physics*. Published online July 9, 2026. Publisher record: https://www.redjournal.org/article/S0360-3016(26)03986-6/fulltext. Complete citation and DOI were not fully verified during this run.

[^8]: MRI-Based Gross Tumor Volume Delineation in High-Grade Glioma Using a Deep Convolutional Neural Network. *Applied Radiation and Isotopes*. Published online July 8, 2026;236:112797. PubMed: https://pubmed.ncbi.nlm.nih.gov/42418866/. DOI was not fully resolved from the accessible record during this run.

[^9]: Spatially Fractionated Radiotherapy and Immunotherapy: A Synergistic Strategy for Systemic Antitumor Immunity. *Journal of Translational Medicine*. Published online July 8, 2026. PubMed: https://pubmed.ncbi.nlm.nih.gov/42421120/. Complete citation and DOI were not fully verified during this run.

[^10]: Teles L, et al. Radioligand Therapy for Paediatric Patients With Solid Tumours. *British Journal of Radiology*. Published online July 7, 2026. DOI: https://doi.org/10.1093/bjr/tqag161. PubMed: https://pubmed.ncbi.nlm.nih.gov/42412529/
