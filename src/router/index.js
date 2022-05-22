import { createRouter, createWebHistory } from "vue-router"
import Home from '../views/Home.vue'
const routes=[{
    path:'/',
    name:'Home',
    componenet:Home
},
{
    path:'/about',
    name:'About',
    componentt: ()=> import('../views/About.vue')
}
]
const router=createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})
export defualt router
