---
layout: post
title: "2. Do Pollutants Predict Respiratory Claims? Exploring the Data"
date: 2025-05-14
categories: analysis oil-sands public-health data
---

After building a dataset combining WCB respiratory claims, air pollution levels, and labour force estimates, the obvious next question was: **Do these variables correlate?**

To compile this dataset, I started by directly emailing **WCB Alberta**, and I received their aggregate data on accepted respiratory illness claims by **April 28**. This became the backbone of the analysis. I also contacted **Careersinenergy.ca** for workforce population data and received their dataset by **May 7**, which provided the yearly labour force estimates for oil sands workers from 2005 to 2024. These manual requests were essential because no public dataset provided both claim counts and workforce estimates in a unified format., air pollution levels, and labour force estimates, the obvious next question was: **Do these variables correlate?**

In this post, I explore whether ambient pollutant concentrations—especially **SO₂**, **Total Hydrocarbons (THC)**, and **Hydrogen Sulphide (H₂S)**—track with the rate of respiratory injury claims submitted by oil sands workers from 2005 to 2024.

---

### 📉 Plotting Claim Rates Over Time

First, I calculated respiratory claim rates using:

```python
claim_rate_per_10k = (respiratory_claims / estimated_jobs) * 10000
```

Then I plotted that against annual averages of SO₂, THC, and H₂S:

![Claim Rate vs SO₂ and THC](RespIllnessPollutantFigure.png)

It was immediately obvious that **2021 was an outlier**, showing a spike in claims largely attributed to COVID-related illnesses.

---

### 🧼 Excluding 2021 (The COVID Spike Year)

When I excluded 2021 from the analysis, the signal-to-noise ratio improved—but **no strong visual correlation** emerged. Here’s a revised plot with 2021 removed:

![Claim Rate vs Pollutants (2021 excluded)](RespIllnessPollutantFigure-exclCovid.png)

---

### 📊 Correlation Matrix (without 2021)

To formalize this, I computed a correlation matrix:

|            | SO₂ (ppb) | THC (ppm) | H₂S (ppb) | Claim Rate |
| ---------- | --------- | --------- | --------- | ---------- |
| SO₂ (ppb)  | 1.00      | 0.22      | 0.13      | -0.08      |
| THC (ppm)  | 0.22      | 1.00      | 0.15      | -0.02      |
| H₂S (ppb)  | 0.13      | 0.15      | 1.00      | 0.05       |
| Claim Rate | -0.08     | -0.02     | 0.05      | 1.00       |

No meaningful correlation emerged between pollutant levels and respiratory claim rates. Even SO₂, the most consistent pollutant in the dataset, showed a weak **negative** correlation.

---

### 🧠 What This Tells Us (and What It Doesn’t)

On the surface, the data doesn’t support a clear linear relationship between respiratory claims and pollutant levels. But that doesn’t mean exposure isn’t harmful. A few things to keep in mind:

* **Lag effects**: Respiratory illness often develops over years, but this study tracks acute WCB claims.
* **Underreporting**: Not every worker with symptoms files a WCB claim.
* **Confounders**: Smoking, PPE use, indoor vs outdoor work, and transient workforce status were not accounted for.

This is a limitation of retrospective ecological analysis: we’re looking at populations, not individuals. Still, it’s an important first step toward understanding what’s measurable—and what’s being missed.

In the next post, I’ll dig into the question: **Why was 2021 such an extreme year for respiratory claims? And what can that anomaly teach us about systems and perception?**
