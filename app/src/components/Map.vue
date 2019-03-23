<template>
  <div class="Map"></div>
</template>

<script>
import gmapsInit from '../utils/gmap';

export default {
  name: 'Map',
    props: ['location'], 
  async mounted() {

    try {
        // TODO ADD LOCATIONS
        
      const google = await gmapsInit();
      const geocoder = new google.maps.Geocoder();
      const map = new google.maps.Map(this.$el);

      geocoder.geocode({ address: this.$props.location }, (results, status) => {
        if (status !== 'OK' || !results[0]) {
          throw new Error(status);
        }
        map.setCenter(results[0].geometry.location);
        map.fitBounds(results[0].geometry.viewport);
      });
    } catch (error) {
      console.error(error);
    }
  }
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}

.Map {
  width: 100%;
  height: 400px;
}
</style>