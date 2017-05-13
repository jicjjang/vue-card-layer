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
      toggleCard(index) {
        if (document.getElementById(`card${index}`).classList.contains("choice")) {
          this.contents.map((v, k) => {
            if (k !== index) {
              document.getElementById(`card${k}`).classList.remove("done")
            }
          })
          setTimeout(() => {
            this.contents.map((v, k) => {
              document.getElementById(`card${k}`).classList.remove("notChoice")
            })
          }, 500)
          document.getElementById(`card${index}`).classList.remove("choice")
          window.scrollTo(this.scrollPath.x, this.scrollPath.y)
          this.scrollPath.x = 0
          this.scrollPath.y = 0
        } else {
          this.scrollPath.x = window.scrollX
          this.scrollPath.y = window.scrollY
          return new Promise((resolve, reject) => {
            this.contents.map((v, k) => {
              document.getElementById(`card${k}`).classList.add("notChoice")
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
                  document.getElementById(`card${k}`).classList.add("done")
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
