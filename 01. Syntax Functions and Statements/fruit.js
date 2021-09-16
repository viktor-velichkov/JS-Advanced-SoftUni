function fruitPrice(fruitType, weight, pricePerKilogram){
    console.log(`I need $${(weight/1000*pricePerKilogram).toFixed(2)} to buy ${(weight/1000).toFixed(2)} kilograms ${fruitType}.`)
};

fruitPrice("apple", 1900,2.1);
fruitPrice('orange', 2500, 1.80);
fruitPrice('apple', 1563, 2.35);