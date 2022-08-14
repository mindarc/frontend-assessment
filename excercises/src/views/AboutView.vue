<script setup>
import { Tabs } from '@/components';
import data from '@/assets/data/data.json';
</script>

<template>
  <div class="about container">
    <Tabs :tabsData="data" />
  </div>
</template>

<style>
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
</style>
