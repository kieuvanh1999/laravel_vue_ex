<template>
<Navigation />
<div class="api-calling container mt-5">
       <h1>Create Product</h1>
       <transition name="fade">
            <div class="alert alert-danger alert-dismissible" role="alert" v-if="error">
                <b>{{ error.message }}</b>
                <ul>
                    <li v-for="(errorName, index) in error.errors" :key="index">
                        {{ errorName[0] }}
                    </li>
                </ul>
                <button type="button" class="close" @click="error = null">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </transition>
       <div class="form-group">
           <label>Name</label>
           <input v-model="product.name" type="text" class="form-control" placeholder="Name...">
       </div>
       <div class="form-group">
           <label>Price</label>
           <input v-model="product.price" type="text" class="form-control" placeholder="Price...">
       </div><br>
       <button class="btn btn-primary" @click="createProduct()">Create</button>

       <hr>
       <h1>List Products</h1>
       <table class="table">
           <thead>
               <tr>
                   <th scope="col">ID</th>
                   <th scope="col">Name</th>
                   <th scope="col">Price</th>
                   <th scope="col">Actions</th>
               </tr>
           </thead>
           <transition-group name="slide-fade" tag="tbody">
                <tr v-for="(product, index) in listProducts.data" :key="product.id">
                    <th scope="row">{{ product.id }}</th>
                    <td v-if="!product.isEdit">
                        {{ product.name }}
                    </td>
                    <td v-else>
                        <input type="text" v-model="selectedProduct.name" class="form-control">
                    </td>
                    <td v-if="!product.isEdit">
                        {{ product.price }}
                    </td>
                    <td v-else>
                        <input type="text" v-model="selectedProduct.price" class="form-control">
                    </td>
                    <td v-if="!product.isEdit">
                        <button class="btn btn-primary" @click="selecteProduct(product)">Edit</button> | 
                        <button class="btn btn-danger" @click="deleteProduct(product, index)">Delete</button>
                    </td>
                    <td v-else>
                        <button class="btn btn-primary" @click="updateProduct(index)">Save</button>
                        <button class="btn btn-danger" @click="product.isEdit = false">Cancel</button>
                    </td>
                </tr>
           </transition-group>
       </table>
       <div>
            {{ listProducts.from }} - {{ listProducts.to }} of {{ listProducts.total }}
        </div>
        <ul class="pagination">
            <li
                class="page-item"
                :class="{ 'disabled': listProducts.prev_page_url === null }"
                @click="listProducts.prev_page_url && getListProducts(listProducts.current_page - 1)"
            >
                <a class="page-link" href="#">Previous</a>
            </li>
            <li class="page-item" v-if="listProducts.prev_page_url" @click="getListProducts(listProducts.current_page - 1)">
                <a class="page-link" href="#">{{ listProducts.current_page - 1 }}</a>
            </li>
            <li class="page-item active">
                <a class="page-link" href="#">{{ listProducts.current_page }}</a>
            </li>
            <li class="page-item" v-if="listProducts.next_page_url" @click="getListProducts(listProducts.current_page + 1)">
                <a class="page-link" href="#">{{ listProducts.current_page + 1 }}</a>
            </li>
            <li
                class="page-item"
                :class="{ 'disabled': listProducts.next_page_url === null }"
                @click="listProducts.next_page_url && getListProducts(listProducts.current_page + 1)"
            >
                <a class="page-link" href="#">Next</a>
            </li>
        </ul>
   </div>
</template>
<script>
import Navigation from '../components/navigation.vue'

export default {
    data() {
        return {
            product: {
                name: "",
                price: 0
            },
            listProducts: {},
            error: null,
            selectedProduct: null
        };
    },
    created() {
        this.getListProducts();
    },
    methods: {
        async createProduct() {
            try {
                this.error = null;
                const response = await axios.post("/products", {
                    name: this.product.name,
                    price: this.product.price
                });
                this.listProducts.data.unshift({
                    ...response.data.product,
                    isEdit: false
                });
                // reset gi?? tr??? form v??? ban ?????u
                this.product = {
                    name: "",
                    price: 0
                };
            }
            catch (error) {
                this.error = error.response.data;
            }
        },
        async getListProducts(page = 1) {
            try {
                const response = await axios.get("/products?page=" + page);
                this.listProducts = response.data;
                this.listProducts.data.forEach(item => {
                    Vue.set(item, "isEdit", false);
                });
            }
            catch (error) {
                this.error = error.response.data;
            }
        },
        selecteProduct(product) {
            product.isEdit = true;
            this.selectedProduct = { ...product };
        },
        async updateProduct(index) {
            try {
                const response = await axios.put("/products/" + this.selectedProduct.id, {
                    name: this.selectedProduct.name,
                    price: this.selectedProduct.price
                });
                this.listProducts.data[index].name = response.data.product.name;
                this.listProducts.data[index].price = response.data.product.price;
                this.listProducts.data[index].isEdit = false;
            }
            catch (error) {
                this.error = error.response.data;
            }
        },
        async deleteProduct(product, index) {
            try {
                await axios.delete("/products/" + product.id);
                this.listProducts.data.splice(index, 1);
            }
            catch (error) {
                this.error = error.response.data;
            }
        }
    },
    components: { Navigation }
}
</script>   