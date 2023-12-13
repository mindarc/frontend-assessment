<script setup lang="ts">
import BannerImage from './BannerImage.vue';
import DataCard from './DataCard.vue';
import { data } from './dataDisplay.const';
</script>
<template>
  <BannerImage />
  <DataCard :data="data" />
</template>
