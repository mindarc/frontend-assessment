<script setup>
import banner from '@/components/banner.vue';
import card from '@/components/card.vue';

const cardData = [
  {
    "id": 0,
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }, {
    "id": 1,
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }, {
    "id": 2,
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
  },
]
</script>


<template>
  <banner />

  <div class="w-full max-w-[1350px] m-auto py-10 px-3 sm:px-12 grid lg:grid-cols-3 lg:grid-rows-none grid-rows-3 justify-items-center gap-10">
    <card v-for="card in cardData" :key="card.id" :content="card.content" />
  </div>

</template>
