# Verification

Checks recorded October 12, 2026 (America/Los_Angeles).

## Build and assets

- `npm install` completed; the resulting lockfile is included.
- npm reported **zero known vulnerabilities** for the installed dependency set at installation time.
- `npm run build` passed TypeScript checking and Vite’s production build.
- Local development preview returned HTTP 200 on its separate port, 5174.
- Final production preview returned HTTP 200 on port 4174; resume and sharing image returned the correct `application/pdf` and `image/png` content types. The temporary development server was stopped after the production preview opened.
- SHA-256 checks confirm the downloadable resume is byte-for-byte identical to the approved PDF.
- All ten rendered illustration instances loaded successfully; no broken images were reported by the browser.
- All in-page anchor targets exist, there is one `h1`, all buttons have accessible names, and all inputs have labels.
- Actual resume PDF is copied unchanged and the download links refer to it.
- Open Graph raster and editable vector assets, bunny favicon, and Apple touch icon are present.

## Browser interaction checks

The real website was inspected and exercised with the Codex in-app browser, without mocked project APIs.

- Hero bunny click changes the greeting.
- “Explore my work” navigates to the projects section.
- Quiz answer O(1) produces correct-answer feedback.
- AI project notes open as a native modal. Focus enters the close button; Escape dismisses it; focus returns to the triggering project button.
- Facial recognition project notes open and remain readable on mobile.
- Temporal-model toggle switches the displayed result from 57.3% to 47.0%.
- Mobile phone concept changes from Overview to Cards with the appropriate content.
- Spell demo detects `curiosoty` as absent and suggests `curiosity`; selecting it produces a successful lookup.
- “Copy email” displays “Copied!” and the browser clipboard contains the actual email address.
- Tab navigation proceeds from Copy email to Download résumé.
- Mobile navigation opens, displays the section links, and closes after selecting Work.
- No console warnings or errors were reported during the interaction checks.

## Responsive checks

| Viewport width | Horizontal overflow | Loaded-image failures | Unnamed buttons / unlabeled inputs |
| -------------- | ------------------- | --------------------- | ---------------------------------- |
| 320px          | None                | None                  | None                               |
| 375px          | None                | None                  | None                               |
| 390px          | None                | None                  | None                               |
| 768px          | None                | None                  | None                               |
| 1440px         | None                | None                  | None                               |

Desktop hero, project previews, tablet about composition, mobile hero, mobile navigation, and mobile project dialog were visually inspected. Body and skill text were enlarged during QA and touch targets were increased for the interactive previews. The mobile decorative note was spaced away from the portrait frame.

## Links and factual verification

- The live quiz URL and spell-checker repository returned HTTP 200.
- Public GitHub API listing verified the profile and quiz / spell repositories.
- Email and LinkedIn match the approved resume. The LinkedIn profile was not authenticated or independently verified.
- Education, dates, GPAs, roles, skill lists, team size, architectures, dataset, and 47.0% / 57.3% accuracy results were compared with the approved resume.
- Quiz document support was inspected in the separate project’s source and tests. That application was not changed or started by this task.

## Verification limits

- Netlify configuration and static build output are prepared. An actual Netlify or GitHub publication is **not** performed by this task.
- There is no real portfolio domain yet, so absolute Open Graph URL and canonical metadata await deployment.
- Reduced-motion behavior was checked in source: CSS disables transitions/reveals/smooth scrolling, and the pointer handler checks the preference. Browser emulation of that preference was not available; it was not tested by changing the user’s operating-system settings.
- This is an accessibility basics review, not a screen-reader audit or complete WCAG certification.
- The browser’s mail application handoff was not triggered. The actual `mailto:` destination was checked.
- Performance review covers optimized local images, self-hosted fonts, lazy loading, and the production bundle. No Lighthouse/Core Web Vitals report or slow-network device test was run.
- Quiz generation on the live project was not invoked. Its current local code and live landing-page availability were verified; feature parity of that deployment was not assumed.

Portrait and personal photos, actual project screenshots, missing project URLs, and final domain remain honest, editable placeholders.

## About, photos, and FER follow-up

The About Me copy was rewritten in the first person with documented data and design experience. The supplied design and data resumes were read and visually reviewed. UW and June 2027 are retained; banking work is described without claiming ownership of enterprise systems. The two BCA title variants were noted in the README; the existing timeline was not silently changed.

The original stylesheet remains byte-for-byte unchanged. Existing font sizes, font families, palette, layouts, and animation rules are retained. A separate stylesheet only formats the new FER figures and table. Other project descriptions, experience, skills, coursework, and education data match the prior version.

Both actual photos are integrated as optimized WebP copies with proportional dimensions, correct orientation, and descriptive alt text. The hero uses the pink-hat photo; one scrapbook slot uses the indoor fountain photo. No facial retouching or filters were applied.

The poster PDF is copied byte-for-byte unchanged. Its architecture schematic, per-class chart, and three confusion matrices were extracted and visually reviewed. Cropping was adjusted to retain all headings and chart legends. All five figures loaded in the project modal. The poster, architecture image, and portrait returned HTTP 200 with the correct content types.

All eight model accuracy values in the table match the poster. Validation and test values are separate, and the original 47.0% / 57.3% results agree with the poster. The architectural “Happy 94%” is explicitly labeled as an illustrative prediction. No unprovided training curves, input frames, or screenshots were fabricated. The Transformer confusion matrix is not attributed to a positional-encoding variant because the poster does not specify one.

The production build passes after the update. At 320px, the new table fits inside the modal, and neither the modal nor the page has horizontal overflow. Escape closes the modal and restores focus to its triggering button. Desktop portrait and About layouts were visually inspected. Font enlargement from the pasted brief was superseded by the user’s explicit choice to keep fonts and layout unchanged.
