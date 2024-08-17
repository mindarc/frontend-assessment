<template>
  <div
    class="tab-container mt-4 rounded overflow-hidden shadow-lg bg-white p-5 w-[40rem] text-black border"
  >
    <template v-for="(tab, index) in props?.tabs" :key="index">
      <div v-show="activeTab === `tab${index + 1}`">
        <p v-html="tab?.content || ''"></p>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { DataItem } from '@/types/dataTypes'
const props = defineProps({
  tabs: Array<DataItem>,
  activeTab: String
})
</script>

<style scoped>
/* Additional styles can go here */
</style>
