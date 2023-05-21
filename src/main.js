
import { createApp } from 'vue'
import App from './App.vue'

// smooth scrool
import VueSmoothScroll from 'vue3-smooth-scroll'

 

import 'swiper/css';
import 'swiper/css/navigation';
import './assets/sass/style.sass'



createApp(App).use(VueSmoothScroll, {
  duration: 800,
  offset: -150
}).mount('#app')
