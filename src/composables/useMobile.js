import { ref, onMounted, onUnmounted, nextTick, computed } from 'vue';

export function useMobile() {
  const width = ref(window.innerWidth);
  const height = ref(window.innerHeight);

  const isMobileView = computed(() => width.value < 768);

  const onResize = () => {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
  };

  onMounted(() => {
    nextTick(() => {
      window.addEventListener('resize', onResize)
    });
  });

  onUnmounted(() => {
    nextTick(() => {
      window.removeEventListener('resize', onResize)
    });
  });

  return { 
    width,
    height,
    isMobileView,
  };
}