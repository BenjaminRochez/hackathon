<template>
  <nav v-if="$route.path!='/login'">
    <v-toolbar flat app absolute class="elevation-0">
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-spacer></v-spacer>

      <v-flex class="mt-4 mb-3">
        <Popup @projectAdded="openSnack()"/>
        <router-link :to="{name: 'relay'}">
          <v-btn class="secondary">Find a relay!</v-btn>
        </router-link>
      </v-flex>
      <v-btn v-if="this.currUser != ''" flat color="grey" @click="logout()">
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer temporary v-model="drawer" app class="light">
      <v-toolbar flat>
        <div class="logo__container">
          <v-img :src="require('../assets/logo/proxyrelay_mini.png')"></v-img>
        </div>
      </v-toolbar>
      <v-list>
        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-tile-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ link.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import firebase from "firebase";
import Popup from "./Popup.vue";
export default {
  components: { Popup },
  data() {
    return {
      drawer: false,
      currUser: "",
      links: [
        { icon: "dashboard", text: "Dashboard", route: "/dashboard" },
        { icon: "bubble_chart", text: "Online Shop", route: "/shop" },
        { icon: "bubble_chart", text: "Badges", route: "/badges" }
      ]
    };
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login");
        });
    }
  },
  created() {
    if (firebase.auth().currentUser) {
      this.currUser = firebase.auth().currentUser.email;
    } else {
      this.currUser = "";
    }
  },
  watch: {
    $route(to, from) {
      if (from.name === "login" && to.name === "dashboard") {
        this.currUser = firebase.auth().currentUser.email;
      }
    }
  }
};
</script>

<style>
.logo__container {
  width: 75%;
}
</style>

