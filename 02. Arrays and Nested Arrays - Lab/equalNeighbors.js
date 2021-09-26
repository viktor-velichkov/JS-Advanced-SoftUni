function equalNeighbors(matrix) {
    let pairsCount = 0;
    for (i = 0; i < matrix.length; i++) {
        for (j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j + 1] == matrix[i][j]) {
                pairsCount++;
            }
            if (i != matrix.length - 1) {
                if (matrix[i + 1][j] == matrix[i][j]) {
                    pairsCount++;
                }
            }
        }
    }

    return pairsCount;
}

console.log(equalNeighbors([['2', '2', '5', '7', '4'],
['4', '0', '5', '3', '4'],
['2', '5', '5', '4', '2']]));

console.log(equalNeighbors([['test', 'yo', 'yo', 'ho'],
['done', 'done', 'yo', '6'],
['done', 'done', 'done', '5']]));