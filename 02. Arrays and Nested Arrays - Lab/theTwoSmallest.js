function theTwoSmallest(array) {
    const result = [];

    function smallestNumber(input) {
        let indexOfMin = input.indexOf(Math.min(...input));
        let result = input[indexOfMin];

        input.splice(indexOfMin,1);

        return result;
    }

    while (result.length<2) {
        result.push(smallestNumber(array));
    }

    console.log(result.join(' '));
}

theTwoSmallest([5,6,98,7,1332,49,65,0,-8])