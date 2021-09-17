function roadRadar(speed, area) {
    let overSpeed;
    let speedDifference;

    switch (area) {
        case "motorway":
            speedDifference = speed-130;
            break;
        case "interstate":
            speedDifference = speed-90;
            break;
        case "city":
            speedDifference = speed-50;
            break;
        case "residential":
            speedDifference = speed-20;
            break;   
        default:
            console.log("Invalid zone."); 
    }

    if (speedDifference<=0) {
        console.log(`Driving ${speed} km/h in a ${speed-speedDifference} zone`);
    }
    else {
        let status;
        if (speedDifference<=20) {
            status = "speeding";
        }
        else if (speedDifference<=40) {
            status = "excessive speeding";
        }
        else {
            status = "reckless driving";
        }

        console.log(`The speed is ${speedDifference} km/h faster than the allowed speed of ${speed-speedDifference} - ${status}`);
    }
}

roadRadar(40,'city');
roadRadar(21,'residential');
roadRadar(120,'interstate');
roadRadar(200,'motorway');

