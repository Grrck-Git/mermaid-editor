import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import buildMermaid from "./build-mermaid.mjs";

await rm("dist", { recursive: true, force: true });
await mkdir("dist");
await cp("assets", "dist/assets", { recursive: true });
await cp("LICENSE", "dist/LICENSE");

const source = await readFile("mermaid/index.html", "utf8");
const standalone = source
  .replace('href="/assets/editor-chrome.css"', 'href="./assets/editor-chrome.css"')
  .replace('class="editor-home" href="/"', 'class="editor-home" href="https://garrick.co/"');
await writeFile("dist/index.html", standalone);
await buildMermaid("dist/vendor");
