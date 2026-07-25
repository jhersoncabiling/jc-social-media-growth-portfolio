# Image Replacement Guide

The approved portrait and project images are integrated using the filenames below.

## Final image specifications

| Final required filename | Website section | Recommended dimensions | Aspect ratio |
|---|---|---:|---:|
| `jherson-portrait.webp` | Hero portrait | 1400 × 1800 px | 7:9 portrait |
| `project-mja-property.webp` | Featured Work — MJA Property Documentation | 1600 × 900 px | 16:9 |
| `project-ai-academy.webp` | Featured Work — AI Business Academy | 1600 × 900 px | 16:9 |
| `project-caregiver.webp` | Featured Work — Caregiver Portfolio Builder | 1600 × 900 px | 16:9 |
| `project-ai-portfolio.webp` | Featured Work — Personal AI Portfolio | 1600 × 900 px | 16:9 |
| `project-lead-generation.webp` | Featured Work — Lead Generation Campaign | 1600 × 900 px | 16:9 |
| `project-facebook-ads.webp` | Featured Work — Facebook Ads Campaign | 1600 × 900 px | 16:9 |
| `project-insurance.webp` | Featured Work — Insurance Marketing | 1600 × 900 px | 16:9 |
| `project-restaurant.webp` | Featured Work — Restaurant Marketing | 1600 × 900 px | 16:9 |
| `og-image.jpg` | Social-sharing preview metadata | 1200 × 630 px | 1.91:1 |
| `favicon.svg` | Browser tab/site icon | 64 × 64 viewBox | 1:1 |

## Replacement steps

1. Export the final image at the dimensions above.
2. Optimize it for web use. Use WebP for the portrait and project images, JPEG
   for the Open Graph image, and SVG for the favicon.
3. Place it in `assets/images/`, except `favicon.svg`, which belongs in
   `assets/icons/`.
4. Update the matching path in `index.html`.
5. Preserve the existing `alt` text, or revise it so it describes the final
   image accurately.
6. Run `npm run build` and recheck the page before publishing.

For the portrait, use Jherson's approved original image only. Do not generate a
different face, alter facial features, or change the approved pose and crop.
