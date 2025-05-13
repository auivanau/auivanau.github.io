---
layout: page
title: Oil Sands Public Health Project
permalink: /oilsands/
---

# Oil Sands Public Health Project

This project explores occupational and environmental health issues in the Wood Buffalo region near Alberta’s oil sands.

The goal is to use publicly available data (WCB injury claims, pollution metrics, census data, etc.) to assess trends in workplace and community-level respiratory health. I approach this from the lens of a former engineer who worked in the industry — and a medical trainee trying to understand the systems-level health implications of large-scale energy operations.

---

## Posts in this project

<ul>
{% for post in site.oilsands %}
  <li><a href="{{ post.url }}">{{ post.title }}</a> <small>({{ post.date | date: "%b %e, %Y" }})</small></li>
{% endfor %}
</ul>
