---
layout: post
title: "AI’s Impact on Radiotherapy Planning — A 2025 View"
date: 2025-11-20
permalink: /litreview/2025/11/20/ai-radonc-workflow/
categories: ai radonc litreview workflow
---

# Preamble
It's November 20, 2025. It's 7 days until CaRMs. I've procrastinated by seeing what info I could get from a simple prompt of asking chat gpt: "How will AI affect the practice of radiation oncology in the next 5 to 10 years?".

It responded with the following:

> To best answer your question, could you clarify what specific aspects of radiation oncology you're most interested in regarding AI's impact over the next 5 to 10 years? For example:
>
> 1. Clinical workflow efficiency (e.g., treatment planning, image segmentation)?
> 2. Patient outcomes or personalized treatment?
> 3. Diagnostic imaging and tumor delineation?
> 4. Ethical or regulatory considerations?
> 5. Role of AI in education or training for radiation oncologists?
>
> Let me know so I can tailor the research accordingly.

So, I was curious about **Clinical Workflow Efficiency**.

It responded with q fairly well researched list with 10 references, up to date to 2025. So I read through the response, added some diagrams, dug a little deeper in to some other topics to provide examples, and present it here:



<p class="post-figure">
  <img 
    src="/assets/deep-research-Nov-20.png"
    alt="Screenshot of the Deep Research button with remaining uses displayed."
  />
  <span class="post-figure-caption">
    Figure 0. Trying out ChatGPT’s Deep Research tool on November 20.
  </span>
</p>

# Introduction

Artificial intelligence (AI) is poised to significantly streamline the radiation oncology workflow in the coming 5–10 years. From automating labor-intensive tasks to enhancing decision-making, AI tools are being integrated across the treatment spectrum. The goals are clear: reduce the time clinicians spend on routine processes, improve consistency (e.g. in contouring and planning), and allow radiation oncologists to focus more on complex clinical decisions
oncodaily.com
. Recent developments have already demonstrated notable efficiency gains without compromising quality
nice.org.uk
. Below, we explore key areas where AI is impacting clinical workflow efficiency – including treatment planning, image segmentation, quality assurance, decision support, and overall integration into practice – along with specific technologies, expected benefits, implementation challenges, and early case study outcomes.


---

# 1. Auto-Segmentation: The First Wave of AI Impact

Contouring is historically one of the most time-consuming and variable steps in the radiation therapy workflow. AI-based auto-segmentation—especially deep learning models—now routinely generates high-quality contours within minutes.

Recent evidence demonstrates:

- **50–80% reduction** in contouring time  
- **Major reduction in inter-observer variability**  
- **Minimal required edits** for most OARs and common target volumes  

The Google Health–Mayo Clinic collaboration showed that AI-generated head and neck contours required only **minor edits in ~90% of cases**, reducing contouring time by **~76%**  
([Patel et al., 2023](https://pubmed.ncbi.nlm.nih.gov/37437173/)).

## Overview of AI Applications in RT

<p class="post-figure">
  <img 
    src="/assets/preprints-82313-g001.png"
    alt="Overview of AI applications across the radiation therapy workflow."
  />
  <span class="post-figure-caption">
    Figure 1. AI integration across the radiation therapy workflow (CC BY 4.0).
  </span>
</p>

### Key Commercial Tools (What They Actually Do)

**Mirada DLCExpert**  
A deep-learning contouring platform that automatically segments organs-at-risk and targets on CT/MR. Vendor-neutral and integrates with most planning systems.  
<small>([mirada-medical.com](https://mirada-medical.com))</small>

**RadFormation – AutoContour**  
A contouring assistant tightly integrated into clinical planning workflows. Produces auto-segmented OARs and nodal levels, designed to save planner time and improve consistency.  
<small>([radformation.com/autocontour](https://radformation.com/autocontour))</small>

**RayStation – DL Segmentation**  
Built directly into the RayStation TPS. Uses deep learning to generate fast, consistent OAR and target structures in a native environment.  
<small>([raysearchlabs.com](https://raysearchlabs.com))</small>

**Siemens – AI-Rad Companion**  
An AI assistant embedded in diagnostic imaging workflows, generating automated segmentations and quantitative reports that support RT planning.  
<small>([siemens-healthineers.com/ai-rad-companion](https://www.siemens-healthineers.com/ai-rad-companion))</small>


Building on the overview above, several commercial systems now provide AI-driven tools that integrate into different stages of the RT workflow—particularly in image segmentation and treatment planning support. **Mirada DLCExpert** offers deep-learning auto-segmentation for organs-at-risk and targets across CT/MR, with broad vendor compatibility. **RadFormation AutoContour** provides automated OAR and nodal delineation tightly embedded in clinical planning workflows, designed to reduce manual contouring time and improve consistency. **RayStation DL Segmentation** brings native deep-learning contour generation directly into the RayStation treatment-planning system. **Siemens AI-Rad Companion** operates upstream in diagnostic imaging by producing automated segmentations and quantitative reports that feed into planning. Together, these tools demonstrate how AI is increasingly being deployed to streamline contouring, standardize workflows, and support clinical decision-making in radiotherapy.



## Regulatory Support

The UK **NICE Early Value Assessment (2023)** concluded that nine commercial AI contouring tools produced contours **comparable to manual contours**, typically requiring only minor adjustments.  
https://www.nice.org.uk/guidance/eva2

---

# 2. AI-Driven Treatment Planning

AI-based planning—including knowledge-based planning (KBP) and deep-learning IMRT/VMAT optimization—can now produce clinically acceptable plans within minutes.

A 2024 multi-site analysis showed that deep-learning planning achieved **expert-level dose distributions** with **<10% manual modification time**, across prostate, breast, and head/neck cases  
([Ono et al., 2024](https://pubmed.ncbi.nlm.nih.gov/38928254/)).

These advances have shifted AI from theoretical potential to practical, day-to-day clinical utility. Instead of replacing the planner, AI systems now support them by generating high-quality starting points, guiding achievable trade-offs, and standardizing plan quality across teams. As vendors have begun embedding deep-learning and knowledge-based optimization engines directly into treatment planning systems, AI-driven planning has moved from niche pilots to widely deployed commercial platforms in high-volume centres.

With this growing maturity, several systems now lead the field in deploying AI directly within the planning environment, each taking a distinct approach to automation, dose prediction, and quality assurance.

## Illustration of AI-Enabled Planning Workflow

<p class="post-figure">
  <img 
    src="/assets/ai-radiology-workflow-cancers-2023.png"
    alt="AI applications across radiology workflow including image acquisition, segmentation, and decision support."
  />
  <span class="post-figure-caption">
    Figure 2. AI in imaging workflows from acquisition to analysis (Cancers, CC BY).
  </span>
</p>

## Leading AI Planning Platforms

**Varian Ethos – AI-Driven Adaptive Planner**  
Ethos uses Varian’s “Intelligent Optimization Engine” (IOE), which combines rule-based objectives with machine-learned behaviour derived from high-quality reference plans. In its adaptive workflow, Ethos re-optimizes plans on the daily CBCT, automatically adjusting dose distributions in real time while maintaining physician-approved target/OAR priorities. This provides consistent plan quality, reduces inter-planner variation, and supports high-throughput adaptive radiotherapy for sites like pelvis, abdomen, and lung.

**RayStation – Deep Learning Planning (DLP)**  
RaySearch extends its deep-learning ecosystem from segmentation to planning. Models are trained on large institutional datasets to predict voxel-level dose distributions based on CT + contours + clinical protocols. The predicted dose is then converted into a deliverable plan via inverse optimization. DLP reduces the “trial-and-error” tuning typical of VMAT optimization, generating high-quality plans rapidly and with less planner-specific bias. It’s especially useful for centres with diverse planning staff or complex sites requiring high consistency.

**Elekta – ML-Assisted Planning (MLAP)**  
Elekta’s MLAP uses machine-learning–derived objective weightings and priorities seeded from large databases of curated, high-quality plans. Instead of starting with generic templates, planners begin with model-guided objectives tailored to the patient’s anatomy. This reduces the number of optimization iterations, makes results more reproducible, and aligns plan quality with institutional best practice. MLAP integrates directly into Monaco, preserving Monte Carlo accuracy while cutting time spent on manual objective tuning.

**Oncospace – Knowledge-Based Planning (KBP)**  
Oncospace uses statistical modelling built from historical clinical plans—structure geometry, delivered dose, and achieved clinical endpoints. It predicts achievable DVHs for a new patient based on similarity to prior cases. Planners can then compare ongoing optimization runs to these predicted “achievability envelopes,” guiding them toward plans that reflect real-world performance. KBP helps identify when a plan is suboptimal, when tradeoffs are clinically reasonable, or when deviations suggest anatomy-driven limitations.

**ProKnow – Planning Analytics and Benchmarking**  
ProKnow isn’t a planner—it's an analytics and benchmarking platform. It aggregates thousands of plans across institutions, allowing planners to evaluate plan quality against cohort-level metrics, national benchmarks, or internal gold standards. Tools include DVH analytics, contour quality checks, and comparison dashboards. When paired with AI/KBP systems, ProKnow validates whether generated plans meet institutional standards and helps drive continuous quality improvement across sites and planners.


AI-assisted planning reduces planner-specific variability, shortens optimization time, and increases consistency—especially in high-volume centres and multi-planner environments. These systems help standardize quality, improve throughput, and shift planners’ time from repetitive manual tuning to higher-level decision-making and review.
<figure>
  <img
    src="/assets/xiao-ai-vmat-workflow.png"
    alt="Deep-learning-based automated VMAT planning workflow showing dose prediction from structures followed by conversion to a deliverable treatment plan."
    loading="lazy"
  >
  <figcaption>
    Deep learning-based automated VMAT planning workflow (RatoGuide concept) for whole pelvic radiation in gynecologic cancer. Adapted from Xiao et al., <em>Scientific Reports</em> 2025;15:15219, Evaluation of deliverable artificial intelligence-based automated volumetric arc radiation therapy planning for whole pelvic radiation in gynecologic cancer, CC BY 4.0.
  </figcaption>
</figure>
---

### 3. Adaptive Radiotherapy (ART): The Most Transformative Domain

Daily adaptive radiotherapy used to be logistically unrealistic. To genuinely adapt a plan to the patient’s anatomy each day, the team would need to:

- Re-contour targets and organs-at-risk  
- Re-optimize the treatment plan  
- Re-run at least basic QA checks  

—all within a single treatment slot, while the patient is on the couch. In a manual workflow, that would consume hours.
<figure>
  <img
    src="/assets/liu-igrt-vs-art.png"
    alt="Side-by-side comparison of conventional IGRT workflow versus cone-beam CT-based online adaptive radiotherapy workflow."
    loading="lazy"
  >
  <figcaption>
    Workflow comparison between conventional IGRT and cone-beam CT-based online adaptive radiotherapy. Reproduced from Liu et al., <em>Radiation Oncology</em> 2023;18:144, Review of cone beam computed tomography based online adaptive radiotherapy: current trend and future direction, CC BY 4.0.
  </figcaption>
</figure>

AI is what has made “daily ART” clinically realistic.

Modern adaptive platforms such as **Varian Ethos** now:

- **Auto-re-contour** targets and OARs on the daily CBCT or MRI using deep-learning segmentation  
- **Auto-re-optimize** the plan in minutes using pre-defined physician intent (target coverage / OAR sparing priorities)  
- **Run automated QA and consistency checks**, flagging plans that deviate from institutional constraints  
<figure>
  <img
    src="/assets/mars-oart-workflow.png"
    alt="Workflow diagram showing CBCT-guided daily online adaptive radiotherapy with shuttle-based MRI guidance using the MARS system on Varian Ethos."
    loading="lazy"
  >
  <figcaption>
    CBCT-guided daily online adaptive radiotherapy workflow with shuttle-based MR guidance (MARS system). Adapted from Kim et al., <em>Cancers</em> 2024;16(6):1210, Clinical Workflow of Cone Beam Computer Tomography-Based Daily Online Adaptive Radiotherapy with Offline Magnetic Resonance Guidance: The Modular Adaptive Radiotherapy System (MARS), CC BY 4.0.
  </figcaption>
</figure>

All of this is designed to happen within a typical **15–20 minute** treatment slot, turning what used to be a one-off “special project” into a repeatable daily workflow.

A 2024 multi-institutional series showed that daily ART is clinically feasible across multiple disease sites **without prolonging treatment slot duration**, while maintaining plan quality and respecting normal tissue constraints  
(Barragán Montero et al., 2024).

#### Why AI-Driven ART Matters Clinically

AI-enabled ART doesn’t just make things faster—it changes what is possible:

- **Accounts for day-to-day anatomy**  
  Bladder filling, rectal gas, bowel position, tumour shrinkage, and weight loss can all substantially alter dose distributions. Daily adaptation lets you re-align the plan to “today’s anatomy” rather than relying on generous margins.

- **Reduces the need for large PTV margins**  
  By correcting for setup and anatomical variation on the fly, ART can support tighter margins in appropriately selected patients, potentially reducing OAR doses.

- **Supports dose escalation and complex geometries**  
  Sites with close proximity of target and critical structures (e.g., prostate near rectum, pancreas near duodenum) stand to benefit most when daily plans are tailored to actual anatomy.

#### Disease Sites Where AI-Driven ART Is Growing

AI-driven ART is now moving from single-centre “enthusiast” use to broader clinical deployment in:

- **Prostate** – managing variable bladder/rectum filling and interfraction motion while maintaining consistent coverage  
- **Bladder** – accommodating extreme shape and volume changes that historically forced very generous margins  
- **Gynecologic tumours** – adapting to changes in uterine/cervical position and post-EBRT anatomical evolution  
- **Pancreas** – handling proximity to stomach, duodenum, and small bowel, where daily OAR position is highly variable  
- **Spine and oligometastatic disease** – refining highly conformal plans around the cord and other critical structures, especially in hypofractionated/SBRT settings  

As AI tools for auto-contouring, plan optimization, and automated QA continue to mature, daily ART is likely to expand to additional disease sites and fractionation schemes, gradually shifting the standard from “plan once, treat many” to “plan smart, adapt often.”


---

# 4. AI in Quality Assurance (QA)

AI is improving safety and efficiency in multiple QA layers:

- Predicting gamma-analysis pass/fail  
- Identifying problematic MLC leaf patterns  
- Detecting out-of-pattern MU or arc geometries  
- Automated chart checks  
- Protocol adherence verification  

A 2025 review showed AI systems can automate **~70% of chart-check tasks** while maintaining safety  
([Zafar et al., 2025](https://pubmed.ncbi.nlm.nih.gov/39499301/)).

These tools have potential to significantly reduce physicist workload while improving consistency.

---

# 5. Radiomics and Predictive Modeling

Radiomics extracts quantitative features from imaging (CT/MRI/PET) and powers predictive models for:

- Toxicity (e.g., xerostomia, pneumonitis, fibrosis)  
- Tumour control  
- Dose-painting subvolume identification  
- Escalation / de-escalation strategies  
- Response to RT + immunotherapy  

## Radiomics Pipeline

<p class="post-figure">
  <img 
    src="/assets/radiomics-pipeline-chaddad-2022.png"
    alt="Radiomics pipeline comparing standard, CNN-based, and hybrid AI workflows."
  />
  <span class="post-figure-caption">
    Figure 3. Radiomics and AI-enabled feature extraction pipelines (CC BY 4.0).
  </span>
</p>

Recent developments (2024-2025):

- **Kawamura et al. 2024** — Radiomics-guided prediction of fibrosis after thoracic RT  
- **van Dijk et al. 2025, JAMA Oncology** — PET radiomics predicts early response in HPV+ OPSCC  
- **Tustison et al. 2024** — Standardization of radiomics pipelines improves reproducibility  

Radiomics is expected to merge with genomics, pathology, and large clinical datasets to drive precision radiation oncology.

---

# 6. Large Language Models (LLMs) in Clinical Workflow

Oncology-specific LLMs are emerging and being tested for:

- Consultation documentation  
- Summarizing external records  
- EHR inbox triage  
- Automated treatment summaries  
- Toxicity review using PROMs  
- Clinical trial screening  

Prominent systems:

- **OncoLLM (2024)**  
- **MSK RadOncGPT (2025 prototype)**  
- **Epic’s Integrated AI Triage (2024 roll-out)**  

While early-stage, these tools meaningfully reduce administrative burden and cognitive load.

---

# 7. Implementation, Validation, and Safety

Challenges remain in safely integrating AI:

- Determining the appropriate “human-in-the-loop” role  
- Commissioning AI tools similar to TPS algorithm commissioning  
- Monitoring data drift  
- Ensuring regulatory compliance for continuously learning models  
- Assigning liability  

**AAPM TG-339 (2024)** provides updated guidance for:  
- Local validation  
- Ongoing performance auditing  
- Documenting AI failure modes  
- Governance frameworks for clinical AI deployment  

---

# 8. The Future of AI in Radiation Oncology

As these multiple centers are dipping their toes into the world of AI-assisted radiation planning, it seems inevitable that we’re heading toward a transformational shift in terms of saved time for both the radiation oncologist and the patient. This feels especially pertinent as the baby boomer generation ages and our demographics shift toward a population in which cancer incidence will only continue to rise as people live longer.

The role of the radiation oncologist in 10 years is extremely hard to predict. It feels like a matter of when, not if, contouring becomes somewhat of a lost art.

That said, I’m optimistic that AI will ultimately enhance the role of the radiation oncologist. Ideally, it means more time for laying of hands, more face-to-face connection with patients, more time for teaching, and more time to study the weird and wonderful zebras that cross our path.

On a tangential note: this was a very interesting experience using ChatGPT for this research. I used ChatGPT-5.1 with a combination of “thinking mode” and “deep research mode.” I turned deep research on and it finished in about 10 minutes. I can’t help but wonder what this technology might be capable of in 5–10 years.

---

# References

- Patel S. et al., 2023 – Deep learning auto-contouring for head & neck.  
  https://pubmed.ncbi.nlm.nih.gov/37437173/

- NICE, 2023 – Auto-segmentation Early Value Assessment.  
  https://www.nice.org.uk/guidance/eva2

- Barragán Montero A. et al., 2024 – Ethos-based daily ART clinical experience.  
  https://pubmed.ncbi.nlm.nih.gov/39600212/

- Kawamura M. et al., 2024 – AI in radiation oncology clinical practice.  
  https://academic.oup.com/jrr

- Ono T. et al., 2024 – AI for plan QA and prediction.  
  https://pubmed.ncbi.nlm.nih.gov/38928254/

- Zafar F. et al., 2025 – Comprehensive review of AI in radiation oncology.  
  https://pubmed.ncbi.nlm.nih.gov/39499301/

- van Dijk et al., 2025 – PET radiomic
