const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const renderMetric = (metric) => `
  <div class="metric">
    <strong>${escapeHtml(metric.value)}</strong>
    <span>${escapeHtml(metric.label)}</span>
  </div>
`;

const renderCard = (tool) => `
  <article class="tool-card" data-tool-card="${escapeHtml(tool.name)}">
    <div class="tool-meta">
      <span class="pill">${escapeHtml(tool.category)}</span>
      <span class="badge">${escapeHtml(tool.badge)}</span>
    </div>
    <h3>${escapeHtml(tool.name)}</h3>
    <p>${escapeHtml(tool.description)}</p>
    <a class="text-link" href="${escapeHtml(tool.href)}" target="_blank" rel="noreferrer">Open deal</a>
  </article>
`;

const renderComparisonRow = (row) => `
  <div class="compare-row">
    <span>${escapeHtml(row.focus)}</span>
    <strong>${escapeHtml(row.winner)}</strong>
    <p>${escapeHtml(row.reason)}</p>
  </div>
`;

const renderBullet = (value) => `<li>${escapeHtml(value)}</li>`;

const renderMonetization = (item) => `
  <article class="money-card">
    <h3>${escapeHtml(item.title)}</h3>
    <p>${escapeHtml(item.detail)}</p>
  </article>
`;

export const renderLandingPage = (data) => `
  <section class="hero panel">
    <div class="hero-copy">
      <span class="eyebrow">${escapeHtml(data.announcement)}</span>
      <h1>${escapeHtml(data.title)}</h1>
      <p class="lede">${escapeHtml(data.subtitle)}</p>
      <div class="hero-actions">
        <a class="button button-primary" href="${escapeHtml(data.primaryCta.href)}">${escapeHtml(data.primaryCta.label)}</a>
        <a class="button button-secondary" href="${escapeHtml(data.secondaryCta.href)}">${escapeHtml(data.secondaryCta.label)}</a>
      </div>
    </div>
    <div class="hero-aside">
      ${data.metrics.map(renderMetric).join("")}
    </div>
  </section>

  <section class="featured" id="featured-stack">
    <div class="section-heading">
      <span>Featured Stack</span>
      <h2>Three tools, one monetization-ready launch path</h2>
    </div>
    <div class="tool-grid">
      ${data.featuredStack.map(renderCard).join("")}
    </div>
  </section>

  <section class="compare panel">
    <div class="section-heading">
      <span>What to use first</span>
      <h2>Pick the stack by outcome, not hype</h2>
    </div>
    <div class="compare-table">
      ${data.comparisonRows.map(renderComparisonRow).join("")}
    </div>
  </section>

  <section class="templates">
    <div class="section-heading">
      <span>Template Library</span>
      <h2>Content you can publish this week</h2>
    </div>
    <ul class="template-list">
      ${data.templates.map(renderBullet).join("")}
    </ul>
  </section>

  <section class="monetization panel" id="monetization">
    <div class="section-heading">
      <span>Monetization</span>
      <h2>Three direct ways to turn traffic into cash</h2>
    </div>
    <div class="money-grid">
      ${data.monetization.map(renderMonetization).join("")}
    </div>
  </section>

  <section class="newsletter panel" id="newsletter">
    <div class="section-heading">
      <span>newsletter</span>
      <h2>${escapeHtml(data.newsletter.title)}</h2>
    </div>
    <p>${escapeHtml(data.newsletter.description)}</p>
    <form class="signup-form" data-newsletter-form>
      <label>
        <span>Email</span>
        <input type="email" name="email" placeholder="you@company.com" required />
      </label>
      <button class="button button-primary" type="submit">${escapeHtml(data.newsletter.ctaLabel)}</button>
    </form>
    <p class="form-note" data-form-note>Connect this form to Beehiiv, ConvertKit, or Buttondown to start collecting leads.</p>
  </section>
`;
