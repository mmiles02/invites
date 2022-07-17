import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView'
import LockView from '@/views/LockView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'signin',
    component: LockView,
    meta: { title: 'Welcome' }
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: { title: 'Home' }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: { title: 'About' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// Cause the page title to update
router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = to.meta.title
  })
})

export default router
