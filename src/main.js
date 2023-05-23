import { createApp } from 'vue'
import App from './App.vue'

// smooth scrool
import VueSmoothScroll from 'vue3-smooth-scroll'
// import  bootstrap  from 'bootstrap/dist/js/bootstrap.bundle'

//Dashboard
// import '@/assets/dashboard/icon/themify-icons/themify-icons.css' 
// import '@/assets/dashboard/icon/feather/css/feather.css' 
// import '@/assets/dashboard/pages/menu-search/css/component.css' 
// import '@/assets/dashboard/css/style.css' 
// import '@/assets/dashboard/css/jquery.mCustomScrollbar.css' 

// import '@/assets/dashboard/bower_components/bootstrap/dist/js/bootstrap.min.js'

// import 'bootstrap/dist/css/bootstrap.css'
import 'swiper/css';
import 'swiper/css/navigation';
import './assets/sass/style.sass'


// Vue.use(IconsPlugin)
// Vue.use(BootstrapVue)

createApp(App).use(VueSmoothScroll, {
  duration: 800,
  offset: -150
})
.mount('#app')