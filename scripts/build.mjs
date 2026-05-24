import { cp, mkdir, rm } from "node:fs/promises";

await rm(new URL("../dist", import.meta.url), { recursive: true, force: true });
await mkdir(new URL("../dist/src", import.meta.url), { recursive: true });

await cp(new URL("../index.html", import.meta.url), new URL("../dist/index.html", import.meta.url));
await cp(new URL("../src/app.js", import.meta.url), new URL("../dist/src/app.js", import.meta.url));
await cp(new URL("../src/site-data.js", import.meta.url), new URL("../dist/src/site-data.js", import.meta.url));
await cp(new URL("../src/render.js", import.meta.url), new URL("../dist/src/render.js", import.meta.url));
await cp(new URL("../src/styles.css", import.meta.url), new URL("../dist/src/styles.css", import.meta.url));
