import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/views/main/Main.vue'
import Profile from '@/views/profile/Profile.vue'
import Friends from '@/views/friends/Friends.vue'
import Events from '@/views/events/Events.vue'

const routes = [
  {path: '/', component: Main},
  {path: '/profile', component: Profile},
  {path: '/friends', component: Friends},
  {path: '/events', component: Events},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
