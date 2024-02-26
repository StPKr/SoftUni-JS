function solve(inputArray) {
    inputArray.sort((a, b) => a - b);
    let length = inputArray.length;
    if (length % 2 == 0) {
        return inputArray.slice(-length / 2);
    } else {
        return inputArray.slice(-(Math.ceil(length / 2)));
    }
};
solve([3, 19, 14, 7, 2, 19, 6]);