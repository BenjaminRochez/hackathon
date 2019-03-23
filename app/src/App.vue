<template>
  <v-app>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  },
  data () {
    return {
      prenom: "Benjamin",
      nom: "Rochez"
    }
  }
}
</script>

<style>

</style>

