<script setup>
defineProps({
  fillColour: {
    type: String,
    default: 'fill-black'
  },
  svgClassName: {
    type: String,
    default: 'w-12'
  }
})
</script>


<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-auto" :class="svgClassName, fillColour">
    <path d="m7 14l5-5l5 5z"></path>
  </svg>
</template>
