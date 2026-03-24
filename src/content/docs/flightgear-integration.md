---
title: FlightGear integration
description: PropertyListener WebSocket, subscribed paths, and running alongside the sim.
order: 4
---

## PropertyListener

The panel does not poll HTTP. It opens a **WebSocket** to:

`ws://<fgfs-host>/PropertyListener`

…where **`<fgfs-host>`** is whatever you pass as the **`fgfs`** query parameter (e.g. `127.0.0.1:8080`).

The **`@openattitude/core`** store sends listener commands for each subscribed property. The composable **`useFgPanelPropertyBindings`** (in the panel repo) registers the paths used by the Seneca II layout, including:

- Attitude, airspeed (IAS/TAS disk), altimeter, VSI, turn coordinator, slip/skid
- KCS55 / KI525 HSI and related nav validity flags
- KI209 (NAV1) OBS, CDI, glideslope, to/from flags
- ADF bearing and card rotation
- GPS latitude, longitude, heading, zoom
- Engine RPM, manifold, fuel flow, EGT, gyro suction, flap and trim
- Clock UTC day-seconds

Exact path strings live in the panel source; adjust there if your aircraft uses different nodes.

## Security and networks

Treat the PropertyListener port like **debug access** to sim state. Use **localhost** or a **trusted LAN**; do not expose an unauthenticated listener to the public internet without additional controls.

## FlightGear side

Enable the generic **WebSocket** PropertyListener for the host/port you configure. Consult current FlightGear documentation for the exact property and startup flags for your version.
