import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import carowner from '@/components/car-owner'
import personalmain from '@/components/PersonalMain'
import lineitem from '@/components/line-item'
import login from '@/components/login'
import register from '@/components/register'
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
      path:'/item',
      name:'lineitem',
      component:lineitem
    },
    {
      path:'/main',
      name:'personalmain',
      component:personalmain
    },
    {
      path:'/login',
      name:'login',
      component:login
    },
    {
      path:'/register',
      name:'register',
      component:register
    }
  ]
})
