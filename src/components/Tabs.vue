<template>
  <b-container fluid>
    <b-row align-h="center">
      <b-col cols="8">
        <b-card no-body class="tab-card">
          <b-tabs
            v-model="tabIndex"
            card
            :vertical="smallScreen ? true : false"
            fill
          >
            <b-tab
              v-for="(tab, index) in tabsArray"
              :key="index"
              :title="tab.title"
            >
              <b-card-text class="tab-card-text" v-html="tab.content" />
            </b-tab>
          </b-tabs>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      tabIndex: 0,
      windowWidth: 0,
      smallScreen: false
    };
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener("resize", this.getWindowWidth);
      this.getWindowWidth();
    });
  },
  methods: {
    getWindowWidth() {
      this.windowWidth = document.documentElement.clientWidth;
      if (this.windowWidth <= 992) {
        return (this.smallScreen = true);
      } else {
        return (this.smallScreen = false);
      }
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.getWindowWidth);
  },
  computed: {
    ...mapState(["tabsArray"])
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/components/tabs.scss";
</style>
