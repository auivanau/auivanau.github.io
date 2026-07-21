<section class="hero">
  <p class="section-kicker">Medicine × engineering × AI</p>
<h1>Clinical intelligence for radiation oncology and medicine.</h1>
<p class="hero__lede">
    Weekly literature surveillance, emerging medical developments, and practical
    analysis for clinicians who want signal over noise.
  </p>
<div class="hero__actions">
    <a
      class="button button--primary"
      href="{{ '/radonc-weekly/' | relative_url }}">
      Read Rad Onc Weekly
    </a>
<aclass="button button--secondary"href="{{ '/clinical-horizon-scan/' | relative_url }}">
Explore the Horizon Scan
</a>
</div>
</section>
{% assign sorted_posts = site.litreview | sort: "date" | reverse %}
{% assign latest_radonc = sorted_posts | where: "series", "radonc-weekly" | first %}
{% assign latest_horizon = sorted_posts | where: "series", "clinical-horizon-scan" | first %}
<section class="section-block" aria-labelledby="latest-issues">
  <div class="section-heading">
    <div>
      <p class="section-kicker">Latest issues</p>
      <h2 id="latest-issues">Start with this week</h2>
    </div>
<a class="text-link" href="{{ '/litreview/' | relative_url }}">
  Browse the full library →
</a>
</div>
<div class="latest-grid">
    {% if latest_radonc %}
      {% include post-card.html post=latest_radonc %}
    {% endif %}
{% if latest_horizon %}
{% include post-card.html post=latest_horizon %}
{% endif %}
</div>
</section>
<section
  class="section-block scan-section"
  aria-labelledby="publications-heading">
<div class="section-heading">
    <div>
      <p class="section-kicker">Recurring publications</p>
      <h2 id="publications-heading">Choose your scan</h2>
    </div>
  </div>
<div class="scan-comparison">
    {% for publication in site.data.publications limit:2 %}
      <article
        class="scan-comparison__item scan-comparison__item--{{ publication.id }}">
    <div class="scan-comparison__content">
      <p class="publication-card__cadence">
        {{ publication.cadence }}
      </p>

      <h3>
        <a href="{{ publication.url | relative_url }}">
          {{ publication.title }}
        </a>
      </h3>

      <p>{{ publication.description }}</p>
    </div>

    <div class="scan-comparison__footer">
      <p>
        <strong>Designed for</strong><br>
        {{ publication.audience_short | default: publication.audience }}
      </p>

      <a
        class="text-link"
        href="{{ publication.url | relative_url }}">
        View publication →
      </a>
    </div>
</article>
{% endfor %}
</div>
</section>
<section class="value-strip" aria-label="Editorial principles">
  <div>
    <strong>Ranked</strong>
    <span>Clinical importance, not publication hype</span>
  </div>
<div>
    <strong>Critical</strong>
    <span>Limitations and implementation readiness included</span>
  </div>
<div>
    <strong>Transparent</strong>
    <span>Sources, methods, and evidence maturity made explicit</span>
  </div>
</section>
{% include newsletter-signup.html %}
<section class="section-block" aria-labelledby="featured-thinking">
  <div class="section-heading">
    <div>
      <p class="section-kicker">From the Lab</p>
      <h2 id="featured-thinking">Essays, methods, and deep dives</h2>
    </div>
  </div>
<div class="compact-link-grid">
    {% assign deep_dives = sorted_posts | where: "series", "deep-dive" %}
{% for post in deep_dives limit:3 %}
<a class="compact-link-card" href="{{ post.url | relative_url }}">
<span>{{ post.title }}</span>
<small>{{ post.summary }}</small>
</a>
{% endfor %}
</div>
</section>
<section class="section-block" aria-labelledby="projects-heading">
  <div class="section-heading">
    <div>
      <p class="section-kicker">Selected projects</p>
      <h2 id="projects-heading">Building and investigating</h2>
    </div>
<a class="text-link" href="{{ '/projects/' | relative_url }}">
  View all projects →
</a>
</div>
<div class="projects-grid projects-grid--compact">
    {% assign featured_projects = site.data.projects
      | where: "featured", true
      | sort: "order" %}
{% for project in featured_projects %}
<a class="project-tile" href="{{ project.url | relative_url }}">
<div class="project-tile-image-wrapper">
<imgsrc="{{ project.img | relative_url }}"alt=""loading="lazy">
</div>
    <div class="project-tile-text">
      <h3>{{ project.title }}</h3>
      <p>{{ project.blurb }}</p>
    </div>
</a>
{% endfor %}
</div>
</section>
