import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView'
import OurStoryView from '@/views/OurStoryView'
import PhotosView from '@/views/PhotosView'
import WeddingPartyView from '@/views/WeddingPartyView'
import QAView from '@/views/QAView'
import TravelView from '@/views/TravelView'
import RegistryView from '@/views/RegistryView'
import RSVPView from '@/views/RSVPView'
import RSVPResults from '@/views/RSVPResults'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'Home' }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: { title: 'About' }
  },
  {
    path: '/our-story',
    name: 'our-story',
    component: OurStoryView,
    meta: { title: 'Our Story' }
  },
  {
    path: '/photos',
    name: 'photos',
    component: PhotosView,
    meta: { title: 'Photos' }
  },
  {
    path: '/wedding-party',
    name: 'wedding-party',
    component: WeddingPartyView,
    meta: { title: 'Wedding Party' }
  },
  {
    path: '/q+a',
    name: 'q+a',
    component: QAView,
    meta: { title: 'Q+A' }
  },
  {
    path: '/travel',
    name: 'travel',
    component: TravelView,
    meta: { title: 'Travel' }
  },
  {
    path: '/registry',
    name: 'registry',
    component: RegistryView,
    meta: { title: 'Registry' }
  },
  {
    path: '/rsvp',
    name: 'rsvp',
    component: RSVPView,
    meta: { title: 'RSVP' }
  },
  {
    path: '/rsvp',
    name: 'rsvp-results',
    component: RSVPResults,
    props: true,
    meta: { title: 'RSVP' }
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
