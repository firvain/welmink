<template>
  <v-form v-model="valid" @submit.prevent="submitform">
    <v-container>
      <v-row justify="center">
        <v-col cols="8" md="4">
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="20"
            label="First name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="8" md="4">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="8" md="8">
          <v-textarea
            name="input-7-1"
            :label="$t('contact.message')"
            :value="$t('contact.message')"
            hint="Hint text"
            filled
          ></v-textarea>
        </v-col>
        <v-col cols="8" class="d-flex justify-end">
          <v-btn type="submit" :disabled="!this.valid" color="accent"
            >Submit</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
<script>
export default {
  name: "Contact",
  data: () => ({
    valid: false,
    firstname: "",
    lastname: "",
    nameRules: [
      v => !!v || "Name is required",
      v => v.length <= 10 || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ]
  }),
  methods: {
    submitform() {
      alert("asdasd");
    }
  }
};
</script>
