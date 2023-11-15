<template>
  <div id="hero-section" class="hero-section container-fluid d-flex justify-content-center align-items-center">
    <div class="container-fluid h-100">
      <div class="row h-100 justify-content-center">
        <div class="col-12 d-flex justify-content-center align-items-center">
          <div class="backdrop position-absolute w-100 h-100"></div>
          <div class="hero-content text-center">
            <h1 class="hero-content__title text-white">Hello Developer!</h1>
            <p class="hero-content__sub-text text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
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
  height: 100vh;
  @media (max-width: 575.98px) {
    background: url(@/assets/images/600x600.png) no-repeat center center;
    background-size: cover;
    height: 600px;
  }
  
  .hero-content {
    &__title {
      font-size: 72px;
      text-shadow: 2px 2px 8px #f1bf42;
    }
    &__sub-text {
      font-size: 32px;
      text-shadow: 2px 2px 8px #8f6895;
    }
  }
}
</style>
