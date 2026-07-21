---
layout: page
title: Projects
permalink: /projects/
description: "Projects at the intersection of medicine, engineering, design, data, and clinical technology."
---

<p class="page-intro">Experiments, prototypes, and analyses shaped by an engineering approach to clinical and health-system problems.</p>

<div class="projects-grid">
  {% assign projects = site.data.projects | where: "featured", true | sort: "order" %}
  {% for project in projects %}
    <a class="project-tile" href="{{ project.url | relative_url }}">
      <div class="project-tile-image-wrapper"><img src="{{ project.img | relative_url }}" alt="" loading="lazy"></div>
      <div class="project-tile-text"><h2>{{ project.title }}</h2><p>{{ project.blurb }}</p></div>
    </a>
  {% endfor %}
</div>

<p class="editorial-note">These pages document exploratory work and learning in progress. They should not be interpreted as validated clinical products or institutional recommendations.</p>
