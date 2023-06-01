import { createRouter, createWebHistory } from 'vue-router';

import About from '../views/About.vue';

const routes = [
    {
        paht: '/about',
        name: 'About',
        component: About,
    }
];


const router = createRouter({
    history: createWebHistory(proccess.env.BASE_URL),
    routes
});

export default router;