<template>
  <div class="tab-content" v-show="isActive">
    <div v-html="$slots.default[0].text"></div>
  </div>
</template>

<script>
export default {
  props: {
    title: {},
  },

  data() {
    return {
      isActive: true,
    };
  },
};
</script>

<style scoped>
.tab-content {
  min-height: 400px;
  padding: 20px;
  border-radius: 2px;
  box-shadow: 0 1px 2px 2px gray;
}
</style>
