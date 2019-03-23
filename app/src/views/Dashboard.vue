<template>
  <div class="oa-experimentation">
    <Header>
    
    </Header>
    <v-container class="oa-exp__subheader" fluid grid-list-xl>
      <v-layout>
          <v-flex xs8>
              <v-card class="pa-5 rounded-card">
                  <h3>Overview</h3>
                  <h3>Sales</h3>
                <Sales />
            </v-card>
          </v-flex>
        <v-flex xs4>
          <Comments />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>


<script>
import Sales from "../components/graphs/Sales.vue";
import Header from "../components/Header.vue";
import Comments from "../components/CommentList.vue"
export default {
  components: {
    Header,
    Sales,
    Comments
  },
  data() {
    return {
      items: {}
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

.oa-exp__subheader {
  margin-top: -65px;
}
</style>
