function solve(numbers, sortDirections) {

    return numbers.sort(sortFunc(sortDirections));

    function sortFunc(type) {
        return type == 'asc' ? (a, b) => a - b : (a, b) => b - a;
    }
}

console.log(solve([14, 7, 17, 6, 8], 'desc'));