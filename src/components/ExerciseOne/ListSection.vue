<template>
  <div class="p-[10px] flex m-auto justify-center items-center">
    <Card :data="cardData" />
  </div>
</template>
<script setup lang="ts">
import Card from '@/components/Card/Card.vue'
import JSON_DATA from '@/constants/listSection.json'
import type { CardType } from '@/types/dataTypes'

const cardData: CardType = JSON_DATA
</script>
