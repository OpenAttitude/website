---
title: Seneca II panel application
description: The fgpanel Vue app—routes, fullscreen instruments, DPI, and hosting.
order: 2
---

## fgpanel

The repository you deploy is a **private** npm package root (`package.json` name `fgpanel`): a **Vite 8** + **TypeScript** SPA, not a library published to npm.

### User-facing routes

| Route | Purpose |
| --- | --- |
| `/` | Main instrument stack; tap a gauge for fullscreen |
| `/instrument/:instrumentId` | Single instrument (validated IDs: clock, asi, attitude, altimeter, gps, adf, …) |
| `/test` | Developer index of routes |
| `/testbeds` | Links to per-package Vite testbeds (run from the instruments monorepo) |
| `/ClockView` | Redirects to the clock instrument (legacy) |

### Query parameters

- **`fgfs`** — PropertyListener host (`hostname` or `host:port`, no `ws://`). Empty = no WebSocket; gauges stay at defaults.
- **`dpi`** — If greater than 10, sets CSS **`--mydpi`** for physical cutout sizing (default baseline 96).
- **`gradient`** — `gradient=true` enables metallic **gradient-border** bezels on instruments.

### Layout and styling

Global variables in **`App.vue`** define **`--myspacing`**, **`--cutout_*inch`**, and gauge size classes. **`Panel.vue`** positions absolute cutouts; **`InstrumentFullscreenView.vue`** handles wide engine strips.

### Bootstrap and map

The shell uses **Bootstrap 5** and **Bootstrap Icons**. The GPS instrument pulls in **Leaflet** and **`@openattitude/other-gps-generic`** styles. OpenStreetMap tiles are default; an **openAIP** overlay is optional at the component level via **`openaip-api-key`** (not wired in the stock panel).

### Math bootstrap

`main.ts` calls **`installPanelMath()`** from `@openattitude/core` so gauges can use **`Math.interpolate`** / **`Math.clamp`** where implemented.
