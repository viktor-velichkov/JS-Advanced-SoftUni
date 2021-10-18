function solution() {
    let data='';

    return {
        append,
        removeStart,
        removeEnd,
        print
    }

    function append(text) {
        data+=text;

    }

    function removeStart(count) {
        data = data.slice(count);
    }

    function removeEnd(count) {
        data = data.slice(0,-count);
    }

    function print() {
        console.log(data);
    }
}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();

let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();

