import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import home from '@/components/pages/home/home'
import docDetail from '@/components/pages/home/docDetail'
import picDetail from '@/components/pages/home/picDetail'
import projectApp from '@/components/pages/home/projectApp'

import order from '@/components/pages/order/order'
import Register from '@/components/pages/order/Register'
import ownOrder from '@/components/pages/order/ownOrder'
import setting from '@/components/pages/order/setting'
import evaluate from '@/components/pages/order/evaluate'

import medical from '@/components/pages/medical'
import shop from '@/components/pages/shop/shop'
import medicalShop from '@/components/pages/shop/medicalShop'

import shopCar from '@/components/pages/shopCar'

import login from '@/components/pages/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: "login",
      component: login,
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [{
        path: '/home',
        name: 'home',
        component: home
      },
      {
        path: '/docDetail',
        name: 'docDetail',
        component: docDetail
      },
      {
        path: '/picDetail',
        name: 'picDetail',
        component: picDetail
      },
      {
        path: "/projectApp",
        name: "projectApp",
        component: projectApp
      },
      {
        path: '/order',
        name: 'order',
        component: order,
        children: [
          {
            path: '/ownOrder',
            name: 'ownOrder',
            component: ownOrder
          },
          {
            path: '/Register',
            name: 'Register',
            component: Register
          },
          {
            path: '/setting',
            name: 'setting',
            component: setting
          },
          {
            path: '/evaluate',
            name: 'evaluate',
            component: evaluate
          }
        ]
      },
      {
        path: '/medical',
        name: 'medical',
        component: medical
      },
      {
        path: '/shop',
        name: 'shop',
        component: shop,
        children: []
      },
      {
        path: '/medicalShop',
        name: 'medicalShop',
        component: medicalShop
      },
      {
        path: '/shopCar',
        name: 'shopCar',
        component: shopCar
      }
      ]
    }
  ]
})
