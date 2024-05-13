---
layout: page
icon: fa-solid fa-briefcase
order: 3
---

<!-- Style -->
<style>
  .container {
    display: flex;
    width: 130%; /* Ensures the container fills the width of the page */
    align-items: left; /* Align items vertically */
    margin-bottom: 20px;
  }
  .column1_2 {
    flex-grow: 1; /* Allows each column to grow and fill the space */
    /* text-align: center; */
    padding: 10px;
  }
  .column3 {
    flex-grow: 1; /* Allows each column to grow and fill the space */
    text-align: right; */
    padding: 10px;
  }
  .date, .location {
    font-weight: bold;
  }
  .empty {
    flex-grow: 0; /* Keeps empty divs from growing */
    width: 5%; /* Minimal width for spacing */
  }
</style>

<!-- Content -->

<!-- Postdoc - Paris, France -->
<div class="container">
  <div class="empty"></div>
  <div class="column1_2">
    <p class="date">2021-2022</p>
    <p class="location">Paris, France</p>
  </div>
  <div class="column1_2">
    <ul>
      <li> Postdoc: Advanced Microcmechanical Models</li>
    </ul>
  </div>
  <div class="column3">
    <img src="assets/img/experience/Paris.png" alt="Paris image" width="200">
  </div>
  <div class="empty"></div>
</div>

<!-- Postdoc - Marseille, France -->
<div class="container">
  <div class="empty"></div>
  <div class="column1_2">
    <p class="date">2023-Present</p>
    <p class="location">Marseille, France</p>
  </div>
  <div class="column1_2">
    <ul>
      <li> Postdoc: AI for Engineering</li>
    </ul>
  </div>
  <div class="column3">
    <img src="assets/img/experience/IRPHE.png" alt="IRPHE image" width="200">
  </div>
  <div class="empty"></div>
</div>
