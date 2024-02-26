function solve(a, b) {
    let n = Number(a);
    let m = Number(b);
    let sum = 0;
    for (let i = n; i <= m; i++) {
        sum += i;
    };
    console.log(sum)
};
solve('1', '5');