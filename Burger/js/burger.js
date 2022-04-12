class Burger {
    constructor(price, calories) {
        this.price = price;
        this.calories = calories;
        this.clickEls();
        this.addText(".span-price", this.price);
        this.addText(".span-calories", this.calories);
    }

    clickEls() {
        document.querySelector(".burger__description").addEventListener("click", event => {
            if (event.target.tagName !== "P") {
                return;
            }
            event.target.classList.toggle("border-active");
            if (event.target.classList.contains("border-active")) {
                this.price += +event.target.dataset.price;
                this.addText(".span-price", this.price);
                this.calories += +event.target.dataset.calories;
                this.addText(".span-calories", this.calories);
            } else {
                this.price -= +event.target.dataset.price;
                this.addText(".span-price", this.price);
                this.calories -= +event.target.dataset.calories;
                this.addText(".span-calories", this.calories);
            }
        });
    }

    addText(id, obj) {
        document.querySelector(id).textContent = obj;
    }
}

let burger = new Burger(400, 300);
