<template>
  <div>
    <template v-if="$vuetify.breakpoint.mdAndUp">
      <v-img class="hero" src="http://via.placeholder.com/1920x650">
        <v-row
          class="fill-height ma-0 d-flex flex-column hero-inner"
          align="center"
          justify="center"
        >
          <h1 class="font-weight-bold white--text mb-0 text-center">
            Hello Developer!
          </h1>
          <p class="display-1 white--text mb-0 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </v-row>
      </v-img>
    </template>
    <template v-else>
      <v-img src="http://via.placeholder.com/600x600">
        <v-row
          class="fill-height ma-0 d-flex flex-column hero-inner"
          align="center"
          justify="center"
        >
          <h1 class="font-weight-bold white--text mb-0 text-center">
            Hello Developer!
          </h1>
          <p class="display-1 white--text mb-0 text-center subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </v-row>
      </v-img>
    </template>
    <v-container>
      <v-row>
        <template v-for="(card, i) in cards">
          <v-col :key="i" cols="12" md="4">
            <Card :card-data="card"></Card>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Card from '~/components/card.vue'
export default {
  components: Card,
  data() {
    return {
      cards: [
        {
          image: 'http://via.placeholder.com/400x300',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          linkText: 'Read more',
        },
        {
          image: 'http://via.placeholder.com/400x300',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          linkText: 'Read more',
        },
        {
          image: 'http://via.placeholder.com/400x300',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          linkText: 'Read more',
        },
      ],
    }
  },
}
</script>
<style scoped>
.container {
  max-width: 1000px;
}
.hero-inner {
  background: #2b2b2b7a;
}
.hero-inner p {
  letter-spacing: 3px;
}
.hero-inner h1 {
  font-size: 66px;
  line-height: 76px;
}
.subtitle {
  font-size: 28px;
}
@media (max-width: 600px) {
  .hero-inner h1 {
    font-size: 54px;
    line-height: 64px;
  }
}
</style>
