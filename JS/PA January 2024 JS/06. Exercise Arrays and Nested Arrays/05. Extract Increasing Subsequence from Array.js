function solve(inputArray) {
    let outputArray = [];
    let highestNumber = -Infinity;
    for (let i = 0; i< inputArray.length; i++ ){
        if (inputArray[i] >= highestNumber){
            highestNumber = inputArray[i];
            outputArray.push(highestNumber);
        }
    }
    return outputArray;
}
solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
)