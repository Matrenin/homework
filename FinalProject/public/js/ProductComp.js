Vue.component("products",{
    data() {
        return {
            imgCatalog: "https://via.placeholder.com/200x150",
            products: [],
            filtered: [],
            catalogUrl: "/catalogData.json",
        }
    },
    methods: {
        filter(search) {
            let regexp = new RegExp(search, "i");
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        },
    },
    mounted() {
        this.$parent.getJson(`${api + this.catalogUrl}`)
            .then(data => {
                for(let el of data) {
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
    },
    template: `
        <div class="products">
            <product v-for="item of filtered" :key="item.id_product" class="product" :product="item" :img="imgCatalog"></product>
        </div>
    `
});


Vue.component("product", {
    props: ["product", "img"],
    template: `
        <div class="product">
            <img :src="img" alt="some img">
            <div class="desc">
                <p class="product-name">{{ product.product_name }}</p>
                <p class="product-price">{{ product.price }} p</p>
                <button @click="$root.$refs.cart.addProduct(product)" class="buy-btn">Купить</button>
            </div>
        </div>
    `
});