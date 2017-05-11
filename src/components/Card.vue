<template>
  <div class="card__container" :style="styles">
    <div class="card__image">
      <img :src="content.path" :alt="content.title">
    </div>
    <div class="card__content">
      <div class="card__title">{{ content.title }}</div>
      <div class="card__description">{{ content.description }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['content', 'config'],
    computed: {
      styles() {
        return this.config.style.card? this.config.style.card: ''
      }
    }
  }
</script>

<style lang="less" scoped>
  .card__container {
    display: inline-block;
    & > .card__image {
      & > img {
        width: 100%;
      }
    }
    & > .card__content {
      & > .card__title {

      }
      & > .card__description {

      }
    }
  }
</style>
