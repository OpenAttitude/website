---
title: Instrument library on npm
description: "@openattitude/core and steam-style Vue packages—how they relate to the panel."
order: 3
---

## Published packages

Instruments are **versioned npm packages** under the **`@openattitude`** scope (for example `^0.1.0` in the panel). Building the panel does **not** require a local clone of the instruments monorepo—only **Node** and registry access.

### Core

**`@openattitude/core`** (LGPL) provides:

- **`useFlightGearPanelPropertiesStore`** — Pinia store; set **`host`**, then **`subscribe(path, options)`** for live properties.
- Default backend: **`ws://<host>/PropertyListener`** with JSON **`addListener`** / **`get`** messages matching FlightGear’s generic WebSocket API.
- **`installPanelMath()`**, **`PrerenderedSvgImage`**, and related helpers for sharp SVG-in-SVG gauges.

Peer expectations include **Vue 3.5+**, **Pinia 3**, and **@vueuse/core** where the default transport is used.

### Steam-style instruments

Seneca II uses packages such as:

- **Clock**, **airspeed**, **attitude**, **altimeter**, **turn coordinator**, **VSI**
- **KI525 HSI**, **KI227 ADF**, **KI209** nav indicator
- **Dual fuel flow**, **dual manifold**, **EGT**, **gyro pressure**, **flap/trim**
- **Engine RPM** (dual), **engine instrument strip** (left/right)
- **GPS** — **`@openattitude/other-gps-generic`** (Leaflet map; optional openAIP)

Each package ships a **built `dist/`**, **TypeScript declarations**, and often a **Vite testbed** for isolated development.

### Licenses

Instrument packages are **LGPL-3.0-or-later**; the **fgpanel** shell is **GPL-3.0-or-later**, which is compatible with linking LGPL components.
