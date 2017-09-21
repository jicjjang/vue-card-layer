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
      _removeSpecificClassName(id, removeValue) {
        let tempCard = document.getElementById(id)
        tempCard.className = tempCard.className.split(' ').filter((v2) => {
          if (v2 === removeValue) {
            return false
          }
          return true
        }).join(' ')
      },
      toggleCard(index) {
        if (document.getElementById(`card${index}`).className.includes("choice")) {
          this.contents.map((v, k) => {
            if (k !== index) {
              this._removeSpecificClassName(`card${k}`, 'done')
            }
          })
          setTimeout(() => {
            this.contents.map((v, k) => {
              this._removeSpecificClassName(`card${k}`, 'notChoice')
            })
          }, 500)
          this._removeSpecificClassName(`card${index}`, 'choice')
          window.scrollTo(this.scrollPath.x, this.scrollPath.y)
          this.scrollPath.x = 0
          this.scrollPath.y = 0
        } else {
          this.scrollPath.x = window.scrollX
          this.scrollPath.y = window.scrollY
          return new Promise((resolve, reject) => {
            this.contents.map((v, k) => {
              document.getElementById(`card${k}`).className += " notChoice"
            })
            setTimeout(() => {
              resolve()
            }, 1000)
          }).then(() => {
            window.scrollTo(0, 0)
            document.getElementById(`card${index}`).className = "card__container choice"
          }).then(() => {
            setTimeout(() => {
              return this.contents.map((v, k) => {
                if (k !== index) {
                  document.getElementById(`card${k}`).className += " done"
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
