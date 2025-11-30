---
layout: page
title: Home
permalink: /
---

### Welcome

My working notebook for projects and ideas across medicine, engineering, design, and AI.

## Featured Projects

<section class="projects-section">
  <div class="projects-grid">
    {% assign featured_projects = site.data.projects | where: "featured", true | sort: "order" %}
    {% for project in featured_projects %}
      <a class="project-tile" href="{{ project.url | relative_url }}">
        <img src="{{ project.img | relative_url }}" alt="{{ project.title }}">
        <div class="project-tile-text">
          <h3>{{ project.title }}</h3>
          {% if project.blurb %}
            <p>{{ project.blurb }}</p>
          {% endif %}
        </div>
      </a>
    {% endfor %}
  </div>
</section>

## Latest Literature Reviews & Deep Dives

<div class="home-litreviews">
  {% assign lit_posts = site.litreview | sort: "date" | reverse %}
  {% for post in lit_posts limit:3 %}
    <article class="home-lit-card">
      <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      <p class="home-lit-meta">{{ post.date | date: "%b %d, %Y" }}</p>
      <p class="home-lit-excerpt">
        {% if post.summary %}
          {{ post.summary }}
        {% else %}
          {{ post.excerpt | strip_html | truncate: 180 }}
        {% endif %}
      </p>
    </article>
  {% endfor %}
  <p class="home-lit-more">
    <a href="{{ '/litreview/' | relative_url }}">Browse all literature reviews →</a>
  </p>
</div>
