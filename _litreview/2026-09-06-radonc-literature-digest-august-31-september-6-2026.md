---
layout: post
title: "Weekly Radiation Oncology Literature Surveillance Digest: August 31–September 6, 2026"
date: 2026-09-06
permalink: "/litreview/2026/09/06/radonc-literature-digest-august-31-september-6-2026/"
categories: "litreview oncology radiation-oncology ai medical-physics"
thumbnail: "/assets/litreview-radonc-digest.png"
summary: "This week’s digest highlights a prospective HPV-positive oropharyngeal de-escalation trial that avoided postoperative radiotherapy in most patients, a large breast-cardiotoxicity cohort, and a notable cluster of Medical Physics papers on autonomous treatment planning, knowledge-based planning refinement, DVH prediction, and cardiac substructure segmentation."
series: radonc-weekly
---

# Weekly Radiation Oncology Literature Surveillance Digest: August 31–September 6, 2026

## Bottom Line This Week

The most clinically provocative paper this week is a **multicentre phase II de-escalation trial in HPV-associated oropharyngeal squamous cell carcinoma**. Patients received three cycles of neoadjuvant docetaxel, cisplatin, and 5-fluorouracil followed by transoral surgery; 91% ultimately avoided postoperative radiotherapy or chemoradiotherapy. The pathologic complete response rate was 65.6%, but importantly the study **did not meet its primary endpoint**. This is therefore not a practice-changing justification to omit postoperative radiotherapy outside a protocol. It is, however, a credible demonstration that systemic-response-guided radiation avoidance can be tested prospectively and may become an important de-escalation strategy if confirmed with larger cohorts and mature disease-control data.

The other clinically meaningful paper is a **nationwide Korean cohort of 23,305 women treated with postoperative breast radiotherapy** examining ischemic heart disease by laterality and baseline cardiovascular risk. Left-sided treatment was associated with a modest overall excess risk, but the signal was concentrated in patients with three cardiovascular risk factors. The study lacks dosimetry and uses laterality as a surrogate for cardiac exposure, so it should not be used to relax heart constraints in low-risk patients. Its more useful implication is that cardiac risk is the product of both treatment exposure and host vulnerability, supporting aggressive cardiovascular risk management and prioritization of heart-sparing techniques in higher-risk patients.

The most operationally important publications are a pair of **Medical Physics papers describing PlanningCopilot**, an LLM-driven radiotherapy planning framework for locally advanced NSCLC. In one study, a multi-agent system connected to Eclipse through validated ESAPI modules autonomously produced plans meeting institutional dosimetric requirements in 62 retrospective cases; the first 21 autonomous IMRT plans also passed measurement-based patient-specific QA. A companion paper showed that the same framework could improve the portability of heterogeneous knowledge-based planning models, raising clinical-goal achievement from roughly 69%–79% to 97%–98%. These are unusually mature workflow studies compared with most LLM papers, but they remain retrospective, single-system evaluations without prospective clinical deployment, failure-rate characterization, or evidence that autonomous planning improves patient outcomes.

A separate externally evaluated **CNN-GNN DVH prediction model** is also worth attention because it directly predicts clinically interpretable dose-volume histograms rather than only voxel-level dose. Its external nasopharyngeal-cancer evaluation and demonstration that predictions could identify suboptimal plans make it more interesting than a typical dosimetric AI paper, but it still requires prospective workflow validation.

The remaining AI work is more developmental. A transformer model for automated left anterior descending coronary artery segmentation addresses a genuinely difficult contouring problem relevant to cardiac sparing, but the institutional fine-tuning cohort comprised only 20 free-breathing CT scans and the Dice score on those scans remained approximately 46%. That is not adequate evidence for unsupervised contour use.

Overall, this was a **technically strong but clinically moderate week**. There was no new phase III radiotherapy trial establishing a standard of care. The most important clinical paper is hypothesis-generating de-escalation research, while the strongest signal is operational: LLM-guided planning systems are moving from chatbot-style demonstrations toward direct interaction with treatment-planning software. That shift matters, but prospective safety and human-factors validation are now more important than further retrospective dosimetric gains.

---

## Must Read

### 1. Neoadjuvant Triplet Chemotherapy Enables Radiotherapy Avoidance in Human Papillomavirus–Associated Oropharyngeal Cancer

Citation: Yokota T, Tsuzuki T, Onitsuka T, Iizuka A, Ouchi Y, Mori T, Tsukahara K, Hanyu K, Mukaigawa T, Nakashima T, Uryu H, Omura G, Nakamura H, Uemura H, Nishikawa D, Kano S, Akiyama Y, Onoe T, Oyamada S, Yamaguchi T. Neoadjuvant triplet chemotherapy enables radiotherapy avoidance in human papillomavirus–associated oropharyngeal cancer: a multicentre Phase II trial. British Journal of Cancer. Published September 5, 2026.[^1]

Journal/source: British Journal of Cancer  
Publication type: Peer-reviewed prospective multicentre phase II clinical trial  
One-line takeaway: Neoadjuvant TPF followed by transoral surgery allowed 91% of enrolled patients to avoid postoperative radiotherapy or chemoradiotherapy, but the trial did not meet its prespecified primary endpoint.

Evidence tier: Prospective multicentre phase II evidence; compelling de-escalation signal but not practice-changing.

Importance score: 8.5/10

Key limitations:

- Only 32 eligible patients were enrolled, and 30 underwent transoral surgery.
- The trial did not meet its primary endpoint despite a 65.6% pathological complete response rate.
- Mature locoregional control, progression-free survival, and overall survival are more important than pathologic response for determining whether radiation can safely be omitted.
- Three cycles of TPF chemotherapy introduce substantial systemic toxicity and may simply exchange one treatment burden for another.
- The results apply to carefully selected resectable HPV-associated OPSCC and should not be extrapolated to broader head and neck populations.

Practical radiation oncology relevance:
This is important because it directly tests a pathway in which radiotherapy is omitted rather than merely reduced. The study demonstrates that neoadjuvant response can select a large proportion of patients for surgery without postoperative RT/CRT, with quality-of-life scores recovering to baseline or better within one year. For practicing radiation oncologists, the correct interpretation is not that PORT can now be omitted after TPF, but that response-adapted de-escalation has moved into prospective multicentre testing. Longer oncologic follow-up and randomized validation are required before changing standard postoperative indications.

### 2. Laterality of Breast Radiotherapy and Ischemic Heart Disease by Cardiovascular Risk Burden

Citation: Chung SY, Noh OK. Laterality of Breast Radiotherapy and Ischemic Heart Disease by Cardiovascular Risk Burden. JAMA Network Open. 2026;9(9):e2631356.[^2]

Journal/source: JAMA Network Open  
Publication type: Peer-reviewed nationwide retrospective cohort study  
One-line takeaway: Excess ischemic heart disease associated with left-sided breast radiotherapy was modest overall and appeared concentrated among patients with greater baseline cardiovascular risk burden.

Evidence tier: Large population-based observational cohort; strong for association, limited for causal dosimetric inference.

Importance score: 8/10

Key limitations:

- No heart, coronary artery, or left anterior descending artery dosimetry was available.
- Tumour laterality was used as a surrogate for cardiac radiation exposure across treatments delivered from 2002–2018.
- The key subgroup signal was nonmonotonic: the strongest association occurred with three risk factors, while estimates with four or five were imprecise.
- Residual confounding is unavoidable in claims-based observational data.
- Median follow-up of 4.3 years is short relative to the full latency of radiation-associated cardiovascular disease.

Practical radiation oncology relevance:
The study should not be interpreted as evidence that cardiac sparing is unnecessary in patients with few cardiovascular risk factors. Instead, it reinforces a risk-adapted survivorship model: baseline hypertension, diabetes, dyslipidemia, smoking, obesity, and age interact with treatment-related cardiovascular risk. For higher-risk patients, this strengthens the rationale for meticulous heart and coronary sparing, DIBH when useful, selective consideration of protons when dosimetrically compelling, and aggressive management of modifiable cardiovascular risk factors.

---

## Worth Skimming

### 3. PlanningCopilot: An Agentic Framework Integrating ESAPI Modules for Autonomous Treatment Planning in Lung Radiotherapy

Citation: Guo H, Wang Z, Kunkyab T, Lei Y, Samstein R, Rosenzweig KE, Chao M, Liu T, Zhang J, Xia J. PlanningCopilot: An agentic framework integrating ESAPI modules for autonomous treatment planning in lung radiotherapy. Medical Physics. 2026;53(9):e70665.[^3]

Journal/source: Medical Physics  
Publication type: Peer-reviewed AI treatment-planning technical validation study  
One-line takeaway: A GPT-4.1 multi-agent system linked to Eclipse generated clinically acceptable LA-NSCLC plans autonomously in 62 retrospective cases, with the first 21 autonomous IMRT plans passing measurement-based patient-specific QA.

Evidence tier: Retrospective single-institution technical validation with treatment-planning-system integration and limited deliverability testing.

Importance score: 7.5/10

Key limitations:

- The evaluation was retrospective and confined to 62 conventionally fractionated LA-NSCLC cases.
- The system used one TPS ecosystem, institutional planning rules, and a validated local ESAPI module, limiting immediate generalizability.
- Passing dosimetric goals and PSQA does not establish safe autonomous clinical deployment.
- Rare failure modes, hallucinated planning actions, software faults, edge-case anatomy, and human-factors risks were not characterized prospectively.
- Only the first 21 plans underwent measurement-based PSQA.

Practical radiation oncology relevance:
This is more clinically relevant than a generic LLM-planning paper because the agents were connected to a real TPS and executed optimization actions rather than merely recommending them. All autonomous plans met stated clinical dosimetric requirements, and measured deliverability was demonstrated in a subset. The next meaningful milestone should not be another retrospective plan-quality comparison; it should be prospective silent-mode deployment, predefined failure auditing, and eventually supervised clinical implementation with explicit human override.

### 4. Improving Portability of Knowledge-Based Planning Using an LLM-Driven Plan Refinement Framework in Lung Radiotherapy

Citation: Wang Z, Guo H, Lei Y, Samstein R, Rosenzweig KE, Chao M, Liu T, Xia J, Zhang J. Improving portability of knowledge-based planning using an LLM-driven plan refinement framework in lung radiotherapy. Medical Physics. 2026;53(9):e70657.[^4]

Journal/source: Medical Physics  
Publication type: Peer-reviewed AI workflow and treatment-planning technical validation study  
One-line takeaway: An LLM-guided refinement layer increased clinical-goal achievement to approximately 97%–98% across several different knowledge-based planning initializations without retraining the underlying model.

Evidence tier: Retrospective multi-model technical validation in 62 LA-NSCLC cases.

Importance score: 7/10

Key limitations:

- The patient cohort overlaps conceptually with the companion PlanningCopilot work and remains retrospective.
- Evaluation focused on dosimetric goal achievement rather than planning time, staff workload, error interception, or patient outcomes.
- The underlying planning objectives and accepted tradeoffs remain institution-specific.
- Model portability was tested across planning initializations, not across fully independent hospitals prospectively.
- LLM-mediated optimization adds a new software layer that itself requires QA and governance.

Practical radiation oncology relevance:
One of the persistent barriers to knowledge-based planning is that a model trained elsewhere may not satisfy local planning preferences. This paper suggests an alternative to retraining: use a constrained LLM-based post-processing layer to refine whatever initial plan is produced. Goal achievement improved from 69%–79% to 97%–98% across three KBP models and from 68% to 97% starting from a fixed non-KBP template. If reproduced across independent centres, this could make shared planning models substantially more useful.

### 5. Interpretable Graph-Conditioned CNNs for Dose-Volume Histogram Prediction in Radiotherapy

Citation: Zhu X, Ling C, Xu H, Men K, Dai J, Hu W, Liu Z, Fan J. Interpretable graph-conditioned CNNs for dose-volume histogram prediction in radiotherapy. Medical Physics. 2026;53(9):e70663.[^5]

Journal/source: Medical Physics  
Publication type: Peer-reviewed AI treatment-planning and QA technical validation study  
One-line takeaway: A CNN-GNN model directly predicted organ-at-risk DVHs and showed external validation in nasopharyngeal cancer, with predictions capable of identifying and guiding revision of suboptimal plans.

Evidence tier: Retrospective technical validation with an external institutional cohort and clinical plan-assessment component.

Importance score: 6.5/10

Key limitations:

- The study predicts dosimetric expectations rather than directly improving clinical outcomes.
- External validation was disease- and institution-specific rather than broad multi-institutional testing.
- A model can reproduce historical institutional planning biases as well as good practice.
- “Noninferiority” of predicted indices to reference plans does not establish that the model is safe as an automated approval tool.
- Prospective evaluation of whether the model reduces planning variation or catches clinically meaningful errors is still needed.

Practical radiation oncology relevance:
This is a more interpretable approach to plan QA than many voxel-dose prediction systems because it directly outputs the DVHs clinicians actually review. Mean prediction error for brainstem and larynx dose improved substantially compared with the prior approach, and the model was used to flag suboptimal plans for revision. Its near-term role is more plausibly decision support and automated plan-quality screening than autonomous plan acceptance.

---

## Save for Later

### 6. A Neighborhood Attention Transformer Network for Enhanced 3D Segmentation of the Left Anterior Descending Artery

Citation: Sultan RI, Li C, Demetriou Y, Ghanem AI, Kim JP, Cunningham J, Bagher-Ebadian H, Zhu D, Thind KS. A neighborhood attention transformer network for enhanced 3D segmentation of the left anterior descending artery. Medical Physics. 2026;53(9):e70653.[^6]

Journal/source: Medical Physics  
Publication type: Peer-reviewed AI segmentation technical validation study  
One-line takeaway: A transformer-based network used large-scale coronary CTA pretraining and parameter-efficient fine-tuning to improve LAD segmentation on low-contrast free-breathing radiotherapy CT.

Evidence tier: Small institutional radiotherapy-CT development cohort with external coronary-imaging benchmarking; no prospective clinical workflow validation.

Importance score: 5.5/10

Key limitations:

- Only 20 institutional free-breathing CT scans were used for fine-tuning.
- Dice on the radiotherapy CT task remained only 45.64%, reflecting how difficult and uncertain LAD boundaries are on noncontrast CT.
- External ImageCAS performance was substantially better but represents a different imaging context with clearer coronary anatomy.
- No study of contour editing time, interobserver comparison in clinical use, dosimetric consequences, or cardiac-event prediction was performed.
- Automated segmentation of a small critical coronary structure requires careful uncertainty handling before clinical adoption.

Practical radiation oncology relevance:
Coronary-substructure dose may be more informative than mean heart dose in some thoracic and breast settings, but manual LAD contouring is slow and poorly reproducible on noncontrast CT. This model addresses an important target for automation, and the pretraining strategy is technically sensible. The modest Dice on actual radiotherapy CT, however, is a reminder that impressive architecture alone does not overcome ambiguous source imaging. Human review remains mandatory.

---

## Low Priority

### 7. MRI-Based Radiomics Model for Predicting VEGFA Expression and Prognosis in Lower-Grade Glioma

Citation: Zhao K, Hong X, Cheng H, Xu S, Zhao D, Lin J, Gu Y, Ren G, Chen B, Zhan L, Wang Y. MRI-based radiomics model for predicting VEGFA expression and prognosis in lower-grade glioma. Medical Physics. 2026;53(9):e70615.[^7]

Journal/source: Medical Physics  
Publication type: Peer-reviewed retrospective radiomics study  
One-line takeaway: MRI radiomic features were used to predict VEGFA expression and prognosis in lower-grade glioma, but the work does not currently provide an actionable radiation-oncology decision point.

Evidence tier: Retrospective radiomics model-development study.

Importance score: 4/10

Key limitations:

- Radiomic associations are vulnerable to scanner, sequence, reconstruction, segmentation, and institution-specific effects.
- Predicting VEGFA expression does not itself establish a treatment-selection strategy.
- The clinical utility of the prognostic model was not demonstrated prospectively.
- No evidence shows that radiotherapy dose, target, fractionation, or systemic therapy should change based on the model.
- This remains biomarker-development research rather than a validated clinical tool.

Practical radiation oncology relevance:
This is the kind of paper that should remain below the threshold for routine clinical attention unless later work demonstrates robust external validation and a concrete treatment decision that improves patient outcomes. It may be useful for investigators studying imaging biomarkers in glioma, but it does not currently alter radiotherapy planning or management.

---

## Overall Ranking Summary

### Must Read

- 1. Neoadjuvant Triplet Chemotherapy Enables Radiotherapy Avoidance in Human Papillomavirus–Associated Oropharyngeal Cancer
- 2. Laterality of Breast Radiotherapy and Ischemic Heart Disease by Cardiovascular Risk Burden

### Worth Skimming

- 3. PlanningCopilot: An Agentic Framework Integrating ESAPI Modules for Autonomous Treatment Planning in Lung Radiotherapy
- 4. Improving Portability of Knowledge-Based Planning Using an LLM-Driven Plan Refinement Framework in Lung Radiotherapy
- 5. Interpretable Graph-Conditioned CNNs for Dose-Volume Histogram Prediction in Radiotherapy

### Save for Later

- 6. A Neighborhood Attention Transformer Network for Enhanced 3D Segmentation of the Left Anterior Descending Artery

### Low Priority

- 7. MRI-Based Radiomics Model for Predicting VEGFA Expression and Prognosis in Lower-Grade Glioma

---

## References

[^1]: Yokota T, Tsuzuki T, Onitsuka T, Iizuka A, Ouchi Y, Mori T, Tsukahara K, Hanyu K, Mukaigawa T, Nakashima T, Uryu H, Omura G, Nakamura H, Uemura H, Nishikawa D, Kano S, Akiyama Y, Onoe T, Oyamada S, Yamaguchi T. Neoadjuvant triplet chemotherapy enables radiotherapy avoidance in human papillomavirus–associated oropharyngeal cancer: a multicentre Phase II trial. *British Journal of Cancer*. Published September 5, 2026. DOI: https://doi.org/10.1038/s41416-026-03610-y. Journal article: https://www.nature.com/articles/s41416-026-03610-y. A PubMed record was not fully verified during this surveillance run.

[^2]: Chung SY, Noh OK. Laterality of Breast Radiotherapy and Ischemic Heart Disease by Cardiovascular Risk Burden. *JAMA Network Open*. 2026;9(9):e2631356. Published September 2, 2026. DOI: https://doi.org/10.1001/jamanetworkopen.2026.31356. Journal article: https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2853516. A PubMed URL was not fully verified during this surveillance run.

[^3]: Guo H, Wang Z, Kunkyab T, Lei Y, Samstein R, Rosenzweig KE, Chao M, Liu T, Zhang J, Xia J. PlanningCopilot: An agentic framework integrating ESAPI modules for autonomous treatment planning in lung radiotherapy. *Medical Physics*. 2026;53(9):e70665. Published September 2, 2026. DOI: https://doi.org/10.1002/mp.70665. PubMed: https://pubmed.ncbi.nlm.nih.gov/42682183/

[^4]: Wang Z, Guo H, Lei Y, Samstein R, Rosenzweig KE, Chao M, Liu T, Xia J, Zhang J. Improving portability of knowledge-based planning using an LLM-driven plan refinement framework in lung radiotherapy. *Medical Physics*. 2026;53(9):e70657. Published September 2, 2026. DOI: https://doi.org/10.1002/mp.70657. PubMed: https://pubmed.ncbi.nlm.nih.gov/42682172/

[^5]: Zhu X, Ling C, Xu H, Men K, Dai J, Hu W, Liu Z, Fan J. Interpretable graph-conditioned CNNs for dose-volume histogram prediction in radiotherapy. *Medical Physics*. 2026;53(9):e70663. Published September 4, 2026. DOI: https://doi.org/10.1002/mp.70663. PubMed: https://pubmed.ncbi.nlm.nih.gov/42693797/

[^6]: Sultan RI, Li C, Demetriou Y, Ghanem AI, Kim JP, Cunningham J, Bagher-Ebadian H, Zhu D, Thind KS. A neighborhood attention transformer network for enhanced 3D segmentation of the left anterior descending artery. *Medical Physics*. 2026;53(9):e70653. Published September 4, 2026. DOI: https://doi.org/10.1002/mp.70653. PubMed: https://pubmed.ncbi.nlm.nih.gov/42693790/

[^7]: Zhao K, Hong X, Cheng H, Xu S, Zhao D, Lin J, Gu Y, Ren G, Chen B, Zhan L, Wang Y. MRI-based radiomics model for predicting VEGFA expression and prognosis in lower-grade glioma. *Medical Physics*. 2026;53(9):e70615. Published September 2, 2026. DOI: https://doi.org/10.1002/mp.70615. PubMed indexing was identified, but the exact PubMed URL was not independently verified during this surveillance run.
