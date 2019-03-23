<template>
  <div class="oa-experimentation">
    <Header>
      <v-container grid-list-xl>
        <v-layout>
          <v-flex xs4 v-for="exp in experimentations" :key="exp.title">
            <v-card flat class="pa-4 rounded-card">
              <v-layout row wrap>
                <v-flex xs9>
                  <h4 class="grey--text text-uppercase font-weight-bold">{{exp.title}}</h4>
                </v-flex>
                <v-flex xs3>
                  <v-list-tile-avatar>
                    <v-avatar :class="`${exp.class}`">
                      <v-icon dark>{{exp.icon}}</v-icon>
                    </v-avatar>
                  </v-list-tile-avatar>
                </v-flex>
                <v-flex>
                  <div class="headline">{{exp.subtitle}}</div>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </Header>
    <v-container class="oa-exp__subheader" fluid  grid-list-xl>
      <v-layout>
          <v-card>
              <v-flex>
                <h4 class="headline">Fun fact: </h4>
                <h5 class="grey--text subheading">Vous avez commandé ... kg de bonbons ce mois-ci</h5>
              </v-flex>
          </v-card>
        
      </v-layout>
    </v-container>
  </div>
</template>


<script>
import Header from "../components/Header.vue";
export default {
  components: {
    Header
  },
  data() {
    return {
        items: {
            
        }
    };
  },
  methods: {}
};
</script>

<style>
.v-avatar.pipe {
  background-color: #f5365c !important;
}
.v-avatar.status {
  background-color: #fb6340 !important;
}
.v-avatar.uuid {
  background-color: #ffd600 !important;
}
.v-avatar.yolo {
  background-color: #11cdef !important;
}
.rounded-card {
  border-radius: 7px;
  height: 100%;
}
.v-card {
  box-shadow: 0 0 2rem 0 rgba(136, 152, 170, 0.15);
}

.oa-exp__subheader{
  margin-top: -65px;
}


</style>
