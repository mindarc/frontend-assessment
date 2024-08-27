<script setup>

defineProps({
  content: {
    type: String,
    required: true
  },
  borderColour: {
    type: String,
    default: 'border-black'
  },
  textColour: {
    type: String,
    default: 'text-black'
  }
})
</script>

<template>
  <!-- Class will render border and text colours based on props, otherwise default is black -->
  <button class="border-4 rounded-full px-4 py-2 font-bold tracking-widest" :class="borderColour, textColour">
    {{ content }}
  </button>
</template>
