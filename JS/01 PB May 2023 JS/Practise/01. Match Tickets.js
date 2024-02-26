function check(input) {
    let budget = Number(input[0]);
    let category = input[1];
    let number = Number(input[2]);
    let price = 0;
    let finalPrice = 0;
    let transport = 0;
    if (category === "VIP") {
        price = 499.99;
    } else if (category === "Normal"){
        price = 249.99;
    }
    if (number < 5) {
        transport = 0.75 * budget;
    } else if (number < 10) {
        transport = 0.6 * budget;
    } else if (number < 25) {
        transport = 0.5 * budget;
    } else if (number < 50) {
        transport = 0.4 * budget;

    } else {
        transport = 0.25 * budget;
    }
    finalPrice = budget - transport - price * number;
    if (finalPrice < 0) {
        console.log(`Not enough money! You need ${(finalPrice * (-1)).toFixed(2)} leva.`)
    } else {
        console.log(`Yes! You have ${finalPrice.toFixed(2)} leva left.`)
    }
}
check(["1000", "Normal", "1"])