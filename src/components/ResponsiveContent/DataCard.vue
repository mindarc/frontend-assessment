<script setup lang="ts">
import CardItem from './CardItem.vue';
import type { CardData } from './dataDisplay.type';

const { data } = defineProps<{
  data: CardData;
}>();
</script>
<template>
  <div class="d-flex flex-wrap container card-container justify-content-center">
    <CardItem v-for="item in data" :key="item.id" :item="item" />
  </div>
</template>
<style scoped>
.card-container {
  gap: 2.5rem;
  padding: 0 18px;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
}
</style>
