<template>
  <div class="flex flex-col items-center w-full relative z-[1] tabs">
    <TabNavigation :tabs="tabs" :activeTab="activeTab" @update:activeTab="handleActiveTab" />
    <TabContent :tabs="data" :activeTab="activeTab" />
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, defineEmits } from 'vue'
import type { DataItem } from '@/types/dataTypes'
import TabNavigation from '../Tab/TabNavigation.vue'
import TabContent from '../Tab/TabContent.vue'

const { data, currentTab } = defineProps<{
  data: DataItem[]
  currentTab: number
}>()

const emit = defineEmits(['activeTab'])

const tabs = data?.map((item) => item.title)
const activeTab = ref(currentTab ? `tab${currentTab}` : 'tab1')

const handleActiveTab = (value: string, index: number) => {
  activeTab.value = value
  emit('activeTab', index)
}
watch(activeTab, (newIndex) => {
  console.log('newIndex', newIndex)
})
</script>
