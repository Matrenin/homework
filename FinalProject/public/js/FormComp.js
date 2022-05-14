Vue.component("filter-el", {
    data() {
        return {
            userSearch: "",
        }
    },
    template: `
        <form action="#" @submit.prevent="$root.$refs.products.filter(userSearch)">
            <input type="text" autocomplete="off" v-model="userSearch">
            <button type="submit">
                <img src="img/search.png" alt="search" height="24">
            </button>
        </form>
    `
});