<template>
  <div class="out_wrap">
    <div class="seBox">
      <el-input
        v-model="searchInput"
        class="el1"
        placeholder="請輸入關鍵字"
        prefix-icon="el-icon-search"
      />
    </div>

    <div class="mv_wrap">
      <div
        v-for="(item, index) in mvList"
        :key="index"
        class="mv_item"
      >
        <img
          class="poster"
          :src="`https://image.tmdb.org/t/p/w1280/${item.poster_path}`"
          @click="$router.push({ name: 'movieDetail', params: { id: item.id }})"
        >
        <div class="content">
          <router-link
            class="title"
            :to="{ name: 'movieDetail', params: { id: item.id }}"
          >
            <h3>{{ item.title }}</h3>
          </router-link>

          <div class="circle_progress">
            <el-progress
              type="circle"
              :width="60"
              :color="'#9e32a8'"
              :percentage="item.vote_average * 10"
            />
          </div>

          <p class="date">
            上映日期：{{ item.release_date }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { apiMovieList } from '../api/index.js';

export default {
  data () {
    return {
      searchInput: '',
      allData: [],
      mvList: []
    };
  },
  mounted () {
    this.getDefaultData();
  },
  methods: {
    getDefaultData () {
      apiMovieList()
        .then(res => {
          console.log(res);
          this.allData = res.data;
          this.mvList = res.data.results;
        }).catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>

  .out_wrap {
     padding: 37px 65px;
  }

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

  .mv_wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 35px;
  }

  .mv_item {
    padding-bottom: 40px;
  }

  .poster {
    width: 250px;
    height: 357px;
    border-radius: 6px;
    cursor: pointer;
  }

  .content {
    position: relative;
    margin-top: 5px;

  }

  .title {
    @include noto-sans-tc-17-medium;
  }

  .date {
    color: gray;
    font-size: 15px;
  }

  .circle_progress {
    position: absolute;
    right: -7px;
    top: -57px;
    width: 60px;
    height: 60px;
    border-radius:999em;
    background:white;
  }

  .el-progress__text {
    font-size: 16px !important;
    font-weight: 800 !important;
    color: #9e32a8 !important;
  }

</style>
