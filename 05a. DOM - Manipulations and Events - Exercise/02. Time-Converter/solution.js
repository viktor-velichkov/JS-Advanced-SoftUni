function attachEventsListeners() {
    document.querySelector('main').addEventListener('click', convert);

    function convert(e) {
        const target = e.target;
        console.log(target);
        const converter = {
            days: (days) => {
                return {
                    days,
                    hours: days * 24,
                    minutes: days * 24 * 60,
                    seconds: days * 24 * 3600
                }
            },
            hours: (hours) => {
                return {
                    days: hours / 24,
                    hours,
                    minutes: hours * 60,
                    seconds: hours * 3600
                }

            },
            minutes: (minutes) => {
                return {
                    days: minutes / 60 / 24,
                    hours: minutes / 60,
                    minutes,
                    seconds: minutes * 60
                }
            },
            seconds: (seconds) => {
                return {
                    days: seconds / 3600 / 24,
                    hours: seconds / 3600,
                    minutes: seconds / 60,
                    seconds
                }
            },
        }

        if (target.nodeName == 'INPUT' && target.value == 'Convert') {
            const parent = target.parentElement;
            const inputField = parent.children[1];
            const inputValue = Number(inputField.value);
            const inputTimeUnits = inputField.id;

            console.log(inputValue, inputTimeUnits);

            const result = converter[inputTimeUnits](inputValue);

            console.log(result);

            const outputFields = document.querySelectorAll('[type="text"]');
            console.log(outputFields);
            [...outputFields].forEach(field => {
                field.value = result[field.id];
            })


        }


    }
}