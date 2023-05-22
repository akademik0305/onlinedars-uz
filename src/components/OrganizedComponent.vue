<template>
  <!-- organized -->
  <div class="organized" id="organized">
    <div class="container">
      <div class="organized__row">
        <h2 class="organized__title main-title">Kurs qanday <span>Tashkil topgan?</span> ?</h2>
        <div class="organized__content">
          <p class="organized__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
            galley of type
          </p>
          <div class="organized-cards">
            <div class="organized-card">
              <h4 class="organized-card__title">36+</h4>
              <p class="organized-card__text">Uyga vazifalar</p>
            </div>
            <div class="organized-card">
              <h4 class="organized-card__title">5+</h4>
              <p class="organized-card__text">Portfolioga real ishlar</p>
            </div>
          </div>
        </div>
      </div>

      <!-- dropdowns -->
      <div class="organized-dropdowns">
        <!-- dropdown -->
        <div class="organized-dropdown">
          <div class="organized-dropdown__toogle" @click="toggleOrganizedDropdown($event)">
            <img src="@/assets/images/icons/arrow-down.svg" alt="arrow down">
            <p class="organized-dropdown__title">1- Modul <span>Kirish va boshlang’ich bilimlar</span></p>
          </div>
          <div class="organized-dropdown__menu">
            <p class="organized-dropdown__text">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make
            </p>
            <ul class="organized-dropdown__list">
              <li class="organized-dropdown__item">
                <span>23- dars</span>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </li>
            </ul>
          </div>
        </div>
        <!-- dropdown -->
        <div class="organized-dropdown">
          <div class="organized-dropdown__toogle" @click="toggleOrganizedDropdown($event)">
            <img src="@/assets/images/icons/arrow-down.svg" alt="arrow down">
            <p class="organized-dropdown__title">1- Modul <span>Kirish va boshlang’ich bilimlar</span></p>
          </div>
          <div class="organized-dropdown__menu">
            <p class="organized-dropdown__text">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make
            </p>
            <ul class="organized-dropdown__list">
              <li class="organized-dropdown__item">
                <span>23- dars</span>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </li>
              <li class="organized-dropdown__item">
                <span>23- dars</span>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </li>
              <li class="organized-dropdown__item">
                <span>23- dars</span>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- author -->
      <div class="author" id="about-author">
        <div class="author__row">
          <div class="author__img">
            <img src="@/assets/images/organized/organized.png" alt="author">
          </div>
          <div class="author__main">
            <h3 class="author__title">Kurs muallifi</h3>
            <h2 class="author__name">Eshonov Fakhriyor</h2>
            <p class="author__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's
            </p>
            <ul class="author-list">
              <li class="author-list__item">
                <img class="author-list__icon" src="@/assets/images/icons/check.svg" alt="check">
                <p class="author-list__text">Lorem Ipsum is simply dummy text of the printing and typesetting </p>
              </li>
              <li class="author-list__item">
                <img class="author-list__icon" src="@/assets/images/icons/check.svg" alt="check">
                <p class="author-list__text">Lorem Ipsum is simply dummy text of the printing and typesetting </p>
              </li>
              <li class="author-list__item">
                <img class="author-list__icon" src="@/assets/images/icons/check.svg" alt="check">
                <p class="author-list__text">Lorem Ipsum is simply dummy text of the printing and typesetting </p>
              </li>
              <li class="author-list__item">
                <img class="author-list__icon" src="@/assets/images/icons/check.svg" alt="check">
                <p class="author-list__text">Lorem Ipsum is simply dummy text of the printing and typesetting </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>


function toggleOrganizedDropdown(event) {
  const organizedDropdowns = document.querySelectorAll('.organized-dropdown')
  const parentDropdown = event.target.closest('.organized-dropdown')

  organizedDropdowns.forEach(item => {
    if (item !== parentDropdown) {
      item.classList.remove('active')
    }
    if (item === parentDropdown) {
      item.classList.toggle('active')
    }
  })
}
 


</script>