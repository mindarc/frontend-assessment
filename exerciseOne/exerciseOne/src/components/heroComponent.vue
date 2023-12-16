

<template>
  <div class="hero">
  <div>
    <div class="d-flex justify-content-center align-items-center text-center">
      <div class="text-white">
        <h1 class="text-bold">{{ heading }}</h1>
        <h6>{{ subheading }}</h6>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
defineProps({
  heading: {
    type: String,
    required: true
    },
    subheading: {
      type: String,
      required: true
    }
})
</script>

<style scoped>
.hero {
  background-image: url('../assets/1920x450.png'); /* Path to your local image file */
  background-position: center;
  background-size: cover;
  height: 45vh; /* S300pxet the height as needed */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
}
</style>
