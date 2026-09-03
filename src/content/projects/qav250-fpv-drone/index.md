---
title: "QAV250 FPV Drone — Reverse-Engineered CAD"
summary: "Full reverse-engineering CAD reconstruction of a QAV250 FPV racing drone, including its carbon-fiber frame plates, motors, and lofted propeller geometry."
date: 2025-04-26
tags: ["SolidWorks", "Reverse Engineering", "Drones"]
featured: true
cover: "./cover.png"
gallery:
  - "./exploded.png"
  - "./drawing.png"
  - "./propeller.png"
  - "./reference-photo.png"
---

## Overview

For MCEN 1025 (Manufacturing Processes for Engineering Design) at CU Boulder, I reverse-engineered
a QAV250 FPV (first-person-view) racing drone entirely in SolidWorks — a small, high-maneuverability
quadcopter flown with a remote and video goggles, commonly used for racing, inspection, and aerial
video.

I picked this product specifically because it was mechanically challenging to CAD: curved,
lofted propeller geometry, multiple imported OEM electronics (flight controller, ESC, motors,
FPV camera), and three different carbon-fiber base plates (big, medium, small) that all needed to
mate precisely.

## Critical Components

The three carbon-fiber base plates (Big, Medium, Small) were the most critical and time-consuming
parts to draw — matching real-world hole patterns and mounting geometry closely enough that the
imported OEM components (motors, flight controller, ESC) would actually fit.

The **propeller** was the most difficult individual part: unlike the flat, prismatic parts typical
of early CAD coursework, its blade geometry required the loft and spline tools to capture the
correct curvature.

The most difficult **drawing** was the big base plate — dimensioning it required overlapping
dimensions and detail views to avoid double-dimensioning while still fully defining every hole and
slot (see the dimensioned drawing in the gallery).

## Lessons Learned

Keeping every sketch fully defined and using SolidWorks' smart-dimension tool meant that when I
caught dimensioning mistakes late — which happened often on the big plate, given how many features
it carried — I could correct them and have the fix propagate forward through the rest of the
model, instead of rebuilding from scratch.

Because the real drone has substantial electronics content, I imported several OEM part files
(motors, ESC, flight controller) rather than modeling them from scratch — each would have been its
own multi-week project. The custom-modeled parts — the plates and propellers (see the isolated
propeller render in the gallery) — were the most accurate to the real product, shown against a
reference photo of the actual QAV250 in the gallery for comparison.
