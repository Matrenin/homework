let api = "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

const app = new Vue({
    el: "#app",
    data: {
        userSearch: "",
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(response => response.json())
                .catch(err => console.log(err));
        },
    },
    beforeCreate() {
        console.log("beforeCreate");
    },
    created(){
        console.log("created");
    },
    beforeMount() {
        console.log("beforeMount");
    },
    mounted() {
        console.log(this);
    },
});