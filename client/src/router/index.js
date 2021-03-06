import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add',
    name: 'AddForm',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AddForm.vue')
  },
  {
    path: '/update/:id',
    name: 'UpdateForm',
    component: () => import(/* webpackChunkName: "about" */ '../views/UpdateForm.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
