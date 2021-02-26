<template>
  <v-app>
    <v-app-bar app color="white" active-class flat>
      <div class="d-flex align-center">
        <v-img
          alt="WelMink Logo"
          class="shrink mr-2"
          contain
          :src="require('@/assets/mink_logo.svg')"
          transition="scale-transition"
          width="40"
        />

        <v-toolbar-title shrink-on-scroll>WelMink</v-toolbar-title>
      </div>

      <v-spacer></v-spacer>

      <v-btn v-if="!isLogged" :to="{ path: '/login' }" text>
        <span class="mr-2">{{ $t("user.login") }}</span>
        <v-icon>mdi-login-variant</v-icon>
      </v-btn>
      <v-btn v-if="isLogged" @click="logout" text>
        <span class="mr-2">{{ $t("user.logout") }}</span>
        <v-icon>mdi-logout-variant</v-icon>
      </v-btn>
      <v-btn @click="setLanguage" text>
        <v-icon v-if="this.$i18n.locale === 'en'">$UkFlag</v-icon>
        <v-icon v-else>$GreekFlag</v-icon>
      </v-btn>
      <template v-slot:extension>
        <v-tabs v-model="tab" centered>
          <v-tab v-for="(tab, index) in tabs" :key="index" :to="tab.path">
            {{ tab.text }}
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
    <AppFooter app />
  </v-app>
</template>

<script>
import AppFooter from "./components/AppFooter";
// import Home from "./views/Home.vue";
export default {
  name: "App",

  components: {
    // Home,
    AppFooter
  },
  data() {
    return {
      tab: null
    };
  },
  computed: {
    isLogged() {
      return this.$store.state.isLoggedIn;
    },
    tabs() {
      return [
        { path: "/", text: this.$t("appbar.tabs.home") },
        { path: "/project", text: this.$t("appbar.tabs.project") },
        { path: "/news", text: this.$t("appbar.tabs.news") },
        { path: "/files", text: this.$t("appbar.tabs.files") },
        { path: "/contact", text: this.$t("appbar.tabs.contact") }
      ];
    }
  },
  methods: {
    setLanguage() {
      if (this.$i18n.locale === "en") {
        this.$i18n.locale = "el";

        this.$forceUpdate();
      } else {
        this.$i18n.locale = "en";
        this.$forceUpdate();
      }
    },
    logout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>
<style lang="scss" scoped>
.v-btn {
  text-transform: none !important;
}
</style>
