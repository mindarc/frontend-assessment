<script setup lang="ts"></script>
<template>
  <div class="banner">
    <div
      class="h-100 d-flex flex-column align-items-center justify-content-center text-center text-white"
    >
      <h1>Hello Developer!</h1>
      <h2 class="lh-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
    </div>
  </div>
</template>

<style scoped>
.banner {
  background-image: url(https://via.placeholder.com/600x600);
  height: 320px;
  background-size: cover;
  background-position: center;

  > div {
    background-color: rgb(0 0 0 / 30%);
  }
}

h1 {
  font-size: 3rem;
  letter-spacing: 0.1rem;
  line-height: 1.8;
  margin-bottom: 0;
  font-weight: bolder;
}

h2 {
  letter-spacing: 0.13rem;
  margin-bottom: 0;
  font-size: 1.5rem;
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .banner {
    background-image: url(https://via.placeholder.com/1920x650);
    height: 570px;
  }

  h1 {
    font-size: 4rem;
  }

  h2 {
    letter-spacing: 0.17rem;
    font-size: 2.3rem;
  }
}
</style>
