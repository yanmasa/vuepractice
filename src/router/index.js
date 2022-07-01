import Vue from 'vue'
import VueRouter from 'vue-router'
import TopPage from '@/components/TopPage'
import BookIndex from '@/components/books/BookIndex'
import BookShow from '@/components/books/BookShow'
import BookRegistForm from '@/components/books/BookRegistForm'

Vue.use(VueRouter)

const routes = [
  {path: '/', name: 'top',component: TopPage,},
  {path:'/books', component: BookIndex},
  {path:'/books/regist', component: BookRegistForm},
  {path:'/books/:id', component: BookShow},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
