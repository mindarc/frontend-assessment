<template>
  <div>
    <article class="message" :class="accordionClasses">
      <div class="message-header" @click="toggleAccordion">
        <h2>{{ title }}</h2>
      </div>
      <div class="message-body">
        <div class="message-content">
          <div v-html="$slots.default[0].text"></div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    title: {},
    open: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },

  watch: {
    // value watcher for state
    open(val) {
      this.isOpen = val;
      console.log(val);
    },
  },

  mounted() {
    // console.log(this.title);
    this.isOpen = this.open;
  },
  methods: {
    toggleAccordion: function() {
      this.isOpen = !this.isOpen;
      this.$emit("clicked");
    },
  },
  computed: {
    accordionClasses: function() {
      return {
        "is-closed": !this.isOpen,
        "is-primary": this.isOpen,
        "is-dark": !this.isOpen,
      };
    },
  },

  created() {},
};
</script>

<style scoped>
.message {
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}
.message-header {
  cursor: pointer;
  font-size: 16px;
  line-height: 34px;
  font-weight: 300;
  letter-spacing: 1px;
  display: block;
  background-color: #eee;
  margin: 0;
  padding: 1px;
}
.message-body {
  color: black;
  font-size: 17px;
  line-height: 26px;
  letter-spacing: 1px;
  overflow: hidden;
  max-height: 800px;
  opacity: 1;
  transform: translate(0, 0);
  margin-top: 14px;
  z-index: 2;
  max-height: auto;
  transition: 0.4s ease-out;
}
.is-closed .message-body {
  max-height: 0;
}
.message-content {
  padding: 20px;
}
</style>
