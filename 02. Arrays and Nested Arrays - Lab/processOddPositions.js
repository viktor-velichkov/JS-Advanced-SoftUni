/**
 * 
 * @param {Array} array 
 */
function process(array) {
    const result = [];

    for (i = 1; i < array.length; i += 2) {
        result.unshift(array[i] * 2);
    }

    console.log(result.join(' '));
}

process([10, 15, 20, 25]);