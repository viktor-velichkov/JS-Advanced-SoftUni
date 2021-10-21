function sum(arr, start, end) {

    if (!Array.isArray(arr)) {
        return NaN;
    }

    if (start < 0) {
        start = 0;
    }

    if (end > arr.length - 1) {
        end = arr.length - 1;
    }

    return arr.filter((v, i) => i >= start && i <= end)
        .map(el => Number(el))
        .reduce((a, b) => a + b);
}

module.exports=sum;

console.log(sum(5,0,1));