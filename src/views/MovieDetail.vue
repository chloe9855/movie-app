<template>
  <div>
    <div
      v-if="Object.keys(movieData).length > 0"
      class="banner"
      :style="`background: ${bgUrl};`"
    >
      <div class="mask" />
      <div class="info">
        <img
          class="info_img"
          :src="`https://image.tmdb.org/t/p/w1280/${movieData.poster_path}`"
        >
        <div class="info_description">
          <h2>{{ movieData.title }} ({{ movieData.release_date.slice(0,4) }})</h2>
          <div class="type">
            <span
              v-for="item in movieData.genres"
              :key="item.id"
            >
              {{ item.name }}
            </span>
          </div>

          <div class="circle_wrap">
            <div class="circle">
              <el-progress
                type="circle"
                :width="60"
                :color="'#9e32a8'"
                :percentage="Math.floor(movieData.vote_average * 10)"
              />
            </div>

            <span>平均評分：{{ movieData.vote_average.toFixed(1) }}</span>
          </div>

          <h3
            v-if="movieData.tagline.length > 0"
            class="tagline"
          >
            {{ movieData.tagline }}
          </h3>

          <h3>概要</h3>
          <p>{{ movieData.overview }}</p>

          <h3>拍攝公司</h3>
          <div class="company">
            <h4
              v-for="item in movieData.production_companies"
              :key="item.id"
            >
              {{ item.name }}
            </h4>
          </div>
        </div>
      </div>
    </div>

    <div class="content_block">
      <div class="content_actor">
        <h3>主要演員</h3>
      </div>
      <div class="content_info">
        <div
          v-for="(item,index) in originInfo"
          :key="index"
        >
          <h3>{{ item.label }}</h3>
          <p>{{ movieData[item.value] }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getMovieDetail, getMovieActors, getRecommendMovies } from '../api/index';

export default {
  data () {
    return {
      movieData: {},
      originInfo: [{ label: '原始標題', value: 'original_title' }, { label: '狀態', value: 'status' }, { label: '原始語言', value: 'original_language' }, { label: '電影成本', value: 'budget' }, { label: '收入', value: 'revenue' }]
    };
  },
  name: 'MovieDetail',
  mounted () {
    this.getMovieDetail(this.movieId);
    this.getMovieActors(this.movieId);
    this.getRecommendMovies(this.movieId);
  },
  methods: {
    async getMovieDetail (val) {
      await getMovieDetail(val)
        .then((res) => {
          console.log(res.data);
          this.movieData = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async getMovieActors (val) {
      await getMovieActors(val)
        .then((res) => {
          this.actorsData = res.data.cast;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async getRecommendMovies (val) {
      await getRecommendMovies(val)
        .then((res) => {
          this.recommendMovies = res.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
  computed: {
    movieId () {
      return this.$route.params.id;
    },
    bgUrl () {
      return this.movieData.backdrop_path ? `url(https://image.tmdb.org/t/p/w1280/${this.movieData.backdrop_path}) top/cover` : '';
    }
    // actorsData: {
    //   get () {
    //     return this.$store.state.actorsData;
    //   },
    //   set (val) {
    //     this.$store.dispatch('SET_ACTORS_DATA', val);
    //   }
    // },
    // recommendMovies: {
    //   get () {
    //     return this.$store.state.recommendData;
    //   },
    //   set (val) {
    //     this.$store.dispatch('SET_RECOMMEND_DATA', val);
    //   }
    // }
  },
  watch: {
    // movieId: {
    //   immediate: true,
    //   handler (newVal, oldVal) {
    //     this.getMovieDetail(newVal);
    //     this.getMovieActors(newVal);
    //     this.getRecommendMovies(newVal);
    //   }
    // }
  }
};
</script>

<style lang="scss">

  .banner {
    padding: 20px;
    position: relative;
    height: 66vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.5);
    }

    .info {
      position: relative;
      color: white;
      display: flex;
      width: 100%;
      padding: 0px 50px;

      h2 {
        font-size: 2.2rem;
        font-weight: 600;
      }

      .info_img {
        width: 263px;
      }

      h3 {
        font-size: 19px;
        font-weight: 600;
        margin: 20px 0 5px;
      }
    }
  }

  .circle_wrap {
    display: flex;
    align-items: center;
    span {
      margin-left: 10px;
    }
  }

  .circle {
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

  .company {
    display: flex;
  }

  .tagline {
    font-style: italic;
  }

  .info_description {
    margin-left: 40px;
    .type {
      margin: 20px 0;
    }
  }

  .content_block {
    display: flex;
        justify-content: space-between;
    padding: 63px;
  }

</style>
