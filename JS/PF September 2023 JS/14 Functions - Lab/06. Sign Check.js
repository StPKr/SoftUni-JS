function solve(a, b, c) {
    if ((a > 0 && b > 0 && c > 0) ||
        (a < 0 && b > 0 && c < 0) ||
        (a < 0 && b < 0 && c > 0) ||
        (a > 0 && b < 0 && c < 0)) {
        console.log("Positive");
    } else {
        console.log("Negative")
    }
}
solve(-5, -12, -12);