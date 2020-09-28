<template>
  <v-card class="mx-auto pt-1">
    <v-img class="white--text align-end ma-4" :src="cardData.image">
      <v-card-title>{{ cardData.title }}</v-card-title>
    </v-img>

    <v-card-text class="text-center">
      <h3 class="font-weight-regular">{{ cardData.content }}</h3>
    </v-card-text>

    <v-card-actions class="d-flex justify-center">
      <v-btn rounded outlined class="mb-5 text--Capitalize">{{
        cardData.linkText
      }}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    cardData: Object,
  },
}
</script>
