<template>
  <v-app>
    <v-app-bar active-class app color="white" flat>
      <div class="d-flex align-center">
        <v-img
          :src="require('@/assets/mink_logo.svg')"
          alt="WelMink Logo"
          class="shrink mr-2"
          contain
          transition="scale-transition"
          width="40"
        />

        <v-toolbar-title shrink-on-scroll :class="this.$vuetify.theme.dark ? 'black--text': ''" >WelMink</v-toolbar-title>
      </div>

      <v-spacer></v-spacer>

      <!--      <v-btn v-if="!isLogged" :to="{ path: '/login' }" text>-->
      <!--        <span class="mr-2">{{ $t("user.login") }}</span>-->
      <!--        <v-icon>mdi-login-variant</v-icon>-->
      <!--      </v-btn>-->
      <!--      <v-btn v-if="isLogged" @click="logout" text>-->
      <!--        <span class="mr-2">{{ $t("user.logout") }}</span>-->
      <!--        <v-icon>mdi-logout-variant</v-icon>-->
      <!--      </v-btn>-->
      <v-btn text @click="setLanguage">
        <v-icon v-if="this.$i18n.locale === 'en'">$UkFlag</v-icon>
        <v-icon v-else>$GreekFlag</v-icon>
      </v-btn>
      <template v-slot:extension>
        <v-tabs v-model="tab" centered>
          <v-tab v-for="(tab, index) in tabs" :key="index" :to="tab.path" class="black--text">
            {{ tab.text }}
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-main>


 <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="blue" class="accessibility-icon" fab v-bind="attrs" v-on="on">
        <v-icon color="white">mdi-human</v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item @click="increaseFontSize">
        <v-list-item-action>
          <v-icon>mdi-format-size</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{$t('accessibility.increaseFontSize')}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item @click="setDarkMode">
        <v-list-item-action>
          <v-icon>mdi-theme-light-dark</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{$t('accessibility.highContrast')}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item @click="reset">
        <v-list-item-action>
          <v-icon>mdi-restart</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{$t('accessibility.reset')}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>

      <router-view></router-view>
    </v-main>
    <AppFooter app/>
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
      tab: null,
      originalFontSize: null
    };
  },
  computed: {
    isLogged() {
      return this.$store.state.isLoggedIn;
    },
    tabs() {
      return [
        {path: "/", text: this.$t("appbar.tabs.home")},
        {path: "/project", text: this.$t("appbar.tabs.project")},
        {path: "/partners", text: this.$t("appbar.tabs.partners")}
        // { path: "/news", text: this.$t("appbar.tabs.news") },
        // { path: "/files", text: this.$t("appbar.tabs.files") },
        // { path: "/contact", text: this.$t("appbar.tabs.contact") }
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
    },
    increaseFontSize() {
      const html = document.querySelector("html");
      const computedStyle = window.getComputedStyle(html);
      const fontSize = parseFloat(computedStyle.fontSize);
      html.style.fontSize = `${fontSize + 1}px`;
    },
    setDarkMode() {
      this.$vuetify.theme.dark = true;
    },
    reset() {
      document.querySelector("html").style.fontSize = `${this.originalFontSize}px`;
      this.$vuetify.theme.dark = false
    }

  },
  mounted() {
    this.originalFontSize = parseFloat(
      window.getComputedStyle(document.querySelector("html")).fontSize
    );
  }
};
</script>
<style lang="scss" scoped>
.v-btn {
  text-transform: none !important;
}

.accessibility-icon {
  position: fixed;
  right: 5px; // Adjust as needed for the right alignment
  top: 60%; // Center vertically
  transform: translateY(-50%); // Adjust for exact vertical centering
  z-index: 1000; // Ensure it's above other elements
}
</style>
