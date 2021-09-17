function greatestCommonDivisor(num1, num2){
    let divisor = Math.min(num1,num2);
    let result;
    while ((num1 % divisor != 0 || num2 % divisor != 0) && divisor>0) {
        divisor--;
    }

    if (divisor != 0) {
        result = divisor;
    }
    else {
        result = "No such number";
    }

    console.log(divisor);
}

greatestCommonDivisor(2154,458);
greatestCommonDivisor(15,5);