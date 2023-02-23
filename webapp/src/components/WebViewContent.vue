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
          <h1 class="top-banner-title__container--title">Hello Developer!</h1>
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
          <h1 class="top-banner-title__container--title">Hello Developer!</h1>
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
              <b-button class="box__button">READ MORE</b-button>
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
      myArray: [
        {
          src: "https://via.placeholder.com/400x300",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipscing elit, sed do eiusmod tempor inciddunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis notrud exercitation ullamco laboris nisi ut aliquip ex ea cmmodo consquat.",
        },
        {
          src: "https://via.placeholder.com/400x300",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipscing elit, sed do eiusmod tempor inciddunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis notrud exercitation ullamco laboris nisi ut aliquip ex ea cmmodo consquat.",
        },
        {
          src: "https://via.placeholder.com/400x300",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipscing elit, sed do eiusmod tempor inciddunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis notrud exercitation ullamco laboris nisi ut aliquip ex ea cmmodo consquat.",
        },
      ],
    };
  },
  mounted() {
    this.isMobile = window.innerWidth < 768;
  },
};
</script>

<style lang="scss">
.top-banner__container {
  .img__container {
    height: 50%;
    width: 100%;
    border: "solid 0.5px";
    position: absolute;
    top: 0px;
    left: 0px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    &--img {
      height: 400%;
      width: 250%;
    }

    .overlay {
      position: absolute;
      top: 0px;
      width: 100%;
      height: 100%;
      background-color: #3b3b3b91;
    }
  }

  .top-banner-title__container {
    position: relative;
    top: 20vh;
    color: white;
    &--title {
      font-size: 3em !important;
      font-weight: bolder;
      padding-bottom: 10px;
      margin-bottom: 0px;
    }

    &--subtitle1 {
      font-size: 1.5em !important;
      margin-top: 0px;
    }
  }
}

.mobile-contiainer__top-banner {
  height: 400px;
  width: 100%;
  &__container {
    .img__container {
      height: 50%;
      width: 100%;
      border: "solid 0.5px";
      position: absolute;
      top: 0px;
      left: 0px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      &--img {
        height: 200%;
        width: 250%;
      }
    }
    .overlay {
      position: absolute;
      top: 0px;
      width: 100%;
      height: 100%;
      background-color: #3b3b3b91;
    }

    .top-banner-title__container {
      position: relative;
      top: 10vh;
      color: white;
      &--title {
        font-size: 3em !important;
        font-weight: bolder;
        padding-bottom: 10px;
        margin-bottom: 0px;
      }

      &--subtitle1 {
        font-size: 1.5em !important;
        margin-top: 0px;
      }
    }
  }
}

.container {
  display: flex;
  width: 100%;
  justify-content: center;
  align-content: center;
  margin-bottom: 50px;
}

.b-col {
  display: flex;
  justify-content: center;
}

.box {
  text-align: center;
  margin-left: 20px;
  // margin-bottom: 20px;
  align-self: center;
  max-width: 200px;
  &__img {
    border-radius: 5%;
    width: 100%;
    height: 200px;
  }

  &__subtitle {
    margin-top: 10px;
    font-size: 11pt;
    margin-bottom: 10px;
  }

  &__button {
    border: black solid 1px;
    border-width: 3px;
    border-radius: 30px;
    font-weight: bold;
    padding: 10px 15px !important;
  }
}

@media only screen and (max-width: 768px) {
  .b-col {
    margin-bottom: 20px;
  }
}
</style>
