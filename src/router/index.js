import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import Admin from "../views/Admin.vue"
import Message from "../views/Message.vue"
import Clients from "../views/Clients.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/admin",
    name: "admin",
    component: Admin
  },
  {
    path: "/message",
    name: "message",
    component: Message
  },
  {
    path: "/clients",
    name: "clients",
    component: Clients
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
