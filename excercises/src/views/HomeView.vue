<script setup>
import { onMounted, ref, nextTick } from 'vue'
import { PageBanner, CardsList } from '@/components';
import cardData from '@/assets/data/cardData.json';
import router from '../router';

let isMobile = ref(false);
let doCheck;
const bannerImage = {
  desktop: 'https://via.placeholder.com/1920x650',
  mobile: 'https://via.placeholder.com/600x600'
}
const texts = {
  title: "Hello, MindArc!",
  subtitle: "Looking forward to working with you."
}

/**
 * sets isMobile state if small screen
 * */
const checkIfMobile = () => {
  // wait for user to finish resizing before executing
  clearTimeout(doCheck);
  doCheck = setTimeout(() => {
    isMobile.value = window.innerWidth < 768;
  }, 80);
};

/**
 * Go to excercise 2 :)
 * */
const onClickBtnCard = () => {
  router.push({name: 'about'});
};

onMounted(() => {
  checkIfMobile();
  nextTick(() => {
    window.addEventListener('resize', checkIfMobile)
  })
});

</script>

<template>
  <div class="wrapper">
    <PageBanner
      :imageUrl="isMobile ? bannerImage.mobile : bannerImage.desktop"
      :title="texts.title"
      :subtitle="texts.subtitle"
    />
    <div class="container py-5">
      <CardsList
        :cardData="cardData"
        @onBtnClickCallback="onClickBtnCard"
      />
    </div>
  </div>
</template>