function solve(inputArray) {
    let outputArray = [];
    inputArray.sort((a, b) => a - b);
    while (inputArray.length > 0) {
        outputArray.push(inputArray.shift(), inputArray.pop());
    }
    return outputArray;
}
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])