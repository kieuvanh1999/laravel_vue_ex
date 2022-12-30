import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router.js'
import axios from 'axios';
import { 
    Checkbox,
    Input,
    Select,
    Avatar,
    Table,
    Card,
    List,
    Menu,
    Button,
    message,
    Drawer
 } from 'ant-design-vue';
import App from './App.vue'

import 'ant-design-vue/dist/antd.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap-utilities.min.css';

import '../scss/style.css';

window.axios = axios;
const app = createApp(App)
app.use(createPinia());
app.use(router);
app.use(Avatar);
app.use(Checkbox);
app.use(Select);
app.use(Button);
app.use(Drawer);
app.use(Input)
app.use(List);
app.use(Menu);
app.use(Card);
app.use(Table);

app.mount("#app");

app.config.globalProperties.$message = message;
