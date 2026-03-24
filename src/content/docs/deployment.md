---
title: Build and deployment
description: Static hosting, GitHub Actions, and custom domains for this site and the Seneca II panel.
order: 5
---

## This documentation site (Astro)

**Canonical URL:** **https://www.openattitude.org**

```bash
npm install
npm run build
```

Output is **`dist/`**—static HTML suitable for GitHub Pages or any static host.

**`astro.config.mjs`** sets **`site: 'https://www.openattitude.org'`** so Astro can emit absolute URLs where needed (sitemaps, RSS, etc.). The site is served at the **domain root**, so **`base`** stays at the default (`/`).

### GitHub Pages (this repository)

The workflow **`.github/workflows/deploy-github-pages.yml`** runs **`npm ci`**, **`npm run build`**, and publishes **`dist/`**.

1. **Settings → Pages → Source:** GitHub Actions  
2. **Settings → Pages → Custom domain:** `www.openattitude.org`  
3. **DNS** (at `openattitude.org`): **CNAME** **`www`** → **`<org>.github.io`** (GitHub shows the exact target for your account or organization)  
4. **`public/CNAME`** contains `www.openattitude.org` so the build artifact includes the hostname file Pages expects  
5. Enable **HTTPS** / **Enforce HTTPS** after the certificate is issued  

### Subpath hosting (unusual for this site)

If you ever published only under **`https://<org>.github.io/<repo>/`**, set **`base: '/<repo>/'`** in **`astro.config.mjs`** (see [Astro configuration](https://docs.astro.build/en/reference/configuration-reference/#base)).

---

## Seneca II panel (separate repository)

The **fgpanel** app is deployed separately—for example at **https://senecaii.openattitude.org**—with its own GitHub Actions workflow, **`BASE_URL=/`**, and DNS **CNAME** **`senecaii`** → **`<org>.github.io`**. It uses **Vue / Vite**, not Astro.

---

## Local preview

```bash
npm run preview
```

Serves the production build locally after **`npm run build`**.
