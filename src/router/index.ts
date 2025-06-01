import { createRouter, createWebHistory, type Router } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WelcomeView from '@/views/WelcomeView.vue'
import AuthCallbackView from '@/views/AuthCallbackView.vue'

const router:Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: WelcomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: ()=> import('../components/Login.vue')
    },
    {
    path: '/callback', // Rota de callback para o OAuth0
    name: 'AuthCallback',
    // Este componente lidaria com o token do Auth0 após o redirecionamento
    component: AuthCallbackView,
    }
  ],
})

export default router