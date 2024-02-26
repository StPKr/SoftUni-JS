function solve(a, x) {
    let output = "";
    for (let i = 1; i <= x; i++) {
        output += a;
    }
    console.log(output);
}
solve("abc", 3)

// function solve(str, n) {
//     let result = '';
//     for (let i = 0; i < n; i++) {
//     result += str;
//     }
//     return result;
//    }
//    solve("abc", 3)