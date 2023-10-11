function check(input) {
    let duration = Number(input[0]);
    let type = input[1];
    let grade = input[2];
    let nights = duration - 1;
    let price = 0;
    let discount = 0;
    let extradiscount = 0;
    let finalfinalPrice = 0;
    if (type === "room for one person") {
        price = 18.00;
        discount = 0;
    } else if (type === "apartment") {
        price = 25.00;
        if (nights > 15) {
            discount = 0.5;
        } else if (nights > 10) {
            discount = 0.35;
        } else if (nights <= 10) {
            discount = 0.3;
        }
    } else if (type === "president apartment") {
        price = 35.00;
        if (nights > 15) {
            discount = 0.2;
        } else if (nights > 10) {
            discount = 0.15;
        } else if (nights <= 10) {
            discount = 0.1;
        }
    }
    let finPrice = nights * price;
    let finalPrice = finPrice - finPrice * discount;
    if (grade === "positive") {
        extradiscount = 0.25;
        finalfinalPrice = finalPrice + finalPrice * extradiscount;
    } else {
        extradiscount = 0.1;
        finalfinalPrice = finalPrice - finalPrice * extradiscount;
    }
    console.log(finalfinalPrice.toFixed(2));
}
check(["14", "apartment", "positive"])