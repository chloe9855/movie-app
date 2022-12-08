<template>
  <header>
    <div
      class="header_icon"
      @click="$router.push('/')"
    >
      <img
        :src="require('../assets/img/clapperboard.png')"
      >
      <h1>Movie</h1>
    </div>

    <div>
      <router-link
        class="header_title"
        to="/"
      >
        所有電影
      </router-link>
      <router-link
        class="header_title"
        to="/myRating"
      >
        我的清單
      </router-link>
    </div>
  </header>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>

  header {
     @include noto-sans-tc-20-regular;
    background:white;
    // background-image: linear-gradient(to right, #3b2296, #5030a3, #643fb0, #774ebd, #895dca);
    box-shadow: 1px 2px 10px -5px rgb(0 0 0 / 41%);
    padding: 9px 65px;
    font-size: 17px !important;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 50px;
    }
  }

  h1 {
    font-weight: 900;
    font-size: 28px;
    margin-left: 20px;
  }

  .header_icon {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .header_title {
    color: black;
    padding: 20px;
    border-radius: 3px;

    &:hover {
      background: #9e52c6;
      color: white;
    }

  }

</style>
