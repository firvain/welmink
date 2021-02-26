<template>
  <v-form v-model="valid" @submit.prevent="submitform" class="pt-6">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="12" md="4">
          <v-text-field
            v-model="name"
            :rules="nameRules"
            :label="$t('contact.name')"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="4">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            :label="$t('contact.email')"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="8">
          <v-textarea
            name="input-7-1"
            v-model="message"
            :label="$t('contact.message')"
            hint="Hint text"
            :rules="messageRules"
            filled
          ></v-textarea>
        </v-col>
        <v-col cols="8" class="d-flex justify-end">
          <v-btn type="submit" :disabled="!this.valid" color="accent"
            >Submit</v-btn
          >
        </v-col>
        <v-col cols="12">
          <v-snackbar v-model="snackbar" :color="snackbarColor" shaped top>
            {{ snackbarText }}</v-snackbar
          >
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
<script>
import emailjs from "emailjs-com";
export default {
  name: "Contact",
  data: () => ({
    valid: false,
    snackbar: false,
    snackbarText: "",
    snackbarColor: "green darken-2",
    name: "",
    nameRules: [v => !!v || "Name is required"],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v =>
        !v ||
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
        "E-mail must be valid"
    ],
    messageRules: [v => !!v || "Message is required"],
    message: ""
  }),
  methods: {
    async submitform() {
      try {
        const response = await emailjs.send(
          process.env.VUE_APP_CONTACT_SERVICEID,
          process.env.VUE_APP_CONTACT_TEMPLATEID,
          {
            name: this.name,
            email: this.email,
            message: this.message
          },
          process.env.VUE_APP_CONTACT_USERID
        );
        if (response.status === 200) {
          this.snackbar = true;
          this.snackbarText = this.$t("contact.successSubmit");
          this.snackbarColor = "green darken-2";
        }
      } catch (error) {
        console.log({ error });
        this.snackbar = true;
        this.snackbarText = this.$t("contact.errorSubmit");
        this.snackbarColor = "red darken-2";
      }
    }
  }
};
</script>
