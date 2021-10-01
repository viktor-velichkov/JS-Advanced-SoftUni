function spiral(width, height) {
    const matrix = [];
    for (let row = 0; row < height; row++) {
        matrix[row] = Array(width);
    }
   
    let size = width * height;
    let direction = 'east';
    let row = 0;
    let col = 0;
    let value = 1;
    let westEnd = 0;
    let northEnd = 1;
    let eastEnd = width - 1;
    let southEnd = height - 1;
    for (let i = 0; i < size; i++) {
        matrix[row][col] = value;
        value++;

        switch (direction) {
            case 'east':
                if (col == eastEnd) {
                    direction = 'south';
                    row++;
                    eastEnd--;
                } else {
                    col++;
                }
                break;
            case 'south':
                if (row == southEnd) {
                    direction = 'west';
                    col--;
                    southEnd--;
                } else {
                    row++;
                }
                break;
            case 'west':
                if (col == westEnd) {
                    direction = 'north';
                    row--;
                    width--;
                    westEnd++;
                } else {
                    col--;
                }
                break;
            case 'north':
                if (row == northEnd) {
                    direction = 'east';
                    col++;
                    height--;
                    northEnd++;
                } else {
                    row--;
                }
                break;
        }
    }

    matrix.forEach(el => console.log(el.join(' ')));
}

spiral(4, 3);