<template>
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
</template>

<script>
export default {
  name: "TopBanner",
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
      background-color: #9494948e;
    }
  }

  .top-banner-title__container {
    position: relative;
    top: 16vh;
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
</style>
