
import Layer from './src/components/Layer.vue'

const VueCardLayer = {
  install (Vue, options) {
    Vue.component("VueCardLayer", {
      extends: Layer,
      config: {
        style: {
          card: Object.assign({
            width: '300px',
            height: '350px'
          }, options.style && options.style.card && {}),
          cardList: Object.assign({
            width: 'inherit'
          }, options.style && options.style.cardList && {}),
          layer: Object.assign({
            width: '1024px'
          }, options.style && options.style.layer && {}),
        }
      }
    })
  }
}

export default VueCardLayer
