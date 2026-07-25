# JC Social Media Growth Portfolio

A responsive, premium portfolio website for **Jherson Cabiling — Social Media Growth Strategist**. The site is rebuilt from scratch in original code and is designed to work as a free static deployment on GitHub Pages.

## Project overview

- Premium dark navy, indigo, purple, and electric-blue visual system
- Fixed desktop sidebar and compact mobile navigation
- Responsive hero, services, projects, industries, tools, testimonials, and contact sections
- Accessible focus states, semantic markup, useful alt text, and labeled form controls
- Active section navigation, smooth scrolling, reveal effects, and reduced-motion support
- Browser-side contact form validation with a clear preview-only confirmation
- SEO metadata, Open Graph image, favicon, and structured data
- No invented results, metrics, client identities, or testimonials

## File structure

```text
jc-social-media-growth-portfolio/
├── .gitignore
├── .nojekyll
├── index.html
├── IMAGE_REPLACEMENT_GUIDE.md
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   │   ├── jherson-portrait.webp
│   │   ├── project-mja-property.webp
│   │   ├── project-ai-academy.webp
│   │   ├── project-caregiver.webp
│   │   ├── project-ai-portfolio.webp
│   │   ├── project-lead-generation.webp
│   │   ├── project-facebook-ads.webp
│   │   ├── project-insurance.webp
│   │   ├── project-restaurant.webp
│   │   └── og-image.jpg
│   └── icons/
│       └── favicon.svg
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## Preview locally

From the project folder, run:

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal. Vite is used only as lightweight development and build tooling; the website itself remains plain HTML, CSS, and JavaScript.

To verify a production build, run `npm run build`.

## Replace images and links

Follow `IMAGE_REPLACEMENT_GUIDE.md` for the exact final filenames, sections,
dimensions, aspect ratios, and replacement steps.

The approved portrait and project artwork are integrated. Add testimonials only
when verified feedback is approved for publication.

## Contact form

The Phase 1 form validates input in the browser but does not send data to a server. Connect it later to an approved backend, email provider, or form service. The current confirmation explicitly tells visitors that no message was transmitted.

## Deploy with GitHub Pages

Do this only after final review and approval:

1. Create a new GitHub repository.
2. Upload the complete contents of this folder to the repository root.
3. Open the repository’s **Settings**.
4. Select **Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select the main branch and the root `/` folder.
7. Save and wait for GitHub to provide the public URL.
8. Add that final URL to the canonical and Open Graph metadata in `index.html`.

The root `.nojekyll` file is included for GitHub Pages compatibility. Vite is
configured with the relative base path `./`, so the production build also works
from a repository subpath.

## Phase 1 review checklist

- Add only verified testimonials
- Confirm the final email and CTA destinations
- Add the final canonical and Open Graph deployment URL
- Connect the contact form backend after approval
- Re-test desktop, tablet, and mobile layouts before publishing
