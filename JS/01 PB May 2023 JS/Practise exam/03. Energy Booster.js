function check(input) {
    let fruit = input[0];
    let size = input[1];
    let orders = Number(input[2]);
    let smallPrice = 0;
    let bigPrice = 0;
    let price = 0;
    let totalPrice = 0;
    switch (fruit) {
        case "Watermelon": smallPrice = 56 * 2; bigPrice = 28.7 * 5; break;
        case "Mango": smallPrice = 36.6 * 2; bigPrice = 19.6 * 5; break;
        case "Pineapple": smallPrice = 42.1 * 2; bigPrice = 24.8 * 5; break;
        case "Raspberry": smallPrice = 20 * 2; bigPrice = 15.2 * 5; break;
        default: break;
    }
    if (size === "small") {
        price = smallPrice * orders;
    }
    else {
        price = bigPrice * orders;

    }
    if ( 400 <= price && price <= 1000){
        totalPrice = 0.85*price;
    } else if (price > 1000){
        totalPrice = 0.5*price;
    } else {
        totalPrice = price;
    }
    console.log(`${totalPrice.toFixed(2)} lv.`)
}
check(["Pineapple", "small", "1"])