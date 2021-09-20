function dayOfWeek(input) {
    let dict = {
        'Monday':1,
        'Tuesday':2,
        'Wednesday':3,
        'Thursday':4,
        'Friday':5,
        'Saturday':6,
        'Sunday':7
    };

    if (!(input in dict)) {
        console.log('error');
    }
    else {
        console.log(dict[input]);
    }

}

dayOfWeek(1);
dayOfWeek(2);
dayOfWeek(8);