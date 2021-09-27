function cooking(number, op1, op2, op3, op4, op5) {
    let operations = [op1, op2, op3, op4, op5];

    for (let i = 0; i < operations.length; i++) {
        switch (operations[i]) {
            case "chop":
                number = number / 2;
                break;
            case "dice":
                number = Math.sqrt(number);
                break;
            case "spice":
                number++;
                break;
            case "bake":
                number *= 3;
                break;
            case "fillet":
                number = number * 0.8;
                break;
        }
        console.log(number);
    }
}

cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop');