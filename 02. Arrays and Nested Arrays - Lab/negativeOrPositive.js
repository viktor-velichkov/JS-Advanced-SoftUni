function sortBySign(array) {
    const result = [];
    array.forEach(item => {
        if (item < 0) {
            result.splice(0, 0, item);
        }
        else {
            result[result.length] = item;
        }
    });

    result.forEach(element => {
        console.log(element);
    });
}

sortBySign([7, -2, 8, 9]);
sortBySign([3, -2, 0, -1]);