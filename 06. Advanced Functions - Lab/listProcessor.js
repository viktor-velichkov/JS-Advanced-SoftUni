function solve(input) {

    const processor1 = processor();

    input.forEach(element => {
        let [command, value] = element.split(' ');

        processor1[command](value);

    });

    function processor() {
        const innerObject = [];

        return {
            add,
            remove,
            print
        }

        function add(text) {
            innerObject.push(text);
        }

        function remove(text) {
            while (innerObject.includes(text)) {
                innerObject.splice(innerObject.indexOf(text), 1);
            }
        }

        function print() {
            console.log(innerObject.join());
        }
    }
}


solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
solve(['add pesho', 'add george', 'add peter', 'remove peter','print']);
