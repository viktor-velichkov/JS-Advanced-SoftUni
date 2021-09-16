function previousDay(year, month, day) {
    let date = new Date(year, month-1, day);
    let previousDate = new Date(date);
    previousDate.setDate(date.getDate()-1);    
    console.log(`${previousDate.getFullYear()}-${previousDate.getMonth()+1}-${previousDate.getDate()}`);
}

previousDay(2016,9,30);
previousDay(2016, 9, 1);