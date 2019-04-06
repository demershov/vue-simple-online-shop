import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Product from '@/components/Products/Product.vue'
import NewProduct from '@/components/Products/NewProduct.vue'
import ListProduct from '@/components/Products/ListProduct.vue'
import Login from '@/components/Auth/Login.vue'
import Register from '@/components/Auth/Register.vue'
import Checkout from '@/components/User/Checkout.vue'
import AuthGuard from './auth-guard'

Vue.use(Router)

export default new Router({
  base: '',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/product/:id',
      props: true,
      name: 'product',
      component: Product
    },
    {
      path: '/list',
      name: 'list',
      component: ListProduct,
      beforeEnter: AuthGuard
    },
    {
      path: '/new',
      name: 'new',
      component: NewProduct,
      beforeEnter: AuthGuard
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout,
      beforeEnter: AuthGuard
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ],
  mode: 'history'
})