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
          <strong>Repository:</strong> <a href="https://github.com/composites-pinns/elastic_1D" target="_blank">composites-pinns/elastic_1D</a>
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
          <strong>Repository:</strong> <a href="https://github.com/composites-pinns/laminated_3D" target="_blank">composites-pinns/laminated_3D</a>
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
          <strong>Repository:</strong> <a href="https://github.com/composites-pinns/elastic_1D_imperfect" target="_blank">composites-pinns/elastic_1D_imperfect</a>
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

  // Deep linking. Either name a project directly:
  //   /projects/?project=elastic_1d_imperfect#project-finder
  // or set individual parameters:
  //   /projects/?contact=Imperfect&dimensions=1D#project-finder
  const query = new URLSearchParams(window.location.search);
  const preset = {};

  const wantedId = (query.get("project") || "").trim().toLowerCase();
  if (wantedId) {
    const match = PROJECTS.find(p => p.id.toLowerCase() === wantedId);
    if (match) Object.assign(preset, match.params);
  }

  Object.keys(PARAMETERS).forEach(key => {
    const rawValue = query.get(key);
    if (!rawValue) return;
    const opt = PARAMETERS[key].options.find(o => o.toLowerCase() === rawValue.trim().toLowerCase());
    if (opt) preset[key] = opt;
  });

  Object.keys(PARAMETERS).forEach(key => {
    state[key] = preset[key] || PARAMETERS[key].options[0];
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
    select.value = state[key];
    
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

  // The finder is injected after the browser has already acted on the URL fragment,
  // so run the scroll again now that the section has its final height.
  const anchorId = decodeURIComponent(window.location.hash.replace("#", ""));
  const anchor = anchorId ? document.getElementById(anchorId) : null;
  if (anchor) {
    requestAnimationFrame(() => anchor.scrollIntoView({ block: "start" }));
  }
});
