import CardList from './src/components/CardList.vue'

const VueCardLayer = {
  install (Vue, options) {
    Vue.component("VueCardLayer", {
      extends: CardList,
      config: Object.assign({
        cardWidth: '364px',
        cardHeight: '340px',
        cardListMaxWidth: '1000px'
      }, options)
    })
  }
}

export default VueCardLayer
