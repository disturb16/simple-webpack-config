// This file serves to show how files in different folders will be compiled
// Vue.js is used to test webpack imports

import Vue from 'vue'

const profile = new Vue({
  el: "#profile",
  data(){
    return{
      name: "",
      email: ""
    }
  }
})