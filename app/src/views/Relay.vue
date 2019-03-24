<template>
  <div>
    <div class="oa-shopheader">
      <v-container>
        <v-layout>
          <v-text-field solo label="Search" append-icon="search" v-model="location"></v-text-field>
        </v-layout>
      </v-container>
    </div>

    <v-container>
      <v-layout>
        <Map :location="location ? location : 'Belgium' "/>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Map from "../components/Map.vue";
import gmapsInit from '../utils/gmap';
export default {
  components: {
    Map
  },
  data() {
    return {
      location: ""
    };
  },
  
};
</script>

<style>
.oa-shopheader {
  background: linear-gradient(87deg, #5e72e4 0, #825ee4 100%) !important;
  padding: 20px 0 0;
}
</style>
