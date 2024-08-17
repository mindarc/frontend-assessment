<template>
  <div class="border shadow-lg accordion">
    <h2
      @click="toggle"
      class="cursor-pointer px-4 py-2 text-lg font-semibold bg-gray-200 hover:bg-gray-300 text-black flex items-center"
    >
      <a class="grow">
        {{ title }}
      </a>
      <ArrowIcon :rotate="openIndex === index ? 180 : 0" />
    </h2>
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @before-leave="beforeLeave"
      @leave="leave"
    >
      <div v-show="isOpen" class="overflow-hidden bg-white shadow rounded-b">
        <div ref="content" class="p-4">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, watch, inject, nextTick, onMounted } from 'vue'
import ArrowIcon from './ArrowIcon.vue'

const props = defineProps({
  title: String,
  index: Number
})

const emit = defineEmits(['update:open'])
const isOpen = ref(false)
const content = ref(null)

const openIndex = inject('openIndex', ref(-1))

watch(openIndex, (newIndex) => {
  isOpen.value = newIndex === props.index
})
onMounted(() => {
  isOpen.value = openIndex.value === props.index
})
const toggle = () => {
  emit('update:open', isOpen.value ? -1 : props.index)
}

const beforeEnter = (el) => {
  el.style.height = '0'
}

const enter = (el, done) => {
  nextTick(() => {
    el.style.height = `${content.value.scrollHeight}px`
    done()
  })
}

const beforeLeave = (el) => {
  el.style.height = `${content.value.scrollHeight}px`
}

const leave = (el, done) => {
  nextTick(() => {
    el.style.height = '0'
    done()
  })
}
</script>

<style scoped>
.overflow-hidden {
  transition: height 0.3s ease;
}
</style>
