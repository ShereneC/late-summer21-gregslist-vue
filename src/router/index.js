import { createRouter, createWebHashHistory } from 'vue-router'
// @ts-ignore
import CarDetailsPage from '../pages/CarDetailsPage.vue'

// @ts-ignore
import HouseDetailsPage from '../pages/HouseDetailsPage.vue'
// @ts-ignore
import Home from '../pages/Home.vue'


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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
