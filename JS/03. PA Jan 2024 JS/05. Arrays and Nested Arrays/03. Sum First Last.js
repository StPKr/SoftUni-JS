function solve(inputArray) {
    let firstElement = Number(inputArray.shift());
    let lastElement = Number(inputArray.pop());
    let output = firstElement + lastElement;
    return output;
}
solve(['20', '30', '40'])