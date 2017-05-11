<template>
  <div class="card-list__container" :style="styles">
    <template v-for="content of contents">
      <Card :content="content" :config="config"></Card>
    </template>
  </div>
</template>

<script>
  import Card from './Card.vue'

  export default {
    props: ['contents', 'config'],
    components: {
      Card
    },
    computed: {
      styles() {
        return this.config.style.cardList? this.config.style.cardList: ''
      }
    }
  }
</script>

<style lang="css">
</style>
