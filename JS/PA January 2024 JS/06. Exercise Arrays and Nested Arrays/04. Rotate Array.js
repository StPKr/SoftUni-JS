function solve(inputArray, step) {
    for (let i = 0; i<step; i++){
        let el = inputArray.pop();
        inputArray.unshift(el);
    }
    console.log(inputArray.join(" "));
}
solve(['1',
    '2',
    '3',
    '4'],
    2
)