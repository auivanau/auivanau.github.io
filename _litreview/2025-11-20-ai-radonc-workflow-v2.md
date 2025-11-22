---
layout: post
title: "How Artificial Intelligence Will Transform Clinical Workflow Efficiency in Radiation Oncology Over the Next Decade (Enhanced Edition)"
date: 2025-11-20
categories: ai radonc litreview workflow
---

As of November 20, 2025, I’ve been exploring how artificial intelligence is shaping radiation oncology—ironically, by using AI itself to help synthesize the rapidly evolving literature. It’s a bit meta: I even clicked the new “Deep Research” button to do it, and as the screenshot below shows, I now apparently have only 24 left to spend.

<p class="post-figure">
  <img 
    src="/assets/deep-research-Nov-20.png"
    alt="Screenshot of the Deep Research button with remaining uses displayed."
  />
  <span class="post-figure-caption">
    Figure 0. Trying out ChatGPT’s Deep Research tool on November 20.
  </span>
</p>

The same technology transforming our field is also transforming how we learn about it. Radiation oncology, with its imaging-driven and protocolized workflows, is uniquely positioned to capture the gains AI offers. Right now, AI is already reshaping contouring, planning, adaptive radiotherapy, quality assurance, and clinical decision support. The state of the art today makes it clear that AI isn’t replacing clinicians—it’s giving us more room to focus on complex decisions, adaptive strategies, and the human side of cancer care.


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

## Key Commercial Tools

- Mirada DLCExpert — https://mirada-medical.com  
- RadFormation AutoContour — https://radformation.com/autocontour  
- RayStation DL Segmentation — https://raysearchlabs.com  
- Siemens AI-Rad Companion — https://www.siemens-healthineers.com/ai-rad-companion

## Regulatory Support

The UK **NICE Early Value Assessment (2023)** concluded that nine commercial AI contouring tools produced contours **comparable to manual contours**, typically requiring only minor adjustments.  
https://www.nice.org.uk/guidance/eva2

---

# 2. AI-Driven Treatment Planning

AI-based planning—including knowledge-based planning (KBP) and deep-learning IMRT/VMAT optimization—can now produce clinically acceptable plans within minutes.

A 2024 multi-site analysis showed that deep-learning planning achieved **expert-level dose distributions** with **<10% manual modification time**, across prostate, breast, and head/neck cases  
([Ono et al., 2024](https://pubmed.ncbi.nlm.nih.gov/38928254/)).

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

- Varian Ethos AI planner  
- RayStation deep learning planning  
- Elekta ML-assisted planning  
- Oncospace KBP  
- ProKnow planning analytics

AI planning reduces planner-specific variability and accelerates planning in high-volume centres.

---

# 3. Adaptive Radiotherapy (ART): The Most Transformative Domain

Daily adaptive radiotherapy used to be logistically unrealistic due to the need for re-contouring, re-planning, and QA on the same day. AI now makes this feasible.

Platforms such as **Varian Ethos** perform:

- Automated re-contouring  
- Automated re-optimization  
- Automated QA consistency checks  

All during a **15–20 minute** daily treatment slot.

A 2024 multi-institutional series demonstrated that daily ART is **clinically feasible across multiple disease sites** without increasing treatment slot duration  
([Barragán Montero et al., 2024](https://pubmed.ncbi.nlm.nih.gov/39600212/)).

AI-driven ART is expanding to:

- Prostate  
- Bladder  
- Gynecologic tumours  
- Pancreas  
- Spine and oligometastatic disease  

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

# 8. The Future of AI in Radiation Oncology (5-10 Years)

AI will become deeply embedded in all stages of the workflow:

**Simulation → Contouring → Planning → Adaptive → QA → Documentation → Survivorship**

Expected shifts:

- Auto-contouring becomes standard for most OARs  
- Most initial plans auto-generated with minor human edits  
- Daily ART becomes routine across multiple sites  
- Predictive QA is widespread  
- Radiomics-based models assist in tumour boards and planning discussions  
- LLMs assist with documentation, triage, and report generation  

## Clinicians Are Not Replaced—They Are Augmented

AI elevates the role of the radiation oncologist:

- More time for complex decision-making  
- More focus on goals-of-care conversations  
- Oversight of adaptive workflows  
- Leadership in multidisciplinary care  
- Emphasis on personalized oncology strategies  

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
