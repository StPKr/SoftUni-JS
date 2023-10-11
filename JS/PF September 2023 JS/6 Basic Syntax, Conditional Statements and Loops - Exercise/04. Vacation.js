function solve(group, type, day) {
    let price = 0;
    let finalSum = 0;
    switch (day) {
        case "Friday":
            switch (type) {
                case "Students": price = 8.45; break;
                case "Business": price = 10.90; break;
                case "Regular": price = 15; break;
            } break;
        case "Saturday":
            switch (type) {
                case "Students": price = 9.80; break;
                case "Business": price = 15.60; break;
                case "Regular": price = 20; break;
            } break;
        case "Sunday":
            switch (type) {
                case "Students": price = 10.46; break;
                case "Business": price = 16; break;
                case "Regular": price = 22.50; break;
            } break;
    }
    finalSum = price * group;
    if (type === "Students" && group >= 30) {
        finalSum *= 0.85;
    } else if (type === "Business" && group >= 100) {
        finalSum = price * (group - 10);
    } else if (type === "Regular" && group >= 10 && group <= 20) {
        finalSum *= 0.95;
    }
    console.log(`Total price: ${finalSum.toFixed(2)}`);
}
solve(40,
    "Regular",
    "Saturday"  
)