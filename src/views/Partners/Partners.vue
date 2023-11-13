<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <h2 class="text-center">{{ title }}</h2>
      </v-col>
      <v-col
        v-for="(partner, index) in partners"
        :key="index"
        cols="12"
        sm="12"
        md="6"
      >
        <v-card class="mx-auto" outlined height="150">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="h3 mb-1">
                {{ partner.title }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ partner.subtitle }}
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar
              tile
              height="80"
              width="160"
              v-if="partner.logo"
              :color="$vuetify.theme.dark ? 'white': ''"
            >
              <v-img contain :src="require('@/assets/' + partner.logo)" ></v-img>
            </v-list-item-avatar>
            <v-list-item-avatar
              v-else
              tile
              height="80"
              width="160"
              color="grey"
            >
            </v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <v-btn
              small
              text
              :href="partner.link"
              target="_blank"
              color="accent"
            >
              Webpage
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import el from "./locales/el.json";
import en from "./locales/en.json";
export default {
  name: "partners",
  data() {
    return {};
  },
  computed: {
    title() {
      if (this.$i18n.locale === "en") {
        return en.title;
      }
      return el.title;
    },
    partners() {
      if (this.$i18n.locale === "en") {
        return en.partners;
      }
      return el.partners;
    }
  }
};
</script>
