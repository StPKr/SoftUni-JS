function solve(a, b) {
    for (let i = Math.max(a, b); i > 0; i--) {
        if (a % i === 0 && b % i === 0) {
            console.log(i);
            break;
        }
    }
}
solve(15, 5);
solve(2154, 458);
solve(256, 1024)