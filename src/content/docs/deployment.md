---
title: Build and deployment
description: Static hosting, GitHub Actions, and custom domain senecaii.openattitude.org.
order: 5
---

## Production build

```bash
npm install
npm run build
```

Output is **`dist/`**—static HTML, JS, and CSS suitable for any static host or CDN.

### Base URL

For hosting at the **root** of a custom domain (e.g. **https://senecaii.openattitude.org/**), build with **`BASE_URL=/`** (the default in **`vite.config.ts`** when unset).

For **GitHub project Pages** under a path (`https://org.github.io/repo/`), set:

```bash
BASE_URL=/repository-name/ npm run build
```

Vue Router uses **`import.meta.env.BASE_URL`** so client routes match the asset prefix.

## GitHub Pages (organization)

The panel repository includes **`.github/workflows/seneca-ii-github-pages.yml`**:

- Runs **`npm ci`** and **`npm run build`** with **`BASE_URL=/`**
- Uploads **`dist/`** via **upload-pages-artifact** and **deploy-pages**
- Documents **https://senecaii.openattitude.org** as the deployment environment URL

**Repository settings:** Pages → **Source: GitHub Actions**; **Custom domain:** `senecaii.openattitude.org`.

**DNS:** CNAME **`senecaii`** → **`<org>.github.io`** (your GitHub organization or user slug).

**`public/CNAME`** in the app ensures the built site carries the hostname for Pages.

## Local preview

```bash
npm run preview
```

Serves the production build locally after **`npm run build`**.
