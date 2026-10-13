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

## Update the content

Edit **`src/data/portfolio.ts`**. It is the factual source for the website’s content.

- **Portrait:** add your photo to `public/`, then change `profile.portrait` from `null` to `'/portrait.webp'`. The illustrated frame will display your photo automatically.
- **Resume:** replace `public/Angeline-Nusalim-Resume.pdf`. Keep the filename or update `profile.resume`.
- **New projects:** add a `Project` object to `projects` with a unique ID. Unknown IDs get an honest “preview coming soon” visual; adding a `screenshot` displays that image instead. Adding content needs no changes to the page layout.
- **Screenshots:** put an image in `public/projects/`, then set the project’s `screenshot` to its path. Actual screenshots replace the recreated preview.
- **Links:** set `github` and `live` to verified URLs. `null` means no link is rendered. The quiz has a verified live URL and GitHub repository; the spell checker has a verified repository. Facial recognition and rewards links are pending.
- **Experience, education, and skills:** update the corresponding arrays. The Rise Above role remains “Present” according to the resume; update it when appropriate.
- **Personal photos:** set `personalPhotos[i].image` to a local image path and edit its label. Empty slots explicitly say they are for future photos.
- **Appearance:** palette variables are at the beginning of `styles.css`. Fonts are Cormorant Garamond, DM Sans, and Caveat, all served locally through the build. There are no Google Fonts network requests.

## What the interactions do

- Smooth section links, active navigation, scroll reveals, and a small pointer response on the portrait frame.
- The bunny says hello when clicked or activated with a keyboard.
- Quiz preview: one locally scored sample question, answer feedback, and reset. It uses no AI API.
- Facial recognition: a toggle between the documented 47.0% baseline and 57.3% result with temporal modeling. The illustrative faces are SVGs, not RAVDESS images. The architecture schematic is conceptual; it does not claim that BiLSTM and Transformer were a single combined model.
- Rewards: two interactive tabs in a clearly labeled interface concept. This does not claim payment integration or financial functionality.
- Spell checker: a 16-word JavaScript hash-table recreation using eight buckets and separate chaining. It shows a selected bucket, its chain, dictionary lookup, and nearby spelling suggestions. It is not the original C++ program.
- Project notes: native modal dialogs with focus trapping, Escape dismissal, and restored focus.
- Contact: a real `mailto:` link, clipboard copy with a selectable fallback, LinkedIn, GitHub, and resume download. There is no simulated contact form.
- Coursework expands through a native keyboard-accessible `details` element.

Reduced-motion settings disable smooth scrolling, reveals, pointer tilt, and transitions. Content is still fully readable without animation. Decorative images have empty alternative text; the interactive bunny has a descriptive button label. A skip link, semantic regions, and visible focus styles support keyboard navigation.

## Deploy with GitHub and Netlify

1. Create a **new, separate GitHub repository** for this portfolio. Do not use the quiz project’s repository or its existing Netlify site.
2. Commit these files, including `package-lock.json`, and push them to the new repository. The `.gitignore` excludes `node_modules/`, `dist/`, local environment files, and verification screenshots.
3. In Netlify, choose **Add new project → Import an existing project**, select GitHub, and select the new portfolio repository.
4. Use the repository root as the base directory, `npm run build` as the build command, and `dist` as the publish directory. `netlify.toml` already supplies these settings and Node 22.20.0.
5. Deploy. Future pushes to the selected production branch will rebuild the portfolio. No Railway service or environment variables are needed.
6. Once you have the final Netlify/custom domain, update the Open Graph image in `index.html` to an **absolute** URL, e.g. `https://YOUR-DOMAIN/og-image.png`. Add an `og:url` and a canonical link using that actual domain. Relative images work locally but some social crawlers require absolute URLs. No fictional domain is included in this project.

You can also upload the built `dist/` folder using Netlify’s manual deploy interface. A GitHub-connected deployment is easier to maintain.

This task prepares the complete website and deployment files locally. It does not create a GitHub repository or change any hosted deployment.

## Content and asset provenance

The user approved the most recent SWE resume, `Angeline_SWE_Resume (33).pdf`, downloaded October 12, 2026. The copied PDF is unchanged. Education dates, GPAs, experience, skills, and project results were checked against it.

The current quiz project’s upload handlers, document parsing tests, README, and React upload interface confirm implemented handling of text-based PDF, PPTX, DOCX, TXT, and Markdown. The portfolio notes limitations, including no OCR. Its live site returned HTTP 200; the portfolio does not claim that every local implementation change has reached that deployment.

GitHub’s public repository listing confirmed Angeline’s profile, `ai-quiz-generator`, and `spell-checker`. Other project repositories were not found in that public listing and are not invented.

Original decorative artwork is from `/Users/angelinenusalim/ai-quiz-generator/quiz_decor.zip`. The portfolio reuses the already prepared transparent PNG derivatives as optimized WebP encodings; no artwork was redrawn or recolored. `public/decor/asset-sources.json` records source PNGs and preparation. The original ZIP and quiz application are untouched. Bunny favicon assets are copied from the same project.

Design research: [Zach Jordan](https://www.zachjordan.io/) informed direct introductions and easy project exploration; [Radnaabazar Bulgan](https://www.radnaabazar.com/en) informed playful personal interactions and deeper project content. [Sumanth Samala](https://sumanthsamala.com/) was opened but remained at its introductory name screen in the available browser, so further interactions could not be verified. No reference code, branding, or illustration is copied.

## Still to add

- More optional personal photos for the remaining scrapbook slot.
- Actual project screenshots, especially for the rewards app.
- Facial recognition and rewards repository/demo URLs, if public.
- Your final portfolio domain for absolute social metadata.

Everything else has real content or functional local behavior. See `VERIFICATION.md` for the checks actually completed.

## About, photo, and FER update

The About Me section now uses a professional first-person introduction, drawing on the supplied data and design resumes. It includes fraud classification work and Figma-based UI/UX collaboration for ISAUW’s Resource Hub. Existing font families, font sizes, section layout, colors, and animations are preserved.

The hero uses `IMG_6187.JPG`, and one scrapbook slot uses `IMG_0214.JPG`. Optimized, proportionally resized WebP copies are in `public/photos/`; EXIF orientation is applied to the second photo. No facial edits or filters were used. Source files are unchanged.

The FER case study includes the actual poster PDF, architecture diagram, per-class accuracy graph, and three confusion matrices in `public/projects/fer/`. Figure crops are rendered at 150 dpi and losslessly encoded. Source coordinates are recorded in `asset-sources.json`. The table in `FERMaterials.tsx` uses `ferResults` from the data file and keeps validation and test accuracy separate. Figures link to full-resolution images; the poster opens directly as a PDF.

The poster agrees with the resume’s 47.0% baseline and 57.3% temporal test result. It adds Transformer test results of 53.7% with positional encoding and 57.0% without it. The “Happy 94%” graphic is an illustrative prediction, not a model score. The poster does not identify which positional-encoding variant produced its Transformer confusion matrix, so that figure is not assigned to a variant. No training/loss curves, source notebooks, or actual video-frame examples were supplied; none were invented.

The BCA role is titled differently in the data and SWE resumes. This update does not replace the existing timeline title; the About wording describes the shared, documented data-workflow experience without overstating system ownership.
