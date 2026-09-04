# MM&HouseDesigns Portfolio

Architecture portfolio website for MM&HouseDesigns.

## Features

- React and Vite single-page site
- Georgian default language, with English and Russian language switching
- Home hero image carousel
- Project gallery with full-image project viewer
- Contact page with clickable phone and email links
- Automatic GitHub Pages deployment from the `main` branch

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production output is generated in `dist`.

## Deployment

Push changes to `main`. The workflow in `.github/workflows/deploy.yml` builds
the site and publishes `dist` to GitHub Pages automatically.

The production site is available at
`https://macharstein.github.io/mmhousedesigns/`.
