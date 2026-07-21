---
layout: page
title: Library
permalink: /litreview/
description: "Browse all literature surveillance issues, clinical horizon scans, methods, and deep dives from The Lab."
---

<p class="page-intro">Browse the complete publication archive, from weekly surveillance to longer-form methods and clinical technology analysis.</p>

<div class="library-nav">
  <a href="{{ '/radonc-weekly/' | relative_url }}"><strong>Rad Onc Weekly</strong><span>Ranked radiation oncology surveillance</span></a>
  <a href="{{ '/clinical-horizon-scan/' | relative_url }}"><strong>Clinical Horizon Scan</strong><span>Cross-specialty medical developments</span></a>
  <a href="#deep-dives"><strong>Deep Dives & Methods</strong><span>Evergreen evidence and technology analysis</span></a>
</div>

## Deep Dives & Methods {#deep-dives}

<div class="litreview-list">
  {% assign sorted_posts = site.litreview | sort: "date" | reverse %}
  {% assign deep_dives = sorted_posts | where: "series", "deep-dive" %}
  {% for post in deep_dives %}
    {% include post-card.html post=post %}
  {% endfor %}
</div>

## All publications

<div class="litreview-list">
  {% for post in sorted_posts %}
    {% include post-card.html post=post %}
  {% endfor %}
</div>
