<template>
  <v-app>
    <v-app-bar app color="primary" dark prominent>
      <div class="d-flex align-center">
        <v-img
          alt="WelMink Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-app-bar-title shrink-on-scroll>WelMink</v-app-bar-title>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <HelloWorld />
    </v-main>
    <Footer app />
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Footer from "./components/Footer";

export default {
  name: "App",

  components: {
    HelloWorld,
    Footer
  },

  data: () => ({
    //
  })
};
</script>
