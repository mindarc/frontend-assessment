<template>
  <div class="tab-nav">
    <template v-for="(item, index) in tabs" :key="index">
      <input
        type="radio"
        :name="`tab${index}`"
        :id="`tab${index + 1}`"
        class="sr-only"
        :value="`tab${index + 1}`"
        v-model="localActiveTab"
        @change="updateActiveTab(index + 1)"
      />
      <label
        class="tab_label cursor-pointer"
        :for="`tab${index + 1}`"
        :class="{ active: localActiveTab === `tab${index + 1}` }"
      >
        {{ item }}
      </label>
    </template>
    <div class="indicator" :style="indicatorStyle"></div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits } from 'vue'

const props = defineProps({
  tabs: Array<string>,
  activeTab: String
})

const emit = defineEmits(['update:activeTab'])

const localActiveTab = computed({
  get: () => props.activeTab ?? '',
  set: (val) => emit('update:activeTab', val)
})

function updateActiveTab(index: number) {
  emit('update:activeTab', localActiveTab.value, index)
}

const indicatorStyle = computed(() => {
  const index = parseInt(localActiveTab?.value?.replace('tab', '')) - 1
  const width = 130 // Assuming a fixed width for simplicity
  return {
    left: `${index * width + 2}px`,
    width: '130px'
  }
})
</script>

<style scoped>
.component-title {
  @apply w-full absolute top-[30px] left-0 p-0 m-0 text-[1rem] font-bold text-[#888] text-center;
  z-index: 999;
}

.tab-nav {
  @apply relative flex flex-row items-start p-[2px] bg-[#dadadb];
  border-radius: 9px;
}

.indicator {
  content: '';
  @apply w-[130px] h-[28px] bg-[#ffffff] absolute top-[2px] left-[2px] shadow-lg font-bold;
  z-index: 9;
  border: 0.5px solid rgba(0, 0, 0, 0.04);
  border-radius: 7px;
  transition: all 0.2s ease-out;
}

.tab {
  @apply w-[130px] h-[28px] absolute opacity-0;
  z-index: 99;
  outline: none;
}
.active {
  @apply font-extrabold;
}
.tab_label {
  @apply w-[130px] h-[28px] relative flex items-center justify-center border-0 text-xs opacity-[0.75] cursor-pointer text-black;
  z-index: 999;
}

.tab--1:checked ~ .indicator {
  left: 2px;
}

.tab--2:checked ~ .indicator {
  left: calc(130px + 2px);
}

.tab--3:checked ~ .indicator {
  left: calc(130px * 2 + 2px);
}
.tab--4:checked ~ .indicator {
  left: calc(130px * 3 + 2px);
}
.tab_label {
  /* Additional styling */
}
.indicator {
  /* Styling for the indicator */
  transition: left 0.3s ease;
}
</style>
