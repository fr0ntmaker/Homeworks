import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/jumbo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/card1',
      name: 'card1',
      component: () => import('./views/my-card')
    },
    {
      path: '/card2',
      name: 'card2',
      component: () => import('./views/text-card')
    },
    {
      path: '/card3',
      name: 'card3',
      component: () => import('./views/lazy-card')
    },
    {
      path: '/structure',
      name: 'structure',
      component: () => import('./views/structure')
    },
    {
      path: '/map',
      name: 'app-map',
      component: () => import('./views/map')
    },
    {
      path: '/clip',
      name: 'youtube',
      component: () => import('./views/clip')
    }
  ]
})
