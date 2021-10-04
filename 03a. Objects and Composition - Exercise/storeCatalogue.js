function storeCatalogue(input) {
    const catalogue = [];

    input.forEach(line => {
        const product = createProduct(line);
        catalogue.push(product);
    });

    const orderedCatalogue = catalogue.sort((a, b) => a.name.localeCompare(b.name));


    let startLetter;
    orderedCatalogue.forEach(product => {
        if (product.name.substring(0, 1) != startLetter) {
            startLetter = product.name.substring(0, 1);
            console.log(startLetter);
        }
        console.log(`  ${product.name}: ${product.price}`);
    });


    function createProduct(productInfo) {
        const tokens = productInfo.split(' : ');
        return { name: tokens[0], price: Number(tokens[1]) }
    }
}

storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
])