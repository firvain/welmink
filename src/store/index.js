import Vue from "vue";
import Vuex from "vuex";
import * as fb from "../plugins/firebase";
import router from "../router";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    userProfile: {},
    authError: {}
  },
  mutations: {
    setUserProfile(state, val) {
      state.userProfile = val;
    },
    setAuthError(state, val) {
      state.authError = val;
    },
    setIsLoggedIn(state, val) {
      state.isLoggedIn = val;
    }
  },
  actions: {
    async login({ dispatch, commit }, form) {
      // sign user in
      try {
        const { user } = await fb.auth.signInWithEmailAndPassword(
          form.email,
          form.password
        );
        // fetch user profile and set in state
        dispatch("fetchUserProfile", user);
      } catch (error) {
        // console.log(error);
        commit("setAuthError", error);
        commit("setIsLoggedIn", false);
      }
    },
    async logout({ commit }) {
      // log user out
      await fb.auth.signOut();

      // clear user data from state
      commit("setUserProfile", {});
      commit("setAuthError", {});
      commit("setIsLoggedIn", false);

      // redirect to login view
      router.push("/");
    },
    async fetchUserProfile({ commit }, user) {
      // fetch user profile
      const userProfile = await fb.usersCollection.doc(user.uid).get();
      // set user profile in state
      commit("setUserProfile", userProfile.data());
      commit("setIsLoggedIn", true);
      // change route to dashboard
      if (router.currentRoute.path === "/login") {
        router.push("/files");
      }
    }
  },
  modules: {}
});
