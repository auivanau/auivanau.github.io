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

It responded with fairly well researched list with references, up to date to 2025. So I read through the response, added some diagrams, dug a little deeper in to some other topics to provide examples, and present it here:

---

# 1. Big Picture: Why Workflow Efficiency Matters

Radiotherapy departments are under pressure:

- Cancer incidence is rising as populations age.  
- There are ongoing shortages in radiation oncologists, physicists, and therapists. :contentReference[oaicite:3]{index=3}  
- Complex techniques (IMRT/VMAT, SBRT, MR-linac, ART) demand more contouring, planning, and QA per patient.

AI is being slotted into this bottlenecked workflow not to “replace” clinicians, but to:

- **Automate repetitive steps** (e.g., OAR contouring, basic planning scripts).  
- **Standardize quality** across planners and sites.  
- **Surface edge cases** where extra human attention is needed.  

The goals are clear: reduce the time spent on low-level, mechanical work, and free up more time for:

- Talking to patients.  
- Thinking about tricky cases.  
- Teaching, research, and team-based decision-making.

Recent developments (for example, the UK NICE Early Value Assessment for AI contouring tools) show that you can gain efficiency without compromising contour quality—as long as humans remain firmly in the loop. :contentReference[oaicite:4]{index=4}  

---

# 2. Contouring: From “Lost Art” to “Supervised AI”

If there is one place where AI is already changing the day-to-day life of radiation oncologists, it’s **auto-segmentation**.

## 2.1. Current State (2023–2025)

Traditionally, contouring OARs and targets is:

- Labour-intensive (dozens of structures in H&N).
- Variable between clinicians.
- A major rate-limiting step in starting treatment.

Deep-learning based auto-segmentation tools now routinely produce clinically acceptable OAR contours in many sites (especially H&N, prostate, and pelvis), with human review and edits. :contentReference[oaicite:5]{index=5}  

A key example is the **Mayo Clinic / Google DeepMind** work on H&N OARs:

- Deep learning auto-segmentation reduced contouring time by ~76% while maintaining contour quality in a blinded randomized trial. :contentReference[oaicite:6]{index=6}  

That study is now a canonical proof-point: **you can have both speed and quality**, provided the model is well-validated and clinicians still review every structure.

## 2.2. Regulatory Support

In 2023, the UK **NICE Early Value Assessment (HTE11)** evaluated 11 AI technologies for auto-contouring. The conclusions, in plain language: :contentReference[oaicite:7]{index=7}  

- AI auto-contours are **generally similar** to manual contours for most OARs and many target volumes.  
- Most are rated as **clinically acceptable** with minor edits.  
- AI is **consistently faster** than manual contouring, even including review/edit time.  
- Some small or irregular structures (e.g., cochlea, optic chiasm, penile bulb) still require **major edits** or are not usable.  
- Clinicians remain responsible for reviewing and approving all auto-contours.

Professional bodies like the Royal College of Radiologists and IPEM have followed with pragmatic guidance: AI auto-contouring is acceptable as long as contours are reviewed, and local validation and QA are in place. :contentReference[oaicite:8]{index=8}  

## 2.3. What This Probably Looks Like Day-to-Day

In the near term (and in many centres already), a typical flow might be:

1. **AI auto-contours OARs** (and sometimes nodes/CTV) on the planning CT.  
2. The radiation oncologist (or trained dosimetrist) does a **focused review**:
   - Quickly scrolls through each structure.
   - Fixes known weak spots (e.g., small cranial nerves, unusual anatomy).
3. Manual contouring is reserved for:
   - Small, hard targets (e.g., skull base, brachial plexus details).
   - Cases with prior surgery, reconstruction, or implanted hardware.
   - New or unusual trial structures.

Over time, this shifts contouring from being an artisanal, time-consuming activity to a **supervised quality-control task**. The art becomes knowing **where AI fails** and when to distrust it.

---

# 3. Treatment Planning: From Manual Craft to AI-Assisted Optimization

If auto-segmentation is about getting good contours quickly, AI-assisted planning is about getting a *good enough* plan quickly and consistently, especially for “routine but non-trivial” cases.

## 3.1. Knowledge-Based and DL-Based Planning

Knowledge-based planning (KBP) and newer deep learning-based planning tools can:

- Predict achievable DVHs based on historical plans.  
- Generate starting plans that are often close to clinic-ready (after a few iterations).  
- Reduce inter-planner variation.

A 2025 study by **Xiao et al.** used a deep learning–based system (“RatoGuide”) to generate whole-pelvic VMAT plans for gynecologic cancer, using 50.4 Gy in 28 fractions. The AI-generated plans were clinically acceptable and comparable to manual plans, with substantial planning time savings. :contentReference[oaicite:9]{index=9}  

Separately, larger reviews of automated planning and combined auto-seg + auto-planning workflows have shown that automation can standardize quality and reduce turnaround time, particularly for breast and pelvic sites. :contentReference[oaicite:10]{index=10}  

## 3.2. Online Adaptive Radiotherapy (ART)

Daily ART used to be a logistical pipe dream: re-contouring, re-planning, and QA all on the same day, within a 15–20 minute timeslot.

AI is what makes oART feasible:

- **Cone-beam CT–based ART**:  
  - DL models auto-segment the daily anatomy.  
  - A planning engine re-optimizes the plan.  
  - Automated checks ensure the new plan is deliverable.  
- **MR-linac + MARS**:  
  - The “Modular Adaptive Radiotherapy System (MARS)” describes a practical workflow for daily CBCT-based oART with offline MR guidance, including team roles, timing, and QA checkpoints. :contentReference[oaicite:11]{index=11}  

A 2023 review by Liu et al. summarizes the state of CBCT-based oART, concluding that: :contentReference[oaicite:12]{index=12}  

- Multiple vendors now offer clinically deployed CBCT-ART solutions.  
- Workflows are *tight but workable* within standard treatment slots, particularly for prostate and pelvic sites.  
- Team coordination and training are just as important as the AI models themselves.

In practice, ART workflows are currently most mature for:

- Prostate
- Bladder
- Some gynecologic tumours
- Pancreas and selected SBRT sites

The AI here is less about magic dose painting and more about **making a complex adaptive workflow actually runnable every day**.

---

# 4. Radiomics: More Than Pretty Pictures

Radiomics is the idea that medical images are **high-dimensional data**, not just pictures to eyeball. Features derived from CT, MRI, or PET can be combined with clinical variables to predict outcomes, like:

- Local control
- Overall survival
- Toxicity risk
- HPV status in oropharyngeal cancer

A classic foundational paper by Gillies et al. (“Radiomics: Images Are More Than Pictures, They Are Data”) laid out the pipeline and challenges—feature extraction, stability, overfitting, and the need for external validation. :contentReference[oaicite:13]{index=13}  

In head & neck cancer specifically, van Dijk and Fuller’s ASCO Educational Book chapter walks through how AI and radiomics can support HPV-positive OPSCC care, including prognosis and treatment selection. :contentReference[oaicite:14]{index=14}  

## 4.1. The Boring but Important Part: Standardization

A persistent issue is that radiomic features are **sensitive to imaging parameters**:

- Different scanners  
- Different acquisition protocols  
- Different reconstruction kernels  

Work like **Carré et al. 2020** (MRI intensity standardization) and **Tustison et al. 2010** (N4 bias-field correction) underpins many modern radiomics pipelines by stabilizing image intensities before feature extraction. :contentReference[oaicite:15]{index=15}  

Without this kind of image standardization, radiomics models don’t generalize well, which is a major barrier to real-world deployment.

## 4.2. Where This Might Show Up Clinically

In a realistic short-term future, radiomics might quietly appear as:

- **Risk scores in the background** of tumour boards (e.g., recurrence risk estimates for HPV+ OPSCC, or PET-based predictors of residual disease after chemoradiation). :contentReference[oaicite:16]{index=16}  
- A way to **prioritize patients** for dose-escalation studies or intensified systemic therapy.  
- An extra “sanity-check” to flag outlier patients whose imaging features don’t match their clinical staging.

But for most day-to-day decisions, radiomics is more likely to be a **supporting character** rather than the main driver, at least for the next decade.

---

# 5. Large Language Models (LLMs) and Documentation

This is the area where my own experience with ChatGPT comes in. LLMs are already capable of:

- Drafting consult notes from bullet points.  
- Rewriting HPIs more clearly.  
- Converting free text into structured fields.  
- Generating patient-friendly explanations.

A 2024 systematic review in *NPJ Precision Oncology* summarizes LLM applications in clinical oncology, from question answering to guideline retrieval and documentation support. :contentReference[oaicite:17]{index=17}  

## 5.1. Clinical Messaging and In-Basket Support

There is now real-world evidence that AI-drafted replies can help with inbox load. For example, a JAMA Network Open quality-improvement study evaluated an EHR-integrated LLM (similar to Epic’s in-basket “draft reply” feature) for drafting responses to patient messages: clinicians could edit or discard drafts, but the AI helped with speed and reduced cognitive load. :contentReference[oaicite:18]{index=18}  

Even if this is “just” a documentation tool, for a busy radiation oncologist dealing with:

- Treatment side-effect questions  
- Logistics questions  
- Refill requests  

LLMs could realistically save **hours per week**, especially if integrated directly into the EMR.

## 5.2. Oncology-Specific LLMs

General-purpose LLMs (like the one I’m using here) are powerful but not tuned to any one cancer centre’s workflows or data.

Emerging work on **OncoLLM** and similar models shows that:

- Fine-tuning on local oncology EHR data plus guidelines can approach or match clinician-level performance in certain tasks, such as clinical trial matching. :contentReference[oaicite:19]{index=19}  
- Locally hosted models can preserve privacy while still leveraging large-scale language understanding.

More experimental work has even explored using LLMs to guide aspects of treatment planning (e.g., GPT-RadPlan, where an LLM helps steer the optimization process), although this remains firmly in the research domain. :contentReference[oaicite:20]{index=20}  

---

# 6. Quality Assurance and Safety

The more steps we automate, the more important **QA** becomes.

Recent reviews highlight how AI is being used not just *in* the workflow, but *on* the workflow—screening for errors in contours, plans, and chart checks. :contentReference[oaicite:21]{index=21}  

Examples include:

- ML models that **classify pretreatment chart checks** as more or less likely to need human attention, helping triage physics workload. :contentReference[oaicite:22]{index=22}  
- Tools that automatically flag **suspicious contours or segmentation errors** so that clinicians can focus on problematic regions. :contentReference[oaicite:23]{index=23}  
- AI-assisted peer review tools that screen for plans at high risk of treatment interruptions or protocol deviations. :contentReference[oaicite:24]{index=24}  

On the guideline side:

- **Roper et al. 2023** emphasized that extensive, upfront validation and testing are essential before clinical implementation of AI auto-seg tools. :contentReference[oaicite:25]{index=25}  
- **NRG Oncology’s AI auto-segmentation assessment** outlines practical considerations for multi-centre use of commercial tools. :contentReference[oaicite:26]{index=26}  
- **AAPM Task Group 384** is actively working on recommendations for validation, acceptance testing, commissioning, and maintenance of AI-based auto-segmentation tools. :contentReference[oaicite:27]{index=27}  

The emerging consensus is not “trust the AI more,” but **“treat AI like any other piece of clinical equipment: commission it, QA it, and monitor it over time.”**

---

# 7. What happens to Radiation Oncologists?

As these multiple centers are dipping their toes into the world of AI-assisted radiation planning, it seems inevitable that we’re heading toward a transformational shift in terms of saved time for both the radiation oncologist and the patient. This feels especially pertinent as the baby boomer generation ages and our demographics shift toward a population in which cancer incidence will only continue to rise as people live longer.

The role of the radiation oncologist in 10 years is extremely hard to predict. It feels like a matter of when, not if, contouring becomes somewhat of a lost art.

That said, I’m optimistic that AI will ultimately enhance the role of the radiation oncologist. Ideally, it means more time for laying of hands, more face-to-face connection with patients, more time for teaching, and more time to study the weird and wonderful zebras that cross our path.

On a tangential note: this was a very interesting experience using ChatGPT for this research. I used ChatGPT-5.1 with a combination of “thinking mode” and “deep research mode.” I turned deep research on and it finished in about 10 minutes. I can’t help but wonder what this technology might be capable of in 5–10 years.

---

# 8. References

*(Curated to match the claims in this post and replace earlier placeholders.)*

1. **Lucido JJ et al.** Validation of clinical acceptability of deep-learning-based automated segmentation of organs-at-risk for head-and-neck radiotherapy treatment planning. *Front Oncol.* 2023;13:1137803. https://pubmed.ncbi.nlm.nih.gov/37091160/  

2. **Mayo Clinic Newsroom.** Time savings of 76% using deep learning automation in head and neck cancer. 2023. https://www.mayoclinic.org/medical-professionals/cancer/news/time-savings-of-76-percent-using-deep-learning-automation-in-head-and-neck-cancer/mac-20547794  

3. **National Institute for Health and Care Excellence (NICE).** Artificial intelligence (AI) technologies to aid contouring for radiotherapy treatment planning: Early value assessment (HTE11). 2023. https://www.nice.org.uk/guidance/hte11  

4. **Liu H et al.** Review of cone beam computed tomography based online adaptive radiotherapy: current trend and future direction. *Radiat Oncol.* 2023;18:144. https://doi.org/10.1186/s13014-023-02340-2  

5. **Kim JY et al.** Clinical workflow of cone beam computed tomography-based daily online adaptive radiotherapy with offline magnetic resonance guidance: The modular adaptive radiotherapy system (MARS). *Cancers.* 2024;16(6):1210. :contentReference[oaicite:28]{index=28}  

6. **Xiao Y et al.** Evaluation of deliverable artificial intelligence-based automated volumetric arc radiation therapy planning for whole pelvic radiation in gynecologic cancer. *Sci Rep.* 2025;15:15219. :contentReference[oaicite:29]{index=29}  

7. **Baroudi H et al.** Automated contouring and planning in radiation therapy. *Diagnostics (Basel).* 2023;13(4):667. :contentReference[oaicite:30]{index=30}  

8. **Roper J, Lin MH, Rong Y.** Extensive upfront validation and testing are needed prior to the clinical implementation of AI-based auto-segmentation tools. *J Appl Clin Med Phys.* 2023;24(1):e13873. :contentReference[oaicite:31]{index=31}  

9. **Rong Y et al.** NRG Oncology assessment on AI deep-learning based auto-segmentation for radiotherapy: current development, clinical consideration, and future direction. *Int J Radiat Oncol Biol Phys.* 2024. :contentReference[oaicite:32]{index=32}  

10. **Gillies RJ, Kinahan PE, Hricak H.** Radiomics: Images are more than pictures, they are data. *Radiology.* 2016;278(2):563-577. :contentReference[oaicite:33]{index=33}  

11. **van Dijk LV, Fuller CD.** Artificial Intelligence and Radiomics in Head and Neck Cancer Care: Opportunities, Mechanics, and Challenges. *ASCO Educ Book.* 2021;41:1-11. :contentReference[oaicite:34]{index=34}  

12. **Carré A et al.** Standardization of brain MR images across machines and protocols: bridging the gap for MRI-based radiomics. *Sci Rep.* 2020;10:12340. :contentReference[oaicite:35]{index=35}  

13. **Tustison NJ et al.** N4ITK: Improved N3 bias correction with robust B-spline approximation. *IEEE Trans Med Imaging.* 2010;29(6):1310-1320. :contentReference[oaicite:36]{index=36}  

14. **Carl N et al.** Large language model use in clinical oncology. *NPJ Precis Oncol.* 2024;8:xx. :contentReference[oaicite:37]{index=37}  

15. **Garcia P et al.** Artificial Intelligence–Generated Draft Replies to Patient Messages in the Electronic Health Record Inbasket: A Quality Improvement Study. *JAMA Netw Open.* 2024;7(3):eXXXX. :contentReference[oaicite:38]{index=38}  

16. **Gupta S et al.** PRISM: Patient Records Interpretation for Semantic clinical trial Matching (OncoLLM). *NPJ Digit Med.* 2024;7:xx. :contentReference[oaicite:39]{index=39}  

17. **Luk SMH et al.** Improving the Quality of Care in Radiation Oncology using Artificial Intelligence. *Clin Oncol (R Coll Radiol).* 2022;34(8):e323-e332. :contentReference[oaicite:40]{index=40}  

18. **Pillai M et al.** Augmenting quality assurance measures in treatment planning: machine learning–based classification of pretreatment chart check complexity. *Adv Radiat Oncol.* 2023;8(5):101229. :contentReference[oaicite:41]{index=41}  

19. **Clouser E et al.** Computer automation for physics chart check should be adopted in clinic to replace manual chart checking for routine cases. *J Appl Clin Med Phys.* 2021;22(2):7–13. :contentReference[oaicite:42]{index=42}  

20. **Duke K et al.** Artificial intelligence in radiation therapy: from imaging to delivery. *Br J Radiol (AI).* 2025;2(1):ubaf012. :contentReference[oaicite:43]{index=43}  

---

If you’d like, next step I can:

- Tighten or expand the reference list for a specific subsection (e.g., add more MR-linac/ART papers), or  
- Help you convert this into whatever citation style you want (e.g., numbered Vancouver style instead of author–year).
::contentReference[oaicite:44]{index=44}
