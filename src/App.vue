<template>
  <div id="app">
    <SideBar />

    <router-view class="rightBlock" />
  </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue';

export default {
  components: {
    SideBar
  }
};
</script>

<style lang="scss">

  #app {
    display: flex;
    height: 100vh;
    @include noto-sans-tc-16-regular;

  }

  .rightBlock {
    // padding: 37px 65px;
    overflow-y: scroll;
    width: 100%;
  }

  nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }

</style>
