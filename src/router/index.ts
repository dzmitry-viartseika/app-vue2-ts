import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../pages/Home.vue';
import Login from '../pages/Login.vue';
import Register from '../pages/Register.vue';
import Settings from '../pages/Settings.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/Login.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/pages/Register.vue'),
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('@/pages/Settings.vue'),
  },
  {
    path: '/:usernae(@.*)',
    name: 'profile',
    component: () => import('@/pages/Profile.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
