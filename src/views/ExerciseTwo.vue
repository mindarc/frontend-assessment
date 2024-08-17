<template>
  <div class="flex flex-col items-center justify-center h-full w-full relative z-[1] tabs">
    <h2 class="text-black text-5xl font-bold mb-10">Exercise Two</h2>
    <TabDisplay
      :data="DATA_JSON"
      v-if="!isMobile"
      :currentTab="defaultTab"
      @activeTab="handleActiveTab"
    />
    <MobileView v-else :currentTab="defaultTab" @activeTab="handleActiveTab" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import TabDisplay from '@/components/ExerciseTwo/TabDisplay.vue'
import DATA_JSON from '@/constants/data.json'
import { useBreakpoint } from '@/composable/useBreakpoint'
import MobileView from '@/components/ExerciseTwo/MobileView.vue'
const { isMobile } = useBreakpoint()
const defaultTab = ref<number>(1)

const handleActiveTab = (value: number) => {
  defaultTab.value = value
}
</script>
