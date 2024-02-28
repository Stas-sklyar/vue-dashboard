import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: () => import('@/pages/Dashboard.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/Login.vue')
    },
    {
      path: '/registration',
      name: 'registration',
      component: () => import('@/pages/Registration.vue')
    },
    {
      path: '/course/:id',
      name: 'course',
      component: () => import('@/pages/Course.vue')
    },
    {
      path: '/courses',
      name: 'courses',
      component: () => import('@/pages/Courses.vue')
    },
    {
      path: '/lesson/:id',
      name: 'lesson',
      component: () => import('@/pages/Lesson.vue')
    },
  ]
})

router.afterEach(() => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

export default router
