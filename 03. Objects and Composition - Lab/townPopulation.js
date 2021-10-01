function townPopulation(input) {
    const data = input.map((v) => v.split(' <-> '));
    var result = {};
    data.forEach(element => {
        let [key, value] = element;
        result[key] != undefined ? result[key] += Number(value) : result[key] = Number(value);
    });

    for (const key in result) {
        console.log(`${key} : ${result[key]}`);
    }
}

townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);

townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);