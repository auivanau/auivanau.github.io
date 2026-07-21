---
layout: landing
title: Rad Onc Weekly
permalink: /radonc-weekly/
description: "A weekly, critically appraised radiation oncology literature surveillance digest."
thumbnail: /assets/litreview-radonc-digest.png
---

<div class="publication-hero">
  <img src="{{ '/assets/litreview-radonc-digest.png' | relative_url }}" alt="Clinical radar illustration for Radiation Oncology Weekly">
  <div>
    <p class="section-kicker">Weekly literature surveillance</p>
    <h1>Radiation Oncology Weekly</h1>
    <p>A ranked, critically appraised scan of new radiation oncology, medical physics, adaptive radiotherapy, and clinical AI literature.</p>
    <p><strong>Designed for:</strong> radiation oncologists, residents, medical physicists, and oncology researchers who need signal over noise.</p>
    <a class="button button--primary" href="#issues">Browse issues</a>
  </div>
</div>

<div class="editorial-principles">
  <div><strong>Every paper is ranked</strong><span>Must Read, Worth Skimming, Save for Later, or Low Priority.</span></div>
  <div><strong>Evidence is separated from excitement</strong><span>Peer review, study design, maturity, and clinical readiness are explicit.</span></div>
  <div><strong>Practice relevance is central</strong><span>Each appraisal asks what the finding could change—and what remains uncertain.</span></div>
</div>

{% include newsletter-signup.html %}

## Issues {#issues}

<div class="litreview-list">
  {% assign posts = site.litreview | sort: "date" | reverse | where: "series", "radonc-weekly" %}
  {% for post in posts %}
    {% include post-card.html post=post %}
  {% endfor %}
</div>

<p class="method-link">Want to know how papers are selected and ranked? <a href="{{ '/methodology/' | relative_url }}">Read the editorial methodology →</a></p>
