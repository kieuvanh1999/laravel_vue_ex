<template>
     <p>How To Install Vue 3 in Laravel 9 with Vite - TechvBlog</p>
        <router-link to="/">Home</router-link> -
        <RouterLink to="/login">Login</RouterLink> -
        <RouterLink :to="{ name: 'admin-users-create' }">Register</RouterLink> -
        <router-link to="/apicalling">Api Calling</router-link> -
        <router-link :to="{ name: 'admin-users' }">Admin Page</router-link>
</template>