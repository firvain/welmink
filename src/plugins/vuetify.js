import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import GreeKFlag from "../components/GreekFlag.vue";
import UkFlag from "../components/UkFlag.vue";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: "#795548",
        secondary: "#009688",
        accent: "#607d8b",
        error: "#f44336",
        warning: "#ff5722",
        info: "#2196f3",
        success: "#4caf50"
      },
      dark: {
        primary: "#000000",
        secondary: "#ffffff",
        accent: "#000000",
        error: "#000000",
        warning: "#ff5722",
        info: "#2196f3",
        success: "#4caf50"
      }

    }
  },
  icons: {
    iconfont: "mdiSvg",
    values: {
      GreekFlag: {
        component: GreeKFlag
      },
      UkFlag: {
        component: UkFlag
      }
    }
  }
});
