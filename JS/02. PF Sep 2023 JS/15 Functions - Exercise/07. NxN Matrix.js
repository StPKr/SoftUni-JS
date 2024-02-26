function solve(n) {
    let string = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            string +=n + " ";
        }
        console.log(string);
        string = "";
    }
}
solve(3)