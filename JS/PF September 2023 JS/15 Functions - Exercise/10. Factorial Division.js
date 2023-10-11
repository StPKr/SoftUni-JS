function solve(a, b) {
    let factorialA = 1;
    let factorialB = 1;
    if (a === 0) {
        factorialA = 1;
    } else {
        for (let i = a; i >= 1; i--) {
            factorialA *= i;
        }
    }
    if (b === 0) {
        factorialB = 1;
    } else {
        for (let j = b; j >= 1; j--){
            factorialB *= j;
        }
    }
let result = factorialA/factorialB;
console.log (result.toFixed(2));
}
solve(5, 2);