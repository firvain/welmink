import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";
import i18n from "./i18n";
import { auth } from "./plugins/firebase";

Vue.config.productionTip = false;
let app;
auth.onAuthStateChanged(user => {
  if (!app) {
    new Vue({
      router,
      store,
      vuetify,
      i18n,
      render: h => h(App)
    }).$mount("#app");
  }
  if (user) {
    store.dispatch("fetchUserProfile", user);
  }
});
