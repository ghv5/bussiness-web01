import test from "node:test";
import assert from "node:assert/strict";

import { siteData } from "../src/site-data.js";
import { renderLandingPage } from "../src/render.js";

test("renders hero, tool cards, and monetization links", () => {
  const html = renderLandingPage(siteData);

  assert.match(html, /Ship an AI stack in 60 minutes/i);
  assert.match(html, /Featured Stack/i);
  assert.match(html, /newsletter/i);
  assert.equal((html.match(/data-tool-card=/g) || []).length, 3);
  assert.match(html, /ref=stackradar/i);
});
