<template>
  <div class="pr-selector">
    <v-container align-content-center grid-list-xl fill-height >
      <v-layout align-center row wrap>
        <v-flex xs6 v-for="selector in selectors" :key="selector.user">
          <v-card>
            <v-card-title primary-title class="text-sm-center">
              <h3 class="headline mb-0 pr-headline">{{selector.user}}</h3>
            </v-card-title>
            <v-container>
              <v-layout>
                <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"></v-img>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectors: [
        {
          user: "Vendeur"
        },
        {
          user: "Acheteur"
        }
      ]
    };
  }
};
</script>


<style>
.pr-headline {
  width: 100%;
}

.pr-selector {
    height: 100vh;/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ffd38c+0,ffa509+100 */
background: #ffd38c; /* Old browsers */
background: -moz-linear-gradient(-45deg, #ffd38c 0%, #ffa509 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(-45deg, #ffd38c 0%,#ffa509 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(135deg, #ffd38c 0%,#ffa509 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffd38c', endColorstr='#ffa509',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
}
</style>

