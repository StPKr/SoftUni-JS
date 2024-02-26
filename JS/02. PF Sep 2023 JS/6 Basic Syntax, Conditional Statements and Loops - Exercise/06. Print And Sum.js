function solve(m, n) {
    let sum = 0;
    let string = "";
    for (let i = m; i <= n; i++) {
        string += i + " ";
        sum += i;
    }
    console.log(string)
    console.log(`Sum: ${sum}`)

}
solve(5, 10)