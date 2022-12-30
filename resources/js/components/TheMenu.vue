<template>
    <a-menu
        v-model:openKeys="openKeys"
        v-model:selectedKeys="selectedKeys"
        mode="inline"
        >
        <a-menu-item key="admin-users">
            <router-link :to="{ name: 'admin-users' }">
                <div class="d-flex">
                    <div style="margin-top: -3px;">
                        <UserOutlined class="me-1"/>
                    </div>
                     <div> Quản Lý Người dùng</div>
                </div>
            </router-link>
        </a-menu-item>
        <a-menu-item key="admin-role">
            <router-link :to="{ name: 'admin-role' }">
                <div class="d-flex">
                    <div style="margin-top: -3px;">
                        <TagOutlined class="me-1"/>
                    </div>
                     <div>Phân Quyền</div>
                </div>
            </router-link>
        </a-menu-item>
        <a-menu-item key="admin-settings">
            <router-link :to="{ name: 'admin-settings' }">
                <div class="d-flex">
                    <div style="margin-top: -3px;">
                        <SettingOutlined class="me-1"/>
                    </div>
                     <div>Cài Đặt</div>
                </div>
            </router-link>
        </a-menu-item>
    </a-menu>
</template>
<script>
    import { UserOutlined,TagOutlined,SettingOutlined } from '@ant-design/icons-vue';
    import { defineComponent } from 'vue';
    import { storeToRefs } from 'pinia';
    import { useMenu } from '../stores/use-menu.js';

    export default defineComponent({
        components: {
        UserOutlined,
        TagOutlined,
        SettingOutlined,
    },
    setup() {
        const store = useMenu(); 

        return {
        ...storeToRefs(store),
        };
    },
    });
</script>