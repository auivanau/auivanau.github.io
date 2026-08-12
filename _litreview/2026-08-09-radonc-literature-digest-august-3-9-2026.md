---
layout: post
title: "Weekly Radiation Oncology Literature Surveillance Digest: August 3–9, 2026"
date: 2026-08-09
permalink: "/litreview/2026/08/09/radonc-literature-digest-august-3-9-2026/"
categories: "litreview oncology radiation-oncology ai medical-physics"
thumbnail: "/assets/litreview-radonc-digest.png"
summary: "This week’s digest highlights the negative phase III GOLD trial of ultra-hypofractionated chemoradiation for glioblastoma, prospective HyperSight CBCT dose-calculation data for head and neck adaptive radiotherapy, simulation-free adaptive workflows for urgent treatment, prostate spacer stability during SBRT, and emerging generative-AI applications in medical physics."
series: radonc-weekly
---

# Weekly Radiation Oncology Literature Surveillance Digest: August 3–9, 2026

## Bottom Line This Week

The most clinically meaningful paper this week is the phase III **GOLD trial** in newly diagnosed glioblastoma. A dramatically abbreviated chemoradiation schedule of 6 × 6 Gy over 2 weeks did **not** preserve outcomes relative to conventional 60 Gy in 30 fractions with temozolomide; the ultra-hypofractionated arm had inferior overall survival. This is useful negative evidence: treatment convenience and lower resource use are not enough to justify replacing the standard 6-week chemoradiation regimen in fit adults with newly diagnosed glioblastoma.

The most operationally relevant physics paper is the prospective evaluation of **HyperSight CBCT for direct dose calculation in head and neck adaptive radiotherapy**. This moves the field beyond phantom benchmarking toward patient-level evidence that modern CBCT can support quantitative dose calculation, including in the difficult setting of dental metal artifacts. It is not yet proof that CBCT-only adaptation improves clinical outcomes, but it directly addresses a major technical barrier to efficient adaptive workflows.

The most interesting workflow paper is the first clinical implementation report of **online simulation-free CBCT-based adaptive radiotherapy (OSCAR)** for urgent and palliative indications. Treatment could be initiated in roughly 2 hours without a dedicated planning CT, with an adaptive fraction taking roughly 20 minutes. The cohort is only 11 patients, so this is an implementation proof-of-concept rather than evidence of better symptom control or survival, but it has obvious operational relevance.

AI papers this week remain mostly technical or conceptual. A diffusion model for CBCT-to-CT synthesis improved image-quality metrics, and a broad Medical Physics review summarizes foundation-model and LLM opportunities, but neither should be mistaken for prospective clinical validation. The prostate spacer study is reassuring that hydrogel geometry remains largely stable across a 5-fraction SBRT course.

Overall, this was a **moderately important week**. The GOLD trial provides the clearest practice-relevant signal, while most other papers are implementation-focused advances in CBCT-based adaptive radiotherapy. Nothing else is immediately practice-changing, but the adaptive-imaging papers are closer to real clinical deployment than many prior proof-of-concept AI studies.

---

## Must Read

### 1. Ultra-Hypofractionated Versus Conventional Chemoradiation for Newly Diagnosed Glioblastoma

Citation: de Jong AM, van der Boog ATJ, Wester G, Eekers DBP, Budiharto TCG, Rozema T, et al. Ultra-hypofractionated versus conventional chemoradiation for newly diagnosed glioblastoma: survival and toxicity results of a multicenter randomized trial. Radiotherapy and Oncology. Published online August 8, 2026.[^1]

Journal/source: Radiotherapy and Oncology  
Publication type: Peer-reviewed multicentre randomized phase III non-inferiority trial  
One-line takeaway: Ultra-hypofractionated chemoradiation with 6 × 6 Gy over 2 weeks resulted in inferior overall survival and should not replace standard 60 Gy in 30 fractions with temozolomide in fit adults with newly diagnosed glioblastoma.

Evidence tier: High-level randomized phase III evidence.

Importance score: 9/10

Key limitations:

- Applicability depends on the trial’s eligibility criteria, including performance status and suitability for standard chemoradiation.
- The result does not answer whether shorter regimens remain appropriate for elderly, frail, or poor-performance-status patients already treated with established hypofractionated schedules.
- Molecular subgroup analyses, including MGMT status, require careful interpretation before extrapolating differential effects.
- Ultra-hypofractionation in this trial should not be conflated with established 40 Gy in 15 fractions or other evidence-based regimens used in older adults.

Practical radiation oncology relevance:
This is the clearest practice-facing publication of the week. The appeal of compressing glioblastoma chemoradiation from 6 weeks to 2 weeks is substantial for patients and departments, but the randomized evidence argues against doing so with this 6 × 6 Gy regimen in otherwise fit adults. It reinforces the principle that logistical efficiency cannot substitute for oncologic equivalence.

### 2. HyperSight CBCT Dose Calculation Accuracy for Adaptive Head and Neck Radiotherapy

Citation: Yashayaeva A, MacDonald RL, Zhan K, DeGiobbi J, McMaster N, McAloney D, Ward L, Anderson C, LeBlanc M, Best L, Rajaraman M, Wilke D, Cherpak A. HyperSight CBCT dose calculation accuracy for adaptive head and neck radiotherapy: results from a prospective clinical trial. Medical Physics. 2026;53(8):e70632.[^2]

Journal/source: Medical Physics  
Publication type: Peer-reviewed prospective clinical technical validation study  
One-line takeaway: Next-generation HyperSight CBCT provided clinically useful direct-dose-calculation accuracy for head and neck adaptive radiotherapy, including evaluation of metal-artifact reduction in patients with dental hardware.

Evidence tier: Prospective patient-level technical validation; stronger than phantom-only evidence but without clinical outcome endpoints.

Importance score: 8/10

Key limitations:

- Dosimetric agreement does not prove improved tumour control, toxicity, or adaptive-treatment outcomes.
- Results are platform-specific and may not generalize to other CBCT systems or reconstruction algorithms.
- Head and neck anatomy and dental artifacts remain challenging, and image review remains necessary.
- Direct dose calculation still requires commissioning, QA, workflow integration, and site-specific clinical acceptance criteria.

Practical radiation oncology relevance:
Accurate quantitative CBCT is one of the enabling technologies for adaptive radiotherapy. If dose can be calculated reliably on the on-board image, repeat CT simulation and deformable transfer become less necessary. This study therefore addresses a practical bottleneck in online and offline adaptation and is particularly relevant to physicists and departments evaluating HyperSight-based workflows.

---

## Worth Skimming

### 3. Online Simulation-Free CBCT-Based Adaptive Radiotherapy for Palliative and Urgent Treatment

Citation: Schindhelm R, Richter A, Kleine P, Tamihardja J, Lewitzki V, Polat B, Zimmermann M, Mantel F, Fischer T, Heß S, Lawrenz I, Künzig F, Schilling F, Wittig-Sauerwein A, Razinskas G. Initial experience of clinical implementation of an Online Simulation-free CBCT-based Adaptive Radiotherapy (OSCAR) workflow for palliative and urgent treatment indications. Journal of Applied Clinical Medical Physics. 2026;27(8):e70727.[^3]

Journal/source: Journal of Applied Clinical Medical Physics  
Publication type: Peer-reviewed clinical workflow and implementation study  
One-line takeaway: A CBCT-only adaptive workflow allowed urgent or palliative radiotherapy to begin in approximately 1 hour 50 minutes without a dedicated planning CT.

Evidence tier: Initial single-centre clinical implementation cohort of 11 patients.

Importance score: 7.5/10

Key limitations:

- Only 11 patients were treated in the initial cohort.
- Indications and anatomical sites were heterogeneous.
- The study evaluates feasibility, timing, and dosimetric acceptability rather than symptom response, toxicity, or patient outcomes.
- The workflow depends on specific Ethos and HyperSight infrastructure and may not translate directly to other departments.

Practical radiation oncology relevance:
This is a genuinely interesting workflow innovation. For painful metastases, obstruction, bleeding, or other urgent indications, removing the simulation-to-planning delay could meaningfully reduce time to treatment. The next important questions are failure rates, staffing requirements, throughput, patient selection, and whether faster initiation improves patient-centred outcomes.

### 4. Interfractional Monitoring of Spacer Hydrogel Morphology During Prostate SBRT

Citation: Koduri S, Barbee D, Oh C, Sherman T, Zelefsky MJ. Interfractional Monitoring of Spacer Hydrogel Morphology in Patients With Prostate Cancer Receiving SBRT Treatment. Practical Radiation Oncology. Published online August 7, 2026.[^4]

Journal/source: Practical Radiation Oncology  
Publication type: Peer-reviewed retrospective imaging and technical validation study  
One-line takeaway: In 198 patients receiving MR-guided 5-fraction prostate SBRT, rectoprostatic hydrogel geometry was largely stable through treatment with no meaningful evidence of resorption.

Evidence tier: Large single-institution longitudinal imaging study.

Importance score: 6.5/10

Key limitations:

- The study primarily evaluates spacer morphology rather than rectal toxicity or clinically meaningful dosimetric outcomes.
- Patients were treated on an MR-Linac, which may limit generalizability to other workflows.
- Automated segmentation and radiomic shape metrics can detect statistically significant changes that may not be clinically important.
- Results may not apply to substantially longer intervals between spacer placement, simulation, and treatment.

Practical radiation oncology relevance:
Prostate SBRT planning generally assumes the spacer remains stable during the short treatment course. These data are reassuring: although measured volume and some shape metrics changed slightly, there was no meaningful evidence of rapid gel degradation over five fractions. Routine replanning solely because of anticipated spacer resorption therefore appears difficult to justify.

### 5. Equivariant Conditional Diffusion Model for Head and Neck CT Synthesis From CBCT

Citation: Altalib A, Li C, Perelli A. Equivariant conditional diffusion model for head and neck CT image synthesis from CBCT. Medical Physics. 2026;53(8):e70617.[^5]

Journal/source: Medical Physics  
Publication type: Peer-reviewed AI technical validation study  
One-line takeaway: An equivariant conditional diffusion model improved CBCT-to-CT synthesis metrics on SynthRAD2025 head and neck data compared with CycleGAN and conventional diffusion baselines.

Evidence tier: Technical model-development and validation study using a multicentre benchmark dataset; no prospective clinical deployment.

Importance score: 6/10

Key limitations:

- Better PSNR, structural similarity, and HU accuracy do not prove safe adaptive dose calculation.
- The study does not demonstrate prospective treatment-planning or patient-outcome benefit.
- Generative models can create anatomically plausible but incorrect information.
- Performance in head and neck data does not establish generalization to thorax, abdomen, or changing tumour anatomy.

Practical radiation oncology relevance:
CBCT-to-synthetic-CT generation remains a major research avenue for adaptive radiotherapy. The model architecture is technically interesting, but this paper should be viewed as a benchmarking advance rather than clinical validation. Dose-based evaluation, failure-mode analysis, and prospective deployment matter more than incremental image-quality gains.

---

## Save for Later

### 6. Generative AI, Foundation Models and Large Language Models in Radiation Therapy Physics

Citation: Qi XS, Wang Y, Yang X, Ren L, Liu W, Benedict SH, Xiao Y, Xing L, El Naqa IM. Generative AI, foundation models and large language models in radiation therapy physics: clinical applications, challenges, and future directions. Medical Physics. 2026;53(8):e70616.[^6]

Journal/source: Medical Physics  
Publication type: Peer-reviewed scoping review  
One-line takeaway: A broad review maps potential uses of generative AI and foundation models across imaging, workflow automation, decision support, clinical trials, and medical physics while emphasizing hallucination, privacy, reproducibility, and regulatory risk.

Evidence tier: Expert scoping review; conceptual rather than clinical effectiveness evidence.

Importance score: 5.5/10

Key limitations:

- The literature is moving faster than conventional review cycles.
- Most cited applications remain retrospective, technical, or proof-of-concept.
- No prospective evidence shows that foundation models improve radiotherapy outcomes.
- General-purpose model performance can degrade substantially on local clinical data and workflows.

Practical radiation oncology relevance:
This is a useful orientation paper for departments deciding where generative AI may realistically add value. The most plausible near-term applications are documentation, knowledge retrieval, scripting assistance, data extraction, and supervised workflow support—not autonomous contouring, prescription, or treatment approval.

---

## Low Priority

### 7. The Cost of a Word: Radiation Therapy vs Radiotherapy and Public Treatment Preferences

Citation: Wawrzuta D, Ludwikowska K, Klejdysz J, Pędziwiatr K, Chojnacka M. The Cost of a Word: Radiation Therapy vs Radiotherapy and Public Treatment Preferences. International Journal of Radiation Oncology, Biology, Physics. Published online August 4, 2026.[^7]

Journal/source: International Journal of Radiation Oncology, Biology, Physics  
Publication type: Peer-reviewed preregistered randomized survey experiment  
One-line takeaway: In 1,531 US adults, the term “radiation therapy” led to lower treatment preference and greater anticipated anxiety than the term “radiotherapy” in an otherwise identical cancer-treatment vignette.

Evidence tier: Randomized survey experiment; strong for framing effects but indirect for real clinical decision-making.

Importance score: 5/10

Key limitations:

- Participants were members of the general public rather than patients facing a real treatment decision.
- A hypothetical vignette cannot reproduce actual consent discussions, physician communication, or disease-specific tradeoffs.
- Terminology preferences may vary by country, language, education, and prior familiarity with cancer treatment.
- The finding does not imply that clinicians should obscure the use of ionizing radiation.

Practical radiation oncology relevance:
This is more communication science than treatment evidence, but it is a useful reminder that language affects perception. Departments may want to test how they introduce radiotherapy during consultation and in patient-facing materials while maintaining transparency about what treatment actually involves.

---

## Overall Ranking Summary

### Must Read

- 1. Ultra-Hypofractionated Versus Conventional Chemoradiation for Newly Diagnosed Glioblastoma
- 2. HyperSight CBCT Dose Calculation Accuracy for Adaptive Head and Neck Radiotherapy

### Worth Skimming

- 3. Online Simulation-Free CBCT-Based Adaptive Radiotherapy for Palliative and Urgent Treatment
- 4. Interfractional Monitoring of Spacer Hydrogel Morphology During Prostate SBRT
- 5. Equivariant Conditional Diffusion Model for Head and Neck CT Synthesis From CBCT

### Save for Later

- 6. Generative AI, Foundation Models and Large Language Models in Radiation Therapy Physics

### Low Priority

- 7. The Cost of a Word: Radiation Therapy vs Radiotherapy and Public Treatment Preferences

---

## References

[^1]: de Jong AM, van der Boog ATJ, Wester G, Eekers DBP, Budiharto TCG, Rozema T, et al. Ultra-hypofractionated versus conventional chemoradiation for newly diagnosed glioblastoma: survival and toxicity results of a multicenter randomized trial. *Radiotherapy and Oncology*. Published online August 8, 2026. DOI: https://doi.org/10.1016/j.radonc.2026.111726. Journal record: https://www.sciencedirect.com/science/article/pii/S0167814026005657. The complete final author list was not fully verified from the accessible journal index during this surveillance run.

[^2]: Yashayaeva A, MacDonald RL, Zhan K, DeGiobbi J, McMaster N, McAloney D, Ward L, Anderson C, LeBlanc M, Best L, Rajaraman M, Wilke D, Cherpak A. HyperSight CBCT dose calculation accuracy for adaptive head and neck radiotherapy: results from a prospective clinical trial. *Medical Physics*. 2026;53(8):e70632. DOI: https://doi.org/10.1002/mp.70632. PubMed link was not fully verified during this surveillance run.

[^3]: Schindhelm R, Richter A, Kleine P, Tamihardja J, Lewitzki V, Polat B, Zimmermann M, Mantel F, Fischer T, Heß S, Lawrenz I, Künzig F, Schilling F, Wittig-Sauerwein A, Razinskas G. Initial experience of clinical implementation of an Online Simulation-free CBCT-based Adaptive Radiotherapy (OSCAR) workflow for palliative and urgent treatment indications. *Journal of Applied Clinical Medical Physics*. 2026;27(8):e70727. DOI: https://doi.org/10.1002/acm2.70727. PubMed: https://pubmed.ncbi.nlm.nih.gov/42547907/

[^4]: Koduri S, Barbee D, Oh C, Sherman T, Zelefsky MJ. Interfractional Monitoring of Spacer Hydrogel Morphology in Patients With Prostate Cancer Receiving SBRT Treatment. *Practical Radiation Oncology*. Published online August 7, 2026. DOI: https://doi.org/10.1016/j.prro.2026.05.015. PubMed: https://pubmed.ncbi.nlm.nih.gov/42565768/

[^5]: Altalib A, Li C, Perelli A. Equivariant conditional diffusion model for head and neck CT image synthesis from CBCT. *Medical Physics*. 2026;53(8):e70617. DOI: https://doi.org/10.1002/mp.70617. PubMed: https://pubmed.ncbi.nlm.nih.gov/42547903/

[^6]: Qi XS, Wang Y, Yang X, Ren L, Liu W, Benedict SH, Xiao Y, Xing L, El Naqa IM. Generative AI, foundation models and large language models in radiation therapy physics: clinical applications, challenges, and future directions. *Medical Physics*. 2026;53(8):e70616. DOI: https://doi.org/10.1002/mp.70616. PubMed link was not fully verified during this surveillance run.

[^7]: Wawrzuta D, Ludwikowska K, Klejdysz J, Pędziwiatr K, Chojnacka M. The Cost of a Word: Radiation Therapy vs Radiotherapy and Public Treatment Preferences. *International Journal of Radiation Oncology, Biology, Physics*. Published online August 4, 2026. DOI: https://doi.org/10.1016/j.ijrobp.2026.07.041. PubMed: https://pubmed.ncbi.nlm.nih.gov/42551567/
