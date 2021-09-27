/**
 * 
 * @param {Array} numbers 
 */
function sorting(numbers) {
    numbers.sort((a, b) => a - b);
    const result = [];
    while (numbers.length > 0) {
        result.push(numbers.shift());
        result.push(numbers.pop());
    }

    return result;
}

console.log(sorting([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));