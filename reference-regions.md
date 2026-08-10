# Reference Region Map

Fixed canvas: 1024 x 576 px.

Reference image is the visual source of truth. Do not redesign, modernize, simplify, or reinterpret.

## Regions

1. Top navigation bar
   - Approx: x 0, y 0, w 1024, h 24
   - Legacy WinForms toolbar tabs with small icons, compact typography, thin borders.

2. Left meter block
   - Approx: x 0, y 24, w 270, h 112
   - Aggregate, Cement, Water, Additive, Analyzer LED panels.

3. Left aggregate bins and conveyor
   - Approx: x 0, y 205, w 300, h 270
   - Inventory value grid, four aggregate bins, blue conveyor, sensors.

4. Center process area
   - Approx: x 275, y 24, w 380, h 520
   - Pumps, water/additive flow, hoppers, mixer, inclined conveyor, START/STOP.

5. Right cement silo area
   - Approx: x 660, y 24, w 250, h 330
   - Two cement silos with top railing/grid, filter buttons, required/inventory labels, screw conveyor.

6. Right gauge area
   - Approx: x 885, y 300, w 135, h 165
   - Semi-circular amp gauge, colored arc, needle, automatic label.

7. Bottom operator/control panel
   - Approx: x 515, y 465, w 500, h 90
   - Truck image, operator name, horn/compressor/reset/start/manual controls.

## Build Rule

Implement and adjust one region at a time. Compare position, size, color, border, gradient, typography, and visual density against the reference before moving to the next region.
