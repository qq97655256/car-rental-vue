import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import carowner from '@/components/car-owner'
import personal from '@/components/PersonalCenter'
import personalmain from '@/components/PersonalMain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/owner',
      name:'carowner',
      component:carowner
    },
    {
      path:'/personal',
      name:'personal',
      component:personal
    },
    {
      path:'/main',
      name:'personalmain',
      component:personalmain
    }
  ]
})
