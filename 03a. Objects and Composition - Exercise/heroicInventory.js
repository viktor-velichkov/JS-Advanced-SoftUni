/**
 * 
 * @param {Array} data 
 */
function createHeroes(data) {
    const heroes = [];


    data.forEach(line => {
        const tokens = line.split(' / ');
        const hero = createHero(...tokens);
        heroes.push(hero);
    });

    return JSON.stringify(heroes);

    function createHero(name, level, items) {
        return {
            name,
            level: Number(level),
            items: items != undefined ? items.split(', ') : []
        };
    }
}

console.log(createHeroes(['Jake / 1000']));