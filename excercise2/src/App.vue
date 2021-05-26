<template>
  <div id="app">
    <div class="desktop">
      <Tabs>
        <Tab
          v-for="(data, index) in sections"
          :key="index"
          :title="data.title"
          >{{ data.content }}</Tab
        >
      </Tabs>
    </div>

    <div class="mobile">
      <Accord
        v-for="(info, index) in sections"
        :key="index"
        :title="info.title"
        :open="contentVisibility == index"
        @clicked="setActiveAccordian(index)"
        >{{ info.content }}</Accord
      >
    </div>
  </div>
</template>

<script>
import Tab from "./components/tab/Tab.vue";
import Tabs from "./components/tab/Tabs.vue";
import Accord from "./components/accord/Accord.vue";
import json from "./assets/data.json";

export default {
  name: "App",
  components: {
    Tabs,
    Tab,
    Accord,
  },

  data() {
    return {
      sections: [],
      contentVisibility: 0,
    };
  },

  methods: {
    setActiveAccordian(index) {
      this.contentVisibility = index;
    },
  },

  created() {
    this.sections = json;
    // console.log();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.mobile {
  display: none;
}

@media screen and (max-width: 600px) {
  .mobile {
    display: block;
  }
  .desktop {
    display: none;
  }
}
</style>
