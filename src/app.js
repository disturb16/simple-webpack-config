// Vue.js is used to test webpack imports

import Vue from 'vue';

const app = new Vue({
  el: "#app",
  data(){
    return{
      msg: "Hello World"
    }
  }
});