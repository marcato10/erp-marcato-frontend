import { createRouter, createWebHistory, type Router, type RouteRecord, type RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WelcomeView from '@/views/WelcomeView.vue'
import AuthCallbackView from '@/views/AuthCallbackView.vue'

const protectedRoutes:RouteRecordRaw[] =  [{
    path: '/complete-register',
    name: 'EndRegister',
    component: () => import('../views/RegisterView.vue'),
    },
    {
      path: '/home',
      name: 'HomePage',
      component: () => import('../layout/AppLayout.vue'),
      children:[
        {
          path: '',
          name: 'HomeDashboard',
          component: HomeView
        }
      ]
    }
  ];
const publicRoutes:RouteRecordRaw[] = [
  {
      path: '/',
      name: 'welcome',
      component: WelcomeView,
    },
    {
    path: '/callback',
    name: 'AuthCallback',
    component: AuthCallbackView,
    }
];
const router:Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...publicRoutes,
    ...protectedRoutes
  ],
})

export default router