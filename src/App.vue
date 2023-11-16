<script setup>
import Hero from '@/components/Hero.vue'
import ContentSection from '@/components/ContentSection.vue'
import ScrollSmoother from './components/ScrollSmoother.vue';

</script>

<template>
  <main>
  <ScrollSmoother>
    <Hero />
    <ContentSection />
  </ScrollSmoother>
  </main>
</template>

<style scoped>

</style>