# personal-art-portfolio

My art portfolio: illustration and mixed-media work in alcohol markers, colored pencils,
and 3D-printed tiles. Designed like a cut-and-paste zine, with pieces taped onto the page.

**Live site:** https://sususu1153.github.io/personal-art-portfolio/

## Stack

- [Astro](https://astro.build) static site; one small script for the paste-in and typewriter
  animations (the site works fully without it)
- Plain CSS, fonts self-hosted with Fontsource (Archivo Black, Courier Prime)
- Images processed at build time into responsive WebP sizes
- Deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`

## Structure

```
src/
  assets/art/        artwork images (one WebP per piece, named by slug)
  data/artworks.ts   titles, media, years, descriptions, alt text
  data/site.ts       name, contact, artist statement
  components/        TapedPiece (one taped artwork), Board (pinboard of pieces)
  layouts/Base.astro header, nav, footer
  pages/             home, work index, one page per piece, about
```

To add a piece: drop `<slug>.webp` into `src/assets/art/` and add an entry to
`src/data/artworks.ts`. Its page is generated automatically.

## Run locally

```sh
npm install
npm run dev      # http://localhost:4321/personal-art-portfolio/
npm run build    # outputs to dist/
```

## License

- **Artwork:** © Suzie Lou, all rights reserved. Everything in `src/assets/art/` (and
  any built copies) may not be reused without written permission.
- **Code:** MIT. See [LICENSE](LICENSE).
