---
layout: page
title: Home
permalink: /
---

### Welcome

This site is my working notebook for projects and ideas across medicine, engineering, design, and AI. I document builds, workflows, experiments, and technical notes — essentially whatever I’m learning or exploring at the time.

It’s a broad space by design, shaped by curiosity.

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
