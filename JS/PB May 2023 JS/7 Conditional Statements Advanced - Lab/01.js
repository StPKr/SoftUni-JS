//if variant
/* function day(input){
    let d = Number(input[0]);
    if (d === 1){
        console.log("Monday");
    } else if (d === 2){
        console.log("Tuesday");
        // etc etc. 
    } else {
        console.log("Error");
    }
}
dat(["2"]) */

function day(input){
    let d = Number(input[0]);
    switch(d){
        case 1 : console.log("Monday"); break;
        case 2 : console.log("Tuesday"); break;
        case 3 : console.log("Wednesday"); break;
        case 4 : console.log("Thursday"); break;
        case 5 : console.log("Friday"); break;
        case 6 : console.log("Saturday"); break;
        case 7 : console.log("Sunday"); break;
        default : console.log("Error"); break;
    }
}
day([1])