import { siteData } from "./site-data.js";
import { renderLandingPage } from "./render.js";

const root = document.querySelector("[data-app]");

if (root) {
  root.innerHTML = renderLandingPage(siteData);
}

const form = document.querySelector("[data-newsletter-form]");
const note = document.querySelector("[data-form-note]");

if (form && note) {
  form.addEventListener("submit", (event) => {
    const formAction = form.getAttribute("action") || "";

    if (formAction.includes("your-publication-id")) {
      event.preventDefault();
      note.textContent = siteData.newsletter.placeholderMessage;
      return;
    }

    note.textContent = siteData.newsletter.successMessage;
  });
}
