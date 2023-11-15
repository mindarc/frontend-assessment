<script setup>
// import WelcomeItem from './WelcomeItem.vue'

</script>

<template>
  <div id="hero-section" class="hero-section container-fluid d-flex justify-content-center align-items-center vh-100">
    <div class="container-fluid h-100">
      <div class="row h-100 justify-content-center">
        <div class="col-12 d-flex justify-content-center align-items-center">
          <div class="content text-center">
            <h1 class="fs-1 text-white">Hello Developer!</h1>
            <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#hero-section {
  background: url(@/assets/images/1920x650.png) no-repeat center center;
  background-size: cover;
  font-size: 32px;
}
</style>
