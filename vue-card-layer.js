import Card from './src/components/Card.vue'
import CardList from './src/components/CardList.vue'
import Layer from './src/components/Layer.vue'

const VueCardLayer = {
  install (Vue, options) {
    Vue.component("Card", {
      extends: Card,
      config: Object.assign({

      }, options.card)
    })
    Vue.component("CardList", {
      extends: CardList,
      config: Object.assign({

      }, options.cardList)
    })
    Vue.component("Layer", {
      extends: Layer,
      config: Object.assign({

      }, options.layer)
    })
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueCardLayer)
}

export default VueCardLayer
