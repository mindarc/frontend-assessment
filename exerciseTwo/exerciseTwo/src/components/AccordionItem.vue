<template>
  <div class="accordion-item" :class="{ 'accordion-item--active': isActive }" @click="toggleAccordion">
    <div class="accordion-item__title">{{ title }}</div>
    <div v-if="isActive" class="accordion-item__content" v-html="content"></div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    isActive: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    toggleAccordion() {
      this.$emit('toggle');
    }
  }
};
</script>

<style scoped>
/* Example styles using BEM */
.accordion-item {
  border: 1px solid #ccc;
  margin-bottom: 5px;
  cursor: pointer;
}

.accordion-item--active {
  background-color: #f0f0f0;
}

.accordion-item__title {
  padding: 10px;
}

.accordion-item__content {
  padding: 10px;
}
</style>
