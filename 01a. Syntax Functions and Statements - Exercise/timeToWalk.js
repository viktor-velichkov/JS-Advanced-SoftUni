function timeToWalk(steps, stepLength, speed) {
    let distance = steps*stepLength/1000;

    let additionalMinutes = Math.floor(distance/0.5);

    let totalHours = distance/speed;

    let hours = Math.floor(totalHours);

    let totalMinutes = (totalHours - hours)*60;

    if (totalMinutes + additionalMinutes >=60) {
        hours++;
        totalMinutes = totalMinutes+additionalMinutes-60;
    }
    else {
        totalMinutes+=additionalMinutes;
    }
    
    let minutes = Math.floor(totalMinutes);

    let seconds = (totalMinutes-minutes)*60;

    if (hours < 10) {
        hours = '0' + hours.toString();
    }    

    if (minutes < 10) {
        minutes = '0' + minutes.toString();
    }
    
    if (seconds < 10) {
        seconds = '0' + seconds.toString();
    }

    console.log(`${hours}:${minutes}:${seconds.toFixed(0)}`)   

}

timeToWalk(4000, 0.6, 5);
timeToWalk(2564, 0.7, 5.5);