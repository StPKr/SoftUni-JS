function check(input) {
    let days = Number(input[0]);
    let index = 1;
    let quantity = Number(input[index]);
    let degrees = Number(input[index]);
    let totalQuantity = 0;
    let totalDegrees = 0;
    let average = 0;
    for (let i = 1; i <= days; i++) {
        quantity = Number(input[index]);
        totalQuantity += quantity;
        index++;
        degrees = Number(input[index]);
        totalDegrees += quantity * degrees;
        index++;
    }
    average = totalDegrees / totalQuantity;
    console.log(`Liter: ${totalQuantity.toFixed(2)}`);
    console.log(`Degrees: ${average.toFixed(2)}`);
    if (average < 38) {
        console.log("Not good, you should baking!");
    } else if (average > 42) {
        console.log("Dilution with distilled water!");

    } else {
        console.log("Super!")
    }


}
check(["3",
    "100",
    "45",
    "50",
    "55",
    "150",
    "36"])
