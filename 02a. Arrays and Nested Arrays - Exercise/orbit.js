function orbit(input) {
    let width = input[0];
    let height = input[1];
    let x = input[2];
    let y = input[3];


    const matrix = [];
    for (let row = 0; row < height; row++) {
        matrix[row] = [];
        for (let col = 0; col < width; col++) {
            matrix[row][col] = 1;
        }
    }

    let maxStep = Math.max(Math.abs(x - height+1 ), Math.abs(y - width +1 ), x, y);
    let step = 0;
    let value = maxStep + 1;
    while (value > 0) {
        for (let row = x - maxStep + step; row <= x + maxStep - step; row++) {
            for (col = y - maxStep + step; col <= y + maxStep - step; col++) {
                matrix[row] !== undefined ? (matrix[row][col] !== undefined ? matrix[row][col] = value : undefined) : undefined;
            }
        }
        value--;
        step++;
    }

    matrix.forEach(el => console.log(el.join(' ')));
}

orbit([5, 5, 4, 4]);