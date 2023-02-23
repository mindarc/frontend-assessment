<template>
  <div>
    <b-container fluid style="height: 400px" v-if="!isMobile">
      <div class="top-banner__container">
        <div class="img__container">
          <img
            src="https://via.placeholder.com/1920x650"
            class="img__container--img"
          />
          <div class="overlay" />
        </div>
        <div class="top-banner-title__container">
          <h1
            class="top-banner-title__container--title typing-animation"
            v-text="animatedText"
          ></h1>
          <p class="top-banner-title__container--subtitle1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
      </div>
    </b-container>
    <div class="mobile-contiainer__top-banner" v-else>
      <div class="mobile-contiainer__top-banner__container">
        <div class="img__container">
          <img
            src="https://via.placeholder.com/600x600"
            class="img__container--img"
          />
          <div class="overlay" />
        </div>
        <div class="top-banner-title__container">
          <h1
            class="top-banner-title__container--title typing-animation"
            v-text="animatedText"
          ></h1>
          <p class="top-banner-title__container--subtitle1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
      </div>
    </div>
    <div>
      <b-container class="container" fluid>
        <b-row class="b-row">
          <b-col
            v-for="(item, index) in myArray"
            :key="index"
            class="b-col"
            xs="12"
            sm="6"
            md="4"
          >
            <div class="box">
              <img class="box__img" :src="item.src" alt="" />
              <div class="box__subtitle">{{ item.subtitle }}</div>
              <div class="box__btn--container">
                <b-button class="box__btn--button">READ MORE</b-button>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "WebViewContent",
  data() {
    return {
      isMobile: false,
      text: "HELLO DEVELOPER!",
      animatedText: "",
      myArray: [
        {
          src: "https://via.placeholder.com/400x300",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipscing elit, sed do eiusmod tempor inciddunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis notrud exercitation ullamco laboris nisi ut aliquip ex ea cmmodo consquat.",
        },
        {
          src: "https://via.placeholder.com/400x300",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipscing elit, sed do eiusmod tempor inciddunt ut labore et dolore magna aliqua.",
        },
        {
          src: "https://via.placeholder.com/400x300",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipscing elit, sed do eiusmod tempor inciddunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis notrud exercitation ullamco",
        },
      ],
    };
  },
  mounted() {
    this.isMobile = window.innerWidth < 768;
    this.animateText();
  },
  methods: {
    animateText() {
      let i = 0;
      const interval = setInterval(() => {
        this.animatedText += this.text.charAt(i);
        i++;
        if (i > this.text.length) {
          clearInterval(interval);
        }
      }, 100);
    },
  },
};
</script>
