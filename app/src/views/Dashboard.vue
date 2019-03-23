<template>
  <div class="oa-dashboard">
    <Header>
      <v-container fluid grid-list-xl>
        <v-layout>
          <v-flex xs4 v-for="number in numbers" :key="number.id">
            <v-card flat class="pa-4 rounded-card">
              <v-layout row wrap>
                <v-flex xs9>
                  <h4 class="grey--text text-uppercase font-weight-bold">{{number.title}}</h4>
                  <div class="headline">{{number.num}}</div>
                </v-flex>
                <v-flex xs3>
                  <v-list-tile-avatar>
                    <v-avatar :class="`${number.class}`">
                      <v-icon dark>{{number.icon}}</v-icon>
                    </v-avatar>
                  </v-list-tile-avatar>
                </v-flex>
                <v-flex>
                  <div class="oa-dashboard__percent">
                      <v-icon class="green--text" v-if="number.percentage > 0">arrow_upward</v-icon>
                      <v-icon class="red--text" v-if="number.percentage < 0">arrow_downward</v-icon>
                      <span :class="number.percentage > 0 ? 'green--text' : 'red--text'">{{number.percentage}} %</span>
                    </div>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </Header>
    <v-container class="oa-exp__subheader" fluid grid-list-xl>
      <v-layout>
        <v-flex xs8>
          <v-card class="pa-5 rounded-card">
            <h3>Overview</h3>
            <h3>Sales</h3>
            <Sales/>
          </v-card>
        </v-flex>
        <v-flex xs4>
          <Comments/>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container fluid>
        <Stock />
    </v-container>
  </div>
</template>

<script>
import Sales from "../components/graphs/Sales.vue";
import Header from "../components/Header.vue";
import Comments from "../components/CommentList.vue";
import Stock from "../components/Stock.vue";
export default {
  components: {
    Header,
    Sales,
    Comments,
    Stock
  },
  data() {
    return {
      items: {},
      numbers: [
        {
            id: 1,
            title: "Visitors",
            num: 10323,
            percentage: 2,
            icon: 'supervisor_account',
            class: 'pipe'
        },
        {
            id: 2,
            title: "New buyers",
            num: 3500,
            percentage: -4,
            icon: 'attach_money',
            class: 'status'
        },
        {
            id: 3,
            title: "New buyers",
            num: 3500,
            percentage: 4,
            icon: 'trending_up',
            class: 'uuid'
        },
        {
            id: 4,
            title: "New buyers",
            num: 3500,
            percentage: 4,
            icon: 'supervisor_account',
            class: 'yolo'
        }
      ]
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


.oa-exp__subheader {
  margin-top: -65px;
}

.oa-dashboard__percent .v-icon{
    transform: translateY(2px);
}
</style>
