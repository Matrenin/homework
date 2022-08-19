Vue.component("cart", {
    data() {
        return {
            cartItems: [],
        }
    },
    methods: {
        addProduct(product) {
            let find = this.cartItems.find(el => el.id === product.id);
            if (find) {
                find.quantity++;
            } else {
                let prod = Object.assign({quantity: 1}, product);
                if (product.quantity === 0) {
                    return;
                }
                this.cartItems.push(prod);
            }
        },
        remove(item) {
            if (item.quantity > 1) {
                item.quantity--;
            } else {
                this.cartItems.splice(this.cartItems.indexOf(item), 1);
            }
        },
    },
    computed: {
        getSumPrice() {
            return this.cartItems.reduce((acc, el) => acc + el.price * el.quantity, 0);
        },
    },
    template: `
        <div class="basket__box">
            <cartItem v-for="item of cartItems" :key="item.id" :item="item"></cartItem>
            <button v-if="cartItems.length">Заказать <span>{{ getSumPrice }} p</span></button>
            <p v-if="!cartItems.length">Корзина пока пуста</p>
        </div>
    `
});

Vue.component("cartItem", {
    props: ["item"],
    template: `
    <div class="basket__item">
        <div class="basket__desc">
            <p>{{ item.title }}</p>
            <span>{{ item.price * item.quantity }}</span>
        </div>
        <div class="basket__count">
            <button @click="$root.$refs.cart.remove(item)">-</button>
            <span>{{ item.quantity }}</span>
            <button @click="$root.$refs.cart.addProduct(item)">+</button>
        </div>
    </div>
    `
});