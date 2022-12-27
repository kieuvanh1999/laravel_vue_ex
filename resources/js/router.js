import { createWebHistory, createRouter } from 'vue-router'

import Home from './pages/home.vue'
import Apicalling from './pages/apicalling.vue'
import Login from './pages/login.vue'
import Register from './pages/register.vue'
import Admin from './layouts/admin.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/apicalling',
        name: 'Apicalling',
        component: Apicalling
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/admin',
        name: 'Admin',
        component: Admin,
        children: [
            {
                path: "users",
                name: "admin-users",
                component: () => import ("./pages/admin/users/index.vue")
            },
            {
                path: "users/create",
                name: "admin-users-create",
                component: () => import ("./pages/admin/users/create.vue")
            },
            {
                path: "roles",
                name: "admin-role",
                component: () => import ("./pages/admin/roles/index.vue")
            },
            {
                path: "settings",
                name: "admin-settings",
                component: () => import ("./pages/admin/settings/index.vue")
            }
        ]
    }
];

const router = createRouter({
    history : createWebHistory(),
    routes
});


export default router;
