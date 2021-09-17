/**
 * 
 * @param {String} input1 
 * @param {String} input2 
 * @param {String} input3 
 */
function stringLength(input1, input2, input3) {
    let totalLength = input1.length + input2.length + input3.length;
    let averageLength = Math.floor(totalLength/3);
    console.log(totalLength);
    console.log(averageLength);
}

stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');