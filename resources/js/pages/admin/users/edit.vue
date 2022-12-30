<template>
    <form @submit.prevent="updateUsers()">
        <a-card title="Cập nhật tài khoản" class="w-100 ">
            <div class="row">
                <div class="col-12 col-sm-4">
                    <div class="col-12 d-flex justify-content-center mb-3">
                        <a-avatar shape="square" :size="200">
                            <template #icon>
                                <img src="../../../assets/avatar.jpg" alt="avatar">
                            </template>
                        </a-avatar>
                    </div>
                    <div class="col-12 d-flex justify-content-center">
                        <a-button type="primary">Thay đổi avatar</a-button>
                    </div>
                </div>
                <div class="col-12 col-sm-8">
                    <div class="row mb-3">
                        <div class="col-12 col-sm-3 text-start text-sm-end">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.status_id
                                }">Tình trạng:
                                </span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-5">
                            <a-select ref="select" show-search placeholder="Tình Trạng" style="width: 100%"
                                :options="users_status" :filter-option="filterOption" allow-clear
                                v-model:value="status_id" :class="{ 'select-danger': errors.status_id }"></a-select>
                            <span v-if="errors.status_id" id="errors" :class="{ 'text-danger': errors.status_id }">
                                {{ errors.status_id[0] }}
                            </span>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <div class="col-12 col-sm-3 text-start text-sm-end">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.username
                                }">Tên tài khoản:</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-5">
                            <a-input placeholder="Tên tài khoản" allow-clear v-model:value="username"
                                :class="{ 'input-danger': errors.username }" />
                            <span v-if="errors.username" id="errors" :class="{ 'text-danger': errors.username }">
                                {{ errors.username[0] }}
                            </span>
                        </div>

                    </div>

                    <div class="row mb-3">
                        <div class="col-12 col-sm-3 text-start text-sm-end">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                        'text-danger': errors.name
                                    }">Họ và tên:</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-5">
                            <a-input placeholder="Họ và tên" allow-clear v-model:value="name"
                                :class="{ 'input-danger': errors.name }" />
                            <span v-if="errors.name" id="errors" :class="{ 'text-danger': errors.name }">
                                {{ errors.name[0] }}
                            </span>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <div class="col-12 col-sm-3 text-start text-sm-end">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                        'text-danger': errors.email
                                    }">Email:</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-5">
                            <a-input placeholder="Email" allow-clear v-model:value="email"
                                :class="{ 'select-danger': errors.email }" />
                            <span v-if="errors.email" id="errors" :class="{ 'text-danger': errors.email }">
                                {{ errors.email[0] }}
                            </span>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <div class="col-12 col-sm-3 text-start text-sm-end">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.department_id
                                }">Phòng ban:</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-5">
                            <a-select ref="select" show-search placeholder="Phòng ban" style="width: 100%"
                                :options="departments" :filter-option="filterOption" allow-clear
                                v-model:value="department_id" :class="{ 'select-danger': errors.department_id }">
                            </a-select>
                            <span v-if="errors.department_id" id="errors" :class="{ 'text-danger': errors.department_id }">
                                {{ errors.department_id[0] }}
                            </span>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-12 col-sm-3 text-start text-sm-end">

                        </div>
                        <div class="col-12 col-sm-5">
                            <a-checkbox v-model:checked="change_password">Đổi mật khẩu</a-checkbox>
                        </div>
                    </div>
                    <div class="row mb-3" v-if="change_password == true">
                        <div class="col-12 col-sm-3 text-start text-sm-end">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.password
                                }">Mật khẩu:</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-5">
                            <a-input-password placeholder="Mật khẩu" allow-clear v-model:value="password"
                                :class="{ 'select-danger': errors.password }" />
                            <span v-if="errors.password" id="errors" :class="{ 'text-danger': errors.password }">
                                {{ errors.password[0] }}
                            </span>
                        </div>
                    </div>

                    <div class="row mb-3" v-if="change_password == true">
                        <div class="col-12 col-sm-3 text-start text-sm-end">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.password
                                }">Xác nhận mật khẩu:</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-5">
                            <a-input-password placeholder="Xác nhận mật khẩu" allow-clear
                                v-model:value="password_confirmation" :class="{ 'select-danger': errors.password }" />
                            <span v-if="errors.password" id="errors" :class="{ 'text-danger': errors.password }">
                                {{ errors.password[0] }}
                            </span>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <div class="col-12 col-sm-3 text-start text-sm-end">
                            <label>
                                <span>Lần đăng nhập gần đây:</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-5">
                            <span>
                                {{ login_at }}
                            </span>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <div class="col-12 col-sm-3 text-start text-sm-end">
                            <label>
                                <span>Lần đổi mật khẩu gần đây:</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-5">
                            <span>
                                {{ change_password_at }}
                            </span>
                        </div>
                    </div>
                </div>


            </div>
            <div class="row">
                <div class="col-12 d-sm-flex d-grid justify-content-sm-end mx-auto">
                    <a-button class="me-0 me-sm-2 mb-2" type="danger">
                        <span><router-link :to="{ name: 'admin-users' }" class="text-white">Hủy</router-link></span>
                    </a-button>
                    <a-button type="primary" html-type="submit">
                        <span>Lưu</span>
                    </a-button>
                </div>
            </div>
        </a-card>
    </form>
</template>
<script>
import axios from 'axios';
import { defineComponent, ref, reactive, toRefs } from 'vue';
import { useMenu } from '../../../stores/use-menu';
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router';
import { message } from 'ant-design-vue';

export default defineComponent({
    setup() {
        useMenu().onSelectedKeys(["admin-users"]);

        const router = useRouter();
        const route = useRoute();
        const users_status = ref([]);
        const departments = ref([]);
        const users = reactive({
            username: "",
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
            department_id: [],
            status_id: [],
            change_password: false,
            login_at: "",
            change_password_at: ""
        })

        const errors = ref({});

        const getUsersEdit = () => {
            axios.get(`http://127.0.0.1:8000/api/users/${route.params.id}/edit`)
                .then((response) => {
                    console.log(response)
                    users.username = response.data.users.username;
                    users.name = response.data.users.name;
                    users.email = response.data.users.email;
                    users.department_id = response.data.users.department_id;
                    users.status_id = response.data.users.status_id;

                    response.data.users.login_at
                        ? (users.login_at = response.data.users.login_at)
                        : (users.login_at = "chưa có lượt đăng nhập !");
                    response.data.users.change_password_at
                        ? (users.change_password_at = response.data.users.change_password_at)
                        : (users.change_password_at = "chưa có lượt thay đổi !");

                    users_status.value = response.data.users_status;
                    departments.value = response.data.departments;
                })
                .catch((error) => {
                    console.log(error)
                })
        
        }

        const updateUsers = () => {
            axios.put(`http://127.0.0.1:8000/api/users/${route.params.id}`, users)
            .then((response) => {
                console.log(response)
                if(response.status === 200){  
                    message.success('Cập nhật tài khoản thành công');
                    router.push({name: "admin-users"})
                }
            })
            .catch((error) => {
                    errors.value = error.response.data.errors;
                })
                
        }

        const filterOption = (input, option) => {
            return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        };
       
        getUsersEdit();
        return {
            users_status,
            departments,
            errors,
            ...toRefs(users),
            filterOption,
            updateUsers
        }
    }
})
</script>
