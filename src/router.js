import { createRouter, createWebHistory } from 'vue-router';
import Welcome from './components/Welcome.vue';
import Repository from './components/Repository.vue';
import NotFound from './components/NotFound.vue'; 

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/repositories',
    name: 'Repositories',
    component: Repository
  },
  
  {
    path: '/:catchAll(.*)',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
