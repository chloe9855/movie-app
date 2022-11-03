import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    actorsData: null,
    recommendData: null
  },
  getters: {

  },
  mutations: {
    SET_ACTORS_DATA (state, data) {
      state.actorsData = data;
    },
    SET_RECOMMEND_DATA (state, data) {
      state.recommendData = data;
    }
  },
  actions: {
    SET_ACTORS_DATA (context, data) {
      context.commit('SET_ACTORS_DATA', data);
    },
    SET_RECOMMEND_DATA (context, data) {
      context.commit('SET_RECOMMEND_DATA', data);
    }
  },
  modules: {
  }
});
