<template>
  <main class="container--homepage">
    <header class="hero">
      <div class="hero__text">
        <h1 class="hero__text--heading">Hello, Developer!</h1>
        <h4 class="hero__text--subheading">Lorem ipsum dolor sit amet consectetur adipisicing elit</h4>
      </div>
      <picture>
        <source media="(max-width: 768px)" srcset="https://via.placeholder.com/600x600" alt="Mobile Header Image"
          class="hero__image">
        <img src="https://via.placeholder.com/1920x650" alt="Default Header Image" class="hero__image">
      </picture>
    </header>
    <section class="cards">
      <div class="card">
        <div class="card__content">
          <img src="https://via.placeholder.com/400x300" alt="" class="card__img">
          <p class="card__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sod do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commode
            consequat.
          </p>
        </div>
        <button class="card__button">Read More</button>
      </div>
      <div class="card">
        <div class="card__content">
          <img src="https://via.placeholder.com/400x300" alt="" class="card__img">
          <p class="card__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aqua.
          </p>
        </div>
        <button class="card__button">Read More</button>
      </div>
      <div class="card">
        <div class="card__content">
          <img src="https://via.placeholder.com/400x300" alt="" class="card__img">
          <p class="card__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sod do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exeratation ullamco.
          </p>
        </div>
        <button class="card__button">Read More</button>
      </div>
    </section>
  </main>
</template>
