import Vue from 'vue'

import App from './App.vue'
import VueCardLayer from '../vue-card-layer'

Vue.use(VueCardLayer, {
  cardWidth: '364px',
  cardHeight: '340px',
  cardListMaxWidth: ''
})

new Vue({
  el: "#app",
  render: h => h(App)
})
