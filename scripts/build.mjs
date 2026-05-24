import { cp, mkdir, rm, writeFile } from "node:fs/promises";

import { guidePages } from "../src/page-template.js";

await rm(new URL("../dist", import.meta.url), { recursive: true, force: true });
await mkdir(new URL("../dist/src", import.meta.url), { recursive: true });

await cp(new URL("../index.html", import.meta.url), new URL("../dist/index.html", import.meta.url));
await cp(new URL("../src/app.js", import.meta.url), new URL("../dist/src/app.js", import.meta.url));
await cp(new URL("../src/site-data.js", import.meta.url), new URL("../dist/src/site-data.js", import.meta.url));
await cp(new URL("../src/render.js", import.meta.url), new URL("../dist/src/render.js", import.meta.url));
await cp(new URL("../src/styles.css", import.meta.url), new URL("../dist/src/styles.css", import.meta.url));

for (const page of guidePages) {
  const pageDirectory = new URL(`../dist/pages/${page.slug}/`, import.meta.url);
  await mkdir(pageDirectory, { recursive: true });
  await writeFile(new URL("index.html", pageDirectory), page.html);
}
