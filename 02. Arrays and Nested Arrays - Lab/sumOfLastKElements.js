function sumOfTheLastKElements(arrayLength, sumCount) {
    const array = [1];
    for (let i = 1; i < arrayLength; i++) {
        array[i] = 0;
        for (let j = 1; j <= sumCount; j++) {
            array[i] += (array[i - j] != undefined ? array[i - j] : 0);
        }
    }
    
    return array;
}

console.log(sumOfTheLastKElements(6, 3));
sumOfTheLastKElements(8, 2);
