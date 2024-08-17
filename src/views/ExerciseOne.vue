<template>
  <BannerImage />
  <ListSection />
</template>

<script setup lang="ts">
import ListSection from '@/components/ExerciseOne/ListSection.vue'
import BannerImage from '@/components/ExerciseOne/BannerImage.vue'
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ExerciseOne'
})
</script>
