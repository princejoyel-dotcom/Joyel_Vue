import { createRouter, createWebHistory } from 'vue-router'
import Prelim from '../views/Prelim.vue'
import Admission from '../views/Admission.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Prelim',
      component: Prelim,
    },
    {
      path: '/admissions',
      name: 'Admissions',
      component: Admission,
    },
  ],
})

export default router
