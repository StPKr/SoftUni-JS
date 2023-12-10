function solve(number, position) {
    let mask = 1 << position;
    mask = ~mask;
    let result = number & mask;
    console.log(result);
}
solve(1313, 5);