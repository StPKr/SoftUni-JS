function day(input) {
    let d = input[0];
    switch (d) {
        default: console.log("Error"); break;
        case "Monday": 
        case "Tuesday": 
        case "Wednesday": 
        case "Thursday": 
        case "Friday": console.log("Working day"); break;
        case "Saturday": 
        case "Sunday": console.log("Weekend"); break;
    }
}
day(["Monday"])