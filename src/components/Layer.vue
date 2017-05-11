<template>
  <div class="layer__container" :style="styles">
    <CardList :contents="contents" :config="config"></CardList>
  </div>
</template>

<script>
  import Vue from 'vue'
  import CardList from './CardList.vue'

  export default {
    props: ['contents'],
    components: {
      CardList
    },
    data: () => {
      return {
        config: null
      }
    },
    computed: {
      styles() {
        return this.config.style.layer? this.config.style.layer: ''
      }
    },
    created() {
      this.config = this.$options.config
    }
  }
</script>

<style lang="less" scoped>
  .layer__container {
    height: 100%;
    margin: 0 auto;
    overflow-y: scroll;
  }
</style>
