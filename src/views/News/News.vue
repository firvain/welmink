<template>
  <v-container fluid>
    <v-row align="center" justify="center" class="pt-6">
      <v-col cols="12" class="px-0">
        <h3 class="text-center">{{ $t("pages.news.projectNews") }}</h3>
      </v-col>
      <v-col cols="8">
        <v-timeline>
          <v-timeline-item
            v-for="(post, index) in newsItems"
            :key="index"
            :color="index !== 0 ? 'primary' : 'secondary'"
            :large="index === 0"
          >
            <template v-slot:icon>
              <v-avatar>
                <v-img
                  contain
                  :height="index !== 0 ? 24 : 32"
                  :src="require('@/assets/mink.svg')"
                />
              </v-avatar>
            </template>
            <template v-slot:opposite>
              <span class="title font-italic font-weight-bold">{{
                post.date
              }}</span>
            </template>
            <v-card class="elevation-4">
              <v-card-title class="headline primary white--text">
                {{ post.title }}
              </v-card-title>
              <v-img
                v-if="post.imgSrc !== ''"
                :src="post.imgSrc"
                height="200"
              ></v-img>
              <v-card-text v-html="post.body"> </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import en from "./locales/en.json";
import el from "./locales/el.json";
export default {
  name: "news",
  data() {
    return {};
  },
  computed: {
    activeLocale() {
      return this.$i18n.locale;
    },
    newsItems() {
      if (this.$i18n.locale === "en") {
        return en.news;
      }
      return el.news;
    }
  }
};
</script>
