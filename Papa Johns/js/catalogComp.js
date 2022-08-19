Vue.component("products", {
    data() {
        return {
            productsObj: [
                {
                    id: 1, title: "4 сыра", price: 490, img: "img/4сыра.jpg", quantity: 1, desc: "Соус Карбонара, Сыр Роккфорти, Сыр Чеддер (тёртый), Сыр Моцарелла, Чесночный соус с сыром Пармезан", showModal: false,
                },
                {
                    id: 2, title: "Альфредо", price: 490, img: "img/альфредо.jpg", quantity: 1, desc: "Соус Карбонара, Сыр Роккфорти, Сыр Чеддер (тёртый), Сыр Моцарелла, Чесночный соус с сыром Пармезан", showModal: false
                },
                {
                    id: 3, title: "Гавайская", price: 490, img: "img/Гавайская.jpg", quantity: 1, desc: "Соус Карбонара, Сыр Роккфорти, Сыр Чеддер (тёртый), Сыр Моцарелла, Чесночный соус с сыром Пармезан", showModal: false
                },
                {
                    id: 4, title: "Греческая", price: 490, img: "img/греческая.jpg", quantity: 1, desc: "Соус Карбонара, Сыр Роккфорти, Сыр Чеддер (тёртый), Сыр Моцарелла, Чесночный соус с сыром Пармезан", showModal: false
                },
                {
                    id: 5, title: "Карбонара", price: 490, img: "img/карбонара.jpg", quantity: 1, desc: "Соус Карбонара, Сыр Роккфорти, Сыр Чеддер (тёртый), Сыр Моцарелла, Чесночный соус с сыром Пармезан", showModal: false
                },
                {
                    id: 6, title: "Мясная", price: 490, img: "img/мясная.jpg", quantity: 1, desc: "Соус Карбонара, Сыр Роккфорти, Сыр Чеддер (тёртый), Сыр Моцарелла, Чесночный соус с сыром Пармезан", showModal: false
                },
                {
                    id: 7, title: "Пепперони", price: 490, img: "img/пепперони.jpg", quantity: 1, desc: "Соус Карбонара, Сыр Роккфорти, Сыр Чеддер (тёртый), Сыр Моцарелла, Чесночный соус с сыром Пармезан", showModal: false
                },
                {
                    id: 8, title: "Супер папа", price: 490, img: "img/суперПапа.jpg", quantity: 1, desc: "Соус Карбонара, Сыр Роккфорти, Сыр Чеддер (тёртый), Сыр Моцарелла, Чесночный соус с сыром Пармезан", showModal: false
                },
            ],
            filtered: [],
        }
    },
    mounted() {
        for (let el of this.productsObj) {
            this.filtered.push(el);
        }
    },
    template: `
        <div class="content__box">
            <product v-for="product of filtered" :key="product.id" :product="product"></product>
        </div>
    `
});

Vue.component("product", {
    props: ["product"],
    data() {
        return {
            additives: [
                {id: "cheeseId", title: "Сыр", price: 40},
                {id: "baconId", title: "Бекон", price: 45},
                {id: "mushroomId", title: "Грибы", price: 30},
                {id: "onionId", title: "Лук", price: 20},
            ],
            addChecked: [],
        }
    },
    template: `
    <div class="content__item" @click.stop="product.showModal = true">
        <div class="content__item-img">
            <img :src="product.img" alt="four-cheese" width="260">
        </div>
        <div class="content__desc">
            <p>{{ product.title }}</p>
            <div class="content__desc-result">
                <p>{{ product.price }} p</p>
                <button>В корзину</button>
            </div>
        </div>

        <div class="modal" v-if="product.showModal" @click.stop="product.showModal = false">
            <div class="modal__box" @click.stop="product.showModal = true">
                <img :src="product.img" alt="four cheese" width="300">
                <div class="modal__desc">
                    <h4>{{ product.title }}</h4>
                    <p>{{ product.desc }}</p>
                    <div class="modal__add">
                        <h5>Ингредиенты</h5>
                        <div class="modal__add-item" v-for="add of additives" :key="add.id">
                            <input v-modal="addChecked" :value="add.price" type="checkbox" :id="add.id">
                            <label :for="add.id">{{ add.title }}</label>
                            <span>+ {{ add.price }} p</span>
                        </div>
                    </div>
                    <div class="modal__result">
                        <div class="modal__result-box">
                            <button @click="product.quantity--">-</button>
                            <span>{{ product.quantity }}</span>
                            <button @click="product.quantity++">+</button>
                        </div>
                        <button @click="$root.$refs.cart.addProduct(product)">Добавить <span>{{ product.price * product.quantity }}</span></button>
                    </div>
                </div>
            </div>
        </div>

    </div>
    `
});