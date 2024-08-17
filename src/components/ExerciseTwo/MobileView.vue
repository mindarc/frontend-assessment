<template>
  <div class="space-y-2 p-2 w-full">
    <AccordionItem
      v-for="(item, index) in DATA"
      :key="index"
      :index="index"
      :title="item.title"
      @update:open="handleOpen"
    >
      <p v-html="item.content || ''" class="text-black" />
    </AccordionItem>
  </div>
</template>

<script setup>
import AccordionItem from '@/components/Accordion/AccordionItem.vue'
import { ref, provide } from 'vue'
import DATA from '@/constants/data.json'

const props = defineProps({
  currentTab: Number
})
const openIndex = ref(props.currentTab ? props.currentTab - 1 : 0) // open default first index tab
const emit = defineEmits(['activeTab'])
provide('openIndex', openIndex) // Provide the open index to all children

const handleOpen = (index) => {
  openIndex.value = openIndex.value === index ? -1 : index
  emit('activeTab', index + 1)
}
</script>
