function lowestPrices(data) {
    const offers = [];

    data.forEach(element => {
        const tokens = element.split(' | ');
        const product = createProduct(...tokens);
        if (offers.some((v) => v.town == product.town && v.name == product.name)) {
            offers.find((v) => v.town == product.town && v.name == product.name).price = product.price;
        } else {
            offers.push(product);
        }
    });

    const result = {};
    offers.forEach(offer => {
        if (result[offer.name] != undefined) {
            const existingProduct = result[offer.name];
            if (existingProduct.price > offer.price) {
                existingProduct.price = offer.price;
                existingProduct.town = offer.town;
            }
        } else {
            result[offer.name] = { price: offer.price, town: offer.town };
        }
    });

    for (const key in result) {
        console.log(`${key} -> ${result[key].price} (${result[key].town})`)
    }

    function createProduct(town, name, price) {
        return {
            name,
            price: Number(price),
            town
        }
    }
}

lowestPrices(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000'
]);

lowestPrices(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);