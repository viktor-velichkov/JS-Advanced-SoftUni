/**
 * 
 * @param {Array} matrix 
 */
function isMatrixMagical(matrix) {
    let columns = [];
    for (let col = 0; col < matrix.length; col++) {
        columns.push(matrix.map((v, i, a) => v[col]));
    }
    matrix = matrix.concat(columns);
    let sum = matrix[0].reduce((a,b)=>a+b);
    return matrix.every((v,i,a)=> v.reduce((a,b)=> a+b) == sum);
}

console.log(isMatrixMagical([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]));

console.log(isMatrixMagical([[11, 32, 45],
                             [21, 0, 1],
                             [21, 1, 1]]));
    

