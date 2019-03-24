import firebase from 'firebase'
import 'firebase/firestore'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false;


let app = '';


// Initialize Firebase
var config = {
  apiKey: "AIzaSyDM2YfJk9J0F718TiszPnvnwbvvlCahSmk",
  authDomain: "proxyrelay-55999.firebaseapp.com",
  databaseURL: "https://proxyrelay-55999.firebaseio.com",
  projectId: "proxyrelay-55999",
  storageBucket: "proxyrelay-55999.appspot.com",
  messagingSenderId: "767826339869"
};
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(() =>{
  if(!app){
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');
  }
});

const db = firebase.firestore();
export default db;


