<template>
    <form @submit.prevent="createUser()">
        <a-card title="tạo mới tài khoản" class="w-100 ">
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
                            <a-select ref="select" 
                                show-search
                                placeholder="Tình Trạng"
                                style="width: 100%"
                                :options="users_status"
                                :filter-option="filterOption"
                                allow-clear
                                v-model:value="status_id"
                                :class="{ 'select-danger': errors.status_id }"
                            ></a-select>
                            <span v-if="
                                errors.status_id" 
                                id="errors" 
                                :class="{ 'text-danger': errors.status_id }">
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
                            <a-input 
                             placeholder="Tên tài khoản" 
                             allow-clear
                             v-model:value="username"
                             :class="{ 'input-danger': errors.username }"
                             />
                             <span v-if="
                                errors.username" 
                                id="errors" 
                                :class="{ 'text-danger': errors.username }">
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
                            <a-input 
                             placeholder="Họ và tên" 
                             allow-clear 
                             v-model:value="name"
                             :class="{ 'input-danger': errors.name }"
                             />
                             <span v-if="
                                errors.name" 
                                id="errors" 
                                :class="{ 'text-danger': errors.name }">
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
                            <a-input 
                             placeholder="Email" 
                             allow-clear 
                             v-model:value="email"
                             :class="{ 'select-danger': errors.email }"
                             />
                             <span v-if="
                                errors.email" 
                                id="errors" 
                                :class="{ 'text-danger': errors.email }">
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
                            <a-select ref="select" 
                                show-search
                                placeholder="Phòng ban"
                                style="width: 100%"
                                :options="departments"
                                :filter-option="filterOption"
                                allow-clear
                                v-model:value="department_id"
                                :class="{ 'select-danger': errors.department_id }"
                            >
                        </a-select>
                        <span v-if="
                                errors.department_id" 
                                id="errors" 
                                :class="{ 'text-danger': errors.department_id }">
                                {{ errors.department_id[0] }}
                        </span>
                        </div>
                    </div>
    
                    <div class="row mb-3">
                        <div class="col-12 col-sm-3 text-start text-sm-end">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.password
                                }">Mật khẩu:</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-5">
                            <a-input-password
                             placeholder="Mật khẩu" 
                             allow-clear 
                             v-model:value="password"
                             :class="{ 'select-danger': errors.password }"
                             />
                             <span v-if="
                                errors.password" 
                                id="errors" 
                                :class="{ 'text-danger': errors.password }">
                                {{ errors.password[0] }}
                        </span>
                        </div>
                    </div>
    
                    <div class="row mb-3">
                        <div class="col-12 col-sm-3 text-start text-sm-end">
                            <label>
                                <span class="text-danger me-1">*</span>
                                <span :class="{
                                    'text-danger': errors.password
                                }">Xác nhận mật khẩu:</span>
                            </label>
                        </div>
                        <div class="col-12 col-sm-5">
                            <a-input-password
                             placeholder="Xác nhận mật khẩu" 
                             allow-clear 
                             v-model:value="password_confirmation"
                             :class="{ 'select-danger': errors.password }"
                             />
                             <span v-if="
                                errors.password" 
                                id="errors" 
                                :class="{ 'text-danger': errors.password }">
                                {{ errors.password[0] }}
                            </span>
                        </div>
                    </div>
                </div>
    
            </div>
            <div class="row">
                <div class="col-12 d-sm-flex d-grid justify-content-sm-end mx-auto">
                    <a-button class="me-0 me-sm-2 mb-2" type="danger">
                        <span><router-link :to="{ name: 'admin-users' }"  class="text-white">Hủy</router-link></span>
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
import { message } from 'ant-design-vue';
import { useRouter } from 'vue-router'

export default defineComponent({
    setup() {
        useMenu().onSelectedKeys(["admin-users"]);

        const router = useRouter();
        const users_status = ref([]);
        const departments = ref([]);
        const users = reactive({
            username: "",
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
            department_id: [],
            status_id: []
        })
        const errors = ref({});

        const getUsersCreate = () => {
            axios.get("http://127.0.0.1:8000/api/users/create")
            .then((response) => {
                users_status.value = response.data.users_status;
                departments.value = response.data.departments;

                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
        };

        const filterOption = ( input, option ) => {
            return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        };

        const createUser = () => {
            axios.post("http://127.0.0.1:8000/api/users", users)
            .then((response) => {
                if(response){  
                    message.success('Tạo tài khoản thành công');
                    router.push({name: "admin-users"})
                }
                console.log(response)
            })
            .catch((error) => {
                errors.value = error.response.data.errors;
                console.log(error)
            })
           
        }
        getUsersCreate();

        return {
            users_status,
            departments,
            errors,
            ...toRefs(users),
            filterOption,
            createUser
        }
    }
})
</script>
<style>
    #errors{
        font-style: italic;

    }
    .select-danger{
        border: 1px solid red !important;
        border-radius: 3px;
    }
    .input-danger{
        border: 1px solid red !important;
        border-radius: 3px;
    }
</style>