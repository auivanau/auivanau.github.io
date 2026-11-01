---
layout: post
title: "Weekly Radiation Oncology Literature Surveillance Digest: October 26–November 1, 2026"
date: 2026-11-01
permalink: "/litreview/2026/11/01/radonc-literature-digest-october-26-november-1-2026/"
categories: "litreview oncology radiation-oncology ai medical-physics"
thumbnail: "/assets/litreview-radonc-digest.png"
summary: "KEYNOTE-867 shows no benefit and greater harm from pembrolizumab added to early-stage lung SBRT; updated ASTRO prostate hypofractionation guidance, cervical image-guided brachytherapy workflows, and an agentic-planning safety benchmark lead the week's other findings."
series: radonc-weekly
---

# Weekly Radiation Oncology Literature Surveillance Digest: October 26–November 1, 2026

## Bottom Line This Week

This is an unusually consequential week for clinical radiation oncology, driven by two publications that should influence treatment discussions immediately: the **negative phase III KEYNOTE-867 trial** in early-stage non-small cell lung cancer (NSCLC) and the **updated ASTRO guideline on prostate hypofractionation**. The other notable studies are primarily implementation-focused, observational, or hypothesis-generating. The surveillance window is **October 26–November 1, 2026**, using first online publication dates rather than later journal issue assignments or press-release dates.

KEYNOTE-867 is the most important new efficacy-and-safety result. In 448 randomized patients with unresected stage I–II NSCLC, adding approximately one year of pembrolizumab to SBRT did **not** improve event-free survival (median 31.2 versus 28.3 months; HR 0.92, 95% CI 0.69–1.24; P=0.2932). Grade 3–5 treatment-related adverse events rose from **3.7% to 20.4%**, and **all five treatment-related deaths** occurred in the pembrolizumab group. The study was stopped early on benefit–risk grounds. This is practice-informing negative evidence: do not extrapolate the benefit of immunotherapy in other NSCLC settings to routine pembrolizumab plus curative-intent SBRT for this population.

The updated ASTRO prostate guideline is the most directly practice-changing guidance document. It recommends **moderate hypofractionation over conventional fractionation across localized prostate cancer risk groups**, endorses ultrahypofractionation/SBRT as a standard option for low- and intermediate-risk patients choosing EBRT, and conditionally supports it in selected high- or very-high-risk patients. Significant baseline urinary symptoms may favor moderate rather than ultrahypofractionation. This is an evidence synthesis rather than a new trial, but it is immediately useful for counselling, protocol standardization, and access planning.

The most operationally relevant peer-reviewed study is an international, 14-centre assessment of **cervical image-guided brachytherapy (IGBT) workflows**. Advanced intracavitary/interstitial 3D procedures took a median **4 hours 16 minutes**, versus **2 hours 35 minutes** for standard intracavitary 3D IGBT and **2 hours 8 minutes** for conventional 2D brachytherapy. The study quantifies the staffing, imaging, anaesthesia, and throughput consequences of implementing a clinically important technique rather than assuming technology adoption is purely a capital-equipment problem.

The most useful AI safety signal is the **OpenGray preprint**: even planning agents with high aggregate decision accuracy failed to escalate some provably incompatible constraints, and some submitted plans missed hard goals despite a known feasible solution. Its contribution is a testable safety benchmark and an argument for explicit **stop-and-escalate** actions, not evidence that agentic AI is ready for clinical deployment.

**Overall assessment: high clinical importance, moderate technical importance.** KEYNOTE-867 should change how the proposed immunotherapy–SBRT combination is discussed, while the ASTRO guideline consolidates shorter-course prostate RT as standard care. Brachytherapy workflow findings can guide implementation; AI benchmarking, solitary-plasmacytoma intensification, and sustainability modelling are not practice-changing efficacy evidence. A press release on RT CHARM appeared October 28, but the underlying randomized manuscript was first published October 12 and is therefore not counted again in this week's ranked papers.

---

## Must Read

### 1. KEYNOTE-867: A Phase III, Randomized, Double-Blind Study of Stereotactic Body Radiotherapy With Pembrolizumab for Unresected Stage I or II Non–Small Cell Lung Cancer

Citation: Jabbour SK, Sótér S, Eaton M, Gálffy G, Kowalski D, Hata A, Valdivia A, et al. KEYNOTE-867: A Phase III, Randomized, Double-Blind Study of Stereotactic Body Radiotherapy With Pembrolizumab for Unresected Stage I or II Non–Small Cell Lung Cancer. *Journal of Clinical Oncology*. Published online October 28, 2026.[^1]

Journal/source: Journal of Clinical Oncology  
Publication type: Peer-reviewed, international, randomized, double-blind, placebo-controlled phase III trial  
One-line takeaway: Pembrolizumab added to definitive SBRT for unresected stage I–II NSCLC did not improve event-free survival and substantially increased serious treatment-related toxicity, including five treatment-related deaths.

Evidence tier: High-level randomized comparative evidence; prespecified interim analysis, with premature study termination and limited follow-up for mature survival conclusions.

Importance score: 9.5/10

Key limitations:

- Median follow-up at the first interim analysis was approximately 20.6 months, limiting interpretation of longer-term survival and late toxicity.
- The trial was stopped early, and a negative average effect does not exclude benefit in an as-yet-unvalidated biologically selected subgroup.
- Results apply to the studied population and pembrolizumab schedule; they do not establish that every immunotherapy–SBRT strategy is ineffective.
- The overall-survival estimate (HR 1.33; 95% CI 0.93–1.90) is imprecise and should not be interpreted as definitive proof of increased mortality from the regimen.

Practical radiation oncology relevance:
For medically inoperable early-stage NSCLC, SBRT alone remains an established curative local therapy. KEYNOTE-867 randomized 227 patients to pembrolizumab and 221 to placebo alongside SBRT, with systemic treatment scheduled every three weeks for up to 17 cycles. Median event-free survival was 31.2 versus 28.3 months (HR 0.92; P=0.2932). Among treated patients, grade 3–5 treatment-related adverse events occurred in 46/226 (20.4%) versus 8/218 (3.7%); all five treatment-related deaths were in the pembrolizumab arm. This is an important counterweight to assuming that immunotherapy improves outcomes whenever combined with ablative radiation. Outside an appropriate trial or another established indication, the results argue against routine addition of pembrolizumab to SBRT for this population.

### 2. Hypofractionated Radiation Therapy for Localized Prostate Cancer: An ASTRO Clinical Practice Guideline

Citation: Morgan SC, Halthore A, Jia AY, Kishan AU, Loblaw A, Shen X, Tree A, et al. Hypofractionated Radiation Therapy for Localized Prostate Cancer: An ASTRO Clinical Practice Guideline. *Practical Radiation Oncology*. Published online October 27, 2026.[^2]

Journal/source: Practical Radiation Oncology  
Publication type: Peer-reviewed, multidisciplinary, evidence-based clinical practice guideline  
One-line takeaway: ASTRO recommends moderate hypofractionation over conventional fractionation across localized prostate cancer risk groups and expands ultrahypofractionation/SBRT as a standard option for appropriately selected patients.

Evidence tier: High-quality systematic evidence review and graded multidisciplinary guideline recommendations, supported by mature randomized comparisons for moderate hypofractionation; lower certainty for selected higher-risk ultrahypofractionation decisions.

Importance score: 9.5/10

Key limitations:

- A guideline synthesizes existing studies rather than reporting a new randomized comparison.
- Evidence supporting ultrahypofractionation is less mature for high- and very-high-risk disease than for low- and intermediate-risk disease.
- Trial populations and technical standards vary; dose schedules, target volumes, motion management, and pelvic nodal treatment must be implemented with appropriate QA.
- Baseline urinary dysfunction and patient preferences can meaningfully change the preferred fractionation approach.

Practical radiation oncology relevance:
The guideline replaces ASTRO's 2018 hypofractionation recommendations. Moderate hypofractionation is preferred over conventional fractionation across localized risk groups, including when prostate/seminal vesicle EBRT is used; decisions about androgen deprivation should be made independently of fractionation. Five-fraction ultrahypofractionation is an accepted option for low-risk patients declining surveillance and for intermediate-risk disease, with conditional use in selected higher-risk cases. It also addresses image guidance, intrafraction tracking, pelvic nodal irradiation, rectal spacers, and patients with substantial lower urinary tract symptoms. Departments should compare existing prostate protocols and counselling materials against the complete recommendations rather than adopting a blanket five-fraction policy.

---

## Worth Skimming

### 3. Implementing Image-Guided Brachytherapy (IGBT) for Cervical Cancer in Resource-Limited Settings: An International Multicentric Cross-Sectional Study of Resource and Workflow Impact

Citation: Hande V, Ndarukwa S, Polo Rubio A, Berger D, Anacak Y, Sucharski M, Flores JAS, et al. Implementing Image-Guided Brachytherapy (IGBT) for Cervical Cancer in Resource-Limited Settings: An International Multicentric Cross-Sectional Study of Resource and Workflow Impact. *International Journal of Radiation Oncology, Biology, Physics*. Published online October 30, 2026.[^3]

Journal/source: International Journal of Radiation Oncology, Biology, Physics  
Publication type: Peer-reviewed, international multicentre cross-sectional workflow and implementation study  
One-line takeaway: Across 14 centres and 365 observed workflows, advanced 3D cervical brachytherapy required substantially more procedure time than conventional 2D or standard intracavitary 3D approaches, identifying concrete capacity bottlenecks.

Evidence tier: Multicentre observational operational evidence; descriptive rather than randomized or patient-outcome comparative evidence.

Importance score: 8/10

Key limitations:

- Cross-sectional observational workflows are vulnerable to centre-level confounding and case-mix differences.
- Longer procedures do not imply worse value; advanced intracavitary/interstitial techniques may be required for adequate target coverage.
- No direct comparison of tumour control, toxicity, or cost-effectiveness was established by the workflow analysis.
- Local anaesthesia, imaging access, planning infrastructure, and workforce conditions may limit transferability of specific time savings.

Practical radiation oncology relevance:
The investigators compared conventional 2D point-A workflows, standard intracavitary 3D IGBT, and advanced 3D intracavitary/interstitial approaches. Median procedure times were 2 h 08 min, 2 h 35 min, and 4 h 16 min, respectively. Sedation rather than general anaesthesia was associated with a median 35-minute shorter workflow, although selection effects are likely. For teams expanding MRI/CT-guided cervical brachytherapy—or building interstitial training capacity—the key lesson is to design anaesthesia, imaging, applicator placement, contouring, planning, and staffing as an integrated pathway. This study measures implementation burden; it does not argue for choosing inferior brachytherapy merely because it is faster.

### 4. OpenGray: A Benchmark for Evaluating the Decisions of Radiotherapy Planning Agents

Citation: Nusrat H, Thind K. OpenGray: a benchmark for evaluating the decisions of radiotherapy planning agents. *arXiv*. Preprint posted October 27, 2026; arXiv:2610.37081v1.[^4]

Journal/source: arXiv (cs.AI; physics.med-ph)  
Publication type: Non-peer-reviewed technical AI benchmark preprint  
One-line takeaway: High aggregate decision accuracy concealed unsafe failure modes in radiotherapy planning agents, including missed hard constraints and failure to escalate mathematically incompatible goals.

Evidence tier: Early technical benchmark evidence using 30 head-and-neck cases and supplementary logs from 39 SRS agent runs; no prospective clinical validation.

Importance score: 7.5/10

Key limitations:

- Preprint; methods and conclusions have not yet undergone journal peer review.
- Benchmark tasks are constructed to test specific contradictions and may not reflect the full distribution of clinical planning decisions.
- Only a small number of agents, models, and cases were evaluated.
- The benchmark does not measure real-world patient safety, treatment quality, or deployment reliability.

Practical radiation oncology relevance:
This paper asks a better safety question than whether an agent's dose distribution looks acceptable: can it recognize when a constraint is impossible, stop optimizing, and request human review? In the tested configurations, overall decision accuracy exceeded 90%, yet one full agent escalated only 25% of anatomy-overlap contradictions, and 24% of submitted feasible-control plans missed a hard goal that a stored plan had achieved. In four prior SRS runs, the agent recognized an unmet constraint but lacked an explicit stop action. For any department evaluating agentic planning, this is a useful proposal for adversarial acceptance testing, explicit hard-stop logic, and auditable escalation. It is not a reason to deploy an autonomous planner.

### 5. Long-Term Outcomes of Lenalidomide-Dexamethasone in Combination With Radiotherapy in Solitary Plasmacytoma

Citation: Loap P, Laroze S, Bouscary D, Vignon M, Kirova Y. Long-Term Outcomes of Lenalidomide-Dexamethasone in Combination With Radiotherapy in Solitary Plasmacytoma. *International Journal of Radiation Oncology, Biology, Physics*. Published online October 30, 2026.[^5]

Journal/source: International Journal of Radiation Oncology, Biology, Physics  
Publication type: Peer-reviewed, single-institution retrospective clinical cohort study  
One-line takeaway: Adding lenalidomide-dexamethasone to radiotherapy was associated with better progression-free survival in solitary plasmacytoma, but selection bias and a nonsignificant multiple-myeloma-free survival result prevent practice-changing conclusions.

Evidence tier: Retrospective, nonrandomized 75-patient cohort from a prospectively maintained database; hypothesis-generating comparative effectiveness evidence.

Importance score: 6.5/10

Key limitations:

- Treatment assignment was nonrandomized (33 combination treatment versus 42 radiotherapy alone), allowing confounding by patient selection and era.
- The cohort spans 2004–2025, during which staging with PET/CT and systemic treatment approaches evolved.
- Multiple-myeloma-free survival was not statistically significantly different, despite an association with overall progression-free survival.
- The sample was small and the observed number of local recurrences was only three.

Practical radiation oncology relevance:
Radiotherapy generally provides excellent local control for solitary plasmacytoma, but systemic progression remains a concern. With median follow-up of 6.31 years, combination treatment was associated with longer PFS (HR 0.315; 95% CI 0.128–0.775; P=0.012), with reported 10-year PFS of 71.8% versus 26.7%. However, 10-year multiple-myeloma-free survival was 86.6% versus 65.9% (P=0.19). This is useful when discussing multidisciplinary research priorities with hematology, but not sufficient evidence to routinely add systemic therapy to definitive RT for all patients with solitary plasmacytoma.

---

## Save for Later

### 6. Global Greenhouse Gas Emissions From External Beam Radiotherapy: A Population-Based Study

Citation: Zhu H, Meattini I, Zhang L, Levy A, Cao M, Stanway S, Meng F, Rivin de Campo E, Chua KLM, Zhang Z, Abdel-Wahab M. Global greenhouse gas emissions from external beam radiotherapy: a population-based study. *International Journal of Radiation Oncology, Biology, Physics*. Published online October 30, 2026.[^6]

Journal/source: International Journal of Radiation Oncology, Biology, Physics  
Publication type: Peer-reviewed population-level scenario modelling and health-systems study  
One-line takeaway: Clinically appropriate hypofractionation could materially reduce projected radiotherapy-associated greenhouse gas emissions while global RT capacity expands.

Evidence tier: International model-based scenario analysis across 181 countries; projections, not directly measured effects of a clinical intervention.

Importance score: 5.5/10

Key limitations:

- Projections are sensitive to assumptions about utilization, treatment fractions, electricity mix, travel, and future technology.
- Uniform five- or fifteen-fraction scenarios are not clinically appropriate for every cancer and should not be interpreted as prescriptive.
- Environmental benefit does not establish equivalence of cancer outcomes or toxicity for a specific regimen.
- Country-level averages obscure within-country infrastructure and access inequities.

Practical radiation oncology relevance:
The authors estimated emissions under different RT access and fractionation scenarios through 2050. Under a 50% utilization benchmark, modelled 2050 emissions were 67.94 MtCO2e with 25 fractions, 40.76 MtCO2e with 15 fractions, and 13.59 MtCO2e with five fractions. The model suggests that appropriately shorter treatment courses may yield system-level environmental benefits alongside reduced patient travel and machine demand. The defensible policy is to use evidence-supported hypofractionation—not to compress regimens without clinical justification.

---

## Low Priority

### 7. Role of Artificial Intelligence in Radiation Oncology: A Missed Opportunity for LMICs?

Citation: Siddiqui H, Aliyeva T, Khan AMH, Khan L, Jangda AQ, Mansha A, Tsang DS. Role of Artificial Intelligence in Radiation Oncology: A Missed Opportunity for LMICs? *International Journal of Radiation Oncology, Biology, Physics*. Published online October 26, 2026.[^7]

Journal/source: International Journal of Radiation Oncology, Biology, Physics  
Publication type: Peer-reviewed narrative perspective on AI access and implementation; not an original comparative clinical validation study  
One-line takeaway: AI-assisted contouring and planning could help low- and middle-income radiotherapy services, but locally validated evidence and practical implementation capacity remain major gaps.

Evidence tier: Narrative and conceptual synthesis; no prospective clinical outcomes or formal comparative implementation trial reported.

Importance score: 4.5/10

Key limitations:

- Much of the apparent benefit is extrapolated from higher-income settings.
- There is no new prospective evidence of improved treatment outcomes, safety, or sustainable capacity expansion.
- Hardware, software licensing, connectivity, staffing, QA, and governance barriers differ substantially between health systems.
- The title's framing should not be mistaken for evidence that a particular AI platform is ready for adoption.

Practical radiation oncology relevance:
The paper is relevant to global-health and implementation research, particularly for centres with severe planning or contouring workforce constraints. Its most useful message is that AI tools must be validated in the target clinical and resource setting rather than imported on the basis of high-income-country performance alone. For a practising radiation oncologist seeking immediate protocol or workflow changes, the incremental evidence is limited.

---

## Overall Ranking Summary

### Must Read

- 1. KEYNOTE-867: Pembrolizumab Added to SBRT for Unresected Stage I–II NSCLC — 9.5/10; negative randomized efficacy and major safety signal.
- 2. ASTRO Guideline on Hypofractionated Radiation Therapy for Localized Prostate Cancer — 9.5/10; immediately applicable practice guidance.

### Worth Skimming

- 3. Cervical IGBT Resource and Workflow Impact Across 14 Centres — 8/10; practical brachytherapy implementation evidence.
- 4. OpenGray: Decision-Safety Benchmark for Radiotherapy Planning Agents — 7.5/10; valuable preprint, not deployment evidence.
- 5. Lenalidomide-Dexamethasone With RT in Solitary Plasmacytoma — 6.5/10; promising but nonrandomized.

### Save for Later

- 6. Global Greenhouse Gas Emissions From External Beam Radiotherapy — 5.5/10; useful for departmental and health-system planning.

### Low Priority

- 7. Role of AI in Radiation Oncology: A Missed Opportunity for LMICs? — 4.5/10; relevant perspective, little new clinical evidence.

---

## References

[^1]: Jabbour SK, Sótér S, Eaton M, Gálffy G, Kowalski D, Hata A, Valdivia A, et al. KEYNOTE-867: A Phase III, Randomized, Double-Blind Study of Stereotactic Body Radiotherapy With Pembrolizumab for Unresected Stage I or II Non–Small Cell Lung Cancer. *Journal of Clinical Oncology*. Published online October 28, 2026. DOI: https://doi.org/10.1200/JCO-26-00404. Journal full text: https://ascopubs.org/doi/10.1200/JCO-26-00404. PubMed record/PMID could not be independently verified during this run.

[^2]: Morgan SC, Halthore A, Jia AY, Kishan AU, Loblaw A, Shen X, Tree A, et al. Hypofractionated Radiation Therapy for Localized Prostate Cancer: An ASTRO Clinical Practice Guideline. *Practical Radiation Oncology*. Published online October 27, 2026. DOI: https://doi.org/10.1016/j.prro.2026.09.017. PubMed: https://pubmed.ncbi.nlm.nih.gov/42946126/. Guideline organization page: https://www.astro.org/provider-resources/guidelines/clinical-practice-guidelines/hypofractionated-rt-for-localized-prostate-gl.

[^3]: Hande V, Ndarukwa S, Polo Rubio A, Berger D, Anacak Y, Sucharski M, Flores JAS, et al. Implementing Image-Guided Brachytherapy (IGBT) for Cervical Cancer in Resource-Limited Settings: An International Multicentric Cross-Sectional Study of Resource and Workflow Impact. *International Journal of Radiation Oncology, Biology, Physics*. Published online October 30, 2026. DOI: https://doi.org/10.1016/j.ijrobp.2026.10.028. PubMed: https://pubmed.ncbi.nlm.nih.gov/42962975/. PMID and DOI were corroborated from indexed bibliographic summaries; direct PubMed page retrieval was unavailable.

[^4]: Nusrat H, Thind K. OpenGray: a benchmark for evaluating the decisions of radiotherapy planning agents. *arXiv*. Posted October 27, 2026; arXiv:2610.37081v1. Preprint: https://arxiv.org/abs/2610.37081. arXiv DOI: https://doi.org/10.48550/arXiv.2610.37081 (registration noted as pending on arXiv at time of review). Not peer reviewed; no PubMed record expected.

[^5]: Loap P, Laroze S, Bouscary D, Vignon M, Kirova Y. Long-Term Outcomes of Lenalidomide-Dexamethasone in Combination With Radiotherapy in Solitary Plasmacytoma. *International Journal of Radiation Oncology, Biology, Physics*. Published online October 30, 2026. PubMed: https://pubmed.ncbi.nlm.nih.gov/42962973/. The article's DOI could not be independently verified during this run; do not substitute a similarly titled 2020 paper or a 2026 meeting abstract.

[^6]: Zhu H, Meattini I, Zhang L, Levy A, Cao M, Stanway S, Meng F, Rivin de Campo E, Chua KLM, Zhang Z, Abdel-Wahab M. Global greenhouse gas emissions from external beam radiotherapy: a population-based study. *International Journal of Radiation Oncology, Biology, Physics*. Published online October 30, 2026. DOI: https://doi.org/10.1016/j.ijrobp.2026.10.029. PubMed: https://pubmed.ncbi.nlm.nih.gov/42962976/.

[^7]: Siddiqui H, Aliyeva T, Khan AMH, Khan L, Jangda AQ, Mansha A, Tsang DS. Role of Artificial Intelligence in Radiation Oncology: A Missed Opportunity for LMICs? *International Journal of Radiation Oncology, Biology, Physics*. Published online October 26, 2026. DOI: https://doi.org/10.1016/j.ijrobp.2026.10.022. PubMed record/PMID could not be independently verified during this run.
