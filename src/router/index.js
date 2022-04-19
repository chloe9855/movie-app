import Vue from 'vue';
import VueRouter from 'vue-router';
// import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter);

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  {
    path: '/',
    name: 'movieList',
    component: () => import('../views/MovieList.vue')
  },
  {
    path: '/movieDetail/:id',
    name: 'movieDetail',
    component: () => import('../views/MovieDetail.vue')
  },
  {
    path: '/myRating',
    name: 'myRating',
    component: () => import('../views/MyRating.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router;
