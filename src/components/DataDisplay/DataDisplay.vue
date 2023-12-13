<script setup lang="ts">
import { onMounted, ref } from 'vue';
import jsonData from '../../assets/json/data.json';
import DesktopTab from './DesktopTab.vue';
import MobileAccordion from './MobileAccordion.vue';

const isMobile = ref(true);

function handleWindowResize() {
  // Check the innerWidth property if viewport is on mobile
  isMobile.value = window.innerWidth < 768;
}

onMounted(() => {
  handleWindowResize();
  window.addEventListener('resize', handleWindowResize);
});
</script>
<template>
  <div class="main-container">
    <div class="container">
      <MobileAccordion v-if="isMobile" :data="jsonData" />
      <DesktopTab v-else :data="jsonData" />
    </div>
  </div>
</template>
<style scoped>
.main-container {
  min-height: 100vh;
  height: auto;
  background-color: rgb(243, 244, 246);
  padding-top: 3rem;
}
</style>
