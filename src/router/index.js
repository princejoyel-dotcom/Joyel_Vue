import { createRouter, createWebHistory } from 'vue-router'
import Prelim from '../views/Prelim.vue'
import Admission from '../views/Admission.vue'
import SampleData from '../views/SampleData.vue'
import SampleMethods from '../views/SampleMethods.vue'
import SampleVmodel from '../views/SampleVmodel.vue'

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
    {
      path: '/sample-data', 
      name: 'Sample Data', 
      component: SampleData,
    },
    {
      path: '/sample-methods',
      name: 'Sample Methods',
      component: SampleMethods,
    },
    {
      path: '/sample-vmodel',
      name: 'Sample V-Model',
      component: SampleVmodel,
    },
  ],
})

export default router
