<template>
  <div class="card shadow rounded-none sm:w-full">
    <img :src="item.imageUrl" class="card-img mb-0 w-auto" />
    <div class="card-body text-center flex flex-col items-center justify-between">
      <p class="card-text">{{ item.description }}</p>
      <button
        class="px-4 py-2 text-sm font-medium text-black bg-white border-[2px] border-[#333333] rounded-full hover:bg-black hover:text-white focus:outline-none transition duration-300 transform hover:scale-105"
      >
        READ MORE
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { CardItem } from '@/types/dataTypes'

const { item } = defineProps<{
  item: CardItem
}>()
</script>
<style scoped>
img {
  @apply h-[210px] object-cover;
}

.card {
  transition: all 0.5s ease-in-out;
  @apply shadow-md p-4 w-full;
}

.card-body {
  @apply p-0;
}

.card-text {
  @apply my-[12px] mx-0 text-black text-[17px];
}

button {
  @apply text-[13px] font-bold tracking-tighter py-[10px] px-[20px];
}
.card-img {
  @apply m-auto w-full;
}
/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .card {
    @apply w-[22rem];
  }

  img {
    @apply h-[225px];
  }

  .card-text {
    @apply text-lg;
  }

  button {
    @apply text-sm;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card {
  animation: fadeIn 0.5s ease-out forwards;
}
</style>
