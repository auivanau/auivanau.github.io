---
layout: page
title: Oil Sands Public Health Project
permalink: /oilsands/
---

# Occupational & Environmental Health Near Mildred Lake Oil Sands
In my previous career as a materials engineer, my first "real" job out of undergrad brought me back to my hometown—Fort McMurray. I returned to work where I grew up, where my dad had worked for 23 years straight without ever taking a sick day (a detail he loved to brag about). I remember my first time on the Diversified coach bus, riding north toward the land of grade-AAA, Alberta-born-and-bred gold: the oil sands. It was a bumpy, sleepy ride. I woke up five minutes before arrival and looked out to see a desert where there used to be forest—truly barren. And then, in the distance, growing larger, was a plume of vapor and a massive bucket excavator.

As I stood in the parking lot, watching employees march toward 41B, I took a breath of not-so-fresh air. This air had been through a lot—beat up and roughed up. My olfactory bulbs carried that moment deep into my hippocampus.

I’ve always been a bit of a systems thinker. If you want real change, you need to see the bigger picture. And I began to wonder: could this be an interesting field that not many people are paying attention to? Is there a connection between the air quality in places like the oil sands and people getting sick?

This is an independent scholarly project that investigates population-level occupational and environmental health concerns in the Wood Buffalo region of Alberta, Canada.

It integrates the following data sources:
- Workers’ Compensation Board (WCB) injury claims
- Air pollution metrics (e.g. PM2.5, NO₂, SO₂)
- Demographic data from Statistics Canada

**Let's add a little scientific rigor to this:**
- P (Population): Workers employed in the Alberta oil sands industry (e.g., Syncrude, Mildred Lake) from 2005 to 2024
- I (Intervention/Exposure): Occupational exposure to oil sands emissions (e.g., SO₂, PM₂.₅, VOCs)
- C (Comparison): General Alberta workforce or workers in other non-oil-sands heavy industry sectors
- O (Outcome): Prevalence or incidence of WCB-accepted respiratory illness claims (e.g., asthma, chronic bronchitis, COPD)


**Goals of the project:**
- Identify temporal and geographic patterns of environmental exposure
- Analyze injury trends relative to pollutant levels and weather
- Understand demographic disparities (including Indigenous populations and fly-in/fly-out workers)

{% for post in site.categories.oil-sands %}
  <li><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
