---
layout: post
title: "Phase 2 Overview: Design Methods & Materials"
date: 2025-05-11
categories: prototype methods materials
---

So far in Phase 2 I’ve been establishing my **workflow** and exploring **early prototypes**.  

---

## 1. CT → 3D Model Pipeline

1. **Download CT** from the Visible Human Project (Harvard Dataverse) via a custom Python DICOM downloader.  
2. **Segment bone** in InVesalius 3 using a threshold of **236–2875 HU**.  
3. **Generate surface** and export as an STL for printing.  

### CT Images (Visible Human Project)

![Axial CT slice showing bone mask threshold](/assets/ct-axial-bone-mask.png)

![Sagittal CT slice used for STL extraction](/assets/ct-sagittal-view.png)

---

## 2. Mesh Cleanup & Prototyping

### Prototype 1 (May 7, 2025)  
- **Skipped** smoothing/hole-fill (Meshmixer) and advanced mods (Fusion/Blender).  
- **Sliced** directly in PrusaSlicer:  

![Prototype 1 in PrusaSlicer showing oversized and over-detailed mesh](/assets/prototype1-prusaslicer.png)  

**Issues**:  
1. Model too large (cut off at the build-plate limits)  
2. Mesh too fine for a 0.4 mm nozzle → thousands of unprintable facets  
3. No stable base (floating vertebrae) → massive supports required  

---

### Prototype 2 (Mid-May)  
- Added **Meshmixer** smoothing & hole-filling.  
- Performed **Fusion 360** mods before slicing again.  
- **Results** (rotated halves, fewer errors):  

![Prototype 2 cleaned and split halves](/assets/prototype2-cleaned.png)  

- **Remaining challenge**: excessive internal “junk” geometry and non-manifold fragments  

---

## 3. Next Steps in Phase 2

1. **Decimate & repair**: run Meshmixer’s Inspector on a 50–80 % reduced mesh  
2. **Isolate the outer shell**: use Make Solid → Separate Shells to remove internal fragments  
3. **Plane cut** along a surgical plane (parallel to the mandible) for printable halves  
4. **Test print** at EPL with PLA  
5. **Measure** dimensional accuracy and log filament usage  

---

> **Uploading figures**  
> 1. Export screenshots from the PDF as `.png`.  
> 2. In GitHub: **Add file → Upload files** into `/assets`.  
> 3. Reference them as shown above.  

Stay tuned for **Prototype 3 Results**, where I’ll share my first PLA-printed skull halves and CT/HU validation data!  
