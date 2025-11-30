---
layout: page
title: "Literature Review"
permalink: /litreview/
---

# Literature Review

These are my longer-form literature reviews and deep dives.

<ul class="post-list">
  {% assign posts = site.litreview | sort: "date" | reverse %}
  {% for post in posts %}
    <li class="post-list-item">
      <h3>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <small>{{ post.date | date: "%b %-d, %Y" }}</small>
      </h3>
      {% if post.excerpt %}
        <p>{{ post.excerpt }}</p>
      {% endif %}
    </li>
  {% endfor %}
</ul>
