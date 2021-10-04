function tonwsToJson(input) {

    var towns = [];
    const data = input.filter((v, i, a) => i > 0);
    data.forEach(line => {
        towns.push(createObject(line));
    });

    return JSON.stringify(towns);

    function createObject(line) {
        const tokens = line.slice(2, line.length - 1).split(' | ').filter((v) => v != undefined);
        let [town, latitude, longitude] = tokens;
        return { Town: town, Latitude: parseFloat(Number(latitude).toFixed(2)), Longitude: parseFloat(Number(longitude).toFixed(2)) };
    }
}

console.log(tonwsToJson(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]));

console.log(tonwsToJson(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |'
]));