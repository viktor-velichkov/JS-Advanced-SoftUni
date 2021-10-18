function solution() {

    const ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    const recipies = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    };

    return (instruction) => {

        const robot = manager();

        let [command, element, quantity] = instruction.split(' ');

        return robot[command](element, quantity);

    };

    function manager() {
        let successMessage = 'Success';

        return {
            restock,
            prepare,
            report
        }

        function restock(element, quantity) {
            ingredients[element] += Number(quantity);
            return successMessage;
        };

        function prepare(recipe, quantity) {
            const products = recipies[recipe];

            let resultMessage = successMessage;

            if (productsAvailable(products)) {
                for (let product in products) {
                    ingredients[product] -= products[product] * Number(quantity);
                }
            }

            return resultMessage;

            function productsAvailable(procuts) {
                let available = true;

                for (let product in products) {
                    let quantityNeeded = products[product] * Number(quantity);
                    let quantityAvailable = ingredients[product];
                    if (quantityAvailable < quantityNeeded) {
                        resultMessage = `Error: not enough ${product} in stock`;
                        available = false;
                        break;
                    }
                }

                return available;
            }
        };

        function report() {
            let report = '';
            for (let ingredient in ingredients) {
                report += `${ingredient}=${ingredients[ingredient]} `;
            }
            return report.trim();
        }
    }

}

let manager = solution();
console.log(manager("restock flavour 50")); // Success 
console.log(manager("prepare lemonade 4"));
console.log(manager("restock carbohydrate 10")); // Error: not enough carbohydrate in stock
console.log(manager("restock flavour 10")); // Error: not enough carbohydrate in stock
console.log(manager("prepare apple 1")); // Error: not enough carbohydrate in stock
console.log(manager("restock fat 10")); // Error: not enough carbohydrate in stock
console.log(manager("prepare burger 1")); // Error: not enough carbohydrate in stock
console.log(manager("report")); // Error: not enough carbohydrate in stock