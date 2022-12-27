<template>
    page quản lý roles
</template>
<script>
    import { useMenu } from '../../../stores/use-menu.js';
    
    export default {
        setup() {
            useMenu().onSelectedKeys(["admin-role"]);
        }
    }
</script>
