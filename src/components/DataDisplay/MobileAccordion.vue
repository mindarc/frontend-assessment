<script setup lang="ts">
import type { Data } from './dataDisplay.type';

const { data } = defineProps<{
  data: Data;
}>();
</script>

<template>
  <div class="accordion shadow rounded" id="mobile-accordion">
    <div class="accordion-item" v-for="(item, index) in data" :key="index">
      <h2 class="accordion-header">
        <button
          :class="['accordion-button', index !== 0 ? 'collapsed' : '']"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="'#collapse-' + index"
          :aria-controls="'collapse-' + index"
          :aria-expanded="index === 0"
        >
          {{ item.title }}
        </button>
      </h2>
      <div
        :id="'collapse-' + index"
        :class="['accordion-collapse collapse', index === 0 ? 'show' : '']"
        data-bs-parent="#mobile-accordion"
      >
        <div class="accordion-body" v-html="item.content"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.accordion-button {
  text-decoration: underline 0.15em rgba(0, 0, 0, 0);
  transition: text-decoration-color 300ms;
}

.accordion-button:not(.collapsed):focus {
  text-decoration-color: rgba(0, 0, 0, 1);
}
</style>
