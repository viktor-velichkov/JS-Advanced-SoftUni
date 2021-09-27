/**
 * 
 * @param {Array} array 
 * @returns 
 */
function increasingSubset(array) {
    return array.filter((v, i, a) => i == 0 ? true : (a[i] >= a[i - 1] && a[i] >= a[0]));
}

console.log(increasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(increasingSubset([20, 3, 2, 15, 6, 1]));
console.log(increasingSubset([]));