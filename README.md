# Evans Makori — Portfolio

Personal portfolio site for **Evans Moitui Makori**, Data Scientist & Analytics Engineer, hosted with GitHub Pages.

**Live site:** https://evansmakori.github.io/

## Pages

- `index.html` — single-page portfolio (projects, dashboards, skills, experience, credentials, contact)
- `resume.html` — printable résumé (use the **Print / Save PDF** button)
- `Evans_Moitui_Makori_CV.pdf` — downloadable CV linked from the hero
- `404.html` — custom not-found page

## Tech

Plain HTML + CSS + vanilla JS — no build step required.

- Dark gradient theme with Space Grotesk + IBM Plex Sans
- Scroll-reveal animations (respects `prefers-reduced-motion`)
- Accessible: skip link, focus-visible styles, ARIA-labeled nav, mobile hamburger menu
- SEO: meta/OG tags, JSON-LD Person schema, `robots.txt`, `sitemap.xml`

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
# Python
python -m http.server 8000
# Node
npx serve .
```

## Deploy

Push to the `main` branch — GitHub Pages publishes from `https://github.com/evansmakori/evansmakori.github.io`.

## Customize

- Replace `assets/headshot.jpg`, `assets/favicon.png`, and `assets/og-image.jpg` with your own files.
- Add real project/dashboard screenshots to the cards in `index.html`.
- Edit `resume.html` with your latest experience and credentials.
- The two former "Live demo" app links (PolySignal & Fashion Fusion) were removed because their deployments are offline — repoint them to working URLs or add screenshots when republished.

