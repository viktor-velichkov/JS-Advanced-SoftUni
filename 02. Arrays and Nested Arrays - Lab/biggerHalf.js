/**
 * 
 * @param {Array} array 
 * @returns 
 */
function biggerHalf(array) {
    const sortedArray = array.sort(compareFunction);
    sortedArray.splice(0, Math.floor(sortedArray.length / 2));
    return array;

    function compareFunction(a, b) {
        return a - b;
    }
}

console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));