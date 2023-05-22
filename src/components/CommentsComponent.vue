<template>
  <!-- comments -->
  <div class="comments" id="comments">
    <div class="container">
      <div class="comments-head">
        <h2 class="comments-head__title main-title">Kurs haqida <span>izohlar</span></h2>
        <div class="comments-head__buttons prev-buttons">
          <button class="comments-head__prev-button">
            <img src="@/assets/images/icons/arrow-left.svg" alt="prev">
          </button>
          <button class="comments-head__next-button">
            <img src="@/assets/images/icons/arrow-right.svg" alt="next">
          </button>
        </div>
      </div>
      <swiper class="comments-swiper" :slides-per-view="1" :loop="false" :space-between="30" :modules="modules"
        :breakpoints="breakpoints"
        :navigation="{ prevEl: '.comments-head__prev-button', nextEl: '.comments-head__next-button' }">
        <!-- Swiper slide -->
        <swiper-slide class="comments-slide">
          <div class="comments-slide__img">
            <img src="@/assets/images/comments/user.png" alt="avatar">
          </div>
          <div class="comments-slide__main">
            <h3 class="comments-slide__title">Eshonov fakhriyor</h3>
            <p class="comments-slide__text">
              Eshonov fakhriyor
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
            </p>
          </div>
        </swiper-slide>
        <!-- Swiper slide -->
        <swiper-slide class="comments-slide">
          <div class="comments-slide__img">
            <img src="@/assets/images/comments/user.png" alt="avatar">
          </div>
          <div class="comments-slide__main">
            <h3 class="comments-slide__title">Eshonov fakhriyor</h3>
            <p class="comments-slide__text">
              Eshonov fakhriyor
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
            </p>
          </div>
        </swiper-slide>
        <!-- Swiper slide -->
        <swiper-slide class="comments-slide">
          <div class="comments-slide__img">
            <img src="@/assets/images/comments/user.png" alt="avatar">
          </div>
          <div class="comments-slide__main">
            <h3 class="comments-slide__title">Eshonov fakhriyor</h3>
            <p class="comments-slide__text">
              Eshonov fakhriyor
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
            </p>
          </div>
        </swiper-slide>
        <!-- Swiper slide -->
        <swiper-slide class="comments-slide">
          <div class="comments-slide__img">
            <img src="@/assets/images/comments/user.png" alt="avatar">
          </div>
          <div class="comments-slide__main">
            <h3 class="comments-slide__title">Eshonov fakhriyor</h3>
            <p class="comments-slide__text">
              Eshonov fakhriyor
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
            </p>
          </div>
        </swiper-slide>
      </swiper>
      <div class="comments-head__buttons next-buttons">
        <button class="comments-head__prev-button">
          <img src="@/assets/images/icons/arrow-left.svg" alt="prev">
        </button>
        <button class="comments-head__next-button">
          <img src="@/assets/images/icons/arrow-right.svg" alt="next">
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper';

components: {
  Swiper,
    SwiperSlide
}

const modules = [Navigation]

const breakpoints = {
  // when window width is >= 320px
  874: {
    slidesPerView: 4 / 3,
    // spaceBetween: 20
  },
}

</script>