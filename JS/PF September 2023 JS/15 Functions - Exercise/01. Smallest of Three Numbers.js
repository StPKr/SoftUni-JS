function solve(a, b, c) {
    let min;
    if (a <= b) {
        min = a;
        if (a <= c) {
        } else {
            min = c;
        }
    } else if (a > b) {
        min = b;
        if (b <= c) {
        } else {
            min = c;
        }
    }
    console.log(min)
}
solve(2, 5, 3)