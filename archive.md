---
layout: page
title: Archive
permalink: /archive/
---

<p class="page-intro">A chronological list of all published literature surveillance, horizon scans, methods, and deep dives.</p>

{% assign posts = site.litreview | sort: "date" | reverse %}
<div class="archive-list">
  {% for post in posts %}
    <article>
      <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y-%m-%d" }}</time>
      <div><a href="{{ post.url | relative_url }}">{{ post.title }}</a>{% if post.series %}<small>{{ post.series | replace: '-', ' ' | capitalize }}</small>{% endif %}</div>
    </article>
  {% endfor %}
</div>
