<template>
  <div class="banner">
    <div
      class="h-full flex flex-col items-center justify-center text-center text-white bg-[#0000004d]"
    >
      <h1>Hello Developer!</h1>
      <h2 class="leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BannerImage'
})
</script>

<style scoped src="./BannerImage.css" />
