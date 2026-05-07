import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import CrimeNoteTable from '../views/CrimeNoteTable.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path : '/crime-note-table/:username_id', name: 'CrimeNoteTable', component: CrimeNoteTable },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
