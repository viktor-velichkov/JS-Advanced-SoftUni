/**
 * 
 * @param {Array} moves 
 */
function ticTacToe(moves) {
    const field = createField();

    let playerWon = false;

    let currentPlayer = 'X';


    for (let i = 0; i < moves.length; i++) {
        if (field.some((v) => v.some((v) => v === false))) {
            let move = moves[i];

            if (isPositionFree(field, move)) {

                currentPlayerPlay(field, move);

                if (playerWins(field, currentPlayer)) {
                    playerWon = true;
                    break;
                }

                currentPlayer = switchPlayers(currentPlayer);
            }
            else {
                console.log('This place is already taken. Please choose another!');
            }
        }
        else {
            break;
        }
    }
    if (playerWon) {
        console.log(`Player ${currentPlayer} wins!`);
    }
    else {
        console.log('The game ended! Nobody wins :(');
    }

    field.forEach(row => console.log(row.join('\t')));

    function createField() {
        const field = [];
        for (let row = 0; row < 3; row++) {
            field[row] = [];
            for (let col = 0; col < 3; col++) {
                field[row][col] = false;
            }
        }
        return field;
    }

    function isPositionFree(field, position) {
        let row = Number(position.split(' ')[0]);
        let col = Number(position.split(' ')[1]);

        return field[row][col] === false;
    }

    function currentPlayerPlay(field, move) {
        let row = move.split(' ')[0];
        let col = move.split(' ')[1];
        field[row][col] = currentPlayer;
    }

    function switchPlayers(currentPlayer) {
        currentPlayer == 'X' ? currentPlayer = 'O' : currentPlayer = 'X';
        return currentPlayer;
    }

    function playerWins(field, currentPlayer) {
        const fieldColumns = [];
        for (let col = 0; col < field.length; col++) {
            fieldColumns.push(field.map((v) => v[col]));
        }

        const fieldDiagonals = [];
        fieldDiagonals.push(field.map((v, i, a) => a[i][i]));
        const fieldSecDiagonal = [];
        let col = field.length - 1;
        for (let row = 0; row < field.length; row++) {
            fieldSecDiagonal.push(field[row][col]);
            col--;
        }
        fieldDiagonals.push(fieldSecDiagonal);

        const fieldElements = field.concat(fieldColumns, fieldDiagonals);

        return fieldElements.some((v) => v.every((v) => v === currentPlayer));
    }
}

ticTacToe(["0 0",
    "0 0",
    "1 1",
    "0 1",
    "1 2",
    "0 2",
    "2 2",
    "1 2",
    "2 2",
    "2 1"]);

ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"]);

ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"]);