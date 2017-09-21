<template>
  <div class="card__container" :id="`card${index}`" ref="card_container" :style="styles" @click.prevent.stop="toggleCard(index)">
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
    props: ['content', 'index', 'toggleCard', 'styles']
  }
</script>

<style lang="less" scoped>
  .card__container {
    display: inline-block;
    margin: 30px 10px;
    vertical-align: top;
    background-color: #fff;
    border-radius: 12px;
    overflow: hidden;
    opacity: 1;
    -webkit-transition: opacity 0.5s ease-in-out;
    transition: opacity 0.5s ease-in-out;
    &.choice {
      position: absolute;
      top: 0;
      left: 0;
      width: 100% !important;
      min-height: 1200px !important;
      margin: 0;
      -webkit-transition: width 0.75s, height 0.5s ease-in-out;
      transition: width 0.75s, height 0.5s ease-in-out;
      & > .card__image {
        width: initial;
        height: initial;
      }
    }
    &.notChoice {
      opacity: 0;
      &.done {
        display: none;
      }
    }
    &:hover {
      cursor: pointer;
    }
    & > .card__image {
      width: 100%;
      height: 74%;
      font-size: 0;
      & > img {
        width: 100%;
        height: 100%;
        border-top-right-radius: 12px;
        border-top-left-radius: 12px;
      }
    }
    & > .card__content {
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
