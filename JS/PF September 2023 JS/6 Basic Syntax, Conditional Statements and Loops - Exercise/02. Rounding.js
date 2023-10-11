function solve(m, n) {
    if (n > 15) {
        n = 15;
    } 
    console.log(parseFloat(m.toFixed(n)));
}
solve(10.5, 3)