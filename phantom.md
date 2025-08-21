---
layout: page
title: Enhanced Anthropomorphic Phantom
permalink: /phantom/
---

# Enhanced Anthropomorphic Phantom

**Goal:** Create a realistic 3D-printed skull model for radiation oncology quality assurance (QA).

I completed my undergrad in Materials Engineering back in 2016 and spent about six years working in industry before returning to med school. While studying medicine, I found myself missing the hands-on, technical, nerdy stuff I enjoyed in engineering. So I decided to take on a side project that blends both worlds — something with roots in engineering but useful for medicine, especially fields like radiation oncology, radiology, surgery, or med-ed.

I wanted a project I could scale up in the future but still complete a **minimum viable product (MVP)** by the end of med school — something I could demo, talk about, and be proud of.

I've always been interested in emerging technologies, and for this specific project I relied heavily on ChatGPT — using it like a project manager, research assistant, and technical editor all in one. It drastically improved how quickly I could prototype, iterate, and make decisions. It felt like leading a small engineering team to bring this idea to life.

Welcome to the build log.

---

## Posts in this project

<ul>
{% for post in site.phantom %}
  <li><a href="{{ post.url }}">{{ post.title }}</a> <small>({{ post.date | date: "%b %e, %Y" }})</small></li>
{% endfor %}
</ul>
