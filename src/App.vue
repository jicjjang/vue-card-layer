<template>
  <div class="container">
    <VueCardLayer :contents="contents"></VueCardLayer>
  </div>
</template>

<script>
  export default {
    data: () => {
      return {
        contents: [
          {
            title: 'Korea',
            description: 'This is Korea flag',
            path: '../assets/images/1.png'
          },
          {
            title: 'USA',
            description: 'This is USA flag',
            path: '../assets/images/2.png'
          },
          {
            title: 'UK',
            description: 'This is UK flag',
            path: '../assets/images/3.jpg'
          },
          {
            title: 'Spain',
            description: 'This is Spain flag',
            path: '../assets/images/4.jpg'
          },
          {
            title: 'Paraguay',
            description: 'This is Paraguay flag',
            path: '../assets/images/5.png'
          },
          {
            title: 'Mexico',
            description: 'This is Mexico flag',
            path: '../assets/images/6.png'
          },
          {
            title: 'France',
            description: 'This is France flag',
            path: '../assets/images/7.png'
          },
          {
            title: 'Poland',
            description: 'This is Poland flag',
            path: '../assets/images/8.png'
          },
          {
            title: 'Argentine',
            description: 'This is Argentine flag',
            path: '../assets/images/9.png'
          },
          {
            title: 'India',
            description: 'This is India flag',
            path: '../assets/images/10.jpg'
          }
        ]
      }
    }
  }
</script>

<style lang="less">
  body {
    margin: 0;
    padding: 0;
  }
  .container {
    width: inherit;
    height: inherit;
    margin: 0;
    padding: 0;
  }
</style>
