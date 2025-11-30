---
layout: page
title: Enhanced Anthropomorphic Phantom
permalink: /phantom/
---

**Goal:** Create a realistic 3D-printed skull model for radiation oncology quality assurance (QA).

I completed my undergrad in Materials Engineering in 2016 and spent about six years working in industry before returning to med school. During training, I realized I missed the hands-on, technical side of engineering: designing something, testing it, breaking it, fixing it, and watching an idea slowly take shape.

I started looking for a side project that could bridge both worlds. It needed to be grounded in engineering but still meaningful for medicine, especially radiation oncology, radiology, surgery, or med-ed.

My goal was to build something realistic within the time I had. I wanted a small minimum viable product that I could finish before graduating, then iterate on later. Something fun, technical, and genuinely useful.

This build log documents the process, the experiments, the wrong turns, and the small wins.

Welcome to the build log.
---

## Posts in this project

<ul>
{% for post in site.phantom %}
  <li><a href="{{ post.url }}">{{ post.title }}</a> <small>({{ post.date | date: "%b %e, %Y" }})</small></li>
{% endfor %}
</ul>
