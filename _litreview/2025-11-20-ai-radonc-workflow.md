---
layout: post
title: "Artificial Intelligence in Radiation Oncology: Impact on Workflow Efficiency"
date: 2025-11-20
permalink: /litreview/2025/11/20/ai-radonc-workflow/
categories: ai radonc litreview workflow
---

## Artificial Intelligence in Radiation Oncology: Impact on Workflow Efficiency (Next 5–10 Years)


It's November 20, 2025. It's 7 days until CaRMs. I've procrastinated by seeing what info I could get from a simple prompt of asking ChatGPT 5.1: "How will AI affect the practice of radiation oncology in the next 5 to 10 years?".

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

I picked **Clinical Workflow Efficiency**, Curious to see what how AI would perform. I expected maybe a page or two like a brief wikipedia article. But I was seriously blown away. My final thoughts on this review are at the end.

## Introduction

Artificial intelligence (AI) is poised to significantly streamline the radiation oncology workflow in the coming 5–10 years. From automating labor-intensive tasks to enhancing decision-making, AI tools are being integrated across the treatment spectrum. The goals are clear: reduce the time clinicians spend on routine processes, improve consistency (e.g. in contouring and planning), and allow radiation oncologists to focus more on complex clinical decisions. Recent developments have already demonstrated notable efficiency gains without compromising quality. Below, we explore key areas where AI is impacting clinical workflow efficiency – including treatment planning, image segmentation, quality assurance, decision support, and overall integration into practice – along with specific technologies, expected benefits, implementation challenges, and early case study outcomes.

---

## AI-Driven Treatment Planning Automation

Modern radiation therapy planning can be time-consuming, often requiring multiple trial-and-error iterations by dosimetrists and physicists. AI-driven treatment planning systems aim to automate and optimize this process. Machine learning models (including deep learning and knowledge-based algorithms) can generate high-quality plans in a fraction of the time of manual planning. For example, AI-based optimizers have been shown to reduce planning times from days to mere hours or minutes while maintaining plan quality. This is particularly beneficial for complex techniques like IMRT/VMAT, where algorithms can learn from past plans to predict optimal dose distributions quickly.

Commercial treatment planning platforms are embracing these advances:

- **RayStation (RaySearch)** now integrates AI for plan optimization, using trained models to automate dose planning and produce consistent plans faster. Early implementations report that such knowledge-based planning tools improve consistency and cut down manual adjustments, effectively reducing average planning time per case.

- **Varian Ethos** is an example of an adaptive radiotherapy system with an AI-driven planning engine. It automates key steps – contour propagation, dose re-calculation, plan generation and even preliminary QA – enabling “online” adaptive treatment planning in as little as 15–20 minutes between imaging and treatment. A 2023 multi-site study of Ethos reported that daily plan adaptation was feasible with minimal workflow disruption, validating that AI can recalculate and approve new plans on-the-fly while meeting clinical criteria. This real-time adaptation capability is expected to greatly increase efficiency for cases like lung or cervical cancer where anatomy changes throughout therapy.

Beyond vendor systems, research prototypes have shown fully automated end-to-end planning is within reach. In an ESTRO 2023 workshop, experts demonstrated that given a planning CT and prescription, they could obtain a deliverable treatment plan with virtually no human input, purely through AI and automated optimizers. This proof-of-concept answered the question of feasibility with a “resounding yes, we can” achieve scan-to-plan automation. While full automation is not yet routine, it foreshadows a future where clinicians might just supervise the final plan rather than manually crafting it.

Overall, AI in treatment planning promises to standardize plan quality and save time. Planners can devote more attention to complex or borderline cases, while routine plans are largely handled by algorithms. In the next decade, as these tools mature and gain regulatory approval, it is expected that radiation therapy planning will shift to a mostly automated pipeline with clinicians validating AI-generated plans rather than manually creating each plan from scratch.

---

## AI for Image Segmentation and Tumor Delineation

Contouring of tumors and organs-at-risk (OARs) is one of the most time-intensive steps in radiotherapy. Manual delineation can take an hour or more per patient and is subject to inter-observer variability. AI-based auto-segmentation is revolutionizing this process by providing rapid, consistent contours for physicians to review. Numerous studies since 2022 demonstrate dramatic improvements in efficiency:

- Deep learning models can generate contours for dozens of structures within minutes, a task that would take a clinician much longer. In one study focusing on low- and middle-income clinics, an AI auto-segmentation tool reduced the average contouring time from ~60 minutes per case to just ~2 minutes – translating to roughly 1,000 clinician hours saved per year if applied across a typical workload. Another report similarly noted time savings on the order of “thousands of hours” when auto-segmentation (combined with subsequent auto-planning) is incorporated into the workflow.

- Real-world multi-institution evaluations have confirmed significant time reductions. For head-and-neck cancer cases (which involve many OARs), deep learning auto-segmentation has shown over 76% reduction in contouring time on average. In one multi-center trial, introducing a stratified AI contouring system led to up to 90% reduction in clinical workload for contouring while also reducing inter-physician variability in contours. Such consistency improvements mean that contours are not only faster but also more uniform, which can improve treatment quality and trial standardization.

- Early adopter health systems report that AI-generated contours are often near ready for use with minimal edits. A Mayo Clinic 2023 study of an AI model for head & neck cases found that the algorithm’s auto-contours were acceptable (needing only minor or no revision) 90% of the time, compared to only 53% for manually drawn contours – and the AI approach reduced overall contouring process time by 76%. This highlights that AI can improve quality and efficiency simultaneously. The UK’s National Institute for Health and Care Excellence (NICE) likewise reviewed evidence and found AI OAR contouring produces quality comparable to experts, usually requiring only minor adjustments. Even after including time for clinician review and edits, AI contouring was consistently faster than purely manual delineation in early evaluations.

Automation tools: Many AI-based contouring solutions are now available. For example, **MVision AI** (a CE-certified deep learning software) can auto-segment over 50 anatomical structures and integrates with planning systems to return contours within minutes. Other tools like **Limbus AI**, **Mirada**, and others are being adopted in clinics for various sites. These systems leverage large training datasets to contour normal organs (e.g. heart, lungs, spinal cord, liver, etc.) and sometimes tumor volumes, dramatically reducing the manual workload. TheraPanacea’s **ART-Plan** platform is another example, offering vendor-neutral contouring and adaptive planning driven by AI.

Overall, auto-contouring directly tackles a major bottleneck in the radiotherapy workflow. By 2030, it is expected that delineating standard organs will be largely automated for most tumor sites, with physicians mainly focusing on reviewing and fine-tuning AI-generated structures. This could free radiation oncologists and dosimetrists to concentrate on decision-making and patient care rather than routine contouring tasks. Importantly, contouring AI does not replace clinician judgment – all AI contours are currently reviewed by experts (as mandated by guidance) to ensure safety. However, the heavy lifting of drawing contours can be offloaded to AI, significantly accelerating the planning process.

---

## AI in Quality Assurance and Safety

Quality assurance (QA) is critical in radiation oncology to ensure treatments are delivered safely and accurately. AI is beginning to augment QA processes for both machines and patient-specific plans:

- **Machine QA**: Modern linacs require periodic checks (e.g. verifying beam output, dose distributions, alignment). AI models can learn from historical machine performance data to predict when parameters might drift or a fault might occur. Additionally, AI-driven analysis of beam data can potentially replace some physical measurements. For instance, preliminary studies have used neural networks to predict IMRT QA outcomes (gamma passing rates for a given plan) without needing full measurement, flagging only outliers for further review. Such tools could save physicists time by identifying in advance whether a treatment plan is likely to pass QA or needs adjustment, thus reducing the trial-and-error of QA.

- **Patient-specific QA**: AI is being applied to evaluate treatment plans for adherence to dose constraints and to catch potential errors. Algorithms can automatically check whether a plan meets all protocol requirements (tolerance doses to organs, target coverage, etc.) and generate alerts if not. In one institution’s experience, automating the data gathering and constraint-checking for plan review saved about 27 minutes per plan on average. This means physicists spend less time on manual chart checking and more on resolving any issues flagged by the system. Over many patients, these time savings are substantial.

- **Contour/Plan QA**: Beyond dose checks, AI is also being explored to assess the quality of contours and plans. For example, one approach uses convolutional neural networks as a “QA tool” to detect anomalies in auto-segmented contours or to ensure the contours match expected anatomical shape/position. By doing so, the system can prompt clinicians if an automatically contoured organ looks incorrect (e.g. missing part of an organ), acting as a safety net before planning. Similarly, AI-based plan QA might verify that the fluence patterns of an IMRT plan are in family with known good plans (to catch any optimization errors).

- **Treatment monitoring**: During radiation delivery, advanced systems use AI in image-guidance to ensure patient setup and tumor targeting remain accurate. For instance, real-time image analysis algorithms can detect patient movement or anatomy changes and either alert the team or trigger adaptive workflows. Some research prototypes are exploring AI for real-time beam monitoring (detecting deviations in delivered dose) to enhance safety, though this is still emerging.

These innovations can streamline QA by automating routine checks and improving error detection. However, with AI handling more of QA, a new layer of oversight is needed to validate the AI itself. Professional bodies have recognized this: for example, AAPM (American Association of Physicists in Medicine) task groups are working on guidelines for validating AI models in segmentation and QA before clinical use. In the next few years, expect to see standardized “AI QA” protocols – essentially quality assurance of the AI tools – to ensure that an algorithm continues to perform as expected (e.g. monitoring if an auto-segmentation model’s performance drifts over time or flagging if a planning model is used outside its trained scope).

In summary, AI is enhancing safety by acting as an assistant inspector, checking plans and treatments with speed and thoroughness that would be difficult manually. This dual role – AI helping to assure the quality of both the treatment delivery and the AI-generated outputs – will be crucial as automation increases.

---

## AI-Based Decision Support Systems

Beyond automating technical tasks, AI is increasingly used for clinical decision support in radiation oncology. These tools analyze large datasets (patient characteristics, imaging, treatment parameters, outcomes) to assist oncologists in making evidence-informed decisions:

- **Outcome and toxicity prediction**: Machine learning models can predict treatment outcomes such as tumor control probability or normal tissue complication probability, helping tailor treatments to individual patients. For example, radiomic models that analyze CT/MRI features along with clinical data can forecast which patients are likely to respond well to radiotherapy versus those at higher risk of recurrence. Similarly, AI can identify patients at higher risk of radiation-induced toxicities (like predicting who might develop severe lung fibrosis after thoracic RT or severe xerostomia after head & neck RT). Such predictions allow clinicians to adjust treatment plans proactively – for instance, selecting a more aggressive regimen for a likely responder or altering technique to spare an organ for a patient at high toxicity risk. In the next decade, these predictive models could be incorporated into treatment planning systems as a “risk dashboard,” guiding dose decisions and the need for interventions (e.g. prophylactic medications or closer monitoring).

- **Adaptive decision-making**: As adaptive radiotherapy becomes more common (e.g. re-planning during a course of treatment when the tumor shrinks or patient anatomy changes), AI decision support can advise when adaptation is necessary. By analyzing daily imaging, AI could flag if the anatomy has shifted enough to warrant a new plan or if the tumor response suggests an early treatment adaptation. This ensures adaptive workflows are used when beneficial, improving outcomes and sparing workload when changes are not needed.

- **Radiomics and prognostics**: Tools like Imbio’s Lung Suite use AI-driven radiomics analysis of images to provide prognostic information for lung cancer patients. These systems can quantify tumor characteristics or changes over time that correlate with outcomes. In practice, a radiation oncologist could use such data to decide on boosting dose to radioresistant tumor regions or combining therapies (e.g. adding systemic therapy for tumors with features suggesting aggressive biology). Radiomics-based decision support is still emerging, but some early models have shown success in stratifying patients by risk.

- **Treatment recommendation systems**: Drawing from large clinical datasets, AI can assist in recommending treatment approaches. For instance, given a patient’s stage, tumor features, genomics, and comorbidities, an AI system might suggest an optimal therapy course (e.g. recommending concurrent chemo-radiation vs. radiation alone, or suggesting an appropriate dose fractionation based on predicted outcomes). These systems essentially function as advanced clinical calculators, synthesizing prior outcomes of similar patients. While final decisions rest with physicians, such tools could ensure no viable option is overlooked, especially in complex or rare scenarios.

- **Documentation and workflow support**: Large language models (LLMs) and AI-driven software are also being applied to relieve clinicians of administrative burdens. Experimental oncology-specific LLMs are being tested to draft clinic notes, structure reports, and assist with patient triage. For example, an AI might automatically summarize a consultation into a draft treatment plan document or help filter and prioritize electronic messages from patients. By integrating with oncology information systems, these decision support AIs can save time and reduce burnout associated with documentation.

While AI decision support offers promise, its adoption in the next few years will require robust validation. Clinicians must be able to trust these recommendations; thus, many current efforts focus on developing explainable AI, where the model can provide reasoning for its predictions (e.g. highlighting which features of a scan led to a high-risk prediction). Early case studies are encouraging – for instance, some centers have used ML models to successfully predict which prostate cancer patients can omit certain treatments safely, or to identify head and neck patients who would benefit from feeding tube placement based on predicted weight loss. As more clinical data becomes available and is shared, these AI decision support tools are expected to become more accurate and widespread, acting as a “virtual assistant” to the radiation oncologist when formulating patient-specific treatment strategies.

---

## Integration into Clinical Workflows

Integrating AI into the day-to-day clinical workflow is a complex but achievable task, and progress is accelerating. Key considerations for successful integration include workflow design, human oversight roles, interoperability of software, and staff training:

- **Human-in-the-loop vs. automation**: The optimal point for human oversight in an AI-augmented workflow is an active area of discussion. The ESTRO 2023 workshop on automation likened AI to an “autopilot” for radiation therapy and debated where the human pilot (clinician) should intervene. Initially, many felt a clinician should oversee each step (contouring, then planning, etc.), but by the end, some participants realized that intervening too early or too often might impede efficiency without improving quality. The emerging consensus is that humans should certainly validate final outputs (no AI should operate unchecked), but they can generally step back from micromanaging intermediate steps unless the AI flags an uncertainty. In practice, this means a likely workflow is: AI performs contouring → clinician approves/edits → AI generates plan → clinician approves/tweaks → AI or software runs QA checks → physicist approves. This supervised-autonomy model ensures safety while capturing efficiency gains.

- **Software integration**: AI tools need to interface with existing hospital systems (imaging, treatment planning systems, oncology EMRs). Vendors are increasingly building integration hooks for AI. For instance, many auto-contouring solutions run on cloud platforms but can plug directly into the treatment planning software to import contours and export plans. Adaptive therapy systems like Ethos come as a fully integrated package (machine + AI software + planning system) for a seamless workflow. Other vendor-neutral platforms (e.g. TheraPanacea) are designed to sit on top of multiple planning systems. Over the next few years, we expect DICOM standards and interoperability protocols to further improve, making it easier for clinics to deploy third-party AI modules without disrupting their IT infrastructure.

- **Clinical training and acceptance**: Successful integration requires that clinical staff (physicians, physicists, dosimetrists, therapists) trust and know how to use AI tools. Change management is crucial – departments are establishing training programs to familiarize staff with interpreting AI outputs and performing efficient corrections rather than doing tasks from scratch. Professional societies and health systems are also developing AI training curricula for oncology professionals, recognizing that a basic understanding of AI will be a core competency. As one health technology leader noted, embracing AI is essential to keep the workforce fit for the future, and efforts are underway to identify the skills and training needed for staff to make the best use of these tools. Early adopters have reported that once clinicians see the time saved and that they remain in control of final decisions, acceptance grows quickly.

- **Regulatory and standards**: Integration is also guided by regulatory approvals. Many AI tools must be cleared by bodies like the FDA (or CE marking in Europe) for clinical use. In the past couple of years, several AI segmentation and planning tools have received such clearances, paving the way for broader adoption. Alongside this, standardization efforts (e.g. defining “model fact sheets” that describe an AI model’s training and valid use cases) are being proposed to ensure transparency. In the next 5–10 years, it’s expected that regulatory frameworks will mature to better handle continuously-learning AI systems and update approvals as models improve.

Critically, integration is not just plug-and-play – workflow redesign is often needed. Clinics that have successfully implemented AI report that they adjusted their workflow to maximize AI’s benefit. For example, scheduling might change: if auto-contouring can be done in minutes, a patient’s simulation scan can be scheduled closer to the start of treatment since planning now takes less total time. Or roles may evolve: dosimetrists might focus more on plan QA and less on manual contouring. Multidisciplinary teamwork is key – involving end-users in implementation planning ensures AI is used to solve the right problems. When done well, integration of AI can accelerate the workflow without sacrificing safety, as evidenced by early adopters who maintain treatment quality while significantly shortening planning timelines.

---

## Impact on Time Efficiency and Workload

By combining the above advancements, AI has the potential to substantially reduce the workload of radiation oncology teams and improve throughput of patients. Some concrete efficiency improvements observed and projected include:

- **Auto-contouring time savings**: Multiple studies show 50–80% reductions in contouring time for various sites when using AI assistance. For example, head-and-neck OAR segmentation time dropped from ~82 minutes to ~44 minutes on average (a 46% reduction) in a global multi-center evaluation. In practice, this means a clinician might spend 15–20 minutes reviewing AI-generated contours instead of an hour drawing them from scratch. Across hundreds of patients, that frees up hundreds of hours of physician/dosimetrist time annually. It also reduces inter-observer variability, potentially decreasing the need for repeat contour revisions.

- **Automated planning speed**: AI-driven planning systems can produce treatment plans in minutes versus many hours manually. Knowledge-based planning modules routinely generate an optimized plan within ~20 minutes. Complex cases that might have taken a dosimetrist several days of adjustments can often be achieved same-day with AI guidance. Clinical reports from AI-enabled adaptive therapy indicate that even with daily re-planning, the overall workload is manageable because the automation handles the heavy computation quickly. As a result, departments can accommodate adaptive treatments or additional patients without overburdening staff.

- **Quality assurance efficiency**: By automating parts of QA (both plan checks and machine checks), AI tools can cut down physics workload. If an algorithm predicts which plans will pass QA, physicists can streamline the patient-specific QA process, focusing measurements on only the most complex cases. Early data suggest time savings of 20–30 minutes per plan in chart checking tasks when automated plan evaluation tools are used. Over many treatment courses, this translates to significant cumulative time that can be reallocated to other safety or research activities.

- **Overall workload reduction**: National health systems are eyeing substantial system-wide impacts. The NHS in England estimated that even a modest time saving of ~5 minutes per plan by using AI contouring could free up thousands of hours of staff time when scaled across tens of thousands of radiotherapy plans per year. In scenarios with greater per-plan savings (30–80 minutes), the impact exceeds 50,000–100,000 clinician hours saved for the same volume of patients. This is critically important at a time of workforce shortages and increasing cancer incidence – AI can help departments treat more patients or give existing staff more time for direct patient interaction and other duties.

- **Improved turnaround time**: For patients, these efficiency gains mean a shorter interval from diagnosis to treatment. With AI speeding up contouring and planning, clinics can start radiation sooner, which may improve outcomes in certain cancers where delays matter. It also enables advanced practices like online adaptive radiotherapy without lengthening appointments unduly. Early evidence from Ethos users, for example, shows daily adaptive treatments can be delivered within standard time slots due to AI assistance, without prolonging patient visits.

In summary, AI is enabling radiation oncology teams to do more in less time. Over the next decade, routine tasks that once consumed hours of a specialist’s day may require only brief oversight. This not only alleviates workload and burnout but can also improve care quality (through more consistent outputs) and patient access (through potentially higher throughput or more personalized treatment per patient). It is important to note that these time savings are realized only when AI is integrated thoughtfully – ensuring that the human oversight is efficient and that users trust the automation to handle the rote work.

---

## Emerging AI Tools and Technologies in Practice

A number of specific AI-powered tools are already being adopted in radiation oncology departments worldwide. Below are a few notable examples and their roles in the workflow:

- **MVision AI** – A cloud-based deep learning auto-contouring solution that can delineate organs-at-risk across various anatomical sites. MVision has been shown to drastically cut contouring times (auto-segmenting dozens of structures in minutes) while maintaining high geometric accuracy. It integrates with treatment planning systems to import its contours seamlessly. Early clinical use has demonstrated reduced inter-planner variability and faster planning prep.

- **Varian Ethos** – An integrated radiotherapy delivery system with built-in AI for online adaptive planning. Ethos performs daily contour adaptation, re-optimization, and QA checks automatically within each treatment session. Clinicians oversee the final adapted plan, but the system handles most steps autonomously. This enables personalized day-by-day treatment adjustments (for tumor shrinkage or anatomical changes) without significant time penalty. Ethos exemplifies how AI can accelerate workflows and enhance personalization simultaneously.

- **RayStation with Autoplanning** – The RayStation treatment planning software incorporates machine learning-based autoplanning modules. These use large datasets of prior plans to generate new patient plans that meet dose constraints with minimal human tweaking. It’s vendor-agnostic and used for many treatment sites. By automating the optimization process, RayStation’s AI features help achieve consistent plan quality across planners and institutions, and speed up the planning of standard cases.

- **TheraPanacea ART-Plan** – A vendor-neutral AI platform that provides both auto-segmentation and adaptive planning tools. It can plug into different linac workflows, offering automation in contouring and real-time replanning decisions. Clinics using ART-Plan can perform adaptive therapy on various machines (not just a single vendor’s) thanks to its neutral design. Its algorithms learn from multi-institution data, aiming to generalize well and support centers that want advanced AI without replacing existing hardware.

- **Imbio Lung Suite (Radiomics)** – A specialized AI software focusing on lung cancer imaging analytics. It uses radiomics and AI to derive quantitative insights from CT scans, such as identifying radiographic features predictive of outcomes or segmenting nodules and lesions with prognostic information. In the context of radiotherapy, tools like this aid in decision support – e.g. guiding whether a lung tumor might need dose escalation or informing follow-up strategies based on predicted risk of recurrence.

These examples are just the beginning; many other AI tools (including those from Elekta, Siemens, Mirada, Limbus, etc.) are in use or in development. Importantly, each of these technologies addresses a different part of the workflow (contouring, planning, adaptation, prognostication). When combined, they create an ecosystem of AI assistance throughout the patient’s journey. Over the next 5–10 years, we expect even tighter integration of such tools and the emergence of new ones – for instance, AI-driven scheduling systems that optimize patient appointment flow, or AI models that assist in multi-modality therapy decisions (surgery vs radiotherapy considerations).

---

## Implementation Challenges and Considerations

Despite the promising benefits, there are several challenges to address as AI becomes embedded in clinical practice:

- **Validation and reliability**: Ensuring AI tools are accurate and reliable is paramount. Models trained on one dataset may not perform equally well on different patient populations or imaging protocols. Extensive upfront validation is needed before deployment – for example, checking auto-segmentation output against expert contours on local cases. A lack of consensus on validation standards initially has led groups like AAPM to work on guidelines. Regular QA of the AI (monitoring its outputs for errors or drift over time) must be part of clinical routine.

- **Regulatory and liability issues**: AI in medicine raises questions of responsibility. Clinicians remain ultimately responsible for treatment decisions, so if an AI contour or plan has an error, the clinician must catch it. Clear regulatory frameworks are evolving to define AI as a medical device with defined indications. Liability in case of an AI-related mistake is a grey area: it could involve the vendor, the institution, and/or the clinician. This necessitates careful use of AI as decision support rather than decision maker – always keeping a human in the loop. Regulatory bodies will likely require transparency (e.g. “model fact sheets”) and traceability of AI outputs.

- **Integration and interoperability**: Introducing AI can be hampered by compatibility issues with legacy systems or the need for high-performance computing. Some clinics may face IT challenges or need to invest in infrastructure (e.g. GPU servers or cloud subscriptions) to run these tools smoothly. Workflow integration requires custom scripting in some cases and robust data sharing between systems. Efforts like standardized DICOM for AI outputs or vendor partnerships are helping, but full plug-and-play integration is still a work in progress at many sites.

- **Data privacy and security**: AI models often rely on large datasets, which may include patient images and records. Ensuring patient data privacy when using cloud-based AI services is essential. Many vendors implement encryption and anonymization, but institutions must vet these practices. There’s also the issue of data sharing: pooling data to improve AI is beneficial for model accuracy, yet hospitals must navigate privacy regulations (like HIPAA, GDPR) when contributing data. Secure federated learning approaches might become more common to allow model training on distributed data without exposing patient information.

- **Clinical acceptance and workflow change**: Some clinicians may be initially wary of AI, concerned about over-reliance on automation or job displacement. It takes time and experience for teams to trust that “AI got it right.” There can be resistance to changing long-standing workflows. To address this, involving end-users early, providing training, and demonstrating successes (such as improved turnaround or reduced backlog) are key. Notably, rather than replacing clinicians, AI is relieving them of tedious tasks, which many come to appreciate. Still, maintaining clinician engagement (so that they don’t become too removed from the planning/contouring process and thus less able to spot errors) is a balance to strike.

- **Financial considerations**: AI solutions come with costs – purchasing software licenses, potentially upgrading hardware, and training staff. For some clinics, especially in resource-limited settings, these costs are a barrier. Demonstrating the return on investment (ROI) through efficiency gains is crucial. Early evidence like the NICE analysis suggests AI could save substantial staff hours, which in theory offsets costs. Nonetheless, reimbursement models currently do not directly account for AI usage. If AI allows more patients to be treated with the same resources, that can indirectly increase revenue, but healthcare systems may need new incentives or funding mechanisms to support AI adoption at scale.

Addressing these challenges will require coordinated efforts between clinicians, researchers, vendors, and regulators. Ongoing trials and pilot programs are valuable for identifying pitfalls. It’s also likely that industry standards and best-practice frameworks will emerge (for example, checklists for commissioning an auto-segmentation tool in a new clinic, or standardized outcome measures to compare AI vs manual processes). With thoughtful implementation, the hurdles can be managed, paving the way for AI to safely augment clinical workflows.

---

## Case Studies and Early Outcomes

Early implementations of AI in radiation oncology provide a glimpse of its real-world impact. A few notable examples and trial outcomes include:

- **Mayo Clinic – AI Contouring Study (2023)**: As mentioned, Mayo Clinic partnered with Google Health to develop a deep learning model for head and neck contouring. In a validation study with expert review, they found the model’s contours were largely on par with or better than manual ones, reducing contouring time by 76%. This study not only quantified time saved but also showed improved standardization (90% of AI contours acceptable with minimal edits). The result has encouraged broader collaboration to test the model at other sites, exemplifying how academic and industry collaboration can accelerate AI tools.

- **Multi-center auto-segmentation trials**: The HARMONY study (an international multi-center trial in 2025) evaluated a commercial auto-segmentation tool across seven institutions worldwide. It assessed both the time savings and the consistency of contours when clinicians used AI assistance on both familiar (in-house) and external scans. Phase I results showed significant time saved per institution with no loss of contour accuracy, and Phase II demonstrated reduced inter-observer variability when AI suggestions were used uniformly across centers. These findings support that AI can help standardize care in multi-center clinical trials and potentially streamline collaborative studies by providing a common baseline for contours.

- **NRG Oncology assessment**: NRG, a major cooperative group running clinical trials, performed an assessment of AI-based contouring in a trial setting. Their findings suggested that AI auto-contouring could reduce inter-observer variation and improve adherence to contouring guidelines among trial participants. This is important because variability in contouring can confound trial outcomes; AI could make results more reliable by ensuring all sites contour structures in a similar way. NRG is now exploring incorporating AI-contouring into some clinical trial workflows with appropriate QA, indicating a trust that the technology is reaching a maturity level suitable for high-stakes use.

- **Varian Ethos clinical deployments**: Several cancer centers (in Europe, North America, etc.) have published early experiences with the Ethos adaptive therapy system. For instance, Barragán Montero et al. (2023) reported on using Ethos across multiple tumor sites. They observed that daily adaptive planning was clinically feasible without extending patient appointment times, and that the AI-driven workflow ran reliably. Patients benefited from more precise treatments adapted to their anatomy-of-the-day, and clinicians reported the workflow was manageable, highlighting the real-world viability of AI-driven adaptive radiotherapy.

- **NICE Early Value Assessment (UK, 2023)**: The NICE pilot assessment of nine AI auto-contouring tools in the NHS is a case study in a national-scale adoption approach. By recommending these tools for routine use (with proper oversight), NICE effectively launched one of the first large public healthcare implementations of AI in radiotherapy. They project notable efficiency gains and are collecting data over a 3-year period to confirm time savings and cost-effectiveness. This initiative will likely serve as a model for other countries on how to evaluate and introduce AI into standard practice.

Each of these cases underscores important themes: AI can work in practice (not just theory), it usually complements clinicians rather than replaces them, and measured outcomes like time saved, consistency improved, or feasibility demonstrated are being reported. Moreover, these early successes build confidence and provide learning opportunities to refine AI integration. Over the next 5–10 years, we anticipate many more such case studies, including prospective trials directly comparing AI-assisted vs. conventional workflows in terms of efficiency, safety, and patient outcomes. Early indicators suggest that properly implemented AI will come out favorably in such comparisons, as it has so far in pilot studies.

---

## Conclusion and Future Outlook

Artificial intelligence is on track to become an indispensable part of the radiation oncology workflow in the next decade. The evidence from recent years demonstrates that AI can automate and expedite many steps – from delineating anatomy to crafting treatment plans and performing QA – with equal or even improved quality compared to traditional methods. This has profound implications for clinical efficiency: patients can be treated faster and more adaptively, clinicians can devote more time to critical thinking and patient interaction, and healthcare systems can better handle growing patient volumes without a proportional increase in staff burnout.

Looking 5–10 years ahead, we expect to see:

- Routine use of AI for most contours and initial treatment plans, with clinicians intervening only for fine-tuning or unusually complex cases. Automation might handle the “heavy lifting,” while humans provide high-level guidance and approvals.

- Widespread adaptive radiotherapy enabled by AI – not just in specialized centers, but as a standard option for suitable cases, since AI will make adaptive planning fast and feasible in busy clinics.

- Integration of predictive analytics into treatment decisions, so that personalization goes beyond clinical intuition by leveraging data-driven risk predictions (e.g. models suggesting when to escalate dose or add systemic therapy, based on expected benefit).

- Continuous learning systems: AI models that improve over time as they are exposed to more data (with proper validation). We may see learning health system approaches where, for example, every new case’s data helps refine the model for the next, under oversight.

- Stronger safety nets and QA: Paradoxically, as we trust AI for routine tasks, we will likely develop even more rigorous QA checks (often automated) to catch rare failures. The culture in radiation oncology has long been “trust but verify,” and that will extend to AI – verifying models with independent checks, perhaps even AI vs. AI cross-checks.

- Addressing disparities: If deployed thoughtfully, AI could help address resource gaps by enabling centers with limited staff to maintain high-quality planning. Cloud-based AI services might allow smaller clinics to access advanced planning or contouring capabilities. Ongoing collaborations (like the African consortium studies) indicate a drive to ensure AI benefits are global.

Crucially, the human element remains central. The next decade will not remove the radiation oncologist or medical physicist from the loop, but rather elevate their roles – focusing on decisions, patient counseling, and innovation, while AI handles the repetitive groundwork. As one example from the ESTRO workshop put it, some experts even mused that excessive human intervention in a well-functioning automated pipeline might “only make things worse”. While said partly in jest, it underlines a future where clinicians trust AI for execution and step in when judgment is truly needed.

In conclusion, artificial intelligence is expected to greatly improve clinical workflow efficiency in radiation oncology by 2030. Automation of treatment planning and segmentation is already reducing turnaround times and workload, decision support AI is enhancing personalized care, and integration of these tools is steadily progressing with careful attention to safety and validation. Early case studies and pilot implementations have shown promising results in saving time and standardizing quality. Challenges remain in validation, integration, and acceptance, but they are being actively addressed by the community. With continued multidisciplinary effort, AI will increasingly empower radiation oncology teams to deliver timely, precise, and high-quality cancer care on a broader scale than ever before – truly augmenting human expertise with machine efficiency.

## Personal Thoughts on this Experiment
This feels like a fairly overview of the landscape of AI on rad onc. It does seem limited to English speaking data, which makes sense, so there is likely some bias there. Much of the data here analyzed is coming from North America or Europe. Fortunately, from a practical perspective, as a hopefuly soon to be MD that will be practicing in North America, I don't deem that as particularly negative. The fact that jumped out to me the most was: "1,000 clinician hours saved per year" - that's an enormous potential benefit, even if that is overestimating, saving several hundred hours could mean more patients being seen. In Edmonton, I can anecdotally say that we have post surgical lumpectomy patients waiting for adjuvant radiation up to 16, sometimes 18 weeks, which is far beyond the ideal 4-8 week window. If these time savings pan-out, I optimistically hope that we see wait times lower for these patients. Of course AI isn't a silver bullet. There still need to be more infrastructure, more hiring of radiation therapists etc., but these things progress slowly with beuracracy. Meanwhile, AI is progressing quickly, extraodinarily quickly.

This query only took ~10 minutes of time in deep research. I think if i had to do this manually it might take me at least 40 hours of work of solid focused reading and writing. This work is INCREDIBLY more detailed than the type of reports I asked for even 8 months ago. 

You know, when I'm walking around with ChatGPT in my pocket, I'm not really cognizant of the minor improvements every day. But there are. And these improvements scale upon on each other like compoound interest. Let's hypothesize that AI improves — I'm not going to dig in to the details of what defines "improve", let's just say in all domains it "improves" — by 0.1% per day. Let's say we use the compound interest formula: (1.001)^(365*10), then in 10 years, it would be <b>38</b>  times more powerful. Maybe that growth is unsustainable, who knows? But if you asked me if I thought this could be done 5 years ago, I wouldn't have believed it.

## Sources

1. Zafar F. et al. (2025). *AI in Radiation Oncology: A Comprehensive Review of Current Applications and Future Directions.* Cureus, 17(9): e92964.

2. Malone C. et al. (2025). *Real world AI-driven segmentation: Efficiency gains and workflow challenges in radiotherapy.* Radiother Oncol, 209:110977 (Aug 2025).

3. NICE (UK) – *Artificial intelligence to speed up contouring in radiotherapy planning* (News release, Aug 11, 2023).

4. Kawamura M. et al. (2024). *Revolutionizing radiation therapy: the role of AI in clinical practice.* J. Radiat. Res., 65(1):1–9.

5. Ono T. et al. (2024). *AI for machine- and patient-specific QA in radiotherapy: current status and future directions.* J. Radiat. Res., 65(4):421–432.

6. OncoDaily – *Top 5 AI Tools for Radiation Oncologists: What Clinicians Need to Know* (July 26, 2025).

7. ESTRO News – *2023 Physics Workshop: AI for the fully automated radiotherapy treatment chain* (R. Simões, 2023).

8. Mayo Clinic News – *AI-automated head and neck radiotherapy model improves efficiency* (Apr 27, 2023).

9. Patel S. et al. (2023). *Deep learning auto-contouring vs. manual contouring in head & neck RT planning* (Mayo Clinic/Google Health study).

10. Barragán Montero A. et al. (2023). *Clinical implementation of Varian Ethos for daily adaptive radiotherapy* (Feasibility study).

---

### Web Links

- Top 5 AI Tools for Radiation Oncologists: What Clinicians Need to Know – OncoDaily  
  <https://oncodaily.com/oncolibrary/ai-tools-for-radiation-oncologists>

- Artificial intelligence to speed up contouring in radiotherapy treatment planning – NICE  
  <https://www.nice.org.uk/news/articles/artificial-intelligence-to-speed-up-contouring-in-radiotherapy-treatment-planning>

- Revolutionizing radiation therapy: the role of AI in clinical practice – Journal of Radiation Research  
  <https://academic.oup.com/jrr/article/65/1/1/7441099>

- Applications of artificial intelligence for machine- and patient-specific quality assurance in radiation therapy: current status and future directions  
  <https://academic.oup.com/jrr/article-pdf/65/4/421/58605190/rrae033.pdf>

- ESTRO – About ESTRO / Physics workshop  
  <https://www.estro.org/About/Newsroom/Newsletter/Physics/2023-ESTRO-Physics-workshop-AI-for-the-fully-autom>

- Impact of Artificial Intelligence-Based Autosegmentation of Organs at Risk in Low- and Middle-Income Countries (PDF)  
  <https://www.researchgate.net/publication/384675071_Impact_of_Artificial_Intelligence-Based_Autosegmentation_of_Organs_at_Risk_in_Low-and_Middle-Income_Countries>

- Multicentre evaluation of deep learning CT autosegmentation of the head and neck region for radiotherapy – *npj Digital Medicine*  
  <https://www.nature.com/articles/s41746-025-01624-z>

- Mayo Clinic study suggests improved time efficiency, accuracy with AI-automated head and neck radiotherapy model – Mayo Clinic News  
  <https://newsnetwork.mayoclinic.org/discussion/mayo-clinic-study-suggests-improved-time-efficiency-accuracy-with-ai-automated-head-and-neck-radiotherapy-model/>

- Automated Evaluation of Radiation Treatment Plans for Protocol Compliance – *International Journal of Radiation Oncology, Biology, Physics*  
  <https://www.redjournal.org/article/S0360-3016(13)02231-1/fulltext>

- Quality assurance of organs-at-risk delineation in radiotherapy – arXiv  
  <https://arxiv.org/abs/2405.11732>

- Safeguarding Clinical AI-Based Auto-Segmentation – ICCR 2024 (PDF)  
  <https://www.iccr2024.org/papers/526344.pdf>

- Extensive upfront validation and testing are needed prior to clinical implementation of auto-segmentation – PubMed  
  <https://pubmed.ncbi.nlm.nih.gov/36545883/>

- Radiotherapy and Oncology – related article  
  <https://www.thegreenjournal.com/article/S0167-8140(24)00615-7/pdf>

- Time efficiency, geometric accuracy, and clinical impact of AI auto-contouring – NIH/PMC  
  <https://pmc.ncbi.nlm.nih.gov/articles/PMC12439213/>

- NRG Oncology Assessment of Artificial Intelligence Deep Learning Autocontouring – PubMed  
  <https://pubmed.ncbi.nlm.nih.gov/37972715/>
