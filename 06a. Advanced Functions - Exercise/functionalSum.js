function add(num) {
    let sum = num;

    increment.toString = () => console.log(sum);

    function increment(num2) {
        sum += num2;

        return increment;
    }

    return increment;

}


add(1)(2)(5).toString()