<template>
  <div class="header">
    <div class="burger" @click="closeBurger()">
      <ul class="burger-menu">
        <li class="burger-menu__item"><a href="#about-course" v-smooth-scroll class="burger-menu__link">Muallifdan
            video</a></li>
        <li class="burger-menu__item"><a href="#about-author" v-smooth-scroll class="burger-menu__link">Muallif
            haqida</a></li>
        <li class="burger-menu__item"><a href="#organized" v-smooth-scroll class="burger-menu__link">Kurs qanday
            tashkil topgan</a></li>
        <li class="burger-menu__item"><a href="#comments" v-smooth-scroll class="burger-menu__link">Izohlar</a></li>
        <button class="burger__close" @click="closeBurger">
          <img src="@/assets/images/icons/x.svg" alt="close" />
        </button>
        <button class="burger__buy buy-button">Sotib olish</button>
      </ul>
    </div>
    <!-- navbar -->
    <div class="navbar">
      <div class="container">
        <div class="navbar__row">
          <div class="navbar__logo">
            <img src="@/assets/images/logo/logo-png.png" alt="Onlinedars">
          </div>
          <ul class="navbar-menu">
            <li class="navbar-menu__item"><a href="#about-course" v-smooth-scroll class="navbar-menu__link">Muallifdan
                video</a></li>
            <li class="navbar-menu__item"><a href="#about-author" v-smooth-scroll class="navbar-menu__link">Muallif
                haqida</a></li>
            <li class="navbar-menu__item"><a href="#organized" v-smooth-scroll class="navbar-menu__link">Kurs qanday
                tashkil topgan</a></li>
            <li class="navbar-menu__item"><a href="#comments" v-smooth-scroll class="navbar-menu__link">Izohlar</a></li>
          </ul>
          <button class="navbar__button buy-button">SOTIB OLISH</button>
          <button class="navbar__burger" @click="openBurger">
            <img src="@/assets/images/icons/menu.svg" alt="menu">
          </button>
        </div>
      </div>
    </div>

    <!-- header-main -->
    <div class="header-main">
      <div class="container">
        <div class="header-main__row">
          <div class="header-main__content">
            <p class="header-main__text">Umr o’tib ketmoqda....</p>
            <h2 class="header-main__title main-title">Balkim <span>zamonaviy</span> kasbni o’rganish vaqti kelgandir?
            </h2>
            <!-- advantages -->
            <div class="header-advantages">
              <h4 class="header-advantages__title">Zamonaviy kasb o’rganishni afzalliklari</h4>
              <div class="header-advantages__row">
                <!-- advantages item -->
                <div class="header-advantages__item">
                  <div class="header-advantages__img">
                    <img src="@/assets/images/header/header-icon-1.svg" alt="">
                  </div>
                  <p class="header-advantages__text">Istalgan joyda ishlay olish</p>
                </div>
                <!-- advantages item -->
                <div class="header-advantages__item">
                  <div class="header-advantages__img">
                    <img src="@/assets/images/header/header-icon-2.svg" alt="">
                  </div>
                  <p class="header-advantages__text">O’zi - o’ziga ho’jayin bo’la olish</p>
                </div>
                <!-- advantages item -->
                <div class="header-advantages__item">
                  <div class="header-advantages__img">
                    <img src="@/assets/images/header/header-icon-3.svg" alt="">
                  </div>
                  <p class="header-advantages__text">Yaxshi maosh qozonish</p>
                </div>
                <!-- advantages item -->
                <div class="header-advantages__item">
                  <div class="header-advantages__img">
                    <img src="@/assets/images/header/header-icon-4.svg" alt="">
                  </div>
                  <p class="header-advantages__text">Va albatta katta muvaffaqiyatlarga erishish</p>
                </div>
              </div>
            </div>
          </div>
          <div class="header-main__img-bg">
            <div class="header-main__img">
              <img src="@/assets/images/header/header-image.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
// sticky navbar
onMounted(() => {
  const navbarHeight = document.querySelector(".navbar").clientHeight
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", (event) => {
    if (window.scrollY > navbarHeight) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky")
    }
  })

})

// open menu burger
function openBurger() {
  const burger = document.querySelector('.burger')
  burger.classList.add('active')
}

// close menu burger
function closeBurger() {
  const burger = document.querySelector('.burger')
  burger.classList.remove('active')
}


</script>