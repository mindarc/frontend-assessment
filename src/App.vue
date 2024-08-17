<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useBreakpoint } from '@/composable/useBreakpoint'
import FloatingLink from './components/NavLink/FloatingLink.vue'
const { isMobile } = useBreakpoint()
</script>

<template>
  <RouterView />
  <FloatingLink v-if="!isMobile" />
</template>
