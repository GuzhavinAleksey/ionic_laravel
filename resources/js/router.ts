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
    path: '/home',
    name: 'Home',
    component: () => import('./views/HomePage.vue')
  },
  // Posts
  {
    path: '/posts',
    name: 'Post_list',
    component: () => import('./views/PostsList.vue')
  },
  {
    path: '/posts_add',
    name: 'Post_add',
    component: () => import('./views/PostsAdd.vue')
  },
  {
    path: '/posts/:id',
    name: 'Post_prev',
    component: () => import('./views/PostPrev.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
