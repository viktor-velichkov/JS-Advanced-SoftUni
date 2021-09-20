function daysOfMonth(month, year) {
    let date = new Date(year, month,1);

    let newDate = date;

    newDate.setDate(date.getDate()-1);

    
    console.log(`${newDate.getDate()}`);
}

daysOfMonth(2,2021);

