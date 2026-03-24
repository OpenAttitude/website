---
title: Project overview
description: What OpenAttitude and the Seneca II panel are, and how the pieces fit together.
order: 1
---

## Mission

**OpenAttitude** brings modern web technology to **FlightGear** cockpit panels: crisp steam-gauge style instruments, a live link to simulator properties, and layouts you can host in a browser or embed next to the sim.

The **Seneca II panel** (**fgpanel**) is a complete **Vue 3** application that arranges a Seneca II–style dashboard—airspeed, attitude, HSI, GPS moving map, engine strip, and more—and drives each gauge from **FlightGear** over a **WebSocket PropertyListener** connection.

## Architecture at a glance

| Layer | Role |
| --- | --- |
| **Panel app** (this site’s subject) | Routing, layout, Bootstrap chrome, Pinia + `@openattitude/core` subscriptions |
| **`@openattitude/*` packages** | Self-contained Vue instruments published to **npm** (LGPL) |
| **`@openattitude/core`** | Shared Pinia store, property protocol, SVG rasterization helpers, `installPanelMath()` |
| **FlightGear** | Generic **PropertyListener** on `ws://host:port/PropertyListener` |

The panel is **GPL-3.0-or-later**; it **consumes** LGPL instrument libraries from the registry, similar to linking shared libraries in native code.

## Who this is for

- **Pilots and builders** who want a web-based Seneca II stack next to FlightGear.
- **Developers** extending instruments or wiring new aircraft-specific paths via `@openattitude/core`.

## Live demo

The panel is designed to be hosted as static files, for example at **[senecaii.openattitude.org](https://senecaii.openattitude.org)** (organization deployment with a custom domain). Connect FlightGear with the **`fgfs`** query parameter (see *FlightGear integration*).
