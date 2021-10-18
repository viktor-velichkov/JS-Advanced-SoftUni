function getFibonator() {

    let counter = 0;

    return () => {
        const result = fibonacci(counter);
        counter++;
        return result
    }

    function fibonacci(counter) {
        return counter == 0 || counter == 1 ? 1 : fibonacci(counter - 2) + fibonacci(counter - 1);
    }

}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13