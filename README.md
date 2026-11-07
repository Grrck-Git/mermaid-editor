# Garrick's Mermaid Editor

A small browser-based editor for [Mermaid](https://mermaid.js.org/) diagrams.
It includes live preview, eight starter templates, local drafts, share links,
and SVG, PNG, and Mermaid source export.

Try the [live editor on Garrick.co](https://garrick.co/mermaid/).
This repository is a standalone source snapshot for anyone who wants to use,
fork, or adapt the editor. Garrick.co is deployed separately.

## Run locally

With Node.js 22 or newer and Python 3 installed, run these commands from the
repository root.

```sh
npm ci
npm run build
python3 -m http.server 8080 --bind 127.0.0.1 --directory dist
```

Open [http://127.0.0.1:8080](http://127.0.0.1:8080). You can also publish the
contents of `dist/` on any static web host. The browser loads Mermaid, Canvg,
and the editor fonts from the same host.

## Modify or restore

Edit `mermaid/index.html` for the editor and `assets/editor-chrome.css` for
the shared typography and focus styles. Run the build again after changes.
The build adjusts the stylesheet and home links for standalone hosting.
The original editor HTML in the `v1.0.0` tag is a byte-for-byte copy of
the Garrick.co editor captured on November 7, 2026.

Shared links contain the source diagram. Anyone with the link can read it.
Shared and imported diagrams wait for you to review their source and select
**Render**.

## License

The editor source and documentation are available under the [MIT License](LICENSE).
The dependencies retain their own licenses, including the SIL Open Font
License notices for IBM Plex in `assets/fonts/`.
