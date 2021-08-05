import { createRouter, createWebHashHistory } from 'vue-router'
// @ts-ignore
import Home from '../pages/Home.vue'
// @ts-ignore
import CarDetailsPage from '../pages/CarDetailsPage.vue'
// @ts-ignore
import HouseDetailsPage from '../pages/HouseDetailsPage.vue'
// @ts-ignore
import JobDetailsPage from '../pages/JobDetailsPage.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    // required param ':id'
    path: '/car-details/:id',
    name: 'CarDetails',
    component: CarDetailsPage
  },
  {
    path: '/house-details/:id',
    name: 'HouseDetails',
    component: HouseDetailsPage
  },
  {
    path: '/job-details/:id',
    name: 'JobDetails',
    component: JobDetailsPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
