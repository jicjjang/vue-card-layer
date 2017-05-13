<template>
  <div class="card-list__container" :style="styles" key="card-list">
    <Card v-for="(content, index) in contents"
      :content="content"
      :config="config"
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
        scrollPath: {
          x: 0,
          y: 0
        }
      }
    },
    computed: {
      styles() {
        return this.config.style.cardList? this.config.style.cardList: ''
      }
    },
    methods: {
      toggleCard(index) {
        if (document.getElementById(`card${index}`).classList.contains("choice")) {
          this.contents.map((v, k) => {
            if (k !== index) {
              document.getElementById(`card${k}`).classList.remove("notChoice")
            }
          })
          document.getElementById(`card${index}`).classList.remove("choice")
          window.scrollTo(this.scrollPath.x, this.scrollPath.y)
          this.scrollPath.x = 0
          this.scrollPath.y = 0
        } else {
          this.scrollPath.x = window.scrollX
          this.scrollPath.y = window.scrollY
          this.contents.map((v, k) => {
            if (k !== index) {
              document.getElementById(`card${k}`).classList.add("notChoice")
            }
          })
          document.getElementById(`card${index}`).classList.add("choice")
          window.scrollTo(0, 0)
        }
      }
    },
    created() {
      this.config = this.$options.config
    }
  }
</script>

<style lang="less" scoped>
  .card-list__container {
    max-width: 1152px;
    width: inherit;
    height: inherit;
    margin: 0 auto;
    background-color: #DFDFDF;
  }
</style>
