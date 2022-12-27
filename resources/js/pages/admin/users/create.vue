<template>
    <a-card title="tạo mới tài khoản" class="w-100 ">
        <div class="row">
            <div class="col-12 col-sm-4">
                <div class="col-12 d-flex justify-content-center">
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
                            <span>Tình trạng:</span>
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
                        ></a-select>
                    </div>
                </div>
                
                <div class="row mb-3">
                    <div class="col-12 col-sm-3 text-start text-sm-end">
                        <label>
                            <span class="text-danger me-1">*</span>
                            <span>Tên tài khoản:</span>
                        </label>
                    </div>
                    <div class="col-12 col-sm-5">
                        <a-input 
                         placeholder="Tên tài khoản" 
                         allow-clear />
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col-12 col-sm-3 text-start text-sm-end">
                        <label>
                            <span class="text-danger me-1">*</span>
                            <span>Họ và tên:</span>
                        </label>
                    </div>
                    <div class="col-12 col-sm-5">
                        <a-input 
                         placeholder="Họ và tên" 
                         allow-clear />
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col-12 col-sm-3 text-start text-sm-end">
                        <label>
                            <span class="text-danger me-1">*</span>
                            <span>Email:</span>
                        </label>
                    </div>
                    <div class="col-12 col-sm-5">
                        <a-input 
                         placeholder="Email" 
                         allow-clear />
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col-12 col-sm-3 text-start text-sm-end">
                        <label>
                            <span class="text-danger me-1">*</span>
                            <span>Phòng ban:</span>
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
                        ></a-select>
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col-12 col-sm-3 text-start text-sm-end">
                        <label>
                            <span class="text-danger me-1">*</span>
                            <span>Mật khẩu:</span>
                        </label>
                    </div>
                    <div class="col-12 col-sm-5">
                        <a-input-password
                         placeholder="Mật khẩu" 
                         allow-clear />
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col-12 col-sm-3 text-start text-sm-end">
                        <label>
                            <span class="text-danger me-1">*</span>
                            <span>Xác nhận mật khẩu:</span>
                        </label>
                    </div>
                    <div class="col-12 col-sm-5">
                        <a-input-password
                         placeholder="Xác nhận mật khẩu" 
                         allow-clear />
                    </div>
                </div>
            </div>

        </div>
        <div class="row">
            <div class="col-12 d-sm-flex d-grid justify-content-sm-end mx-auto">
                <a-button class="me-0 me-sm-2 mb-2" type="danger">
                    <span><router-link :to="{ name: 'admin-users' }"  class="text-white">Hủy</router-link></span>
                </a-button>
                <a-button type="primary">
                    <span>Lưu</span>
                </a-button>
            </div>
        </div>
    </a-card>
</template>
<script>
import inputProps from 'ant-design-vue/lib/input/inputProps';
import axios from 'axios';
import { defineComponent, ref } from 'vue';
import { useMenu } from '../../../stores/use-menu';

export default defineComponent({
    setup() {
        useMenu().onSelectedKeys(["admin-users"]);

        const users_status = ref([]);
        const departments = ref([]);

        const getUserscreate = () => {
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

        getUserscreate();

        return {
            users_status,
            departments,
            filterOption
        }
    }
})
</script>