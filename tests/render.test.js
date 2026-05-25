import test from "node:test";
import assert from "node:assert/strict";

import { siteData } from "../src/site-data.js";
import { renderGuidePage, renderGuidesIndexPage, renderLandingPage } from "../src/render.js";

test("renders hero, tool cards, monetization links, and newsletter action", () => {
  const html = renderLandingPage(siteData);

  assert.match(html, /Ship an AI stack in 60 minutes/i);
  assert.match(html, /Featured Stack/i);
  assert.match(html, /Guides Hub/i);
  assert.match(html, /newsletter/i);
  assert.equal((html.match(/data-tool-card=/g) || []).length, 3);
  assert.match(html, /ref=stackradar/i);
  assert.match(html, /action="https:\/\/buttondown\.email\/api\/emails\/embed-subscribe\/your-publication-id"/i);
  assert.match(html, /best-ai-tools-for-founders\/index\.html/i);
  assert.equal(siteData.pages.length, 10);
});

test("renders a guide page with affiliate disclosure and CTA", () => {
  const html = renderGuidePage(siteData.pages[0], siteData);

  assert.match(html, /Affiliate disclosure/i);
  assert.match(html, /Best AI Tools for Founders/i);
  assert.match(html, /Open deal/i);
  assert.match(html, /Join the launch memo/i);
});

test("renders a guides index page with category sections", () => {
  const html = renderGuidesIndexPage(siteData);

  assert.match(html, /All Conversion Guides/i);
  assert.match(html, /Comparisons/i);
  assert.match(html, /Launch Playbooks/i);
  assert.match(html, /best-ai-tools-for-marketing-teams\/index\.html/i);
});
