<template>
  <div class="pr-category">
      <ShopHeader />
    <v-container align-content-center grid-list-xl fluid>
      <v-layout>
        <v-flex xs3>
          <Navigator/>
        </v-flex>
        <v-flex xs9>
          <v-layout row wrap>
            <v-flex xs3 v-for="item in items" :key="item.id">
              <v-card>
                <v-container>
                  <v-layout>
                    <v-img :src="require(`../assets/products/${item.image}`)"></v-img>
                  </v-layout>
                </v-container>
                <v-card-title primary-title class="text-sm-center">
                  <h3 class="headline mb-0 pr-headline">{{item.name}}</h3>
                  <p>{{item.price}}€/pièce</p>
                </v-card-title>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
      <div class="text-xs-right">
        <v-pagination v-model="page" :length="6"></v-pagination>
      </div>
    </v-container>
  </div>
</template>

<script>
import Navigator from "../components/Navigator.vue";
import ShopHeader from "../components/ShopHeader.vue";
export default {
  components: {
    Navigator,
    ShopHeader
  },
  data() {
    return {
      items: [
        {
          id: 1,
          name: "Tomates",
          image: "tomate.jpg",
          price: "5"
        },
        {
          id: 2,
          name: "Tomates",
          image: "tomate.jpg",
          price: "1"
        },
        {
          id: 3,
          name: "Tomates",
          image: "tomate.jpg",
          price: "2"
        },
        {
          id: 4,
          name: "Tomates",
          image: "tomate.jpg",
          price: "2"
        },
        {
          id: 5,
          name: "Tomates",
          image: "tomate.jpg",
          price: "4"
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
</style>

