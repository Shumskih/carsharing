import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/view/MainPage'
import OrderForm from '@/view/OrderForm'
import OrderConfirmed from '@/view/OrderConfirmed'

Vue.use(Router)
let base = '/'

if (process.env.NODE_ENV === 'production') {
  base = '/carsharing-pages/'
}

export default new Router({
  base,
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/order',
      name: 'OrderForm',
      component: OrderForm,
      props: {
        fixed: true
      }
    },
    {
      path: '/order-confirmed',
      name: 'OrderConfirmed',
      component: OrderConfirmed,
      props: {
        fixed: true
      }
    }
  ]
})
