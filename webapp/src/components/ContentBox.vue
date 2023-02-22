<template>
  <div class="container">
    <b-container
      fluid
      style="width: 100%; display: flex; justify-content: center"
    >
      <b-row class="b-row">
        <b-col v-for="(item, index) in myArray" :key="index" md="4">
          <div class="box">
            <img class="box__img" :src="item.src" alt="" />
            <div class="box__subtitle">{{ item.subtitle }}</div>
            <b-button class="box__button">READ MORE</b-button>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "ContentBox",
  compatConfig: { MODE: 3 },
  data() {
    return {
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
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
}

.b-row {
  display: flex;
  width: 55%;
  justify-content: space-between;
  align-items: center;
}
.box {
  text-align: center;
  margin-left: 20px;
  // margin-bottom: 20px;
  max-width: 200px;
  &__img {
    border-radius: 5%;
    width: 100%;
    height: 200px;
  }

  &__subtitle {
    margin-top: 10px;
    font-size: 11pt;
    margin-bottom: 40px;
  }

  &__button {
    border: black solid 1px;
    border-width: 3px;
    border-radius: 30px;
    font-weight: bold;
    padding: 10px 15px !important;
    margin-top: 40px !important;
  }
}
</style>
