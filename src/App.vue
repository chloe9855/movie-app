<template>
  <div id="app">
    <SideBar />
    <!-- <nav>
      <router-link to="/">
        Home
      </router-link> |
      <router-link to="/about">
        About
      </router-link>
    </nav> -->
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
        padding: 37px 65px;
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
