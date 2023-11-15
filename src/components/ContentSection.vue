<script setup>
import { ref } from 'vue'
import contentData from '@/assets/data/data.json'
import contentImage from '@/assets/images/400x300.png'
import { useMobile } from '@/composables/useMobile'

const activeDescription = ref(0);
const { isMobileView } = useMobile();
const readMore = (index) => {
  if (activeDescription.value === index) {
    activeDescription.value = -1;
    return;
  }
  activeDescription.value = index;
}
console.log(isMobileView.value)
</script>

<template>
  <div id="content-section" class="content-section container-fluid d-flex justify-content-center align-items-center py-5">
    <div class="container">
      <div class="row h-100 justify-content-center">
        <div
          v-for="(content, index) in contentData"
          :key="`content-${index}`"
          :style="`--hover-bg-color: ${content.bg};`"
          class="cards col-12 col-md-6 col-lg-4 mb-4"
        >
          <div
            :style="{ backgroundColor: content.bg }"
            class="content-cards w-100 h-100 p-4 border border-2 rounded-3 text-lg-left text-center user-select-none"
          >
            <img class="content-cards__image img-fluid" :src="contentImage" :alt="`content image-${index}`" />
            <div :style="{ backgroundColor: content.bgLight }" class="content-cards_body p-2">
              <h3 class="content-cards__title mb-3">{{ content.title }}</h3>
              <div
                v-html="content.content"
                :class="{ 'active': activeDescription === index }"
                class="content-cards__description"
              ></div>
              <button v-if="isMobileView" @click="readMore(index)" class="content-cards__button text-uppercase fw-bold mb-3">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#content-section {
  background: #1a1a1a;
  .content-cards {
    transition: all 0.8s ease-out;
    color: #fff;
    height: auto;
    &__image {
      @media (max-width: 767.98px) {
        width: 100%;
      }
    }
    &__description {
      transform-origin: center bottom;
      overflow: hidden;
      min-height: 240px;
      height: auto;
      @media (max-width: 1198.98px) {
        min-height: 320px;
        height: auto;
        height: 320px;
      }
      @media (max-width: 767.98px) {
        transition: min-height 0.8s ease-out;
        min-height: 0;
        height: 0;
      }
      ul {
        color: red;
      }
    }
    &__button {
      background: none;
      border-radius: 25px;
      border: 2px solid #fff;
      color: #fff;
      padding: 0.8rem 2rem;
      &:hover {
        background: #fff;
        color: var(--hover-bg-color);
        transform: translate3d(0, 1%, 0);
        -webkit-transform: translate3d(0, 1%, 0);
        -moz-transform: translate3d(0, 2%, 0);
      }
    }
    .active {
      @media (max-width: 767.98px) {
        transition: min-height 0.8s ease-out;
        transform-origin: center top;
        min-height: 320px;
      }
    }
  }
}

</style>
