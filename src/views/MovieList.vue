<template>
  <div>
    <div class="seBox">
      <!-- <span>搜尋</span> -->
      <el-input
        v-model="searchInput"
        class="el1"
        placeholder="請輸入關鍵字"
        prefix-icon="el-icon-search"
      />
    </div>

    所有電影
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchInput: ''
    };
  }
};
</script>

<style lang="scss">

  .seBox {
    display: flex;
    align-items: center;

    span {
      margin-right: 10px;
      font-size: 18px;
    }
  }

  .el1 {
    width: 300px;

    input {
      border-radius: 0;
      border: none;
      border-bottom: 1px solid #d1cece;
    }
  }

</style>
