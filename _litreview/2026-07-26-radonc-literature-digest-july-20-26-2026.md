---
layout: post
title: "Weekly Radiation Oncology Literature Surveillance Digest: July 20–26, 2026"
date: 2026-07-26
permalink: "/litreview/2026/07/26/radonc-literature-digest-july-20-26-2026/"
categories: "litreview oncology radiation-oncology ai medical-physics"
thumbnail: "/assets/litreview-radonc-digest.png"
series: radonc-weekly
summary: "This week’s digest highlights NCI trial-planning recommendations for advanced cutaneous squamous cell carcinoma in immunosuppressed patients, prostate radiotherapy delivery-time toxicity signals, a large multicentre pelvic CBCT dataset, recurrent gynecologic interstitial brachytherapy, and HDR brachytherapy audit infrastructure."
---

# Weekly Radiation Oncology Literature Surveillance Digest: July 20–26, 2026

**Coverage window searched:** July 20–26, 2026

**Scope searched:** PubMed, arXiv, medRxiv, bioRxiv, IJROBP, Radiotherapy & Oncology, Practical Radiation Oncology, JCO and ASCO publications, Lancet Oncology, Nature Medicine, Medical Physics, and Physics in Medicine & Biology.

**Note:** This is a best-effort literature surveillance digest, not a formal systematic review. Online-first publication dates were prioritized. This was a relatively low-volume week for high-level radiation-oncology evidence, so lower-evidence technical and implementation studies were included only where they had a clear operational or clinical decision point.

---

## Bottom Line This Week

The most clinically meaningful publication is the **NCI clinical-trials planning statement for advanced cutaneous squamous cell carcinoma in immunosuppressed patients**. It does not provide practice-changing comparative outcomes, but it addresses a high-risk population that has often been excluded from trials and proposes a framework for future multidisciplinary studies involving radiation, surgery, systemic therapy, and transplant-related considerations.

The most clinically provocative original study is the retrospective prostate IMRT analysis linking **longer beam-delivery time with a higher incidence of late grade 2 or greater rectal bleeding**. The signal is biologically plausible through intrafraction motion, but the study is small, single-centre, confounded by delivery platform, and based on a fractionation approach that is less common today. It should not alter routine treatment technique by itself.

The most operationally relevant imaging contribution is **COBRA2026**, a large multicentre release of raw pelvic CBCT projection data from 867 patients across six European centres. Its importance lies less in an immediate patient-care intervention and more in enabling reproducible development and benchmarking of CBCT reconstruction, artifact correction, low-dose imaging, synthetic CT, and adaptive-radiotherapy methods.

The most useful brachytherapy workflow paper is the Australia–New Zealand **HDR postal audit**, which demonstrates a practical 3D-printed jig approach for multicentre reference air-kerma-rate auditing. This is quality-infrastructure work rather than clinical-outcomes evidence, but it addresses a genuine safety and standardization gap.

Nothing this week appears to establish a new standard of care. The week was primarily **implementation-focused and hypothesis-generating**, with moderate relevance to trial design, adaptive-imaging research, brachytherapy quality assurance, and prostate-treatment workflow.

---

## Must Read

### 1. NCI Trial-Planning Recommendations for Advanced Cutaneous Squamous Cell Carcinoma in Immunosuppressed Patients

Citation: Koyfman SA, Bauman JE, Mohseni M, Amit M, Dadhania DM, Demehri S, Divi V, Geiger JL, Hanna GJ, Kushalani N, Lipson EJ, Mannon RB, Migden M, Schmalbach CE, Swiecicki PL, Tayar JH, Tsai KY, Wuthrick EJ, Malik S, Gross ND. Summary recommendations from the NCI clinical trials planning meeting on advanced cutaneous squamous cell carcinoma in immunosuppressed patients. JNCI: Journal of the National Cancer Institute. Published online July 21, 2026.[^1]

Journal/source: JNCI: Journal of the National Cancer Institute  
Publication type: Peer-reviewed clinical-trial planning statement and expert consensus  
One-line takeaway: The NCI working group outlines trial priorities for immunosuppressed patients with high-risk or advanced cutaneous squamous cell carcinoma, a population with high recurrence and mortality that has often been excluded from prospective trials.

Evidence tier: Expert multidisciplinary consensus and clinical-trial planning framework; not comparative treatment evidence.

Importance score: 7.5/10

Key limitations:

- This is a planning and consensus document rather than a completed clinical trial.
- Recommendations may evolve as systemic therapies and transplant-management strategies change.
- The immunosuppressed population is heterogeneous, including solid-organ transplant recipients, hematologic malignancies, autoimmune disease, and other causes of immune dysfunction.
- It does not directly establish the optimal sequencing or intensity of surgery, radiation, or systemic therapy.

Practical radiation oncology relevance:
Radiation oncologists frequently participate in management of high-risk cutaneous squamous cell carcinoma involving the head and neck, parotid basin, named nerves, or regional nodes. This document is useful for understanding why immunosuppressed patients require dedicated trial designs and how radiation questions may be integrated with surgery, immunotherapy, transplant medicine, and toxicity considerations.

---

## Worth Skimming

### 2. Relationship Between Rectal Bleeding and Radiation Delivery Time in Prostate IMRT

Citation: Kita N, et al. Relationship between rectal bleeding and radiation delivery time in intensity-modulated radiotherapy for localized prostate cancer: a preliminary study. Journal of Radiation Research. Published online July 21, 2026.[^2]

Journal/source: Journal of Radiation Research  
Publication type: Peer-reviewed retrospective clinical outcomes study  
One-line takeaway: In a 142-patient cohort, treatment delivery times of 150 seconds or less were associated with a lower incidence of late grade 2 or greater rectal bleeding than longer delivery times.

Evidence tier: Single-centre retrospective cohort with multivariable analysis and propensity-score matching.

Importance score: 6.5/10

Key limitations:

- The cohort was small and retrospective, with only a limited number of rectal-bleeding events.
- Delivery time was strongly associated with treatment platform, creating residual confounding between Tomotherapy and VMAT.
- The multivariable result did not reach conventional statistical significance and had a very wide confidence interval.
- Patients received 74.8 Gy in 34 fractions, limiting applicability to current moderate hypofractionation and prostate SBRT.

Practical radiation oncology relevance:
The study supports the general principle that intrafraction motion and treatment efficiency may matter clinically, particularly when steep rectal dose gradients are used without a spacer. It is not sufficient to select a platform or fractionation schedule based on delivery time alone, but it adds a clinically relevant endpoint to discussions of plan complexity, imaging, and motion management.

### 3. COBRA2026: A Large-Scale Multicentre Pelvic CBCT Projection Dataset

Citation: Thummerer A, Rit S, Kamp F, Maspero M, Intven MPW, Boné TG, Kurz C, Landry G, Baudier T, Kadhim M, Arnold J, Rauter M, Knäusl B, Zimmermann L. COBRA2026: a large-scale multicenter pelvic cone-beam computed tomography projection dataset. arXiv. Submitted July 22, 2026.[^3]

Journal/source: arXiv and Zenodo  
Publication type: Preprint and open multicentre imaging dataset  
One-line takeaway: COBRA2026 releases raw CBCT projections, geometry, calibration data, reconstructed images, and paired planning CT information from 867 pelvic-radiotherapy patients across six European centres.

Evidence tier: Multicentre dataset and technical resource; not a clinical validation study.

Importance score: 6.5/10

Key limitations:

- The dataset is restricted to pelvic radiotherapy and may not represent thoracic, head-and-neck, or highly mobile anatomy.
- Planning CT images were deformably registered to daily anatomy, introducing registration uncertainty into reference data.
- The license is noncommercial, which may limit some forms of development and deployment.
- Dataset scale and diversity improve benchmarking but do not guarantee clinical safety or generalizability of models trained on it.

Practical radiation oncology relevance:
Open raw-projection datasets are uncommon in radiation oncology. This release may improve reproducibility for sparse-view reconstruction, low-dose CBCT, scatter and artifact correction, motion compensation, synthetic CT, and adaptive dose-calculation research. Its greatest value is likely as shared infrastructure for method comparison rather than as an immediate clinical tool.

### 4. Individual Curved-Needle Interstitial Brachytherapy for Recurrent Gynecologic Tumours After External-Beam Radiotherapy

Citation: Chen Y, et al. Development and assessment of interstitial brachytherapy using individual curved-needle in treatment of recurrent gynecological tumors after external beam radiotherapy. Technology in Cancer Research & Treatment. Published online July 21, 2026.[^4]

Journal/source: Technology in Cancer Research & Treatment  
Publication type: Peer-reviewed brachytherapy technical and clinical assessment study  
One-line takeaway: The study evaluates individualized curved-needle interstitial brachytherapy for recurrent gynecologic tumours arising after prior external-beam radiotherapy.

Evidence tier: Technical and clinical feasibility evidence; exact cohort design should be reviewed in the full paper.

Importance score: 6/10

Key limitations:

- The available indexed record did not permit complete verification of cohort size, follow-up, and comparative outcomes during this surveillance run.
- Reirradiation outcomes are highly dependent on recurrence volume, location, prior dose, interval, and organ-at-risk exposure.
- Individualized applicator or needle techniques may require expertise and resources that are not broadly available.
- Feasibility and dosimetry do not establish superiority over standard interstitial templates, surgery, systemic therapy, or SBRT.

Practical radiation oncology relevance:
Recurrent gynecologic cancer after prior pelvic radiation is a difficult salvage setting in which interstitial brachytherapy can provide steep dose gradients and focal dose escalation. The paper is most relevant to brachytherapy programs considering patient-specific needle geometry, but cumulative dose reconstruction and severe late-toxicity risk remain central.

---

## Save for Later

### 5. HDR Brachytherapy Postal Audit Across Australia and New Zealand

Citation: Murphy E, Little D, Wilks R, Crowe SB, Kairn T. HDR brachytherapy postal audit across Australia and New Zealand with in air jig. Physical and Engineering Sciences in Medicine. Published online July 21, 2026.[^5]

Journal/source: Physical and Engineering Sciences in Medicine  
Publication type: Peer-reviewed multicentre dosimetry audit and quality-improvement study  
One-line takeaway: A 3D-printed reference jig and standardized spreadsheet were used to pilot a postal reference air-kerma-rate audit across 18 HDR brachytherapy centres.

Evidence tier: Multicentre technical audit and implementation study.

Importance score: 6/10

Key limitations:

- The audit assessed a focused dosimetric quantity rather than the full brachytherapy treatment chain.
- Eighteen centres provide useful pilot data but do not establish national or international performance standards.
- In-air measurements do not test applicator reconstruction, source positioning, imaging, planning, transfer, or treatment-delivery errors.
- The method requires further refinement before widespread routine adoption.

Practical radiation oncology relevance:
Independent dosimetry audit is an important safety layer, but brachytherapy audit infrastructure is less mature than external-beam audit programs. A low-cost, portable, 3D-printed solution could make periodic auditing more feasible and create a foundation for broader end-to-end brachytherapy quality assurance.

---

## Low Priority

### 6. A Decade of Interventional Radiotherapy: Bibliometric Trends in Brachytherapy

Citation: Mastroleo F, Milovanova E, Durante S, Gagliardi F, Bilski M, Fionda B, et al. A Decade of Interventional Radiotherapy (Brachytherapy): Progress, Challenges, and Future Prospects—A Bibliometric Analysis. Technology in Cancer Research & Treatment. Published online July 21, 2026.[^6]

Journal/source: Technology in Cancer Research & Treatment  
Publication type: Peer-reviewed bibliometric analysis  
One-line takeaway: The paper maps publication activity, collaboration networks, and research themes in brachytherapy over the preceding decade.

Evidence tier: Bibliometric and descriptive research.

Importance score: 4/10

Key limitations:

- Publication volume and citation patterns do not measure treatment efficacy, safety, or clinical value.
- Bibliometric findings are sensitive to database selection, search strategy, language, and citation lag.
- Highly cited topics may reflect established fields rather than the most clinically important emerging questions.
- The paper does not provide actionable treatment recommendations.

Practical radiation oncology relevance:
This may be useful for researchers identifying collaboration patterns or underexplored topics, but it has little immediate relevance to patient selection, contouring, prescription, toxicity management, or departmental workflow.

---

## Overall Ranking Summary

### Must Read

- 1. NCI Trial-Planning Recommendations for Advanced Cutaneous Squamous Cell Carcinoma in Immunosuppressed Patients

### Worth Skimming

- 2. Relationship Between Rectal Bleeding and Radiation Delivery Time in Prostate IMRT
- 3. COBRA2026: A Large-Scale Multicentre Pelvic CBCT Projection Dataset
- 4. Individual Curved-Needle Interstitial Brachytherapy for Recurrent Gynecologic Tumours After External-Beam Radiotherapy

### Save for Later

- 5. HDR Brachytherapy Postal Audit Across Australia and New Zealand

### Low Priority

- 6. A Decade of Interventional Radiotherapy: Bibliometric Trends in Brachytherapy

---

## References

[^1]: Koyfman SA, Bauman JE, Mohseni M, Amit M, Dadhania DM, Demehri S, Divi V, Geiger JL, Hanna GJ, Kushalani N, Lipson EJ, Mannon RB, Migden M, Schmalbach CE, Swiecicki PL, Tayar JH, Tsai KY, Wuthrick EJ, Malik S, Gross ND. Summary recommendations from the NCI clinical trials planning meeting on advanced cutaneous squamous cell carcinoma in immunosuppressed patients. *JNCI: Journal of the National Cancer Institute*. Published online July 21, 2026. DOI: https://doi.org/10.1093/jnci/djag240. PubMed: https://pubmed.ncbi.nlm.nih.gov/42478754/

[^2]: Kita N, et al. Relationship between rectal bleeding and radiation delivery time in intensity-modulated radiotherapy for localized prostate cancer: a preliminary study. *Journal of Radiation Research*. Published online July 21, 2026. DOI: https://doi.org/10.1093/jrr/rrag055. PubMed: https://pubmed.ncbi.nlm.nih.gov/42479818/. Complete author list should be confirmed from the final citation export before formal bibliographic use.

[^3]: Thummerer A, Rit S, Kamp F, Maspero M, Intven MPW, Boné TG, Kurz C, Landry G, Baudier T, Kadhim M, Arnold J, Rauter M, Knäusl B, Zimmermann L. COBRA2026: a large-scale multicenter pelvic cone-beam computed tomography projection dataset. *arXiv*. Submitted July 22, 2026. arXiv: https://arxiv.org/abs/2607.20037. Dataset DOI: https://doi.org/10.5281/zenodo.21322350

[^4]: Chen Y, et al. Development and assessment of interstitial brachytherapy using individual curved-needle in treatment of recurrent gynecological tumors after external beam radiotherapy. *Technology in Cancer Research & Treatment*. Published online July 21, 2026. DOI: https://doi.org/10.1177/15330338261470898. PubMed: https://pubmed.ncbi.nlm.nih.gov/42478440/. Complete author list and detailed cohort characteristics were not fully verified during this surveillance run.

[^5]: Murphy E, Little D, Wilks R, Crowe SB, Kairn T. HDR brachytherapy postal audit across Australia and New Zealand with in air jig. *Physical and Engineering Sciences in Medicine*. Published online July 21, 2026. DOI: https://doi.org/10.1007/s13246-026-01767-7. PubMed: https://pubmed.ncbi.nlm.nih.gov/42479383/

[^6]: Mastroleo F, Milovanova E, Durante S, Gagliardi F, Bilski M, Fionda B, et al. A Decade of Interventional Radiotherapy (Brachytherapy): Progress, Challenges, and Future Prospects—A Bibliometric Analysis. *Technology in Cancer Research & Treatment*. Published online July 21, 2026. PubMed: https://pubmed.ncbi.nlm.nih.gov/42478994/. DOI and complete author list were not fully verified during this surveillance run.
