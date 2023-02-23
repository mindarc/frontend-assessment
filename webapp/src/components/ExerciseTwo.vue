<template>
  <div v-if="!isMobile">
    <b-tabs content-class="mt-3">
      <b-tab v-for="(tab, k) in data" :key="k" :title="tab.title">
        <div v-html="tab.content"></div>
      </b-tab>
    </b-tabs>
  </div>
  <div v-else class="accordion" role="tablist">
    <b-card v-for="(tab, k) in data" :key="k" no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle="`accordion-${k}`" variant="info">
          {{ tab.title }}
        </b-button>
      </b-card-header>
      <b-collapse
        :id="`accordion-${k}`"
        visible
        accordion="my-accordion"
        role="tabpanel"
      >
        <b-card-body>
          <b-card-text v-html="tab.content"></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
import * as tab_data from "@/utils/data.json";

export default {
  name: "ExerciseTwo",
  data() {
    return {
      isMobile: false,
      data: tab_data.default,
    };
  },
  mounted() {
    this.isMobile = window.innerWidth < 768;
  },
};
</script>
