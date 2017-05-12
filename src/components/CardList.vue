<template>
  <transition name="cardList">
    <div class="card-list__container" :style="styles" v-if="isShow">
      <template v-for="(content, index) in contents">
        <Card :content="content" :config="config" :index="index" :toggleShow="toggleShow"></Card>
      </template>
    </div>
    <div class="" v-else>
      <CardDetail></CardDetail>
    </div>
  </transition>
</template>

<script>
  import Card from './Card.vue'
  import CardDetail from './CardDetail.vue'

  export default {
    props: ['contents'],
    components: {
      Card,
      CardDetail
    },
    data: () => {
      return {
        config: null,
        isShow: true
      }
    },
    computed: {
      styles() {
        return this.config.style.cardList? this.config.style.cardList: ''
      }
    },
    methods: {
      toggleShow(index) {
        console.log(index)
        this.isShow = !this.isShow
      }
    },
    created() {
      this.config = this.$options.config
    }
  }
</script>

<style lang="less" scoped>
  .cardList-enter-active, .cardList-leave-active {
    transition: opacity .5s
  }
  .cardList-enter, .cardList-leave-to {
    opacity: 0
  }

  .card-list__container {
    max-width: 1152px;
    margin: 0 auto;
    background-color: #DFDFDF;
  }
</style>
