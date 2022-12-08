<template>
  <div id="app">
    <HeaderBar />

    <router-view class="rightBlock" />
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar.vue';

export default {
  components: {
    HeaderBar
  }
};
</script>

<style lang="scss">

  #app {
    // display: flex;
    // height: 100vh;
    @include noto-sans-tc-16-regular;

  }

  .rightBlock {
    // overflow-y: scroll;
    // width: 100%;
  }

</style>
