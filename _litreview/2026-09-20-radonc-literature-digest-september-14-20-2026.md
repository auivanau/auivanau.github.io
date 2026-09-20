---
layout: post
title: "Weekly Radiation Oncology Literature Surveillance Digest: September 14–20, 2026"
date: 2026-09-20
permalink: "/litreview/2026/09/20/radonc-literature-digest-september-14-20-2026/"
categories: "litreview oncology radiation-oncology ai medical-physics"
thumbnail: "/assets/litreview-radonc-digest.png"
summary: "This week is led by ASTRO’s first bladder-cancer radiotherapy guideline and two major AAPM practice reports on respiratory motion management and CT-simulator QA, with additional signals in online adaptive planning, particle minibeam translation, and language-informed longitudinal segmentation."
series: radonc-weekly
---

# Weekly Radiation Oncology Literature Surveillance Digest: September 14–20, 2026

## Bottom Line This Week

The most clinically important publication this week is **ASTRO’s first dedicated clinical practice guideline for radiation therapy in bladder cancer**. The guideline explicitly recommends trimodal therapy as a curative alternative to radical cystectomy for appropriately selected cT2–4aN0M0 muscle-invasive bladder cancer, while also defining roles for postoperative radiotherapy, bladder-directed treatment in selected low-burden metastatic disease, and palliation. This is not new randomized evidence, but it is genuinely practice-relevant because it consolidates bladder-preservation radiotherapy into a formal multidisciplinary guideline and provides practical recommendations on selection, dose, target volumes, systemic radiosensitization, image guidance, and surveillance.

The most operationally important publication is **AAPM Task Group 324 report 91.b**, a major update to TG-76 on respiratory motion management. The report incorporates two decades of changes in 4D-CT, treatment planning, image guidance, gating and tracking, clinical decision pathways, and quality assurance. For lung, liver, pancreas, adrenal, and other moving targets—particularly SBRT—this is likely to become an important departmental reference rather than simply an academic review.

A second AAPM report, **TG 66U1 report 83.B**, updates CT-simulator QA for modern radiotherapy. It extends the original TG-66 framework to technologies now routine in many departments, including 4D-CT, extended HU scales, metal-artifact reduction, extended field of view, multi-energy CT, material-density calibration, and risk-based QA. It is not a glamorous paper, but it is arguably more likely to change physics policy and commissioning documents than most technical publications this month.

Adaptive radiotherapy produced a useful but less definitive signal. A narrative review comparing **Ethos and Unity/Monaco online adaptive planning architectures** provides a clear conceptual framework for how the two commercial ecosystems generate adapted plans. Its main value is educational and operational; it does not provide evidence that one platform is clinically superior.

Two emerging-technology papers are worth tracking but should not be overinterpreted. A **particle minibeam therapy roadmap** lays out engineering, dosimetry, radiobiology, QA, and trial-design requirements for clinical translation. Separately, a language-informed liver-tumour segmentation model used radiology reports to personalize longitudinal segmentation. Both are technically interesting, but neither is ready to alter routine patient care.

Overall, this was a **strong practice-infrastructure week rather than a trial-driven week**. The bladder guideline is the clearest clinical signal, while the respiratory-motion and CT-simulator reports are unusually consequential for medical physics and departmental practice. There was no new randomized radiotherapy trial in the searched window that clearly established a new standard of care, and the AI literature remained primarily technical and hypothesis-generating.

---

## Must Read

### 1. Radiation Therapy for Bladder Cancer: An ASTRO Clinical Practice Guideline

Citation: Ballas LK, Solanki AA, Baumann BC, Dirix P, Hassanzadeh C, Zaorsky NG, Apolo AB, Choudhury A, Chung PW, Holzbeierlein JM, Joshi M, Kim MM, Lee CT, Moroney W, Ritch CR, Saeed H, Upadhyay R, van der Heijden AG, Bradfield L, Helms AR, Efstathiou JA. Radiation Therapy for Bladder Cancer: An ASTRO Clinical Practice Guideline. Practical Radiation Oncology. Published online September 15, 2026.[^1]

Journal/source: Practical Radiation Oncology  
Publication type: Peer-reviewed multidisciplinary clinical practice guideline  
One-line takeaway: ASTRO formally recommends trimodal bladder-preservation therapy as a curative alternative to radical cystectomy for appropriately selected muscle-invasive bladder cancer and defines radiotherapy roles across postoperative, metastatic, and palliative settings.

Evidence tier: Evidence-based multidisciplinary guideline informed by a systematic review of literature from 2009–2024.

Importance score: 9.5/10

Key limitations:

- The guideline synthesizes existing evidence rather than providing new randomized comparative data.
- Direct randomized evidence comparing modern trimodal therapy with radical cystectomy remains limited.
- Patient selection remains critical; outcomes from experienced bladder-preservation centres may not generalize to all settings.
- Rapid evolution of systemic therapy, including antibody-drug conjugates and immunotherapy, may change multimodality sequencing faster than guideline cycles.
- Several recommendations outside definitive trimodal therapy are conditional because of limited high-level evidence.

Practical radiation oncology relevance:
This is the week's most important clinical read. For appropriately selected cT2–4aN0M0 patients, the guideline recommends maximal TURBT followed by radiotherapy with concurrent radiosensitizing systemic therapy as an alternative to cystectomy. Favorable features include a solitary tumour smaller than 7 cm, predominant urothelial histology, and absence of extensive CIS or hydronephrosis. The document also conditionally supports postoperative RT for selected pT3–4, node-positive, or margin-positive patients and clarifies when bladder-directed or metastasis-directed RT may be reasonable in advanced disease. For residents, it is also a useful framework for learning bladder target selection, fractionation, radiosensitization, image guidance, and surveillance.

### 2. AAPM Task Group 324 Report 91.b: The Management of Respiratory Motion in Radiation Oncology

Citation: Keall PJ, Santanam L, Court LE, Kashani R, Low DA, Pacheco A, Poulsen PR, Senan S, Shieh CC, Tanyi J, van Herk M, Yorke ED. AAPM task group 324 report 91.b: The management of respiratory motion in radiation oncology. Medical Physics. Published online September 18, 2026.[^2]

Journal/source: Medical Physics  
Publication type: Peer-reviewed AAPM scientific report / practice guidance  
One-line takeaway: AAPM updates TG-76 with contemporary recommendations for respiratory-motion assessment, 4D-CT, planning, image guidance, motion mitigation, clinical decision-making, and QA.

Evidence tier: Expert task-group guidance based on updated literature review and contemporary clinical practice.

Importance score: 9/10

Key limitations:

- This is consensus and technical guidance rather than comparative clinical-outcome evidence.
- Motion-management technology varies substantially among centres, and not every recommendation will apply to every platform.
- Rapid development of markerless tracking, AI-based motion estimation, and real-time adaptive delivery will continue to outpace static guidance.
- The report deliberately focuses on technologies broadly available to clinics rather than every emerging specialized system.

Practical radiation oncology relevance:
This is likely to become a standard reference for thoracic and upper-abdominal SBRT programs. It updates the 2006 TG-76 framework for an era in which 4D-CT, gantry-mounted kV imaging, respiratory-correlated planning, gating, tracking, and adaptive workflows are commonplace. The report includes terminology, clinical implementation guidance, QA recommendations, and a decision pathway for respiratory-motion management. For departments revising lung SBRT policies or residents learning why motion-management choices differ by amplitude, target, and technology, this is high-yield.

### 3. AAPM Task Group 66U1 Report 83.B: Quality Assurance for Computed-Tomography Simulators in Radiation Oncology

Citation: Cammin J, Rosu-Bubulac M, Castillo S, Miller JR, Hoppel B, Zhang H, Dang H, Das IJ, Lyu Q, Shah J, Ruchala KJ, Leng S, Prah DE, Huq MS, Li H. AAPM Task Group 66U1 report 83.B: Quality assurance for computed-tomography simulators in radiation oncology. Medical Physics. Published online September 16, 2026.[^3]

Journal/source: Medical Physics  
Publication type: Peer-reviewed AAPM scientific report / quality-assurance guidance  
One-line takeaway: The modernized CT-simulator QA framework adds guidance for 4D-CT, extended HU scales, metal-artifact reduction, extended field of view, multi-energy CT, density calibration, protocol management, and risk-based QA.

Evidence tier: Expert task-group technical guidance.

Importance score: 8.5/10

Key limitations:

- The report addresses technical quality assurance rather than clinical outcomes.
- Vendor-specific implementations may require local interpretation beyond the generic recommendations.
- Adoption may require new phantoms, measurements, documentation, and staff time.
- Technology will continue to evolve, particularly spectral CT and AI reconstruction.

Practical radiation oncology relevance:
CT simulation underpins target definition and dose calculation, so seemingly small imaging or calibration errors can propagate through the entire treatment chain. This report is especially relevant to physicists but also matters to physicians who use 4D-CT, metal-artifact reduction, extended-FOV reconstructions, or multi-energy CT. The inclusion of a risk-based analysis using lung SBRT 4D-CT is particularly relevant to high-precision practice.

---

## Worth Skimming

### 4. Automated Planning Architectures for Online Adaptive Radiotherapy: A Narrative Review of the Ethos and Unity/Monaco Platforms

Citation: Cui S, Chan MF, Zheng D. Automated planning architectures for online adaptive radiotherapy: A narrative review of the Ethos and Unity/Monaco platforms. Journal of Applied Clinical Medical Physics. 2026;27(9):e70797.[^4]

Journal/source: Journal of Applied Clinical Medical Physics  
Publication type: Peer-reviewed narrative review  
One-line takeaway: Ethos and Unity/Monaco use distinct but conceptually related mechanisms to constrain and generate online adapted plans, and their differences are better understood through optimization guidance and available degrees of freedom than simplistic platform comparisons.

Evidence tier: Narrative technical review of commercial adaptive-planning architectures and representative workflow studies.

Importance score: 7/10

Key limitations:

- Narrative rather than systematic review methodology.
- The underlying literature does not support direct claims of platform superiority.
- Clinical implementations are institution- and disease-site dependent.
- MRIdian is acknowledged but is outside the focused comparison.
- Workflow speed and dosimetric quality do not establish improved patient outcomes.

Practical radiation oncology relevance:
For anyone learning or implementing online ART, this is a useful conceptual paper. Ethos uses goal-prioritized supervisory optimization driven by a clinical directive, whereas Unity/Monaco offers ATP and ATS pathways with varying levels of recalculation, refinement, and reoptimization. Understanding these architectures helps clinicians interpret what an "adapted plan" actually means on each platform and where human review remains important.

### 5. Roadmap for the Implementation of Particle Minibeam Therapy

Citation: Ahmad R, Bassler N, Burne C, Di Martino F, Flynn S, Jolly S, Lee N, Milluzzo G, Stephan F, Subiel A, Walpen A, Palmans H, Romano F, Chaudhary P, Neubauer J, Roncali L, Schmid TE, Prezado Y, Actis O, Datzmann G, Deut U, Habgood R, Kasanda E, Li X, Rousseti A, Taylor E, Reindl J, et al. Roadmap for the implementation of particle minibeam therapy. Medical Physics. Published online September 14, 2026.[^5]

Journal/source: Medical Physics  
Publication type: Peer-reviewed review and translational roadmap  
One-line takeaway: A multidisciplinary roadmap defines the engineering, dosimetry, radiobiology, QA, and clinical-trial steps required before particle minibeam therapy can move toward routine clinical use.

Evidence tier: Expert translational roadmap; predominantly preclinical and technical evidence.

Importance score: 6.5/10

Key limitations:

- Particle minibeam therapy remains predominantly preclinical.
- Normal-tissue sparing and tumour-control advantages have not been established in randomized human studies.
- Dosimetry, beam production, spatial metrics, and biological interpretation remain incompletely standardized.
- Clinical implementation requires specialized hardware and QA infrastructure.
- The proposed pathway is a roadmap rather than evidence that routine implementation is currently justified.

Practical radiation oncology relevance:
Minibeam therapy is attracting attention after early human experience with photon minibeams, but particle minibeams remain much earlier in translation. This paper is useful because it emphasizes what must happen before enthusiasm becomes clinical practice: standardized collimation and beam characterization, reproducible dosimetry, prospective RT QA, consistent reporting, early-phase trials, and eventually comparative studies with validated endpoints. The authors view collimated proton minibeams as the most practical near-term route to translation.

---

## Save for Later

### 6. Context-Informed Personalized Segmentation From Radiology Reports: A Fully Automated Framework for Long-Term Liver Tumor Follow-Up

Citation: Chun J, Woodland M, Castelo A, O'Connor C, Altaie M, Gupta A, Ding S, Nguyen A, Koay EJ, Brock KK. Context-informed personalized segmentation from radiology reports: A fully automated framework for long-term liver tumor follow-up. Medical Physics. 2026;53:e70624.[^6]

Journal/source: Medical Physics  
Publication type: Peer-reviewed AI segmentation technical validation study  
One-line takeaway: Incorporating longitudinal radiology-report context into a personalized liver-tumour segmentation model improved consistency over image-only personalization during follow-up imaging.

Evidence tier: Retrospective single-centre model-development and validation study.

Importance score: 5.5/10

Key limitations:

- Retrospective and single-centre.
- Only 41 longitudinal patients were used for personalization and evaluation.
- Improved segmentation metrics do not establish reduced physician editing time or safer adaptive treatment.
- Radiology-report quality and terminology vary across institutions.
- The model was evaluated in follow-up imaging rather than a prospective on-couch adaptive workflow.

Practical radiation oncology relevance:
The interesting idea is not simply another segmentation architecture; it is the use of prior clinical text to tell the model how a patient's tumour has evolved over time. That may eventually matter for longitudinal adaptive workflows where anatomy alone does not capture treatment history. The study also found that a task-specific encoder-based language model could outperform larger generative models, which is a useful counterpoint to the assumption that larger LLMs are automatically better for clinical imaging tasks.

### 7. Contour-Regulated Registration Framework for Liver CT Perfusion Images

Citation: Xu Z, Zhao Y, Chen X, Lin J, Barati R, Ng CS, Yang J. Contour-regulated registration framework for Liver CT perfusion images. Medical Physics. 2026;53:e70676.[^7]

Journal/source: Medical Physics  
Publication type: Peer-reviewed technical validation study  
One-line takeaway: Automated liver segmentation was used to constrain transformer-based deformable registration and improve alignment across dynamic liver CT-perfusion imaging.

Evidence tier: Retrospective technical image-registration validation.

Importance score: 5/10

Key limitations:

- The work addresses CT-perfusion registration rather than a complete radiotherapy workflow.
- Improved registration metrics do not establish better target delineation, dose accumulation, or patient outcomes.
- Validation is institution-specific.
- Clinical robustness in patients with large anatomical changes or unusual tumour morphology remains uncertain.

Practical radiation oncology relevance:
This is most relevant to investigators working on functional imaging, biological adaptation, and response assessment. Reliable registration is a prerequisite for extracting longitudinal perfusion biomarkers or mapping them into radiotherapy planning. The framework is technically sensible, but its direct impact on current clinical RT is limited.

---

## Low Priority

No additional publication from the September 14–20 window was included solely to fill this category. Several radiomics, image-processing, and preclinical studies were screened but did not provide enough clinical relevance, external validation, or workflow impact to justify inclusion.

---

## Overall Ranking Summary

### Must Read

- 1. Radiation Therapy for Bladder Cancer: An ASTRO Clinical Practice Guideline
- 2. AAPM Task Group 324 Report 91.b: The Management of Respiratory Motion in Radiation Oncology
- 3. AAPM Task Group 66U1 Report 83.B: Quality Assurance for Computed-Tomography Simulators in Radiation Oncology

### Worth Skimming

- 4. Automated Planning Architectures for Online Adaptive Radiotherapy: A Narrative Review of the Ethos and Unity/Monaco Platforms
- 5. Roadmap for the Implementation of Particle Minibeam Therapy

### Save for Later

- 6. Context-Informed Personalized Segmentation From Radiology Reports: A Fully Automated Framework for Long-Term Liver Tumor Follow-Up
- 7. Contour-Regulated Registration Framework for Liver CT Perfusion Images

### Low Priority

- No paper included solely to fill this category.

---

## References

[^1]: Ballas LK, Solanki AA, Baumann BC, Dirix P, Hassanzadeh C, Zaorsky NG, Apolo AB, Choudhury A, Chung PW, Holzbeierlein JM, Joshi M, Kim MM, Lee CT, Moroney W, Ritch CR, Saeed H, Upadhyay R, van der Heijden AG, Bradfield L, Helms AR, Efstathiou JA. Radiation Therapy for Bladder Cancer: An ASTRO Clinical Practice Guideline. *Practical Radiation Oncology*. Published online September 15, 2026. DOI: https://doi.org/10.1016/j.prro.2026.09.001. PubMed: https://pubmed.ncbi.nlm.nih.gov/42744092/

[^2]: Keall PJ, Santanam L, Court LE, Kashani R, Low DA, Pacheco A, Poulsen PR, Senan S, Shieh CC, Tanyi J, van Herk M, Yorke ED. AAPM task group 324 report 91.b: The management of respiratory motion in radiation oncology. *Medical Physics*. Published online September 18, 2026. DOI: https://doi.org/10.1002/mp.70677. PubMed indexing was not fully verified during this surveillance run.

[^3]: Cammin J, Rosu-Bubulac M, Castillo S, Miller JR, Hoppel B, Zhang H, Dang H, Das IJ, Lyu Q, Shah J, Ruchala KJ, Leng S, Prah DE, Huq MS, Li H. AAPM Task Group 66U1 report 83.B: Quality assurance for computed-tomography simulators in radiation oncology. *Medical Physics*. Published online September 16, 2026. DOI: https://doi.org/10.1002/mp.70659. PubMed indexing was not fully verified during this surveillance run.

[^4]: Cui S, Chan MF, Zheng D. Automated planning architectures for online adaptive radiotherapy: A narrative review of the Ethos and Unity/Monaco platforms. *Journal of Applied Clinical Medical Physics*. 2026;27(9):e70797. Published online September 14–15, 2026. PubMed: https://pubmed.ncbi.nlm.nih.gov/42740468/. DOI was not independently verified during this surveillance run.

[^5]: Ahmad R, Bassler N, Burne C, Di Martino F, Flynn S, Jolly S, Lee N, Milluzzo G, Stephan F, Subiel A, Walpen A, Palmans H, Romano F, Chaudhary P, Neubauer J, Roncali L, Schmid TE, Prezado Y, Actis O, Datzmann G, Deut U, Habgood R, Kasanda E, Li X, Rousseti A, Taylor E, Reindl J, et al. Roadmap for the implementation of particle minibeam therapy. *Medical Physics*. Published online September 14, 2026. DOI: https://doi.org/10.1002/mp.70660. PubMed indexing was not fully verified during this surveillance run.

[^6]: Chun J, Woodland M, Castelo A, O'Connor C, Altaie M, Gupta A, Ding S, Nguyen A, Koay EJ, Brock KK. Context-informed personalized segmentation from radiology reports: A fully automated framework for long-term liver tumor follow-up. *Medical Physics*. 2026;53:e70624. Published online September 15, 2026. DOI: https://doi.org/10.1002/mp.70624. PubMed indexing was not fully verified during this surveillance run.

[^7]: Xu Z, Zhao Y, Chen X, Lin J, Barati R, Ng CS, Yang J. Contour-regulated registration framework for Liver CT perfusion images. *Medical Physics*. 2026;53:e70676. Published online September 15, 2026. DOI: https://doi.org/10.1002/mp.70676. PubMed indexing was not fully verified during this surveillance run.
