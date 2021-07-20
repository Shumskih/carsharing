import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '../view/MainPage'

Vue.use(Router)

export default new Router({
  base: '/carsharing-pages/',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    }
  ]
})
