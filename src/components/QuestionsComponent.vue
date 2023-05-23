<template>
  <!-- questions -->
  <div class="questions">
    <div class="container">
      <h2 class="questions__title main-title">eNG KO’P BERILADIGAN <span>SAVOLLAR</span></h2>
      <div class="questions-main">
        <!-- question dropdown -->
        <div class="questions-dropdown">
          <div class="questions-dropdown__toggle" @click="toggleQuestionDropdown($event)" data-toggle="0">
            <div class="questions-dropdown__image">
              <img src="@/assets/images/icons/question.svg" alt="question">
            </div>
            <h4 class="questions-dropdown__title">Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry'...</h4>
            <div class="questions-dropdown__icon">
              <img src="@/assets/images/icons/arrow-down.svg" alt="arrow down">
            </div>
          </div>
          <div class="questions-dropdown__body active" data-body="0">
            <p class="questions-dropdown__text">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
              Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a
              Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the
              undoubtable source.
            </p>
          </div>
        </div>
        <!-- question dropdown -->
        <div class="questions-dropdown">
          <div class="questions-dropdown__toggle" @click="toggleQuestionDropdown($event)" data-toggle="1">
            <div class="questions-dropdown__image">
              <img src="@/assets/images/icons/question.svg" alt="question">
            </div>
            <h4 class="questions-dropdown__title">Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry'...</h4>
            <div class="questions-dropdown__icon">
              <img src="@/assets/images/icons/arrow-down.svg" alt="arrow down">
            </div>
          </div>
          <div class="questions-dropdown__body active" data-body="1">
            <p class="questions-dropdown__text">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
              Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a
              Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the
              undoubtable source.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- buy -->
  <div class="buy" id="buy">
    <div class="container">
      <div class="buy__row">
        <!-- buy card -->
        <div class="buy-card">
          <h4 class="buy-card__title">KURS NARXI</h4>
          <h3 class="buy-card__price">500 000 SO’M / OY</h3>
          <ul class="buy-card__list card-list">
            <!-- card list item -->
            <div class="card-list__item">
              <div class="card-list__icon">
                <img src="@/assets/images/icons/check.svg" alt="check">
              </div>
              <p class="card-list__text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </p>
            </div>
            <!-- card list item -->
            <div class="card-list__item">
              <div class="card-list__icon">
                <img src="@/assets/images/icons/check.svg" alt="check">
              </div>
              <p class="card-list__text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </p>
            </div>
            <!-- card list item -->
            <div class="card-list__item">
              <div class="card-list__icon">
                <img src="@/assets/images/icons/check.svg" alt="check">
              </div>
              <p class="card-list__text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </p>
            </div>
          </ul>
        </div>
        <!-- buy card -->
        <form action="#" class="buy-card">
          <h4 class="buy-card__title">TEZKOR SOTIB OLISH</h4>
          <label for="name" class="buy-card__label">
            ISM
            <input type="text" class="buy-card__input" id="name" name="name" placeholder="(Fakhriyor)">
          </label>
          <label for="name" class="buy-card__label">
            TELEFON RAQAMINGIZ
            <input type="tel" class="buy-card__input" id="name" name="name" placeholder="+998(99)-123-45-67" value="+998">
          </label>
          <button type="button" class="buy-card__button buy-button">SOTIB OLISH</button>
        </form>
      </div>
    </div>
  </div>
</template>


<script setup>

function toggleQuestionDropdown(event) {
  const questionDropdowns = document.querySelectorAll('.questions-dropdown')
  const parentDropdown = event.target.closest('.questions-dropdown')

  questionDropdowns.forEach(item => {
    if (item !== parentDropdown) {
      item.classList.remove('active')
    }
    if (item === parentDropdown) {
      item.classList.toggle('active')
    }
  })
}

</script>
