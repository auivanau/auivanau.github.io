---
layout: landing
title: Clinical Horizon Scan
permalink: /clinical-horizon-scan/
description: "A weekly, cross-specialty scan of important medical trials, approvals, public-health developments, biotechnology, and clinical AI."
thumbnail: /assets/medical-news-clinical-horizon-scan.png
---

<div class="publication-hero">
  <img src="{{ '/assets/medical-news-clinical-horizon-scan.png' | relative_url }}" alt="Clinical horizon radar illustration">
  <div>
    <p class="section-kicker">Weekly general medical briefing</p>
    <h1>Clinical Horizon Scan</h1>
    <p>A cross-specialty briefing on important trials, approvals, public-health developments, biotechnology, and clinically relevant AI.</p>
    <p><strong>Designed for:</strong> clinicians and trainees who want to notice consequential developments outside their immediate specialty without following the entire medical news cycle.</p>
    <a class="button button--primary" href="#issues">Browse issues</a>
  </div>
</div>

<div class="editorial-principles">
  <div><strong>Clinical consequence first</strong><span>Developments are prioritized by likely effects on decisions, outcomes, or systems.</span></div>
  <div><strong>Negative evidence counts</strong><span>Failed interventions and de-implementation signals are treated as useful findings.</span></div>
  <div><strong>Local relevance is stated</strong><span>Regulatory status and Canadian applicability are distinguished from global news.</span></div>
</div>

{% include newsletter-signup.html %}

## Issues {#issues}

<div class="litreview-list">
  {% assign posts = site.litreview | sort: "date" | reverse | where: "series", "clinical-horizon-scan" %}
  {% for post in posts %}
    {% include post-card.html post=post %}
  {% endfor %}
</div>

<p class="method-link">For scope, evidence tiers, and correction principles, see the <a href="{{ '/methodology/' | relative_url }}">editorial methodology →</a></p>
