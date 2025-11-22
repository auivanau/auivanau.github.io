---
layout: page
title: Home
permalink: /
---

### Welcome

My working notebook for projects and ideas across medicine, engineering, design, and AI.

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
