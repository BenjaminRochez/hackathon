<template>
  <nav v-if="$route.path!='/login'">
    <v-toolbar flat app absolute class="elevation-0">
      <v-toolbar-side-icon class="white--text" @click="drawer = !drawer"></v-toolbar-side-icon>
        <v-flex xs3 class="mt-4">
        <v-text-field solo label="Search" append-icon="search" class="mb-4"></v-text-field>
        </v-flex>
      <v-spacer></v-spacer>

      <v-btn flat color="white" router to="/login">
        <span>Logout</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" app class="light">
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
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: "dashboard", text: "Dashboard", route: "/dashboard" },
        { icon: "bubble_chart", text: "Badges", route: "/statistics" }
      ]
    };
  }
};
</script>

<style>
.v-toolbar {
  background: transparent !important;
}
.logo__container {
  width: 75%;
}
</style>

