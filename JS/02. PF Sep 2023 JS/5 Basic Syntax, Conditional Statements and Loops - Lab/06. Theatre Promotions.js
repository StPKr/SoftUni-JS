function solve(day, age) {
    let price = 0;
    if (age >= 0 && age <= 18) {
        switch (day) {
            case "Weekday": price = 12; console.log(`${price}$`); break;
            case "Weekend": price = 15; console.log(`${price}$`); break;
            case "Holiday": price = 5; console.log(`${price}$`); break;
        }
    } else if (age > 18 && age <= 64) {
        switch (day) {
            case "Weekday": price = 18; console.log(`${price}$`); break;
            case "Weekend": price = 20; console.log(`${price}$`); break;
            case "Holiday": price = 12; console.log(`${price}$`); break;
        }
    } else if (age > 64 && age <= 122) {
        switch (day) {
            case "Weekday": price = 12; console.log(`${price}$`); break;
            case "Weekend": price = 15; console.log(`${price}$`); break;
            case "Holiday": price = 10; console.log(`${price}$`); break;
        }
    } else {
        console.log("Error!")
    }
}
solve(["Weekday", "42"])