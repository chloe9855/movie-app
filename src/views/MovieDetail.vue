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
        <div>
          <h2>{{ movieData.title }} ({{ movieData.release_date.slice(0,4) }})</h2>
          <div>
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
                :percentage="movieData.vote_average * 10"
              />
            </div>

            <span>平均評分：{{ movieData.vote_average }}</span>
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
  </div>
</template>

<script>
import { getMovieDetail, getMovieActors, getRecommendMovies } from '../api/index';

export default {
  data () {
    return {
      movieData: {}
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
    },
    actorsData: {
      get () {
        return this.$store.state.actorsData;
      },
      set (val) {
        this.$store.dispatch('SET_ACTORS_DATA', val);
      }
    },
    recommendMovies: {
      get () {
        return this.$store.state.recommendData;
      },
      set (val) {
        this.$store.dispatch('SET_RECOMMEND_DATA', val);
      }
    }
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

      .info_img {
        width: 250px;
      }
    }
  }

  .circle_wrap {
    display: flex;
    align-items: center;
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

</style>
