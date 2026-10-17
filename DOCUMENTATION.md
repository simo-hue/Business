
- [2026-10-17 10:22 Europe/Budapest]: ComplAI graphical landing page — iteration one
- *Details*: Implemented an English, customer-first landing page with an elegant minimal off-white and muted-green design. Includes core value proposition, an illustrative four-framework dashboard (GDPR, EU AI Act, NIS2, DORA), the materials/assessment/legal-review journey, FAQs, and disabled early-access and demo placeholders. No pricing, live assessments, sign-up collection, or backend. Demo implementation is reserved for iteration two.
- *Tech Notes*: Self-contained HTML/CSS in `complai/dist/`, with responsive layouts, semantic navigation, native FAQ disclosures, reduced-motion support, and no third-party dependencies. Sites project identity stored in `complai/.openai/hosting.json`. Private publication initiated through Sites. HTTP 200 verified locally; section targets and disabled controls verified by terminal check; desktop/mobile appearance and early-access anchor checked in browser; mobile document width equals viewport width (no horizontal overflow). No manual setup required.
- *Deployment*: Private publication succeeded: https://complai-concept.milkycalf8.chatgpt.site. Opened the deployed site in the preview tab. Iteration one is complete; next step is user review of design and wording before iteration two.

- [2026-10-17 10:42 Europe/Budapest]: ComplAI visual redesign — clarity in motion
- *Details*: Replaced the restrained initial visual style with an asymmetric editorial hero, oversized typography with italic emphasis, an animated document-to-direction illustration, electric-lime accents, a dark dashboard showcase, and a larger closing call to action. Preserved four-framework concept coverage, disabled demo and registration controls, and no pricing.
- *Tech Notes*: Added dependency-free CSS animations and IntersectionObserver entrance effects in `complai/dist/experience.js`; respects reduced-motion settings. Added an inline SVG favicon. No backend, tracking, or new dependencies. Verified JavaScript syntax, all HTTP assets, section targets, disabled placeholders, desktop/mobile hero appearance, no horizontal overflow at 935px and 354px, and FAQ expansion via native browser interaction. Private deployment succeeded at https://complai-concept.milkycalf8.chatgpt.site (owner sign-in required). No manual setup needed.

- [2026-10-17 Europe/Budapest]: Wordmark emphasis and founders
- *Details*: Added a restrained electric-lime highlight to the AI portion of the ComplAI wordmarks, with an inverted dark treatment on the lime illustration. Added a compact “Meet the founders” section identifying Simone Mattioli and Andreas Herzinger as co-founders. Preserved the approved overall visual direction and all existing functionality.
- *Tech Notes*: HTML/CSS-only update; no dependencies or setup. Verified both exact names and styling in terminal, and visually checked the header wordmark, founder section, and footer in browser. No manual user actions required.

- [2026-10-17 Europe/Budapest]: Founder portraits
- *Details*: Added the user-provided first image to Andreas Herzinger and `simone.png` to Simone Mattioli. Portraits appear above their respective names with consistent 4:5 framing and original colors, matching the existing design.
- *Tech Notes*: Converted supplied HEIC/PNG assets to browser-compatible JPEG files under `complai/dist/assets/`. Added descriptive alt text, lazy loading, and responsive CSS image framing. Verified asset references in terminal and visually confirmed both images and name mappings in the browser. No new dependencies or manual setup.

- [2026-10-17 Europe/Budapest]: Founders introduction
- *Details*: Added a short shared introduction to the left of the founder portraits: Simone and Andreas study at EIT Digital Master School / 28DGTL, in AUSIR and Data Science respectively, and met during their entry year at ELTE in Budapest.
- *Tech Notes*: HTML/CSS-only copy and typography change, preserving the existing portrait layout. Verified exact program assignments and placement in terminal and checked the rendered section visually. No dependencies or manual setup required.

- [2026-10-17 17:17 Europe/Budapest]: GitHub Pages Deployment for ComplAI
- *Details*: Configured and published the ComplAI website to GitHub Pages under `https://simo-hue.github.io/Business/`. Untangled the nested git directory inside `complai/` to directly track static website assets (`complai/dist/`) within the `Business` repository. Created `.github/workflows/deploy.yml` to automatically deploy `complai/dist` to GitHub Pages upon push to `main`.
- *Tech Notes*: GitHub Pages configured with `build_type=workflow`. GitHub Actions workflow uses `actions/configure-pages@v5`, `actions/upload-pages-artifact@v3`, and `actions/deploy-pages@v4`. Added `.gitignore` for OS and temporary archive files. No third-party dependencies required.
