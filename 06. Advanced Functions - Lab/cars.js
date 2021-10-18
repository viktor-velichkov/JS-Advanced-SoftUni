function solve(commands) {

    const objectCreator = creator();

    for (let command of commands) {
        let [instruction, ...tokens] = command.split(' ');
        objectCreator[instruction](...tokens);

    };


    function creator() {

        const objects = {};

        return {
            create,
            set,
            print
        }

        function create(name, additionalCommand, name2) {
            objects[name] = additionalCommand ? Object.create(objects[name2]) : {};
        }

        function set(name, key, value) {
            objects[name][key] = value;
        }

        function print(name) {

            const result = [];
            for (let key in objects[name]) {
                result.push(`${key}:${objects[name][key]}`)
            }

            console.log(result.join(','));
        }


    }

}


solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'
]);