<template>
  <div class="tabs">
    <ul class="tabs_header">
      <li
        :class="{ active: active == i }"
        v-for="(tab, i) in tabs"
        :key="i"
        @click="setActiveTab(i)"
      >
        {{ tab.title }}
      </li>
    </ul>

    <slot />
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: [],
      active: 0,
    };
  },
  methods: {
    setActiveTab(i) {
      this.active = i;
      this.tabs.forEach((tab, index) => {
        tab.isActive = index === i;
      });
    },
  },
  created() {},
  mounted() {
    this.tabs = this.$children;
    this.setActiveTab(0);
  },
};
</script>

<style scoped>
.tabs {
  max-width: 400px;
  margin: 0 auto;
}

.tabs_header {
  margin-bottom: 10px;
  list-style: none;
  padding: 0;
  display: flex;
}

.tabs_header li {
  widows: 80px;
  text-align: center;
  padding: 10px 20px;
  margin-right: 10px;
  background-color: antiquewhite;
  border-radius: 5px;
  cursor: ponter;
  transition: 0.4 all ease-out;
}

.tabs_header li.active {
  background-color: cadetblue;
  color: white;
}
</style>
