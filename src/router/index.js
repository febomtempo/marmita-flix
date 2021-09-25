import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import GridMovies from '../views/GridMovies.vue'
import GridAnimes from '../views/GridAnimes.vue'
import GridGames from '../views/GridGames.vue'
import Search from '../views/Search.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
  },
  {
    path: '/movies/',
    name: 'GridMovies',
    component: GridMovies,
  },
  {
    path: '/animes/',
    name: 'GridAnimes',
    component: GridAnimes,
  },
  {
    path: '/games/',
    name: 'GridGames',
    component: GridGames,
  },
  {
    path: '/search/',
    name: 'Search',
    component: Search,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
