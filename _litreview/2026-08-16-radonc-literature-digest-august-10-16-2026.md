---
layout: post
title: "Weekly Radiation Oncology Literature Surveillance Digest: August 10–16, 2026"
date: 2026-08-16
permalink: "/litreview/2026/08/16/radonc-literature-digest-august-10-16-2026/"
categories: "litreview oncology radiation-oncology ai medical-physics"
thumbnail: "/assets/litreview-radonc-digest.png"
summary: "This week’s digest is led by NRG-GU005, a phase III comparison of prostate SBRT versus moderately hypofractionated IMRT, with additional signals in lung SBRT dose prescription, CNS reirradiation guidance, workflow-integrated LLMs, partial-breast positioning, particle therapy for gynecologic cancer, and pediatric radiotherapy trial evolution."
series: radonc-weekly
---

# Weekly Radiation Oncology Literature Surveillance Digest: August 10–16, 2026

## Bottom Line This Week

The most clinically meaningful paper this week is **NRG-GU005**, the phase III randomized comparison of stereotactic body radiotherapy (SBRT) with moderately hypofractionated IMRT for favorable intermediate-risk prostate cancer. SBRT at 36.25 Gy in 5 fractions did not improve urinary irritative/obstructive quality of life and was not superior for 3-year disease-free survival, although bowel quality of life and several other patient-reported domains favored SBRT. The key message is not that prostate SBRT “failed,” but that its principal advantage remains convenience and selected quality-of-life benefits rather than superior cancer control.

The most operationally relevant physics paper examines **lung SBRT dose prescription across different image strategies and target definitions**. The authors used respiratory-phase dose information to test whether common static-image prescription approaches accurately represent dose actually delivered to the moving gross tumour. This is technically important because lung SBRT remains unusually sensitive to the interaction between motion, image reconstruction, target definition, heterogeneity correction, and prescription convention.

The most clinically useful review is the **ESTRO CNS Focus Group review of brain-tumour reirradiation**. Evidence remains heterogeneous and largely nonrandomized, but the paper consolidates an increasingly important area of practice where patient selection, cumulative dose, target volume, interval from prior treatment, and radionecrosis risk matter more than any single dose schedule.

The most interesting AI/workflow paper is **The Daily Dose**, a workflow-integrated LLM system that automatically generated physician-specific patient summaries and trial suggestions. Clinician adoption and perceived usefulness were encouraging, but the study remains an early usability evaluation based largely on self-report. It is evidence that “push” AI can fit into clinical workflow—not evidence that LLM-generated summaries or trial matches are reliably correct enough for unsupervised use.

Nothing this week establishes a new universal standard of care. NRG-GU005 is practice-informing rather than practice-overturning, and the remaining papers are predominantly implementation-focused, technical, or review-level evidence. Overall, this was a **moderately strong week**, with one high-level randomized trial and several useful papers for departments interested in SBRT, reirradiation, proton/particle therapy, and AI-enabled workflow.

---

## Must Read

### 1. Stereotactic Body Radiotherapy vs Moderately Hypofractionated IMRT for Localized Intermediate-Risk Prostate Cancer

Citation: Ellis RJ, Pugh SL, Yu JB, Feng FY, Konski AA, Grubb RL III, Wallace RE, Gladstone DJ, Ménard C, Miccio JA, Frazier AJ, Pennington JD, Michalski JM, Spratt DE, Martinez A, Morgan SC, Mihai A, Solanki AA, Amjad A, Straza MW, Delouya G, Schroeder TM, Marshall DT, Kapadia N, Patel AN, Cescon TP, El-Gayed A, Yoon HA, Paulus R, Sandler HM; NRG-GU005 Collaborative Authors. Stereotactic Body Radiotherapy vs Moderately Hypofractionated IMRT for Localized Intermediate-Risk Prostate Cancer: A Randomized Clinical Trial. JAMA. Published online August 13, 2026.[^1]

Journal/source: JAMA  
Publication type: Peer-reviewed international randomized phase III clinical trial  
One-line takeaway: Five-fraction prostate SBRT improved some quality-of-life domains but was not superior to moderately hypofractionated IMRT for urinary irritative symptoms or 3-year disease-free survival.

Evidence tier: High-level phase III randomized evidence from 698 patients treated across 136 centres.

Importance score: 9/10

Key limitations:

- The trial tested superiority, so failure to demonstrate superiority should not be interpreted as proof that SBRT is oncologically inferior.
- Median follow-up was only 3.2 years, which is relatively short for favorable intermediate-risk prostate cancer.
- The SBRT prescription was 36.25 Gy in 5 fractions; results should not automatically be generalized to higher-dose SBRT schedules.
- Contemporary use of MRI guidance, rectal spacers, focal boosting, and genomic risk stratification was not the central question of the trial.

Practical radiation oncology relevance:
For appropriate intermediate-risk patients, this study supports viewing 5-fraction SBRT primarily as a highly convenient treatment option with broadly comparable short-term patient experience rather than as a method expected to improve disease control. At 2 years, urinary irritative/obstructive decline was similar between groups, while bowel-related quality-of-life decline was less frequent with SBRT. The 3-year disease-free survival result argues against claiming superior efficacy from treatment compression alone.

---

## Worth Skimming

### 2. Impact of Volume and Image Strategy on Dose Prescription Accuracy in Lung Stereotactic Body Radiation Therapy

Citation: Crop F, Campisi N, Messéant M, Le Tinier F, Ba A, Lacornerie T. Impact of Volume and Image Strategy on Dose Prescription Accuracy in Lung Stereotactic Body Radiation Therapy. Practical Radiation Oncology. Published online August 12, 2026.[^2]

Journal/source: Practical Radiation Oncology  
Publication type: Peer-reviewed medical physics and treatment-planning validation study  
One-line takeaway: Common lung SBRT prescription strategies differ in how accurately they represent dose delivered to a moving tumour across the respiratory cycle.

Evidence tier: Technical dosimetric validation study using respiratory-resolved imaging and dose recalculation.

Importance score: 7.5/10

Key limitations:

- Dosimetric accuracy is a surrogate endpoint and was not linked directly to local control or toxicity.
- Results depend on the studied tumour sizes, motion patterns, CT reconstruction methods, and dose-calculation algorithms.
- Prescription conventions vary substantially across institutions, limiting direct transfer of a single preferred method.
- Respiratory irregularity during treatment may differ from the planning 4DCT used as the reference.

Practical radiation oncology relevance:
Lung SBRT dose reporting is deceptively complicated because dose may be prescribed to the PTV while the biological target is moving through heterogeneous lung. This paper is useful for physicists and physicians trying to understand whether a chosen prescription convention meaningfully represents dose to the tumour itself. It also reinforces that image strategy—single phase, average-intensity projection, or maximum-intensity projection—is not merely a contouring choice but can alter how prescription accuracy is interpreted.

### 3. Reirradiation of Recurrent Brain Tumors: A Review by the ESTRO CNS Focus Group

Citation: De Pietro R, Clerici E, Harat M, Indramohan K, et al.; ESTRO CNS Focus Group. Reirradiation of recurrent brain tumors: a review by the ESTRO CNS Focus Group. Clinical and Translational Radiation Oncology. Published online August 10, 2026.[^3]

Journal/source: Clinical and Translational Radiation Oncology  
Publication type: Peer-reviewed expert review  
One-line takeaway: Reirradiation is increasingly reasonable for selected recurrent primary brain tumours, but patient selection and cumulative normal-brain risk remain more important than any single fractionation schedule.

Evidence tier: Expert review synthesizing predominantly retrospective and early prospective evidence.

Importance score: 7/10

Key limitations:

- The underlying evidence base is dominated by retrospective series and heterogeneous patient populations.
- Dose, fractionation, target-volume definitions, systemic therapy, and imaging methods vary substantially across studies.
- Radionecrosis risk is difficult to compare because toxicity definitions and follow-up are inconsistent.
- Randomized evidence demonstrating a survival benefit remains limited.

Practical radiation oncology relevance:
Reirradiation questions are becoming more common as systemic therapy improves survival and recurrent tumours are detected earlier. The practical value of this review is in structuring decision-making: histology, performance status, interval from first radiotherapy, recurrence volume, proximity to critical structures, cumulative EQD2, and expected systemic disease trajectory should all be considered before selecting stereotactic or conventionally fractionated reirradiation.

### 4. The Daily Dose: Workflow-Integrated Large Language Model Automation for Clinical Summarization and Trial Identification in Radiation Oncology

Citation: Holmes J, Mastroleo F, Borras-Osorio M, Seetamsetty S, Shiraishi S, Fatyga M, Boughey JC, Thiels CA, Breen WG, Ma DJ, Ebner DK, Routman DM, Laughlin BS, Vargas CE, Patel SH, Vora SA, Laack NN, Foong AYK, Liu W, Waddle MR. The Daily Dose: Workflow-Integrated Large Language Model Automation for Clinical Summarization and Trial Identification in Radiation Oncology. Clinical and Translational Radiation Oncology. 2026;61:101261.[^4]

Journal/source: Clinical and Translational Radiation Oncology  
Publication type: Peer-reviewed clinical AI workflow implementation and usability study  
One-line takeaway: Automated physician-specific patient summaries and trial suggestions were used frequently and viewed favorably after real-world deployment, but accuracy and outcome benefits remain incompletely established.

Evidence tier: Early mixed-methods implementation study following one month of clinical deployment.

Importance score: 6.5/10

Key limitations:

- The primary outcomes were clinician-reported usability, satisfaction, and perceived time savings rather than objective accuracy or patient outcomes.
- Only 55 clinicians responded to the evaluation survey.
- The study was conducted within a specific EHR, institutional workflow, and technical environment.
- LLM summarization and trial matching remain vulnerable to omissions, hallucinations, stale information, and incorrect eligibility interpretation.

Practical radiation oncology relevance:
This is closer to a deployable radiation-oncology AI workflow than most foundation-model papers because the tool was actually embedded into clinicians’ daily routines. Most users accessed it regularly, and a subset reported meaningful time savings. Its significance is the delivery model: a concise briefing pushed to clinicians may be more useful than another standalone chatbot. The next step should be rigorous auditing of summary accuracy, missed critical information, false trial matches, and downstream clinical effects.

### 5. Accelerated Partial Breast Irradiation in the Supine Versus Prone Position: A Comparison of Dosimetry and Acute Toxicity in a Real-World Population

Citation: Wanna A, Barbee D, et al. Accelerated Partial Breast Irradiation in the Supine Versus Prone Position: A Comparison of Dosimetry and Acute Toxicity in a Real-World Population. Clinical Oncology. Published online August 13, 2026.[^5]

Journal/source: Clinical Oncology  
Publication type: Peer-reviewed comparative clinical and dosimetric study  
One-line takeaway: Prone accelerated partial-breast irradiation reduced already-low heart and ipsilateral lung exposure and was associated with less acute dermatitis than supine treatment.

Evidence tier: Real-world comparative cohort with dosimetric and acute-toxicity endpoints.

Importance score: 6/10

Key limitations:

- Positioning was not randomized, so anatomy and patient-selection differences may confound comparisons.
- Absolute heart and lung doses were already very low in both groups.
- Acute toxicity does not establish a meaningful long-term cardiac, pulmonary, cosmetic, or local-control advantage.
- Prone setup can add complexity and may not improve geometry for every patient.

Practical radiation oncology relevance:
For departments offering external-beam APBI, this paper supports selectively considering prone treatment when breast geometry naturally separates the target from the chest wall. The absolute dosimetric differences are small, so routine prone positioning for all patients is difficult to justify; the more useful message is that simulation in an alternate position may benefit selected patients with unfavorable supine geometry.

---

## Save for Later

### 6. Particle Beam Radiotherapy for Gynecologic Cancers: A Scoping Review and Expert Opinion by the Particle Therapy Cooperative Group Gynecologic Subcommittee

Citation: Particle Therapy Cooperative Group Gynecologic Subcommittee authors. Particle Beam Radiotherapy for Gynecologic Cancers: A Scoping Review and Expert Opinion by the Particle Therapy Cooperative Group Gynecologic Subcommittee. International Journal of Radiation Oncology, Biology, Physics. Published online August 14, 2026.[^6]

Journal/source: International Journal of Radiation Oncology, Biology, Physics  
Publication type: Peer-reviewed scoping review and expert opinion  
One-line takeaway: Proton and particularly carbon-ion radiotherapy may offer useful options for selected gynecologic malignancies, especially anatomically difficult or radioresistant disease, but comparative clinical evidence remains limited.

Evidence tier: Scoping review and expert synthesis; predominantly nonrandomized evidence.

Importance score: 5.5/10

Key limitations:

- Much of the clinical literature consists of retrospective or single-institution particle-therapy series.
- Carbon-ion availability is extremely limited, reducing generalizability.
- Dosimetric superiority does not necessarily translate into better disease control or patient-reported outcomes.
- Selection bias is substantial in patients referred for proton or carbon-ion treatment.

Practical radiation oncology relevance:
This is most useful as a reference when considering unusual gynecologic scenarios—reirradiation, para-aortic or pelvic targets near critical organs, or histologies such as adenocarcinoma and sarcoma where carbon-ion therapy has generated interest. It should not be interpreted as evidence that particle therapy should routinely replace modern photon IMRT or brachytherapy.

### 7. The Evolution of Radiotherapy in Children's Oncology Group Trials, From 1998–2025

Citation: Children's Oncology Group radiotherapy investigators. The Evolution of Radiotherapy in Children's Oncology Group Trials, from 1998–2025. International Journal of Radiation Oncology, Biology, Physics. Published online August 15, 2026.[^7]

Journal/source: International Journal of Radiation Oncology, Biology, Physics  
Publication type: Peer-reviewed review article  
One-line takeaway: The review traces how pediatric cooperative-group trials have progressively refined indications, target volumes, dose, modality, and quality assurance to reduce late effects while preserving disease control.

Evidence tier: Historical and clinical-trial review rather than new comparative outcome evidence.

Importance score: 5.5/10

Key limitations:

- The paper synthesizes prior trials rather than reporting a new intervention.
- Pediatric indications and technology evolve rapidly, so historical protocols may not reflect current practice.
- Cooperative-group trial standards may not fully capture real-world variation in access to proton therapy and specialized pediatric radiotherapy.
- Long-latency toxicities require decades of follow-up and remain incompletely captured for newer techniques.

Practical radiation oncology relevance:
This is a useful educational reference for residents and clinicians because pediatric radiotherapy demonstrates how changes in target volume, dose, modality, and QA can have lifelong consequences. It also provides context for why contemporary pediatric protocols increasingly emphasize central review, proton therapy when dosimetrically advantageous, and aggressive normal-tissue sparing.

---

## Low Priority

No additional paper was included solely to populate this section. Recent radiomics, AI segmentation, and technical preprints were screened but not promoted because they lacked prospective clinical validation, meaningful external validation, or a clear near-term radiation-oncology decision point.

---

## Overall Ranking Summary

### Must Read

- 1. Stereotactic Body Radiotherapy vs Moderately Hypofractionated IMRT for Localized Intermediate-Risk Prostate Cancer

### Worth Skimming

- 2. Impact of Volume and Image Strategy on Dose Prescription Accuracy in Lung Stereotactic Body Radiation Therapy
- 3. Reirradiation of Recurrent Brain Tumors: A Review by the ESTRO CNS Focus Group
- 4. The Daily Dose: Workflow-Integrated Large Language Model Automation for Clinical Summarization and Trial Identification in Radiation Oncology
- 5. Accelerated Partial Breast Irradiation in the Supine Versus Prone Position: A Comparison of Dosimetry and Acute Toxicity in a Real-World Population

### Save for Later

- 6. Particle Beam Radiotherapy for Gynecologic Cancers: A Scoping Review and Expert Opinion by the Particle Therapy Cooperative Group Gynecologic Subcommittee
- 7. The Evolution of Radiotherapy in Children's Oncology Group Trials, From 1998–2025

### Low Priority

- No paper was included solely to fill this category.

---

## References

[^1]: Ellis RJ, Pugh SL, Yu JB, Feng FY, Konski AA, Grubb RL III, Wallace RE, Gladstone DJ, Ménard C, Miccio JA, Frazier AJ, Pennington JD, Michalski JM, Spratt DE, Martinez A, Morgan SC, Mihai A, Solanki AA, Amjad A, Straza MW, Delouya G, Schroeder TM, Marshall DT, Kapadia N, Patel AN, Cescon TP, El-Gayed A, Yoon HA, Paulus R, Sandler HM; NRG-GU005 Collaborative Authors. Stereotactic Body Radiotherapy vs Moderately Hypofractionated IMRT for Localized Intermediate-Risk Prostate Cancer: A Randomized Clinical Trial. *JAMA*. Published online August 13, 2026. DOI: https://doi.org/10.1001/jama.2026.12627. PubMed: https://pubmed.ncbi.nlm.nih.gov/42593775/

[^2]: Crop F, Campisi N, Messéant M, Le Tinier F, Ba A, Lacornerie T. Impact of Volume and Image Strategy on Dose Prescription Accuracy in Lung Stereotactic Body Radiation Therapy. *Practical Radiation Oncology*. Published online August 12, 2026. DOI: https://doi.org/10.1016/j.prro.2026.06.014. PubMed link was not fully verified during this surveillance run.

[^3]: De Pietro R, Clerici E, Harat M, Indramohan K, et al.; ESTRO CNS Focus Group. Reirradiation of recurrent brain tumors: a review by the ESTRO CNS Focus Group. *Clinical and Translational Radiation Oncology*. Published online August 10, 2026. Article 101260. DOI: https://doi.org/10.1016/j.ctro.2026.101260. Complete author list and PubMed indexing were not fully verified during this surveillance run.

[^4]: Holmes J, Mastroleo F, Borras-Osorio M, Seetamsetty S, Shiraishi S, Fatyga M, Boughey JC, Thiels CA, Breen WG, Ma DJ, Ebner DK, Routman DM, Laughlin BS, Vargas CE, Patel SH, Vora SA, Laack NN, Foong AYK, Liu W, Waddle MR. The Daily Dose: Workflow-Integrated Large Language Model Automation for Clinical Summarization and Trial Identification in Radiation Oncology. *Clinical and Translational Radiation Oncology*. 2026;61:101261. DOI: https://doi.org/10.1016/j.ctro.2026.101261. PubMed indexing was not fully verified during this surveillance run.

[^5]: Wanna A, Barbee D, et al. Accelerated Partial Breast Irradiation in the Supine Versus Prone Position: A Comparison of Dosimetry and Acute Toxicity in a Real-World Population. *Clinical Oncology*. Published online August 13, 2026. DOI: https://doi.org/10.1016/j.clon.2026.104318. Complete author list and PubMed link were not fully verified during this surveillance run.

[^6]: Particle Therapy Cooperative Group Gynecologic Subcommittee authors. Particle Beam Radiotherapy for Gynecologic Cancers: A Scoping Review and Expert Opinion by the Particle Therapy Cooperative Group Gynecologic Subcommittee. *International Journal of Radiation Oncology, Biology, Physics*. Published online August 14, 2026. DOI: https://doi.org/10.1016/j.ijrobp.2026.08.005. Complete author list and PubMed link were not fully verified during this surveillance run.

[^7]: Children's Oncology Group radiotherapy investigators. The Evolution of Radiotherapy in Children's Oncology Group Trials, from 1998–2025. *International Journal of Radiation Oncology, Biology, Physics*. Published online August 15, 2026. DOI and complete author list were not fully verified during this surveillance run.
