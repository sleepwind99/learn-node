import { 
  createRouter, 
  createWebHistory 
} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import KakaoLogin from '../views/KakaoLogin.vue'
import NaverLogin from '../views/NaverLogin.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/kakaologin',
    name: 'KakaoLogin',
    component: KakaoLogin
  },
  {
    path: '/naverlogin',
    name: 'NaverLogin',
    component: NaverLogin
  },
  {
    path: '/googlelogin',
    name: 'GoogleLogin',
    component: () => import(/*webpackChunkName: "parent"*/ '../views/GoogleLogin.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
