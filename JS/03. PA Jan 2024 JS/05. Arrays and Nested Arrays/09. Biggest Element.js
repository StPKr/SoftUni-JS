function solve(matrix) {
    let outputArray = [];
    for (let el of matrix) {
        el.sort((a, b) => b - a);
        outputArray.push(el[0]);
    }
    outputArray.sort((a, b) => a - b);
    return outputArray.pop();
};
solve([[20, 50, 10],
[8, 33, 145]]
);