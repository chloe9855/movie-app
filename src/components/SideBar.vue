<template>
  <div class="sidebar">
    <h2>MovieHot</h2>

    <div class="p1">
      <router-link
        class="p1"
        to="/"
      >
        所有電影
      </router-link>
    </div>

    <div class="p2">
      <router-link
        class="p2"
        to="/myRating"
      >
        我的清單
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    };
  }
};
</script>

<style lang="scss" scoped>

  .sidebar {
    @include noto-sans-tc-20-regular;
    background-color: rgb(59, 34, 150);
    color: white;
    padding: 55px;

  }

  h2 {
    font-weight: 900;
    cursor: pointer;
  }

  .p1 {
    color: white;
    margin-top: 30px;
    cursor: pointer;

    &:hover {
      color: yellow;
    }
  }

  .p2 {
    color: white;
    margin-top: 20px;
    cursor: pointer;

    &:hover {
      color: yellow;
    }
  }

</style>
