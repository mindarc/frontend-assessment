<script setup>
import { ImageLoader } from '../core';

const props = defineProps({
  imageUrl: '',
  title: '',
  subtitle: ''
})
</script>
<template>
  <div class="page-banner w-100">
    <div class="page-banner__img">
      <ImageLoader
        :imageUrl="imageUrl"
        :lazyLoad="true"
        containerClass="container-class"
      />
    </div>
    <div class="page-banner__texts-container d-flex justify-content-center align-items-center flex-column">
      <h1 class="page-banner__texts-title">
        {{title}}
      </h1>
      <p class="page-banner__texts-subtitle">
        {{subtitle}}
      </p>
    </div>
  </div>
</template>
<style scoped>
  .page-banner__img {
    position: relative;
  }
  .page-banner__img::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }
  .page-banner__texts-container {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    color: #fff;
    text-align: center;
  }
  .page-banner__texts-title {
    font-size: 70px;
  }
  .page-banner__texts-subtitle {
    font-size: 40px;
  }

  @media (min-width: 768px) {
    .page-banner__img:deep() .image-loader {
      padding-bottom: 33.8542%;
    }
  }

  @media (max-width: 767px) {
    .page-banner__texts-title {
      font-size: 45px;
    }
    .page-banner__texts-subtitle {
      font-size: 25px;
    }
  }

</style>