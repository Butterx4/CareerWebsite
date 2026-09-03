---
title: "2Fast2Fail: Drill-Powered Endurance Vehicle"
summary: "A 3-wheeled vehicle powered entirely by a cordless drill, designed and built with a 6-person team for a 30-minute endurance competition."
date: 2026-04-25
tags: ["SolidWorks", "Power Transmission", "FEA", "Manufacturing", "Team Project"]
featured: true
cover: "./cover.png"
gallery:
  - "./photo-side.png"
  - "./photo-3quarter.png"
  - "./cad-drivetrain.png"
  - "./drawing-frame.png"
  - "./drawing-drillplate.png"
  - "./photo-qc.png"
  - "./exploded-view.png"
  - "./exploded-bom-drawing.png"
---

## Overview

For MCEN 3025 (Component Design) at CU Boulder, our 6-person team — **2Fast2Fail** — was tasked
with designing and manufacturing a vehicle powered *only* by a single cordless drill. I served as
CAD Engineer alongside Leighanne Bennett and Rylee Berger (Manufacturing Engineers), Elijah
Dunning (Project Manager), Karl Kubala (CAD Engineer), and Erik Stern (Testing & Systems
Engineer).

We entered the **endurance event**: complete as many laps as possible on a closed course in 30
minutes, with a 2-lap minimum. Endurance performance depends more on drivetrain efficiency and
reliable power delivery than top speed, so our entire design — gearing, frame, and drivetrain —
was built around torque delivery and reliability rather than outright speed.

## Design Approach

We chose a three-wheel tricycle layout: one steered/braked front wheel (from a donated bicycle's
front end, reused to cut manufacturing scope) and two rear wheels, one driven by the drill through
a chain drivetrain. All three wheels were standardized to 26" to simplify geometry and cost, and a
flat wooden board served as the seat platform to keep the design simple and fast to manufacture.

The frame used two bent tubes plus three mitered tubes, custom dimensioned in SolidWorks (see the
frame drawing in the gallery) and analyzed for structural loads under rider weight and drivetrain
stress.

## Drivetrain

- **Gear ratio:** 4.5:1 (45-tooth driven sprocket : 10-tooth drive sprocket), sized to keep the
  drill operating in its higher-efficiency RPM range while maximizing torque at the rear axle
- **Torque at driven axle:** ~271 lb-in
- **Output speed:** ~430 RPM at the rear sprocket
- **Actuation:** originally a hinge-and-cable mechanism off the handlebars; after testing showed
  inconsistent cable tension, we redesigned it around a bicycle brake caliper to press the drill
  trigger, which was far more repeatable and easier to mount to the drill plate

## Manufacturing

The drill itself sits on a machined **drill plate subassembly** — pillow blocks, a machined shaft,
and standard McMaster hardware — that transmits torque from the drill into the chain drivetrain
(see the subassembly drawing in the gallery). Full engineering drawings for the frame and drill
plate components are available below.

Total assembled weight came in at ~46 lb (40.9 lb from the SolidWorks model, plus fasteners and
the drill itself).

## Results & Lessons Learned

At competition runoff, the vehicle completed **6.9 laps**, just under the field average for the
endurance event. Two issues limited performance:

- **Chain tensioning:** our horizontal dropout tabs were meant to simplify tensioning by sliding
  the rear wheel back, but proved hard to keep aligned under repeated use — the rear wheel
  gradually developed inward camber, increasing friction and draining the drill's battery faster.
- **Braking:** the same cable-tensioning issues that affected drill actuation also limited brake
  responsiveness, which we flagged as a safety improvement for future iterations.

Despite those two shortfalls, the vehicle met its core requirements — drill-plate constraints,
manufactured-component minimums, three-wheel layout, and overall geometry — and finished the
endurance event as a functioning, rideable vehicle built from a single power tool.

## Downloads

- [Final Design Report (PDF)](/downloads/2fast2fail/Final-Design-Report.pdf) — full write-up:
  requirements, design approach, component analysis, manufacturing, BOM, timeline, lessons learned
- [Design Review Presentation (PDF)](/downloads/2fast2fail/Design-Review-Presentation.pdf)
- [Frame Engineering Drawings (PDF, 8 files)](/downloads/2fast2fail/frame-drawings/FrameDrawing.pdf)
- [Drill Plate Subassembly Drawings (PDF)](/downloads/2fast2fail/drill-plate-drawings/Drill%20Plate%20SubAssembly.pdf)
- [Frame FEA Model (SolidWorks .SLDPRT)](/downloads/2fast2fail/FrameAnalysis.SLDPRT)
