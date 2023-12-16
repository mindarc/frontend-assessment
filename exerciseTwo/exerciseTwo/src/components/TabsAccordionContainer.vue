<template>
  <div class="tabs-accordion-container">
    <div v-if="isDesktop">
      <div class="tabs">
        <div
          v-for="(section, index) in sections"
          :key="index"
          @click="activeTab = index"
          :class="{ 'tabs__item--active': activeTab === index }"
        >
          {{ section.title }}
        </div>
      </div>
      <div class="content" :class="{ 'content--active': sections[activeTab] }">
        <div v-html="sections[activeTab].content"></div>
      </div>
    </div>
    <div v-else>
      <AccordionItem
        v-for="(section, index) in sections"
        :key="index"
        :title="section.title"
        :content="section.content"
        :is-active="activeAccordion === index"
        @toggle="toggleAccordion(index)"
      ></AccordionItem>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue'
import AccordionItem from './AccordionItem.vue'

export default defineComponent({
  components: {
    AccordionItem,
  },
  props: {
    sectionsData: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const activeTab = ref(0)
    const activeAccordion = ref(0)
    const isDesktop = ref(window.innerWidth > 768)
    const sections = ref(props.sectionsData)

    const handleResize = () => {
      isDesktop.value = window.innerWidth > 768
    }

    const toggleAccordion = (index) => {
      if (activeAccordion.value === index) {
        activeAccordion.value = -1
      } else {
        activeAccordion.value = index
      }
    }

    const toggleTab = (index) => {
      if (activeTab.value === index) {
        activeTab.value = -1
      } else {
        activeTab.value = index
      }
    }

    onMounted(() => {
      window.addEventListener('resize', handleResize)
    })

    onBeforeUnmount(() => {
      window.removeEventListener('resize', handleResize)
    })

    return {
      activeTab,
      activeAccordion,
      isDesktop,
      sections,
      toggleAccordion,
      toggleTab
    }
  }
})
</script>

<style>
/* BEM-style CSS classes for TabsAccordionContainer with animations/transitions */
.tabs-accordion-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.tabs {
  display: flex;
  width: 100%;
  justify-content: space-between;
  background-color: #f0f0f0;
  border-radius: 4px;
  overflow: hidden;
}

.tabs__item {
  flex: 1;
  padding: 12px 16px;
  text-align: center;
  cursor: pointer;
  transition:
    background-color 0.3s ease-in-out,
    border-bottom 0.3s ease-in-out;
}

.tabs__item--active {
  background-color: #fff;
  border-bottom: 2px solid #333;
}

.content {
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 4px;
  background-color: #fff;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
}

.content--active {
  max-height: 500px;
}

</style>
