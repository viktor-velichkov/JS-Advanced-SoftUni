function diagonalAttack(input) {
    const matrix = input.map((v, i, a) => v.split(' ').map(Number));

    const mainDiagonal = matrix.map((v, i, a) => a[i][i]);

    const secondaryDiagonal = [];
    let col = matrix.length - 1;
    for (let row = 0; row < matrix.length; row++) {
        secondaryDiagonal.push(matrix[row][col]);
        col--;
    }

    let sum = mainDiagonal.reduce((a, b) => a + b);
    if (sum == secondaryDiagonal.reduce((a, b) => a + b)) {
        const newMatrix = matrix.map((v) => v.fill(sum));
        let step = 0;
        for (row = 0; row < newMatrix.length; row++) {
            newMatrix[row][step] = mainDiagonal[row];
            newMatrix[row][newMatrix[row].length - 1 - step] = secondaryDiagonal[row];
            step++;
        }

        newMatrix.forEach(row => console.log(row.join(' ')));
    } else {
        matrix.forEach(element => console.log(element.join(' ')));
    }
}

diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'
]);

diagonalAttack(['1 1 1',
    '1 1 1',
    '1 1 0'
]);