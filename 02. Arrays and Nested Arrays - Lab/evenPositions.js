/**
 * 
 * @param {Array} array 
 */
function evenPositions(array) {
    let result = [];
    for (let i=0; i<array.length; i++) {
        if (i%2===0) {
            result.push(array[i]);
        }
    }

    console.log(...result);
}

evenPositions(['20', '30', '40', '50', '60']);