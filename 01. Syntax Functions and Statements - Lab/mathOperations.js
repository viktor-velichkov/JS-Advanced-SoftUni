function calculate(num1, num2, operation) {
    let result;

    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '%':
            result = num1 % num2;
            break;
        case '**':
            result = num1 ** num2;
            break;
    }

    console.log(result);
}

calculate(5, 6, '+');
calculate(5, 6, '*');
calculate(5, 6, '-');
calculate(5, 6, '%');
calculate(5, 6, '**');
calculate(5, 6, '/');


