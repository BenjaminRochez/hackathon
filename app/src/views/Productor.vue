<template>
    <div>
        <v-container align-content-center grid-list-xl>

            <v-layout>
                <v-flex xs3>
                    <v-img src="https://via.placeholder.com/150 "></v-img>
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
        </v-container>
    </div>
</template>
<script>
import Header from '../components/Header';
export default {
    components: {
        Header
    }
}
</script>
