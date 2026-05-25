# StackRadar AI MVP

A static GitHub Pages site for validating an `AI tools comparison + template lead magnet` business in one hour.

## What is included

- A designed landing page with:
  - featured affiliate stack
  - monetization model section
  - template lead magnet section
  - newsletter capture stub
- Zero-dependency build script
- GitHub Pages deployment workflow
- Minimal Node test for core page rendering

## Local development

```bash
npm test
npm run build
npm run dev
```

Then open `http://localhost:4173`.

## GitHub Pages deployment

1. Push this repo to GitHub.
2. In `Settings > Pages`, set `Source` to `GitHub Actions`.
3. Push to `main`.
4. GitHub Actions will build `dist/` and publish the site.

## First monetization tasks

1. Replace placeholder affiliate links in [src/site-data.js](/Users/mac/pspace/github/cloud/src/site-data.js).
2. Replace `newsletter.formAction` in [src/site-data.js](/Users/mac/pspace/github/cloud/src/site-data.js) with your live Beehiiv, ConvertKit, or Buttondown form endpoint.
3. Publish 3 supporting pages:
   - `best-ai-tools-for-founders`
   - `jasper-vs-chatgpt-for-landing-pages`
   - `how-to-launch-an-ai-affiliate-site-in-a-weekend`

## Suggested next iteration

- Add dedicated comparison pages per tool category.
- Move the site data into a JSON or CMS source.
- Add analytics and event tracking for outbound affiliate clicks.

## Analytics

- Configure analytics in [src/site-data.js](/Users/mac/pspace/github/cloud/src/site-data.js).
- Supported values:
  - `provider: "umami"` with `scriptUrl` and `websiteId`
  - `provider: "ga4"` with `gaMeasurementId`
- Tracked events:
  - `affiliate_click`
  - `newsletter_submit`
  - `newsletter_blocked_placeholder`
- If no provider is configured yet, recent events are stored in `localStorage` under `stackradar-events` for quick browser-side inspection.

## SEO files

- Sitemap: `/sitemap.xml`
- Robots: `/robots.txt`
