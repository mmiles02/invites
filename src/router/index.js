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
import RSVPInfo from '@/views/RSVPInfo'
import Hannah from '@/views/Hannah'
import HanAndChloe from '@/views/HanAndChloe'
import Day3 from '@/views/Day3'


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
    path: '/qa',
    name: 'qa',
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
    props: true,
    meta: { title: 'RSVP' }
  },
  {
    path: '/rsvp',
    name: 'rsvp-results',
    component: RSVPResults,
    props: true,
    meta: { title: 'RSVP' }
  },
  {
    path: '/rsvp',
    name: 'rsvp-info',
    component: RSVPInfo,
    props: true,
    meta: { title: 'RSVP' }
  },
  {
    path: '/hannah-message',
    name: 'hannah',
    component: Hannah,
    meta: { title: 'Hannah' }
  },
  {
    path: '/han-and-chloe',
    name: 'han-and-chloe',
    component: HanAndChloe,
    meta: { title: 'My Two Girls' }
  },
  {
    path: '/hannah',
    name: 'day3',
    component: Day3,
    meta: { title: 'Hannah' }
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
