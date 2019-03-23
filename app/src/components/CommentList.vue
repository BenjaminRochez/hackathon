<template>
  <div class="oa-settings">
    <v-card class="rounded-card" flat>
      <v-container fluid>
        <v-layout row>
          <v-flex>
            <h4 class="headline">Comment List</h4>
          </v-flex>
          <v-spacer></v-spacer>
    
        </v-layout>
        </v-container>
        <ul class="oa-settings__list">
            <li v-for="setting in settings" :key="setting.id" class="oa-settings__item">
                <h5 class="subheading font-weight-bold">{{setting.name}}</h5>
                <div class="grey--text">{{setting.user}}</div>
                <span>{{setting.content}}</span>
            </li>
        </ul>
      
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Comments",
  data() {
    return {
      
      settings: [{
        id: 1,
        name: 'Tomoatoes',
        user: 'John Doe',
        content: 'Those tomatoes were amazing!'
      },
      {
        id: 2,
        name: 'Potatoes',
        user: 'John Doe',
        content: 'Those potatoes were amazing!'
      },
      {
        id: 3,
        name: 'Potatoes',
        user: 'John Doe',
        content: 'Those tomatoes were amazing!'
      },
      {
        id:4,
        name: 'Potatoes',
        user: 'John Doe',
        content: 'Those tomatoes were amazing!'
      },
      {
        id: 5,
        name: 'Potatoes',
        user: 'John Doe',
        content: 'Those tomatoes were amazing!'
      },
      ],
    };
  }
};
</script>

<style>
.oa-settings__list{
    margin-bottom: 0;
    padding-left: 0;
    list-style-type:none;
    
}
.oa-settings__item{
    border-top: 1px solid #e9ecef;
    padding: 12px 36px;
    word-wrap: break-word
}
</style>

