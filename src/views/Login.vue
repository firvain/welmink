<template>
  <v-form v-model="valid" @submit.prevent="login" class="pt-6">
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="12" md="3">
          <v-card outlined class="mx-auto">
            <v-card-text>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    :label="$t('contact.email')"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="password"
                    :rules="passwordRules"
                    label="password"
                    required
                  ></v-text-field>
                </v-col>
                <v-col class="d-flex justify-end">
                  <v-btn type="submit" :disabled="!this.valid" color="accent"
                    >Login</v-btn
                  >
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-snackbar v-model="snackbar" color="red darken-2" shaped top>
            {{ snackbarText }}</v-snackbar
          >
        </v-col></v-row
      >
    </v-container>
  </v-form>
</template>
<script>
import { isEmpty } from "lodash";

export default {
  name: "Login",
  data() {
    return {
      showSnackbar: false,
      valid: false,
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v =>
          !v ||
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid"
      ],
      password: "",
      passwordRules: [v => !!v || "Password is required"]
    };
  },
  computed: {
    snackbar: {
      get() {
        const err = this.$store.state.authError;
        // console.log(err);

        if (isEmpty(err)) {
          return false;
        }
        return true;
      },
      set(e) {
        this.$store.commit("setAuthError", {});
        this.$store.commit("setIsLoggedIn", e);
      }
    },
    snackbarText() {
      const err = this.$store.state.authError;
      if (isEmpty(err)) {
        return "";
      }
      return err.message;
    }
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>
