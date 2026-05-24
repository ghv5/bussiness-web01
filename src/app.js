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
    event.preventDefault();
    const email = new FormData(form).get("email");

    note.textContent = `Lead captured for ${email}. Replace this stub with your email platform endpoint before launch.`;
    form.reset();
  });
}
