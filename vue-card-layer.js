
import CardList from './src/components/CardList.vue'

const VueCardLayer = {
  install (Vue, options) {
    Vue.component("VueCardLayer", {
      extends: CardList,
      config: {
        style: {
          card: Object.assign({

          }, options && options.card && {}),
          cardList: Object.assign({
            
          }, options && options.cardList && {})
        }
      }
    })
  }
}

export default VueCardLayer
