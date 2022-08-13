<script setup>
import { Card } from '@/components';

const props = defineProps({
  cardData: Array
});

const emit = defineEmits(['onBtnClickCallback']);

/**
 * Callback function for clicking button on card
 *
 * @param {Object} e
 */
const onBtnClick = (e) => {
  emit('onBtnClickCallback', e);
}
</script>

<template>
  <div class="cards-list">
    <Card
      v-if="cardData && cardData.length"
      v-for="(item, index) in cardData"
      :key="index"
      :imageUrl="item.image"
      :description="item.content"
      buttonText="Read more"
      @onBtnClickCallback="onBtnClick"
    />
    <h3 v-else>No data.</h3>
  </div>
</template>

<style scoped>
  .cards-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
  }
  @media (max-width: 767px) {
    .cards-list {
      grid-template-columns: 1fr;
    }
  }
</style>