<template>
  <Hero
    heading="Hello Developer!"
    subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  />
  <Cart
    image="../assets/400x300.png"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    actionText="READ MORE"
  />
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeView'
})
</script>

<script setup>
import Hero from '../components/heroComponent.vue'
import Cart from '../components/cardComponent.vue'
</script>

<style scoped></style>
