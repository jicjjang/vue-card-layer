<template>
  <div class="card__container" :id="`card${index}`" :style="styles" @click="toggleCard(index)">
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
    props: ['content', 'config', 'index', 'toggleCard'],
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
    margin: 30px 10px;
    vertical-align: top;
    background-color: #fff;
    border-radius: 12px;
    &.choice {
      width: 100%;
      height: 1500px;
      margin: 0;
      padding: 0;
      & > .card__image {
        width: initial;
        height: initial;
      }
    }
    &.notChoice {
      display: none;
    }
    &:hover {
      cursor: pointer;
    }
    & > .card__image {
      width: 364px;
      height: 240px;
      font-size: 0;
      & > img {
        width: 100%;
        height: 100%;
        border-top-right-radius: 12px;
        border-top-left-radius: 12px;
      }
    }
    & > .card__content {
      height: 80px;
      padding: 10px 20px;
      border-top: 1px solid #DFDFDF;
      font-family: 'Lato', sans-serif;
      font-weight: 400;
      & > .card__title {
        font-size: 30px;
        font-family: 'Lato', sans-serif;
        font-weight: 400;
      }
      & > .card__description {
        margin: 5px 0 0 0;
        font-size: 15px;
        font-family: 'Lato', sans-serif;
        font-weight: 300;
      }
    }
  }
</style>
