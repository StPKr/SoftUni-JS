function check(input) {
    let fruit = input[0];
    let day = input[1];
    let quan = Number(input[2]);
    let price = 0;
    if (day === "Saturday" || day === "Sunday") {
        switch (fruit) {
            case "banana": price = quan * 2.70; console.log(price.toFixed(2)); break;
            case "apple": price = quan * 1.25; console.log(price.toFixed(2)); break;
            case "orange": price = quan * 0.90; console.log(price.toFixed(2)); break;
            case "grapefruit": price = quan * 1.60; console.log(price.toFixed(2)); break;
            case "kiwi": price = quan * 3.00; console.log(price.toFixed(2)); break;
            case "pineapple": price = quan * 5.60; console.log(price.toFixed(2)); break;
            case "grapes": price = quan * 4.20; console.log(price.toFixed(2)); break;
            default: console.log("error"); break;
        }
    } else if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
        switch (fruit) {
            case "banana": price = quan * 2.50; console.log(price.toFixed(2)); break;
            case "apple": price = quan * 1.20; console.log(price.toFixed(2)); break;
            case "orange": price = quan * 0.85; console.log(price.toFixed(2)); break;
            case "grapefruit": price = quan * 1.45; console.log(price.toFixed(2)); break;
            case "kiwi": price = quan * 2.70; console.log(price.toFixed(2)); break;
            case "pineapple": price = quan * 5.50; console.log(price.toFixed(2)); break;
            case "grapes": price = quan * 3.85; console.log(price.toFixed(2)); break;
            default: console.log("error"); break;
        }
    } else {
        console.log("error");
    }

}
check(["apple", "Tuesday", "2"])

