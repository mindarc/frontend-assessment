<template>
  <button
    @click="handleNavigation"
    class="fixed bottom-8 right-8 flex items-center justify-center w-16 h-16 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg cursor-pointer transition ease-in duration-200 focus:outline-none z-50"
    aria-label="Floating Action Button"
  >
    <slot>
      <!-- Default icon if no slot is provided -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        :style="{ transform: `rotate(${isExerciseOne ? 0 : 180}deg)` }"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </slot>
  </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const isExerciseOne = computed(() => !(route.name as string)?.toLowerCase()?.includes('two'))

const handleNavigation = () => {
  if (isExerciseOne.value) {
    router.push('/exercise-two')
  } else {
    router.push('/')
  }
}
</script>
