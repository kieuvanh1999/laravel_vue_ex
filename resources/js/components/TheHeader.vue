<template>
    <div class="container-fuild">
        <div class="row" style="background-color: #0c713d; padding: 1rem;">
            <div class="col-1 d-flex d-sm-none align-items-center justify-content-center w-10" >
                <span @click="showDrawer()"><MenuOutlined class="text-light"/></span>
            </div>
            <div class="col-10 col-sm-9 d-flex align-items-center justify-content-sm-start" >
                <img src="../assets/logo.png" alt="Logo" height="32" width="34" class="ms-3 me-3">
                <span class="d-none d-sm-flex text-light">Quản Trị</span>
            </div>
            <div class="col-sm-3 d-none d-sm-flex align-item-center justify-content-sm-end">
                <span class="text-light">Admin</span>
            </div>
            <div class="col-1 d-flex d-sm-none align-items-center justify-content-center" >
                <span @click="showDrawerUser()"><MehOutlined class="text-light"/></span>
            </div>
        </div>
        <a-drawer
            v-model:visible="visible"
            title="Danh Mục"
            placement="left"
            >
            <TheMenu />
        </a-drawer>

        <a-drawer
            v-model:visible="visible_user"
            title="Danh Mục"
            placement="right"
            >
            <p><router-link to="/admin/users">User</router-link></p>
            <p><router-link to="/admin/roles">role</router-link></p>
            <p><router-link to="/admin/settings">settings</router-link></p>
        </a-drawer>
    </div>

</template>
<script>
    import { MenuOutlined, MehOutlined } from '@ant-design/icons-vue';
    import { defineComponent, ref } from 'vue';
    import TheMenu from './TheMenu.vue';
    export default defineComponent({
    components: { 
        TheMenu,
        MenuOutlined,
        MehOutlined

    },
    setup() {
        const visible = ref(false);
        const visible_user = ref(false);
        const showDrawer = () => {
            visible.value = true;
        };
        const showDrawerUser = () => {
            visible_user.value = true;
        };
        return {
            visible,
            visible_user,
            showDrawer,
            showDrawerUser
        };
    },

});
</script>
<style>
</style>