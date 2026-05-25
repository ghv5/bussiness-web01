import { renderAnalyticsSnippet, renderGuidePage, renderGuidesIndexPage } from "./render.js";
import { siteData } from "./site-data.js";

const renderDocument = (page) => `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${page.title} | ${siteData.brand}</title>
    <meta name="description" content="${page.summary}" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&family=Space+Grotesk:wght@500;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="../../src/styles.css" />
  </head>
  <body data-page="${page.slug}">
    ${renderGuidePage(page, siteData)}
    ${renderAnalyticsSnippet(siteData, "../..")}
  </body>
</html>
`;

export const guidePages = siteData.pages.map((page) => ({
  slug: page.slug,
  html: renderDocument(page)
}));

export const guidesIndexPage = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${siteData.guidesHub.title} | ${siteData.brand}</title>
    <meta name="description" content="${siteData.guidesHub.summary}" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&family=Space+Grotesk:wght@500;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="../src/styles.css" />
  </head>
  <body data-page="guides-hub">
    ${renderGuidesIndexPage(siteData)}
    ${renderAnalyticsSnippet(siteData, "..")}
  </body>
</html>
`;

const xmlUrlSet = [
  `${siteData.siteUrl}/`,
  `${siteData.siteUrl}/guides/`,
  ...siteData.pages.map((page) => `${siteData.siteUrl}/pages/${page.slug}/`)
]
  .map((url) => `  <url><loc>${url}</loc></url>`)
  .join("\n");

export const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlUrlSet}
</urlset>
`;

export const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${siteData.siteUrl}/sitemap.xml
`;
