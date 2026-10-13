---
layout: post
title: "Weekly Radiation Oncology Literature Surveillance Digest: October 5–11, 2026"
date: 2026-10-11
permalink: "/litreview/2026/10/11/radonc-literature-digest-october-5-11-2026/"
categories: "litreview oncology radiation-oncology ai medical-physics"
thumbnail: "/assets/litreview-radonc-digest.png"
summary: "NRG-BR002 challenges routine metastasis ablation in oligometastatic breast cancer; real-time MLC log QA reveals a vendor-corrected delivery error; thyroid field reduction, proton spot-map automation, pancreatic reirradiation, and adaptive imaging round out the week."
series: radonc-weekly
---

# Weekly Radiation Oncology Literature Surveillance Digest: October 5–11, 2026

## Bottom Line This Week

**The week's practice-relevant headline is negative randomized evidence.** The full **NRG-BR002** report, published October 7 in *Journal of Clinical Oncology*, found that adding metastasis-directed ablation (mostly SBRT) to first-line systemic therapy did **not** improve progression-free or overall survival in selected patients with oligometastatic breast cancer. Median progression-free survival was 23.0 months without ablation versus 19.5 months with ablation (hazard ratio 0.92; 95% CI 0.57–1.47). The randomized phase II screening threshold was not met, so the phase III component did not proceed. This is a meaningful restraint on the impulse to ablate every visible metastasis: local therapy remains appropriate for palliation and selected clinical circumstances, but routine consolidation for survival benefit in this population is not supported.[^1]

**The most consequential operational paper is an actual safety finding, not an AI benchmark.** A retrospective audit of 1,566 helical tomotherapy fractions with real-time MLC adaptation uncovered rare erroneous leaf movements in four fractions (0.3%). The authors reproduced the dosimetric issue, reported it to the manufacturer, and confirmed that a vendor patch reduced its impact. This is a compelling demonstration of the value of post-delivery log-file surveillance for adaptive and tracking systems.[^2]

**Clinically relevant, but not definitive:** A 284-patient differentiated thyroid cancer cohort associated smaller neck radiation fields with substantially less dysphagia and xerostomia without a detectable difference in locoregional control. Selection bias and six salvaged lateral-neck failures in the central-field group argue against indiscriminate de-escalation. A separate two-centre pancreatic reirradiation series suggests feasibility in carefully selected patients, but short follow-up and heterogeneous regimens limit causal conclusions.[^3][^5]

**The strongest planning-automation signal** is GenSpot, a physics-informed method for converting achievable proton dose distributions into deliverable pencil-beam spot maps. The approach reproduced clinical dose distributions reasonably closely in retrospective prostate SBRT cases, but it was tested with *clinical Monte Carlo doses as inputs*, not arbitrary AI-predicted doses; end-to-end autonomous proton planning has therefore not been demonstrated.[^4]

**Imaging and preprint signals remain implementation-focused or hypothesis-generating.** Short-arc CBCT for breast setup, accelerated MR-Linac reconstruction, and unpaired diffusion-based CBCT refinement are technically promising, but none demonstrates improved patient outcomes. A bioRxiv study of post-irradiation neutrophil–vascular interactions is intriguing biology, not evidence that RT increases breast cancer recurrence in patients.[^6][^7][^8][^9]

**Overall assessment: high clinical relevance, moderate technological novelty.** NRG-BR002 should influence multidisciplinary discussions now; the MLC audit should influence QA thinking. The rest is useful for selective reading rather than immediate protocol change. The phase III ROADS brain-metastasis tile-brachytherapy manuscript was published **September 28**, outside this October 5–11 surveillance window, and is therefore not relabeled as a new paper this week. The date filter uses **first online publication or preprint posting**, not a journal's October issue date.

---

## Must Read

### 1. NRG-BR002: A Randomized Phase II/III Trial of Metastasis-Directed Ablation With First-Line Systemic Therapy for Oligometastatic Breast Cancer

Citation: Chmura SJ, Winter KA, Woodward WA, Borges VF, Salama JK, Al-Hallaq HA, Matuszak MM, Milano MT, Jaskowiak NT, Jagsi R, et al. NRG-BR002: A Randomized Phase II/III Trial of Metastasis-Directed Ablation With First-Line Systemic Therapy for Oligometastatic Breast Cancer. *Journal of Clinical Oncology*. Published online October 7, 2026. doi:10.1200/JCO-26-00201.[^1]

Journal/source: Journal of Clinical Oncology  
Publication type: Peer-reviewed multicentre randomized phase II/III trial (phase II results; phase III not initiated)  
One-line takeaway: Ablation of all known oligometastases, predominantly using SBRT, did not improve progression-free or overall survival when added to first-line systemic therapy in the studied breast cancer population.

Evidence tier: Randomized multicentre comparative clinical evidence; a negative phase II screening result with limited power to exclude small subgroup benefits.

Importance score: 9.5/10

Key limitations:

- Only 125 of 129 enrolled patients were eligible for analysis; confidence intervals remain compatible with both moderate benefit and harm.
- The cohort was predominantly hormone receptor-positive/HER2-negative (79%); other biological subtypes were underrepresented.
- Patients had controlled primary disease, no progression during up to 12 months of first-line systemic therapy, and no more than four metastases; findings should not be extrapolated to all oligoprogressive or symptomatic scenarios.
- Treatment-era systemic therapy and imaging differ from some contemporary practice, and 60% had a solitary metastasis.
- Exploratory circulating-tumour-cell subgroup findings are hypothesis-generating, not validated treatment-selection rules.

Practical radiation oncology relevance:
This is the week's most important practice paper. Patients were randomized to systemic therapy alone or systemic therapy plus ablation of visible metastases (93% of ablation delivered using SBRT). At median follow-up of 29.9 months, median PFS was 23.0 versus 19.5 months (HR 0.92; 95% CI 0.57–1.47; one-sided P = .36), and overall survival was not significantly different (HR 1.07; 95% CI 0.60–1.89). The phase III component was stopped for futility of the phase II efficacy signal. This does **not** mean that SBRT never benefits patients with metastatic breast cancer; it means that routine comprehensive ablation *for PFS or OS benefit* cannot be justified in this specific first-line, nonprogressing population. Discuss local palliation, oligoprogression, prevention of threatening complications, and trial enrollment separately from unproven survival-directed consolidation.

### 2. Retrospective Log-Based Quality Assurance of Real-Time MLC Adaptation on a Helical Tomotherapy Platform

Citation: Crowe SB, Kairn T. Retrospective log-based quality assurance of real-time MLC adaptation on a helical tomotherapy platform. *Journal of Applied Clinical Medical Physics*. 2026;27:e70855. Published online October 8, 2026. doi:10.1002/acm2.70855.[^2]

Journal/source: Journal of Applied Clinical Medical Physics  
Publication type: Peer-reviewed retrospective clinical delivery-log QA and technical investigation  
One-line takeaway: Post-treatment analysis identified rare incorrect real-time MLC adaptations missed by routine workflows and prompted a manufacturer software correction.

Evidence tier: Large operational audit (1,566 delivered fractions) with phantom confirmation of a platform-specific fault; not a patient-outcome trial.

Importance score: 8.5/10

Key limitations:

- The identified error is specific to the evaluated helical tomotherapy real-time tracking implementation.
- The four affected fractions came from only three patients; the frequency may not generalize to other installations or software versions.
- The maximum reported dose discrepancy was modest (0.3 Gy), and no clinical injury was demonstrated.
- Retrospective log agreement is not a substitute for independent dose measurements or prospective fault monitoring.

Practical radiation oncology relevance:
The investigators compared expected beam's-eye-view leaf adaptation against recorded delivery telemetry for 1,566 fractions. Erroneous MLC motion lasting more than one second occurred in four fractions (0.3%), affecting one lung and two prostate patients. The largest reported discrepancy was 0.3 Gy, equivalent to 0.6% of the affected lung course prescription. Phantom measurements verified that a vendor patch reduced the impact to negligible levels, and the patch was deployed more broadly. For physicists and departmental leaders, this is a concrete argument for systematic post-delivery QA, independent telemetry review, vendor escalation pathways, and auditability as real-time adaptation becomes more autonomous.

---

## Worth Skimming

### 3. Locoregional Control and Toxicity of Neck Radiation With Field Reduction in Advanced Differentiated Thyroid Carcinoma: A Retrospective Cohort Study

Citation: Choi J, Wang S, Sherman EJ, Dee EC, Zhang Z, Shamseddine A, Yu Y, Ma J, Riaz N, McBride S, et al. Locoregional Control and Toxicity of Neck Radiation with Field Reduction in Advanced Differentiated Thyroid Carcinoma: A Retrospective Cohort Study. *Thyroid*. Published online October 8, 2026. doi:10.1177/10507256261493011.[^3]

Journal/source: Thyroid  
Publication type: Peer-reviewed single-centre retrospective comparative cohort  
One-line takeaway: Selected patients receiving smaller thyroid-cancer neck RT fields had less acute and late toxicity without a detected locoregional-control penalty.

Evidence tier: Retrospective observational cohort with detailed treatment plans for 284 patients and long follow-up; substantial selection-confounding risk.

Importance score: 7.5/10

Key limitations:

- Nonrandomized field selection almost certainly reflects disease extent and physician judgment.
- The cohort spans 1999–2023, with changes in RT technique, systemic therapy, imaging, and salvage care.
- Absence of a statistically significant control difference does not establish noninferiority of reduced fields.
- Six central-field patients experienced out-of-field lateral-neck recurrence, all surgically salvaged.

Practical radiation oncology relevance:
Among 284 patients with advanced nonanaplastic, nonmedullary differentiated thyroid cancer, 103 received comprehensive bilateral neck/central fields, 116 ipsilateral fields, and 65 central-only fields. Acute grade ≥2 xerostomia was 36%, 17%, and 16%, respectively; late grade ≥2 dysphagia was 23%, 6%, and 8%. In-field failures were 10.7%, 9.5%, and 7.7%, without a significant difference in locoregional control (P = .88). This supports careful field individualization when the elective nodal risk is low, but it does not justify routine omission of at-risk regions. The late dysphagia difference is especially relevant when counseling patients who may live for many years after RT.

### 4. A Two-Stage Framework for Fast Proton Spot Map Generation in Pencil Beam Scanning Prostate SBRT Planning

Citation: Tang X, Tseung HWC, Pepin M, Ma J, Routman DM, Moseley DJ, Reber B, Johnson JE, Qian J. A two-stage framework for fast proton spot map generation in pencil beam scanning prostate SBRT planning. *Medical Physics*. 2026;53:e70693. Published online October 9, 2026. doi:10.1002/mp.70693.[^4]

Journal/source: Medical Physics  
Publication type: Peer-reviewed retrospective AI/physics treatment-planning technical validation  
One-line takeaway: GenSpot generated machine-compatible proton spot maps from CT and achievable clinical dose distributions in about three minutes with close Monte Carlo dose agreement.

Evidence tier: Single-institution technical validation using 1,036 fields from 259 prostate SBRT plans; held-out test set, no prospective clinical evaluation.

Importance score: 7.5/10

Key limitations:

- Input dose distributions were clinical Monte Carlo doses, not imperfect AI-predicted or truly adaptive doses.
- Data came from one institution, disease site, and planning configuration.
- The generated maps contained approximately 20% more spots than clinical plans, potentially affecting delivery efficiency.
- The reported 2.9-minute generation time excludes final Monte Carlo recalculation and required QA.

Practical radiation oncology relevance:
Dose prediction alone is insufficient for automated proton planning: a deliverable set of energy layers and spot weights is required. GenSpot combines a projected spot-map representation, a SwinUNETR model, and nonnegative regression to reconstruct pencil-beam scanning maps. Composite-plan gamma pass rate averaged 0.99 ± 0.02 at 3%/3 mm, and most DVH differences were within 1 Gy. This is a useful engineering component for future adaptive proton systems, but the authors appropriately do **not** claim that arbitrary predicted dose distributions can already be converted into clinically acceptable plans without conventional optimization and independent QA.

### 5. Pancreatic Reirradiation: A Multi-Institutional Retrospective Analysis of Feasibility, Tolerability, and Clinical Outcomes

Citation: Hou HX, Roberts HJ, Pathak PS, Mamon HJ, Mancias JD, Singh H, Qadan M, Fernandez-Del Castillo C, Koenig JL, Hong TS, et al. Pancreatic Reirradiation: A Multi-Institutional Retrospective Analysis of Feasibility, Tolerability, and Clinical Outcomes. *American Journal of Clinical Oncology*. Published online October 5, 2026. DOI not independently verified.[^5]

Journal/source: American Journal of Clinical Oncology  
Publication type: Peer-reviewed two-centre retrospective clinical cohort  
One-line takeaway: Pancreatic reirradiation was feasible in selected patients, with 69.6% six-month local control and two patients experiencing acute grade ≥3 toxicity.

Evidence tier: Retrospective observational series of 44 patients treated at two academic centres; short follow-up and heterogeneous treatment.

Importance score: 7/10

Key limitations:

- Median follow-up after reirradiation was only eight months, limiting assessment of late gastrointestinal toxicity.
- Highly selected patients and no untreated comparison group prevent causal claims about survival or chemotherapy-free time.
- Treatment techniques, fractionation, dose, and concurrent systemic therapy varied widely.
- Cumulative stomach, duodenum, and bowel dose constraints were not standardized across the reported cohort.

Practical radiation oncology relevance:
Of 44 patients, 42 completed reirradiation; 77.3% received concurrent chemotherapy. The reported six- and twelve-month local-control rates were 69.6% and 58.5%, with a median chemotherapy-free interval of 5.4 months. Acute grade ≥3 events occurred in two patients, including gastrointestinal bleeding among the reported events. These outcomes are encouraging but do not make pancreatic reirradiation routine. Prior dose reconstruction, interval since initial RT, anatomy, systemic options, patient goals, and the potential for serious late GI injury remain central to case-by-case decisions.

---

## Save for Later

### 6. Evaluation of Registration Accuracy Using Short-Arc Cone-Beam Computed Tomography for Image-Guided Radiotherapy in Breast Cancer

Citation: Wada S, Tominaga M, Sasaki M, Yamanashi K, Iwai Y, Furutani S, Shinohara Y, Uto Y. Evaluation of registration accuracy using short-arc cone-beam computed tomography for image-guided radiotherapy in breast cancer. *Journal of Applied Clinical Medical Physics*. 2026;27:e70804. Published online October 6, 2026. doi:10.1002/acm2.70804.[^6]

Journal/source: Journal of Applied Clinical Medical Physics  
Publication type: Peer-reviewed phantom and retrospective clinical image-registration validation study  
One-line takeaway: Reducing CBCT acquisition arc from 200° to 120° preserved submillimetre-average registration agreement for tangential whole-breast setups in a small evaluation.

Evidence tier: Phantom experiments plus reconstructed clinical data from 30 consecutive whole-breast patients; technical rather than clinical validation.

Importance score: 6.5/10

Key limitations:

- The clinical component was a small retrospective registration comparison, not a prospective treatment-outcome study.
- Reduced imaging dose and acquisition time were motivations, not directly demonstrated patient-benefit endpoints.
- Registration accuracy for tangential whole-breast RT may not generalize to regional nodes, boosts, or other anatomy.
- Vendor and reconstruction settings may materially influence performance.

Practical radiation oncology relevance:
At a 120° arc, mean shift disagreement from conventional 200° CBCT was 0.64 mm for three-axis registration and 0.85 mm for six-axis registration; 84.7% and 71.3% of cases, respectively, were within 1 mm. Short-arc acquisition could help reduce imaging burden when setup objectives are modest, but a department should validate its own acquisition geometry, registration robustness, image quality, and actual dose savings before adoption.

### 7. Frequency Schrödinger Bridge Diffusion Model for Fast MRI Reconstruction in Abdominal MR-Guided Online Adaptive Radiotherapy

Citation: Wang Z, Wang S, Liu N, Guan Q, Chen Q, Chen F, Wang B, Liang Y, Liu X, Yang B, Yu L, Liao H, Qiu J. Frequency Schrödinger bridge diffusion model for fast MRI reconstruction in abdominal MR-guided online adaptive radiotherapy. *Journal of Applied Clinical Medical Physics*. 2026;27:e70831. Published online October 9, 2026. doi:10.1002/acm2.70831.[^7]

Journal/source: Journal of Applied Clinical Medical Physics  
Publication type: Peer-reviewed retrospective AI MRI-reconstruction technical validation study  
One-line takeaway: A diffusion-based reconstruction method converted a 22-second MR-Linac acquisition into an image approximating a longer acquisition, reducing total imaging/reconstruction time to 42 seconds in a small dataset.

Evidence tier: Early single-centre technical study of 31 fractions from 14 patients, with patient-level separation for testing.

Importance score: 6/10

Key limitations:

- The dataset is very small; nine of 40 scans were excluded before analysis.
- Better MAE/SSIM does not prove faithful preservation of small targets or organs at risk.
- No prospective on-couch contouring, replanning, or delivered-dose endpoint was tested.
- Diffusion-based reconstruction can introduce plausible but inaccurate image details, requiring explicit safety validation.

Practical radiation oncology relevance:
The proposed method combined 22 seconds of MRI acquisition with approximately 20 seconds of inference, compared with roughly three minutes for the full acquisition. Reported SSIM was 0.885 and PSNR 28.44 dB, outperforming selected comparison models. Faster MRI could reduce intrafraction drift and online ART bottlenecks, but the clinically decisive experiment will be whether clinicians and dosimetrists can contour and replan safely on these reconstructed images, including difficult low-contrast boundaries.

### 8. Radiotherapy-Induced Vascular Dysfunction Alters Neutrophil Phenotype to Promote Tumor Cell Colonization of Mammary Adipose Tissue

Citation: Martello SE, Stevenson BH, Korbey H, Corn KC, Zhu T, Lin EJ, Paul M, Stubenrauch KE, Wang J, Perez A, Rafat M. Radiotherapy-induced vascular dysfunction alters neutrophil phenotype to promote tumor cell colonization of mammary adipose tissue. *bioRxiv*. Posted October 6, 2026. doi:10.64898/2026.10.03.756445.[^8]

Journal/source: bioRxiv  
Publication type: **Preprint; not peer-reviewed**, preclinical mechanistic radiobiology  
One-line takeaway: In lymphocyte-deficient mouse models, RT-associated endothelial dysfunction and persistent neutrophil activation created a microenvironment permissive for circulating tumour-cell colonization.

Evidence tier: Mechanistic animal and in-vitro preprint; no demonstrated clinical treatment effect in humans.

Importance score: 5.5/10

Key limitations:

- Not peer-reviewed; mechanistic conclusions require independent replication.
- Experimental lymphocyte deficiency and circulating-tumour-cell colonization do not reproduce typical clinical breast RT conditions.
- The study does not establish that adjuvant RT increases recurrence in patients; clinical trials show RT reduces locoregional recurrence in indicated settings.
- Proposed neutrophil/vascular interventions are untested clinically.

Practical radiation oncology relevance:
The study links irradiation, senescent endothelial-cell signaling, neutrophil activation resembling polymorphonuclear myeloid-derived suppressor cells, NF-κB-dependent vascular dysfunction, and tumour-cell colonization in experimental systems. It is relevant to investigations of post-RT tissue microenvironments and immune recovery, but should **not** be used to change breast radiotherapy recommendations or counsel patients about recurrence risk.

---

## Low Priority

### 9. Anatomy-Preserving Unpaired Cone-Beam CT Refinement for Image-Guided Radiotherapy Using Pseudo-Label Guided Diffusion

Citation: Lai Q, He Y. Anatomy-preserving unpaired cone-beam CT refinement for image-guided radiotherapy using pseudo-label guided diffusion. *arXiv*. Submitted October 5, 2026. arXiv:2610.06094. DOI not independently verified.[^9]

Journal/source: arXiv  
Publication type: **Preprint; not peer-reviewed**, retrospective AI image-enhancement technical study  
One-line takeaway: RefineCBCT improved image-similarity metrics on public lung and pelvic CBCT datasets using unpaired diffusion-based refinement, but downstream RT safety and dose accuracy were not established.

Evidence tier: Early technical preprint evaluated on public retrospective imaging datasets; no clinical workflow validation.

Importance score: 4/10

Key limitations:

- Image similarity to planning CT is not proof that daily anatomy was preserved; true interfraction change can be incorrectly suppressed.
- No clinically validated synthetic-HU dose recalculation, contour-editing, or treatment-adaptation endpoint was demonstrated.
- Public-dataset performance may not generalize across scanners, protocols, body habitus, or severe artefacts.
- Preprint status and lack of independent prospective testing limit confidence.

Practical radiation oncology relevance:
The model reports improved MAE, PSNR, and SSIM against comparison methods on lung and pelvic data. Such image enhancement is potentially useful for CBCT-guided adaptation, but its most dangerous failure mode is an anatomically plausible reconstruction that is wrong exactly where a target or organ at risk has moved. Until geometric fidelity and dose recalculation are validated independently, this is a method-development paper rather than an implementation candidate.

---

## Overall Ranking Summary

### Must Read

- **1 — 9.5/10:** NRG-BR002 — randomized negative result limiting routine oligometastatic breast ablation.
- **2 — 8.5/10:** Retrospective MLC-adaptation QA — real-world detection and correction of a delivery fault.

### Worth Skimming

- **3 — 7.5/10:** Thyroid neck field reduction — lower toxicity, with strong selection caveats.
- **4 — 7.5/10:** GenSpot proton spot-map generation — promising deliverability component, not autonomous planning.
- **5 — 7/10:** Pancreatic reirradiation — feasibility signal with limited late-toxicity follow-up.

### Save for Later

- **6 — 6.5/10:** Short-arc breast CBCT registration — potential imaging efficiency gain.
- **7 — 6/10:** Accelerated MR-Linac reconstruction — substantial time savings, untested downstream clinical fidelity.
- **8 — 5.5/10:** RT-induced neutrophil–vascular changes — preclinical bioRxiv hypothesis.

### Low Priority

- **9 — 4/10:** Unpaired CBCT diffusion refinement — attractive image metrics, insufficient RT safety validation.

The search also screened *International Journal of Radiation Oncology, Biology, Physics*, *Practical Radiation Oncology*, *Radiotherapy and Oncology*, *Lancet Oncology*, *Nature Medicine*, *Physics in Medicine & Biology*, arXiv, medRxiv, bioRxiv, and other JCO/ASCO publications. No additional publication first released October 5–11 met the threshold for inclusion at the time of this review. Journal issue dates were not treated as first-publication dates; conference abstracts were not promoted to full-paper evidence. Coverage is targeted rather than a guarantee of exhaustive indexing, particularly for newly posted or not-yet-indexed papers.

---

## References

[^1]: Chmura SJ, Winter KA, Woodward WA, et al. NRG-BR002: A Randomized Phase II/III Trial of Metastasis-Directed Ablation With First-Line Systemic Therapy for Oligometastatic Breast Cancer. *Journal of Clinical Oncology*. First published October 7, 2026. DOI: https://doi.org/10.1200/JCO-26-00201. PubMed: https://pubmed.ncbi.nlm.nih.gov/42842849/. Journal: https://ascopubs.org/doi/10.1200/JCO-26-00201.

[^2]: Crowe SB, Kairn T. Retrospective log-based quality assurance of real-time MLC adaptation on a helical tomotherapy platform. *Journal of Applied Clinical Medical Physics*. 2026;27:e70855. First published October 8, 2026. DOI: https://doi.org/10.1002/acm2.70855. Journal: https://aapm.onlinelibrary.wiley.com/doi/10.1002/acm2.70855. PubMed indexing not independently verified.

[^3]: Choi J, Wang S, Sherman EJ, et al. Locoregional Control and Toxicity of Neck Radiation with Field Reduction in Advanced Differentiated Thyroid Carcinoma: A Retrospective Cohort Study. *Thyroid*. First published October 8, 2026. DOI: https://doi.org/10.1177/10507256261493011. Journal: https://journals.sagepub.com/doi/10.1177/10507256261493011. PubMed indexing not independently verified.

[^4]: Tang X, Tseung HWC, Pepin M, Ma J, Routman DM, Moseley DJ, Reber B, Johnson JE, Qian J. A two-stage framework for fast proton spot map generation in pencil beam scanning prostate SBRT planning. *Medical Physics*. 2026;53:e70693. First published October 9, 2026. DOI: https://doi.org/10.1002/mp.70693. Journal: https://aapm.onlinelibrary.wiley.com/doi/10.1002/mp.70693. PubMed indexing not independently verified.

[^5]: Hou HX, Roberts HJ, Pathak PS, et al. Pancreatic Reirradiation: A Multi-Institutional Retrospective Analysis of Feasibility, Tolerability, and Clinical Outcomes. *American Journal of Clinical Oncology*. First published October 5, 2026. PubMed: https://pubmed.ncbi.nlm.nih.gov/42832634/. **DOI could not be independently verified** in this surveillance run; do not confuse this expanded 44-patient journal publication with the earlier 27-patient 2025 conference abstract.

[^6]: Wada S, Tominaga M, Sasaki M, Yamanashi K, Iwai Y, Furutani S, Shinohara Y, Uto Y. Evaluation of registration accuracy using short-arc cone-beam computed tomography for image-guided radiotherapy in breast cancer. *Journal of Applied Clinical Medical Physics*. 2026;27:e70804. First published October 6, 2026. DOI: https://doi.org/10.1002/acm2.70804. Journal: https://aapm.onlinelibrary.wiley.com/doi/10.1002/acm2.70804. PubMed indexing not independently verified.

[^7]: Wang Z, Wang S, Liu N, Guan Q, Chen Q, Chen F, Wang B, Liang Y, Liu X, Yang B, Yu L, Liao H, Qiu J. Frequency Schrödinger bridge diffusion model for fast MRI reconstruction in abdominal MR-guided online adaptive radiotherapy. *Journal of Applied Clinical Medical Physics*. 2026;27:e70831. First published October 9, 2026. DOI: https://doi.org/10.1002/acm2.70831. Journal: https://aapm.onlinelibrary.wiley.com/doi/10.1002/acm2.70831. PubMed indexing not independently verified.

[^8]: Martello SE, Stevenson BH, Korbey H, Corn KC, Zhu T, Lin EJ, Paul M, Stubenrauch KE, Wang J, Perez A, Rafat M. Radiotherapy-induced vascular dysfunction alters neutrophil phenotype to promote tumor cell colonization of mammary adipose tissue. *bioRxiv*. Posted October 6, 2026. DOI: https://doi.org/10.64898/2026.10.03.756445. Preprint: https://www.biorxiv.org/content/10.64898/2026.10.03.756445v1. Not peer-reviewed; no PubMed indexing verified.

[^9]: Lai Q, He Y. Anatomy-preserving unpaired cone-beam CT refinement for image-guided radiotherapy using pseudo-label guided diffusion. *arXiv*. Submitted October 5, 2026. arXiv:2610.06094. Preprint: https://arxiv.org/abs/2610.06094. **DOI not independently verified**; no PubMed indexing verified. Not peer-reviewed.
