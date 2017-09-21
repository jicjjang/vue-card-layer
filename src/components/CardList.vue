<template>
  <div class="card-list__container" :style="cardListStyles" key="card-list">
    <Card v-for="(content, index) in contents"
      :content="content"
      :styles="cardStyles"
      :index="index"
      :toggleCard="toggleCard"
      key="index"
      ></Card>
  </div>
</template>

<script>
  import Card from './Card.vue'

  export default {
    props: ['contents'],
    components: {
      Card
    },
    data: () => {
      return {
        config: null,
        cardStyles: null,
        cardListStyles: null,
        scrollPath: {
          x: 0,
          y: 0
        }
      }
    },
    methods: {
      _removeSpecificClassName(index, removeValue) {
        let choicedCard = this.$children[index].$refs.card_container
        choicedCard.className = choicedCard.className.split(' ').filter((v2) => {
          if (v2 === removeValue) {
            return false
          }
          return true
        }).join(' ')
      },
      toggleCard(index) {
        let choicedCard = this.$children[index].$refs.card_container
        if (choicedCard.className.includes("choice")) {
          this.contents.map((v, k) => {
            if (k !== index) {
              this._removeSpecificClassName(k, 'done')
            }
          })
          setTimeout(() => {
            this.contents.map((v, k) => {
              this._removeSpecificClassName(k, 'notChoice')
            })
          }, 500)
          this._removeSpecificClassName(index, 'choice')
          window.scrollTo(this.scrollPath.x, this.scrollPath.y)
          this.scrollPath.x = 0
          this.scrollPath.y = 0
        } else {
          this.scrollPath.x = window.scrollX
          this.scrollPath.y = window.scrollY
          return new Promise((resolve, reject) => {
            this.contents.map((v, k) => {
              this.$children[k].$refs.card_container.className += " notChoice"
            })
            setTimeout(() => {
              resolve()
            }, 1000)
          }).then(() => {
            window.scrollTo(0, 0)
            this.$children[index].$refs.card_container.className = "card__container choice"
          }).then(() => {
            setTimeout(() => {
              return this.contents.map((v, k) => {
                if (k !== index) {
                  this.$children[k].$refs.card_container.className += " done"
                }
              })
            }, 750)
          })
        }
      }
    },
    created() {
      this.config = this.$options.config
      this.cardStyles = {
        width: this.config.cardWidth,
        height: this.config.cardHeight
      }
      this.cardListStyles = {
        maxWidth: this.config.cardListMaxWidth
      }
    }
  }
</script>

<style lang="less" scoped>
  .card-list__container {
    width: inherit;
    height: inherit;
    margin: 0 auto;
    background-color: #DFDFDF;
  }
</style>
