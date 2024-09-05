import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';



/*
/ Home_View
*/
const routes: Array<RouteRecordRaw> = [
  // Home_View
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/auth/login',
    name: 'Login',
    component: () => import('./views/Auth/Login.vue')
  },
  {
    path: '/auth/registr',
    name: 'Registr',
    component: () => import('./views/Auth/Registr.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('./views/HomePage.vue')
  },
  // Posts
  {
    path: '/posts',
    name: 'Post_list',
    component: () => import('./views/Post/PostsList.vue')
  },
  {
    path: '/posts/posts_add',
    name: 'Post_add',
    component: () => import('./views/Post/PostsAdd.vue')
  },
  {
    path: '/posts/:id',
    name: 'Post_prev',
    component: () => import('./views/Post/PostPrev.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})


export default router
