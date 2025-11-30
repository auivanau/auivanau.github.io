---
layout: default
title: Literature Review
permalink: /litreview/
---

<h1>Literature Review</h1>
<p>These are my longer-form literature reviews and deep dives.</p>

<div class="litreview-list">
  {% assign lit_posts = site.litreview | sort: "date" | reverse %}
  {% for post in lit_posts %}
    <article class="litreview-card">
      <a class="litreview-thumb" href="{{ post.url | relative_url }}">
        {% if post.thumbnail %}
          <img src="{{ post.thumbnail | relative_url }}" alt="{{ post.title }} thumbnail">
        {% else %}
          <div class="litreview-thumb-placeholder">
            <span>LR</span>
          </div>
        {% endif %}
      </a>

      <div class="litreview-content">
        <h2 class="litreview-title">
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </h2>
        <p class="litreview-meta">
          {{ post.date | date: "%b %-d, %Y" }}
        </p>
        <p class="litreview-excerpt">
          {% if post.summary %}
            {{ post.summary }}
          {% else %}
            {{ post.excerpt | strip_html | truncate: 220 }}
          {% endif %}
        </p>
        <a class="litreview-readmore" href="{{ post.url | relative_url }}">Read full review →</a>
      </div>
    </article>
  {% endfor %}
</div>
