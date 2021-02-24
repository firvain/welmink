<template>
  <v-app>
    <v-app-bar app color="white" active-class flat>
      <div class="d-flex align-center">
        <v-img
          alt="WelMink Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-toolbar-title shrink-on-scroll>WelMink</v-toolbar-title>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">{{ $t("user.login") }}</span>
        <v-icon>mdi-login-variant</v-icon>
      </v-btn>
      <v-btn @click="setLanguage" text>
        <v-icon v-if="this.$i18n.locale === 'en'">$UkFlag</v-icon>
        <v-icon v-else>$GreekFlag</v-icon>
      </v-btn>
      <template v-slot:extension>
        <v-tabs v-model="tab" centered>
          <v-tab :to="{ path: '/' }">{{ $t("appbar.tabs.home") }}</v-tab>
          <v-tab :to="{ path: '/project' }">{{
            $t("appbar.tabs.project")
          }}</v-tab>
          <v-tab :to="{ path: '/news' }">{{ $t("appbar.tabs.news") }}</v-tab>
          <v-tab :to="{ path: '/files' }">{{ $t("appbar.tabs.files") }}</v-tab>
          <v-tab :to="{ path: '/contact' }">{{
            $t("appbar.tabs.contact")
          }}</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer app />
  </v-app>
</template>

<script>
import Footer from "./components/Footer";
// import Home from "./views/Home.vue";
export default {
  name: "App",

  components: {
    // Home,
    Footer
  },
  data() {
    return { tab: null };
  },
  methods: {
    setLanguage() {
      console.log(this.$vuetify.icons);
      if (this.$i18n.locale === "en") {
        this.$i18n.locale = "el";
      } else {
        this.$i18n.locale = "en";
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.v-btn {
  text-transform: none !important;
}
</style>
