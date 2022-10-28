import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FilmsView from '../views/FilmsView'
import AllFilmsPage from '../views/AllFilmsPage'
import FilmPage from '../views/FilmPage'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/films',
      name: 'films',
      component: FilmsView,
      children: [
        {
          path: '',
          name: 'allFilms',
          component: AllFilmsPage
        },
        {
          path: ':id',
          name: 'filmPage',
          component: FilmPage
        }
      ]
    }
  ]
})

export default router
