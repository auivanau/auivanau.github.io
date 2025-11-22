---
layout: page
title: Home
permalink: /
---

### Welcome

I'm Ivan Au — a medical student with a background in materials engineering and a long-standing interest in emerging technologies. Early in my career, I was lucky enough to do a short research internship in nanomaterials in Germany. After returning to Canada, I spent several years working in Alberta’s energy sector, including roles in the oil sands and pipeline systems. That experience gave me a ground-level view of industrial health, safety systems, and environmental risk — and continues to inform my current work in medicine and public health.

This blog is a digital lab notebook for my independent projects at the intersection of **engineering**, **medicine**, and **population health**. I use it to document workflows, share design ideas, and reflect on the technical and societal questions I’m exploring.

Welcome to the lab — Thanks for stopping by.

## Projects

<section class="projects-section">
  <div class="projects-grid">
    {% assign featured_projects = site.data.projects | where: "featured", true | sort: "order" %}
    {% for project in featured_projects %}
      <div class="project-tile">
        <a href="{{ project.url | relative_url }}">
          <img src="{{ project.img | relative_url }}" alt="{{ project.title }}">
          <p>{{ project.title }}</p>
        </a>
      </div>
    {% endfor %}
  </div>
</section>
