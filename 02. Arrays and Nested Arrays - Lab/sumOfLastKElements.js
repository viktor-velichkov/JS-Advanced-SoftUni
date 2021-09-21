function sumOfTheLastKElements(arrayLength, sumCount) {
    let array = [1];
    for (let i=1; i<arrayLength; i++) {
        array[i]=array[i-1]+array[i-2]+array[i-3];
    }

    console.log(array);
}

sumOfTheLastKElements(6,3);