import { createRouter, createWebHistory } from 'vue-router'
import Home1 from '../views/Home.vue'
import ViewDetail from '@/views/Home/ViewDetail.vue'
import Home from '@/views/Home/HomeView.vue'
import HomeViewMan from '@/views/Home/HomeViewMan.vue'
import AddToCart from '@/views/Home/AddToCart.vue'
import Login from '@/views/Login.vue'
import NewLogin from '@/views/NewLogin.vue'
import ContacManager from "@/views/Admin/ContacManager"
import AddContact from "@/views/Admin/AddContact"
import EditContact from "@/views/Admin/EditContact"
import ViewContact from "@/views/Admin/ViewContact"
import PageNotFound from "@/views/PageNotFound"
import ForgotPassword from "@/views/ForgotPassword"
const routes = [
  {
    path: '/',
    name: 'Home1',
    redirect:"/Login",
    component: Home1
  },
  {
    path: '/contacts',
    name: 'ContacManager',
    component: ContacManager
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Login/NewLogin',
    name: 'NewLogin',
    component: NewLogin
  },
  {
    path: '/Login/ForgotPassword',
    name: 'ForgotPassword',
    component: ForgotPassword
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Home/HomeViewMan',
    name: 'HomeViewMan',
    component: HomeViewMan
  },
  {
    path: '/Home/AddToCart',
    name: 'AddToCart',
    component: AddToCart
  },
  {
    path: '/Home/ViewDetail/:contactId',
    name: 'ViewDetail',
    component: ViewDetail
  },
  {
    path: '/contacts/add',
    name: 'AddContact ',
    component: AddContact
  },
  {
    path: '/contacts/edit/:contactId',
    name: 'EditContact',
    component: EditContact
  },
  {
    path: '/contacts/view/:contactId',
    name: 'ViewContact',
    component: ViewContact
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: PageNotFound
  },
]

const router = createRouter( {
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router






