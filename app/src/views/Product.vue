<template>
  <div>
    <v-container align-content-center grid-list-xl>
      <v-layout>
        <v-flex xs12>
          <v-layout>
            <v-flex xs4>
              <v-img :src="require(`../assets/products/${product.image_url}`)"></v-img>
            </v-flex>
            <v-flex xs8>
              <div>
                <h2 class="headline">{{product.name}}</h2>
              </div>

              <div>
                <h4>Producteur</h4>
                <span>{{product.productor}}</span>
              </div>

              <div>
                <h4>Location</h4>
                <span>{{product.location}}</span>
              </div>

              <div>
                <h4>Price</h4>
                <span>{{product.price}}€</span>
              </div>

              <v-btn class="primary ml-0">
                Ajouter au panier
                <v-icon right dark>cloud</v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
          <v-tabs  color="cyan" dark slider-color="yellow">
            <v-tab key="1">Maps</v-tab>
            <v-tab key="2">Chain Graph</v-tab>
            <v-tab key="3">Comments</v-tab>
            <v-tab-item >
              <v-card flat class="pl-5 pr-5 pt-2 pb-2">
                <div class="mapounet">
                  <Map :location="product.location"/>
                </div>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat  class="pl-5 pr-5 pt-2 pb-2">
                <div>
                  <h3>Cold Chain Graph</h3>
                  <v-alert class="mb-3" :value="true" type="info">
                    <h3>Le saviez vous ?</h3>Selon le type de produits réfrigérés, il y a rupture de la chaîne du froid dès que la température indiquée sur l'étiquette est dépassée. Selon la réglementation, les températures des produits réfrigérés varient entre + 2° C et + 8° C. La rupture de cette chaîne implique des risques d'intoxication alimentaire.
                    <br>Les producteurs partenaires
                    <b>ProxyRelay</b> fournissent, en toute transparence, les informations relative à la chaine de froid directement avec vous, prouvant un gage de qualité supérieur!
                  </v-alert>
                  <Froid/>
                </div>
              </v-card>
            </v-tab-item>

            
            <v-tab-item>
              <v-card flat  class="pl-5 pr-5 pt-2 pb-2"></v-card>
            </v-tab-item>
          </v-tabs>
          
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import db from "../main.js";
import Froid from "../components/graphs/Froid.vue";
import Map from "../components/Map.vue";

export default {
  name: "Product",
  components: {
    Froid,
    Map
  },
  data() {
    return {
      product: {},
    };
  },
  created() {
    let ref = db
      .collection("product")
      .where("slug", "==", this.$route.params.product_slug);
        ref.get().then(snapshot => {
          console.log(snapshot);
          snapshot.forEach(doc => {
            console.log(doc.data());
            this.product = doc.data();
          });
        });
  }
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

