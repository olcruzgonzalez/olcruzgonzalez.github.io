---
title: Projects
layout: page
icon: "fa-solid fa-list-ul"
order: 6
---

<!-- > **Media license** &mdash; Unless stated otherwise, the figures, animations and videos on this site are &copy; Oscar L. Cruz Gonz&aacute;lez and released under [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/). You are free to share and adapt them, including commercially, provided you give appropriate credit and link to the license. Third-party logos and institutional marks are excluded &mdash; see [LICENSE-CONTENT](https://github.com/olcruzgonzalez/olcruzgonzalez.github.io/blob/main/LICENSE-CONTENT) for the exact scope.
{: .prompt-info } -->

## Codes

Open source numerical tools. 
<!--[<img src="/assets/img/projects/GitHub1.png" alt="Download link" width="15"/>](https://github.com/olcruzgonzalez) -->

### pyhom 

[![Skill](https://img.shields.io/badge/-Python-555?style=flat&logo=crystal&logoColor=blue)](https://olcruzgonzalez.github.io/projects/)
[![Skill](https://img.shields.io/badge/-Scientific_Computing-555?style=flat&logo=crystal&logoColor=blue)](https://olcruzgonzalez.github.io/projects/)
[![Skill](https://img.shields.io/badge/-Image_Processing-555?style=flat&logo=crystal&logoColor=blue)](https://olcruzgonzalez.github.io/projects/)
[![Skill](https://img.shields.io/badge/-Software_Design-555?style=flat&logo=crystal&logoColor=blue)](https://olcruzgonzalez.github.io/projects/)

  > *PyHom: a Python library for homogenization*\
  > This library is conceived for calculating the effective conductivity properties of composite materials with complex microstructures in a 2D framework.\
  > Documentation and examples can be found on the repository [olcruzgonzalez/pyhom](https://github.com/olcruzgonzalez/pyhom)
  
![Image](/assets/img/projects/pyhom/idd.png){: width="400" height="200" .w-50 .center}

### AAA_steady

[![Skill](https://img.shields.io/badge/-SciML-555?style=flat&logo=crystal&logoColor=blue)](https://olcruzgonzalez.github.io/projects/)
[![Skill](https://img.shields.io/badge/-AI4Science-555?style=flat&logo=crystal&logoColor=blue)](https://olcruzgonzalez.github.io/projects/)
[![Skill](https://img.shields.io/badge/-Pytorch-555?style=flat&logo=crystal&logoColor=blue)](https://olcruzgonzalez.github.io/projects/)
[![Skill](https://img.shields.io/badge/-PINNs-555?style=flat&logo=crystal&logoColor=blue)](https://olcruzgonzalez.github.io/projects/)
[![Skill](https://img.shields.io/badge/-PIDeepONets-555?style=flat&logo=crystal&logoColor=blue)](https://olcruzgonzalez.github.io/projects/)

  > This code implements several physics-based deep learning methods, such as PINNs and PI-DeepONets, to predict steady vascular flow in a 3D Abdominal Aortic Aneurysm (AAA) idealized model.\
  > Refer to the repository [olcruzgonzalez/AAA_steady](https://github.com/olcruzgonzalez/AAA_steady) for more details.
  
![Image](/assets/img/projects/aaa_steady/Longitudinal.png){: width="600" height="300" .w-50 .center}

### CompSciMLab

[![Skill](https://img.shields.io/badge/-AHM-555?style=flat&logo=crystal&logoColor=blue)](https://olcruzgonzalez.github.io/projects/)
[![Skill](https://img.shields.io/badge/-Composites-555?style=flat&logo=crystal&logoColor=blue)](https://olcruzgonzalez.github.io/projects/)
[![Skill](https://img.shields.io/badge/-SciML-555?style=flat&logo=crystal&logoColor=blue)](https://olcruzgonzalez.github.io/projects/)
[![Skill](https://img.shields.io/badge/-AI4Science-555?style=flat&logo=crystal&logoColor=blue)](https://olcruzgonzalez.github.io/projects/)
[![Skill](https://img.shields.io/badge/-Pytorch-555?style=flat&logo=crystal&logoColor=blue)](https://olcruzgonzalez.github.io/projects/)

  > Research codes developed within the [CompSciMLab](https://github.com/composites-pinns) organization, coupling Asymptotic Homogenization Methods (AHM) with Scientific Machine Learning to predict the effective properties of composite materials.

#### Project Finder
{: #project-finder }

<div id="project-finder-container"></div>

<style>
/* Custom styles for the project finder to match typical Jekyll themes + Dark Mode */
#project-finder {
  margin: 2rem 0;
}
.pf-header {
  margin-top: 0 !important;
  margin-bottom: 0.5rem !important;
}
.pf-subtitle {
  font-size: 0.9em;
  color: var(--text-muted-color, #64748b);
  margin-bottom: 1.5rem;
}
.pf-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
}
.pf-field label {
  display: block;
  font-size: 0.75rem;
  font-weight: bold;
  margin-bottom: 0.25rem;
  text-transform: uppercase;
  color: var(--text-muted-color, #475569);
}
.pf-field select {
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid var(--border-color, #cbd5e1);
  background-color: var(--main-bg, #fff);
  color: var(--text-color, #333);
  font-size: 0.85rem;
}
#project-result {
  margin-top: 1.5rem;
}
.pf-empty {
  text-align: center;
  padding: 2rem;
  color: var(--text-muted-color, #64748b);
}
.pf-empty svg {
  width: 48px;
  height: 48px;
  margin: 0 auto 1rem;
  opacity: 0.5;
}
.pf-empty p {
  margin: 0;
}
.pf-empty-title {
  font-weight: bold;
  font-size: 1.1rem;
  margin-bottom: 0.5rem !important;
}
@media (prefers-color-scheme: dark) {
  .pf-field select {
    background-color: #0f172a;
    border-color: #334155;
    color: #e2e8f0;
  }
  .pf-subtitle, .pf-field label, .pf-empty {
    color: #94a3b8;
  }
}
</style>

<script src="/assets/js/project-finder.js" defer></script>

### AAA_unsteady

[![Skill](https://img.shields.io/badge/-SciML-555?style=flat&logo=crystal&logoColor=blue)](https://olcruzgonzalez.github.io/projects/)
[![Skill](https://img.shields.io/badge/-AI4Science-555?style=flat&logo=crystal&logoColor=blue)](https://olcruzgonzalez.github.io/projects/)
[![Skill](https://img.shields.io/badge/-Pytorch-555?style=flat&logo=crystal&logoColor=blue)](https://olcruzgonzalez.github.io/projects/)
[![Skill](https://img.shields.io/badge/-PINNs-555?style=flat&logo=crystal&logoColor=blue)](https://olcruzgonzalez.github.io/projects/)
[![Skill](https://img.shields.io/badge/-PIDeepONets-555?style=flat&logo=crystal&logoColor=blue)](https://olcruzgonzalez.github.io/projects/)

  > This code uses PINNs and PI-DeepONets to predict unsteady blood flow in a 3D Abdominal Aortic Aneurysm (AAA) idealized model.\
  > It is related to our work on unsteady flow, found at the repository [olcruzgonzalez/AAA_unsteady](https://github.com/olcruzgonzalez/AAA_unsteady)\
  > ***The code will be made public after peer review and acceptance of our associated manuscript.*
  
![Image](/assets/img/projects/aaa_unsteady/MoV.gif){: width="600" height="300" .w-50 .center}
![Image](/assets/img/projects/aaa_unsteady/Pressure.gif){: width="600" height="300" .w-50 .center}

### Aorta

[![Skill](https://img.shields.io/badge/-Biomechanics-555?style=flat&logo=crystal&logoColor=blue)](https://olcruzgonzalez.github.io/projects/)
[![Skill](https://img.shields.io/badge/-SciML-555?style=flat&logo=crystal&logoColor=blue)](https://olcruzgonzalez.github.io/projects/)
[![Skill](https://img.shields.io/badge/-AI4Science-555?style=flat&logo=crystal&logoColor=blue)](https://olcruzgonzalez.github.io/projects/)
[![Skill](https://img.shields.io/badge/-Pytorch-555?style=flat&logo=crystal&logoColor=blue)](https://olcruzgonzalez.github.io/projects/)
[![Skill](https://img.shields.io/badge/-PINNs-555?style=flat&logo=crystal&logoColor=blue)](https://olcruzgonzalez.github.io/projects/)
[![Skill](https://img.shields.io/badge/-PIDeepONets-555?style=flat&logo=crystal&logoColor=blue)](https://olcruzgonzalez.github.io/projects/)

  > This code moves the physics-based deep learning workflow beyond idealized geometries and applies it to a patient-specific thoracic aorta. PINNs and PI-DeepONets are trained to reproduce the pulsatile blood flow over a complete cardiac cycle, and their predictions are then assessed against the reference CFD solution.\
  > It is part of our work on surrogate models for thoracic aortic pathologies, found at the repository [olcruzgonzalez/Aorta](https://github.com/olcruzgonzalez/Aorta)\
  > ***The code will be made public after peer review and acceptance of our associated manuscript.*

<!-- Encoded from the aorta_*.mkv masters: audio track removed and 4x playback speed baked into each file. -->
<p>
  <video class="embed-video file"
         src="/assets/video/projects/aorta/aorta_MoV.mp4"
         poster="/assets/video/projects/aorta/aorta_MoV-poster.jpg"
         controls controlslist="nodownload noplaybackrate" disablepictureinpicture disableremoteplayback
         autoplay loop muted playsinline preload="metadata"
         oncontextmenu="return false;">
    Your browser does not support the video tag.
  </video>
  <em>Velocity magnitude over one cardiac cycle: CFD reference (left), PINN prediction (center) and vector error magnitude (right).</em>
</p>

<p>
  <video class="embed-video file"
         src="/assets/video/projects/aorta/aorta_Pressure.mp4"
         poster="/assets/video/projects/aorta/aorta_Pressure-poster.jpg"
         controls controlslist="nodownload noplaybackrate" disablepictureinpicture disableremoteplayback
         autoplay loop muted playsinline preload="metadata"
         oncontextmenu="return false;">
    Your browser does not support the video tag.
  </video>
  <em>Pressure over the same cardiac cycle: CFD reference (left), PINN prediction (center) and signed error, PINN &minus; CFD (right).</em>
</p>

---