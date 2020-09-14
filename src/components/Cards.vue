<template>
  <b-container>
    <b-row>
      <b-col
        lg="4"
        xs="12"
        class="card card-layout justify-content-around"
        v-for="(card, index) in cardsArray"
        :key="index"
      >
        <img
          class="card-img card-img-top"
          :src="card.imageUrl"
          alt="Card image"
        />
        <div class="card-body d-flex flex-column align-items-center">
          <p class="card-text">{{ card.text }}</p>
          <button
            type="button"
            class="btn btn-small btn-read-more btn-outline-dark mt-auto"
          >
            {{ card.button }}
          </button>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["cardsArray"])
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/base/media.scss";
@import "../styles/components/cards.scss";
</style>
