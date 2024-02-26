function solve(order, amount) {
    let price = 0;
    switch (order) {
        case "coffee": price = 1.50; break;
        case "water": price = 1.00; break;
        case "coke": price = 1.40; break;
        case "snacks": price = 2.00; break;


    }
    console.log((amount * price).toFixed(2));
}
solve("water", 5);