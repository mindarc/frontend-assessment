

<template>
  <div class="hero">
  <div>
    <div class="d-flex justify-content-center align-items-center">
      <div class="text-white">
        <h1 >{{ heading }}</h1>
        <p>{{ subheading }}</p>
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
  height: 40vh; /* S300pxet the height as needed */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
}
</style>
