<script setup>
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother'
gsap.registerPlugin(ScrollSmoother);

onMounted(() => {
  ScrollSmoother.create({
    wrapper: '#smooth-wrapper',
    smooth: 2,
    smoothTouch: false,
    effects: true,
  });
})

</script>
<template>
  <div id="smooth-wrapper" ref="scroll-smoother">
    <div id="smooth-content">
      <slot></slot>
    </div>
  </div>
</template>
