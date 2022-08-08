<script setup>
import DataTabsVue from "./components/DataTabs.vue";
</script>

<template>
  <div class="container">
    <DataTabsVue />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}

@media (min-width: 1024px) {
  .container {
    border: none;
  }
}
</style>
