function solve(inputArray) {
    let customerType = inputArray.pop();
    inputArray = inputArray.map(Number);
    let sumNoTax = 0;
    let sumTax = 0;
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] < 0) {
            console.log("Invalid price!");
            continue;
        }
        sumNoTax += inputArray[i];
    }
    if (sumNoTax === 0) {
        console.log("Invalid order!")
    } else {
        sumTax = 1.2 * sumNoTax;
        if (customerType === "special") {
            sumTax *= 0.9;
        }
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${sumNoTax.toFixed(2)}$`);
        console.log(`Taxes: ${(1.2 * sumNoTax - sumNoTax).toFixed(2)}$`);
        console.log("-----------");
        console.log(`Total price: ${sumTax.toFixed(2)}$`);
    }
}
solve([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
])
