function objectFactory(library, orders) {
    const result = [];

    for (const object of orders) {
        const newObj = {};
        for (const key in object.template) {
            newObj[key] = object.template[key];
        }

        object.parts.forEach(part => {
            newObj[part] = library[part];
        });
        result.push(newObj);
    }

    return result;
}

const library = {
    print: function() {
        console.log(`${this.name} is printing a page`);
    },
    scan: function() {
        console.log(`${this.name} is scanning a document`);
    },
    play: function(artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};
const orders = [{
        template: { name: 'ACME Printer' },
        parts: ['print']
    },
    {
        template: { name: 'Initech Scanner' },
        parts: ['scan']
    },
    {
        template: { name: 'ComTron Copier' },
        parts: ['scan', 'print']
    },
    {
        template: { name: 'BoomBox Stereo' },
        parts: ['play']
    }
];

console.log(objectFactory(library, orders));