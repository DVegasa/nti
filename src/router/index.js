import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/views/main/Main.vue'
import Profile from '@/views/profile/Profile.vue'
import Friends from '@/views/friends/Friends.vue'
import Events from '@/views/events/Events.vue'
import Event from '@/views/event/Event.vue'
import TeamCreate from '@/views/teamCreate/TeamCreate.vue'
import ChatAdmin from "@/views/chatAdmin/ChatAdmin.vue";

const routes = [
  {path: '/', component: Main},
  {path: '/profile', component: Profile},
  {path: '/friends', component: Friends},
  {path: '/events', component: Events},
  {path: '/event', component: Event},
  {path: '/teamCreate', component: TeamCreate},
  {path: '/chatAdmin', component: ChatAdmin}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
