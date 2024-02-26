function cookingClass(inputArray) {
    let budget = inputArray[0];
    let students = inputArray[1];
    let flourPrice = inputArray[2];
    let eggPrice = inputArray[3];
    let apronPrice = inputArray[4];
    let freePacks = 0;
    if (students >= 5) {
        freePacks = Math.floor(students / 5);
    }
    let totalPrice = (students - freePacks) * flourPrice + students * 10 * eggPrice + Math.ceil(students * 1.2) * apronPrice;
    if (budget >= totalPrice) {
        let flourPrice = inputArray[2];
        console.log(`Items purchased for ${totalPrice.toFixed(2)}$.`)
    }
    else {
        console.log(`${(totalPrice - budget).toFixed(2)}$ more needed.`)
    }
}
// cookingClass([50,
//     2,
//     1.0,
//     0.10,
//     10.0]);
cookingClass([100,
    25,
    4.0,
    1.0,
    6.0]);    
