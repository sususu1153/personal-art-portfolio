# personal-art-portfolio

Art portfolio site. Illustration and mixed media: alcohol markers, colored pencils,
3D-printed tiles. Zine-style layout.

**Live site:** https://sususu1153.github.io/personal-art-portfolio/

## How this was made

Art, writing, and design direction: mine. Code: written by
[Claude Code](https://claude.com/claude-code), an AI coding agent, from my instructions.

What I decided:

- **Style.** Picked a zine direction, had the agent build three sample pages with my art,
  chose cut-and-paste. Same for the pull quote (4 options, chose viewfinder) and the About
  layout (2 options). Changed Work to an index because it looked too much like Home.
- **Content.** Art, titles, and descriptions are from my portfolio decks. Agent fixed a few
  grammar errors and wrote the alt text. Artist statement: my text, shortened with the
  agent, edited by me.
- **Features.** Typewriter text with random pauses, hover highlighter, selection colors
  matched to headings, zoom viewer.
- **Privacy.** Source images were named with my AP student ID. All images renamed,
  metadata stripped, watermarked, capped at 1600px.

How I checked the agent's work:

- Work stopped at 4 checkpoints (image prep, style samples, full build, final review).
  Each one approved in a local preview before continuing.
- Sent back what was wrong: an unwanted photo crop, a misread request, a heading layout.
- Privacy checks (no student ID, no image metadata) rerun before every commit.

## Stack

- [Astro](https://astro.build) static site; small scripts for the animations, the work
  index previews, and the zoom viewer (the content is all readable without them)
- Plain CSS, fonts self-hosted with Fontsource (Archivo Black, Courier Prime)
- Images processed at build time into responsive WebP sizes
- Deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`

## Structure

```
src/
  assets/art/        artwork images (one WebP per piece, named by slug)
  assets/photo/      About page photo
  data/artworks.ts   titles, media, years, descriptions, alt text
  data/site.ts       name, contact, artist statement
  components/        TapedPiece (one taped artwork), Board (pinboard of pieces),
                     WorkIndex (list with hover previews), PullQuote (viewfinder
                     quote), Lightbox (full-screen zoom viewer)
  layouts/Base.astro header, nav, footer
  pages/             home, work index, one page per piece, about
  scripts/motion.ts  paste-in, typewriter, and highlighter effects
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

- **Artwork:** © Suzie Lou, all rights reserved. Not to be reused without written
  permission.
- **Code:** MIT. See [LICENSE](LICENSE).
