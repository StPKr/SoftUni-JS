function solve(inputArray, n) {
    let outputArray = [];
    for (let i = 0; i < inputArray.length; i += n) {
        outputArray.push(inputArray[i]);
    }
    return outputArray;
}
solve(['5',
    '20',
    '31',
    '4',
    '20'],
    2
)