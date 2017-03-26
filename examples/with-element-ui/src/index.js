import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('./Home.vue')

const router = new Router({
  mode: 'history',
  routes: [{
    path: '/',
    component: Home
  }]
})

export default { router }
