<template>
  <div class="flex flex-wrap container justify-center gap-6 p-6">
    <!-- <div class="card-grid"> -->
    <CardItem v-for="item in data" :key="item.id" :item="item" />
  </div>
</template>

<script setup lang="ts">
import CardItem from './CardItem.vue'
import type { CardType } from '@/types/dataTypes'

const { data } = defineProps<{
  data: CardType
}>()
</script>
<style scoped>
.card-container {
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  transition: all 0.5s ease-in-out;
}

@media (min-width: 768px) {
  .card-grid {
    @apply p-0;
  }
}
</style>
