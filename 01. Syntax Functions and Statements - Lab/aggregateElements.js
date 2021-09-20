function aggregate(array) {

    let reducer = (previousValue, nextValue) => previousValue + nextValue;
    let sum = array.reduce(reducer,0);
    let inverseSum = 0;
    array.forEach(element => {
        inverseSum += 1/element;
    });

    let concatenation='';
    array.forEach(element => {
        concatenation += String(element);
    });

    console.log(sum);
    console.log(inverseSum);
    console.log(concatenation);
}

aggregate([1,2,3]);