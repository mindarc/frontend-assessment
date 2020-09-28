<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <v-card color="#385F73" dark>
          <v-card-title class="headline"> Assessment 1 </v-card-title>

          <v-card-actions>
            <v-btn text to="/one"> View </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card color="#385F73" dark>
          <v-card-title class="headline"> Assessment 2 </v-card-title>

          <v-card-actions>
            <v-btn text to="/two"> View </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  layout: 'app',
}
</script>
