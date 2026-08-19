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

### Project Finder: AHM + SciML

[![Skill](https://img.shields.io/badge/-AHM-555?style=flat&logo=crystal&logoColor=blue)](https://olcruzgonzalez.github.io/projects/)
[![Skill](https://img.shields.io/badge/-Composites-555?style=flat&logo=crystal&logoColor=blue)](https://olcruzgonzalez.github.io/projects/)
[![Skill](https://img.shields.io/badge/-SciML-555?style=flat&logo=crystal&logoColor=blue)](https://olcruzgonzalez.github.io/projects/)
[![Skill](https://img.shields.io/badge/-AI4Science-555?style=flat&logo=crystal&logoColor=blue)](https://olcruzgonzalez.github.io/projects/)
[![Skill](https://img.shields.io/badge/-Pytorch-555?style=flat&logo=crystal&logoColor=blue)](https://olcruzgonzalez.github.io/projects/)

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

<script>
document.addEventListener("DOMContentLoaded", () => {
  const PARAMETERS = {
    type: { label: "Problem Type", options: ["Direct", "Inverse"] },
    behavior: { label: "Material Behavior", options: ["Elasticity", "Conductivity", "Viscoelasticity"] },
    dimensions: { label: "Dimensions", options: ["1D", "2D", "3D"] },
    contact: { label: "Contact", options: ["Perfect", "Imperfect"] },
    structure: { label: "Structural Design", options: ["Laminated", "Fiber", "Inclusions"] },
    scales: { label: "Scales (Homogenization)", options: ["2 Scales", "3 Scales"] },
    periodicity: { label: "Periodicity", options: ["Standard", "Generalized Periodicity"] },
    coordinates: { label: "Coordinates", options: ["Rectangular", "Curvilinear"] }
  };

  const PROJECTS = [
    {
      id: "elastic_1d",
      params: {
        type: "Direct", behavior: "Elasticity", dimensions: "1D", contact: "Perfect",
        structure: "Laminated", scales: "2 Scales", periodicity: "Standard", coordinates: "Rectangular"
      },
      html: `
        <h4>Elastic 1D</h4>
        <blockquote>
          <p>
          This code implements a hybrid multiscale framework that couples Asymptotic Homogenization Methods (AHM) with Physics-Informed Neural Networks (PINNs) to predict the effective elastic properties of one-dimensional periodic composites.<br>
          <strong>Repository:</strong> <a href="https://github.com/composites-pinns/elastic_1D" target="_blank">composites-pinns/elastic_1D</a><br>
          **This repository will become public once our associated manuscript is accepted for publication.
          </p>
        </blockquote>
        <p><a href="/assets/img/projects/cell_problem_nn/ahm_pinns.png" class="popup img-link w-50 center shimmer"><img src="/assets/img/projects/cell_problem_nn/ahm_pinns.png" alt="Image" width="600" height="300" loading="lazy" onload="this.parentElement.classList.remove('shimmer')"></a></p>
      `
    },
    {
      id: "laminated_3d",
      params: {
        type: "Direct", behavior: "Elasticity", dimensions: "3D", contact: "Perfect",
        structure: "Laminated", scales: "2 Scales", periodicity: "Standard", coordinates: "Rectangular"
      },
      html: `
        <h4>Laminated 3D</h4>
        <blockquote>
          <p>
          This study combines two-scale AHM with PINNs to predict the effective elastic properties of two-phase laminated composites. The AHM local problems are solved as physics-driven optimization tasks, enforcing governing equations, interface continuity, and uniqueness constraints without training data. A cyclic optimizer and adaptive loss weighting improve convergence, while validation against analytical AHM and FEM results confirms the accuracy and stability of the approach.<br>
          <strong>Repository:</strong> <a href="https://github.com/composites-pinns/laminated_3D" target="_blank">composites-pinns/laminated_3D</a><br>
          **This repository will become public once our associated manuscript is accepted for publication.
          </p>
        </blockquote>
        <p><a href="/assets/img/projects/cell_problem_nn/laminated_3D.png" class="popup img-link w-50 center shimmer"><img src="/assets/img/projects/cell_problem_nn/laminated_3D.png" alt="Image" width="600" height="300" loading="lazy" onload="this.parentElement.classList.remove('shimmer')"></a></p>
      `
    },
    {
      id: "elastic_1d_imperfect",
      params: {
        type: "Direct", behavior: "Elasticity", dimensions: "1D", contact: "Imperfect",
        structure: "Laminated", scales: "2 Scales", periodicity: "Standard", coordinates: "Rectangular"
      },
      html: `
        <h4>Elastic 1D Imperfect</h4>
        <blockquote>
          <p>
          This work presents a coupled multiscale framework combining two-scale AHM with PINNs to predict the effective properties of one-dimensional periodic composites with imperfect interface conditions. Validation against the original heterogeneous problem confirms the accuracy of the proposed methodology across different volume fractions and material contrasts.<br>
          <strong>Repository:</strong> <a href="https://github.com/composites-pinns/elastic_1D_imperfect" target="_blank">composites-pinns/elastic_1D_imperfect</a><br>
          **This repository will become public once our associated manuscript is accepted for publication.
          </p>
        </blockquote>
        <p><a href="/assets/img/projects/cell_problem_nn/dual_net.png" class="popup img-link w-50 center shimmer"><img src="/assets/img/projects/cell_problem_nn/dual_net.png" alt="Image" width="600" height="300" loading="lazy" onload="this.parentElement.classList.remove('shimmer')"></a></p>
      `
    },
  ];

  const container = document.getElementById("project-finder-container");
  
  let html = `
    <div id="project-finder">
      <p class="pf-subtitle"> Select problem parameters below to find the corresponding repository and information.</p>
      <div class="pf-grid" id="pf-dropdowns"></div>
      <div id="project-result"></div>
    </div>
  `;
  container.innerHTML = html;

  const dropdownsContainer = document.getElementById("pf-dropdowns");
  const resultContainer = document.getElementById("project-result");
  const state = {};

  Object.keys(PARAMETERS).forEach(key => {
    state[key] = PARAMETERS[key].options[0];
    const field = document.createElement("div");
    field.className = "pf-field";
    
    const label = document.createElement("label");
    label.innerText = PARAMETERS[key].label;
    
    const select = document.createElement("select");
    PARAMETERS[key].options.forEach(opt => {
      const option = document.createElement("option");
      option.value = opt;
      option.innerText = opt;
      select.appendChild(option);
    });
    
    select.addEventListener("change", (e) => {
      state[key] = e.target.value;
      renderResult();
    });
    
    field.appendChild(label);
    field.appendChild(select);
    dropdownsContainer.appendChild(field);
  });

  function renderResult() {
    const matches = PROJECTS.filter(p => {
      return Object.keys(state).every(key => {
        return p.params[key] === state[key];
      });
    });

    if (matches.length > 0) {
      resultContainer.innerHTML = matches.map(m => m.html).join("<hr style='margin: 1.5rem 0; border-top: 1px solid var(--border-color, #e2e8f0);'>");
    } else {
      resultContainer.innerHTML = `
        <div class="pf-empty">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
          </svg>
          <p class="pf-empty-title">We are working on it!</p>
          <p>No repository currently matches this exact formulation.</p>
        </div>
      `;
    }
  }

  renderResult();
});
</script>

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
  > It is part of our work on surrogate models for thoracic aorta pathologies, found at the repository [olcruzgonzalez/Aorta](https://github.com/olcruzgonzalez/Aorta)\
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