function sameNumbers(number) {

    let lastDigit = number % 10;
    let sum = 0;
    let result = true;

    while (number>=1) {
        
        let currentDigit = number % 10;
        sum += currentDigit;

        if (currentDigit != lastDigit) {
            result = false;
        }

        number = Math.floor(number/10);
    }    

    console.log(result);
    console.log(sum);   
}

sameNumbers(1234);
sameNumbers(2222222);