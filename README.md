# Angeline Nusalim · Portfolio

A React, Vite, and TypeScript portfolio in cream, blush, and berry. Editorial serif type meets watercolor illustrations from Angeline’s own `quiz_decor.zip`. This is a separate project: it does not import, run, modify, or deploy the AI Quiz Generator.

## Run it

Use Node.js **22.20 or newer**.

```sh
npm ci
npm run dev
```

Open **http://127.0.0.1:5174/**. Port 5174 is intentional so the portfolio can run alongside the quiz project.

```sh
npm run build
npm run preview
```

The build checks TypeScript and produces `dist/`. The production preview is **http://127.0.0.1:4174/**. There are no API keys, accounts, backend services, or environment variables to configure.

If your npm cache has a permissions problem, use `npm ci --cache /private/tmp/angeline-portfolio-npm-cache`.

## Project structure

```text
src/
  App.tsx                     Page sections and scroll behavior
  main.tsx                    Entry point and self-hosted fonts
  styles.css                  Palette, layouts, animations, breakpoints
  data/portfolio.ts           Profile, projects, experience, education, skills, photos
  components/
    Icon.tsx                  Small SVG interface icons
    ProjectPreviews.tsx       Four interactive project presentations
    ProjectDialog.tsx         Accessible native case-study dialog
public/
  Angeline-Nusalim-Resume.pdf  Actual supplied resume, unchanged
  decor/                      Optimized original illustrations and provenance
  favicon.png                 Original bunny favicon
  apple-touch-icon.png
  og-image.png                Social sharing image
  og-image.svg                Editable vector source for the sharing image
index.html                    SEO and Open Graph metadata
netlify.toml                  Static deployment and cache configuration
VERIFICATION.md               Checks performed and their limits
```
