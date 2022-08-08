<template>
  <div class="hero">
    <h1 class="hero__title">Hello Developer!</h1>
    <h2 class="hero__sub-title">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit
    </h2>
  </div>
</template>

<style scope>
.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  min-height: 375px;
  background: linear-gradient(0deg, rgba(1, 1, 1, 0.3), rgba(14, 14, 14, 0.3)),
    url("http://www.foaminsulationni.com/images/placeholder/600x600.gif");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: #fff;
}

.hero__title {
  margin: 0 auto;
  width: 50%;
  line-height: 3.8rem;
  font-size: 3.5rem;
  font-weight: bold;
}

.hero__sub-title {
  font-size: 2rem;
  letter-spacing: 0.1rem;
}

@media (min-width: 1024px) {
  .hero {
    background: linear-gradient(0deg, rgba(1, 1, 1, 0.3), rgba(14, 14, 14, 0.3)),
      url("https://www.kabobeesh.com/wp-content/uploads/2015/04/1920x6501.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    min-height: 550px;
  }

  .hero__title {
    margin: 0 auto;
    width: 100%;
  }
}
</style>
