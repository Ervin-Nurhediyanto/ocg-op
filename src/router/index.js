import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('../views/index.vue'),
    redirect: {
      name: 'Home'
    },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('../views/home/index.vue')
      },
      {
        path: '/edit',
        name: 'Edit',
        component: () => import('../views/edit/index.vue')
      },
      {
        path: '/new-arena',
        name: 'New-Arena',
        component: () => import('../views/arena/new-arena/index.vue')
      },
      {
        path: '/arena',
        name: 'Arena',
        component: () => import('../views/arena/index.vue')
      },
      {
        path: '/pve',
        name: 'PvE',
        component: () => import('../views/arena/pve.vue')
      },
      {
        path: '/choose-opponent',
        name: 'Choose-Opponent',
        component: () => import('../views/arena/choose-opponent.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
