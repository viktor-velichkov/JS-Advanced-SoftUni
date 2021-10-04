function calories(data) {
    const result = {};
    for (let i = 0; i < data.length; i += 2) {
        result[data[i]] = Number(data[i + 1]);
    }

    return result;
}

console.log(calories(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));
console.log(calories(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']));