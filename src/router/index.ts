import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/components/Main.vue'
import Contacts from '@/components/Contacts.vue'
import About  from '@/components/About.vue'
import PostCard from '@/components/PostCard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: Contacts
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/post/:id',
      name: 'PostCard',
      component: PostCard,
      props: route => ({ id: Number(route.params.id) })
    },
  ]
})

export default router
