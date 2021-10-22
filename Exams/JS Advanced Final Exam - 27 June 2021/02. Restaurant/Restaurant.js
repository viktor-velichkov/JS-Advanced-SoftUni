class Restaurant {

    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.stockProducts = {};
        this.history = [];
        this.menu = {};
    }

    loadProducts(products) {

        const result = [];

        products.forEach(product => {
            const tokens = product.split(' ');
            let name = tokens[0];
            let quantity = Number(tokens[1]);
            let totalPrice = Number(tokens[2]);

            let actionMessage = '';

            if (totalPrice <= this.budgetMoney) {

                if (this.stockProducts[name] == undefined) {
                    this.stockProducts[name] = 0;
                }

                this.stockProducts[name] += quantity;
                this.budgetMoney -= totalPrice;

                actionMessage = `Successfully loaded ${quantity} ${name}`;
            }
            else {
                actionMessage = `There was not enough money to load ${quantity} ${name}`
            }

            this.history.push(actionMessage);
            result.push(actionMessage);
        });

        return result.join('\n');
    }

    addToMenu(meal, neededProcutcs, price) {

        let resultMessage = '';

        if (this.menu[meal] == undefined) {
            this.menu[meal] = {
                products: neededProcutcs.map(product => {
                    const tokens = product.split(' ');
                    let productName = tokens[0];
                    let productQuantity = Number(tokens[1]);
                    return { name: productName, quantity: productQuantity };
                }),
                price
            };

            let mealsCount = Object.keys(this.menu).length;

            mealsCount == 1 ? resultMessage = `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
                : resultMessage = `Great idea! Now with the ${meal} we have ${mealsCount} meals in the menu, other ideas?`
        }
        else {
            resultMessage = `The ${meal} is already in the our menu, try something different.`
        }

        return resultMessage;

    }

    showTheMenu() {
        return Object.keys(this.menu).length == 0 ? "Our menu is not ready yet, please come later..."
            : Object.keys(this.menu)
                .map(key => `${key} - $ ${this.menu[key].price}`)
                .join('\n');
    }

    makeTheOrder(meal) {
        const theMeal = this.menu[meal];

        if (theMeal == undefined) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        }
        else {
            if (!availableProductsAreEnough.call(this, theMeal.products)) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }

            prepare.call(this, theMeal);
            return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${theMeal.price}.`
        }

        function availableProductsAreEnough(productsNeeded) {
            let availableProducts = Object.keys(this.stockProducts);
            let areEnough = true;
            for (let product of productsNeeded) {
                if (!(availableProducts.some(element=>element==product.name) && product.quantity <= this.stockProducts[product.name])) {
                    areEnough = false;
                    break;
                };
            };

            return areEnough;
        }

        function prepare(meal) {
            for (let product of meal.products) {
                this.stockProducts[product.name] -= product.quantity;
            }

            this.budgetMoney += meal.price;
        }

    }
}



// let kitchen = new Restaurant(1000);
// console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
// console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
// console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
// console.log(kitchen.showTheMenu());


let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));
