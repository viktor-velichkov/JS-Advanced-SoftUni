function solve(...input) {
    const types = {};
    const data = [...input];
    data.forEach(element => {
        const elementType = typeof(element);
        console.log(`${elementType}: ${element}`);
        types[elementType] == undefined ? types[elementType] = 1 : types[elementType]++;
    });

    Object.entries(types).sort((a, b) => b[1] - a[1]).forEach(type => {
        console.log(type[0] + ' = ' + type[1]);
    })

}

solve('cat', 42, 53, function() { console.log('Hello world!'); });