function solve(a, b, c) {
    let result;
    if (a > b) {
        result = a;
    } else {
        result = b;
    };
    if (c > b) {
        result = c;
    };
    console.log(`The largest number is ${result}.`)

}
solve(5, -3, 16);