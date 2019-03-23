<template>
  <div>
    <ShopHeader/>

    <v-container align-content-center grid-list-xl>
      <v-layout>
        <v-flex xs3>
          <Navigator/>
        </v-flex>
        <v-flex xs9>
          <v-layout>
            <v-flex xs4>
              <v-img :src="require(`../assets/products/${product.image}`)"></v-img>
            </v-flex>
            <v-flex xs8>
              <div>
                <h2 class="headline">{{product.title}}</h2>
              </div>

              <div>
                <h4>Producteur</h4>
                <span>{{product.productor}}</span>
              </div>

              <div>
                <h4>Location</h4>
                <span>{{product.location}}</span>
              </div>

              <div></div>
            </v-flex>
          </v-layout>
          <div>
            <h3>Cold Chain Graph</h3>
            <v-alert class="mb-3" :value="true" type="info">
              <h3>Le saviez vous ?</h3>Selon le type de produits réfrigérés, il y a rupture de la chaîne du froid dès que la température indiquée sur l'étiquette est dépassée. Selon la réglementation, les températures des produits réfrigérés varient entre + 2° C et + 8° C. La rupture de cette chaîne implique des risques d'intoxication alimentaire.
            </v-alert>
            <Froid/>
          </div>
          <div>
            <Map location="Rue des rentiers, 101, La louvière, Belgium"/>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import ShopHeader from "../components/ShopHeader.vue";
import Navigator from "../components/Navigator.vue";
import Froid from "../components/graphs/Froid.vue";
import Map from "../components/Map.vue";

export default {
  name: "Product",
  components: {
    ShopHeader,
    Navigator,
    Froid,
    Map
  },
  data() {
    return {
      product: {
        image: "tomate.jpg",
        productor: "Producteur",
        location: "Location",
        title: "Tomate",
        infos: "",
        price_net: 3,
        price_kg: 4
      }
    };
  },
  /*methods: {
    geolocation() {
      var zip = prompt('What is your zip code ?');
      alert(zip);
    },

    yolo(){
      console.log('success');
    }
  },
  beforeMount() {
    this.geolocation();
  }*/
};
</script>
