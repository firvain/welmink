<template>
  <v-container fluid>
    <v-row align="center" justify="center" class="pt-6">
      <v-col cols="12" class="px-0">
        <h2 class="text-center">{{ $t("pages.project.title") }}</h2>
      </v-col>
      <v-col cols="8">
        <v-row v-for="(post, index) in posts" :key="index">
          <v-col class="12">
            <v-card class="mx-auto elevation-4" shaped>
              <v-card-title
                class="subtitle-2  white--text"
                :class="index % 2 ? 'primary' : 'accent'"
                >{{ post.title }}</v-card-title
              >
              <v-card-text>
                <p
                  v-for="(item, ind) in post.body"
                  :key="ind"
                  class="text-justify"
                >
                  {{ item }}
                </p>
                <ol>
                  <li
                    v-for="(i, idx) in post.list"
                    :key="idx"
                    class="text-justify pb-2"
                  >
                    {{ i.body }}
                  </li>
                </ol>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <!-- <v-row>
          <v-col class="12">
            <v-card class="mx-auto elevation-4" shaped>
              <v-card-title class="subtitle-2 primary white--text">{{
                $t("pages.project.target")
              }}</v-card-title>
              <v-card-text>
                <p class="text-justify">{{ this.posts.contents[0].target }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row> -->
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import el from "./locales/el.json";
export default {
  name: "project",
  data() {
    return {};
  },
  computed: {
    posts() {
      console.log(el);
      return el.contents;
    }
  }
};
</script>
