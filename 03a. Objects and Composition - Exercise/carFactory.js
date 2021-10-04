function assembleCar(order) {
    const engines = [
        { power: 90, volume: 1800 },
        { power: 120, volume: 2400 },
        { power: 200, volume: 3500 }
    ];

    const carriages = [
        { type: 'hatchback', color: null },
        { type: 'coupe', color: null }
    ];
    const car = {};
    car.model = order.model;
    car.engine = engines.filter((v, i, a) => v.power >= order.power).sort((a, b) => a.power - b.power)[0];
    car.carriage = carriages.filter((v) => v.type == order.carriage)[0];
    car.carriage.color = order.color;
    car.wheels = new Array(4).fill(order.wheelsize % 2 == 0 ? order.wheelsize - 1 : order.wheelsize);

    return car;
}

console.log(assembleCar({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));

console.log(assembleCar({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}));