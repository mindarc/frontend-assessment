<script setup>
import { ref, onMounted, nextTick } from 'vue';

const props = defineProps({
  tabsData: Array
});

const activeTab = ref(0);

/**
 * Updates active tab state
 *
 * @param {Integer} index
 */
const setActiveTab = (index) => {
  if (typeof index !== 'undefined') {
    if (activeTab.value === index) {
      activeTab.value = null;
      return;
    }
    activeTab.value = index
  }
}
/**
 * Sanitizes HTML string - just a placeholder since this is only an excercise :)
 *
 * @param {String} html dirty html
 * @return {String} the santized html
 */
const sanitizeHTML = (html) => {
  return html
};

</script>
<template>
  <div class="tabs w-100 row m-auto">
    <div class="list-group col-12 col-md-4 px-sm-0">
      <div
        v-for="(item, index) in tabsData"
        class="list-group__item w-100"
        :key="index"
      >
        <a
          :class="`list-group-item list-group-item-action ${index === activeTab ? 'active': ''}`"
          @click="setActiveTab(index)"
        >
          {{item.title}}
        </a>

        <div
          :class="`tab-content__container d-block d-md-none col-12 ${index === activeTab ? 'show-tab' : 'hide-tab'}`"
        >
          <div
            class="p-2"
            v-html="sanitizeHTML(item.content)"
          >
          </div>
        </div>
      </div>
    </div>

    <div class="tab-content d-none d-md-flex col-8">
      <div
        v-for="(item, index) in tabsData"
        :class="`tab-content__container ${index === activeTab ? 'show-tab' : 'hide-tab'}`"
        :key="index"
        v-html="sanitizeHTML(item.content)"
      >
      </div>
      <h3 class="align-self-center text-center w-100" v-show="activeTab === null">Select a tab.</h3>
    </div>
  </div>
</template>
<style scoped>
  .tabs {
    min-height: 200px;
  }
  .tab-content__container {
    transition: opacity ease-in-out 0.2s;
    overflow: hidden;
  }
  .hide-tab {
    max-width: 0;
    max-height: 0;
    opacity: 0;
  }
  .show-tab {
    opacity: 1;
  }
  @media (max-width: 767px) {
    .tab-content__container {
      transition: max-height ease-in-out 0.2s;
    }
    .hide-tab {
      max-width: unset;
      opacity: unset;
    }
    .show-tab {
      max-height: 150px;
      opacity: 1;
    }
  }
</style>