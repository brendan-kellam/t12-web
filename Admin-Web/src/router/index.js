import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Ranking from '@/components/Ranking'
import Overview from '@/components/Overview'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
     {
    path: '/Ranking',
    name: 'Ranking',
    component: Ranking
    },
    {
      path: '/overview',
      name: 'Overview',
      component: Overview
    }
  ]
})
