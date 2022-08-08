<script>
import json from "../../../data.json";
export default {
  data() {
    return {
      jsonData: json,
      selectedIndex: 0,
      isMobile: false,
      isContentVisible: false,
    };
  },
  methods: {
    switchView(index) {
      this.selectedIndex = index;
    },
    toggleContent(index) {
      this.switchView(index);
      this.isContentVisible = !this.isContentVisible;
    },
    onResize() {
      this.isMobile = window.innerWidth < 1024;
    },
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
};
</script>

<template>
  <div class="tabs__container">
    <div class="tabs__accordion">
      <div v-for="(data, index) in jsonData" :key="index">
        <div
          :class="[
            index === selectedIndex && !isMobile ? 'tabs__tab-underline' : '',
            'tabs__tab',
          ]"
          @click="!isMobile ? switchView(index) : toggleContent(index)"
        >
          {{ data.title }}
        </div>
        <div
          v-if="isMobile"
          :class="[
            index !== selectedIndex
              ? 'accordion__content-hidden'
              : 'accordion__content-visible',
          ]"
        >
          <div class="accordion__content" v-html="data.content" />
        </div>
      </div>
    </div>
    <div v-if="!isMobile" class="tab__content">
      <div v-html="jsonData[selectedIndex].content" />
    </div>
  </div>
</template>

<style scoped>
.tabs__container {
  display: flex;
  flex-direction: column;
  justify-self: center;
  width: 700px;
  height: 600px;
}
.tabs__accordion {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #000;
}

.tabs__tab {
  padding: 0.5rem;
  width: 100%;
  background-color: #f6921e;
  margin-bottom: 10px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
}

.tab__content {
  color: #000;
  padding: 1rem;
}

.accordion__content-hidden {
  display: none;
}

.accordion__content-visible {
  display: block;
}

.accordion__content {
  padding: 0 1rem 1rem 1rem;
}

@media (min-width: 1024px) {
  .tabs__accordion {
    flex-direction: row;
    justify-content: flex-start;
  }

  .tabs__tab {
    padding: 0.5rem;
  }

  .tab__content {
    border: 1px solid #ccc;
  }

  .tabs__tab-underline {
    background: #d98a2e;
  }
}
</style>
