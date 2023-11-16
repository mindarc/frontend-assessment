<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import contentData from '@/assets/data/data.json'
import contentImage from '@/assets/images/400x300.png'
import { useMobile } from '@/composables/useMobile'

gsap.registerPlugin(ScrollTrigger);
const contentSection = ref(null);
const ctx = ref(null);
const activeDescription = ref(0);
const { isMobileView } = useMobile();

const readMore = (index) => {
  if (activeDescription.value === index) {
    activeDescription.value = -1;
    return;
  }
  activeDescription.value = index;
}
onMounted(() => {
  nextTick(() => {
    ctx.value = gsap.context((self) => {
      const contentTL = gsap.timeline({ paused: true });
      let gradientTL = gsap.timeline({ repeat: -1, repeatDelay: 0.5, yoyo: true });
      let mm = gsap.matchMedia();
      gsap.set('.cards', { opacity: 0, yPercent: 8 })
      
      gradientTL
      .add('gradientAnim1')
      .to(contentSection.value, { duration: 2, backgroundPosition: '90% 50%', ease: 'none' })

      contentTL
      .to('.cards', { duration: 0.6, opacity: 1, yPercent: 0, stagger: 0.2 })
      // DESKTOP
      mm.add("(min-width: 576px)", () => {
        ScrollTrigger.create({
          trigger: contentSection.value,
          animation: contentTL,
          start: 'top 75%',
          onEnter: () => contentTL.play()
        });
      });
      // MOBILE
      mm.add("(max-width: 575.98px)", () => {
        ScrollTrigger.create({
          trigger: contentSection.value,
          animation: contentTL,
          start: 'top center',
          onEnter: () => contentTL.play()
        });
      });

    }, contentSection.value);
  })
})
onUnmounted(() => {
  ctx.value.revert();
});
</script>

<template>
  <div
    id="content-section"
    class="content-section container-fluid d-flex justify-content-center align-items-center py-5"
    ref="contentSection"
  >
    <div class="container">
      <div class="row h-100 justify-content-center">
        <div
          v-for="(content, index) in contentData"
          :key="`content-${index}`"
          :style="`--hover-bg-color: ${content.bg};`"
          class="cards col-12 col-md-6 col-xl-4 mb-4"
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
  background-image: linear-gradient(60deg, #f1bf42, #ef8596, #f1bf42);
  background-size: 400%;
  background-position: 10% 50%;
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
      @media (max-width: 1199.98px) {
        min-height: 325px;
      }
      @media (max-width: 767.98px) {
        transition: all 0.8s;
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
        transition: all 0.5s;
        transform-origin: center top;
        min-height: 320px;
        // height: auto;
        max-height: 320px;
      }
    }
  }
}

</style>
