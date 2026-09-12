# MM&HouseDesigns Portfolio

Architecture portfolio website for MM&HouseDesigns.

## Features

- React and Vite single-page site
- Georgian default language, with English and Russian language switching
- Home hero image carousel
- Project gallery with full-image project viewer
- Contact page with clickable phone and email links
- Optional GA4 visitor reporting
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

## Visitor Report

Firebase Hosting and ClouDNS do not count people. The local report uses the
Google Analytics property linked to Firebase and reports distinct active users.
Analytics starts collecting data only after it is enabled; it is not retroactive.

One-time setup:

1. Enable Google Analytics in Firebase **Project settings > Integrations** and
   register the website as a Firebase web app.
2. Enable the Google Analytics Data API in the project's Google Cloud console.
3. Create a service account, add its email to the Analytics property as a
   Viewer, and download its JSON key outside this repository.
4. Copy `.env.example` to `.env` and enter the numeric Property ID and absolute
   JSON key path. The website Measurement ID is already configured in code.
5. Deploy once with `npm run firebase:deploy` to activate page-view tracking.

Show visitors from the last 30 days:

```bash
npm run visitors
```

Use a custom period:

```bash
npm run visitors -- 2026-09-01 today
```
