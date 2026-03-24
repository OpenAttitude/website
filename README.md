# OpenAttitude marketing site

Static site built with **[Astro](https://astro.dev/)** and **Tailwind CSS v4** (via `@tailwindcss/vite`). It describes the **Seneca II fgpanel** project, **`@openattitude/*`** npm instruments, and FlightGear integration.

## Content (“CMS”)

Long-form pages live in **`src/content/docs/*.md`** as an Astro **content collection** (`src/content.config.ts`). Each file has frontmatter:

- `title` — page heading  
- `description` — meta / card text  
- `order` — sort order on `/docs`

Add a new `.md` file and run `npm run build`; routes are generated at `/docs/<filename-without-extension>/`.

## Commands

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output: dist/
npm run preview  # serve dist/ locally
```

## Stack

- Astro 6  
- Tailwind CSS 4 + `@tailwindcss/typography` (prose for Markdown body)  
- TypeScript (strict)

## Deploy

`dist/` is static HTML—usable on any host (GitHub Pages, nginx, Netlify, etc.).

**Production URL:** **https://www.openattitude.org** — configured via **`site`** in **`astro.config.mjs`** and **`public/CNAME`**.

### GitHub Pages (this repository)

This folder is the **git repository root**. The workflow **[`.github/workflows/deploy-github-pages.yml`](.github/workflows/deploy-github-pages.yml)** runs on push to **`main`** / **`master`** (and **workflow_dispatch**): **`npm ci`**, **`npm run build`**, then publishes **`dist/`** with **upload-pages-artifact** + **deploy-pages**.

1. **Settings → Pages → Source:** GitHub Actions  
2. **Settings → Pages → Custom domain:** `www.openattitude.org`  
3. **DNS:** CNAME **`www`** → **`<org>.github.io`** (use the value GitHub shows for your org or user)  
4. First run: approve **github-pages** under **Settings → Environments** if required  
5. **Enforce HTTPS** after the certificate is ready  

If you use a **project** Pages URL (`https://<org>.github.io/<repo>/`) instead, set Astro’s **`base`** in `astro.config.mjs` to `/<repository-name>/` (see [Astro `site` and `base`](https://docs.astro.build/en/reference/configuration-reference/#base)).
