<script setup>
import primaryButton from '@/components/primaryButton.vue';

defineProps({
  content: {
    type: String,
    required: true
  },
})
</script>


<template>
  <div
    class="max-w-96 w-full h-full bg-white border-grey-100 border shadow-sm p-5 rounded-lg flex flex-col items-center justify-between text-center gap-4">
    <div>

      <!-- Card Image -->
      <div class="relative w-full min-h-52 mb-5">
        <img class="absolute inset-0 w-full h-full object-cover rounded-lg" src="https://via.placeholder.com/400x300"
          alt="">
      </div>

      <!-- Card Content -->
      <p class="m-0">{{ content }}</p>
    </div>

    <primaryButton :content="'READ MORE'" />
  </div>
</template>
