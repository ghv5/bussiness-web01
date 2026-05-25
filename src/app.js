import { siteData } from "./site-data.js";
import { renderLandingPage } from "./render.js";

const root = document.querySelector("[data-app]");
const pageName = document.body.dataset.page || "home";

const ensureAnalyticsScript = () => {
  if (siteData.analytics.provider === "umami" && siteData.analytics.scriptUrl && siteData.analytics.websiteId) {
    if (!document.querySelector(`script[src="${siteData.analytics.scriptUrl}"]`)) {
      const script = document.createElement("script");
      script.defer = true;
      script.src = siteData.analytics.scriptUrl;
      script.dataset.websiteId = siteData.analytics.websiteId;
      document.head.append(script);
    }
  }

  if (siteData.analytics.provider === "ga4" && siteData.analytics.gaMeasurementId) {
    if (!document.querySelector(`script[src="https://www.googletagmanager.com/gtag/js?id=${siteData.analytics.gaMeasurementId}"]`)) {
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${siteData.analytics.gaMeasurementId}`;
      document.head.append(script);
    }

    window.dataLayer = window.dataLayer || [];
    window.gtag =
      window.gtag ||
      function gtag() {
        window.dataLayer.push(arguments);
      };
    window.gtag("js", new Date());
    window.gtag("config", siteData.analytics.gaMeasurementId);
  }
};

ensureAnalyticsScript();

if (root) {
  root.innerHTML = renderLandingPage(siteData);
}

const trackEvent = (eventName, payload) => {
  if (typeof window.umami === "function") {
    window.umami(eventName, payload);
    return;
  }

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, payload);
    return;
  }

  const existing = JSON.parse(window.localStorage.getItem("stackradar-events") || "[]");
  const nextEvents = [...existing, { eventName, payload, at: new Date().toISOString() }].slice(-50);

  window.localStorage.setItem("stackradar-events", JSON.stringify(nextEvents));
};

const form = document.querySelector("[data-newsletter-form]");
const note = document.querySelector("[data-form-note]");

if (form && note) {
  form.addEventListener("submit", (event) => {
    const formAction = form.getAttribute("action") || "";

    if (formAction.includes("your-publication-id")) {
      event.preventDefault();
      note.textContent = siteData.newsletter.placeholderMessage;
      trackEvent("newsletter_blocked_placeholder", { page: pageName });
      return;
    }

    note.textContent = siteData.newsletter.successMessage;
    trackEvent("newsletter_submit", { page: pageName, provider: siteData.analytics.provider || "none" });
  });
}

document.querySelectorAll("[data-track='affiliate-click']").forEach((link) => {
  link.addEventListener("click", () => {
    trackEvent("affiliate_click", {
      page: pageName,
      tool: link.dataset.tool || "unknown",
      href: link.getAttribute("href") || ""
    });
  });
});
