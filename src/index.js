import Vue from 'vue'

import App from './App.vue'
import VueCardLayer from '../vue-card-layer'

Vue.use(VueCardLayer, {
  
})

new Vue({
  el: "#app",
  render: h => h(App)
})
