---
categories: litreview oncology radiation-oncology ai medical-physics
date: 2026-09-27
layout: post
permalink: /litreview/2026/09/27/radonc-literature-digest-september-21-27-2026/
series: radonc-weekly
summary: A technically strong but clinically quiet week, led by AI
  implementation in radiotherapy, adaptive glioma modelling, end-to-end
  automated cervical planning, maskless SGRT, and multi-institutional
  SRS QA.
thumbnail: /assets/litreview-radonc-digest.png
title: "Weekly Radiation Oncology Literature Surveillance Digest:
  September 21--27, 2026"
---

# Weekly Radiation Oncology Literature Surveillance Digest: September 21--27, 2026

## Bottom Line This Week

This was a technically active but clinically quiet week. No newly
published phase III radiotherapy trial or guideline from the September
21--27 window clearly establishes a new standard of care. The 2026 ASTRO
Annual Meeting also began this weekend, but conference presentations and
abstracts were not treated as equivalent to peer-reviewed full
publications in this digest.

The most broadly useful publication is the Nature Reviews Clinical
Oncology review **Optimizing the Delivery of Radiotherapy With
Artificial Intelligence**. It is not new efficacy evidence, but it
provides a timely synthesis of where AI has actually reached clinical
radiation oncology---from contouring and geometric adaptation to dose
calculation, QA, outcome prediction, generative AI, foundation models
and agentic systems---and, more importantly, why clinical deployment
still lags technical performance. Its emphasis on implementation,
safety, governance and prospective validation makes it more valuable
than another isolated high-Dice technical paper.

The most interesting adaptive-radiotherapy study is a **patient-specific
computational framework for high-grade glioma** using longitudinal
multiparametric MRI and apparent diffusion coefficient changes to
forecast spatial treatment response. In 21 patients, the model
identified candidate intratumoral regions with predicted increases in
tumour cell density after radiotherapy. This is a sophisticated step
toward biologically guided adaptive dose painting, but the proposed
targets are computational predictions rather than prospectively treated
volumes, so the work remains hypothesis-generating.

The strongest workflow paper is **HALO**, an end-to-end automated
cervical-cancer IMRT planning framework integrating deep-learning
fluence prediction, dose-volume-constraint refinement, MLC sequencing
and GPU Monte Carlo calculation. In a 20-patient test set, plans were
generated in under three minutes, preserved target quality, reduced
selected organ-at-risk doses, and achieved a mean 2%/2 mm
patient-specific QA gamma pass rate of 97.4%. This is unusually complete
for an AI planning paper because it proceeds through deliverable
segments and physical QA. However, it remains a single-institution
retrospective validation using a fixed seven-field IMRT geometry and
requires independent prospective testing.

A small but operationally compelling head-and-neck study evaluated
**thermoplastic-maskless radiotherapy using SGRT, CBCT and automatic
beam hold**. Ten patients completed 330 fractions with small observed
intrafraction motion; three had previously declined or been unable to
tolerate mask-based treatment. This is not evidence to abandon masks
routinely, but it offers a plausible alternative for carefully selected
patients with severe mask intolerance.

For SRS physics, a **multi-institutional polymer-gel end-to-end study**
found that target geometry---particularly small lesion size and greater
distance from isocentre---was more informative for QA performance than
conventional plan-complexity metrics in single-isocentre
multiple-brain-metastasis SRS. The effect sizes were not strong enough
to define universal thresholds, but the finding reinforces the need for
geometry-aware SRS QA rather than relying on generic modulation metrics.

Overall, this was an **implementation-focused and hypothesis-generating
week rather than a practice-changing one**. The signal is strongest in
AI governance, automated planning, biologically informed adaptation and
high-precision workflow QA. None of these papers justifies autonomous
clinical deployment without human oversight.

------------------------------------------------------------------------

## Must Read

### 1. Optimizing the Delivery of Radiotherapy With Artificial Intelligence

Citation: Katsoulakis E, El Naqa I. Optimizing the delivery of
radiotherapy with artificial intelligence. Nature Reviews Clinical
Oncology. Published September 24, 2026.[^1]

Journal/source: Nature Reviews Clinical Oncology\
Publication type: Peer-reviewed review article\
One-line takeaway: A high-level review maps the transition from
predictive AI toward generative, multimodal, foundation-model and
agentic systems in radiation oncology while emphasizing that safe
clinical implementation remains the central unresolved problem.

Evidence tier: Expert peer-reviewed narrative review synthesizing
clinical and technical AI literature; not primary comparative evidence.

Importance score: 8.5/10

Key limitations:

-   This is a review rather than prospective evidence that AI improves
    patient outcomes.
-   The field is evolving rapidly enough that specific architectures and
    products may age quickly.
-   Evidence quality varies substantially across contouring, planning,
    QA and outcome-prediction applications.
-   Many cited AI systems remain retrospective, institution-specific or
    technically validated without prospective clinical endpoints.

Practical radiation oncology relevance: The value of this paper is its
framing of the implementation gap. Auto-contouring and selected
automation tools are already clinically useful, whereas generative AI,
foundation models, agentic planning systems and digital twins remain
much less mature. For clinicians and department leaders, the key
question is increasingly not whether an AI model can outperform a
benchmark, but whether it can be safely integrated, monitored, audited
and overridden in real clinical workflows.

### 2. Patient-Specific Computational Framework to Spatiotemporally Forecast Treatment Response and Identify Biologically Informed Radiotherapy Targets in High-Grade Glioma

Citation: Ty S, Kowalski J, Panthi B, Farhat M, Langshaw H, Shanker MD,
Talpur W, Thrower S, Goldman J, Custer C, Yankeelov TE, Chung C, Hormuth
DA II. Patient-Specific Computational Framework to Spatiotemporally
Forecast Treatment Response and Identify Biologically Informed
Radiotherapy Targets in High-Grade Glioma. JCO Clinical Cancer
Informatics. 2026;10:e2500336.[^2]

Journal/source: JCO Clinical Cancer Informatics\
Publication type: Peer-reviewed computational modelling and
imaging-biomarker study\
One-line takeaway: Longitudinal MRI and patient-specific tumour
modelling were used to forecast spatial response and identify candidate
biologically defined adaptive radiotherapy targets in high-grade glioma.

Evidence tier: Small retrospective computational study using
longitudinal multiparametric MRI from 21 patients; no prospective dose
adaptation.

Importance score: 8/10

Key limitations:

-   Only 21 patients were included.
-   Apparent diffusion coefficient is an indirect surrogate for tumour
    cellularity and can be influenced by treatment-related change.
-   Candidate dose-painting regions were model-derived and were not
    prospectively irradiated.
-   The study does not demonstrate improved local control,
    progression-free survival, neurocognition or overall survival.
-   Model calibration and registration uncertainty may propagate into
    spatial target predictions.

Practical radiation oncology relevance: Glioma target definition remains
predominantly anatomical despite profound intratumoral biological
heterogeneity. This framework attempts to forecast where
treatment-resistant tumour may persist using patient-specific changes in
diffusion imaging rather than static geometry. Reported sensitivity for
detecting regions with increasing predicted tumour cell density was
approximately 0.78--0.93 across modelling scenarios. The concept is
compelling for biologically guided adaptive RT, but prospective
validation of both the imaging biomarker and the resulting
dose-modulation strategy is essential before clinical use.

------------------------------------------------------------------------

## Worth Skimming

### 3. A Hybrid Deep Learning Framework for Automated Treatment Planning in Cervical Cancer Radiotherapy

Citation: Jiang H, Yuan Z, Liu Z, Wang Y, Hu W, Yan B, Yang Y. A hybrid
deep learning framework for automated treatment planning in cervical
cancer radiotherapy. Journal of Applied Clinical Medical Physics.
2026;27(10):e70806.[^3]

Journal/source: Journal of Applied Clinical Medical Physics\
Publication type: Peer-reviewed AI treatment-planning technical
validation study\
One-line takeaway: An end-to-end automated IMRT framework generated
deliverable cervical-cancer plans in under three minutes using
deep-learning fluence prediction, constraint-based refinement, MLC
sequencing and GPU Monte Carlo dose calculation.

Evidence tier: Retrospective single-institution technical validation
with patient-specific physical QA.

Importance score: 7.5/10

Key limitations:

-   Training and testing came from a single institution.
-   The independent test set contained only 20 patients.
-   All cases used a fixed seven-field IMRT arrangement and a uniform 50
    Gy in 25 fractions prescription.
-   Comparison with institutional clinical plans does not establish
    superiority to expert planning across other centres or commercial
    optimizers.
-   Prospective clinical workflow reliability, failure detection and
    human oversight were not evaluated.

Practical radiation oncology relevance: HALO is notable because it goes
beyond dose prediction: it produces fluence, refines it against
dose-volume constraints, performs MLC sequencing, calculates dose and
validates deliverability. Total planning time was under three minutes,
and the mean 2%/2 mm QA gamma pass rate was 97.37%. The architecture is
therefore closer to a complete autonomous planning pipeline than many AI
studies, but its next meaningful test should be external and prospective
rather than another retrospective dosimetric comparison.

### 4. Maskless Head and Neck Radiotherapy Using Surface-Guided Radiation Therapy: Initial Clinical Feasibility of Real-Time Setup, Intrafraction Monitoring, and Automatic Beam-Hold

Citation: Robinson A, Kandula S. Maskless head and neck radiotherapy
using surface-guided radiation therapy: initial clinical feasibility of
real-time setup, intrafraction monitoring, and automatic beam-hold.
Journal of Applied Clinical Medical Physics. 2026;27(10):e70809.[^4]

Journal/source: Journal of Applied Clinical Medical Physics\
Publication type: Peer-reviewed clinical feasibility workflow study\
One-line takeaway: Ten patients completed 330 head-and-neck radiotherapy
fractions without a thermoplastic face mask using a posterior shell,
SGRT, daily CBCT and automatic beam hold, with small observed
intrafraction motion.

Evidence tier: Small single-centre clinical feasibility series.

Importance score: 7/10

Key limitations:

-   Only 10 patients were treated.
-   There was no randomized or contemporaneous mask-based comparator.
-   Patient selection is critical and results cannot be generalized to
    patients unable to remain still or follow positioning instructions.
-   SGRT measures external surface motion and may not perfectly
    represent internal target motion.
-   Larger studies are needed to establish appropriate margins,
    patient-reported benefit and rare-failure risk.

Practical radiation oncology relevance: Thermoplastic masks remain
standard, but mask anxiety and claustrophobia can become genuine
barriers to curative treatment. Median real-time motion in this series
was approximately 0.1 mm translationally and 0.1° rotationally,
automatic beam holds occurred in 7 of 330 fractions, and no fraction was
abandoned. Most importantly, three patients who had previously declined
or could not tolerate mask treatment completed therapy. The immediate
niche is selected mask-intolerant patients, not wholesale replacement of
conventional immobilization.

### 5. Assessing the Role of Plan Complexity and Target Geometry Through Multi-Institutional Gel-Based End-to-End QA in Multi-Focal Single-Isocenter Stereotactic Radiosurgery

Citation: Stasinou D, Platoni K, Margaroni V, Zourari K, Zoros E,
Papanikolaou N, Pappas E. Assessing the role of plan complexity and
target geometry through multi-institutional gel based end-to-end QA in
multi-focal single isocenter stereotactic radiosurgery. Journal of
Applied Clinical Medical Physics. 2026;27(10):e70758.[^5]

Journal/source: Journal of Applied Clinical Medical Physics\
Publication type: Peer-reviewed multi-institutional end-to-end technical
validation study\
One-line takeaway: In single-isocentre multi-metastasis SRS, small
targets and greater off-axis distance were more closely associated with
QA performance than conventional plan-complexity metrics.

Evidence tier: Multi-institutional experimental end-to-end QA study
using 42 plans and high-resolution polymer-gel dosimetry.

Importance score: 7/10

Key limitations:

-   Only 42 plans were studied.
-   The cohort was heterogeneous across machines, TPSs, target
    geometries and institutional practices.
-   Proposed geometric thresholds had only modest discrimination, with
    AUCs around 0.60--0.65.
-   Gel dosimetry is not the routine QA method at most centres.
-   The study does not define validated universal action levels.

Practical radiation oncology relevance: As single-isocentre treatment of
multiple brain metastases becomes more common, generic complexity
metrics may miss the geometric problems most relevant to off-axis SRS.
This study found that target size and distance from isocentre mattered
more consistently than eleven modulation-complexity metrics. The
practical message is not to adopt the reported thresholds verbatim, but
to ensure commissioning and QA explicitly challenge small, far-off-axis
lesions.

------------------------------------------------------------------------

## Save for Later

### 6. SRS/SBRT Commissioning Process With a Hybrid Beam Data Model in a New Preconfigured CyberKnife System

Citation: Tamura M, Nishimura Y, Matsuura T, Inosaka Y, Sadahira Y,
Akamine A, Inoue K, Nishino S, Mizuno H, Sumida I, Noll JM. SRS/SBRT
commissioning process with a hybrid beam data model in new preconfigured
CyberKnife system. Journal of Applied Clinical Medical Physics.
2026;27(10):e70822.[^6]

Journal/source: Journal of Applied Clinical Medical Physics\
Publication type: Peer-reviewed commissioning and technical validation
study\
One-line takeaway: A vendor reference beam-data model supplemented with
targeted site-specific measurements produced clinically acceptable
SRS/SBRT commissioning results on a preconfigured CyberKnife S7.

Evidence tier: Single-system technical commissioning study with phantom
and patient-specific QA validation.

Importance score: 5.5/10

Key limitations:

-   Findings are specific to the evaluated preconfigured CyberKnife
    system and workflow.
-   Proposed validation thresholds are preliminary.
-   The study was conducted at a single commissioning site.
-   Several authors were affiliated with the manufacturer, and
    publication costs were supported by the manufacturer.
-   Multicentre validation is required before generalizing the
    measurement-reduction strategy.

Practical radiation oncology relevance: The paper is useful for centres
commissioning this specific generation of CyberKnife because small-field
beam-data acquisition is laborious and error-prone. The hybrid model
combined validated vendor data with measured output factors and selected
small-field or discrepant TPR/OCR data. Patient-specific QA achieved
greater than 95% gamma pass rates for the reported SRS/SBRT plans. Its
relevance outside CyberKnife commissioning is limited.

### 7. A Microenvironment-Adaptive Nanoadjuvant Resolves the Radioprotection and Radiosensitization Paradox in Cancer Therapy

Citation: Author list not fully verified. A Microenvironment-Adaptive
Nanoadjuvant Resolves the Radioprotection and Radiosensitization Paradox
in Cancer Therapy. ACS Nano. Published online September 21, 2026.[^7]

Journal/source: ACS Nano\
Publication type: Peer-reviewed preclinical nanomedicine and
radiobiology study\
One-line takeaway: A redox-responsive lipoic-acid nanoadjuvant was
designed to scavenge radiation-induced reactive oxygen species in normal
tissue while increasing oxidative stress and radiosensitization in
tumour models.

Evidence tier: Preclinical mechanistic and translational study.

Importance score: 5/10

Key limitations:

-   No human safety or efficacy data.
-   Nanoparticle biodistribution and tumour microenvironment behaviour
    may differ substantially in patients.
-   Differential radioprotection and radiosensitization must be
    reproduced across tumour types and normal tissues.
-   Manufacturing, pharmacokinetics, toxicity and regulatory feasibility
    remain unresolved.
-   Preclinical radiosensitizer literature has a long history of poor
    clinical translation.

Practical radiation oncology relevance: The biological concept is
attractive because normal-tissue radioprotection and tumour
radiosensitization are usually competing goals. The platform attempts to
exploit differences in redox state to produce opposite effects in tumour
and normal tissue. For now, this belongs in the
translational-radiobiology watchlist rather than the clinic.

------------------------------------------------------------------------

## Low Priority

No additional publication from the September 21--27 window was included
solely to fill this category. Radiomics papers, isolated case reports,
conference-only material and technical studies without sufficient
validation were deliberately excluded.

------------------------------------------------------------------------

## Overall Ranking Summary

### Must Read

-   1.  Optimizing the Delivery of Radiotherapy With Artificial
        Intelligence
-   2.  Patient-Specific Computational Framework to Spatiotemporally
        Forecast Treatment Response and Identify Biologically Informed
        Radiotherapy Targets in High-Grade Glioma

### Worth Skimming

-   3.  A Hybrid Deep Learning Framework for Automated Treatment
        Planning in Cervical Cancer Radiotherapy
-   4.  Maskless Head and Neck Radiotherapy Using Surface-Guided
        Radiation Therapy
-   5.  Assessing the Role of Plan Complexity and Target Geometry in
        Multi-Focal Single-Isocenter SRS

### Save for Later

-   6.  SRS/SBRT Commissioning Process With a Hybrid Beam Data Model in
        a New Preconfigured CyberKnife System
-   7.  A Microenvironment-Adaptive Nanoadjuvant Resolves the
        Radioprotection and Radiosensitization Paradox in Cancer Therapy

### Low Priority

-   No paper included solely to fill this category.

------------------------------------------------------------------------

## References

[^1]: Katsoulakis E, El Naqa I. Optimizing the delivery of radiotherapy
    with artificial intelligence. *Nature Reviews Clinical Oncology*.
    Published September 24, 2026. DOI:
    https://doi.org/10.1038/s41571-026-01204-4. PubMed:
    https://pubmed.ncbi.nlm.nih.gov/42778727/

[^2]: Ty S, Kowalski J, Panthi B, Farhat M, Langshaw H, Shanker MD,
    Talpur W, Thrower S, Goldman J, Custer C, Yankeelov TE, Chung C,
    Hormuth DA II. Patient-Specific Computational Framework to
    Spatiotemporally Forecast Treatment Response and Identify
    Biologically Informed Radiotherapy Targets in High-Grade Glioma.
    *JCO Clinical Cancer Informatics*. 2026;10:e2500336. DOI:
    https://doi.org/10.1200/CCI-25-00336. PubMed:
    https://pubmed.ncbi.nlm.nih.gov/42784780/

[^3]: Jiang H, Yuan Z, Liu Z, Wang Y, Hu W, Yan B, Yang Y. A hybrid deep
    learning framework for automated treatment planning in cervical
    cancer radiotherapy. *Journal of Applied Clinical Medical Physics*.
    2026;27(10):e70806. DOI: https://doi.org/10.1002/acm2.70806. PubMed
    indexing was not fully verified during this surveillance run.

[^4]: Robinson A, Kandula S. Maskless head and neck radiotherapy using
    surface-guided radiation therapy: initial clinical feasibility of
    real-time setup, intrafraction monitoring, and automatic beam-hold.
    *Journal of Applied Clinical Medical Physics*. 2026;27(10):e70809.
    DOI: https://doi.org/10.1002/acm2.70809. PubMed:
    https://pubmed.ncbi.nlm.nih.gov/42798136/

[^5]: Stasinou D, Platoni K, Margaroni V, Zourari K, Zoros E,
    Papanikolaou N, Pappas E. Assessing the role of plan complexity and
    target geometry through multi-institutional gel based end-to-end QA
    in multi-focal single isocenter stereotactic radiosurgery. *Journal
    of Applied Clinical Medical Physics*. 2026;27(10):e70758. DOI:
    https://doi.org/10.1002/acm2.70758. PubMed:
    https://pubmed.ncbi.nlm.nih.gov/42779376/

[^6]: Tamura M, Nishimura Y, Matsuura T, Inosaka Y, Sadahira Y, Akamine
    A, Inoue K, Nishino S, Mizuno H, Sumida I, Noll JM. SRS/SBRT
    commissioning process with a hybrid beam data model in new
    preconfigured CyberKnife system. *Journal of Applied Clinical
    Medical Physics*. 2026;27(10):e70822. DOI:
    https://doi.org/10.1002/acm2.70822. PubMed:
    https://pubmed.ncbi.nlm.nih.gov/42798152/

[^7]: A Microenvironment-Adaptive Nanoadjuvant Resolves the
    Radioprotection and Radiosensitization Paradox in Cancer Therapy.
    *ACS Nano*. Published online September 21, 2026. DOI:
    https://doi.org/10.1021/acsnano.6c13287. Complete author list and
    PubMed indexing were not fully verified during this surveillance
    run.
