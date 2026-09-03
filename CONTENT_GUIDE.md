# Content Guide

## Running the site locally

```bash
npm run dev
```

Opens at http://localhost:4321. Edits to content/pages hot-reload automatically.

## Editing your identity/bio

Edit `src/site.config.ts` — name, role, tagline, email, social links, about text, skills list.
Put your resume PDF at `public/resume.pdf` (matches the default `resumeHref`).

## Adding a project

Create a new file in `src/content/projects/`, e.g. `src/content/projects/my-robot-arm.md`:

```markdown
---
title: "6-DOF Robot Arm"
summary: "One-sentence summary shown on the project card."
date: 2026-02-01
tags: ["SolidWorks", "ROS2", "Controls"]
featured: true          # show on homepage
cover: "./cover.jpg"    # optional, relative to this file
gallery: ["./photo1.jpg", "./photo2.jpg"]   # optional
video: "https://www.youtube.com/embed/VIDEO_ID"  # optional, must be an /embed/ URL
model: "/models/arm.glb"        # optional, see 3D Models section below
links:
  github: "https://github.com/you/repo"
  demo: "https://your-demo-link.com"
---

Full write-up in Markdown goes here. Use `##` headings, bullet lists, etc.
```

To co-locate images with a project, create a folder instead of a single file:
`src/content/projects/my-robot-arm/index.md` plus `cover.jpg` in the same folder, referenced
as `cover: "./cover.jpg"`. Astro optimizes these automatically (resizing, lazy-loading).

Delete the two `example-*.md` files in that folder once you have real projects.

## Adding a paper

Create a file in `src/content/papers/`, e.g. `src/content/papers/my-paper.md`:

```markdown
---
title: "Paper Title"
authors: ["You", "Coauthor"]
venue: "IROS 2026"
date: 2026-03-01
abstract: "Short abstract shown on the papers page."
pdf: "/papers/my-paper.pdf"       # place the actual PDF in public/papers/
doi: "https://doi.org/..."         # optional
arxiv: "https://arxiv.org/abs/..." # optional
tags: ["Robotics"]
featured: true
---
```

No body text is required for papers — the abstract is enough. Put the actual PDF file at
`public/papers/my-paper.pdf` so the link works.

## Adding an interactive 3D CAD model (SolidWorks viewer)

Browsers can't open `.sldprt`/`.sldasm` files directly, so the model needs to be exported to
**glTF (.glb)** — a compact, web-friendly 3D format — once. After that, the site handles the
rotate/pan/zoom viewer automatically via the `model:` field on any project.

**Exporting from SolidWorks:**

1. Open the part or assembly.
2. `File > Save As`.
3. Set "Save as type" to **glTF (\*.glb)**. (If you don't see it, update SolidWorks or export to
   `.STEP`/`.STL` first and convert with a free tool like [Blender](https://www.blender.org/)
   or [gltf.report](https://gltf.report) / online STL→GLB converters.)
4. Keep file size reasonable for the web — if the export is large (tens of MB), use SolidWorks'
   "Simplify" or reduce resolution before exporting, or decimate the mesh in Blender.

**Adding it to the site:**

1. Drop the `.glb` file in `public/models/`, e.g. `public/models/gripper.glb`.
2. In the project's frontmatter, add: `model: "/models/gripper.glb"`.
3. (Optional) Add a `modelPoster` image (a quick render/screenshot shown before the model
   loads) — place it in `public/models/` too and reference it the same way.

That's it — the project detail page will render a full interactive viewer (drag to rotate,
scroll to zoom) with no extra code.

If you don't have SolidWorks' glTF exporter and can only export `.STL`, you can still use it —
just point `model:` at an `.stl` file instead of `.glb`; the built-in viewer supports both, but
`.glb` preserves color/materials while `.stl` is geometry-only (renders in a single gray color).

## Adding more content later

Just keep adding `.md` files to `src/content/projects/` or `src/content/papers/` — no other
code changes needed, pages update automatically. Send me new files/PDFs/images/CAD exports any
time and I'll wire them in and redeploy.

## Building for production / deploying

```bash
npm run build    # outputs static site to dist/
npm run preview  # preview the production build locally
```

Ask when you're ready to deploy — GitHub Pages, Netlify, and Vercel are all good free options
for a static Astro site like this one.
