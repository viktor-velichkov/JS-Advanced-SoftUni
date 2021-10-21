function solve(commands) {

    const objectCreator = creator();

    for (let command of commands) {
        let [instruction, ...tokens] = command.split(' ');
        objectCreator[instruction](...tokens);

    };


    function creator() {

        const objects = [];

        return {
            create,
            inherit,
            set,
            print
        }

        function create(name, additionalCommand, name2) {
            objects.push({ name });

            additionalCommand != undefined ? inherit.call(objects[name], name2) : undefined;
        }

        function inherit(name) {
            Object.assign(this, objects[name]);
        }

        function set(name, key, value) {
            const currentObject = objects.find(obj=>obj.name==name);
            currentObject[key] = value;
        }

        function print(name) {
            const currentObject = objects.find(obj=>obj.name==name);
            const props = Object.entries(currentObject);
            const results = props.map((key => `${key}:${props[key]}`));
            console.log(props.join());
        }
    }

}


solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']);



