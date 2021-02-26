<template>
  <v-container fluid>
    <v-row align="center" justify="center" class="pt-6">
      <v-col cols="12" class="px-0">
        <h3 class="text-center">{{ $t("pages.news.projectNews") }}</h3>
      </v-col>
      <v-col cols="8">
        <v-timeline>
          <v-timeline-item
            v-for="(post, index) in mewsItems"
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
              <span class="subtitle-2">{{ post.date }}</span>
            </template>
            <v-card class="elevation-4">
              <v-card-title class="headline primary white--text">
                {{ post.title }}
              </v-card-title>
              <v-card-text v-html="post.body"> </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "news",
  data() {
    return {
      mewsItems: [
        {
          date: "24/02/2021",
          title: "Last Meting",
          body: "first partner meeting that took place in Kozani"
        },
        {
          date: "24/02/2021",
          title: "Last Meting",
          body: "first partner meeting that took place in Kozani"
        },
        {
          date: "24/02/2021",
          title: "Last Meting",
          body: "first partner meeting that took place in Kozani"
        },
        {
          date: "24/03/2021",
          title: "Third Meting",
          body: "first partner meeting that took place in Kozani"
        },
        {
          date: "24/03/2021",
          title: "Second Meting",
          body: "first partner meeting that took place in Kozani"
        },
        {
          date: "24/02/2021",
          title: "First Meting",
          body: "first partner meeting that took place in Kozani"
        },
        {
          date: "01/02/2021",
          title: "Project Start",
          body: "The project has started!<br />Time for action"
        }
      ]
    };
  }
};
</script>
