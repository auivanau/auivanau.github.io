---
layout: post
title: "AI Moves Too Fast for the Way Academia Evaluates It"
date: 2026-08-18
permalink: /litreview/2026/08/18/ai-peer-review-evaluation/
categories: litreview artificial-intelligence medicine academia
thumbnail: /assets/ai-peer-review-evaluation.jpg
summary: "Peer-reviewed journals remain essential to science, but their slow, static publication model is poorly suited to evaluating rapidly evolving AI systems. Medical AI may require continuous, version-specific surveillance instead."
series: deep-dive
---

Medicine has spent decades building a system for deciding whether new interventions work.

A study is designed. Patients are enrolled. Data are collected. A manuscript is written. Reviewers critique it. The paper is revised, accepted, and eventually published.

For drugs, surgical techniques, and many medical devices, this process makes sense. The intervention being studied is relatively stable. The chemotherapy regimen tested at the beginning of a trial is generally the same chemotherapy regimen being evaluated several years later.

Artificial intelligence is different.

By the time we finish evaluating an AI model using the traditional academic publishing cycle, there is a reasonable chance that the model we studied is no longer the model anyone is using.

That creates a fundamental mismatch between the pace of AI development and the way academia currently evaluates technology.

## The intervention keeps changing

Imagine conducting a randomized trial of a medication where the manufacturer changed the molecular structure every three months.

That would obviously create problems.

Yet something surprisingly similar is happening with AI.

A study might begin by evaluating a particular version of GPT, Gemini, Claude, or a medical imaging model. Data collection takes several months. Analysis follows. The manuscript is written and submitted. Peer review may take several more months. Revisions are requested. Eventually the study is published.

By then, the company may have released several new generations of the model.

The paper may still tell us something scientifically interesting. But the clinically relevant question — *How good is this AI system today?* — may already have a different answer.

Traditional clinical research assumes that the intervention is relatively stationary.

AI is not.

## A published accuracy number can become almost meaningless

There is another problem.

AI performance is extraordinarily dependent on context.

A model might perform well on:

* one hospital's patient population
* one scanner manufacturer
* one electronic medical record configuration
* one set of prompts
* one contouring protocol
* one clinical workflow

and perform differently somewhere else.

Even relatively small changes can matter.

Change the prompt.

Change the image preprocessing.

Change the patient population.

Change the software version.

Change the workflow surrounding the model.

You may now be studying a meaningfully different system.

This makes the familiar academic statement that "Model X achieved an accuracy of 92%" much less informative than it appears.

The more useful questions are:

**Which version? Under what conditions? On which population? Integrated into what workflow? Compared with what alternative? And is it still performing that way today?**

A static paper struggles to answer those questions for very long.

## Benchmark performance is not the same as clinical value

There is also an understandable tendency in AI research to measure whatever is easiest to measure.

For large language models, that may mean exam performance or question-answering accuracy.

For radiology, it may mean classification accuracy.

For radiation oncology, it might mean Dice similarity coefficients for automatically generated contours.

These metrics are useful. But they can become disconnected from the reason we wanted the AI system in the first place.

Suppose an AI contouring system achieves a Dice score of 0.92.

Great.

But what I actually want to know is:

Does it save the radiation oncologist time?

How often are clinically important edits required?

Does it occasionally make subtle but dangerous errors?

Does automation bias make clinicians less likely to notice those errors?

Does it improve interobserver consistency?

Does it shorten the time from simulation to treatment?

Does it ultimately make care better?

Those are much harder questions than calculating a Dice coefficient.

They are also much more important.

We risk creating an enormous academic literature demonstrating that AI models perform impressively on benchmarks while learning surprisingly little about whether they improve healthcare.

## AI evaluation should start looking more like surveillance

The solution is not to abandon rigorous science.

It is to change what we think rigorous evaluation looks like.

For AI, the ideal evidence system may look less like a sequence of static papers and more like **continuous surveillance**.

Imagine that every clinical AI system had something resembling a living performance dashboard.

It might report:

* the exact model and software version currently deployed
* performance across different patient populations
* clinically important error rates
* rates of physician override or correction
* time saved or added
* calibration and uncertainty
* evidence of model drift
* adverse events or near misses
* performance following software updates

Instead of asking:

> "Was this AI system validated?"

we would ask:

> "How is this AI system performing right now?"

That is a much more appropriate question for software that can change continuously.

## We may need an AI equivalent of pharmacovigilance

Medicine already has a conceptual model for this.

We do not stop evaluating medications the moment a randomized trial is published.

We continue monitoring them after approval.

Rare toxicities emerge.

Drug interactions are discovered.

Outcomes in populations poorly represented in clinical trials become apparent.

Safety signals accumulate across millions of patients.

AI may require an even stronger version of this approach.

Call it **algorithmovigilance**.

Clinical AI systems could have standardized post-deployment monitoring, public reporting of significant failures, version tracking, external benchmarking, and mechanisms for rapidly identifying performance degradation.

A major model update should perhaps be treated less like updating Microsoft Word and more like modifying a medical intervention.

If the underlying system changes substantially, some degree of re-evaluation should follow.

## Academia still matters — but its role should change

None of this means that journals or peer review are obsolete.

Quite the opposite.

Academia is particularly valuable for asking questions that companies may have little incentive to ask.

Researchers can investigate failure modes.

They can independently validate commercial claims.

They can identify bias.

They can study downstream clinical outcomes.

They can compare competing systems.

They can examine whether apparent productivity gains actually improve patient care.

And peer review remains useful for scrutinizing study design and preventing weak claims from entering the scientific literature unchallenged.

But the **paper should become one component of AI evaluation rather than the final stamp of approval**.

A paper might establish that a particular approach works.

A prospective study might demonstrate clinical utility.

But continuous real-world monitoring should tell us whether it *continues* to work.

## Academic incentives may also be pushing us in the wrong direction

There is a second uncomfortable issue.

AI development creates endless opportunities for publishable incremental improvements.

Take an existing model.

Modify the architecture.

Train it on a slightly different dataset.

Report a modest increase in a benchmark.

Publish.

Repeat.

Individually, these studies can be perfectly legitimate.

Collectively, however, we can end up with thousands of papers describing marginal technical improvements while some of the most important practical questions remain unanswered.

Did the tool actually change clinical practice?

Did anyone continue using it after the study ended?

Did it save money?

Did it save time?

Did it improve outcomes?

Did it introduce new errors?

Was it still useful two years later?

These questions are less glamorous than announcing a new state-of-the-art model.

They may also be far more important.

## We need a faster evidence ecosystem

The future of AI evaluation probably requires several layers of evidence operating at different speeds.

Traditional peer-reviewed studies can provide deep methodological evaluation.

Prospective clinical trials can determine whether AI changes physician behaviour or patient outcomes.

Independent benchmark organizations can repeatedly test major models.

Health systems can perform local validation before deployment.

Registries can track real-world performance.

And automated monitoring can detect deterioration after implementation.

Most importantly, these systems need to be linked to **specific model versions**.

The question should never simply be whether "GPT" or "an AI contouring system" works.

Software has versions.

Evidence should too.

## The scientific method is not the problem

There is sometimes a temptation to frame this debate as AI moving so quickly that traditional science cannot keep up.

I think that goes too far.

The scientific method remains exactly what we need.

The problem is the infrastructure through which we currently practise it.

A publishing ecosystem designed around relatively stable interventions cannot be our only mechanism for evaluating technologies that may change several times during the lifespan of a manuscript.

AI forces us to separate two concepts that academia has often treated as synonymous:

**rigorous evaluation** and **peer-reviewed publication**.

They are not the same thing.

We should absolutely demand rigorous evidence for medical AI.

If anything, we should demand more of it.

But that evidence will increasingly need to be continuous, version-specific, externally validated, clinically grounded, and capable of changing as quickly as the technology itself.

The question is no longer simply whether an AI system *worked when the study was performed*.

The question we ultimately care about is much harder:

**Does it work here, for these patients, in this workflow, with this version — today?**
