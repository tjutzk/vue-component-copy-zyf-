import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import lmInput from '@/pages/lmInput'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/lmInput',
      name: 'ImInput',
      component: lmInput
    }
  ]
})
