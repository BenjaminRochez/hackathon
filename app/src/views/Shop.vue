<template>
  <div class="pr-category">
   <div class="oa-shopheader">
        <v-container>
            <v-layout>
                <v-text-field solo label="Search" append-icon="search" v-model="filterProd"></v-text-field>
            </v-layout>
        </v-container>
    </div>
    <v-container align-content-center grid-list-xl>
      <v-layout>
        <v-flex xs3>
          <Navigator />
        </v-flex>
        <v-flex xs9>
          <v-layout row wrap>
            <v-flex xs4 v-for="item in filteredProduct" :key="item.id">
              <v-card class="hover" @click="navigate(item.slug)">
                <v-container>
                  <v-layout>
                    <v-img :src="require(`../assets/products/${item.image_url}`)"></v-img>
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
        <!--<v-pagination v-model="page" :length="6"></v-pagination>-->
      </div>
    </v-container>
  </div>
</template>

<script>
import db from '@/main.js';
import Navigator from "../components/Navigator.vue";
import ShopHeader from "../components/ShopHeader.vue";
export default {
  components: {
    Navigator,
    ShopHeader
  },
  data() {
    return {
      page: 1,
      products: [],
      filterProd: '',
    };
  },
  computed: {
      filteredProduct(){
        if(this.filterProd){
          return this.products.filter(product =>{
          return product.name.toLowerCase().includes(this.filterProd);
         })
        }else{
          return this.products;
        }     
      }
    },
  created() {
    db.collection("product").onSnapshot(res => {
      const changes = res.docChanges();
      changes.forEach(change => {
        if (change.type === "added") {
          this.products.push({
            // spread the properties
            ...change.doc.data(),
            id: change.doc.id
          });
        }
      });
    });
  },

  methods: {
    navigate(slug) {
      this.$router.push(`/product/${slug}`);
    }
  }
};
</script>


<style>
.pr-headline {
  width: 100%;
}

.hover:hover {
  cursor: pointer;
  opacity: 0.7;
}
</style>

