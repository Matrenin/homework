Vue.component("cart", {
    data() {
        return {
            showCart: false,
            cartUrl: "/getBasket.json",
            imgCart: "https://via.placeholder.com/50x100",
            cartItems: [],
        }
    },
    methods: {
        addProduct(product) {
            this.$parent.getJson(`${api}/addToBasket.json`)
                .then(data => {
                    if (data.result === 1) {
                        let find = this.cartItems.find(el => el.id_product === product.id_product);
                        if (find) {
                            find.quantity++;
                        } else {
                            let prod = Object.assign({quantity: 1}, product);
                            this.cartItems.push(prod);
                        }
                    } else {
                        console.log("Error");
                    }
                });
        },
        remove(item) {
            this.$parent.getJson(`${api}/deleteFromBasket.json`)
                .then(data => {
                    if (data.result === 1) {
                        if (item.quantity > 1) {
                            item.quantity--;
                        } else {
                            this.cartItems.splice(this.cartItems.indexOf(item), 1);
                        }
                    } else {
                        console.log("Error");
                    }
                });
        },
    },
    computed: {
        getSumQuantity() {
            let sumQuantity = this.cartItems.reduce((acc, el) => acc + el.quantity, 0);
            return sumQuantity;
        },
    },
    mounted() {
        this.$parent.getJson(`${api +this.cartUrl}`)
            .then(data => {
                for (let el of data.contents) {
                    this.cartItems.push(el);
                }
            });
    },
    template: `
        <div>
            <button class="cart__btn" @click="showCart = !showCart">Корзина</button>
            <span v-if="cartItems.length !== 0" class="cart-count">{{ getSumQuantity }}</span>
            <div class="cart__box" :class="{hidden: !showCart}">
                <p class="cart-empty" v-if="!cartItems.length">Корзина пуста</p>
                <cart-item class="cart-item"
                    v-for="item of cartItems"
                    :key="item.id_product"
                    :cartItem="item"
                    :img="imgCart"
                    @remove="remove"
                ></cart-item>
                <a v-if="cartItems.length" href="https://www.youtube.com/">Подробная информация о товарах</a>
            </div>
        </div>
    `
});

Vue.component("cart-item", {
    props: ["cartItem", "img"],
    template: `
        <div class="cart-item">
            <div class="cart-left">
                <img :src="img" alt="some img">
                <div class="cart__desc">
                    <p class="cart__desc-name">{{ cartItem.product_name }}</p>
                    <p class="cart__desc-quantity">{{ cartItem.quantity }}</p>
                    <p class="cart__desc-price">{{ cartItem.price }} <span>цена за единицу</span></p>
                </div>
            </div>
            <div class="cart__right">
                <p class="cart__right-price">{{ cartItem.price * cartItem.quantity }} p</p>
                <button class="cart__right-btn" @click="$emit('remove', cartItem)">&times;</button>
            </div>
        </div>
    `
});