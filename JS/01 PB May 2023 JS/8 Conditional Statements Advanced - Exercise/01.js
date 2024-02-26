function check(input) {
    let type = input[0];
    let r = Number(input[1]);
    let c = Number(input[2]);
    let pr = 0;

    switch (type) {
        case "Premiere": pr = 12.00; break;
        case "Normal": pr = 7.50; break;
        case "Discount": pr = 5.00; break;
    }
    let sum = r * c * pr;
    console.log(sum.toFixed(2));
}
check(["Premiere", "10", "12"])