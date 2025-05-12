---
layout: post
title: "5. Phase 2 Overview: Design Methods & Materials"
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

### Prototype 3 (Late May)

After seeing the progress in Prototype 2, I started zooming in on the cervical spine region. You can immediately tell—there are just way too many discontinuities.

![Floating vertebrae issues in cervical spine](/assets/floating-spine.png)

It looks like this STL is carrying so much high-resolution microanatomy from the CT scan that it’s basically unprintable in this form. Even visually, you can tell that the spine is... floating. Not ideal.

So what should I do?

Maybe I need to find a better “surgical” plane for the cut—something parallel to the body of the mandible. The idea here is to get a clean bottom edge for the print so it won’t require mountains of support, and maybe chop out all this unsupported detail. But how should I even do that?

Should I be doing this in Fusion 360?

Honestly, I still don’t really know what Fusion 360 even is. I've been using Meshmixer up to this point and it’s been fine for quick editing—but I'm starting to see the cracks. So, as usual, I asked ChatGPT.

**Bottom line from GPT:**

- **Today, if you want your EPL test print ASAP:**  
  → Use Meshmixer + PrusaSlicer  
- **Later, if you want long-term control and refinement:**  
  → Learn Fusion 360 for modeling alignment features, bases, or future modular QA phantoms

Alright, good enough for me.

> So for now I’m going with **Meshmixer + PrusaSlicer**.

---

Now onto **Prototype 3**.

I took the STL and loaded it into Meshmixer. Here's what it looked like on load:

![Meshmixer highlighting non-manifold geometry in red](/assets/meshmixer-non-manifold.png)

Yikes.

First issue: the entire model turns red. That means the mesh is **non-manifold**, has holes, or has flipped normals. Basically: “this mesh has problems.”

Second (and bigger) issue: **Meshmixer lags like crazy**. Any operation I try—whether it’s smoothing, cutting, or shelling—slows down to a crawl or freezes completely.

I even tried to “Separate Shells” hoping to isolate the outer surface and just delete the internal noise. But it turns out the microanatomy is so detailed and fragmented that the operation times out or outright crashes the software.

So now I’m left wondering...

**Do I need to go back to the drawing board?**

Is a high-res CT skull **too detailed** for an FDM printer to realistically handle? Do I simplify? Reduce mesh resolution? Mask out internal noise during segmentation?

I don’t know the answer yet, but it’s clear that if I want to get this prototype on a print bed—especially through a Edmonton Public Library—I’ll need to rethink the way I’m preparing this mesh.

Stay tuned.
