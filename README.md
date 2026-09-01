# MM&HouseDesigns Portfolio

Architecture portfolio website for MM&HouseDesigns.

## Features

- React and Vite single-page site
- Georgian default language, with English and Russian language switching
- Home hero image carousel
- Project gallery with full-image project viewer
- Contact page with clickable phone and email links
- Firebase Hosting configuration

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

## Firebase Deploy

Log in once:

```bash
npm run firebase:login
```

Initialize/select the Firebase project once:

```bash
npx firebase-tools init hosting
```

Use `dist` as the public directory, configure it as a single-page app, and do not overwrite `dist/index.html`.

Deploy updates:

```bash
npm run firebase:deploy
```
