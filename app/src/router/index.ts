import {createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Game from '../views/Game.vue'

// This file controls the routing of the App
// see vue-router docs for more info
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/game',
        name: 'Game',
        component: Game,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;