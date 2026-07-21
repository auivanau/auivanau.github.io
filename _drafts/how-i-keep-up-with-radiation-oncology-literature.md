---
layout: post
title: "How I Keep Up With Radiation Oncology Literature Without Reading Everything"
date: 2026-07-19
categories: methodology radiation-oncology literature-review workflow
series: deep-dive
summary: "A practical system for turning an overwhelming stream of radiation oncology papers into a focused weekly surveillance habit."
thumbnail: /assets/litreview-radonc-digest.png
image: /assets/litreview-radonc-digest.png
---

Radiation oncology sits at the intersection of clinical oncology, imaging, medical physics, engineering, software, and rapidly expanding artificial intelligence research. Keeping up can feel impossible because the relevant literature is not contained within a single journal or even a single discipline.

The solution is not to read everything. It is to build a system that helps you reliably notice the small number of papers that could change how you think, practise, teach, or investigate.

This is the workflow I use to produce **Radiation Oncology Weekly**, my weekly literature surveillance digest.

## Start by defining what deserves your attention

A literature search becomes unmanageable when every technically relevant paper receives equal priority. I begin with a narrower question:

> Which new publications could plausibly affect a clinical decision, workflow, quality standard, research direction, or important uncertainty in radiation oncology?

That question creates a hierarchy.

A randomized trial, practice guideline, or strong prospective cohort may matter because it could change treatment selection or counselling. A technical paper may matter because it addresses a genuine bottleneck in image guidance, planning, contouring, quality assurance, or adaptive radiotherapy. An AI paper may matter because it tests whether a model improves a real clinical process—not simply whether it achieves a high performance metric.

The goal is not comprehensive indexing. The goal is useful surveillance.

## Use a broad search and a narrow editorial filter

My search scope is deliberately broad. It includes radiation oncology journals, general oncology journals, medical physics publications, selected general medical journals, and preprint servers.

The editorial filter is much narrower. I prioritize:

- practice-changing trials and guidelines;
- adaptive radiotherapy and image guidance;
- contouring, planning, and quality assurance;
- clinically relevant AI and workflow automation;
- toxicity prediction and treatment personalization;
- disease-site evidence with direct radiation oncology implications;
- medical physics innovations that address a real clinical problem.

This separation matters. Searching narrowly risks missing important work. Publishing everything found simply transfers the burden of filtering to the reader.

## Triage before reading deeply

I do not begin by reading every paper from beginning to end. I first perform a rapid triage using the title, abstract, study design, population, intervention, comparator, outcomes, and source.

At this stage, I ask:

1. What decision or problem is this study addressing?
2. Is the study design capable of answering that question?
3. Is the outcome clinically meaningful or mainly a surrogate?
4. Is this genuinely new, or an incremental variation on existing work?
5. Could the result apply outside the study centre or dataset?
6. What would need to be true before this changed practice?

The answers determine whether the paper deserves a full read, a targeted skim, or only a saved citation.

## Separate scientific interest from clinical readiness

One of the most useful habits is to score novelty and readiness separately.

A paper can be scientifically interesting while remaining far from clinical implementation. This is common in artificial intelligence, synthetic imaging, automated segmentation, radiomics, and treatment-planning optimization.

For example, strong retrospective model performance does not establish that a tool will:

- generalize across institutions and scanners;
- remain calibrated over time;
- improve a clinician's decision;
- reduce workload rather than create additional review burden;
- avoid systematic failures in uncommon but important cases;
- improve patient outcomes or safety.

Conversely, a relatively unglamorous workflow or quality-assurance study may have immediate practical value.

## Read according to the paper's failure modes

Different study designs deserve different reading strategies.

For a randomized trial, I focus on allocation, population, comparator, endpoint selection, effect size, confidence intervals, missing data, crossover, toxicity, and whether the result applies to current practice.

For an observational clinical study, I look for selection bias, confounding, immortal-time bias, outcome ascertainment, missingness, model overfitting, and whether associations are being interpreted causally.

For a medical physics or engineering paper, I ask whether the technical metric is connected to a clinically relevant task. Image similarity, dose differences, segmentation overlap, or processing speed may be useful, but only when the evaluation reflects the way the system would actually be used.

For an AI paper, I look beyond discrimination metrics to calibration, external validation, dataset shift, subgroup performance, failure analysis, human factors, prospective evaluation, and decision impact.

## Write the limitation before the takeaway

A useful discipline is to identify the major limitation before writing the one-line summary.

This reduces the tendency to repeat the authors' framing or abstract conclusion. It also forces the takeaway to reflect what the study actually establishes.

Instead of writing:

> This AI tool improves adaptive radiotherapy.

A better summary might be:

> This retrospective single-centre study suggests that the model could shorten one step of the adaptive workflow, but prospective evaluation of editing burden, failure cases, and treatment-time impact is still needed.

The second version is less exciting, but more useful.

## Rank papers by what readers should do next

I group papers into four practical categories:

### Must Read

The paper has high clinical importance, strong evidence, or an unusually consequential workflow or research signal. A reader should examine the full paper rather than rely on a summary.

### Worth Skimming

The study is relevant and credible, but narrower, preliminary, or unlikely to change immediate practice. The abstract, figures, methods, and limitations may be sufficient for many readers.

### Save for Later

The paper is useful for a specific disease site, technique, research project, or future implementation question, but is not essential for most readers this week.

### Low Priority

The study has limited incremental value, weak validation, unclear decision impact, or relevance mainly outside routine practice.

The ranking is not a judgment of the authors' effort. It is a judgment about how a busy reader should allocate limited attention.

## Keep a visible record of uncertainty

Every digest should distinguish what is known from what remains uncertain.

For each important paper, I try to state:

- the evidence tier;
- the one-line takeaway;
- the main limitations;
- the likely practice relevance;
- whether the finding is ready now, possibly soon, or mainly hypothesis-generating.

This creates an audit trail for how the interpretation was reached. It also makes it easier to revisit a topic when confirmatory evidence appears.

## Use AI for information handling, not final judgment

AI can be useful for broad search, deduplication, extracting study characteristics, checking formatting, organizing notes, and drafting a consistent structure.

It is less reliable at deciding whether a study matters clinically. That requires context about current practice, competing evidence, workflow, implementation, and the consequences of being wrong.

The safest division of labour is:

- use automation to reduce clerical burden;
- use explicit criteria to support consistency;
- retain human review for selection, ranking, interpretation, and clinical framing;
- link the original source so readers can verify important claims.

## Turn surveillance into a compounding knowledge system

The weekly digest is not only a publication. It is a structured archive.

Over time, repeated themes become visible:

- promising tools that never progress beyond retrospective validation;
- clinical questions that repeatedly produce conflicting evidence;
- implementation barriers shared across adaptive radiotherapy and AI;
- disease sites where practice is changing quickly;
- negative trials that should reduce low-value care;
- gaps that may be worth studying locally.

A weekly habit therefore becomes more valuable with time. Individual papers fade; patterns accumulate.

## A sustainable weekly workflow

A realistic workflow does not require reading continuously.

I use a staged process:

1. **Collect:** run broad searches and gather candidate papers.
2. **Deduplicate:** remove repeated records, older online-first publications, and clearly irrelevant items.
3. **Triage:** identify the small group that could matter.
4. **Appraise:** read the highest-priority items according to their study design and likely failure modes.
5. **Rank:** decide what readers should read, skim, save, or ignore.
6. **Write:** state the takeaway, evidence maturity, limitations, and practical relevance.
7. **Archive:** publish the references and preserve the issue for later retrieval.

The workflow works because each step has a different purpose. Trying to search, interpret, and write simultaneously creates unnecessary cognitive load.

## The standard is usefulness, not completeness

No weekly surveillance system will capture every relevant paper. A transparent best-effort digest is more honest than pretending to be a systematic review.

The useful question is not whether the search was perfect. It is whether the process consistently helps readers notice important evidence, interpret it cautiously, and spend their limited reading time more deliberately.

That is the purpose of **Radiation Oncology Weekly**: not to replace reading, but to make the next reading decision easier.
