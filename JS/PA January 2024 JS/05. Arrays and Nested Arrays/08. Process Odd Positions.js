function solve(inputArray) {
    let outputArray = [];
    for (let i = 0; i < inputArray.length; i++) {
        if (i % 2 != 0) {
            outputArray.unshift(inputArray[i] * 2);
        }
    }
    return outputArray.join(" ");
};
solve([10, 15, 20, 25]);