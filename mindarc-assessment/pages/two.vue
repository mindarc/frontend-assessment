<template>
  <v-container>
    <!-- Tabs -->
    <template v-if="$vuetify.breakpoint.mdAndUp">
      <v-card>
        <!-- Tab Navigation -->
        <v-tabs v-model="tab" align-with-title>
          <v-tabs-slider></v-tabs-slider>
          <v-tab v-for="item in content" :key="item">
            {{ item.title }}
          </v-tab>
        </v-tabs>
        <!-- Tab Content -->
        <v-tabs-items v-model="tab">
          <v-tab-item v-for="item in content" :key="item">
            <v-card flat>
              <v-card-text v-html="item.content"></v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </template>
    <!-- Accordian -->
    <template v-else>
      <v-expansion-panels v-model="panel">
        <v-expansion-panel v-for="(item, i) in content" :key="i">
          <v-expansion-panel-header>{{ item.title }}</v-expansion-panel-header>
          <v-expansion-panel-content
            class="pa-5 flex-column"
            v-html="item.content"
          ></v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </template>
  </v-container>
</template>
<script>
import content from '../../data.json'
export default {
  data() {
    return {
      content,
      panel: 0,
      tab: null,
    }
  },
}
</script>
