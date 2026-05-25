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

const renderPageLink = (page) => `
  <article class="page-card">
    <span class="pill">${escapeHtml(page.category)}</span>
    <h3>${escapeHtml(page.title)}</h3>
    <p>${escapeHtml(page.summary)}</p>
    <a class="text-link" href="./pages/${escapeHtml(page.slug)}/index.html">Read page</a>
  </article>
`;

const renderGuideTool = (tool) => `
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

const groupPagesByCategory = (pages) =>
  pages.reduce((groups, page) => {
    const nextGroups = { ...groups };
    const existing = nextGroups[page.category] || [];

    nextGroups[page.category] = [...existing, page];
    return nextGroups;
  }, {});

const renderGuideIndexSection = ([category, pages]) => `
  <section class="panel">
    <div class="section-heading">
      <span>${escapeHtml(category)}</span>
      <h2>${escapeHtml(category)}</h2>
    </div>
    <div class="tool-grid">
      ${pages.map((page) => `
        <article class="page-card">
          <h3>${escapeHtml(page.title)}</h3>
          <p>${escapeHtml(page.summary)}</p>
          <a class="text-link" href="../pages/${escapeHtml(page.slug)}/index.html">Read page</a>
        </article>
      `).join("")}
    </div>
  </section>
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

  <section class="featured">
    <div class="section-heading">
      <span>SEO Pages</span>
      <h2>Decision-stage pages ready for ranking and clicks</h2>
    </div>
    <div class="tool-grid">
      ${data.pages.map(renderPageLink).join("")}
    </div>
    <div class="hero-actions">
      <a class="button button-secondary" href="./guides/index.html">Open Guides Hub</a>
    </div>
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
    <form
      class="signup-form"
      data-newsletter-form
      action="${escapeHtml(data.newsletter.formAction)}"
      method="${escapeHtml(data.newsletter.formMethod)}"
      target="_blank"
    >
      <label>
        <span>Email</span>
        <input type="email" name="email" placeholder="you@company.com" required />
      </label>
      <input type="hidden" name="embed" value="1" />
      <button class="button button-primary" type="submit">${escapeHtml(data.newsletter.ctaLabel)}</button>
    </form>
    <p class="form-note" data-form-note>${escapeHtml(data.newsletter.placeholderMessage)}</p>
    <p class="disclosure">${escapeHtml(data.affiliateDisclosure)}</p>
  </section>
`;

export const renderGuidesIndexPage = (data) => {
  const groupedPages = Object.entries(groupPagesByCategory(data.pages));

  return `
    <main class="shell shell-guide">
      <header class="topbar">
        <a class="brand" href="../index.html">
          <span class="brand-mark" aria-hidden="true"></span>
          <span>${escapeHtml(data.brand)}</span>
        </a>
        <nav>
          <a href="../index.html">Home</a>
          <a href="../index.html#newsletter">Newsletter</a>
        </nav>
      </header>
      <article class="guide">
        <section class="panel">
          <span class="eyebrow">Guides Hub</span>
          <h1>${escapeHtml(data.guidesHub.title)}</h1>
          <p class="lede">${escapeHtml(data.guidesHub.summary)}</p>
          <p class="disclosure">${escapeHtml(data.affiliateDisclosure)}</p>
        </section>
        ${groupedPages.map(renderGuideIndexSection).join("")}
      </article>
    </main>
  `;
};

export const renderGuidePage = (page, data) => {
  const featuredTools = data.featuredStack.filter((tool) => page.featuredTools.includes(tool.name));

  return `
    <main class="shell shell-guide">
      <header class="topbar">
        <a class="brand" href="../../index.html">
          <span class="brand-mark" aria-hidden="true"></span>
          <span>${escapeHtml(data.brand)}</span>
        </a>
        <nav>
          <a href="../../index.html#featured-stack">Stack</a>
          <a href="../../index.html#newsletter">Newsletter</a>
        </nav>
      </header>
      <article class="guide">
        <section class="panel">
          <span class="eyebrow">Decision page</span>
          <h1>${escapeHtml(page.title)}</h1>
          <p class="lede">${escapeHtml(page.summary)}</p>
          <p>${escapeHtml(page.intro)}</p>
        </section>

        <section class="panel">
          <div class="section-heading">
            <span>Key takeaways</span>
            <h2>What this page should convert on</h2>
          </div>
          <ul class="template-list">
            ${page.bullets.map(renderBullet).join("")}
          </ul>
        </section>

        <section class="featured">
          <div class="section-heading">
            <span>Recommended stack</span>
            <h2>Use these CTAs to monetize the page</h2>
          </div>
          <div class="tool-grid">
            ${featuredTools.map(renderGuideTool).join("")}
          </div>
        </section>

        <section class="panel">
          <div class="section-heading">
            <span>Newsletter</span>
            <h2>${escapeHtml(data.newsletter.title)}</h2>
          </div>
          <p>${escapeHtml(data.newsletter.description)}</p>
          <a class="button button-primary" href="../../index.html#newsletter">${escapeHtml(data.newsletter.ctaLabel)}</a>
          <p class="disclosure">${escapeHtml(data.affiliateDisclosure)}</p>
        </section>
      </article>
    </main>
  `;
};
