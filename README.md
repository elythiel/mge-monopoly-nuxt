# CV Website

Morgane's personal CV presented as an interactive Monopoly-style board.

Built with **Nuxt 4**, using **@nuxt/content** for writing modular sections,
and deployed on **Netlify**.

## Features
- Monopoly-themed layout for professional experience.
- Content-driven architecture via `@nuxt/content`.
- Contact form protected with **Netlify Captcha** and **honeypot**.
- Static generation for optimized delivery.

## Tech Stack
- **Nuxt 4**
- **@nuxt/content**
- **Yarn**
- **Netlify**

## Setup

### Install
```bash
yarn install
```

### Development server
```bash
yarn dev
```

### Build (local)
```bash
yarn build
```

### Generate static site
```bash
npx nuxi generate
```

## Netlify

- Build command: npx nuxi generate
- Output directory: .output/public
- Contact form includes:
  - data-netlify="true"
  - netlify-honeypot
  - data-netlify-recaptcha="true"

## Content

Write content in the app/content/ directory
using markdown compatible with @nuxt/content.

### Monopoly board

Monopoly content is written under (./content/card) directory.
Filenames are just for an easier ordering.

You can check
[this documentation](./documentation/writing-board-content.md)
for more information about writing card's content.

## Deployment

### Production

Push to the main branch.
Netlify handles build and deploy automatically.

### Preview

Create a pull request, netlify will automatically build and deploy on a preview server.
