function solve(input) {
    let output = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] !== input[i - 1]) {
            output.push(input[i]);
        }
    }
    console.log(output.join(""));
}
solve('aaaaabbbbbcdddeeeedssaa')