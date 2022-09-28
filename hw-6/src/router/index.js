import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardPage from '../../pages/DashboardPage'
import AboutPage from '../../pages/AboutPage'
import NotFound from '../../pages/NotFound'
// import AddPaymentForm from '../components/AddPaymentForm'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardPage
    },
    {
      path: '/dashboard/:category?/:value?',
      name: 'addpayment',
      component: DashboardPage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/notfound',
      name: 'notfound',
      component: NotFound
    }
  ]
})

export default router
