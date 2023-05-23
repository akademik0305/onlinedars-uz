<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import RecommendedComponent from '@/components/RecommendedComponent.vue'
import ChooseComponent from '@/components/ChooseComponent.vue'
import AboutCourse from '@/components/AboutCourse.vue'
import CharacteristicComponent from '@/components/CharacteristicComponent.vue'
import KnowledgeComponent from '@/components/KnowledgeComponent.vue'
import OrganizedComponent from '@/components/OrganizedComponent.vue'
import CompleteComponent from '@/components/CompleteComponent.vue'
import CommentsComponent from '@/components/CommentsComponent.vue'
import PaymentComponent from '@/components/PaymentComponent.vue'
import QuestionsComponent from '@/components/QuestionsComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

components: {
  HeaderComponent,
  RecommendedComponent,
  ChooseComponent,
  AboutCourse,
  CharacteristicComponent,
  KnowledgeComponent,
  OrganizedComponent,
  CompleteComponent,
  CommentsComponent,
  PaymentComponent,
  QuestionsComponent,
  FooterComponent
}

</script >

<template>
  <header-component></header-component>
  <recommended-component></recommended-component>
  <choose-component></choose-component>
  <about-course></about-course>
  <characteristic-component></characteristic-component>
  <knowledge-component></knowledge-component>
  <organized-component></organized-component>
  <complete-component></complete-component>
  <comments-component></comments-component>
  <payment-component></payment-component>
  <questions-component></questions-component>
  <footer-component></footer-component>
</template>

<style scoped></style>
