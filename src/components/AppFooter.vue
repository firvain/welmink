<template>
  <v-footer dark padless>
    <v-card
      flat
      tile
      class="primary lighten-1 white--text text-center mx-auto"
      width="100%"
    >
      <!--      <v-row-->
      <!--        ><v-col cols="12">-->
      <!--          <v-card-text>-->
      <!--            <v-btn-->
      <!--              v-for="icon in icons"-->
      <!--              :key="icon"-->
      <!--              class="mx-4 white&#45;&#45;text"-->
      <!--              icon-->
      <!--            >-->
      <!--              <v-icon size="24px">-->
      <!--                {{ icon }}-->
      <!--              </v-icon>-->
      <!--            </v-btn>-->
      <!--          </v-card-text>-->
      <!--        </v-col></v-row-->
      <!--      >-->
      <v-row align="center" justify="center">
        <v-col cols="4">
          <v-card-text class="white--text pt-0">
            {{ $t("appfooter.funding") }}
          </v-card-text>
        </v-col>
        <v-col cols="4" class="ma-2">
          <v-img src="@/assets/all-logo.png"></v-img>
        </v-col>
      </v-row>
      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>WelMink</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  name: "AppFooter",
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"]
  })
};
</script>
