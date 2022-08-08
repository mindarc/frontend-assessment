<script>
export default {
  props: ["details"],
};
</script>

<template>
  <div class="card">
    <img
      class="card__img"
      src="https://www.laminationsonline.com/wp-content/uploads/2019/03/placeholder-400x300.png"
    />
    <p class="card__details">{{ details }}</p>
    <button class="card__button">Read More</button>
  </div>
</template>

<style scope>
.card {
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 325px;
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 20px;
  margin: 20px;
  color: #000;
  text-align: center;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.05);
}

.card__img,
.card__details {
  margin-bottom: 0.7rem;
}

.card__img {
  border-radius: 5px;
  object-fit: cover;
  max-width: 285px;
}

.card__details {
  padding: 0.5rem;
}

.card__button {
  background: none;
  border: 2px solid #000;
  border-radius: 20px;
  max-width: 155px;
  font-weight: bold;
  padding: 0.5rem;
  text-transform: uppercase;
  cursor: pointer;
  letter-spacing: 0.1rem;
}

@media (min-width: 1024px) {
  .card {
    height: 500px;
  }

  .card__button {
    margin-top: auto;
  }
}
</style>
