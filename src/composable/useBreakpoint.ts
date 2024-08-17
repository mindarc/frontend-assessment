import { ref, computed, onMounted, onUnmounted } from 'vue'
import type { Ref } from 'vue'

interface BreakpointData {
  isMobile: Readonly<Ref<boolean>>
}

const mobileBreakpoint = 768 //(in pixel)

export function useBreakpoint(): BreakpointData {
  const width = ref(window.innerWidth)

  const updateWidth = (): void => {
    width.value = window.innerWidth
  }

  onMounted(() => {
    window.addEventListener('resize', updateWidth)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateWidth)
  })

  const isMobile = computed<boolean>(() => width.value < mobileBreakpoint)

  return {
    isMobile
  }
}
