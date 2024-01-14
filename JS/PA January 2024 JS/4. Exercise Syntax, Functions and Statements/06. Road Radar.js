function solve(speed, type) {
    let limit = 0;
    switch (type) {
        case "motorway": limit = 130; break
        case "interstate": limit = 90; break
        case "city": limit = 50; break
        case "residential": limit = 20; break
    }
    if (speed <= limit) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`)

    } else if (speed - limit > 40) {
        let status = "reckless driving";
        console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - ${status}`)
    } else if (speed - limit > 20) {
        let status = "excessive speeding"
        console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - ${status}`)
    }
    else if (speed - limit > 0) {
        let status = "speeding"
        console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - ${status}`)
    }
}
solve(40, "city");
solve(21, "residential");
solve(200, "motorway");
