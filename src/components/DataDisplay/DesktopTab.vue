<script setup lang="ts">
import type { Data } from './dataDisplay.type';

const { data } = defineProps<{
  data: Data;
}>();
</script>

<template>
  <ul class="nav nav-custom rounded shadow" id="desktopTab" role="tablist">
    <li class="nav-item" role="presentation" v-for="(item, index) in data" :key="index">
      <button
        :class="['nav-link', index === 0 ? 'active' : '']"
        :id="'tab' + index"
        data-bs-toggle="tab"
        :data-bs-target="'#tab' + index + '-pane'"
        type="button"
        role="tab"
        :aria-controls="'tab' + index + '-pane'"
        aria-selected="true"
      >
        {{ item.title }}
      </button>
      <span class="nav-active-identifier"></span>
    </li>
  </ul>
  <div class="tab-content shadow rounded mt-3" id="desktopTabContent">
    <div
      v-for="(item, index) in data"
      :key="index"
      :class="['tab-pane fade p-3 rounded', index === 0 ? 'show active' : '']"
      :id="'tab' + index + '-pane'"
      role="tabpanel"
      :aria-labelledby="'tab' + index"
      :tabindex="index"
      v-html="item.content"
    ></div>
  </div>
</template>
<style scoped>
.nav-custom {
  background-color: white;

  .nav-item {
    flex: 1 1 auto;

    &:not(:last-child) {
      border-right: 1px solid var(--bs-gray-400);
    }
  }
}

.nav-custom .nav-item .nav-link {
  color: rgb(107, 114, 128);
  width: 100%;

  &.active {
    color: var(--bs-primary);
  }
}

.nav-custom .nav-item .nav-link + .nav-active-identifier {
  display: none;
  width: 100%;
  height: 2px;
  background: var(--bs-primary);
}

.nav-custom .nav-item .nav-link.active + .nav-active-identifier {
  display: block;
}

.tab-content {
  background-color: white;

  .tab-pane {
    min-height: 200px;
    height: auto;
  }
}
</style>
