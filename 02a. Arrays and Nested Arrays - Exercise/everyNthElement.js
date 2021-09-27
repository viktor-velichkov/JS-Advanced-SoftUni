/**
 * 
 * @param {Array} array 
 * @param {*} N 
 * @returns 
 */
function everyNthElement(array, N) {
    const result = [];
    for (let i = 0; i < array.length; i += N) {
        result.push(array[i]);
    }
    return result;
}

console.log(everyNthElement(['5', '20', '31', '4', '20'], 2));