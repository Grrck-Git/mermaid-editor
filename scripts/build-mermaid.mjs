import { build } from "esbuild";

export default function buildMermaid(outdir) {
  return build({
    stdin: {
      contents: 'export { default as mermaid } from "mermaid"; export { Canvg } from "canvg";',
      resolveDir: process.cwd(),
      sourcefile: "renderer.js"
    },
    entryNames: "renderer",
    outdir,
    bundle: true,
    splitting: true,
    format: "esm",
    target: "es2022",
    minify: true,
    legalComments: "linked"
  });
}
