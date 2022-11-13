<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
main {
    display: flex;
  }
@media (max-width: 768px) {
  main {
    display: block;
  }
}
@media (max-width: 1024px) {
  main {
    margin: 0;
  }
}
@media screen and (min-width: 1024px) {
  main {
    margin: 0 4rem;
  }
}
</style>