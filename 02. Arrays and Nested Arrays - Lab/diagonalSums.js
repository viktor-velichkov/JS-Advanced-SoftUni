function diagonalSums(matrix) {
    let mainSum = 0;
    let secondarySum = 0;
    let j = 0;
    for (i = 0; i < matrix.length; i++) {        
        mainSum+=matrix[i][j];
        secondarySum+=matrix[i][matrix[i].length-1-j];
        j++;        
    }

    console.log(mainSum,secondarySum);
}

diagonalSums([[20, 40],
              [10, 60]]);

diagonalSums([[3, 5, 17],
              [-1, 7, 14],
              [1, -8, 89]]);