<script setup>
import { ref } from 'vue';
import data from '../data.json'
import banner from '@/components/banner.vue';
import accordian from '@/components/accordian.vue';
import tabs from '@/components/tabs.vue';

import { getScreenWidth } from '../main.js';

const screenWidth = ref(getScreenWidth());


</script>


<template>
  <banner />

  <div class="w-full max-w-[1350px] m-auto px-3 sm:px-12 py-10">

    <tabs v-if="screenWidth > 768" :data="data" />
    <accordian v-else :data="data" />

  </div>

</template>
