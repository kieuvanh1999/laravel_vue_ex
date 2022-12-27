<template>
    <a-card title="Tài Khoản" style="width: 100%">
        <div class="row">
            <div class="col-12">
                <a-table :dataSource="users" :columns="columns">
                    <template #bodyCell="{ column, index }">
                        <template v-if="column.key === 'index'">
                            <span>
                                {{ index + 1 }}
                            </span>
                        </template>
                    </template>
                </a-table>
            </div>
        </div>
    </a-card>
</template>
<script>
import { defineComponent, ref } from 'vue';
import { useMenu } from '../../../stores/use-menu';

export default defineComponent({
    setup() {
        useMenu().onSelectedKeys(["admin-users"]);

        const users = ref([]);

        const columns = [
            {
                title: '#',
                key: 'index',
            },
            {
                title: 'Ảnh Đại Diện',
                key: 'avatar',
            },
            {
                title: 'Tài Khoản',
                dataIndex: 'username',
                key: 'username',
            },
            {
                title: 'Họ Tên',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: 'Phòng Ban',
                dataIndex: 'departments',
                key: 'departments',
            },
            {
                title: 'Vai Trò',
                dataIndex: 'roles',
                key: 'roles',
            },
            {
                title: 'Trạng Thái',
                dataIndex: 'status',
                key: 'status',
            },
            {
                title: 'Thao Tác',
                key: 'action',
            },
        ]

        const getUsers = () => {
            // Tạo một request để truy xuất người dùng ứng với ID cho sẵn:
            axios
                .get("http://127.0.0.1:8000/api/users")
                .then(function (response) {
                    users.value = response.data;
                    // xử trí khi thành công
                    console.log(response);
                })
                .catch(function (error) {
                    // xử trí khi bị lỗi
                    console.log(error);
                })
        };
        getUsers();
        return {
            users,
            columns
        }
    }
})
</script>
