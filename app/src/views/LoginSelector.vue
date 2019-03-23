<template>
  <div class="pr-selector">
      <v-container align-content-center grid-list-xl>
    <v-layout>
        
      <v-flex xs6>
        <v-card>
          <v-card-title primary-title class="text-sm-center" >
            
              <h3 class="headline mb-0 pr-headline">Kangaroo Valley Safari</h3>
              <div>{{ card_text }}</div>

          </v-card-title>
          <v-container>
            <v-layout>
              <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"></v-img>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>


      <v-flex xs6>
        <v-card>
          <v-card-title primary-title class="text-sm-center" >
            
              <h3 class="headline mb-0 pr-headline">Kangaroo Valley Safari</h3>
              <div>{{ card_text }}</div>

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
export default {};
</script>


<style>

.pr-headline{
    width: 100%;
}
</style>

